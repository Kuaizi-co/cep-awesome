// Copyright 2012 Adobe Systems Incorporated.  All Rights reserved.

// IMPORTANT: This file MUST be written out from ESTK with the option to write the UTF-8
// signature turned ON (Edit > Preferences > Documents > UTF-8 Signature).  Otherwise,
// the script fails when run from Photoshop with "JavaScript code was missing" on
// non-English Windows systems.

//
// Extract CSS from the current layer selection and copy it to the clipboard.
//

/*
@@@BUILDINFO@@@ CopyCSSToClipboard.jsx 1.0.0.0
*/

$.localize = true;

// Constants for accessing PS event functionality.  In the interests of speed
// we're defining just the ones used here, rather than sucking in a general defs file.
const classApplication				= app.charIDToTypeID('capp');
const classDocument				= charIDToTypeID('Dcmn');
const classLayer					= app.charIDToTypeID('Lyr ');
const classLayerEffects            = app.charIDToTypeID('Lefx');
const classProperty					= app.charIDToTypeID('Prpr');
const enumTarget					= app.charIDToTypeID('Trgt');
const eventGet						= app.charIDToTypeID('getd');
const eventHide                    = app.charIDToTypeID('Hd  ');
const eventSelect			= app.charIDToTypeID('slct');
const eventShow                    = app.charIDToTypeID('Shw ');
const keyItemIndex				= app.charIDToTypeID ('ItmI');
const keyLayerID						= app.charIDToTypeID('LyrI');
const keyTarget						= app.charIDToTypeID('null');
const keyTextData					= app.charIDToTypeID('TxtD');
const typeNULL                     = app.charIDToTypeID('null');
const typeOrdinal					= app.charIDToTypeID('Ordn');

const ktextToClipboardStr			= app.stringIDToTypeID( "textToClipboard" );

const kprogressFinishStr		= app.stringIDToTypeID( "progressFinish" );
const kprogressStartStr			= app.stringIDToTypeID( "progressStart" );
const kprogressStartTaskStr		= app.stringIDToTypeID( "progressStartTask" );
const kprogressUpdateStr		= app.stringIDToTypeID( "progressUpdate" );
const kprogressTotalStr			= app.stringIDToTypeID( "progressTotal" );
const kprogressDoneStr			= app.stringIDToTypeID( "progressDone" );
const kcancelStr					= app.stringIDToTypeID( "cancel" );

const unitAngle		= app.charIDToTypeID('#Ang');
const unitDensity	= app.charIDToTypeID('#Rsl');
const unitDistance	= app.charIDToTypeID('#Rlt');
const unitNone		= app.charIDToTypeID('#Nne');
const unitPercent	= app.charIDToTypeID('#Prc');
const unitPixels	= app.charIDToTypeID('#Pxl');
const unitMillimeters= app.charIDToTypeID('#Mlm');
const unitPoints	= app.charIDToTypeID('#Pnt');

const enumRulerCm		= app.charIDToTypeID('RrCm');
const enumRulerInches	= app.charIDToTypeID('RrIn');
const enumRulerPercent	= app.charIDToTypeID('RrPr');
const enumRulerPicas	= app.charIDToTypeID('RrPi');
const enumRulerPixels	= app.charIDToTypeID('RrPx');
const enumRulerPoints	= app.charIDToTypeID('RrPt');

// SheetKind definitions from USheet.h
const kAnySheet				= 0;
const kPixelSheet			= 1;
const kAdjustmentSheet		= 2;
const kTextSheet			= 3;
const kVectorSheet			= 4;
const kSmartObjectSheet		= 5;
const kVideoSheet			= 6;
const kLayerGroupSheet		= 7;
const k3DSheet				= 8;
const kGradientSheet		= 9;
const kPatternSheet			= 10;
const kSolidColorSheet		= 11;
const kBackgroundSheet		= 12;
const kHiddenSectionBounder	= 13;

// Tables to convert Photoshop UnitTypes into CSS types
var unitIDToCSS = {};
unitIDToCSS[unitAngle]			= "deg";
unitIDToCSS[unitDensity]		= "DEN	";	// Not supported in CSS
unitIDToCSS[unitDistance]		= "DIST";	// Not supported in CSS
unitIDToCSS[unitNone]			= "";		// Not supported in CSS
unitIDToCSS[unitPercent]		= "%";
unitIDToCSS[unitPixels]			= "px";
unitIDToCSS[unitMillimeters]	= "mm";
unitIDToCSS[unitPoints]			= "pt";

unitIDToCSS[enumRulerCm]		= "cm";
unitIDToCSS[enumRulerInches]	= "in";
unitIDToCSS[enumRulerPercent]	= "%";
unitIDToCSS[enumRulerPicas]		= "pc";
unitIDToCSS[enumRulerPixels]	= "px";
unitIDToCSS[enumRulerPoints]	= "pt";

// Pixel units in Photoshop are hardwired to 72 DPI (points),
// regardless of the doc resolution.
var unitIDToPt = {};
unitIDToPt[unitPixels]			= 1;
unitIDToPt[enumRulerPixels]		= 1;
unitIDToPt[Units.PIXELS]		= 1;
unitIDToPt[unitPoints]			= 1;
unitIDToPt[enumRulerPoints]		= 1;
unitIDToPt[Units.POINTS]		= 1;
unitIDToPt[unitMillimeters]		= UnitValue(1, "mm").as('pt');
unitIDToPt[Units.MM]			= UnitValue(1, "mm").as('pt');
unitIDToPt[enumRulerCm]			= UnitValue(1, "cm").as('pt');
unitIDToPt[Units.CM]			= UnitValue(1, "cm").as('pt');
unitIDToPt[enumRulerInches]		= UnitValue(1, "in").as('pt');
unitIDToPt[Units.INCHES]		= UnitValue(1, "in").as('pt');
unitIDToPt[enumRulerPicas]		= UnitValue(1, "pc").as('pt');
unitIDToPt[Units.PICAS]			= UnitValue(1, "pc").as('pt');

// Fortunately, both CSS and the DOM unit values use the same
// unit abbreviations.
var DOMunitToCSS = {};
DOMunitToCSS[Units.CM]			= "cm";
DOMunitToCSS[Units.INCHES]		= "in";
DOMunitToCSS[Units.MM]			= "mm";
DOMunitToCSS[Units.PERCENT]		= "%";
DOMunitToCSS[Units.PICAS]		= "pc";
DOMunitToCSS[Units.PIXELS]		= "px";
DOMunitToCSS[Units.POINTS]		= "pt";
DOMunitToCSS[TypeUnits.MM]		= "mm";
DOMunitToCSS[TypeUnits.PIXELS]	= "px";
DOMunitToCSS[TypeUnits.POINTS]	= "pt";

// A sample object descriptor path looks like:
// AGMStrokeStyleInfo.strokeStyleContent.'Clr '.'Rd  '
// This converts either OSType or string IDs.
makeID = function( keyStr )
{
	if (keyStr[0] == "'")	// Keys with single quotes 'ABCD' are charIDs.
		return app.charIDToTypeID( eval(keyStr) );
	else
		return app.stringIDToTypeID( keyStr );
}

// Clean up some pretty noisy FP numbers...
function round1k( x ) { return Math.round( x * 1000 ) / 1000; }

// Strip off the unit string and return UnitValue as an actual number
function stripUnits( x ) { return Number( x.replace(/[^0-9.-]+/g, "") ); }

// Convert a "3.0pt" style string or number to a DOM UnitValue
function makeUnitVal( v )
{
	if (typeof v == "string")
		return UnitValue( stripUnits( v ), v.replace(/[0-9.-]+/g, "" ) );
	if (typeof v == "number")
		return UnitValue( v, DOMunitToCSS[app.preferences.rulerUnits] );
}

// Convert a pixel measurement into a UnitValue in rulerUnits
function pixelsToAppUnits( v )
{
	if (app.preferences.rulerUnits == Units.PIXELS)
		return UnitValue( v, "px" );
	else
	{
		// Divide by doc's DPI, convert to inch, then convert to ruler units.
		var appUnits = DOMunitToCSS[app.preferences.rulerUnits];
		return UnitValue( (UnitValue( v / app.activeDocument.resolution, "in" )).as(appUnits), appUnits );
	}
}

// Format a DOM UnitValue as a CSS string, using the rulerUnits units.
UnitValue.prototype.asCSS = function()
{
	var cssUnits = DOMunitToCSS[app.preferences.rulerUnits];
	return round1k( this.as(cssUnits) ) + cssUnits;
}

// Return the absolute value of a UnitValue as a UnitValue
UnitValue.prototype.abs = function()
{
	return UnitValue( Math.abs( this.value ), this.type );
}

// It turns out no matter what your PS units pref is set to, the DOM/PSEvent
// system happily hands you values in whatever whacky units it feels like.
// This normalizes the unit output to the ruler setting, for consistency in CSS.
// Note: This isn't a method because "desc" can either be an ActionDescriptor
// or an ActionList (in which case the "ID" is the index).
function getPSUnitValue( desc, ID )
{
	var srcUnitsID = desc.getUnitDoubleType( ID );
	
	if (srcUnitsID == unitNone)	// Um, unitless unitvalues are just...numbers.
		return round1k( desc.getUnitDoubleValue( ID ));
	
	// Angles and percentages are typically things like gradient parameters,
	// and should be left as-is.
	if ((srcUnitsID == unitAngle) || (srcUnitsID == unitPercent))
		return round1k(desc.getUnitDoubleValue( ID )) + unitIDToCSS[srcUnitsID];
		
	// Skip conversion if coming and going in pixels
	if (((srcUnitsID == unitPixels) || (srcUnitsID == enumRulerPixels))
		&& (app.preferences.rulerUnits == Units.PIXELS))
			return round1k(desc.getUnitDoubleValue( ID )) + "px";

	// Other units to pixels must first convert to points, 
	// then expanded by the actual doc resolution (measured in DPI)
	if (app.preferences.rulerUnits == Units.PIXELS)
		return round1k( desc.getUnitDoubleValue( ID ) * unitIDToPt[srcUnitsID] 
								* app.activeDocument.resolution / 72 ) + "px";
								
	var DOMunitStr = DOMunitToCSS[app.preferences.rulerUnits];

	// Pixels must be explictly converted to other units
	if ((srcUnitsID == unitPixels) || (srcUnitsID == enumRulerPixels))
		return pixelsToAppUnits( desc.getUnitDoubleValue( ID ) ).as(DOMunitStr) + DOMunitStr;
	
	// Otherwise, let Photoshop do generic conversion.
	return round1k( UnitValue( desc.getUnitDoubleValue( ID ), 
	                          unitIDToCSS[srcUnitsID] 
					      ).as( DOMunitStr ) ) + DOMunitStr;
}	

// Attempt decoding of reference types.  This generates an object with two keys, 
// "refclass" and "value".  So a channel reference looks like:
//    { refclass:'channel', value: 1 }
// Note the dump method compresses this to the text "{ channel: 1 }", but internally
// the form above is used.  This is because ExtendScript doesn't have a good method
// for enumerating keys.
function getReference( ref )
{
	var v;
	switch (ref.getForm())
	{
	case ReferenceFormType.CLASSTYPE:	v = typeIDToStringID( ref.getDesiredClass() ); break;
	case ReferenceFormType.ENUMERATED:	v = ref.getEnumeratedValue(); break;
	case ReferenceFormType.IDENTIFIER:		v = ref.getIdentifier(); break;
	case ReferenceFormType.INDEX:			v = ref.getIndex(); break;
	case ReferenceFormType.NAME:			v =ref.getName(); break;
	case ReferenceFormType.OFFSET:		v = ref.getOffset(); break;
	case ReferenceFormType.PROPERTY:	v = ref.getProperty(); break;
	default: v = null;
	}
	
	return { refclass: typeIDToStringID( ref.getDesiredClass() ), value: v };
}

// For non-recursive types, return the value.  Note unit types are
// returned as strings with the unit suffix, if you want just the number 
// you'll need to strip off the type and convert it to Number()
// Note: This isn't a method because "desc" can either be an ActionDescriptor
// or an ActionList (in which case the "ID" is the index).
function getFlatType( desc, ID )
{
	switch (desc.getType( ID ))
	{
	case DescValueType.BOOLEANTYPE:	return desc.getBoolean( ID );
	case DescValueType.STRINGTYPE:		return desc.getString( ID );
	case DescValueType.INTEGERTYPE:	return desc.getInteger( ID );
	case DescValueType.DOUBLETYPE:	return desc.getDouble( ID );
	case DescValueType.UNITDOUBLE:	return getPSUnitValue( desc, ID );
	case DescValueType.ENUMERATEDTYPE: return typeIDToStringID( desc.getEnumerationValue(ID) );
	case DescValueType.REFERENCETYPE: return getReference( desc.getReference( ID ) );
	default: return desc.getType(ID).toString();
	}
}

//////////////////////////////////// ActionDescriptor //////////////////////////////////////

ActionDescriptor.prototype.getFlatType = function( ID )
{
	return getFlatType( this, ID );
}

ActionList.prototype.getFlatType = function( index )
{
	// Share the ActionDesciptor code via duck typing
	return getFlatType( this, index );
}

// Traverse the object described the string in the current layer.
// Objects take the form of the nested descriptor IDs (the code above figures out the types on the fly).
// So 
//     AGMStrokeStyleInfo.strokeStyleContent.'Clr '.'Rd  '
// translates to doing a eventGet of stringIDToTypeID("AGMStrokeStyleInfo") on the current layer,
// then doing:
//   desc.getObject(s2ID("AGMStrokeStyleInfo"))
//		.getObject(s2ID("strokeStyleContent)).getObject(c2ID('Clr ')).getDouble('Rd  ');
// 
ActionDescriptor.prototype.getVal = function( keyList, firstListItemOnly  )
{
	if (typeof(keyList) == 'string')	// Make keyList an array if not already
		keyList = keyList.split('.');
		
	if (typeof( firstListItemOnly ) == "undefined")
		firstListItemOnly = true;

	// If there are no more keys to traverse, just return this object.
	if (keyList.length == 0)
		return this;
	
	keyStr = keyList.shift();
	keyID = makeID(keyStr);
	
	if (this.hasKey( keyID))
		switch (this.getType( keyID ))
		{
		case DescValueType.OBJECTTYPE:
			return this.getObjectValue( keyID ).getVal( keyList, firstListItemOnly );
		case DescValueType.LISTTYPE:
			var xx = this.getList( keyID );  // THIS IS CREEPY - original code below fails in random places on the same document.
			return /*this.getList( keyID )*/xx.getVal( keyList, firstListItemOnly );
		default: return this.getFlatType( keyID );
		}
	else
		return null;
}

// Traverse the actionList using the keyList (see below)
ActionList.prototype.getVal = function( keyList, firstListItemOnly )
{
	if (typeof(keyList) == 'string')	// Make keyList an array if not already
		keyList = keyList.split('.');
		
	if (typeof( firstListItemOnly ) == "undefined")
		firstListItemOnly = true;

	// Instead of ID, pass list item #.  Duck typing.
	if (firstListItemOnly)
		switch (this.getType( 0 ))
		{
		case DescValueType.OBJECTTYPE:
			return this.getObjectValue( 0 ).getVal( keyList, firstListItemOnly );
		case DescValueType.LISTTYPE:
			return this.getList( 0 ).getVal( keyList, firstListItemOnly );
		default: return this.getFlatType( 0 );	
		}
	else
	{
		var i, result = [];
		for (i = 0; i < this.count; ++i)
			switch (this.getType(i))
			{
			case DescValueType.OBJECTTYPE:
				result.push( this.getObjectValue( i ).getVal( keyList, firstListItemOnly  ));
				break;
			case DescValueType.LISTTYPE:
				result.push( this.getList( i ).getVal( keyList, firstListItemOnly ));
				break;
			default:
				result.push( this.getFlatType( i ) );
			}
		return result;
	}
}

ActionDescriptor.prototype.extractBounds = function()
{
	function getbnd(desc, key) { return makeUnitVal( desc.getVal( key ) ); }
	return [getbnd(this,"left"), getbnd(this,"top"), getbnd(this,"right"), getbnd(this,"bottom")];
}

ActionDescriptor.dumpValue = function( flatValue )
{
	if ((typeof flatValue == "object") && (typeof flatValue.refclass == "string"))
		return "{ " + flatValue.refclass + ": " + flatValue.value + " }";
	else
		return flatValue;
}

// Debugging - recursively walk a descriptor and dump out all of the keys
// Note we only dump stringIDs.  If you look in UActions.cpp:CInitialStringToIDEntry,
// there is a table converting most (all?) charIDs into stringIDs.
ActionDescriptor.prototype.dumpDesc = function( keyName )
{
	var i;
	if (typeof( keyName ) == "undefined")
		keyName = "";

	for (i = 0; i < this.count; ++i)
	{
		var key = this.getKey(i);
		if (this.getType( key ) == DescValueType.OBJECTTYPE)
			this.getObjectValue( key ).dumpDesc( keyName + "." + app.typeIDToStringID( key ) );
		else
		if (this.getType( key ) == DescValueType.LISTTYPE)
			this.getList( key ).dumpDesc( keyName + "." + app.typeIDToStringID( key ) );
		else
			$.writeln( keyName + "." + app.typeIDToStringID( key ) 
						 + ": " + ActionDescriptor.dumpValue( this.getFlatType( key ) ) );
	}
}

ActionList.prototype.dumpDesc = function( keyName )
{
	var i;
	if (typeof( keyName ) == "undefined")
		keyName = "";

	if (this.count == 0)
		$.writeln( keyName + " <empty list>" );
	else
	for (i = 0; i < this.count; ++i)
	{
		if ((this.getType(i) == DescValueType.OBJECTTYPE)
			|| (this.getType(i) == DescValueType.LISTTYPE))
			this.getObjectValue(i).dumpDesc( keyName + "[" + i + "]" );
		else
			$.writeln( keyName + "[" + i + "]:"
						+ ActionDescriptor.dumpValue( this.getFlatType( i ) ) );
	}
}

//////////////////////////////////// ProgressBar //////////////////////////////////////

// The following methods provide an interface to the Photoshop
// progress bar.  Note when invoked from scripts, the events
// these call modify the progress bar behavior so other tasks in
// Photoshop do NOT access the progress bar.  Thus, if the script
// invokes a task in PS that would cause a progess bar to appear, 
// using these events will supress it.  This needs to be done so fast
// PS events (which happen all the time) don't supress the progress 
// bar for scripts.

function ProgressBar()
{
	this.totalProgressSteps = 0;
	this.currentProgress = 0;
}

ProgressBar.prototype.startProgress = function( titleStr )
{
	// Note totalProgress steps is set -after- the progress bar is initialized,
	// so at least you're informed of the delay if computing the number
	// of steps takes a while.
	this.totalProgressSteps = 0;
	this.currentProgress = 0;
	var testStrDesc = new ActionDescriptor();

	testStrDesc.putString( keyTextData, titleStr );
	executeAction( kprogressStartStr, testStrDesc, DialogModes.NO );
}

// You MUST call this when finished, otherwise the progress bar won't
// function correctly for other tasks in Photoshop.
ProgressBar.prototype.finishProgress = function()
{
	if (this.totalProgressSteps == 0)	// Not started/already finished.
		return;
	var desc = new ActionDescriptor();
	executeAction( kprogressFinishStr, desc, DialogModes.NO );
	this.totalProgressSteps = 0;
	this.currentProgress = 0;
}

// You must set cssToClip.totalProgressSteps to the total number of
// steps to complete before calling this or nextProgress().
ProgressBar.prototype.updateProgress = function( done )
{
	if (this.totalProgressSteps == 0)
		alert("Update: Progress not started?")
		
	var resultDesc, desc = new ActionDescriptor()
	desc.putInteger( kprogressTotalStr, this.totalProgressSteps );
	desc.putInteger( kprogressDoneStr, done );
	resultDesc = executeAction( kprogressUpdateStr, desc, DialogModes.NO );
	var aborted = resultDesc.getBoolean( kcancelStr );
	if ((done == this.totalProgressSteps) || aborted)
		this.finishProgress();
	return aborted;
}

ProgressBar.prototype.nextProgress = function()
{
	this.currentProgress++;
	return this.updateProgress( this.currentProgress );
}

//////////////////////////////////// PSLayer //////////////////////////////////////

// The overhead for using Photoshop DOM layers is high, and can be
// really high if you need to switch the active layer.  This class provides
// a cache and accessor functions for layers bypassing the DOM.

function PSLayerInfo( layerIndex, isBG )
{
	this.index = layerIndex;
	this.boundsCache = null;
	this.descCache = {};
	
	if (isBG)
	{
		this.layerID = "BG";
		this.layerKind = kBackgroundSheet;
	}
	else
	{
		// See TLayerElement::Make() to learn how layers are located by PS events.
		var ref = new ActionReference();
		ref.putProperty( classProperty, keyLayerID );
		ref.putIndex( classLayer, layerIndex );
		this.layerID = executeActionGet( ref ).getVal("layerID");
		this.layerKind = this.getLayerAttr("layerKind");
		this.visible = this.getLayerAttr("visible");
	}
}

PSLayerInfo.layerIDToIndex = function( layerID )
{
	var ref = new ActionReference();
	ref.putProperty( classProperty, keyItemIndex );
	ref.putIdentifier( classLayer, layerID );
	return executeActionGet( ref ).getVal("itemIndex");
}

PSLayerInfo.prototype.makeLayerActive = function()
{
	var desc = new ActionDescriptor();
	var ref = new ActionReference();
	ref.putIdentifier( classLayer, this.layerID );
	desc.putReference( typeNULL, ref );
	executeAction( eventSelect, desc, DialogModes.NO );
}

PSLayerInfo.prototype.getLayerAttr = function( keyString, layerDesc )
{
	var layerDesc;
	var keyList = keyString.split('.');
	
	if ((typeof(layerDesc) == "undefined") || (layerDesc == null))
	{
		// Cache the IDs, because some (e.g., Text) take a while to get.
		if (typeof this.descCache[keyList[0]] == "undefined")
		{
			var ref = new ActionReference();
			ref.putProperty( classProperty, makeID(keyList[0]));
			ref.putIndex( classLayer, this.index );
			layerDesc = executeActionGet( ref );
			this.descCache[keyList[0]] = layerDesc;
		}
		else
			layerDesc = this.descCache[keyList[0]];
	}

	return layerDesc.getVal( keyList );
}

PSLayerInfo.prototype.getBounds = function( ignoreEffects )
{
	var boundsDesc;
	if (typeof ignoreEffects == "undefined")
		ignoreEffects = false;
	if (ignoreEffects)
		boundsDesc = this.getLayerAttr("boundsNoEffects");
	else
	{
		if (this.boundsCache)
			return this.boundsCache;
		boundsDesc = this.getLayerAttr("bounds");
	}

	var bounds = boundsDesc.extractBounds();

	if (! ignoreEffects)
		this.boundsCache = bounds;

	return bounds;
}

// Get a list of descriptors.  Returns NULL if one of them is unavailable.
PSLayerInfo.prototype.getLayerAttrList = function( keyString )
{
	var i, keyList = keyString.split('.');
	var descList = [];
	// First item from the layer
	var desc = this.getLayerAttr( keyList[0] );
	if (! desc)
		return null;
	descList.push( desc );
	if (keyList.length == 1)
		return descList;
	
	for (i = 1; i < keyList.length; ++i)
	{
		desc =  descList[i-1].getVal( keyList[i] );
		if (desc == null) return null;
		descList.push( desc );
	}
	return descList;
}

PSLayerInfo.prototype.descToColorList = function( colorDesc, colorPath )
{
	function roundColor( x ) { x = Math.round(x); return (x > 255) ? 255 : x; }

	var i, rgb = ["'Rd  '", "'Grn '","'Bl  '"];	// Note double quotes around single quotes
	var rgbTxt = [];
	// See if the color is really there
	colorDesc = this.getLayerAttr( colorPath, colorDesc );
	if (! colorDesc)
		return null;

	for (i in rgb)
		rgbTxt.push( roundColor(colorDesc.getVal( rgb[i] )) );
	return rgbTxt;
}

// If the desc has a 'Clr ' object, create CSS "rgb( rrr, ggg, bbb )" output from it.
PSLayerInfo.prototype.descToCSSColor = function( colorDesc, colorPath )
{
	var rgbTxt = this.descToColorList( colorDesc, colorPath );
	if (! rgbTxt)
		return null;
	return "rgb( " + rgbTxt.join(", ") + " )";
}

PSLayerInfo.prototype.descToRGBAColor = function( colorPath, opacity, colorDesc )
{
	var rgbTxt = this.descToColorList( colorDesc, colorPath );
	rgbTxt = rgbTxt ? rgbTxt : ["0","0","0"];
	
	if (! ((opacity > 0.0) && (opacity < 1.0)))
		opacity = opacity / 255.0;
		
	if (opacity == 1.0)
		return "rgb( " + rgbTxt.join( ", ") + " )";
	else
		return "rgba( " + rgbTxt.join( ", ") + ", " + round1k( opacity ) + " )";
}

function DropShadowInfo( xoff, yoff, dsDesc )
{
	this.xoff = xoff;
	this.yoff = yoff;
	this.dsDesc = dsDesc;
}

PSLayerInfo.getEffectOffset = function( fxDesc )
{
	var xoff, yoff, angle;

	// Assumes degrees, PS users aren't into radians.
	if (fxDesc.getVal( "useGlobalAngle" ))
		angle = stripUnits( cssToClip.getAppAttr( "globalAngle.globalLightingAngle" ) ) * (Math.PI/180.0);
	else
		angle = stripUnits( fxDesc.getVal( "localLightingAngle" ) ) * (Math.PI/180.0);
	// Photoshop describes the drop shadow in polar coordinates, while CSS uses cartesian coords.
	var distance = fxDesc.getVal( "distance" );
	var distUnits = distance.replace( /[\d.]+/g, "" );
	distance = stripUnits( distance );
	return [round1k(-Math.cos(angle) * distance) + distUnits,
				round1k(  Math.sin(angle) * distance) + distUnits];
}

PSLayerInfo.prototype.getDropShadowInfo = function( shadowType, boundsInfo )
{
	var lfxDesc = this.getLayerAttr( "layerEffects");
	var dsDesc = lfxDesc ? lfxDesc.getVal( "dropShadow" ) : null;
	var lfxOn = this.getLayerAttr( "layerFXVisible" );
	
	// If any of the other (non-drop-shadow) layer effects are on, then
	// flag this so we use the proper bounds calculation.
	if ((typeof shadowType != "undefined") && (typeof boundsInfo != "undefined")
		&& (shadowType == "box-shadow") && lfxDesc && lfxOn && !dsDesc)
	{
		var i, fxList = ["innerShadow", "outerGlow", "innerGlow", "bevelEmboss",
						    "chromeFX", "solidFill", "gradientFill"];
		for (i in fxList)
			if (lfxDesc.getVal( fxList[i] + ".enabled"))
			{
				boundsInfo.hasLayerEffect = true;
				break;
			}
	}

	// Bail out if effect turned off (no eyeball)
	if (! dsDesc || ! dsDesc.getVal( "enabled") || !lfxOn)
		return null;
	
	var xoff, yoff, angle;
	var fxScale = this.getLayerAttr( "layerEffects.scale" );
	if (fxScale)
		fxScale = stripUnits( fxScale ) / 100;	// Assume percent
	else
		fxScale = 1;

	var offset = PSLayerInfo.getEffectOffset( dsDesc );

	return new DropShadowInfo( offset[0], offset[1], dsDesc );
}

//
// Return text with substituted descriptors.  Note items delimited
// in $'s are substituted with values looked up from the layer data
// e.g.: 
//     border-width: $AGMStrokeStyleInfo.strokeStyleLineWidth$;"
// puts the stroke width into the output.  If the descriptor isn't
// found, no output is generated.
//
PSLayerInfo.prototype.replaceDescKey = function( cssText, baseDesc )
{
	// Locate any $parameters$ to be substituted.
	var i, subs = cssText.match(/[$]([^$]+)[$]/g);
	var replacementFailed = false;
	
	function testAndReplace( item )
	{
		if (item != null)
			cssText = cssText.replace(/[$]([^$]+)[$]/, item );
		else
			replacementFailed = true;
	}
		
	if (subs)
	{
		// Stupid JS regex leaves whole match in capture group!
		for (i = 0; i < subs.length; ++i)
			subs[i] = subs[i].split("$")[1];

		if (typeof(baseDesc) == "undefined")
			baseDesc = null;
		if (! subs)
			alert('Missing substitution text in CSS/SVG spec');
			
		for (i = 0; i < subs.length; ++i)
		{
			// Handle color as a special case
			if (subs[i].match(/'Clr '/))
				testAndReplace( this.descToCSSColor( baseDesc, subs[i] ) );
			else if (subs[i].match(/(^|[.])color$/))
				testAndReplace( this.descToCSSColor( baseDesc, subs[i] ) );
			else
				testAndReplace( this.getLayerAttr( subs[i], baseDesc ) );
		}
	}
	return [replacementFailed, cssText];
}

// If useLayerFX is false, then don't check it.  By default it's checked.
PSLayerInfo.prototype.gradientDesc = function( useLayerFX )
{
	if (typeof useLayerFX == "undefined")
		useLayerFX = true;
	var descList = this.getLayerAttr( "adjustment" );
	if (descList && descList.getVal("gradient"))
	{
		return descList;
	}
	else		// If there's no adjustment layer, see if we have one from layerFX...
	{
		if (useLayerFX)
			descList = this.getLayerAttr( "layerEffects.gradientFill" );
	}
	return descList;
}

function GradientInfo( gradDesc )
{
	this.angle = gradDesc.getVal("angle");
	this.opacity = gradDesc.getVal("opacity");
	this.opacity = this.opacity ? stripUnits(this.opacity)/100.0 : 1;
	if (this.angle == null)
		this.angle = "0deg";
	this.type = gradDesc.getVal("type");
	if ((this.type != "linear") && (this.type != "radial"))
		this.type = "linear";		// punt
	this.reverse = gradDesc.getVal("reverse") ? true : false;
}

// Extendscript operator overloading
GradientInfo.prototype["=="] = function( src )
{
	return (this.angle === src.angle)
			&& (this.type === src.type)
			&& (this.reverse === src.reverse);
}

PSLayerInfo.prototype.gradientInfo = function( useLayerFX )
{
	var gradDesc = this.gradientDesc( useLayerFX );
	// Make sure null is returned if we aren't using layerFX and there's no adj layer
	if (! useLayerFX && gradDesc && !gradDesc.getVal("gradient"))
		return null;
	return gradDesc ? new GradientInfo( gradDesc ) : null;
}

// Gradient stop object, made from PS gradient.colors/gradient.transparency descriptor
function GradientStop( desc, maxVal )
{
	this.r = 0; this.g = 0; this.b = 0; this.m = 100;
	this.location  = 0; this.midPoint = 50;
	if (typeof desc != "undefined")
	{
		var colorDesc = desc.getVal("color");
		if (colorDesc)
		{
			this.r = Math.round(colorDesc.getVal("red"));
			this.g = Math.round(colorDesc.getVal("green"));
			this.b = Math.round(colorDesc.getVal("blue"));
		}
		var opacity = desc.getVal("opacity");
		this.m = opacity ? stripUnits(opacity) : 100;
		this.location = (desc.getVal("location") / maxVal) * 100;
		this.midPoint = desc.getVal("midpoint");
	}
}

GradientStop.prototype.copy = function( matte, location )
{
	var result = new GradientStop();
	result.r = this.r;
	result.g = this.g;
	result.b = this.b;
	result.m = (typeof matte == "undefined") ? this.m : matte;
	result.location = (typeof location == "undefined")  ? this.location : location;
	result.midPoint = this.midPoint;
	return result;
}

GradientStop.prototype["=="] = function( src )
{
	return (this.r === src.r) && (this.g === src.g)
			&& (this.b === src.b) && (this.m === src.m)
			&& (this.location === src.location) 
			&& (this.midPoint === src.midPoint);
}

// Lerp ("linear interpolate")
GradientStop.lerp = function(t, a, b) 
{ return Math.round(t * (b - a) + a); }  // Same as (1-t)*a + t*b

GradientStop.prototype.interpolate = function( dest, t1 )
{
	var result = new GradientStop();
	result.r = GradientStop.lerp( t1, this.r, dest.r );
	result.g = GradientStop.lerp( t1, this.g, dest.g );
	result.b = GradientStop.lerp( t1, this.b, dest.b );
	result.m = GradientStop.lerp(t1, this.m, dest.m );
	return result;
}

GradientStop.prototype.colorString = function( noTransparency )
{
	if (typeof noTransparency == "undefined")
		noTransparency = false;
	var compList = (noTransparency || (this.m == 100))
							? [this.r, this.g, this.b] 
							: [this.r, this.g, this.b, this.m/100];
	var tag = (compList.length == 3) ? "rgb(" : "rgba(";
	return tag + compList.join(",") + ")";
}

GradientStop.prototype.toString = function()
{
	 return this.colorString() + " " + Math.round(this.location) + "%";
}

GradientStop.reverseStoplist = function( stopList )
{
	stopList.reverse();
	// Fix locations to ascending order
	for (var s in stopList)
		stopList[s].location = 100 - stopList[s].location;
	return stopList;
}

GradientStop.dumpStops = function( stopList )
{
	for (var i in stopList)
		$.writeln( stopList[i] );
}

// Gradient format: linear-gradient( <angle>, rgb( rr, gg, bb ) xx%, rgb( rr, gg, bb ), yy%, ... );
PSLayerInfo.prototype.gradientColorStops = function()
{
	// Create local representation of PS stops
	function makeStopList( descList, maxVal )
	{
		var s, stopList = [];
		for (s in descList)
			stopList.push( new GradientStop( descList[s], maxVal ) );
		
		// Replace Photoshop "midpoints" with complete new stops
		for (s = 1; s < stopList.length; ++s)
		{
			if (stopList[s].midPoint != 50)
			{
				var newStop = stopList[s-1].interpolate( stopList[s], 0.5 );
				newStop.location = GradientStop.lerp( stopList[s].midPoint/100.0, 
																  stopList[s-1].location,
																  stopList[s].location );
				stopList.splice( s, 0, newStop );
				s += 1;	// Skip new stop
			}
		}
		return stopList;
	}

	var gdesc = this.gradientDesc();
	var psGrad = gdesc ? gdesc.getVal("gradient") : null;
	if (psGrad)
	{
//		var maxVal = psGrad.getVal( "interpolation" );	// I swear it used to find this.
		var maxVal = 4096;

		var c, colorStops = makeStopList( psGrad.getVal( "colors", false ), maxVal );			
		var m, matteStops = makeStopList( psGrad.getVal( "transparency", false ), maxVal );
		
		// Check to see if any matte stops are active
		var matteActive = false;
		for (m in matteStops)
			if (! matteActive)
				matteActive = (matteStops[m].m != 100);
				
		if (matteActive)
		{
			// First, copy matte values from matching matte stops to the color stops
			c = 0;
			for (m in matteStops)
			{
				while ((c < colorStops.length) && (colorStops[c].location < matteStops[m].location))
					c++;
				if ((c < colorStops.length) && (colorStops[c].location == matteStops[m].location))
					colorStops[c].m = matteStops[m].m;
			}
			// Now weave the lists together
			m = 0; c = 0;
			while (c < colorStops.length)
			{
				// Must adjust color stop's matte to interpolate matteStops
				if (colorStops[c].location < matteStops[m].location)
				{
					var t = (colorStops[c].location - matteStops[m-1].location) 
							/ (matteStops[m].location - matteStops[m-1].location);
					colorStops[c].m = GradientStop.lerp( t, matteStops[m-1].m, matteStops[m].m );
					c++;
				}
				// Must add matte stop to color stop list
				if (matteStops[m].location < colorStops[c].location)
				{
					var t, newStop;
					// If matte stops exist in front of the 1st color stop
					if (c < 1)
					{
						newStop = colorStops[0].copy( matteStops[m].m, matteStops[m].location );
					}
					else
					{
						t = (matteStops[m].location - colorStops[c-1].location) 
								/ (colorStops[c].location - colorStops[c-1].location);
						newStop = colorStops[c-1].interpolate( colorStops[c], t );
						newStop.m = matteStops[m].m;
						newStop.location = matteStops[m].location;
					}
					colorStops.splice( c, 0, newStop );
					m++;
					c++;	// Step past newly added color stop
				}
				// Same, was fixed above
				if (matteStops[m].location == colorStops[c].location)
				{
					m++; c++;
				}
			}
			// If any matte stops remain, add those too.
			while (m < matteStops.length)
			{
				var newStop = colorStops[c-1].copy( matteStops[m].m, matteStops[m].location );
				colorStops.push( newStop );
				m++;
			}
		}

		return colorStops;
	}
	else
		return null;
}

//////////////////////////////////// CSSToClipboard //////////////////////////////////////

// Base object to scope the rest of the functions in.
function CSSToClipboard()
{
	// Constructor moved to reset(), so it can be called via a script.
}

cssToClip = new CSSToClipboard();

cssToClip.reset = function()
{
	this.pluginName = "CSSToClipboard";
	this.cssText = "";
	this.indentSpaces = "";
	this.browserTags = ["-moz-", "-webkit-", "-ms-"];
	this.currentLayer = null;
	this.currentPSLayerInfo = null;

	this.groupLevel = 0;
	this.currentLeft = 0;
	this.currentTop = 0;
	
	this.groupProgress = new ProgressBar();
	
	this.aborted = false;
	
	// Work-around for screwy layer indexing.
	this.documentIndexOffset = 0;
	try {
		// This throws an error if there's no background
		if (app.activeDocument.backgroundLayer)
			this.documentIndexOffset = 1;
	}
	catch (err)
	{}
}

cssToClip.reset();

// Call Photoshop to copy text to the system clipboard
cssToClip.copyTextToClipboard = function( txt )
{
	var testStrDesc = new ActionDescriptor();

	testStrDesc.putString( keyTextData, txt );
	executeAction( ktextToClipboardStr, testStrDesc, DialogModes.NO );
}

cssToClip.copyCSSToClipboard = function()
{
	this.copyTextToClipboard( this.cssText );
}

cssToClip.isCSSLayerKind = function( layerKind )
{
	if (typeof layerKind == "undefined")
		layerKind = this.currentPSLayerInfo.layerKind;

	switch (layerKind)
	{
	case kVectorSheet:	return true;
	case kTextSheet:		return true;
	case kPixelSheet:		return true;
	case kLayerGroupSheet:  return true;
	}
	return false
}

// Listen carefully:  When the Photoshop DOM *reports an index to you*, it uses one based
// indexing.  When *you request* layer info with ref.putIndex( classLayer, index ),
// it uses *zero* based indexing.  The DOM should probably stick to the zero-based
// index, so the adjustment is made here.
// Oh god, it gets worse...the indexing is zero based if there's no background layer.
cssToClip.setCurrentLayer = function( layer )
{
	this.currentLayer = layer;
	this.currentPSLayerInfo = new PSLayerInfo(layer.itemIndex - this.documentIndexOffset, layer.isBackgroundLayer);
}

cssToClip.getCurrentLayer = function()
{
	if (! this.currentLayer)
		this.setCurrentLayer( app.activeDocument.activeLayer );
	return this.currentLayer;
}

// These shims connect the original cssToClip with the new PSLayerInfo object.
cssToClip.getLayerAttr = function( keyString, layerDesc )
{ return this.currentPSLayerInfo.getLayerAttr( keyString, layerDesc ); }

cssToClip.getLayerBounds = function( ignoreEffects )
{ return this.currentPSLayerInfo.getBounds( ignoreEffects ); }

cssToClip.descToCSSColor = function( colorDesc, colorPath )
{ return this.currentPSLayerInfo.descToCSSColor( colorDesc, colorPath ); }

// Like getLayerAttr, but returns an app attribute.  No caching.
cssToClip.getPSAttr = function( keyStr, objectClass )
{
	var keyList = keyStr.split('.');
	var ref = new ActionReference();
	ref.putProperty( classProperty, makeID( keyList[0] ) );
	ref.putEnumerated( objectClass, typeOrdinal, enumTarget );
	
	var resultDesc = executeActionGet( ref );
	
	return resultDesc.getVal( keyList );
}

cssToClip.getAppAttr = function( keyStr )
{ return this.getPSAttr( keyStr, classApplication ); }

cssToClip.getDocAttr = function( keyStr )
{ return this.getPSAttr( keyStr, classDocument ); }

cssToClip.pushIndent = function()
{
	this.indentSpaces += "  ";
}

cssToClip.popIndent = function()
{
	if (this.indentSpaces.length < 2)
		alert("Error - indent underflow");
	this.indentSpaces = this.indentSpaces.slice(0,-2);
}

cssToClip.addText = function( text, browserTagList  )
{
	var i;
	if (typeof browserTagList == "undefined")
		browserTagList = null;
	
	if (browserTagList)
		for (i in browserTagList)
			this.cssText += (this.indentSpaces + browserTagList[i] + text + "\n");
	else
		this.cssText += (this.indentSpaces + text + "\n");
//	$.writeln(text);	// debug
}

cssToClip.addStyleLine = function( cssText, baseDesc, browserTagList )
{
	var result = this.currentPSLayerInfo.replaceDescKey( cssText, baseDesc );
	var replacementFailed = result[0];
	cssText = result[1];
	
	if (! replacementFailed)
		this.addText( cssText, browserTagList );

	return !replacementFailed;
}

// Text items need to try both the base and the default descriptors
cssToClip.addStyleLine2 = function( cssText, baseDesc, backupDesc )
{
	if (! this.addStyleLine( cssText, baseDesc ) && backupDesc)
		this.addStyleLine( cssText, backupDesc );
}

// Checks the geometry, and returns "ellipse", "roundrect" 
// or "null" (if the points don't match round rect/ellipse pattern).
// NOTE: All of this should go away when the DAG metadata is available
// to just tell you what the radius is.
// NOTE2: The path for a shape is ONLY visible when that shape is the active
// layer.  So you must set the shape in question to be the active layer before
// calling this function.  This really slows down the script, unfortunately.
cssToClip.extractShapeGeometry = function()
{
	// We accept a shape as conforming if the coords are within "magnitude"
	// of the overall size.
	function near(a,b, magnitude)
	{
		a = Math.abs(a);  b = Math.abs(b);
		return Math.abs(a-b) < (Math.max(a,b)/magnitude);
	}
	function sameCoord( pathPt, xy )
	{
		return (pathPt.rightDirection[xy] == pathPt.anchor[xy])
				&& (pathPt.leftDirection[xy] == pathPt.anchor[xy]);
	}

	function dumpPts( pts )	// For debug viewing in Matlab
	{
		function pt2str( pt ) { return "[" + Math.floor(pt[0]) + ", " + Math.floor(pt[1]) + "]"; }
		var i;
		for (i = 0; i < pts.length; ++i)
			$.writeln( "[" + [pt2str(pts[i].rightDirection), pt2str(pts[i].anchor), pt2str(pts[i].leftDirection)].join( "; " ) + "];" );
	}

	// Control point location for Bezier arcs.
	// See problem 1, http://www.graphics.stanford.edu/courses/cs248-98-fall/Final/q1.html
	const kEllipseDist = 4*(Math.sqrt(2) - 1)/3;

	if (app.activeDocument.pathItems.length == 0)
		return null;	// No path
	
	// Grab the path name from the layer name (it's auto-generated)
	var i, pathName = localize("$$$/ShapeLayerPathName=^0 Shape Path");
	var path = app.activeDocument.pathItems[pathName.replace(/[^]0/,app.activeDocument.activeLayer.name)];
	
	// If we have a plausible path, walk the geometry and see if it matches a shape we know about.
	if ((path.kind == PathKind.VECTORMASK) && (path.subPathItems.length == 1))
	{
		var subPath = path.subPathItems[0];
		if (subPath.closed && (subPath.pathPoints.length == 4))	// Ellipse?
		{
			function next(index) { return (index + 1) % 4; }
			function prev(index) { return (index > 0) ? (index-1) : 3; }
			var pts = subPath.pathPoints;
			
			// dumpPts( pts );
			for (i = 0; i < 4; ++i)
			{
				var xy = i % 2;	// 0 = x, 1 = y, alternates as we traverse the oval sides
				if (! sameCoord( pts[i], 1-xy )) return null;
				if (! near( pts[i].leftDirection[xy] - pts[i].anchor[xy], 
							 (pts[next(i)].anchor[xy] - pts[i].anchor[xy]) * kEllipseDist, 100)) return null;
				if (! near( pts[i].anchor[xy] - pts[i].rightDirection[xy],
							   (pts[prev(i)].anchor[xy] - pts[i].anchor[xy]) * kEllipseDist, 100)) return null;
			}
			// Return the X,Y radius
			return [pts[1].anchor[0] - pts[0].anchor[0], pts[1].anchor[1] - pts[0].anchor[1], "ellipse"];
		}
		else if (subPath.closed && (subPath.pathPoints.length == 8))	// RoundRect?
		{
			var pts = subPath.pathPoints;
			//dumpPts( pts );
			function sameCoord2( pt, xy, io )
			{
				return (sameCoord( pt, xy ) 
							&& ( ((io == 0) && (pt.rightDirection[1-xy] == pt.anchor[1-xy]))
									|| ((io == 1) && (pt.leftDirection[1-xy] == pt.anchor[1-xy])) ) );
			}
			function next(index) { return (index + 1) % 8; }
			function prev(index) { return (index > 0) ? (index-1) : 7; }
			function arm( pt, xy, io ) { return (io == 0) ? pt.rightDirection[xy] : pt.leftDirection[xy]; }
			
			for (i = 0; i < 8; ++i)
			{
				var io = i % 2;			// Incoming / Outgoing vector on the anchor point
				var hv = (i >> 1) % 2;	// Horizontal / Vertical side of the round rect
				if (! sameCoord2( pts[i], 1-hv, 1-io )) return null;
				if (io == 0) 
				{
					if( ! near( arm( pts[i], hv, io ) - pts[i].anchor[hv], 
								   (pts[prev(i)].anchor[hv] - pts[i].anchor[hv])*kEllipseDist, 10 ) )
					return null;
				}
				else
				{
					if( ! near( arm( pts[i], hv, io ) - pts[i].anchor[hv], 
								   (pts[next(i)].anchor[hv] - pts[i].anchor[hv])*kEllipseDist, 10 ) )
					return null;
				}
			}
			return [pts[2].anchor[0] - pts[1].anchor[0], pts[2].anchor[1] - pts[1].anchor[1], "round rect"];
		}
	}
}

// Gradient format: linear-gradient( <angle>, rgb( rr, gg, bb ) xx%, rgb( rr, gg, bb ), yy%, ... );
cssToClip.gradientToCSS = function()
{
	var colorStops = this.currentPSLayerInfo.gradientColorStops();
	var gradInfo = this.currentPSLayerInfo.gradientInfo();

	if (colorStops && gradInfo)
	{
		if (gradInfo.reverse)
			colorStops = GradientStop.reverseStoplist( colorStops );

		if (gradInfo.type == "linear")
			return gradInfo.type + "-gradient( " + gradInfo.angle + ", " + colorStops.join(", ") + ");";
		// Radial - right now gradient is always centered (50% 50%)
		if (gradInfo.type == "radial")
			return gradInfo.type + "-gradient( 50% 50%, circle closest-side, " + colorStops.join(", ") + ");";
	}
	else
		return null;
}

// Translate Photoshop drop shadow.  May need work with layerEffects.scale,
// and need to figure out what's up with the global angle.
cssToClip.addDropShadow = function( shadowType, boundsInfo )
{
	var dsInfo = this.currentPSLayerInfo.getDropShadowInfo( shadowType, boundsInfo );
	if (! dsInfo)
		return;

	// You say CSS was designed by committee?  Really?
	if (shadowType == "box-shadow")
	{
		this.addStyleLine(shadowType + ": "+dsInfo.xoff+" " + dsInfo.yoff
								+" $blur$ $chokeMatte$ $color$;", dsInfo.dsDesc );
		boundsInfo.hasLayerEffect = true;
	}
	if (shadowType == "text-shadow")
		this.addStyleLine(shadowType + ": " + dsInfo.xoff + " " + dsInfo.yoff 
								+ " $blur$ $color$;", dsInfo.dsDesc );
}

cssToClip.addOpacity = function( opacity )
{
	opacity = (typeof opacity == "number") ? opacity : this.getLayerAttr("opacity");
	if ((typeof opacity == "number") && (opacity < 255))
		this.addText( "opacity: " + round1k(opacity / 255) + ";" );
}

cssToClip.addRGBAColor = function( param, opacity, colorDesc )
{
	this.addText( param + ': ' + this.currentPSLayerInfo.descToRGBAColor( "color", opacity, colorDesc ) +';' );
}

function BoundsParameters()
{
	this.borderWidth = 0;
	this.textOffset = null;
	this.hasLayerEffect = false;
	this.textLine = false;
	this.rawTextBounds = null;
}

cssToClip.addObjectBounds = function( boundsInfo )
{
	var curLayer = this.getCurrentLayer();
		
	var bounds = this.getLayerBounds( boundsInfo.hasLayerEffect );
	
	if (boundsInfo.rawTextBounds)
	{
		// If the text has been transformed, rawTextBounds is set.  We need
		// to set the CSS bounds to reflect the *un*transformed text, placed about
		// the center of the transformed text's bounding box.
		var cenx = bounds[0] + (bounds[2] - bounds[0])/2;
		var ceny = bounds[1] + (bounds[3] - bounds[1])/2;
		var txtWidth = boundsInfo.rawTextBounds[2] - boundsInfo.rawTextBounds[0];
		var txtHeight= boundsInfo.rawTextBounds[3] - boundsInfo.rawTextBounds[1];
		bounds[0] = cenx - (txtWidth/2);
		bounds[1] = ceny - (txtHeight/2);
		bounds[2] = bounds[0] + txtWidth;
		bounds[3] = bounds[1] + txtHeight;
	}

	if ((this.groupLevel == 0) && boundsInfo.textOffset)
	{
		this.addText("position: absolute;" );
		this.addText("left: " + (bounds[0] + boundsInfo.textOffset[0]).asCSS() +";");
		this.addText("top: " + (bounds[1] + boundsInfo.textOffset[1]).asCSS() + ";");
	}
	else
	{
		// Go through the DOM to ensure we're working in Pixels
		var left = bounds[0];
		var top = bounds[1];
		
		if (boundsInfo.textOffset == null)
			boundsInfo.textOffset = [0, 0];

		// Intuitively you'd think this would be "relative", but you'd be wrong.
		// "Absolute" coordinates are relative to the container.
		this.addText("position: absolute;");
		this.addText("left: " + (left 
										- this.currentLeft
										+ boundsInfo.textOffset[0]).asCSS() +";");
		this.addText("top: " + (top
										- this.currentTop
										+ boundsInfo.textOffset[1]).asCSS() + ";");
	}

	// Go through the DOM to ensure we're working in Pixels
	var width = bounds[2] - bounds[0];
	var height = bounds[3] - bounds[1];

	// In CSS, the border width is added to the -outside- of the bounds.  In order to match
	// the default behavior in PS, we adjust it here.
	if (boundsInfo.borderWidth > 0)
	{
		width -=  2*boundsInfo.borderWidth;
		height -= 2*boundsInfo.borderWidth;
	}
	// Don't generate a width for "line" (paint) style text.
	if (! boundsInfo.textLine)
	{
		this.addText( "width: " + ((width < 0) ? 0 : width.asCSS()) + ";");
		this.addText( "height: " + ((height < 0) ? 0 : height.asCSS()) + ";");
	}
}

// Only called for shape (vector) layers.
cssToClip.getShapeLayerCSS = function( boundsInfo )
{
	// If we have AGM stroke style info, generate that.
	var agmDesc = this.getLayerAttr( "AGMStrokeStyleInfo" );
	boundsInfo.borderWidth = 0;
	var opacity = this.getLayerAttr("opacity" );
	
	if (agmDesc && agmDesc.getVal( "strokeEnabled"))
	{
		// Assumes pixels!
		boundsInfo.borderWidth = makeUnitVal(agmDesc.getVal( "strokeStyleLineWidth" ));
		this.addStyleLine( "border-width: $strokeStyleLineWidth$;", agmDesc );
		this.addStyleLine( "border-color: $strokeStyleContent.color$;", agmDesc );
		var cap = agmDesc.getVal( "strokeStyleLineCapType" );
		var dashes = agmDesc.getVal( "strokeStyleLineDashSet", false );

		if (dashes && dashes.length > 0)
		{
			if ((cap == "strokeStyleRoundCap") && (dashes[0] == 0))
				this.addStyleLine("border-style: dotted;" );
			if ((cap == "strokeStyleButtCap") && (dashes[0] > 0))
				this.addStyleLine("border-style: dashed;");
		}
		else
			this.addStyleLine("border-style: solid;");
	}

	// Check for layerFX style borders
	var fxDesc = this.getLayerAttr( "layerEffects.frameFX" );
	if (fxDesc && fxDesc.getVal( "enabled" ) 
		&& (fxDesc.getVal( "paintType" ) == "solidColor"))
	{
		opacity = (stripUnits( fxDesc.getVal("opacity") ) / 100) * opacity;

		boundsInfo.borderWidth = makeUnitVal(fxDesc.getVal( "size" )); // Assumes pixels!
		this.addStyleLine("border-style: solid;");
		this.addStyleLine("border-width: $size$;", fxDesc );
		this.addStyleLine("border-color: $color$;", fxDesc );
	}

	// The Path for a shape *only* becomes visible when that shape is the active layer,
	// so we need to make the current layer active before we extract geometry information.
	// Yes, I know this is painfully slow, modifying the DOM or PS to behave otherwise is hard.
	var saveLayer = app.activeDocument.activeLayer;
	app.activeDocument.activeLayer = this.getCurrentLayer();
	var shapeGeom = this.extractShapeGeometry();
	app.activeDocument.activeLayer = saveLayer;
	
	// We assume path coordinates are in pixels, they're not stored as UnitValues in the DOM.
	if (shapeGeom)
	{
		// In CSS, the borderRadius needs to be added to the borderWidth, otherwise ovals
		// turn into rounded rects.
		if (shapeGeom[2] == "ellipse")
			this.addText("border-radius: 50%;");
		else
		{
			var radius =  Math.round((shapeGeom[0]+shapeGeom[1])/2);
			// Note: path geometry is -always- in points ... unless the ruler type is Pixels.
			radius = (app.preferences.rulerUnits == Units.PIXELS)
					? radius = pixelsToAppUnits( radius )
					: radius = UnitValue( radius, "pt" );

			cssToClip.addText( "border-radius: " + radius.asCSS() +";");
		}
	}

	var i, gradientCSS = this.gradientToCSS();
	if (!agmDesc 	// If AGM object, only fill if explictly turned on
		|| (agmDesc && agmDesc.getVal("fillEnabled")))
	{
		if (gradientCSS)
		{
			for (i in this.browserTags)
				this.addText( "background-image: " + this.browserTags[i] + gradientCSS);
		}
		else
		{
			var fillOpacity = this.getLayerAttr("fillOpacity") / 255.0;
			if (fillOpacity < 1.0)
				this.addRGBAColor( "background-color", fillOpacity, this.getLayerAttr( "adjustment" ));
			else
				this.addStyleLine( "background-color: $adjustment.color$;" );
		}
	}
	this.addOpacity( opacity );
			
	this.addDropShadow( "box-shadow", boundsInfo );
}

// Only called for text layers.
cssToClip.getTextLayerCSS = function( boundsInfo )
{
	function isStyleOn( textDesc, defTextDesc, styleKey, onText )
	{
		var styleText = textDesc.getVal( styleKey );
		if (! styleText && defTextDesc)
			styleText = defTextDesc.getVal( styleKey );
		return (styleText && (styleText.search( onText ) >= 0));
	}

	var cssUnits = DOMunitToCSS[app.preferences.rulerUnits];
	boundsInfo.textOffset = [UnitValue( 0, cssUnits ), UnitValue( 0, cssUnits )];
	var leadingOffset = 0;
	
	var opacity = (this.getLayerAttr("opacity")/255.0) * (this.getLayerAttr("fillOpacity")/255.0);

	var textDesc = this.getLayerAttr( "textKey.textStyleRange.textStyle" );
	var defaultDesc = this.getLayerAttr( "textKey.paragraphStyleRange.paragraphStyle.defaultStyle" );
	if (! defaultDesc)
		defaultDesc = this.getLayerAttr("textKey.textStyleRange.textStyle.baseParentStyle");
	if (textDesc)
	{
		this.addStyleLine2( "font-size: $size$;", textDesc, defaultDesc );
		this.addStyleLine2( 'font-family: "$fontName$";', textDesc, defaultDesc );
		if (opacity == 1.0)
			this.addStyleLine2( "color: $color$;", textDesc, defaultDesc );	// Color can just default to black
		else
		{
			if (textDesc.getVal("color"))
				this.addRGBAColor( "color" , opacity, textDesc );
			else
				this.addRGBAColor( "color", opacity, defaultDesc );
		}
		
		// This table is: [PS Style event key ; PS event value keyword to search for ; corresponding CSS]
		var styleTable = [["fontStyleName",		"Bold",				"font-weight: bold;"],
								["fontStyleName",		"Italic",				"font-style: italic;"],
								["strikethrough",		"StrikethroughOn",	"text-decoration: line-through;"],
								["underline",				"underlineOn",	 "text-decoration: underline;"],
								 // Need RE, otherwise conflicts w/"smallCaps"
								["fontCaps",				/^allCaps/,		 	"text-transform: uppercase;"], 
								["fontCaps",				"smallCaps",		 "font-variant: small-caps;"],
								// These should probably also modify the font size?
								["baseline",				"superScript",	 	"vertical-align: super;"],
								["baseline",				"subScript",			"vertical-align: sub;"]];

		var i;
		for (i in styleTable)
			if (isStyleOn( textDesc, defaultDesc, styleTable[i][0], styleTable[i][1] ))
				this.addText( styleTable[i][2] );

		// Synthesize the line-height from the "leading" (line spacing) / font-size
		var fontSize = textDesc.getVal( "size" );
		if (! fontSize && defaultDesc) fontSize = defaultDesc.getVal( "size" );
		var fontLeading = textDesc.getVal( "leading" );
		if (fontSize && fontLeading)
		{
			// Strip off the units; this keeps it as a relative measure.
			fontSize = stripUnits( fontSize );
			leadingOffset = fontLeading;
			this.addText( "line-height: " + round1k(stripUnits(fontLeading) / fontSize) + ";" );
		}
				
		var pgraphStyle = this.getLayerAttr( "textKey.paragraphStyleRange.paragraphStyle" );
		if (pgraphStyle)
		{
			this.addStyleLine( "text-align: $align$;", pgraphStyle );
			var lineIndent = pgraphStyle.getVal( "firstLineIndent" );
			if (lineIndent && (stripUnits(lineIndent) != 0))
				this.addStyleLine( "text-indent: $firstLineIndent$;", pgraphStyle );
			// PS startIndent for whole 'graph, CSS is?
		}
	
		// Update boundsInfo
		this.addDropShadow( "text-shadow", boundsInfo );
		// text-indent text-align letter-spacing line-height
		
		var baseDesc = this.getLayerAttr( "textKey" );
		function txtBnd( id ) { return makeUnitVal(baseDesc.getVal(id)); }
		boundsInfo.textOffset = [txtBnd("bounds.left") - txtBnd("boundingBox.left"),
										txtBnd("bounds.top") - txtBnd("boundingBox.top") + makeUnitVal(leadingOffset)];
		if (this.getLayerAttr( "textKey.textShape.char" ) == "paint")
			boundsInfo.textLine = true;
	
		// Matrix: [xx xy 0; yx yy 0; tx ty 1], if not identiy, then add it.
		var textXform = this.getLayerAttr( "textKey.transform" );
		var vScale = textDesc.getVal("verticalScale");
		var hScale = textDesc.getVal("horizontalScale");
		vScale = (typeof vScale == "number") ? round1k(vScale/100.0) : 1;
		hScale = (typeof hScale == "number") ? round1k(hScale/100.0) : 1;
		if (textXform)
		{
			function xfm(key) { return textXform.getVal( key ); }

			var xformData = this.currentPSLayerInfo.replaceDescKey("[$xx$, $xy$, $yx$, $yy$, $tx$, $ty$]", textXform);
			var m = eval(xformData[1]);
			m[0] *= hScale;
			m[3] *= vScale;
			if (! ((m[0] == 1) && (m[1] == 0)
			   && (m[2] == 0) && (m[3] == 1)
			   && (m[4] == 0) && (m[5] == 0)))
			{
				boundsInfo.rawTextBounds = baseDesc.getVal("boundingBox").extractBounds();
				this.addText("transform: matrix( " + m.join(",") + ");", this.browserTags );
			}
		}
		else 
		{
			// Case for text not otherwise transformed.
			if ((vScale != 1.0) || (hScale != 1.0))
			{
				boundsInfo.rawTextBounds = baseDesc.getVal("boundingBox").extractBounds();
				this.addText( "transform: scale(" + hScale + ", " + vScale + ");", this.browserTags );
			}
		}
	}
}

cssToClip.getPixelLayerCSS = function()
{
	var name = this.getLayerAttr( "name" );
	// If suffix isn't present, add one.
	if (name.search( /[.]((\w){3,4})$/ ) < 0)
		this.addStyleLine( 'background-image: url("$name$.png");');
	else
		this.addStyleLine( 'background-image: url("$name$");');
	var fillOpacity = this.getLayerAttr("fillOpacity")/255.0;
	this.addOpacity( this.getLayerAttr("opacity") * fillOpacity );
}

// Recursively count the number of layers in the group, for progress bar
cssToClip.countGroupLayers = function( layerGroup )
{	
	var i, j, count = 1;	// Count yourself
	const supportedLayers = [LayerKind.NORMAL, LayerKind.TEXT,
								LayerKind.SOLIDFILL, LayerKind.GRADIENTFILL,
								LayerKind.PATTERNFILL];
	for (i = 0; i < layerGroup.layers.length; ++i)
	{
		if (layerGroup.layers[i].visible)
		{
			if (layerGroup.layers[i].typename == "LayerSet")
				count += this.countGroupLayers( layerGroup.layers[i] );
			else
			{
				// Only count layer types we support
				var layerKind = layerGroup.layers[i].kind;
				for (j in supportedLayers)
					if (layerKind == supportedLayers[j])
					{
						count++;
						break;
					}
			}
		}
	}
	return count;
}

// The CSS for nested DIVs (essentially; what's going on with groups) 
// are NOT specified hierarchically.  So we need to finish this group's
// output, then create the CSS for everything in it.
cssToClip.pushGroupLevel = function()
{
	if (this.groupLevel == 0)
	{
		this.groupProgress.startProgress(localize("$$$/Photoshop/Progress/CopyCSSProgress=Copying CSS...") );
		this.groupProgress.totalProgressSteps = this.countGroupLayers( this.getCurrentLayer() );
	}
	this.groupLevel++;
}

cssToClip.popGroupLevel = function()
{
	var i, saveGroupLayer = this.getCurrentLayer();
	var saveLeft = this.currentLeft, saveTop = this.currentTop;
	var bounds = this.getLayerBounds();
	
	this.currentLeft = bounds[0];
	this.currentTop = bounds[1];
	var notAborted = true;

	for (i = 0; ((i < saveGroupLayer.layers.length) && notAborted); ++i)
	{
		this.setCurrentLayer( saveGroupLayer.layers[i] );
		if (this.isCSSLayerKind())
			notAborted = this.gatherLayerCSS();		
	}
	this.setCurrentLayer( saveGroupLayer );
	this.groupLevel--;
	this.currentLeft = saveLeft;
	this.currentTop = saveTop;
	return notAborted;
}

cssToClip.layerNameToCSS = function( layerName )
{
	const kMaxLayerNameLength = 50;

	// Remove any user-supplied class/ID delimiter
	if ((layerName[0] == ".") || (layerName[0] == "#"))
		layerName = layerName.slice(1);
	
	// Remove any other creepy punctuation.
	var badStuff = /[“”";!.?,'`@’#'$%^&*)(+=|}{><\x2F\s-]/g
	var layerName = layerName.replace(badStuff, "_");

	// Text layer names may be arbitrarily long; keep it real
	if (layerName.length > kMaxLayerNameLength)
		layerName = layerName.slice(0, kMaxLayerNameLength-3) ;

	// Layers can't start with digits, force an _ in front in that case.
	if (layerName.match(/^[\d].*/))
		layerName = "_" + layerName;

	return layerName;
}

// Gather the CSS info for the current layer, and add it to this.cssText
// Returns FALSE if the process was aborted.
cssToClip.gatherLayerCSS = function()
{
	// Script can't be called from PS context menu unless there is an active layer
	var curLayer = this.getCurrentLayer();

	// Skip invisible or non-css-able layers.
	var layerKind = this.currentPSLayerInfo.layerKind;
	if ((! this.isCSSLayerKind( layerKind )) || (! curLayer.visible))
		return true;

	var isCSSid = (curLayer.name[0] == '#'); // Flag if generating ID not class
	var layerName = this.layerNameToCSS( curLayer.name );
	
	this.addText( (isCSSid ? "#" : ".") + layerName + " {" );
	this.pushIndent();
	var boundsInfo = new BoundsParameters();

	switch (layerKind)
	{
	case kLayerGroupSheet:	this.pushGroupLevel();		break;
	case kVectorSheet:		this.getShapeLayerCSS( boundsInfo );	break;
	case kTextSheet:		this.getTextLayerCSS( boundsInfo );		break;
	case kPixelSheet:		this.getPixelLayerCSS();		break;
	}
	
	var aborted = false;
	if (this.groupLevel > 0)
		aborted = this.groupProgress.nextProgress();
	if (aborted)
		return false;

	// Use the Opacity tag for groups, so it applies to all descendants.
	if (layerKind == kLayerGroupSheet)
		this.addOpacity();
	this.addObjectBounds( boundsInfo );
	this.addStyleLine( "z-index: $itemIndex$;" );

	this.popIndent();
	this.addText("}");
	
	var notAborted = true;
	
	// If we're processing a group, now is the time to process the member layers.
	if ((curLayer.typename == "LayerSet")
	    && (this.groupLevel > 0))
		notAborted = this.popGroupLevel();

	return notAborted;
}

// Main entry point
cssToClip.copyLayerCSSToClipboard = function()
{
	this.reset();
	var saveUnits = app.preferences.rulerUnits;

	app.preferences.rulerUnits = Units.PIXELS;	// Web dudes want pixels.
	
	try {
		var elapsedTime, then = new Date();
		if (! this.gatherLayerCSS())
			return;						// aborted
		elapsedTime = new Date() - then;
	}
	catch (err)
	{
		// Copy CSS fails if a new doc pops open before it's finished, possible if Cmd-N is selected
		// before the progress bar is up.  This message isn't optimal, but it was too late to get a
		// proper error message translated, so this was close enough.
		// MUST USE THIS FOR RELEASE PRIOR TO CS7/PS14
//		alert( localize( "$$$/MaskPanel/MaskSelection/NoLayerSelected=No layer selected" ) );
		alert( localize( "$$$/Scripts/CopyCSSToClipboard/Error=Internal error creating CSS: " ) + err.message + 
				localize( "$$$/Scripts/CopyCSSToClipboard/ErrorLine= at script line ") + err.line );
	}
	
	cssToClip.copyCSSToClipboard();
	if (saveUnits)
		app.preferences.rulerUnits = saveUnits;
		
	this.groupProgress.finishProgress();	// Make sure the prog. bar is down, else Mac PS hangs.
	
	// We can watch this in ESTK without screwing up the app
	return ("time: " + (elapsedTime / 1000.0) + " sec");
}

// ----- End of CopyCSSToClipboard script proper.  What follows is test & debugging code -----

// Dump out a layer attribute as text.  This is how you learn what attributes are available.
// Note this only works for ActionDescriptor or ActionList layer attributes; for simple
// types just call cssToClip.getLayerAttr().
cssToClip.dumpLayerAttr = function( keyName )
{
	this.setCurrentLayer( app.activeDocument.activeLayer );
	var ref = new ActionReference();
	ref.putIdentifier( classLayer, app.activeDocument.activeLayer.id );
	layerDesc = executeActionGet( ref );

	var desc = layerDesc.getVal( keyName, false );
	if (! desc)
		return;
	if ((desc.typename == "ActionDescriptor") || (desc.typename == "ActionList"))
		desc.dumpDesc( keyName );
	else
	if (desc.length > 1)
	{
		s = []
		for (var i in desc) 
			s.push( ActionDescriptor.dumpValue(desc[i]) )
		$.writeln( keyName +": [" + s.join(", ") + "]" );
	}
	else
		$.writeln(keyName + ": " + ActionDescriptor.dumpValue(desc) );
}

// Taken from inspection of ULayerElement.cpp
cssToClip.allLayerAttrs = ['AGMStrokeStyleInfo','adjustment','background','bounds',
	'boundsNoEffects','channelRestrictions','color','count','fillOpacity','filterMaskDensity',
	'filterMaskFeather','generatorSettings','globalAngle','group','hasFilterMask',
	'hasUserMask','hasVectorMask','itemIndex','layer3D','layerEffects','layerFXVisible',
	'layerSection','layerID','layerKind','layerLocking','layerSVGdata','layerSection',
	'linkedLayerIDs','metadata','mode','name','opacity','preserveTransparency',
	'smartObject','targetChannels','textKey','useAlignedRendering','useAlignedRendering',
	'userMaskDensity','userMaskEnabled','userMaskFeather','userMaskLinked',
	'vectorMaskDensity','vectorMaskFeather','videoLayer','visible','visibleChannels',
	'XMPMetadataAsUTF8'];

// Dump all the available attributes on the layer.  
cssToClip.dumpAllLayerAttrs = function()
{
	this.setCurrentLayer( app.activeDocument.activeLayer );
	
	var ref = new ActionReference();
	ref.putIndex( classLayer, app.activeDocument.activeLayer.itemIndex );
	var desc = executeActionGet( ref );

	var i;
	for (i = 0; i < this.allLayerAttrs.length; ++i)
	{
		var attr = this.allLayerAttrs[i];
		var attrDesc = null;
		try {
			attrDesc = this.getLayerAttr( attr );
			if (attrDesc)
				this.dumpLayerAttr( attr );
			else
				$.writeln( attr + ": null" );
		}
		catch (err)
		{
			$.writeln( attr + ': ' + err.message );
		}
	}
}

// Walk the document's layers and describe them.
cssToClip.dumpLayers = function( layerSet )
{
	var i, layerID;
	if (typeof layerSet == "undefined")
		layerSet = app.activeDocument;

	for (i= 0; i < layerSet.layers.length; ++i)
	{
		if (layerSet.layers[i].typename == "LayerSet")
			this.dumpLayers( layerSet.layers[i] );
		this.setCurrentLayer( layerSet.layers[i] );
		layerID = (layerSet.layers[i].isBackground) ? "BG" : cssToClip.getLayerAttr( "layerID" );
		$.writeln("Layer[" + cssToClip.getLayerAttr( "itemIndex" ) + "] ID=" + layerID + " name: " + cssToClip.getLayerAttr( "name" ) );
	}
}

function testProgress()
{
	var i, total = 10;
	var progBar = new ProgressBar();
	progBar.startProgress( localize("$$$/Photoshop/Progress/CopyCSSProgress=Copying CSS...") );
	progBar.totalProgressSteps = total;
	for (i = 0; i <= total; ++i)
	{
//		if (progBar.updateProgress( i ))
		if (progBar.nextProgress())
		{
			$.writeln('cancelled');
			break;
		}
		$.sleep(800);
	}
}

// Debug.  Uncomment one of these lines, and watch the output
// in the ESTK "JavaScript Console" panel.

// Walk the layers
//runCopyCSSFromScript = true; cssToClip.dumpLayers();

// Print out some interesting objects
//runCopyCSSFromScript = true; cssToClip.dumpLayerAttr( "AGMStrokeStyleInfo" );
//runCopyCSSFromScript = true; cssToClip.dumpLayerAttr( "adjustment" );  // Gradient, etc.
//runCopyCSSFromScript = true; cssToClip.dumpLayerAttr( "layerEffects" );  // Layer FX, drop shadow, etc.
//runCopyCSSFromScript = true; cssToClip.dumpLayerAttr( "textKey" );
//runCopyCSSFromScript = true; cssToClip.dumpLayerAttr( "bounds" );

// Some useful individual parameters
//runCopyCSSFromScript = true; $.writeln( cssToClip.dumpLayerAttr( "opacity" ) );
//runCopyCSSFromScript = true; $.writeln( cssToClip.dumpLayerAttr( "fillOpacity" ) );
//runCopyCSSFromScript = true; $.writeln( cssToClip.dumpLayerAttr( "name" ));
//runCopyCSSFromScript = true; $.writeln( cssToClip.dumpLayerAttr( "itemIndex" ));
//runCopyCSSFromScript = true; $.writeln( cssToClip.dumpLayerAttr( "layerFXVisible" ));
//runCopyCSSFromScript = true; $.writeln( cssToClip.dumpLayerAttr("layerSVGdata" ));
//runCopyCSSFromScript = true; $.writeln( cssToClip.dumpLayerAttr("layerVectorPointData" ));

// Debugging tests
//runCopyCSSFromScript = true; testProgress();
//runCopyCSSFromScript = true; cssToClip.countGroupLayers( cssToClip.getCurrentLayer() );

// Backdoor to allow using this script as a library; 
//if ((typeof( runCopyCSSFromScript ) == 'undefined')
//	|| (runCopyCSSFromScript == false))
//	cssToClip.copyLayerCSSToClipboard();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Copyright 2012 Adobe Systems Incorporated.  All Rights reserved.

//
// Convert layer data into SVG output.
//

// ExtendScript is a different planet.  Coax JSHint to be accepting of that.

/* jshint bitwise: false, strict: false, quotmark: false, forin: false,
   multistr: true, laxbreak: true, maxlen: 255, esnext: true */
/* global $, app, File, ActionDescriptor, executeAction, PSLayerInfo,
   DialogModes, cssToClip, stripUnits, round1k, GradientStop, 
   Folder, kAdjustmentSheet, kLayerGroupSheet, kHiddenSectionBounder, kVectorSheet,
   kTextSheet, kPixelSheet, Units, params, runGetLayerSVGfromScript */
/* exported runCopyCSSFromScript */

// This uses many routines from CopyCSS, so load the script but tell it not to execute first.
//if (typeof cssToClip === "undefined")
//{
//    var runCopyCSSFromScript = true;
//    var appFolder = { Windows: "/", Macintosh: "/Adobe Photoshop CC.app/Contents/" };
//    $.evalFile(app.path + appFolder[File.fs] + "Required/CopyCSSToClipboard.jsx");
//}

const ksendLayerThumbnailToNetworkClientStr = app.stringIDToTypeID("sendLayerThumbnailToNetworkClient");
const krawPixmapFilePathStr = app.stringIDToTypeID("rawPixmapFilePath");
const kformatStr = app.stringIDToTypeID("format");
const kselectedLayerStr = app.stringIDToTypeID("selectedLayer");
const kwidthStr = app.stringIDToTypeID("width");
const kheightStr = app.stringIDToTypeID("height");
const kboundsStr = app.stringIDToTypeID("bounds");
const klayerIDStr = app.stringIDToTypeID("layerID");

function ConvertSVG()
{
    // Construction is actually done by "reset" function.
}

var svg = new ConvertSVG();

svg.reset = function ()
{
    this.svgText = "";
    this.svgDefs = "";
    this.gradientID = 0;
    this.filterID = 0;
    this.groupLevel = 0;
    this.currentLayer = null;
    this.saveUnits = null;
    this.startTime = 0;
    this.savedGradients = [];
    this.gradientDict = {};
    // Yes, you really need all this gobbledygook
    this.svgHeader = ['<?xml version="1.0" encoding="utf-8"?>',
                      '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',
                      '<svg version="1.1" baseProfile="full"',
                      ' xmlns="http://www.w3.org/2000/svg"',
                      ' xmlns:xlink="http://www.w3.org/1999/xlink"',
                      //' xmlns:ev="http://www.w3.org/2001/xml-events" >\n'].join('\n');
                      ' xmlns:ev="http://www.w3.org/2001/xml-events" \n'].join('\n'); // Not-closed
};

// Convert special characters to &#NN; form.  Note '\r' is
// left in as an exception so multiple text spans are processed.
svg.HTMLEncode = function (str)
{
    var i, result = [];
    for (i = 0; i < str.length; ++i)
    {
        var c = str[i];
        result[i] = ((c < "A" && c !== "\r") || c > "~" || (c > "Z" && c < "a"))
                        ? "&#" + c.charCodeAt() + ";" : str[i];
    }
    return result.join("");
};

// Encode data as Base64.
svg.encodeBase64 = function (src)
{
    var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var i, c0, c1, c2, e0, e1, e2, e3, dst = "";
 
    for (i = 0; i < src.length;)
    {
        c0 = src.charCodeAt(i++);
        c1 = src.charCodeAt(i++);
        c2 = src.charCodeAt(i++);

        e0 = c0 >> 2;
        e1 = ((c0 & 3) << 4) | (c1 >> 4);
        e2 = (i - 2 >= src.length) ? 64 : (((c1 & 15) << 2) | (c2 >> 6));
        e3 = (i - 1 >= src.length) ? 64 : (c2 & 63);

        dst = dst + base64chars[e0] + base64chars[e1]
                  + base64chars[e2] + base64chars[e3];
    }

    return dst;
};

// Call internal PS code to write the current layer's pixels and convert it to PNG.
svg.writeLayerPNGfile = function (path)
{
    var desc = new ActionDescriptor();

    //    desc.putBoolean( kselectedLayerStr, true );
    desc.putInteger(klayerIDStr, this.currentLayer.layerID);
    desc.putString(krawPixmapFilePathStr, path);
    desc.putBoolean(kboundsStr, true);
    desc.putInteger(kwidthStr, 10000);
    desc.putInteger(kheightStr, 10000);
    desc.putInteger(kformatStr, 2); // Want raw pixels, not unsupported JPEG
    executeAction(ksendLayerThumbnailToNetworkClientStr, desc, DialogModes.NO);
};

svg.reset();

// Set the current layer to process.  This accepts a layer index number, a DOM layer,
// or an existing PSLayerInfo object.
svg.setCurrentLayer = function (theLayer)
{
    if (typeof theLayer === "number") {
        this.currentLayer = new PSLayerInfo(theLayer);
    }
    else
    if ((typeof theLayer === "object") // Check for DOM layer
        && (typeof theLayer.typename !== "undefined")
        && ((theLayer.typename === "ArtLayer") || (theLayer.typename === "LayerSet"))) {
        this.currentLayer = new PSLayerInfo(theLayer.itemIndex);
    }
    else {
        this.currentLayer = theLayer;   // Existing PSLayerInfo object
    }
};

svg.getLayerAttr = function (keyString, layerDesc)
{
    return this.currentLayer.getLayerAttr(keyString, layerDesc);
};

svg.addText = function (s)
{
    this.svgText += s;
};

// For adding name="value" style parameters.
svg.addParam = function (paramName, value)
{
    this.addText(" " + paramName + '="' + value + '"');
};

svg.pushFXGroup = function (groupParam, groupValue)
{
    this.addText("<g");
    this.addParam(groupParam, groupValue);
    this.addText(">\n");
    this.groupLevel++;
};

svg.popFXGroups = function ()
{
    var i;
    if (this.groupLevel > 0)
    {
        for (i = 0; i < this.groupLevel; ++i) {
            this.addText("</g>");
        }
        this.addText("\n");
        this.groupLevel = 0;
    }
};

// Definitions (such as linear gradients) must be collected and output ahead
// of the rest of the SVG text.  
svg.addDef = function (s)
{
    this.svgDefs += s;
};

function SavedGradient(info, colorStops, url, minOpacity)
{
    this.info = info;
    this.minOpacity = minOpacity;
    this.colorStops = [];
    // Make an explicit copy, so calls to "reverse" don't hammer the copy
    for (var i in colorStops) {
        this.colorStops.push(colorStops[i].copy());
    }
    this.url = url;
}

SavedGradient.prototype.match = function (info, colorStops)
{
    if ((this.info === info) && (this.colorStops.length === colorStops.length))
    {
        var i;
        for (i in colorStops) {
            if (this.colorStops[i] !== colorStops[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
};

// Collect gradient information
svg.getGradient = function (useLayerFX)
{
    // "false" says those defined by layerFX are skipped.
    useLayerFX = (typeof useLayerFX === "undefined") ? false : useLayerFX;
    
    var gradInfo = this.currentLayer.gradientInfo(useLayerFX);
    var colorStops = this.currentLayer.gradientColorStops();
    var gradientURL = null;
    
    function addCoord(coord, v)
    {
        if (v < 0) {
            svg.addDef(' ' + coord + '1="' + Math.abs(v) + '%" ' + coord + '2="0%"');
        }
        else {
            svg.addDef(' ' + coord + '1="0%" ' + coord + '2="' + v + '%"');
        }
    }

    if (gradInfo && colorStops)
    {
        var i, globalOpacity = gradInfo.opacity;
        // If we've seen this gradient before, just return the URL for it
        for (i in this.savedGradients) {
            if (this.savedGradients[i].match(gradInfo, colorStops)) {
                return this.savedGradients[i].url;
            }
        }
                
        // Otherwise, make a new URL and stash it for future reference
        gradientURL = "url(#PSgrad_" + this.gradientID + ")";

        var minOpacity = globalOpacity;
        for (i in colorStops) {
            if (colorStops[i].m / 100 < minOpacity) {
                minOpacity = colorStops[i].m / 100;
            }
        }

        this.savedGradients.push(new SavedGradient(gradInfo, colorStops, gradientURL, minOpacity));
        this.gradientDict[gradientURL] = this.savedGradients[this.savedGradients.length - 1];

        this.addDef("<" + gradInfo.type + "Gradient " + 'id="PSgrad_' + this.gradientID + '"');
        if (gradInfo.type === "linear")
        {
            // SVG wants the angle in cartesian, not polar, coords. 
            var angle = stripUnits(gradInfo.angle) * Math.PI / 180.0;
            var xa = Math.cos(angle) * 100, ya = -Math.sin(angle) * 100;
            addCoord("x", round1k(xa));
            addCoord("y", round1k(ya));
        }
        this.addDef('>\n');
        
        // reverse is applied only to color values, not stop locations
        
        if (gradInfo.reverse) {
            colorStops = GradientStop.reverseStoplist(colorStops);
        }

        var svgStops = [];
        for (var c in colorStops) {
            svgStops.push('  <stop offset="' +  Math.round(colorStops[c].location) + '%"'
                                    + ' stop-color="' + colorStops[c].colorString(true)
                                    + '" stop-opacity="' + ((colorStops[c].m / 100) * globalOpacity) + '" />');
        }
        this.addDef(svgStops.join("\n") + "\n");
        this.addDef("</" + gradInfo.type + "Gradient>\n");
        this.gradientID++;
    }
    return gradientURL;
};

svg.addGradientOverlay = function ()
{
    var gradOverlay = this.getLayerAttr("layerEffects.gradientFill");
    
    if (gradOverlay && gradOverlay.getVal("enabled")) {
        return this.getGradient(true);  // Explictly ask for layerFX gradient
    }
    return null;
};

// Substitute filter parameters (delimited with $dollar$) using the params dictionary
svg.replaceFilterKeys = function (filterStr, params)
{
    var i, replaceList = filterStr.match(/[$](\w+)[$]/g);
    for (i = 0; i < replaceList.length; ++i) {
        filterStr = filterStr.replace(replaceList[i], params[replaceList[i].split('$')[1]]);
    }
    this.addDef(filterStr);
    this.pushFXGroup('filter',  'url(#' + params.filterTag + ')');
};

svg.psModeToSVGmode = function (psMode)
{
    var modeMap = { 'colorBurn': null, 'linearBurn': 'multiply', 'darkenColor': null, 'multiply': 'multiply',
                    'lighten': 'lighten', 'screen': 'screen', 'colorDodge': null, 'linearDodge': 'lighten',
                    'lighterColor': 'normal', 'normal': 'normal', 'overlay': null, 'softLight': null,
                    'hardLight': 'normal', 'vividLight': null, 'linearLight': 'normal', 'dissolve': null,
                    'pinLight': 'normal', 'hardMix': null, 'difference': 'lighten', 'exclusion': 'lighten',
                    'subtract': null, 'divide': null, 'hue': 'normal', 'saturation': null, 'color': 'normal',
                    'luminosity': null, 'darken': 'darken' };
    return modeMap[psMode];
};

svg.addColorOverlay = function ()
{
    var overDesc = this.getLayerAttr("layerEffects.solidFill");
    if (overDesc && overDesc.getVal("enabled"))
    {
        var params = { filterTag: "Filter_" + this.filterID++,
                       color: this.currentLayer.replaceDescKey('flood-color="$color$"', overDesc)[1],
                       opacity: round1k(stripUnits(overDesc.getVal("opacity")) / 100.0),
                       mode: this.psModeToSVGmode(overDesc.getVal("mode")) };

        if (! params.mode) {
            return;         // Bail on unsupported transfer modes
        }
            
        var filterStr =
'<filter id="$filterTag$">\
  <feFlood $color$ flood-opacity="$opacity$" result="floodOut" />\
  <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />\
  <feBlend mode="$mode$" in="compOut" in2="SourceGraphic" />\
</filter>\n';
        this.replaceFilterKeys(filterStr, params);
    }
};

svg.addInnerShadow = function ()
{
    var inshDesc = this.getLayerAttr("layerEffects.innerShadow");
    if (inshDesc && inshDesc.getVal("enabled"))
    {
        var mode = this.psModeToSVGmode(inshDesc.getVal("mode"));
        // Some of the PS modes don't do anything with this effect
        if (! mode) {
            return;
        }

        var offset = PSLayerInfo.getEffectOffset(inshDesc);
        
        var params = { filterTag: "Filter_" + this.filterID++,
                       dx: offset[0], dy: offset[1],
                       blurDist: round1k(Math.sqrt(stripUnits(inshDesc.getVal("blur")))),
                       inshColor: this.currentLayer.replaceDescKey('flood-color="$color$"', inshDesc)[1],
                       opacity: round1k(stripUnits(inshDesc.getVal("opacity")) / 100.0),
                       mode: mode };
        
        var filterStr =
'<filter id="$filterTag$">\
  <feOffset in="SourceAlpha" dx="$dx$" dy="$dy$" />\
  <feGaussianBlur result="blurOut" stdDeviation="$blurDist$" />\
  <feFlood $inshColor$ result="floodOut" />\
  <feComposite operator="out" in="floodOut" in2="blurOut" result="compOut" />\
  <feComposite operator="in" in="compOut" in2="SourceAlpha" />\
  <feComponentTransfer><feFuncA type="linear" slope="$opacity$"/></feComponentTransfer>\
  <feBlend mode="$mode$" in2="SourceGraphic" />\
</filter>\n';
        this.replaceFilterKeys(filterStr, params);
    }
};

// Create drop shadows via SVG filter functions.
svg.addDropShadow = function ()
{
    // Remember, rectangles are [Left, Top, Bottom Right].  Strip the units
    // because SVG chokes on the space between the number and 'px'.  We'll add it back later.
    function rectPx(r) {
        var i, rpx = [];
        for (i in r) {
            rpx.push(r[i].as('px'));
        }
        return rpx;
    }

    var dsInfo = this.currentLayer.getDropShadowInfo();
    if (dsInfo)
    {
        var strokeWidth = 0;
        var agmDesc = this.currentLayer.getLayerAttr("AGMStrokeStyleInfo");
        if (agmDesc && agmDesc.getVal("strokeEnabled")
            && (strokeWidth = agmDesc.getVal("strokeStyleLineWidth")))
        {
            strokeWidth = stripUnits(strokeWidth);
        }

        // The filter needs to specify the bounds of the result.
        var fxBounds = rectPx(this.currentLayer.getBounds());

        var params = { filterTag: "Filter_" + this.filterID++,
                       xoffset: 'x="' + (fxBounds[0] - strokeWidth) + 'px"',
                       yoffset: 'y="' + (fxBounds[1] - strokeWidth) + 'px"',
                       fxWidth: 'width="' + (fxBounds[2] - fxBounds[0] + strokeWidth) + 'px"',
                       fxHeight: 'height="' + (fxBounds[3] - fxBounds[1] + strokeWidth) + 'px"',
                       dx: dsInfo.xoff, dy: dsInfo.yoff,
                       // SVG uses "standard deviation" vs. pixels for the blur distance; sqrt is a rough approximation
                       blurDist: round1k(Math.sqrt(stripUnits(dsInfo.dsDesc.getVal("blur")))),
                       dsColor: this.currentLayer.replaceDescKey('flood-color="$color$"', dsInfo.dsDesc)[1],
                       opacity: round1k(stripUnits(dsInfo.dsDesc.getVal("opacity")) / 100.0) };

        // By default, the filter extends 10% beyond the bounds of the object.
        // x, y, width, height need to specify the entire affected region; 
        // "userSpaceOnUse" hard codes it to the object's coords
        var filterDef =
'<filter filterUnits="userSpaceOnUse" id="$filterTag$" $xoffset$ $yoffset$ $fxWidth$ $fxHeight$  >\
  <feOffset in="SourceAlpha" dx="$dx$" dy="$dy$" />\
  <feGaussianBlur result="blurOut" stdDeviation="$blurDist$" />\
  <feFlood $dsColor$ result="floodOut" />\
  <feComposite operator="atop" in="floodOut" in2="blurOut" />\
  <feComponentTransfer><feFuncA type="linear" slope="$opacity$"/></feComponentTransfer>\
  <feMerge>\n    <feMergeNode/>\n    <feMergeNode in="SourceGraphic"/>\n  </feMerge>\
</filter>\n';
        this.replaceFilterKeys(filterDef, params);
    }
};

svg.addLayerFX = function ()
{
    // Gradient overlay layerFX are handled by just generating another copy of the shape
    // with the desired gradient fill, rather than using an SVG filter
    this.addDropShadow();
    this.addInnerShadow();
    this.addColorOverlay();
};

svg.addOpacity = function (combine)
{
    var colorOver = this.getLayerAttr("layerEffects.solidFill.enabled");
    combine = (colorOver || (typeof combine === "undefined")) ? false : combine;
    var fillOpacity = this.getLayerAttr("fillOpacity") / 255;
    // Color overlay replaces fill opacity if it's enabled.
    if (colorOver) {
        fillOpacity = this.getLayerAttr("layerEffects.solidFill.opacity");
    }
    var opacity = this.getLayerAttr("opacity") / 255;
    
    if (combine)
    {
        opacity *= fillOpacity;
        if (opacity < 1.0) {
            this.addParam("opacity", round1k(opacity));
        }
    }
    else
    {
        if (fillOpacity < 1.0) {
            this.addParam("fill-opacity", round1k(fillOpacity));
        }
        if (opacity < 1.0) {
            this.addParam("opacity", round1k(opacity));
        }
    }
};

//
// Add an attribute to the SVG output.  Note items delimited
// in $'s are substituted with values looked up from the layer data
// e.g.: 
//     border-width: $AGMStrokeStyleInfo.strokeStyleLineWidth$;"
// puts the stroke width into the output.  If the descriptor in the $'s
// isn't found, no output is added.
//
svg.addAttribute = function (attrText, baseDesc)
{
    var result = this.currentLayer.replaceDescKey(attrText, baseDesc);
    var replacementFailed = result[0];
    attrText = result[1];
    
    if (! replacementFailed) {
        this.addText(attrText);
    }
    return !replacementFailed;
};

// Text items need to try the base, default and baseParentStyle descriptors
svg.addAttribute2 = function (attrText, descList)
{
    var i = 0;
    while ((i < descList.length) && (!descList[i] || ! this.addAttribute(attrText, descList[i]))) {
        i += 1;
    }
};

svg.getVal2 = function (attrName, descList)
{
    var i = 0;
    var result = null;
    while ((i < descList.length) && ((! descList[i]) || !(result = descList[i].getVal(attrName)))) {
        i += 1;
    }

    return result;
};

// Process shape layers
svg.getShapeLayerSVG = function ()
{
    var agmDesc = this.currentLayer.getLayerAttr("AGMStrokeStyleInfo");
    var capDict = {"strokeStyleRoundCap": 'round', "strokeStyleButtCap": 'butt',
                   "strokeStyleSquareCap": 'square'};
    var joinDict = {"strokeStyleBevelJoin": 'bevel', "strokeStyleRoundJoin": 'round',
                    "strokeStyleMiterJoin": 'miter'};
                    
    function hasStroke() {
        return (agmDesc && agmDesc.getVal("strokeEnabled"));
    }
                    
    function addStroke() {
        if (hasStroke())
        {
            svg.addAttribute(' stroke="$strokeStyleContent.color$"', agmDesc);
            svg.addAttribute(' stroke-width="$strokeStyleLineWidth$"', agmDesc);
            var dashes = agmDesc.getVal("strokeStyleLineDashSet", false);
            if (dashes && dashes.length)
            {
                var strokeWidth = stripUnits(agmDesc.getVal("strokeStyleLineWidth"));
                // Patch the "[0,2]" dash pattern from the default dotted style, else the stroke
                // vanishes completely.  Need to investigate further someday.
                if ((dashes.length === 2) && (dashes[0] === 0) && (dashes[1] === 2)) {
                    dashes = [strokeWidth / 2, strokeWidth * 2];
                }
                else {
                    for (var i in dashes) {
                        dashes[i] = dashes[i] * strokeWidth;
                    }
                }
                svg.addParam('stroke-dasharray', dashes.join(", "));
            }
            
            var cap = agmDesc.getVal("strokeStyleLineCapType");
            if (cap) {
                svg.addParam('stroke-linecap', capDict[cap]);
            }

            var join = agmDesc.getVal("strokeStyleLineJoinType");
            if (join) {
                svg.addParam('stroke-linejoin', joinDict[join]);
            }
        }

        // Check for layerFX style borders
        var fxDesc = svg.getLayerAttr("layerEffects.frameFX");
        if (fxDesc && fxDesc.getVal("enabled")
            && (fxDesc.getVal("paintType") === "solidColor"))
        {
            svg.addAttribute(" stroke-width=$strokeStyleLineWidth$", fxDesc);
            svg.addAttribute(" stroke=$strokeStyleContent.color$", fxDesc);
        }
    }

    // Layer fx need to happen first, so they're defined in enclosing groups
    this.addLayerFX();
    var gradOverlayID = this.addGradientOverlay();

    // For now, Everything Is A Path.  We'll revisit this when shape meta-data is available.
    this.addText("<path");
    
    // If there's a gradient overlay effect, the stroke must be added there.
    if (! gradOverlayID) {
        addStroke();
    }

    this.addOpacity();

    var gradientID = this.getGradient();
    if (!agmDesc || (agmDesc && agmDesc.getVal("fillEnabled")))
    {
        if (gradientID) {
            this.addParam('fill', gradientID);
        }
        else {
            this.addAttribute(' fill="$adjustment.color$"');
        }
    }
    else {
        this.addAttribute(' fill="none"');
    }

    this.addText('\n d="' + fix_vector_data(this.getLayerAttr("layerVectorPointData")) + '"');
    this.addText('/>\n');
    this.popFXGroups();
    
    if (gradOverlayID)
    {
        this.addText("<path");
        addStroke();
        this.addParam('fill', gradOverlayID);
        this.addText('\n d="' + fix_vector_data(this.getLayerAttr("layerVectorPointData")) + '"');
        this.addText('/>\n');
    }
    
    // A solid fill layerFX trashes the stroke, so we over-write it with one outside of the solidFill layer effect group
    if (!gradOverlayID && this.getLayerAttr("layerEffects.solidFill.enabled") && hasStroke())
    {
        this.addText('<path fill="none"');
        addStroke();
        this.addText('\n d="' + fix_vector_data(this.getLayerAttr("layerVectorPointData")) + '"');
        this.addText('/>\n');
    }
};

// This works for solid colors and gradients; other stuff, not so much
svg.getAdjustmentLayerSVG = function ()
{
    // Layer fx need to happen first, so they're defined in enclosing groups
    this.addLayerFX();
    var gradOverlayID = this.addGradientOverlay();

    var self = this;
    function addRect()
    {
        self.addText("<rect ");
        self.addAttribute('x="$left$" y="$top$" width="$width$" height="$height$" ',
                          self.getLayerAttr("bounds"));
    }

    addRect();
    this.addOpacity();

    var gradientID = this.getGradient();
    if (gradientID) {
        this.addParam('fill', gradientID);
    }
    else {
        this.addAttribute(' fill="$adjustment.color$"');
    }
    this.addText("/>\n");

    this.popFXGroups();
    
    if (gradOverlayID)
    {
        addRect();  // Add another rect with the gradient overlay FX
        this.addParam('fill', gradOverlayID);
        this.addText('\n d="' + fix_vector_data(this.getLayerAttr("layerVectorPointData")) + '"');
        this.addText('/>\n');
    }
};

// This is a wrapper for the actual code (getTextlayerSVG1), because
// we may need to run it twice if gradients are applied.
svg.getTextLayerSVG = function ()
{
    var gradientURL = this.getGradient(true);
    
    if (gradientURL)
    {
        var minOpacity = this.gradientDict[gradientURL].minOpacity;
        this.getTextLayerSVG1(gradientURL);
        if (this.getLayerAttr("layerEffects.gradientFill") && (minOpacity < 1)) {
            this.getTextLayerSVG1();    // We need the base color as well
        }
    }
    else {
        this.getTextLayerSVG1();
    }
};

// Text; just basic functionality for now; paragraph style text is not handled yet.
svg.getTextLayerSVG1 = function (fillColor)
{
    function isStyleOn(textDesc, styleKey, onText)
    {
        var styleText = textDesc.getVal(styleKey);
        return (styleText && (styleText.search(onText) >= 0));
    }
    var xfm = function () {};
    var midval = function () {}; // For shutting up JSHint

    var textDesc = this.getLayerAttr("textKey.textStyleRange.textStyle");
    var leftMargin = "0";
    var textBottom = "0";
    var textDescList = [textDesc];
    var defaultDesc = this.getLayerAttr("textKey.paragraphStyleRange.paragraphStyle.defaultStyle");
    textDescList.push(defaultDesc);
    var baseParentDesc = textDesc.getVal('baseParentStyle');
    textDescList.push(baseParentDesc);

    if (textDesc)
    {
        this.addLayerFX();
        this.addText('<text');
        var boundsDesc = this.getLayerAttr("boundsNoEffects");
        if (textDesc.getVal("autoKern") === "metricsKern") {
            this.addText(' kerning="auto"');
        }
        this.addAttribute2(' font-family="$fontName$"', textDescList);
        if (typeof fillColor === "undefined") {
            this.addAttribute(' fill="$color$"', textDesc);
        }
        else {
            this.addParam('fill', fillColor);
        }
        this.addOpacity();
        
        var transformMatrixUsed = false;
        var textXform = this.getLayerAttr("textKey.transform");
        // Accomodate PS text baseline for vertical position
        if (textXform)
        {
            xfm = function (key) { return textXform.getVal(key); };
            var xx = xfm("xx"), xy = xfm("xy"), yx = xfm("yx"),
                yy = xfm("yy"), tx = xfm("tx"), ty = xfm("ty");
            
            // Check to make sure it's not an identity matrix
            if (! ((xx === 1) && (xy === 0) && (yx === 0)
                && (yy === 1) && (tx === 0) && (ty === 0)))
            {
                // "boundsDesc" is the bounding box of the transformed text (in doc coords)
                // Original (untransformed, untranslated) text bounding box
                var originalTextBounds = this.getLayerAttr("textKey.boundingBox");
                midval = function (key0, key1, desc, op) {
                    return op(stripUnits(desc.getVal(key0)), stripUnits(desc.getVal(key1))) / 2.0;
                };
                // Find the vector representing the bottom left corner of
                // the original (untransformed) text bounds centered on the origin
                var obx = -midval("left", "right", originalTextBounds, function (a, b) { return b - a; });
                var oby = midval("top", "bottom", originalTextBounds, function (a, b) { return -b - a; });
                // Transform the vector by the matrix
                var tbx = obx * xx + oby * yx + tx;
                var tby = obx * xy + oby * yy + ty;
                // Now find the center of the transformed text:
                var cbx = midval("left", "right", boundsDesc, function (a, b) { return a + b; });
                var cby = midval("top", "bottom", boundsDesc, function (a, b) { return a + b; });
                // Offset the transformed bottom left corner vector by
                // the center of the transformed text bounds in Photoshop:
                tbx += cbx;
                tby += cby;
                // These values become the translate values in the SVG matrix:
                this.addAttribute(' transform="matrix( $xx$, $xy$, $yx$, $yy$,', textXform);
                this.addText(tbx + ", " + tby + ')"');
                transformMatrixUsed = true;
            }
        }
        
        if (! transformMatrixUsed)
        {
            textBottom = stripUnits(boundsDesc.getVal("bottom"));
            leftMargin = boundsDesc.getVal('left'); // For multi-line text
        }

        // This table is: [PS Style event key ; PS event value keyword to search for ; corresponding SVG]
        var styleTable = [["fontStyleName",     "Bold",             ' font-weight="bold"'],
                          ["fontStyleName",     "Italic",           ' font-style="italic"'],
                          ["strikethrough",     "StrikethroughOn",  ' text-decoration="line-through"'],
                          ["underline",         "underlineOn",      ' text-decoration="underline"'],
                          // Need RE, otherwise conflicts w/"smallCaps"
                          //["fontCaps",          /^allCaps/,         "text-transform: uppercase;"],
                          ["fontCaps",          "smallCaps",        ' font-variant="small-caps"'],
                          // These should probably also modify the font size?
                          ["baseline",          "superScript",      ' baseline-shift="super"']
                          //["baseline",          "subScript",        ' baseline-shift="sub"']
                         ];

        var i;
        for (i in styleTable) {
            if (isStyleOn(textDesc, styleTable[i][0], styleTable[i][1])) {
                this.addText(styleTable[i][2]);
            }
        }
                
        var fontSize = stripUnits(this.getVal2("size", textDescList));
        var fontLeading = textDesc.getVal("leading");
        fontLeading = fontLeading ? stripUnits(fontLeading) : fontSize;

        if (isStyleOn(textDesc, "baseline", "subScript"))
        {
            fontSize = fontSize / 2;
            textBottom += fontLeading;
        }

        this.addParam('font-size', fontSize + 'px');
        if (! transformMatrixUsed)
        {
            this.addParam('x', leftMargin);
            this.addParam('y', textBottom + 'px');
        }
        this.addText('>');

        var textStr = this.getLayerAttr('textKey').getVal('textKey');

        // SVG doesn't have native support for all caps
        if (isStyleOn(textDesc, "fontCaps", /^allCaps/)) {
            textStr = textStr.toUpperCase();
        }
            
        // Weed out < > & % @ ! # etc.
        textStr = this.HTMLEncode(textStr);

        // If text is on multiple lines, break it into separate spans.
        if (textStr.search(/\r/) >= 0)
        {
            // Synthesize the line-height from the "leading" (line spacing) / font-size
            var lineHeight = "1.2em";
            if (fontSize && fontLeading)
            {
                // Strip off the units; this keeps it as a relative measure.
                lineHeight = round1k(fontLeading / fontSize);
            }
        
            var topOffset = "";
            if (! transformMatrixUsed) {
//              topOffset = ' dy="-' + (textStr.match(/\r/g).length * lineHeight) + 'em"';
                topOffset = ' dy="-' + stripUnits(this.getLayerAttr("textKey.boundingBox.bottom")) + 'px"';
            }

            var textSpans = ' <tspan' + topOffset + '>';

            textSpans += textStr.replace(/\r/g, '</tspan><tspan x="' + leftMargin + '" dy="' + lineHeight + 'em">');
            textSpans += '</tspan>\n';
            // Blank lines must have at least a space or else dy is ignored.
            textSpans = textSpans.replace(/><\/tspan>/g, "> </tspan>");
            this.addText(textSpans);
        }
        else {
            this.addText(textStr);
        }
        this.addText('</text>\n');
        this.popFXGroups();
    }
};

// Generate a file reference if the layer ends in an image-file suffix (return true)
// Otherwise, return false.
svg.getImageLayerFileRefSVG = function ()
{
    var validSuffix = {'.tiff': 1, '.png': 1, '.jpg': 1, '.gif': 1};
    
    // Apply generator's naming rules to the image names.  
    // If there's a list, just grab the first.
    var name = this.getLayerAttr("name").split(",")[0];
    
    var suffix = (name.lastIndexOf('.') >= 0)
                    ? name.slice(name.lastIndexOf('.')).toLowerCase() : null;
    suffix = (validSuffix[suffix]) ? suffix : null;
    if (! suffix) {
        return false;
    }

    this.addParam('xlink:href', name);
    return true;
};

// Write layer pixels as in-line PNG, base64 encoded.
svg.getImageLayerSVGdata = function ()
{
    var pngPath = new File(Folder.temp + "/png4svg" + this.currentLayer.layerID).fsName;
    this.writeLayerPNGfile(pngPath);

    var pngFile = new File(pngPath + ".png");
    pngFile.open('r');
    pngFile.encoding = "BINARY";
    var pngData64 = this.encodeBase64(pngFile.read());
    pngFile.close();
    pngFile.remove();
    this.addParam('xlink:href', "data:img/png;base64," + pngData64);
};

svg.getImageLayerSVG = function ()
{
    var boundsDesc = this.currentLayer.getLayerAttr("bounds");
    
    this.addText("<image ");

    this.addOpacity(true);
    var i, boundList = [' x="$left$"', ' y="$top$"', ' width="$width$"', ' height="$height$" '];
    for (i in boundList) {
        this.addAttribute(boundList[i], boundsDesc);
    }
    // If the image doesn't have a file suffix, then generate the output as in-line data.
    if (! this.getImageLayerFileRefSVG()) {
        this.getImageLayerSVGdata();
    }
    this.addText(" />\n");
};

// This walks the group and outputs all items in that group.  If the current layer
// is not a group, then it walks to the end of the document (i.e., for dumping
// the whole document).
svg.getGroupLayerSVG = function (processAllLayers)
{
    function isSVGLayerKind(kind)
    {
        return (cssToClip.isCSSLayerKind(kind) || (kind === kAdjustmentSheet));
    }

    processAllLayers = (typeof processAllLayers === "undefined") ? false : processAllLayers;
    // If processing all of the layers, don't stop at the end of the first group
    var layerLevel = processAllLayers ? 2 : 1;
    var visibleLevel = layerLevel;
    var i, curIndex = this.currentLayer.index;
    if (this.currentLayer.layerKind === kLayerGroupSheet)
    {
        if (! this.currentLayer.visible) {
            return;
        }
        curIndex--; // Step to next layer in group so layerLevel is correct
    }

    var groupLayers = [];
    while ((curIndex > 0) && (layerLevel > 0))
    {
        var nextLayer = new PSLayerInfo(curIndex, false);
        if (isSVGLayerKind(nextLayer.layerKind))
        {
            if (nextLayer.layerKind === kLayerGroupSheet)
            {
                if (nextLayer.visible && (visibleLevel === layerLevel)) {
                    visibleLevel++;
                }
                layerLevel++;
            }
            else
            {
                if (nextLayer.visible && (visibleLevel === layerLevel)) {
                    groupLayers.push(nextLayer);
                }
            }
        }
        else
        if (nextLayer.layerKind === kHiddenSectionBounder)
        {
            layerLevel--;
            if (layerLevel < visibleLevel) {
                visibleLevel = layerLevel;
            }
        }
        curIndex--;
    }

    for (i = groupLayers.length - 1; i >= 0; --i) {
        this.processLayer(groupLayers[i]);
    }
};

svg.processLayer = function (layer)
{
    this.setCurrentLayer(layer);

    /* jshint -W015 */   // Want this to look like a table, please
    switch (this.currentLayer.layerKind)
    {
    case kVectorSheet:      this.getShapeLayerSVG();    return true;
    case kTextSheet:        this.getTextLayerSVG();  return true;
    //case kPixelSheet:       this.getImageLayerSVG();    return true; //TODO fix it
    case kPixelSheet: throw "Image layers aren't supported";
    case kAdjustmentSheet:  this.getAdjustmentLayerSVG(); return true;
   
    case kLayerGroupSheet:  
        this.getGroupLayerSVG();        
        return true;
    }
    /* jshint +W015 */
    return false;
};

// Save & restore the units (also stash benchmark timing here)
svg.pushUnits = function ()
{
    this.saveUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;  // Web dudes want pixels.
    this.startTime = new Date();
};

svg.popUnits = function ()
{
    if (this.saveUnits) {
        app.preferences.rulerUnits = this.saveUnits;
    }
    var elapsedTime = new Date() - this.startTime;
    return ("time: " + (elapsedTime / 1000.0) + " sec");
};

// This assumes "params" are pre-defined globals
svg.createSVGDesc = function ()
{
    if (params.needReset)
        svg.reset();
    svg.pushUnits();
    
    if (params.needPush) {
        params.figure_min_x.push(1000000);
        params.figure_min_y.push(1000000);
        params.figure_max_x.push(-1000000);
        params.figure_max_y.push(-1000000);
    }

    svg.processLayer(params.layerID);
    
    if (params.needReset){
        svg.reset();
        svg.processLayer(params.layerID);
    }

    if (params.needPush) {
        var min_x = params.figure_min_x.pop();
        var min_y = params.figure_min_y.pop();
        var max_x = params.figure_max_x.pop();
        var max_y = params.figure_max_y.pop();
        params.figure_min_x[params.figure_min_x.length - 1] = Math.min(min_x, params.figure_min_x.slice(-1)[0]);
        params.figure_min_y[params.figure_min_y.length - 1] = Math.min(min_y, params.figure_min_y.slice(-1)[0]);
        params.figure_max_x[params.figure_max_x.length - 1] = Math.max(max_x, params.figure_max_x.slice(-1)[0]);
        params.figure_max_y[params.figure_max_y.length - 1] = Math.max(max_y, params.figure_max_y.slice(-1)[0]);
    }
        
    svg.popUnits();
    
    var svgResult = this.svgHeader;
    var docHeight = -1;
    var docWidth = -1;
    if (params.figure_min_x.slice(-1)[0] < params.figure_max_x.slice(-1)[0]) {
        docHeight = Math.ceil(params.figure_max_y.slice(-1)[0] - params.figure_min_y.slice(-1)[0]);
        svgResult += '  height="' + docHeight + 'px" \n';
        
        docWidth = Math.ceil(params.figure_max_x.slice(-1)[0] - params.figure_min_x.slice(-1)[0]);
        svgResult += '  width="' + docWidth + 'px" \n';
    }

    svgResult += ">\n";
 
    if (svg.svgDefs.length > 0) {
        svgResult += "<defs>\n" + svg.svgDefs + "\n</defs>";
    }
    if (params.layerScale !== 1) {
        svgResult += '<g transform="scale(' + round1k(params.layerScale) + ')" >';
    }
    svgResult += svg.svgText;
    if (params.layerScale !== 1) {
        svgResult += '</g>';
    }

    svgResult += "</svg>";
    //var svgDesc = new ActionDescriptor();
    //svgDesc.putString(app.stringIDToTypeID("svgText"), encodeURI(svgResult));
    //return svgDesc;
    return svgResult;
};

// Don't execute if runGetLayerSVGfromScript is set, this allows other scripts
// or test frameworks to load and run this file.
//if ((typeof runGetLayerSVGfromScript === "undefined") || (! runGetLayerSVGfromScript)) {
//    executeAction(app.stringIDToTypeID("sendJSONToNetworkClient"), svg.createSVGDesc(), DialogModes.NO);
//}


////////////////////////////////////////////////////////////////////////
var generate = function(){};

function hasBackground() {
    try {
            activeDocument.backgroundLayer; 
            return true;
        } catch(e) {
            return false;
        } 
}

function fixId(id) {
    /*if (!hasBackground())        
        return id + 1;
    var ref = new ActionReference();
    ref.putProperty( classProperty, keyLayerID );
    ref.putIndex( classLayer, id );
    return executeActionGet( ref ).getVal("layerID");*/
    return id;
}

function getSelectedLayersIdx (){ 
    var selectedLayers = new Array; 
    var ref = new ActionReference(); 
    ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
    var desc = executeActionGet(ref); 
    if( desc.hasKey( stringIDToTypeID( 'targetLayers' ) ) ){ 
        desc = desc.getList( stringIDToTypeID( 'targetLayers' )); 
        var c = desc.count 
        var selectedLayers = new Array(); 
        for(var i=0;i<c;i++){ 
            try{ 
                activeDocument.backgroundLayer; 
                selectedLayers.push(  desc.getReference( i ).getIndex() ); 
            }catch(e){ 
                selectedLayers.push(  desc.getReference( i ).getIndex()+1 ); 
            } 
        } 
    }else{ 
        var ref = new ActionReference(); 
        ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "ItmI" )); 
        ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
        try {
            activeDocument.backgroundLayer; 
            selectedLayers.push( executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))-1); 
        } catch(e) {
            selectedLayers.push( executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))); 
        } 
        var vis = app.activeDocument.activeLayer.visible;
        if(vis == true) app.activeDocument.activeLayer.visible = false;
        var desc9 = new ActionDescriptor();
        var list9 = new ActionList();
        var ref9 = new ActionReference();
        ref9.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
        list9.putReference( ref9 );
        desc9.putList( charIDToTypeID('null'), list9 );
        executeAction( charIDToTypeID('Shw '), desc9, DialogModes.NO );
        if(app.activeDocument.activeLayer.visible == false) selectedLayers.shift();
        app.activeDocument.activeLayer.visible = vis;
    } 
    return selectedLayers; 
}

function getLayerNameByIndex( idx ) { 
    var ref = new ActionReference(); 
    ref.putProperty( charIDToTypeID('Prpr') , charIDToTypeID( 'Nm  ' )); 
    ref.putIndex( charIDToTypeID( 'Lyr ' ), idx );
    return executeActionGet(ref).getString(charIDToTypeID( 'Nm  ' ));; 
}

function saveFile(fileName, data) {
    var file = null;
     try {
        file = new File(fileName);
        file.encoding="UTF-8";
        file.open("w");
        file.writeln(data);
    } catch(e) {
            alert("Failed to save names file: " + e, "Error");
    }

    if (file)
        file.close();

}

var params = new Object();
params.layerScale  = 1;

function fix_vector_data(vd) {
    if (vd.length == 0) // For Background is ok
        return "";
// in format "M508.720,580.734 C508.720,580.734 190.173,648.817 190.173,648.817 C190.173,648.817 -28.062,406.989 -28.062,406.989 C-28.062,406.989 72.250,97.078 72.250,97.078 C72.250,97.078 390.796,28.995 390.796,28.995 C390.796,28.995 609.031,270.823 609.031,270.823 C609.031,270.823 508.720,580.734 508.720,580.734 Z"
// "M391.491,1665.333 C398.949,1665.333 402.677,1672.000 402.677,1672.000 C402.677,1672.000 398.949,1678.667 391.491,1678.667 C384.034,1678.667 380.305,1672.000 380.305,1672.000 C380.305,1672.000 384.034,1665.333 391.491,1665.333 M391.491,1662.000 C382.198,1662.000 377.603,1670.026 377.412,1670.367 C376.845,1671.381 376.845,1672.619 377.412,1673.633 C377.603,1673.974 382.199,1682.000 391.491,1682.000 C400.784,1682.000 405.380,1673.974 405.571,1673.633 C406.138,1672.619 406.138,1671.381 405.571,1670.368 C405.380,1670.026 400.784,1662.000 391.491,1662.000 C391.491,1662.000 391.491,1662.000 391.491,1662.000 ZM391.491,1667.000 C388.742,1667.000 386.513,1669.238 386.513,1672.000 C386.513,1674.762 388.742,1677.000 391.491,1677.000 C394.240,1677.000 396.469,1674.762 396.469,1672.000 C396.469,1669.238 394.240,1667.000 391.491,1667.000 ZM393.151,1672.000 C392.540,1672.000 392.044,1671.503 392.044,1670.889 C392.044,1670.889 392.044,1670.887 392.044,1670.887 C391.433,1670.887 390.938,1670.390 390.938,1669.776 C390.938,1669.163 391.432,1668.666 392.043,1668.666 C393.264,1668.666 394.257,1669.663 394.257,1670.889 C394.257,1671.503 393.761,1672.000 393.151,1672.000 Z"
// Final Z is optional too
    var rg = /^((M-?\d*\.\d{3},-?\d*\.\d{3}\s+(C-?\d*\.\d{3},-?\d*\.\d{3}\s+-?\d*\.\d{3},-?\d*\.\d{3}\s+-?\d*\.\d{3},-?\d*\.\d{3}\s+)*)+Z?\s*)+$/;
    if (!rg.test(vd))
        throw "'" + vd + "' doesn't match to vector format";

    var min_x = params.figure_min_x.slice(-1)[0];
    var min_y = params.figure_min_y.slice(-1)[0];
    var max_x = params.figure_max_x.slice(-1)[0];
    var max_y = params.figure_max_y.slice(-1)[0];

    var orig = vd.split(" ");
    for (var a in orig) {
        var cur = orig[a];
        while (cur.length != 0 && (cur[0] == 'M' || cur[0] == 'C' || cur[0] == 'Z')) {
            cur = cur.substr(1);
        }
        if (cur.length == 0) {
            continue;
        }
   
        var cur_nums = cur.split(',');
        if (cur_nums.length != 2)
            throw "'" + vd + "' doesn't match to vector format (2)";
            
        var cx = parseFloat(cur_nums[0]);
        min_x = Math.min(Math.floor(cx), min_x);
        max_x = Math.max(cx, max_x);
        
        var cy = parseFloat(cur_nums[1]);
        min_y = Math.min(Math.floor(cy), min_y);
        max_y = Math.max(cy, max_y);
    }

    var result = "";
    for (var a in orig) {
        var cur = orig[a];
        while (cur.length != 0 && (cur[0] == 'M' || cur[0] == 'C' || cur[0] == 'Z')) {
            result += cur[0];
            cur = cur.substr(1);
        }
        if (cur.length == 0) {
            result += " ";
            continue;
        }
    
        var cur_nums = cur.split(',');
        if (cur_nums.length != 2)
            throw "'" + vd + "' doesn't match to vector format (2)";
            
        var cx = parseFloat(cur_nums[0]) - min_x;
        var cy = parseFloat(cur_nums[1]) - min_y;
        result += cx + "," + cy + " ";
    }

    params.figure_min_x[params.figure_min_x.length - 1] = Math.min(min_x, params.figure_min_x.slice(-1)[0]);
    params.figure_min_y[params.figure_min_y.length - 1] = Math.min(min_y, params.figure_min_y.slice(-1)[0]);
    params.figure_max_x[params.figure_max_x.length - 1] = Math.max(max_x, params.figure_max_x.slice(-1)[0]);
    params.figure_max_y[params.figure_max_y.length - 1] = Math.max(max_y, params.figure_max_y.slice(-1)[0]);

    return result;
}

var all_function = function() {
////////////////////////////////////////////////////////////////

generate = function(outputPath) {
    try {
        var dir = outputPath;
        if (dir) {
            var selected = getSelectedLayersIdx();
            
            params.figure_min_x = new Array();
            params.figure_min_y = new Array();
            params.figure_max_x = new Array();
            params.figure_max_y = new Array();
        
            for(var a in selected) {
                params.needReset = true;
                params.needPush = true;
                params.figure_min_x.push(1000000);
                params.figure_min_y.push(1000000);
                params.figure_max_x.push(-1000000);
                params.figure_max_y.push(-1000000);
                
                params.layerID = fixId(selected[a]);

                var data = svg.createSVGDesc();

                params.figure_min_x.pop();
                params.figure_min_y.pop();
                params.figure_max_x.pop();
                params.figure_max_y.pop();

                var layerName = getLayerNameByIndex(selected[a]); // Do not need to be fixed
                var cleanedName = layerName.replace(/[\/\\:*"<>|]/g, '');
                var name = dir + "//" + cleanedName + ".svg";
                saveFile(name, data);
                return "<object><property id=\"status\"><string>OK</string></property></object>";
            }
        }

    }
    catch (e) {
        return "<object><property id=\"error\"><string>" + e + "</string></property></object>";
    }
};

};