// (c) Copyright 2013.  Adobe Systems, Incorporated.  All rights reserved.
//
// Export Color Lookup Tables automation in JavaScript
//
//

// IN_PROGRESS - why can't ColorSync Utility open any profile with a grid of 160 or larger?
//					150 works, 160 fails -- sent samples in email to Apple on Nov 8, 2013; they are investigating

// DEFERRED - right to left filenames (Arabic) come out wrong because of appending "RGB" and file extensions
// 				This seems to be a bug in JavaScript's handing of strings, not sure we can solve it easily.
//				It might possibly be handled by checking bidi markers in UTF8 stream and adding custom handling for appending text/extensions.

/*
@@@BUILDINFO@@@ ExportColorLookupTables.jsx 1.0.0.2
*/

/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING

<javascriptresource>
<name>$$$/JavaScripts/ExportColorLookupTables/Menu=Color Lookup Tables...</name>
<menu>export</menu>
<enableinfo>true</enableinfo>
<eventid>9AA9D7D6-C209-494A-CC01-4E7D926DA642</eventid>
</javascriptresource>

// END__HARVEST_EXCEPTION_ZSTRING
*/

#target photoshop
const appUIState = app.displayDialogs;
app.displayDialogs = DialogModes.NO; // suppress all app dialogs
app.bringToFront(); // make Photoshop the frontmost app, just in case

// on localized builds we pull the $$$/Strings from a .dat file
$.localize = true;


// from Terminology.jsx
const classApplication		= app.charIDToTypeID('capp');
const classProperty			= app.charIDToTypeID('Prpr');
const enumTarget			= app.charIDToTypeID('Trgt');
const eventGet				= app.charIDToTypeID('getd');
const eventSet				= app.charIDToTypeID('setd');
const kcolorSettingsStr		= app.stringIDToTypeID("colorSettings");
const kDither				= app.charIDToTypeID('Dthr');
const keyTo					= app.charIDToTypeID('T   ');
const typeNULL 				= app.charIDToTypeID('null');
const typeOrdinal			= app.charIDToTypeID('Ordn');
const kFloatWindowStr		= app.stringIDToTypeID("floatWindow");
const typePurgeItem			= app.charIDToTypeID('PrgI');
const enumClipboard			= app.charIDToTypeID('Clpb');
const eventPurge			= app.charIDToTypeID('Prge');

const keyExportLUT 			= app.charIDToTypeID( "lut " );
const keyFilePath			= app.charIDToTypeID( 'fpth' );
const keyDescription		= app.charIDToTypeID( 'dscr' );
const keyCopyright			= app.charIDToTypeID( 'Cpyr' );
const keyDataPoints			= app.charIDToTypeID( 'gPts' );
const keyWriteICC			= app.charIDToTypeID( 'wICC' );
const keyWrite3DL			= app.charIDToTypeID( 'w3DL' );
const keyWriteCUBE			= app.charIDToTypeID( 'wCUB' );
const keyWriteCSP			= app.charIDToTypeID( 'wCSP' );
const keyUseLowerCase		= app.charIDToTypeID( 'lcFE' );

const kScriptOptionsKey	= "9AA9D7D6-C209-494A-CC01-4E7D926DA642";	// same as eventID above

const sGridMin = 7;	// these must match the slider range defined in the dialog layout
const sGridMax = 256;
const sGridDefault = 32;

// our baseline UI configuration info
var gSaveFilePath = "";		// overwritten by document path
var gDescription = "";		// overwritten by document name
var gCopyright = "";		// "Adobe Systems Inc., All Rights Reserved";
var gGridPoints = sGridDefault;
var gDoSaveICCProfile	= true;
var gDoSave3DL			= true;
var gDoSaveCUBE			= true;
var gDoSaveCSP			= true;
var gDoUseLowerCase		= false;


gScriptResult = undefined;

// start doing the work...
main();

app.displayDialogs = appUIState; // restore original dialog state

gScriptResult;	// must be the last thing - this is returned as the result of the script



///////////////////////////////////////////////////////////////////////////////

function readOptionsFromDescriptor( d )
{
	if (!d)
		return;

	if (d.hasKey(keyFilePath))
		gSaveFilePath = d.getString( keyFilePath );	// will be overridden by UI
	if (d.hasKey(keyDescription))
		gDescription = d.getString( keyDescription );	// will be overridden always
	if (d.hasKey(keyCopyright))
		gCopyright = d.getString( keyCopyright );
	if (d.hasKey(keyDataPoints))
		{
		var temp = d.getInteger( keyDataPoints );
		if (temp >= sGridMin && temp <= sGridMax)
			gGridPoints = temp;
		}
	if (d.hasKey(keyWriteICC))
		gDoSaveICCProfile = d.getBoolean( keyWriteICC );
	if (d.hasKey(keyWrite3DL))
		gDoSave3DL = d.getBoolean( keyWrite3DL );
	if (d.hasKey(keyWriteCUBE))
		gDoSaveCUBE = d.getBoolean( keyWriteCUBE );
	if (d.hasKey(keyWriteCSP))
		gDoSaveCSP = d.getBoolean( keyWriteCSP );
	if (d.hasKey(keyUseLowerCase))
		gDoUseLowerCase = d.getBoolean( keyUseLowerCase );
}

function createDescriptorFromOptions()
{
	var desc = new ActionDescriptor();
	desc.putString( keyFilePath, gSaveFilePath );		// will be overridden by UI
	desc.putString( keyDescription, gDescription );		// will always be overridden by document name
	desc.putString( keyCopyright, gCopyright );
	desc.putInteger( keyDataPoints, gGridPoints );
	desc.putBoolean( keyWriteICC, gDoSaveICCProfile );
	desc.putBoolean( keyWrite3DL, gDoSave3DL );
	desc.putBoolean( keyWriteCUBE, gDoSaveCUBE );
	desc.putBoolean( keyWriteCSP, gDoSaveCSP );
	desc.putBoolean( keyUseLowerCase, gDoUseLowerCase );
	return desc;
}

function doExportUI()
{
	// DEFERRED - it might be nice to be able to run without UI
	//			  Right now we can't, but someone could modify the script if they so desire

	const sDescription = localize("$$$/AdobeScript/Export3DLUT/Description=Description:");
	const sCopyright = localize("$$$/AdobeScript/Export3DLUT/Copyright=Copyright:");
	const sQuality = localize("$$$/AdobeScript/Export3DLUT/Quality=Quality");
	const sGridPoints = localize("$$$/AdobeScript/Export3DLUT/GridPoints=Grid Points:");
	const sFormatsToSave = localize("$$$/AdobeScript/Export3DLUT/Formats=Formats");
	const sOpenButton = localize("$$$/JavaScripts/psx/OK=OK");
	const sCancelButton = localize("$$$/JavaScripts/psx/Cancel=Cancel");
	const strTextInvalidType = localize("$$$/JavaScripts/Export3DLUT/InvalidType=Invalid numeric value. Default value inserted.");
	const strTextInvalidNum = localize("$$$/JavaScripts/Export3DLUT/InvalidNum=A number between 7 and 256 is required. Closest value inserted.");
	const strNoExportsSelected = localize("$$$/JavaScripts/Export3DLUT/NoExportTypesSelected=No export types were selected.");
	const strExportPrompt = localize("$$$/JavaScripts/Export3DLUT/ExportColorLookup=Export Color Lookup");
	const strUntitledLUT = localize("$$$/JavaScripts/Export3DLUT/UntitledLUTFilename=untitled.lut");
	const strUseLowerCase = localize("$$$/JavaScripts/Export3DLUT/UseLowerCase=Use lowercase file extensions");
	
	const sSaveICC = localize("$$$/AdobeScript/Export3DLUT/ICCProfile=ICC Profile");
	
	// these are not localized, since they refer to file format extensions
	const sSave3DL = "3DL";
	const sSaveCUBE = "CUBE";
	const sSaveCSP = "CSP";
	
	// strings similar to JPEG quality
	const sPoor = localize("$$$/AdobeScript/Export3DLUT/Poor=Poor");
	const sLow = localize("$$$/AdobeScript/Export3DLUT/Low=Low");
	const sMedium = localize("$$$/AdobeScript/Export3DLUT/Medium=Medium");
	const sHigh = localize("$$$/AdobeScript/Export3DLUT/High=High");
	const sMaximum = localize("$$$/AdobeScript/Export3DLUT/Maximum=Maximum");


	const ui = // dialog resource object
		"dialog { \
			orientation: 'row', \
			gp: Group { \
				orientation: 'column', alignment: 'fill', alignChildren: 'fill', \
				description: Group { \
					orientation: 'row', alignment: 'fill', alignChildren: 'fill', \
					st: StaticText { text:'Description:' }, \
					et: EditText { characters: 30, properties:{multiline:false}, text:'<your description here>' } \
				}, \
				copyright: Group { \
					orientation: 'row', alignment: 'fill', alignChildren: 'fill', \
					st: StaticText { text:'Copyright:' }, \
					et: EditText { characters: 30, properties:{multiline:false}, text:'<your copyright here>' } \
				}, \
				ckLowerCase: Checkbox { text:'Use lowercase file extensions', value:false } \
				qual: Panel { \
					text: 'Quality', \
					orientation: 'column', alignment: 'fill', alignChildren: 'fill', \
					g2: Group { \
						st: StaticText { text:'Grid Points:' }, \
						et: EditText { characters:4, justify:'right' } \
						drp: DropDownList {alignment:'right'} \
					}, \
					sl: Slider { minvalue:7, maxvalue:256, value: 32 }, \
				}, \
				options: Panel { \
					text: 'Formats', \
					orientation: 'column', alignment: 'fill', alignChildren: 'left', \
					ck3DL: Checkbox { text:'3DL', value:true }, \
					ckCUBE: Checkbox { text:'CUBE', value:true } \
					ckCSP: Checkbox { text:'CSP', value:true } \
					ckICC: Checkbox { text:'ICC Profile', value:true } \
				}, \
			}, \
			gButtons: Group { \
				orientation: 'column', alignment: 'top', alignChildren: 'fill', \
				okBtn: Button { text:'Ok', properties:{name:'ok'} }, \
				cancelBtn: Button { text:'Cancel', properties:{name:'cancel'} } \
			} \
		}";
	
	const titleStr = localize("$$$/AdobeScript/Export3DLUT/DialogTitle/ExportColorLookupTables=Export Color Lookup Tables");
	var win = new Window (ui, titleStr ); // new window object with UI resource

	// 							poor, low, medium, high, max
	var MenuQualityToGridPoints = [ 8, 16, 32, 64, 256 ];
	
	function GridPointsToQualityMenuIndex( num )
		{
		var menu = MenuQualityToGridPoints;
		var menuItems = menu.length;
		if (num <= menu[0])
			return 0;
		if (num >= menu[ menuItems-1 ])
			return (menuItems-1);
		for (var i = 0; i < (menuItems-1); ++i)
			{
			if ((num >= menu[i]) && (num < menu[i+1]))
				return i;
			}
		return 0;	// just in case of a logic failure
		}
	
	// insert our localized strings
	var drop = win.gp.qual.g2.drp; // for easier typing
	drop.add('item', sPoor ); 	// 0
	drop.add('item', sLow ); 	// 1
	drop.add('item', sMedium ); // 2
	drop.add('item', sHigh ); 	// 3
	drop.add('item', sMaximum ); // 4
	drop.selection = drop.items[2]; // Medium
	
	win.gp.description.st.text = sDescription;
	win.gp.copyright.st.text = sCopyright;
	win.gp.qual.text = sQuality;
	win.gp.qual.g2.st.text = sGridPoints;
	win.gp.ckLowerCase.text = strUseLowerCase;
	
	win.gp.options.text = sFormatsToSave;
	win.gp.options.ck3DL.text = sSave3DL;
	win.gp.options.ckCUBE.text = sSaveCUBE;
	win.gp.options.ckCSP.text = sSaveCSP;
	win.gp.options.ckICC.text = sSaveICC;
	
	win.gButtons.okBtn.text = sOpenButton;
	win.gButtons.cancelBtn.text = sCancelButton;
	
	
	// set starting parameters
	win.gp.description.et.text = gDescription;
	win.gp.copyright.et.text = gCopyright;
	win.gp.options.ckICC.value = gDoSaveICCProfile;
	win.gp.options.ck3DL.value = gDoSave3DL;
	win.gp.options.ckCUBE.value = gDoSaveCUBE;
	win.gp.options.ckCSP.value = gDoSaveCSP;
	win.gp.ckLowerCase.value = gDoUseLowerCase;
	
	
	// global flag/hack to keep the UI pretty
	var gGlobalPreventChanges = false;

	with (win.gp.qual)
		{
		sl.value = gGridPoints;
		g2.et.text = gGridPoints;
		drop.selection = drop.items[ GridPointsToQualityMenuIndex(gGridPoints) ];
		// global flag is ugly, but recursive change calls are uglier
		g2.et.onChange = function () {  if (gGlobalPreventChanges) { return; }
										gGlobalPreventChanges = true;
										var val = Number(this.text);
										this.parent.parent.sl.value = val;
										drop.selection = drop.items[ GridPointsToQualityMenuIndex(val) ];
										gGlobalPreventChanges = false; };
		sl.onChanging = function () {   if (gGlobalPreventChanges) { return; }
										gGlobalPreventChanges = true;
										var val = Math.floor(this.value);
										this.parent.g2.et.text = val; 
										drop.selection = drop.items[ GridPointsToQualityMenuIndex(val) ];
										gGlobalPreventChanges = false; };
		};
	
	// DEFERRED - we should also set the value if the same menu item is selected again (reset)
	// 					but the JSX toolkit doesn't support that
	drop.onChange = function()
		{
		if (gGlobalPreventChanges) { return; }
		gGlobalPreventChanges = true;
		var theSelection = this.selection.text;
		if (theSelection != null) { // only change if selection made
			var theSelectionIndex = this.selection.index;
			var newGridPoints = MenuQualityToGridPoints[ theSelectionIndex ];
			win.gp.qual.g2.et.text = newGridPoints;
			win.gp.qual.sl.value = newGridPoints;
		}
		gGlobalPreventChanges = false;
		};
	
	win.onShow = function ()
		{
		this.qual.sl.size.width = 128;
		this.layout.layout(true);
		}

	win.gButtons.cancelBtn.onClick = function () { this.window.close(2); };
	
	// validate inputs when the user hits OK
    var gInAlert = false;
	win.gButtons.okBtn.onClick = function ()
		{
		if (gInAlert == true)
			{
			gInAlert = false;
			return;
			}

		var gridText = win.gp.qual.g2.et.text;
		var w = Number(gridText);
		
		var inputErr = false;

		if ( isNaN( w ) )
			{
			if ( DialogModes.NO != app.playbackDisplayDialogs )
				{
				gInAlert = true;
				alert( strTextInvalidType );
				gInAlert = false;
				}
			win.gp.qual.g2.et.text = sGridDefault;
			win.gp.qual.sl.value = sGridDefault;
			drop.selection = drop.items[ GridPointsToQualityMenuIndex(sGridDefault) ];
			return false;
			}
		
		if ( (w < sGridMin) || (w > sGridMax) )
			{
			if ( DialogModes.NO != app.playbackDisplayDialogs )
				{
				gInAlert = true;
				alert( strTextInvalidNum );
				gInAlert = false;
				}
			}

		if ( w < sGridMin)
			{
			inputErr = true;
			drop.selection = drop.items[ GridPointsToQualityMenuIndex(sGridMin) ];
			win.gp.qual.g2.et.text = sGridMin;
			win.gp.qual.sl.value = sGridMin;
			return false;
			}

		if ( w > sGridMax)
			{
			inputErr = true;
			drop.selection = drop.items[ GridPointsToQualityMenuIndex(sGridMax) ];
			win.gp.qual.g2.et.text = sGridMax;
			win.gp.qual.sl.value = sGridMax;
			return false;
			}

		if (inputErr == false) 
			{
			win.close(true);
			}
		
		return;
		}
	
	win.center();	// move to center the dialog
	var ret = win.show();  // dialog display
	
	if (2 == ret)
		return false;	// user cancelled
	
	// user hit OK, copy values from dialog
	gDescription = win.gp.description.et.text;
	gCopyright = win.gp.copyright.et.text;
	gGridPoints = win.gp.qual.sl.value;
	
	gDoSave3DL			= win.gp.options.ck3DL.value;
	gDoSaveCUBE			= win.gp.options.ckCUBE.value;
	gDoSaveCSP			= win.gp.options.ckCSP.value;
	gDoSaveICCProfile	= win.gp.options.ckICC.value;
	gDoUseLowerCase		= win.gp.ckLowerCase.value;
	
	
	// if no files are going to be saved, then we have zero work to do
	if ((false == gDoSaveICCProfile) && (false == gDoSave3DL) &&
		(false == gDoSaveCUBE) && (false == gDoSaveCSP) )
		{
		// tell the user that no formats were selected
		alert( strNoExportsSelected );
		gScriptResult = 'cancel'; // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
		return false;
		}
	
	// prompt user for directory and output base filename
	// default to directory and filename of current document

	var currentDocumentPath
	try
		{
		// if the file has no path (not saved), then this throws
		var documentPath = app.activeDocument.fullName.fsName;		// Get the OS friendly file path and name
		documentPath = documentPath.replace(/\....$/,'');	// remove extension, if there is one
		documentPath = documentPath + ".lut";	// add dummy extension
		currentDocumentPath = File ( documentPath );
		}
	catch (e)
		{
		// if there was no document path, default to user's home directory
		var defaultName = "~/" + strUntitledLUT;
		currentDocumentPath = File(defaultName);
		}
	
	var fname = currentDocumentPath.saveDlg(strExportPrompt);
	if (fname == null)
		return false;
	
	gSaveFilePath = fname.fsName;

	return true;

}


function doExportLUTs( path )
{
	const keyUsing    		= charIDToTypeID( 'Usng' );
	const eventExport 		= charIDToTypeID( 'Expr' );
	
	var desc = new ActionDescriptor();
	var desc2 = new ActionDescriptor();
	
	desc2.putString( keyFilePath, path );
	desc2.putString( keyDescription, gDescription );
	desc2.putInteger( keyDataPoints, gGridPoints );

	// assemble the full copyright string, if needed
	var copyrightAssembled = gCopyright;
	if (gCopyright != "")
		{
		var theDate = new Date();
		// the year is from 1900 ????
		var theYear = (theDate.getYear() + 1900).toString();

		// Localization team says to just use the year
		var dateString = theYear;
		copyrightAssembled = localize("$$$/JavaScripts/Export3DLUT/Copyright=(C) Copyright ") + dateString + " " + gCopyright;
		}
	desc2.putString( keyCopyright, copyrightAssembled );

	// select output format
	desc2.putBoolean( keyWriteICC, gDoSaveICCProfile );
	desc2.putBoolean( keyWrite3DL, gDoSave3DL );
	desc2.putBoolean( keyWriteCUBE, gDoSaveCUBE );
	desc2.putBoolean( keyWriteCSP, gDoSaveCSP );
	desc2.putBoolean( keyUseLowerCase, gDoUseLowerCase );

    desc.putObject( keyUsing, keyExportLUT, desc2 );

	try
		{
		var resultDesc = executeAction( eventExport, desc, DialogModes.NO );
		}
	catch (e)
		{
		if ( e.number != 8007 ) { 	// don't report error on user cancel
			var str = localize("$$$/JavaScripts/Export3DLUT/ExportLUTFailed=Unable to run the Export Color Lookup plugin because ");
			alert( str + e + " : " + e.line );
			}
		gScriptResult = 'cancel'; // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
		return false;
		}
	
	return true;
}

function doRenderGrid( points )
{
	// call the grid rendering plugin to do the work
    const keyRenderGrid 	= charIDToTypeID( "3grd" );
	const keyDataPoints2	= charIDToTypeID( 'grdP' );
    
	var args = new ActionDescriptor();
    args.putInteger( keyDataPoints2, points);
    
	try
		{
		var result = executeAction( keyRenderGrid, args, DialogModes.NO );
		}
	catch (e)
		{
		if ( e.number != 8007 ) { 	// don't report error on user cancel
			var str = localize("$$$/JavaScripts/Export3DLUT/RenderGridFailed=Unable to render color grid because ");
			alert( str + e + " : " + e.line );
			}
		gScriptResult = 'cancel'; // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
		return false;
		}

	return true;
}

function resizeDocumentInPixels( width, height )
{
	var myDocument = app.activeDocument;
	var originalRulerUnits = app.preferences.rulerUnits;
	app.preferences.rulerUnits = Units.PIXELS;
	myDocument.resizeCanvas( width, height, AnchorPosition.MIDDLECENTER)
	app.preferences.rulerUnits = originalRulerUnits;
}

function GetColorSettings()
{
	var desc1 = new ActionDescriptor();
	var ref1 = new ActionReference();
	ref1.putProperty( classProperty, kcolorSettingsStr );
	ref1.putEnumerated( classApplication, typeOrdinal, enumTarget );
	desc1.putReference( typeNULL, ref1 );
	var result = executeAction( eventGet, desc1, DialogModes.NO );
	var desc2 = result.getObjectValue( kcolorSettingsStr );
	return desc2;
}

function GetColorConversionDitherState()
{
	var settings = GetColorSettings();
	if (settings.hasKey(kDither))
		return settings.getBoolean( kDither );
	else
		return null;
}

function ConvertTo16Bit()
{
	const eventConvertMode = charIDToTypeID( 'CnvM' );
	const keyDepth = charIDToTypeID( 'Dpth' );
	var modeDesc16Bit = new ActionDescriptor();
	modeDesc16Bit.putInteger( keyDepth, 16 );
	var result = executeAction( eventConvertMode, modeDesc16Bit, DialogModes.NO );
}

// state = true or false
function SetColorConversionDither( state )
{
	var desc1 = new ActionDescriptor();
	var ref1 = new ActionReference();
	ref1.putProperty( classProperty, kcolorSettingsStr );
	ref1.putEnumerated( classApplication, typeOrdinal, enumTarget );
	desc1.putReference( typeNULL, ref1 );
	var desc2 = new ActionDescriptor();
	desc2.putBoolean( kDither, state );
	desc1.putObject( keyTo, kcolorSettingsStr, desc2 );
	executeAction( eventSet, desc1, DialogModes.NO );
}

function PurgeClipboard()
{
	var desc1 = new ActionDescriptor();
	desc1.putEnumerated( typeNULL, typePurgeItem, enumClipboard );
	var result = executeAction( eventPurge, desc1, DialogModes.NO );
}

// This helps us avoid resizing existing document views in tabbed document mode.
// This is new functionality, and will not work in older Photoshop versions.
function MoveDocumentToNewWindow()
{
	var desc1 = new ActionDescriptor();
	var result = executeAction( kFloatWindowStr, desc1, DialogModes.NO );
}


function main()
{
	try
		{
		var tempDoc = null;
		var tempDoc2 = null;
		
		// do basic troubleshooting first

		// make sure there is a document
		if (!app.activeDocument)
			{
   			gScriptResult = 'cancel'; // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
			return;
			}

		// check the document mode
		var mode = app.activeDocument.mode;
		if (mode != DocumentMode.RGB
			&& mode != DocumentMode.LAB
			&& mode != DocumentMode.CMYK)
			{
			var str = localize("$$$/JavaScripts/Export3DLUT/UnsupportedColorMode=Could not export Color Lookup Tables because only RGB, LAB, and CMYK color modes are supported.");
			alert(str);
   			gScriptResult = 'cancel'; // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
			return;
			}

		// check the document depth, for safety
		var depth = app.activeDocument.bitsPerChannel;	// an object, not a number - why? I have no idea...
		var bitsPerChannel = 1;
		if (depth == BitsPerChannelType.EIGHT)
			bitsPerChannel = 8;
		else if (depth == BitsPerChannelType.SIXTEEN)
			bitsPerChannel = 16;
		else if (depth == BitsPerChannelType.THIRTYTWO)
			bitsPerChannel = 32;
		else
			{
			var str = localize("$$$/JavaScripts/Export3DLUT/UnsupportedImageDepth=Could not export Color Lookup Tables because only 8, 16, and 32 bits/channel are supported.");
			alert(str);
   			gScriptResult = 'cancel'; // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
			return;
			}
	
		// Check layer types: background plus adjustments only
		// For now, don't check each layer - a multiply solid layer still works as a color adjustment, as does selective blending
		// Users will get odd results from other layer types (layer masks, pixel layers, etc.)
		try
			{
			app.activeDocument.backgroundLayer.visible = true;
			}
		catch (e)
			{
			if (activeDocument.layers.length == 1)
				alert( localize("$$$/JavaScripts/Export3DLUT/NoAdjustmentLayers=Could not export Color Lookup Tables because this document has no adjustment layers.") );
			else
				alert( localize("$$$/JavaScripts/Export3DLUT/NoBackground=Could not export Color Lookup Tables because this document has no background.") );
   			gScriptResult = 'cancel'; // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
			return;
			}
	
	
		// look for last used params via Photoshop registry, getCustomOptions will throw if none exist
		try
			{
			var desc = app.getCustomOptions(kScriptOptionsKey);
			readOptionsFromDescriptor( desc );
			}
		catch(e)
			{
			// it's ok if we don't have any existing options, continue with defaults
			}
	
		// set some values from the document
		gDescription = app.activeDocument.name;
	
		// ask the user for options, bail if they cancel at any point
		if ( doExportUI() == false)
			{ 
   			gScriptResult = 'cancel'; // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
			return;
			}

		// we're good to go, so save our parameters for next time
		app.putCustomOptions(kScriptOptionsKey, createDescriptorFromOptions() );

		// remove file extension from filePath, if there is one
		gSaveFilePath = gSaveFilePath.replace(/\....$/,'');

		// calculate the size of image we need
		var width = gGridPoints * gGridPoints;
		var height = gGridPoints;

		if (mode == DocumentMode.CMYK)
			height = gGridPoints*gGridPoints;

		// duplicate the user document so we don't mess it up in any way
		tempDoc = app.activeDocument.duplicate("temporary");
		
		// make the temporary document active
		app.activeDocument.name = tempDoc;
		
		// to avoid resizing existing document views in tabbed mode
		MoveDocumentToNewWindow();
		
		// convert 8 bit documents to 16 bit/channel for improved quality of merged adjustments
		if (bitsPerChannel == 8)
			{
			ConvertTo16Bit();
			depth = BitsPerChannelType.SIXTEEN;
			}

		// resize the temporary canvas to our target size
		resizeDocumentInPixels( width, height )

		// select background layer
		tempDoc.activeLayer = tempDoc.backgroundLayer;

		// render lookup base grid
		var worked = doRenderGrid( gGridPoints );
		if (worked != true)
			{
			tempDoc.close( SaveOptions.DONOTSAVECHANGES );
			return;	// error should have already been shown, and there is not much we can do
			}

		// do not flatten here -- the export automatically gets flattened data
		// and we may need layers for LAB->RGB conversion below

		// export the chosen formats
		worked = doExportLUTs( gSaveFilePath );
		if (worked != true)
			{
			tempDoc.close( SaveOptions.DONOTSAVECHANGES );
			return;	// error should have already been shown, and there is not much we can do
			}

		// for LAB documents to export 3DLUT (which are inherently RGB), we have to do additional work
		// As a bonus, this works for CMYK as well!
		if ( mode != DocumentMode.RGB )
			{
			var filePath = gSaveFilePath + "RGB";
	
			var oldDitherState = GetColorConversionDitherState();
	
			try
				{
				SetColorConversionDither(false);
		
				const targetProfileName = "sRGB IEC61966-2.1";

				// new document temp2 in sRGB, matching depth of original
				var originalRulerUnits = app.preferences.rulerUnits;
				app.preferences.rulerUnits = Units.PIXELS;
				tempDoc2 = app.documents.add( width, gGridPoints, 72, "temp2",
												NewDocumentMode.RGB, DocumentFill.WHITE,
												1.0, depth, targetProfileName );
				app.preferences.rulerUnits = originalRulerUnits;
	
				// make the new doc active
				app.activeDocument.name = tempDoc2;
		
				// to avoid resizing existing document views in tabbed mode
				MoveDocumentToNewWindow();

				// insert grid
				worked = doRenderGrid( gGridPoints );
				if (worked == true)
					{
					tempDoc2.selection.selectAll();
					tempDoc2.activeLayer = tempDoc2.backgroundLayer;
					tempDoc2.selection.copy();
					tempDoc2.close( SaveOptions.DONOTSAVECHANGES );
					tempDoc2 = null;
	
					// make sure temp1 is active
					app.activeDocument.name = tempDoc;
					// resize for RGB grid
					resizeDocumentInPixels( width, gGridPoints );
					tempDoc.selection.selectAll();
					tempDoc.paste(true);
					PurgeClipboard();	// so we don't leave an odd, large item on the clipboard
					tempDoc.selection.deselect();
					tempDoc.flatten();
					// convert temp1 to sRGB
					tempDoc.convertProfile( targetProfileName, Intent.RELATIVECOLORIMETRIC, true, false );
	
					// export the chosen formats
					worked = doExportLUTs( filePath );
					// at this point we still have to clean up, even if the call failed, so fall through
					}
				else
					{
					tempDoc2.close( SaveOptions.DONOTSAVECHANGES );
					}
				}
			catch (e)
				{
				if ( e.number != 8007 ) { 	// don't report error on user cancel
					var str = localize("$$$/JavaScripts/Export3DLUT/UnableToConvertRGB=Unable to convert image to RGB because ");
					alert( str + e + " : " + e.line );
					}
				if (tempDoc2 != null) tempDoc2.close( SaveOptions.DONOTSAVECHANGES );
				gScriptResult = 'cancel'; // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
				}
	
			// always reset the dither state
			SetColorConversionDither( oldDitherState );
			PurgeClipboard();	// so we don't leave an odd, large item on the clipboard
			}	// if not RGB

		// always close temp document without saving
		tempDoc.close( SaveOptions.DONOTSAVECHANGES );
		}
	catch (e)
		{
		if ( e.number != 8007 ) { 	// don't report error on user cancel
			var str = localize("$$$/JavaScripts/Export3DLUT/UnableToExport=Unable to export LUT because ");
			alert( str + e + " : " + e.line );
			}
		
		// always close temp document without saving
		if (tempDoc != null) tempDoc.close( SaveOptions.DONOTSAVECHANGES );
		gScriptResult = 'cancel'; // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
		}

}

