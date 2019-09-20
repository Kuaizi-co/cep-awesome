// Copyright 2015.  Adobe Systems, Incorporated.  All rights reserved.
// This script will create a file from each artboard and then export to a PDF Presentation
// Written by Sandra Voelker
 
  
 
/*
@@@BUILDINFO@@@ Artboards To Files.jsx 1.0.0.
*/
 
 
/*
 
// BEGIN__HARVEST_EXCEPTION_ZSTRING
 
<javascriptresource>
    <name>$$$/JavaScripts/ArtboardsToFiles/Menu=Artboards to Files...</name>
    <category>scriptexport</category>
    <menu>export</menu>
    
    <eventid>ffcb20ee-4c1f-11e5-885d-feff819cdc9f</eventid>
    <enableinfo>PSHOP_DocHasArtboards</enableinfo>
    <terminology>
                <![CDATA[<< /Version 1
                             /Events <<
                              /ffcb20ee-4c1f-11e5-885d-feff819cdc9f[($$$/JavaScripts/ArtboardsToFiles/Action=Artboard to Files) /noDirectParam <<
                              >>]
                             >>
                          >> ]]>
     </terminology>
</javascriptresource>

// END__HARVEST_EXCEPTION_ZSTRING

*/
  
 // enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop
 
// debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
// $.level =   0;
// debugger; // launch debugger on next line

//ffcb20ee-4c1f-11e5-885d-feff819cdc9f
$.localize = true;
app.playbackDisplayDialogs = DialogModes.ALL;


 
 
//=================================================================
// Globals
//=================================================================
 var ScriptFilePath = Folder($.fileName).parent.fsName ; 

// UI strings to be localized 
var strTitle = localize("$$$/JavaScripts/ArtboardsToFiles/Title=Artboards To Files");
var strMessage = localize("$$$/JavaScripts/ArtboardsToFiles/Message=Artboard To Files action settings");
var running = "abToFiles"; 

$.evalFile(new File(ScriptFilePath + '/ArtboardExport.inc'));
main(initExportInfo); 

 
///////////////////////////////////////////////////////////////////////////////
// Function: initExportInfo
// Usage: create our default parameters
// Input: a new Object
// Return: a new object with params set to default
///////////////////////////////////////////////////////////////////////////////
function initExportInfo(exportInfo, isSelection, isOverrideSticky) 
{
    if (isOverrideSticky)
    {
        exportInfo.destination = new String("");
        exportInfo.fileNamePrefix = new String("untitled_");
        if (isSelection) exportInfo.selectionOnly = true;
        if (!isSelection) exportInfo.selectionOnly = false;
    }
    else 
    {
    exportInfo.includeOverlapping = true;
    exportInfo.expOptions = false;
    exportInfo.contentOnly = false;
    exportInfo.fileType = psdIndex;
    exportInfo.preserveArtboard = true;
        
    exportInfo.iccPDF = true;
    exportInfo.iccPSD = true;
    exportInfo.iccPNG8 = true;
    exportInfo.iccPNG24 = true;
    exportInfo.iccTIF = true;
    exportInfo.iccBMP = true;
    exportInfo.iccTGA = true;
    exportInfo.iccJPG = true;
    
    exportInfo.jpegQuality = 8;
    exportInfo.psdMaxComp = true;
    exportInfo.tiffCompression = TIFFEncoding.NONE;
    exportInfo.tiffJpegQuality = 8;
    exportInfo.pdfEncoding = PDFEncoding.JPEG;
    exportInfo.pdfJpegQuality = 8;
    exportInfo.targaDepth = TargaBitsPerPixels.TWENTYFOUR;
    exportInfo.bmpDepth = BMPDepthType.TWENTYFOUR;
    exportInfo.png24Transparency = true;
    exportInfo.png24Interlaced = false;
    exportInfo.png24Trim = true;
    exportInfo.png8Transparency = true;
    exportInfo.png8Interlaced = false;
    exportInfo.png8Trim = true;
    exportInfo.showExpTypes = true;
    //init pdf settings 
    exportInfo.multipage = true;
    exportInfo.pdfJpegQuality = 8;
	
    exportInfo.inclArtboardNamePDF = false;
    exportInfo.inclArtboardNamePSD = false;
    exportInfo.inclArtboardNamePNG8 = false;
    exportInfo.inclArtboardNamePNG24 = false;
    exportInfo.inclArtboardNameTIF = false;
    exportInfo.inclArtboardNameBMP = false;
    exportInfo.inclArtboardNameTGA = false;
    exportInfo.inclArtboardNameJPG = false;
    exportInfo.inclArtboardName = false; 
	exportInfo.artboardNameFontName = undefined; 
    exportInfo.artboardNameSize = 12; 
    exportInfo.artboardNameColor = [0,0,0];
    exportInfo.artboardNameBackgroundColor = [255,255,255];
    exportInfo.artboardNameBackgroundColorIndex = 0;
    exportInfo.exportArtboardBackground = true;
	//exportInfo.background = 0;

	try {
        exportInfo.destination = app.activeDocument.fullName.parent.fsName; // destination folder
            var tmp = app.activeDocument.fullName.name;
            var pieces = tmp.split('.');
            exportInfo.fileNamePrefix = decodeURI(pieces.length == 1 ? tmp : pieces.slice(0, pieces.length-1).join('.')); // filename body part
    } catch(someError) {
        exportInfo.destination = new String("");
        exportInfo.fileNamePrefix = app.activeDocument.name; // filename body part
    }
 }
}
