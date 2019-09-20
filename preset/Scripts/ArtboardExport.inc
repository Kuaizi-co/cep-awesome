// =================================================================
// Globals
// =================================================================

// UI strings to be localized
var strButtonRun = localize('$$$/JavaScripts/ArtboardsToFiles/Run=Run')
var strButtonCancel = localize('$$$/JavaScripts/ArtboardsToFiles/Cancel=Cancel')
var strLabelDestination = localize('$$$/JavaScripts/ArtboardsToFiles/Destination=Destination:')
var strButtonBrowse = localize('$$$/JavaScripts/ArtboardsToFiles/Browse=&Browse...')
var strLabelFileNamePrefix = localize('$$$/JavaScripts/ArtboardsToFiles/FileNamePrefix=File Name Prefix:')
var strPanelOptions = localize('$$$/JavaScripts/ArtboardsToFiles/Options=Options:')
var strPanelNameOptions = localize('$$$/JavaScripts/ArtboardsToFiles/NameOptions=Name Options:')
// export options for file types
var strLabelFileType = localize('$$$/JavaScripts/ArtboardsToFiles/FileType=File Type:')
var strCheckboxIncludeICCProfile = localize('$$$/JavaScripts/ArtboardsToFiles/IncludeICC=&Include ICC Profile')
var strJPEGOptions = localize('$$$/JavaScripts/ArtboardsToFiles/JPEGOptions=JPEG Options:')
var strLabelQuality = localize('$$$/JavaScripts/ArtboardsToFiles/Quality=Quality:')
var strPSDOptions = localize('$$$/JavaScripts/ArtboardsToFiles/PSDOptions=PSD Options:')
var strCheckboxMaximizeCompatibility = localize('$$$/JavaScripts/ArtboardsToFiles/Maximize=&Maximize Compatibility')
var strTIFFOptions = localize('$$$/JavaScripts/ArtboardsToFiles/TIFFOptions=TIFF Options:')
var strLabelImageCompression = localize('$$$/JavaScripts/ArtboardsToFiles/ImageCompression=Image Compression:')
var strNone = localize('$$$/JavaScripts/ArtboardsToFiles/None=None')
var strCheckboxPreserveArtboard = localize('$$$/JavaScripts/ArtboardsToFiles/PreserveArtboard=Preserve Artboard')
var strPDFOptions = localize('$$$/JavaScripts/ArtboardsToFiles/PDFOptions=PDF Options:')
var strLabelEncoding = localize('$$$/JavaScripts/ArtboardsToFiles/Encoding=Encoding:')
var strTargaOptions = localize('$$$/JavaScripts/ArtboardsToFiles/TargaOptions=Targa Options:')
var strLabelDepth = localize('$$$/JavaScripts/ArtboardsToFiles/Depth=Depth:')
var strRadiobutton16bit = localize('$$$/JavaScripts/ArtboardsToFiles/Bit16=16bit')
var strRadiobutton24bit = localize('$$$/JavaScripts/ArtboardsToFiles/Bit24=24bit')
var strRadiobutton32bit = localize('$$$/JavaScripts/ArtboardsToFiles/Bit32=32bit')
var strBMPOptions = localize('$$$/JavaScripts/ArtboardsToFiles/BMPOptions=BMP Options:')
var strAlertDestinationNotExist = localize('$$$/JavaScripts/ArtboardsToFiles/DestionationDoesNotExist=Destination does not exist.')
var strUnexpectedError = localize('$$$/JavaScripts/ArtboardsToFiles/Unexpected=Unexpected error')
var stretQuality = localize('$$$/locale_specific/JavaScripts/ArtboardsToFiles/ETQualityLength=30')
var stretDestination = localize('$$$/locale_specific/JavaScripts/ArtboardsToFiles/ETDestinationLength=160')
var strddFileType = localize('$$$/locale_specific/JavaScripts/ArtboardsToFiles/DDFileType=100')
var strpnlOptions = localize('$$$/locale_specific/JavaScripts/ArtboardsToFiles/PNLOptions=100')
var strPNG8Options = localize('$$$/JavaScripts/ArtboardsToFiles/PNG8Options=PNG-8 Options:')
var strCheckboxPNGTransparency = localize('$$$/JavaScripts/ArtboardsToFiles/Transparency=Transparency')
var strCheckboxPNGInterlaced = localize('$$$/JavaScripts/ArtboardsToFiles/Interlaced=Interlaced')
var strPNG24Options = localize('$$$/JavaScripts/ArtboardsToFiles/PNG24Options=PNG-24 Options:')
var strCheckboxSelectionOnly = localize('$$$/JavaScripts/ArtboardsToFiles/Selected=&Export Selected Artboards')
var strCheckboxSelectedOverlapping = localize('$$$/JavaScripts/ArtboardsToFiles/SelectedOverlaping=&Include Overlapping Areas')
var strCheckboxContentOnly = localize('$$$/JavaScripts/ArtboardsToFiles/SelectedContent=&Artboard Content Only')
var strAlertSpecifyDestination = localize('$$$/JavaScripts/ArtboardsToFiles/SpecifyDestination=Please specify destination.')
var strTitleSelectDestination = localize('$$$/JavaScripts/ArtboardsToFiles/SelectDestination=Select Destination')
var strAlertDocumentMustBeOpened = localize('$$$/JavaScripts/ArtboardsToFiles/OneDocument=You must have a document open to export.')
var strAlertNoArtboardsFound = localize('$$$/JavaScripts/ArtboardsToFiles/Noartbrd=No artboards found in document.')
var strAlertNoVisibleArtboards = localize('$$$/JavaScripts/ArtboardsToFiles/NoVisibleArtboards=No visible artboards to export.')
var strAlertWasSuccessful = localize('$$$/JavaScripts/ArtboardsToFiles/Success= was successful.')
var strAlertFailed = localize('$$$/JavaScripts/ArtboardsToFiles/Fail= failed.')
var strAlertNoArtboardsSelected = localize('$$$/JavaScripts/ArtboardsToFiles/Noartbrdsel=Selected layer was not an artboard.')

var strShowSaveOptions = localize('$$$/JavaScripts/ArtboardsToFiles/ExportOptions= Export Options')
var strMultiPageDoc = localize('$$$/JavaScripts/ArtboardsToFiles/MultiPageDoc= Multi-Page Document')
var strDocPerArtboard = localize('$$$/JavaScripts/ArtboardsToFiles/DocPerArtboard= Document Per Artboard')
var strIncludeArtboardName = localize('$$$/JavaScripts/ArtboardsToFiles/IncludeArtboardName=Include Artboard Name')

//add option for reverse artboard page order
var strReversePageOrder = localize("$$$/JavaScripts/ArtboardsToFiles/ReversePageOrder=Reverse Page Order");

var strArtboardNameColor = localize('$$$/JavaScripts/ArtboardsToFiles/ArtboardNameColor=Text:')
var strArtboardNameBackgroundColor = localize('$$$/JavaScripts/ArtboardsToFiles/ArtboardNameBackgroundColor=Canvas Extension:')
var strColorWhite = localize('$$$/JavaScripts/ArtboardsToFiles/ColorWhite=White')
var strColorBlack = localize('$$$/JavaScripts/ArtboardsToFiles/ColorBlack=Black')
var strColorOther = localize('$$$/JavaScripts/ArtboardsToFiles/ColorOther=Other...')
var strExportArtboardBackground = localize('$$$/JavaScripts/ArtboardsToFiles/exportArtboardBackground=Include Background in Export')

// the drop down list indexes for file type
var bmpIndex = 0
var jpegIndex = 1
var pdfIndex = 2
var psdIndex = 3
var targaIndex = 4
var tiffIndex = 5
var png8Index = 6
var png24Index = 7

// the drop down list indexes for tiff compression
var compNoneIndex = 0
var compLZWIndex = 1
var compZIPIndex = 2
var compJPEGIndex = 3

// ok and cancel button
var runButtonID = 1
var cancelButtonID = 2

// ordered list of files for multipage pdf
var sourceFilesForPdf = []

/// ////////////////////////////////////////////////////////////////////////////
// Function: main
// Usage: the main routine for this JavaScript
// Input: initialization data function for UI, and string that identifies which menuItem was selected to run this script.
// Return: <none>
/// ////////////////////////////////////////////////////////////////////////////
function main (initExportInfo, type) {
  // make sure all calculations are done in pixels.
  var ru = app.preferences.rulerUnits
  app.preferences.rulerUnits = Units.PIXELS

  // Check if there is an active document.
  if (app.documents.length <= 0) {
    if (DialogModes.NO != app.playbackDisplayDialogs) {
      alert(strAlertDocumentMustBeOpened)
    }
    // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
    return 'cancel'
  }

  var origDoc = app.activeDocument
  var sel_indxs = getSelectedLayersAMIdx(origDoc)
  var abArray
  // check to see if selected layers are artboards have artboardID.
  var abArSelected = getArtBoards(sel_indxs)
  if (abArSelected.length === 0) {
    var isSelection = false
  } else {
    var isSelection = true
  }
  var artboardInfo = getABLayerInfo() // returns obj holding arrays of all and visible artboards
  if (artboardInfo.numVisible == 0) { // no visible artboards to export
    if (DialogModes.NO != app.playbackDisplayDialogs) {
      alert(strAlertNoVisibleArtboards)
    }
    // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
    return 'cancel'
  }

  var exportInfo = new Object()
  initExportInfo(exportInfo, isSelection, false)
  var customOptionsPdf = '12fb03a7-e9af-426a-8377-3d423d7303e6'
  var customOptionsFiles = 'ffcb20ee-4c1f-11e5-885d-feff819cdc9f'

  // look for last used params via Photoshop registry, getCustomOptions will throw if none exist
  try {
    // this will replace ALL the elements of the UI with the last saved settings. ALL OF THEM!
    if (running == 'abToPDF') var d = app.getCustomOptions(customOptionsPdf)
    if (running == 'abToFiles') var d = app.getCustomOptions(customOptionsFiles)
    descriptorToObject(exportInfo, d, strMessage, postProcessExportInfo) // < dont' need to post process anything... but keeping it in there as an example.
  } catch (e) {
    // it's ok if we don't have any options, continue with defaults
  }

  // see if I am getting descriptor parameters
  descriptorToObject(exportInfo, app.playbackParameters, strMessage, postProcessExportInfo)

  // RUN THE DIALOG! (if dialog setting is on - in case running through recorded action.)
  if (DialogModes.NO != app.playbackDisplayDialogs) {
    // adding anything else here that I do NOT want to be sticky, like the other export options that are not file based.
    initExportInfo(exportInfo, isSelection, true)
    initFileNameDestination(exportInfo)

    if (cancelButtonID == settingDialog(exportInfo, isSelection)) {
      // quit, returning 'cancel' (dont localize) makes the actions palette not record our script
      return 'cancel'
    } // else exportInfo properties were updated by the dialog
  }

  try {
    var rememberMaximize
    var needMaximize = exportInfo.psdMaxComp ? QueryStateType.ALWAYS : QueryStateType.NEVER
    if (exportInfo.fileType == psdIndex && app.preferences.maximizeCompatibility != needMaximize) {
      rememberMaximize = app.preferences.maximizeCompatibility
      app.preferences.maximizeCompatibility = needMaximize
    }
    if (exportInfo.selectionOnly) {
      // abArSelected is defined already above. UI will not allow to export selected if there are no Artboard selected. on execute.
      // *FOR REFERENCE ONLY:*
      // var sel_indxs = getSelectedLayersAMIdx(origDoc)
      // var abArSelected = getArtBoards(sel_indxs)
      var artbrdCount = abArSelected.length
    }

    if (!exportInfo.selectionOnly) {
      // if selected is false, then the ones selected are ALL of them.
      abArSelected = artboardInfo.visible
      var artbrdCount = artboardInfo.numVisible
    }

    if (exportInfo.includeOverlapping) { // !exportInfo.contentOnly
      var abArALL = artboardInfo.visible
      if (!exportInfo.selectionOnly) abArray = abArALL
      if (exportInfo.selectionOnly) abArray = abArSelected
    }

    // if I am just grouping each artboard separately, then no need to unartboard.
    if (exportInfo.contentOnly) { // !exportInfo.includeOverlapping
      abArray = abArSelected // doesn't have the group yet, but that's ok.
    }

    // DO IT!
    var exportFileCount = 0
    var nameCountObj = countABNames(abArray)
    for (var n = 0; n < abArray.length; n++) {
      var nameEntry = nameCountObj[abArray[n].name.toLowerCase()]
      if (nameEntry.total > 1) {
        abArray[n].uniqueName = abArray[n].name + '_' + nameEntry.nameIndex++
      } else {
        abArray[n].uniqueName = abArray[n].name
      }
    }

    for (var artbrdIndex = 0; artbrdIndex < artbrdCount; artbrdIndex++) {
      var boardName = abArray[artbrdIndex].name
      if (!exportInfo.contentOnly) {
        // duplicate the duped doc, because this is the one I'm going to clean crop, save, and close.
        var abDoc = origDoc.duplicate() // do all work on duplicate document so original is not touched.
        app.activeDocument = abDoc
        // turn off UI settings.
        setEnabled('autoNestEnabled', false) // to prevent layer from popping into other layersets unexpectedly while script is running
        setEnabled('autoPositionEnabled', false) // to prevent layers from moving in the document space coordinates
        setEnabled('autoExpandEnabled', false) // in case there is an empty ab, if the empty AB gets removed, the document will resize and all the coordinates get off.

        // clean up the artboard removing non overlapping artboards.
        cleanUnseenAB(abArray[artbrdIndex].AMid, artboardInfo.all, exportInfo.exportArtboardBackground)
        var abAMid = abArray[artbrdIndex].AMid
        var abArrUpdated = getABLayerInfo()['all'] // in the new doc
        var abArrUpdatedGr = unArtBoard(abArrUpdated, abDoc, false, exportInfo.exportArtboardBackground) // new propertyabArray[0].groupAMid created
        selectAbByOldID(abAMid, abArrUpdatedGr)
      }

      // if I'm NOT considering the entire document, only the artboard contents then
      if (exportInfo.contentOnly) {
        // I duplicate just the artboard to a new doc, and unartboard it there..
        selectLayerFromAMid(abArray[artbrdIndex].AMid, 'replaceSelection')
        artboardDuplToNewDoc(abArray[artbrdIndex].name)
        var abDoc = app.activeDocument
        var abInfo = getABLayerInfo()['all'] // in the new doc
        unArtBoard(abInfo, abDoc, true, exportInfo.exportArtboardBackground)
        activeDocument.activeLayer = activeDocument.layers[0] // only one layer, well, layerSet
      }

      cropFromMask()
      removeEmptyLayers(abDoc)
      // add a text layer with the artboard name
      if (exportInfo.inclArtboardName) {
        var frameColor = ({'0': [255, 255, 255], '1': [0, 0, 0], '2': exportInfo.artboardNameBackgroundColor})[exportInfo.artboardNameBackgroundColorIndex]
        var nameLayer = addNameLayer(boardName, exportInfo.artboardNameFontName, exportInfo.artboardNameSize, exportInfo.artboardNameColor, frameColor)
      }
      // if export type is photoshop file, and option to preserve artboard is true
      if ((exportInfo.fileType == psdIndex) && (exportInfo.preserveArtboard)) {
        reArtboard(abDoc, abArray[artbrdIndex].name, abArray[artbrdIndex].bgType, abArray[artbrdIndex].bgColor, exportInfo.exportArtboardBackground)
        if (nameLayer) { nameLayer.move(abDoc.layers[0], ElementPlacement.PLACEBEFORE) }
      }

      exportDoc(abArray, artbrdIndex, abDoc, exportInfo)
      abDoc.close(SaveOptions.DONOTSAVECHANGES)

      app.activeDocument = origDoc
      exportFileCount++
    }

    // if multi page PDF was selected, then create it and cleanup temp files.
    if ((exportInfo.fileType == pdfIndex) && (exportInfo.multipage)) {
      // The createMultiPagePDF function uses the global sourceFilesForPdf, rather than the abArray.
      createMultiPagePDF(exportInfo, origDoc)
    }

    logToHeadLights(strTitle + ' file count: ' + exportFileCount)

    if (DialogModes.ALL == app.playbackDisplayDialogs) {
      alert(strTitle + strAlertWasSuccessful + '\n' + exportInfo.destination)
    }

    // if I reach this point, then I need to save those UI settings so they are sticky.
    var d = objectToDescriptor(exportInfo, strMessage, preProcessExportInfo) // get the object values from the UI and put them into the ActionDescriptor that PS can store into the custom options.
    app.putCustomOptions('e6a88a1c-4c14-11e5-885d-feff819cdc9f', d) // store the descriptor into the custom options
    if (running == 'abToPDF') app.putCustomOptions(customOptionsPdf, d)
    if (running == 'abToFiles') app.putCustomOptions(customOptionsFiles, d)

    app.playbackDisplayDialogs = DialogModes.ALL
    app.preferences.rulerUnits = ru
  } catch (e) {
    // clean up open duplicates if open after error.
    try { srcDoc.close(SaveOptions.DONOTSAVECHANGES) } catch (e) {}
    try { abDoc.close(SaveOptions.DONOTSAVECHANGES) } catch (e) {}

    app.preferences.rulerUnits = ru
    if (DialogModes.NO != app.playbackDisplayDialogs) { alert(e) }
    // quit, returning 'cancel' (don't localize) makes the actions palette not record our script
    return 'cancel'
  }
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: reArtboard
// Usage: put all layers in an artboard sized to match the document
// Input: document, name string, artboard background type index int, background color array, whether to export background boolean
// Return: none
/// ////////////////////////////////////////////////////////////////////////////
function reArtboard (abDoc, abArName, abBgType, abBgColor, exportAbBg) {
  createSolidColorLayer(255, 255, 255)
  // get the colorFill Layer ID and make that the first in the layer ID list.
  var allLayIDs = [getLayerID()]
  // move to bottom of the document
  abDoc.activeLayer.move(abDoc.layers[abDoc.layers.length - 1], ElementPlacement.PLACEAFTER)
  // continuous selection too slow if lots of layers, so just add the ID's for all the top level layersets.
  for (var i = 0; i < abDoc.layers.length - 1; i++) {
    abDoc.activeLayer = abDoc.layers[i]
    allLayIDs.push(getLayerID())
  }
  // and then select all of those.
  for (var x = 0; x < allLayIDs.length - 1; x++) {
    selectLayerFromAMid(allLayIDs[x], 'addToSelection')
  }
  // run Artboard from layers. name artboard same as selected.
  artboardFromLayers(abArName)
  // remove colorFillLayer (I know this is the first in the list.)
  deleteByID(allLayIDs[0])
  // set background
  if (exportAbBg) {
    // only export background if export is enabled in artboard properties
    setArtboardBackground(abBgType, abBgColor)
  }
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: exportDoc
// Usage: sets up the file name to be exported via the saveFileNow function.
// Input: ArtboardDataArray, indexofArtboard currently getting executed against, document to save, and UI info
// Return: none
/// ////////////////////////////////////////////////////////////////////////////
function exportDoc (abAr, artbrdIndex, abDoc, exportInfo) {
  var fileNameBody = exportInfo.fileNamePrefix
  fileNameBody += abAr[artbrdIndex].uniqueName
  fileNameBody = cleanFilename(fileNameBody)
  saveFileNow(abDoc, fileNameBody, exportInfo)
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: cleanFilename
// Usage: cleans up a file name to ensure there are no unsuitable characters, and the filename is not too long.
// Input: filename string
// Return: cleaned filename string
/// ////////////////////////////////////////////////////////////////////////////
function cleanFilename (filename) {
  // '/\:*?"<>|' -> '_'
  filename = filename.replace(/[:\/\\*\?\"\<\>\|]/g, '_')
  if (filename.length > 120) {
    filename = filename.substring(0, 120)
  }
  return filename
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: createMultiPagePDF
// Usage: run the PDF presentation C++ plugin with settings
// Input: UI information
// Return: none.
/// ////////////////////////////////////////////////////////////////////////////
function createMultiPagePDF (exportInfo, origDoc) {
  // run PDF presentation if multipage is selected.
  var tempPSDs = (exportInfo.destination + '/TempPSDs')
  var PDFname = exportInfo.fileNamePrefix

  if (PDFname.length == 0) {
    var tmp = origDoc.fullName.name
    var pieces = tmp.split('.')
    PDFname = decodeURI(pieces.length == 1 ? tmp : pieces.slice(0, pieces.length - 1).join('.')) // filename body part
  }

  var saveFile = new File(exportInfo.destination + '/' + encodeURIComponent(PDFname) + '.pdf')

  pdfSaveOptions = new PDFSaveOptions()
  pdfSaveOptions.embedColorProfile = exportInfo.iccPDF
  pdfSaveOptions.encoding = exportInfo.pdfEncoding
  if (PDFEncoding.JPEG == exportInfo.pdfEncoding) {
    pdfSaveOptions.jpegQuality = exportInfo.pdfJpegQuality
  }

  // run PDF Presentation
  var presentationOptions = new PresentationOptions()
  presentationOptions.presentation = false
  presentationOptions.view = true
  presentationOptions.PDFFileOptions = pdfSaveOptions
  presentationOptions.includeFilename = false
   //update for reverse page order
   if(!exportInfo.reversePageOrder){
        var presentationResult = app.makePDFPresentation(sourceFilesForPdf, saveFile, presentationOptions);
   }
   else{
        var presentationResult = app.makePDFPresentation(sourceFilesForPdf.reverse(), saveFile, presentationOptions);
   }
  // no way to tell if makePDFPresentation failed

  // clean up temp files.
  for (i = 0; i < sourceFilesForPdf.length; i++) { File(sourceFilesForPdf[i]).remove() }
  Folder(tempPSDs).remove()
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: selectAbByOldID
// Usage: Shortcut to match an old AMid value with a new GroupID value in an array of artboard data.
// Input: AM id of a layer, and array of artboard layer data.
// Return: none (selects artboard with new groupAMID)
/// ////////////////////////////////////////////////////////////////////////////
function selectAbByOldID (origabAMid, newAbArr) {
  for (var a = 0; a < newAbArr.length; a++) {
    if (newAbArr[a].AMid == origabAMid) {
      selectLayerFromAMid(newAbArr[a].groupAMid, 'replaceSelection')
    }
  }
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: settingDialog
// Usage: pop the ui and get user settings
// Input: exportInfo object containing our parameters
// Return: on ok, the dialog info is set to the exportInfo object
/// ////////////////////////////////////////////////////////////////////////////
function settingDialog (exportInfo) {
  var dlgMain = new Window('dialog', strTitle)

  // match our dialog background color to the host application
  var brush = dlgMain.graphics.newBrush(dlgMain.graphics.BrushType.THEME_COLOR, 'appDialogBackground')
  dlgMain.graphics.backgroundColor = brush
  dlgMain.graphics.disabledBackgroundColor = dlgMain.graphics.backgroundColor

  dlgMain.orientation = 'column'
  dlgMain.alignChildren = 'center'
  dlgMain.spacing = 10

  // -- top of the dialog, first line
  var desttext = dlgMain.add('statictext', undefined, strLabelDestination)
  desttext.alignment = 'left'

  // -- two groups, one for left and one for right ok, cancel
  dlgMain.grpTop = dlgMain.add('group', undefined)
  dlgMain.grpTop.orientation = 'column'
  dlgMain.grpTop.alignChildren = 'top'
  dlgMain.grpTop.alignment = 'fill'

  // -- group top left
  dlgMain.grpTopLeft = dlgMain.grpTop.add('group')
  dlgMain.grpTopLeft.orientation = 'column'
  dlgMain.grpTopLeft.alignChildren = 'left'
  dlgMain.grpTopLeft.alignment = 'fill'

  // -- the second line in the dialog
  dlgMain.grpSecondLine = dlgMain.grpTopLeft.add('group')
  dlgMain.grpSecondLine.orientation = 'row'
  dlgMain.grpSecondLine.alignment = 'fill'

  dlgMain.etDestination = dlgMain.grpSecondLine.add('edittext')
  dlgMain.etDestination.preferredSize = [-1, 25]
  dlgMain.etDestination.alignment = ['fill', 'bottom']

  dlgMain.btnBrowse = dlgMain.grpSecondLine.add('button', undefined, strButtonBrowse)
  dlgMain.btnBrowse.alignment = ['right', 'bottom']
  dlgMain.btnBrowse.onClick = function () {
    var defaultFolder = dlgMain.etDestination.text
    var testFolder = new Folder(dlgMain.etDestination.text)
    if (!testFolder.exists) {
      defaultFolder = '~'
    }
    var selFolder = Folder.selectDialog(strTitleSelectDestination, defaultFolder)
    if (selFolder != null) {
      dlgMain.etDestination.text = selFolder.fsName
    }
    dlgMain.defaultElement.active = true
  }

  // -- the third line in the dialog
  dlgMain.grpTopLeft.add('statictext', undefined, strLabelFileNamePrefix)

  // File Name prefix.
  dlgMain.etFileNamePrefix = dlgMain.grpTopLeft.add('edittext', undefined, exportInfo.fileNamePrefix.toString())
  dlgMain.etFileNamePrefix.alignment = 'fill'
  dlgMain.etFileNamePrefix.preferredSize = [-1, 25]

  // -- Export options
  dlgMain.cbSelOptionsGrp = dlgMain.grpTopLeft.add('group')
  dlgMain.cbSelOptionsGrp.orientation = 'column'
  dlgMain.cbSelOptionsGrp.alignment = 'left'

  dlgMain.cbOverlapping = dlgMain.cbSelOptionsGrp.add('radiobutton', undefined, strCheckboxSelectedOverlapping)
  dlgMain.cbOverlapping.value = exportInfo.includeOverlapping
  dlgMain.cbOverlapping.alignment = 'left'

  dlgMain.cbContentOnly = dlgMain.cbSelOptionsGrp.add('radiobutton', undefined, strCheckboxContentOnly)
  dlgMain.cbContentOnly.value = exportInfo.contentOnly
  dlgMain.cbContentOnly.alignment = 'left'

  dlgMain.cbSelection = dlgMain.grpTopLeft.add('checkbox', undefined, strCheckboxSelectionOnly)
  dlgMain.cbSelection.value = exportInfo.selectionOnly
  dlgMain.cbSelection.enabled = exportInfo.selectionOnly

  dlgMain.cbExAbBg = dlgMain.grpTopLeft.add('checkbox', undefined, strExportArtboardBackground)
  dlgMain.cbExAbBg.value = exportInfo.exportArtboardBackground

  // -- the sixth line is the panel
  // dlgMain.pnlFileType = dlgMain.grpTopLeft.add("panel", undefined, strLabelFileType)
  dlgMain.pnlFileType = dlgMain.grpTopLeft.add('group')
  dlgMain.pnlFileType.alignment = 'fill'
  dlgMain.pnlFileType.orientation = 'column'

  // -- now a dropdown list
  dlgMain.ddFileTypeGr = dlgMain.pnlFileType.add('group')
  dlgMain.ddFileTypeGr.alignment = 'left'
  dlgMain.ddFileTypeGr.orientation = 'row'
  dlgMain.ddFileType = dlgMain.ddFileTypeGr.add('statictext', undefined, strLabelFileType)
  dlgMain.ddFileType = dlgMain.ddFileTypeGr.add('dropdownlist')
  dlgMain.ddFileType.preferredSize.width = StrToIntWithDefault(strddFileType, 100)

  if (!exportInfo.showExpTypes) dlgMain.ddFileTypeGr.hide() // PDF shows no other file type options

  dlgMain.ddFileType.add('item', 'BMP')
  dlgMain.ddFileType.add('item', 'JPEG')
  dlgMain.ddFileType.add('item', 'PDF')
  dlgMain.ddFileType.add('item', 'PSD')
  dlgMain.ddFileType.add('item', 'Targa')
  dlgMain.ddFileType.add('item', 'TIFF')
  dlgMain.ddFileType.add('item', 'PNG-8')
  dlgMain.ddFileType.add('item', 'PNG-24')
  dlgMain.ddFileType.items[exportInfo.fileType].selected = true

  dlgMain.pnlOptionsShow = dlgMain.ddFileTypeGr.add('checkbox', undefined, strShowSaveOptions)
  // dlgMain.pnlOptionsShow.alignment = 'left'

  // -- now the options panel that changes
  dlgMain.pnlFileType.pnlOptions = dlgMain.pnlFileType.add('panel', undefined, strPanelOptions)
  dlgMain.pnlFileType.pnlOptions.alignment = 'fill'
  dlgMain.pnlFileType.pnlOptions.orientation = 'column'
  dlgMain.pnlFileType.pnlOptions.margins = [4, 10, 4, File.fs == 'Windows' ? 4 : 8]
  dlgMain.pnlFileType.pnlOptions.preferredSize.height = StrToIntWithDefault(strpnlOptions, 130)
  var optionsPanel = dlgMain.pnlFileType.pnlOptions
  var fileTypeGrp = dlgMain.pnlFileType.pnlOptions.add('group')
  fileTypeGrp.alignment = 'fill'
  fileTypeGrp.orientation = 'stack'

  // PDF options
  fileTypeGrp.grpPDFOptions = fileTypeGrp.add('group')
  fileTypeGrp.grpPDFOptions.orientation = 'column'
  fileTypeGrp.grpPDFOptions.visible = (exportInfo.fileType == pdfIndex)

  fileTypeGrp.grpPDFOptions.grpPresentation = fileTypeGrp.grpPDFOptions.add('group')
  fileTypeGrp.grpPDFOptions.grpPresentation.alignment = 'left'
  fileTypeGrp.grpPDFOptions.grpPresentation.spacing = 10
  fileTypeGrp.grpPDFOptions.grpPresentation.orientation = 'column'

  fileTypeGrp.grpPDFOptions.pageType = fileTypeGrp.grpPDFOptions.grpPresentation.add('group')
  fileTypeGrp.grpPDFOptions.pageType.orientation = 'row'
  fileTypeGrp.grpPDFOptions.pageType.alignChildren = 'left'
  fileTypeGrp.grpPDFOptions.grpPresentation.multipage = fileTypeGrp.grpPDFOptions.pageType.add('radiobutton', undefined, strMultiPageDoc)
  fileTypeGrp.grpPDFOptions.grpPresentation.multipage.value = exportInfo.multipage
  fileTypeGrp.grpPDFOptions.grpPresentation.singlepage = fileTypeGrp.grpPDFOptions.pageType.add('radiobutton', undefined, strDocPerArtboard)
  fileTypeGrp.grpPDFOptions.grpPresentation.singlepage.value = exportInfo.singlepage

  // if singlepage is selected, see below...

  fileTypeGrp.grpPDFOptions.grpCompression = fileTypeGrp.grpPDFOptions.add('group')
  fileTypeGrp.grpPDFOptions.grpCompression.alignment = 'left'
  fileTypeGrp.grpPDFOptions.grpCompression.add('statictext', undefined, strLabelEncoding)
  fileTypeGrp.grpPDFOptions.grpCompression.rbZip = fileTypeGrp.grpPDFOptions.grpCompression.add('radiobutton', undefined, 'ZIP')
  fileTypeGrp.grpPDFOptions.grpCompression.rbZip.onClick = function () {
    fileTypeGrp.grpPDFOptions.grpQuality.stQuality.enabled = false
    fileTypeGrp.grpPDFOptions.grpQuality.etQuality.enabled = false
    fileTypeGrp.grpPDFOptions.grpQuality.slQuality.enabled = false
  }

  fileTypeGrp.grpPDFOptions.grpCompression.rbJpeg = fileTypeGrp.grpPDFOptions.grpCompression.add('radiobutton', undefined, 'JPEG')
  fileTypeGrp.grpPDFOptions.grpCompression.rbJpeg.onClick = function () {
    fileTypeGrp.grpPDFOptions.grpQuality.stQuality.enabled = true
    fileTypeGrp.grpPDFOptions.grpQuality.etQuality.enabled = true
    fileTypeGrp.grpPDFOptions.grpQuality.slQuality.enabled = true
  }

  fileTypeGrp.grpPDFOptions.grpQuality = fileTypeGrp.grpPDFOptions.grpCompression.add('group')
  fileTypeGrp.grpPDFOptions.grpQuality.spacing = 5
  fileTypeGrp.grpPDFOptions.grpQuality.stQuality = fileTypeGrp.grpPDFOptions.grpQuality.add('statictext', undefined, strLabelQuality)

  fileTypeGrp.grpPDFOptions.grpQuality.slQuality = fileTypeGrp.grpPDFOptions.grpQuality.add('slider', undefined, exportInfo.pdfJpegQuality, 0, 12)
  fileTypeGrp.grpPDFOptions.grpQuality.slQuality.preferredSize = [60, -1]
  fileTypeGrp.grpPDFOptions.grpQuality.etQuality = fileTypeGrp.grpPDFOptions.grpQuality.add('edittext', undefined, exportInfo.pdfJpegQuality.toString())
  fileTypeGrp.grpPDFOptions.grpQuality.etQuality.characters = 2
  fileTypeGrp.grpPDFOptions.grpQuality.etQuality.onChange = makeJPEGQualityFieldValidationFunction(undefined, fileTypeGrp.grpPDFOptions.grpQuality.slQuality)
  fileTypeGrp.grpPDFOptions.grpQuality.slQuality.onChanging = (function (field) { return function () { this.value = field.text = Math.round(this.value) } })(fileTypeGrp.grpPDFOptions.grpQuality.etQuality)
  fileTypeGrp.grpPDFOptions.grpQuality.slQuality.onChange = fileTypeGrp.grpPDFOptions.grpQuality.slQuality.onChanging

  // if singlePage is selected
  fileTypeGrp.grpPDFOptions.grpPresentation.singlepage.onClick = function () {
  }

  dlgMain.cbIccPDF = fileTypeGrp.grpPDFOptions.add('checkbox', undefined, strCheckboxIncludeICCProfile)
  dlgMain.cbIccPDF.value = exportInfo.iccPDF
  dlgMain.cbIccPDF.alignment = 'left'
  fileTypeGrp.grpPDFOptions.grpQuality.etQuality.graphics.disabledBackgroundColor = brush

  switch (exportInfo.pdfEncoding) {
    case PDFEncoding.PDFZIP:
      fileTypeGrp.grpPDFOptions.grpCompression.rbZip.value = true
      { break }
    case PDFEncoding.JPEG:
    default:
      fileTypeGrp.grpPDFOptions.grpCompression.rbJpeg.value = true
      { break }
  }

  if (PDFEncoding.JPEG != exportInfo.pdfEncoding) {
    fileTypeGrp.grpPDFOptions.grpQuality.stQuality.enabled = false
    fileTypeGrp.grpPDFOptions.grpQuality.etQuality.enabled = false
  }
  dlgMain.cbIncludeArtboardNamePDF = fileTypeGrp.grpPDFOptions.add('checkbox', undefined, strIncludeArtboardName)
  dlgMain.cbIncludeArtboardNamePDF.alignment = 'left'
  dlgMain.cbIncludeArtboardNamePDF.value = exportInfo.inclArtboardNamePDF
  
  dlgMain.cbIncludeArtboardNamePDF.onClick = function() { optionsPanel.pnlArtboardName.visible = this.value; } ; 
    
    //add option for reverse page order
    dlgMain.cbReversePageOrderPDF =  fileTypeGrp.grpPDFOptions.add("checkbox", undefined, strReversePageOrder); 
    dlgMain.cbReversePageOrderPDF.value = exportInfo.reversePageOrder;
    dlgMain.cbReversePageOrderPDF.alignment = 'left';
    dlgMain.cbReversePageOrderPDF.onClick = function(){exportInfo.reversePageOrder = this.value;}



  // PSD options
  fileTypeGrp.grpPSDOptions = fileTypeGrp.add('group')
  fileTypeGrp.grpPSDOptions.orientation = 'column'
  fileTypeGrp.grpPSDOptions.alignChildren = 'left'

  fileTypeGrp.grpPSDOptions.cbMax = fileTypeGrp.grpPSDOptions.add('checkbox', undefined, strCheckboxMaximizeCompatibility)
  dlgMain.preserveArtboard = fileTypeGrp.grpPSDOptions.add('checkbox', undefined, strCheckboxPreserveArtboard)
  dlgMain.preserveArtboard.value = exportInfo.preserveArtboard

  dlgMain.cbIccPSD = fileTypeGrp.grpPSDOptions.add('checkbox', undefined, strCheckboxIncludeICCProfile)
  dlgMain.cbIccPSD.value = exportInfo.iccPSD
  fileTypeGrp.grpPSDOptions.cbMax.value = exportInfo.psdMaxComp

  dlgMain.cbIncludeArtboardNamePSD = fileTypeGrp.grpPSDOptions.add('checkbox', undefined, strIncludeArtboardName)
  dlgMain.cbIncludeArtboardNamePSD.value = exportInfo.inclArtboardNamePSD
  dlgMain.cbIncludeArtboardNamePSD.onClick = function () { optionsPanel.pnlArtboardName.visible = this.value }

  fileTypeGrp.grpPSDOptions.visible = (exportInfo.fileType == psdIndex)

  // PNG8 options
  fileTypeGrp.grpPNG8Options = fileTypeGrp.add('group')
  fileTypeGrp.grpPNG8Options.orientation = 'column'
  fileTypeGrp.grpPNG8Options.alignChildren = 'left'

  fileTypeGrp.grpPNG8TranOptions = fileTypeGrp.grpPNG8Options.add('group')
  fileTypeGrp.grpPNG8Options.png8Trans = fileTypeGrp.grpPNG8TranOptions.add('checkbox', undefined, strCheckboxPNGTransparency.toString())
  fileTypeGrp.grpPNG8Options.png8Inter = fileTypeGrp.grpPNG8TranOptions.add('checkbox', undefined, strCheckboxPNGInterlaced.toString())
  fileTypeGrp.grpPNG8Options.png8Trans.value = exportInfo.png8Transparency
  fileTypeGrp.grpPNG8Options.png8Inter.value = exportInfo.png8Interlaced

  fileTypeGrp.grpPNG8IccOptions = fileTypeGrp.grpPNG8Options.add('group')
  dlgMain.cbIccPNG8 = fileTypeGrp.grpPNG8IccOptions.add('checkbox', undefined, strCheckboxIncludeICCProfile)
  dlgMain.cbIccPNG8.value = exportInfo.iccPNG8

  dlgMain.cbIncludeArtboardNamePNG8 = fileTypeGrp.grpPNG8Options.add('checkbox', undefined, strIncludeArtboardName)
  dlgMain.cbIncludeArtboardNamePNG8.value = exportInfo.inclArtboardNamePNG8
  dlgMain.cbIncludeArtboardNamePNG8.onClick = function () { optionsPanel.pnlArtboardName.visible = this.value }

  fileTypeGrp.grpPNG8Options.visible = (exportInfo.fileType == png8Index)

  // PNG24 options
  fileTypeGrp.grpPNG24Options = fileTypeGrp.add('group')
  fileTypeGrp.grpPNG24Options.orientation = 'column'
  fileTypeGrp.grpPNG24Options.alignChildren = 'left'

  fileTypeGrp.grpPNG24TranOptions = fileTypeGrp.grpPNG24Options.add('group')
  fileTypeGrp.grpPNG24Options.png24Trans = fileTypeGrp.grpPNG24TranOptions.add('checkbox', undefined, strCheckboxPNGTransparency.toString())
  fileTypeGrp.grpPNG24Options.png24Inter = fileTypeGrp.grpPNG24TranOptions.add('checkbox', undefined, strCheckboxPNGInterlaced.toString())
  fileTypeGrp.grpPNG24Options.png24Trans.value = exportInfo.png24Transparency
  fileTypeGrp.grpPNG24Options.png24Inter.value = exportInfo.png24Interlaced

  fileTypeGrp.grpPNG24IccOptions = fileTypeGrp.grpPNG24Options.add('group')
  dlgMain.cbIccPNG24 = fileTypeGrp.grpPNG24IccOptions.add('checkbox', undefined, strCheckboxIncludeICCProfile)
  dlgMain.cbIccPNG24.value = exportInfo.iccPNG24

  dlgMain.cbIncludeArtboardNamePNG24 = fileTypeGrp.grpPNG24Options.add('checkbox', undefined, strIncludeArtboardName)
  dlgMain.cbIncludeArtboardNamePNG24.value = exportInfo.inclArtboardNamePNG24
  dlgMain.cbIncludeArtboardNamePNG24.onClick = function () { optionsPanel.pnlArtboardName.visible = this.value }

  fileTypeGrp.grpPNG24Options.visible = (exportInfo.fileType == png8Index)

  // JPEG options
  fileTypeGrp.grpJPEGOptions = fileTypeGrp.add('group')
  fileTypeGrp.grpJPEGOptions.orientation = 'column'
  fileTypeGrp.grpJPEGOptions.alignChildren = 'left'
  fileTypeGrp.grpJPEGQualOptions = fileTypeGrp.grpJPEGOptions.add('group')
  fileTypeGrp.grpJPEGQualOptions.orientation = 'row'
  fileTypeGrp.grpJPEGQualOptions.add('statictext', undefined, strLabelQuality)

  fileTypeGrp.grpJPEGOptions.slQuality = fileTypeGrp.grpJPEGQualOptions.add('slider', undefined, exportInfo.jpegQuality, 0, 12)
  fileTypeGrp.grpJPEGOptions.slQuality.preferredSize = [99, -1]
  fileTypeGrp.grpJPEGOptions.etQuality = fileTypeGrp.grpJPEGQualOptions.add('edittext', undefined, exportInfo.jpegQuality.toString())
  fileTypeGrp.grpJPEGOptions.etQuality.characters = 2
  fileTypeGrp.grpJPEGOptions.etQuality.onChange = makeJPEGQualityFieldValidationFunction(undefined, fileTypeGrp.grpJPEGOptions.slQuality)
  fileTypeGrp.grpJPEGOptions.slQuality.onChanging = (function (field) { return function () { this.value = field.text = Math.round(this.value) } })(fileTypeGrp.grpJPEGOptions.etQuality)
  fileTypeGrp.grpJPEGOptions.slQuality.onChange = fileTypeGrp.grpJPEGOptions.slQuality.onChanging

  fileTypeGrp.grpJPEGIccOptions = fileTypeGrp.grpJPEGOptions.add('group')
  dlgMain.cbIccJPG = fileTypeGrp.grpJPEGIccOptions.add('checkbox', undefined, strCheckboxIncludeICCProfile)
  dlgMain.cbIccJPG.value = exportInfo.iccJPG

  dlgMain.cbIncludeArtboardNameJPG = fileTypeGrp.grpJPEGOptions.add('checkbox', undefined, strIncludeArtboardName)
  dlgMain.cbIncludeArtboardNameJPG.value = exportInfo.inclArtboardNameJPG
  dlgMain.cbIncludeArtboardNameJPG.onClick = function () { optionsPanel.pnlArtboardName.visible = this.value }

  fileTypeGrp.grpJPEGOptions.visible = (exportInfo.fileType == jpegIndex)

  // TIFF options
  fileTypeGrp.grpTIFFOptions = fileTypeGrp.add('group')
  fileTypeGrp.grpTIFFOptions.orientation = 'column'
  fileTypeGrp.grpTIFFOptions.visible = (exportInfo.fileType == tiffIndex)

  fileTypeGrp.grpTIFFOptions.grpCompression = fileTypeGrp.grpTIFFOptions.add('group')
  fileTypeGrp.grpTIFFOptions.grpCompression.alignment = 'left'
  fileTypeGrp.grpTIFFOptions.grpCompression.add('statictext', undefined, strLabelImageCompression)

  fileTypeGrp.grpTIFFOptions.grpCompression.ddCompression = fileTypeGrp.grpTIFFOptions.grpCompression.add('dropdownlist')
  fileTypeGrp.grpTIFFOptions.grpCompression.ddCompression.add('item', strNone)
  fileTypeGrp.grpTIFFOptions.grpCompression.ddCompression.add('item', 'LZW')
  fileTypeGrp.grpTIFFOptions.grpCompression.ddCompression.add('item', 'ZIP')
  fileTypeGrp.grpTIFFOptions.grpCompression.ddCompression.add('item', 'JPEG')

  fileTypeGrp.grpTIFFOptions.grpCompression.ddCompression.onChange = function () {
    if (this.selection.index == compJPEGIndex) {
      fileTypeGrp.grpTIFFOptions.grpQuality.stQuality.enabled = true
      fileTypeGrp.grpTIFFOptions.grpQuality.etQuality.enabled = true
      fileTypeGrp.grpTIFFOptions.grpQuality.slQuality.enabled = true
    } else {
      fileTypeGrp.grpTIFFOptions.grpQuality.stQuality.enabled = false
      fileTypeGrp.grpTIFFOptions.grpQuality.etQuality.enabled = false
      fileTypeGrp.grpTIFFOptions.grpQuality.slQuality.enabled = false
    }
  }

  fileTypeGrp.grpTIFFOptions.grpQuality = fileTypeGrp.grpTIFFOptions.add('group')
  fileTypeGrp.grpTIFFOptions.grpQuality.alignment = 'left'
  fileTypeGrp.grpTIFFOptions.grpQuality.stQuality = fileTypeGrp.grpTIFFOptions.grpQuality.add('statictext', undefined, strLabelQuality)

  fileTypeGrp.grpTIFFOptions.grpQuality.slQuality = fileTypeGrp.grpTIFFOptions.grpQuality.add('slider', undefined, exportInfo.tiffJpegQuality, 0, 12)
  fileTypeGrp.grpTIFFOptions.grpQuality.slQuality.preferredSize = [99, -1]
  fileTypeGrp.grpTIFFOptions.grpQuality.etQuality = fileTypeGrp.grpTIFFOptions.grpQuality.add('edittext', undefined, exportInfo.tiffJpegQuality.toString())
  fileTypeGrp.grpTIFFOptions.grpQuality.etQuality.characters = 2
  fileTypeGrp.grpTIFFOptions.grpQuality.etQuality.graphics.disabledBackgroundColor = brush
  fileTypeGrp.grpTIFFOptions.grpQuality.etQuality.onChange = makeJPEGQualityFieldValidationFunction(undefined, fileTypeGrp.grpTIFFOptions.grpQuality.slQuality)
  fileTypeGrp.grpTIFFOptions.grpQuality.slQuality.onChanging = (function (field) { return function () { this.value = field.text = Math.round(this.value) } })(fileTypeGrp.grpTIFFOptions.grpQuality.etQuality)
  fileTypeGrp.grpTIFFOptions.grpQuality.slQuality.onChange = fileTypeGrp.grpTIFFOptions.grpQuality.slQuality.onChanging

  var index
  switch (exportInfo.tiffCompression) {
    case TIFFEncoding.NONE:
      index = compNoneIndex
      { break }
    case TIFFEncoding.TIFFLZW:
      index = compLZWIndex
      { break }
    case TIFFEncoding.TIFFZIP:
      index = compZIPIndex
      { break }
    case TIFFEncoding.JPEG:
      index = compJPEGIndex
      { break }
    default:
      index = compNoneIndex
      { break }
  }

  fileTypeGrp.grpTIFFOptions.grpCompression.ddCompression.items[index].selected = true

  if (TIFFEncoding.JPEG != exportInfo.tiffCompression) { // if not JPEG
    fileTypeGrp.grpTIFFOptions.grpQuality.stQuality.enabled = false
    fileTypeGrp.grpTIFFOptions.grpQuality.etQuality.enabled = false
  }
  dlgMain.cbIccTIF = fileTypeGrp.grpTIFFOptions.add('checkbox', undefined, strCheckboxIncludeICCProfile)
  dlgMain.cbIccTIF.alignment = 'left'
  dlgMain.cbIccTIF.value = exportInfo.iccTIF

  dlgMain.cbIncludeArtboardNameTIF = fileTypeGrp.grpTIFFOptions.add('checkbox', undefined, strIncludeArtboardName)
  dlgMain.cbIncludeArtboardNameTIF.alignment = 'left'
  dlgMain.cbIncludeArtboardNameTIF.value = exportInfo.inclArtboardNameTIF
  dlgMain.cbIncludeArtboardNameTIF.onClick = function () { optionsPanel.pnlArtboardName.visible = this.value }

  // Targa options
  fileTypeGrp.grpTargaOptions = fileTypeGrp.add('group')
  fileTypeGrp.grpTargaOptions.orientation = 'column'
  fileTypeGrp.grpTargaOptions.alignChildren = 'left'
  fileTypeGrp.grpTargaOptions.visible = (exportInfo.fileType == targaIndex)

  fileTypeGrp.grpTargaOptions.rb16bitGr = fileTypeGrp.grpTargaOptions.add('group')
  fileTypeGrp.grpTargaOptions.rb16bitGr.orientation = 'row'
  fileTypeGrp.grpTargaOptions.rb16bitGr.add('statictext', undefined, strLabelDepth)
  fileTypeGrp.grpTargaOptions.rb16bit = fileTypeGrp.grpTargaOptions.rb16bitGr.add('radiobutton', undefined, strRadiobutton16bit)
  fileTypeGrp.grpTargaOptions.rb24bit = fileTypeGrp.grpTargaOptions.rb16bitGr.add('radiobutton', undefined, strRadiobutton24bit)
  fileTypeGrp.grpTargaOptions.rb32bit = fileTypeGrp.grpTargaOptions.rb16bitGr.add('radiobutton', undefined, strRadiobutton32bit)

  fileTypeGrp.grpTargaOptionsIccGr = fileTypeGrp.grpTargaOptions.add('group')
  dlgMain.cbIccTGA = fileTypeGrp.grpTargaOptionsIccGr.add('checkbox', undefined, strCheckboxIncludeICCProfile)
  dlgMain.cbIccTGA.value = exportInfo.iccTGA

  switch (exportInfo.targaDepth) {
    case TargaBitsPerPixels.SIXTEEN:
      fileTypeGrp.grpTargaOptions.rb16bit.value = true
      { break }
    case TargaBitsPerPixels.TWENTYFOUR:
      fileTypeGrp.grpTargaOptions.rb24bit.value = true
      { break }
    case TargaBitsPerPixels.THIRTYTWO:
      fileTypeGrp.grpTargaOptions.rb32bit.value = true
      { break }
    default:
      fileTypeGrp.grpTargaOptions.rb24bit.value = true
      { break }
  }

  dlgMain.cbIncludeArtboardNameTGA = fileTypeGrp.grpTargaOptions.add('checkbox', undefined, strIncludeArtboardName)
  dlgMain.cbIncludeArtboardNameTGA.value = exportInfo.inclArtboardNameTGA
  dlgMain.cbIncludeArtboardNameTGA.onClick = function () { optionsPanel.pnlArtboardName.visible = this.value }

  // BMP options
  fileTypeGrp.grpBMPOptions = fileTypeGrp.add('group')
  fileTypeGrp.grpBMPOptions.orientation = 'column'
  fileTypeGrp.grpBMPOptions.alignChildren = 'left'
  fileTypeGrp.grpBMPOptions.visible = (exportInfo.fileType == bmpIndex)

  fileTypeGrp.grpBMPOptions.rb16bitGr = fileTypeGrp.grpBMPOptions.add('group')
  fileTypeGrp.grpBMPOptions.rb16bitGr.orientation = 'row'
  fileTypeGrp.grpBMPOptions.rb16bitGr.add('statictext', undefined, strLabelDepth)
  fileTypeGrp.grpBMPOptions.rb16bit = fileTypeGrp.grpBMPOptions.rb16bitGr.add('radiobutton', undefined, strRadiobutton16bit)
  fileTypeGrp.grpBMPOptions.rb24bit = fileTypeGrp.grpBMPOptions.rb16bitGr.add('radiobutton', undefined, strRadiobutton24bit)
  fileTypeGrp.grpBMPOptions.rb32bit = fileTypeGrp.grpBMPOptions.rb16bitGr.add('radiobutton', undefined, strRadiobutton32bit)

  fileTypeGrp.grpBMPOptionsIccGr = fileTypeGrp.grpBMPOptions.add('group')
  dlgMain.cbIccBMP = fileTypeGrp.grpBMPOptionsIccGr.add('checkbox', undefined, strCheckboxIncludeICCProfile)
  dlgMain.cbIccBMP.value = exportInfo.iccBMP

  switch (exportInfo.bmpDepth) {
    case BMPDepthType.SIXTEEN:
      fileTypeGrp.grpBMPOptions.rb16bit.value = true
      { break }
    case BMPDepthType.TWENTYFOUR:
      fileTypeGrp.grpBMPOptions.rb24bit.value = true
      { break }
    case BMPDepthType.THIRTYTWO:
      fileTypeGrp.grpBMPOptions.rb32bit.value = true
      { break }
    default:
      fileTypeGrp.grpBMPOptions.rb24bit.value = true
      { break }
  }

  dlgMain.cbIncludeArtboardNameBMP = fileTypeGrp.grpBMPOptions.add('checkbox', undefined, strIncludeArtboardName)
  dlgMain.cbIncludeArtboardNameBMP.value = exportInfo.inclArtboardNameBMP
  dlgMain.cbIncludeArtboardNameBMP.onClick = function () { optionsPanel.pnlArtboardName.visible = this.value }

  // artboard name panel
  optionsPanel.pnlArtboardName = optionsPanel.add('panel', undefined, strPanelNameOptions)
  optionsPanel.pnlArtboardName.alignment = 'fill'
  // optionsPanel.pnlArtboardName.spacing = 10
  optionsPanel.pnlArtboardName.margins = [10, 10, 10, 10]
  optionsPanel.pnlArtboardName.orientation = 'column'

  optionsPanel.pnlArtboardName.fontPanel = optionsPanel.pnlArtboardName.add('group', undefined, { name: 'fontPanel' })
  optionsPanel.pnlArtboardName.fontPanel.alignment = 'left'
  // optionsPanel.pnlArtboardName.fontPanel.getFont().toSource() // => {font: name, size: #}

  psxui.createFontPanel(optionsPanel.pnlArtboardName.fontPanel)
  var font = exportInfo.artboardNameFontName
  if (!font) {
    font = psx.determineFont(File.fs == 'Windows' ? ZStrs.WinSansSerifFaceName : ZStrs.MacSansSerifFaceName)
  }
  if (!font) {
    font = psx.determineFont(File.fs == 'Windows' ? ZStrs.WinSansSerif : ZStrs.MacSansSerif)
  }
  if (!font) {
    font = psx.getDefaultFont()
  }
  optionsPanel.pnlArtboardName.fontPanel.setFont(font, exportInfo.artboardNameSize)
  optionsPanel.pnlArtboardName.fontPanel._fontSize = exportInfo.artboardNameSize
  // end font
  var twoColRow = optionsPanel.pnlArtboardName.add('group')
  twoColRow.alignment = 'fill'
  twoColRow.orientation = 'row'
  twoColRow.spacing = 20
  var leftCol = twoColRow.add('group')
  leftCol.orientation = 'column'
  leftCol.spacing = 0
  var rightCol = twoColRow.add('group')
  rightCol.spacing = 0
  var colorGrp = leftCol.add('group')
  colorGrp.alignment = 'left'
  colorGrp.spacing = 10

  colorGrp.add('statictext', undefined, strArtboardNameBackgroundColor)
  colorGrp.bgSelection = colorGrp.add('dropdownlist')
  colorGrp.bgSelection.add('item', strColorWhite)
  colorGrp.bgSelection.add('item', strColorBlack)
  colorGrp.bgSelection.add('item', strColorOther)

  colorGrp.bgSwatchGrp = colorGrp.add('group', [0, 0, 20, 20])
  var bgSwatchButton = colorGrp.bgSwatchGrp.add('button')
  bgSwatchButton.bg = true
  bgSwatchButton.onDraw = function () {} // don't draw the button; it's just there to make the swatch clickable

  colorGrp.bgSelection.onChange = function () {
    switch (this.selection.index) {
      case 0:
        colorGrp.backgroundColor = [255, 255, 255]
        { break }
      case 1:
        colorGrp.backgroundColor = [0, 0, 0]
        { break }
      case 2:
        colorGrp.backgroundColor = exportInfo.artboardNameBackgroundColor
        { break }
    }
    colorGrp.bgSwatchGrp.graphics.backgroundColor = colorGrp.graphics.newBrush(colorGrp.graphics.BrushType.SOLID_COLOR, [colorGrp.backgroundColor[0] / 255, colorGrp.backgroundColor[1] / 255, colorGrp.backgroundColor[2] / 255])
  }
  colorGrp.bgSelection.selection = exportInfo.artboardNameBackgroundColorIndex

  var nameColorLabel = colorGrp.add('statictext', undefined, '     ' + strArtboardNameColor)
  var swatchGrp = colorGrp.add('group', [0, 0, 20, 20])
  swatchGrp.graphics.backgroundColor = swatchGrp.graphics.newBrush(swatchGrp.graphics.BrushType.SOLID_COLOR, [exportInfo.artboardNameColor[0] / 255, exportInfo.artboardNameColor[1] / 255, exportInfo.artboardNameColor[2] / 255])
  colorGrp.nameColor = exportInfo.artboardNameColor

  var swatchButton = swatchGrp.add('button')
  swatchButton.onClick = function () {
    var fg = app.foregroundColor
    var currentColor = new SolidColor()
    currentColor.rgb.red = this.bg ? this.parent.parent.backgroundColor[0] : this.parent.parent.nameColor[0]
    currentColor.rgb.green = this.bg ? this.parent.parent.backgroundColor[1] : this.parent.parent.nameColor[1]
    currentColor.rgb.blue = this.bg ? this.parent.parent.backgroundColor[2] : this.parent.parent.nameColor[2]
    app.foregroundColor = currentColor
    var completed = app.showColorPicker()
    dlgMain.active = true
    if (completed) {
      var pickedColor = app.foregroundColor
      if (this.bg) {
        this.parent.parent.backgroundColor = [pickedColor.rgb.red, pickedColor.rgb.green, pickedColor.rgb.blue]
        exportInfo.artboardNameBackgroundColor = this.parent.parent.backgroundColor
        colorGrp.bgSelection.selection = 2
      } else { this.parent.parent.nameColor = [pickedColor.rgb.red, pickedColor.rgb.green, pickedColor.rgb.blue] }
      var gfx = this.parent.graphics
      gfx.backgroundColor = gfx.newBrush(gfx.BrushType.SOLID_COLOR, [pickedColor.rgb.red / 255, pickedColor.rgb.green / 255, pickedColor.rgb.blue / 255])
    }
    app.foregroundColor = fg
  }
  swatchButton.onDraw = function () {} // don't draw the button; it's just there to make the swatch clickable
  bgSwatchButton.onClick = swatchButton.onClick

  // end artboard name

  // set options panel to be hidden.
  dlgMain.pnlOptionsShow.value = exportInfo.expOptions
  if (exportInfo.expOptions) dlgMain.pnlFileType.pnlOptions.show()
  if (!exportInfo.expOptions) dlgMain.pnlFileType.pnlOptions.hide()

  // enable checkbox functionality
  dlgMain.pnlOptionsShow.onClick = function () {
    if (dlgMain.pnlOptionsShow.value) {
      dlgMain.pnlFileType.pnlOptions.show()
      populateOptions(dlgMain.ddFileType.selection.index)
    }

    if (!dlgMain.pnlOptionsShow.value) {
      dlgMain.pnlFileType.pnlOptions.hide()
    }
  }

  dlgMain.ddFileType.onChange = function () {
    populateOptions(dlgMain.ddFileType.selection.index)
  }

  // Because I'm hiding the options now, I need to check for the correct options displayed on DD switch AND group unhide.
  function populateOptions (selIndex) {
    fileTypeGrp.grpPSDOptions.hide()
    fileTypeGrp.grpJPEGOptions.hide()
    fileTypeGrp.grpTIFFOptions.hide()
    fileTypeGrp.grpPDFOptions.hide()
    fileTypeGrp.grpTargaOptions.hide()
    fileTypeGrp.grpBMPOptions.hide()
    fileTypeGrp.grpPNG8Options.hide()
    fileTypeGrp.grpPNG24Options.hide()
    switch (selIndex) {
      case bmpIndex:
        fileTypeGrp.text = strBMPOptions
        fileTypeGrp.grpBMPOptions.show()
        exportInfo.inclArtboardName = optionsPanel.pnlArtboardName.visible = dlgMain.cbIncludeArtboardNameBMP.value
        { break }
      case jpegIndex:
        fileTypeGrp.text = strJPEGOptions
        fileTypeGrp.grpJPEGOptions.show()
        exportInfo.inclArtboardName = optionsPanel.pnlArtboardName.visible = dlgMain.cbIncludeArtboardNameJPG.value
        { break }
      case tiffIndex:
        fileTypeGrp.text = strTIFFOptions
        fileTypeGrp.grpTIFFOptions.show()
        exportInfo.inclArtboardName = optionsPanel.pnlArtboardName.visible = dlgMain.cbIncludeArtboardNameTIF.value
        { break }
      case pdfIndex:
        fileTypeGrp.text = strPDFOptions
        fileTypeGrp.grpPDFOptions.show()
        exportInfo.inclArtboardName = optionsPanel.pnlArtboardName.visible = dlgMain.cbIncludeArtboardNamePDF.value
        { break }
      case targaIndex:
        fileTypeGrp.text = strTargaOptions
        fileTypeGrp.grpTargaOptions.show()
        exportInfo.inclArtboardName = optionsPanel.pnlArtboardName.visible = dlgMain.cbIncludeArtboardNameTGA.value
        { break }
      case png8Index:
        fileTypeGrp.text = strPNG8Options
        fileTypeGrp.grpPNG8Options.show()
        exportInfo.inclArtboardName = optionsPanel.pnlArtboardName.visible = dlgMain.cbIncludeArtboardNamePNG8.value
        { break }
      case png24Index:
        fileTypeGrp.text = strPNG24Options
        fileTypeGrp.grpPNG24Options.show()
        exportInfo.inclArtboardName = optionsPanel.pnlArtboardName.visible = dlgMain.cbIncludeArtboardNamePNG24.value
        { break }
      case psdIndex:
      default:
        fileTypeGrp.text = strPSDOptions
        fileTypeGrp.grpPSDOptions.show()
        exportInfo.inclArtboardName = optionsPanel.pnlArtboardName.visible = dlgMain.cbIncludeArtboardNamePSD.value
        { break }
    }
  }

  // the bottom of the dialog
  dlgMain.grpTopRight = dlgMain.grpTop.add('group')
  dlgMain.grpTopRight.alignment = 'right'
  dlgMain.grpTopRight.orientation = 'row'

  dlgMain.btnCancel = dlgMain.grpTopRight.add('button', undefined, strButtonCancel, {text: 'Cancel'})

  dlgMain.btnCancel.onClick = function () {
    dlgMain.close(cancelButtonID)
  }

  dlgMain.btnRun = dlgMain.grpTopRight.add('button', undefined, strButtonRun, {text: 'OK'})

  dlgMain.btnRun.onClick = function () {
    // check if the setting is properly
    var destination = dlgMain.etDestination.text
    if (destination.length == 0) {
      alert(strAlertSpecifyDestination)
      return
    }
    var testFolder = new Folder(destination)
    if (!testFolder.exists) {
      alert(strAlertDestinationNotExist)
      return
    }

    dlgMain.close(runButtonID)
  }

  dlgMain.defaultElement = dlgMain.btnRun
  dlgMain.cancelElement = dlgMain.btnCancel

  dlgMain.onShow = function () {
    dlgMain.ddFileType.onChange()
    dlgMain.etDestination.text = exportInfo.destination.toString()
  }

  // give the hosting app the focus before showing the dialog
  app.bringToFront()

  dlgMain.center()

  var result = dlgMain.show()

  if (cancelButtonID == result) {
    return result // close to quit
  }

  // get setting from dialog
  exportInfo.destination = dlgMain.etDestination.text
  exportInfo.fileNamePrefix = dlgMain.etFileNamePrefix.text
  exportInfo.selectionOnly = dlgMain.cbSelection.value
  exportInfo.exportArtboardBackground = dlgMain.cbExAbBg.value
  exportInfo.includeOverlapping = dlgMain.cbOverlapping.value
  exportInfo.expOptions = dlgMain.pnlOptionsShow.value
  exportInfo.contentOnly = dlgMain.cbContentOnly.value
  exportInfo.fileType = dlgMain.ddFileType.selection.index
  exportInfo.preserveArtboard = dlgMain.preserveArtboard.value

  exportInfo.iccPDF = dlgMain.cbIccPDF.value
  exportInfo.iccPSD = dlgMain.cbIccPSD.value
  exportInfo.iccPNG8 = dlgMain.cbIccPNG8.value
  exportInfo.iccPNG24 = dlgMain.cbIccPNG24.value
  exportInfo.iccTIF = dlgMain.cbIccTIF.value
  exportInfo.iccBMP = dlgMain.cbIccBMP.value
  exportInfo.iccTGA = dlgMain.cbIccTGA.value
  exportInfo.iccJPG = dlgMain.cbIccJPG.value

  exportInfo.inclArtboardNamePDF = dlgMain.cbIncludeArtboardNamePDF.value
  exportInfo.inclArtboardNamePSD = dlgMain.cbIncludeArtboardNamePSD.value
  exportInfo.inclArtboardNamePNG8 = dlgMain.cbIncludeArtboardNamePNG8.value
  exportInfo.inclArtboardNamePNG24 = dlgMain.cbIncludeArtboardNamePNG24.value
  exportInfo.inclArtboardNameTIF = dlgMain.cbIncludeArtboardNameTIF.value
  exportInfo.inclArtboardNameBMP = dlgMain.cbIncludeArtboardNameBMP.value
  exportInfo.inclArtboardNameTGA = dlgMain.cbIncludeArtboardNameTGA.value
  exportInfo.inclArtboardNameJPG = dlgMain.cbIncludeArtboardNameJPG.value
  exportInfo.inclArtboardName = optionsPanel.pnlArtboardName.visible

  exportInfo.jpegQuality = fileTypeGrp.grpJPEGOptions.etQuality.text
  exportInfo.psdMaxComp = fileTypeGrp.grpPSDOptions.cbMax.value
  exportInfo.png8Transparency = fileTypeGrp.grpPNG8Options.png8Trans.value
  exportInfo.png8Interlaced = fileTypeGrp.grpPNG8Options.png8Inter.value
  // exportInfo.png8Trim = fileTypeGrp.grpPNG8Options.png8Trm.value
  exportInfo.png24Transparency = fileTypeGrp.grpPNG24Options.png24Trans.value
  exportInfo.png24Interlaced = fileTypeGrp.grpPNG24Options.png24Inter.value
  // exportInfo.png24Trim = fileTypeGrp.grpPNG24Options.png24Trm.value
  index = fileTypeGrp.grpTIFFOptions.grpCompression.ddCompression.selection.index
  if (index == compNoneIndex) {
    exportInfo.tiffCompression = TIFFEncoding.NONE
  }
  if (index == compLZWIndex) {
    exportInfo.tiffCompression = TIFFEncoding.TIFFLZW
  }
  if (index == compZIPIndex) {
    exportInfo.tiffCompression = TIFFEncoding.TIFFZIP
  }
  if (index == compJPEGIndex) {
    exportInfo.tiffCompression = TIFFEncoding.JPEG
  }
  exportInfo.tiffJpegQuality = fileTypeGrp.grpTIFFOptions.grpQuality.etQuality.text
  if (fileTypeGrp.grpPDFOptions.grpCompression.rbZip.value) {
    exportInfo.pdfEncoding = PDFEncoding.PDFZIP
  }
  if (fileTypeGrp.grpPDFOptions.grpCompression.rbJpeg.value) {
    exportInfo.pdfEncoding = PDFEncoding.JPEG
  }
  // pdf export settings.
  exportInfo.multipage = fileTypeGrp.grpPDFOptions.grpPresentation.multipage.value
  exportInfo.singlepage = fileTypeGrp.grpPDFOptions.grpPresentation.singlepage.value

  exportInfo.pdfJpegQuality = fileTypeGrp.grpPDFOptions.grpQuality.etQuality.text

  if (fileTypeGrp.grpTargaOptions.rb16bit.value) {
    exportInfo.targaDepth = TargaBitsPerPixels.SIXTEEN
  }
  if (fileTypeGrp.grpTargaOptions.rb24bit.value) {
    exportInfo.targaDepth = TargaBitsPerPixels.TWENTYFOUR
  }
  if (fileTypeGrp.grpTargaOptions.rb32bit.value) {
    exportInfo.targaDepth = TargaBitsPerPixels.THIRTYTWO
  }
  if (fileTypeGrp.grpBMPOptions.rb16bit.value) {
    exportInfo.bmpDepth = BMPDepthType.SIXTEEN
  }
  if (fileTypeGrp.grpBMPOptions.rb24bit.value) {
    exportInfo.bmpDepth = BMPDepthType.TWENTYFOUR
  }
  if (fileTypeGrp.grpBMPOptions.rb32bit.value) {
    exportInfo.bmpDepth = BMPDepthType.THIRTYTWO
  }
  var fontObj = fileTypeGrp.parent.pnlArtboardName.fontPanel.getFont()
  exportInfo.artboardNameFontName = fontObj.font
  exportInfo.artboardNameSize = fontObj.size
  exportInfo.artboardNameColor = colorGrp.nameColor
  exportInfo.artboardNameBackgroundColorIndex = colorGrp.bgSelection.selection.index

  return result
}

/// //////////////////////////////////////////////
// From ContactSheetII.jsx,v 1.7
// Edited 2/2016
var psx = {}
var psxui = {}

var ZStrs = {}
// Units
ZStrs.UnitsPX = localize('$$$/UnitSuffixes/Short/Px=px')
ZStrs.UnitsIN = localize('$$$/UnitSuffixes/Short/In=in')
ZStrs.Units_IN = localize('$$$/UnitSuffixes/Short/IN=in')
ZStrs.UnitsCM = localize('$$$/UnitSuffixes/Short/Cm=cm')
ZStrs.Units_CM = localize('$$$/UnitSuffixes/Short/CM=cm')
ZStrs.UnitsMM = localize('$$$/UnitSuffixes/Short/MM=mm')
ZStrs.UnitsPercent = localize('$$$/UnitSuffixes/Short/Percent=%')
ZStrs.UnitsPica = localize('$$$/UnitSuffixes/Short/Pica=pica')
ZStrs.UnitsPT = localize('$$$/UnitSuffixes/Short/Pt=pt')
ZStrs.UnitsShortCM = localize('$$$/UnitSuffixes/Short/CM=cm')
ZStrs.UnitsShortIn = localize('$$$/UnitSuffixes/Short/In=in')
ZStrs.UnitsShortIN = localize('$$$/UnitSuffixes/Short/IN=in')
ZStrs.UnitsShortMM = localize('$$$/UnitSuffixes/Short/MM=mm')
ZStrs.UnitsShortPercent = localize('$$$/UnitSuffixes/Short/Percent=%')
ZStrs.UnitsShortPica = localize('$$$/UnitSuffixes/Short/Pica=pica')
ZStrs.UnitsShortPT = localize('$$$/UnitSuffixes/Short/Pt=pt')
ZStrs.UnitsShortPx = localize('$$$/UnitSuffixes/Short/Px=px')
ZStrs.UnitsShortMMs = localize('$$$/UnitSuffixes/Short/MMs=mm')
ZStrs.UnitsShortPluralCMS = localize('$$$/UnitSuffixes/ShortPlural/CMS=cms')
ZStrs.UnitsShortPluralIns = localize('$$$/UnitSuffixes/ShortPlural/Ins=ins')
ZStrs.UnitsShortPluralPercent = localize('$$$/UnitSuffixes/ShortPlural/Percent=%')
ZStrs.UnitsShortPluralPicas = localize('$$$/UnitSuffixes/ShortPlural/Picas=picas')
ZStrs.UnitsShortPluralPts = localize('$$$/UnitSuffixes/ShortPlural/Pts=pts')
ZStrs.UnitsShortPluralPx = localize('$$$/UnitSuffixes/ShortPlural/Px=px')
ZStrs.UnitsVerboseCentimeter = localize('$$$/UnitSuffixes/Verbose/Centimeter=centimeter')
ZStrs.UnitsVerboseInch = localize('$$$/UnitSuffixes/Verbose/Inch=inch')
ZStrs.UnitsVerboseMillimeter = localize('$$$/UnitSuffixes/Verbose/Millimeter=millimeter')
ZStrs.UnitsVerbosePercent = localize('$$$/UnitSuffixes/Verbose/Percent=percent')
ZStrs.UnitsVerbosePica = localize('$$$/UnitSuffixes/Verbose/Pica=pica')
ZStrs.UnitsVerbosePixel = localize('$$$/UnitSuffixes/Verbose/Pixel=pixel')
ZStrs.UnitsVerbosePoint = localize('$$$/UnitSuffixes/Verbose/Point=point')
ZStrs.UnitsVerbosePluralCentimeters = localize('$$$/UnitSuffixes/VerbosePlural/Centimeters=Centimeters')
ZStrs.UnitsVerbosePluralInches = localize('$$$/UnitSuffixes/VerbosePlural/Inches=Inches')
ZStrs.UnitsVerbosePluralMillimeters = localize('$$$/UnitSuffixes/VerbosePlural/Millimeters=Millimeters')
ZStrs.UnitsVerbosePluralPercent = localize('$$$/UnitSuffixes/VerbosePlural/Percent=Percent')
ZStrs.UnitsVerbosePluralPicas = localize('$$$/UnitSuffixes/VerbosePlural/Picas=Picas')
ZStrs.UnitsVerbosePluralPixels = localize('$$$/UnitSuffixes/VerbosePlural/Pixels=Pixels')
ZStrs.UnitsVerbosePluralPoints = localize('$$$/UnitSuffixes/VerbosePlural/Points=Points')
ZStrs.FontLabel = localize('$$$/JavaScripts/psx/FontLabel=Font:')
ZStrs.FontTip = localize('$$$/JavaScripts/psx/FontTip=Select the font')
ZStrs.FontStyleTip = localize('$$$/JavaScripts/psx/FontStyleTip=Select the font style')
ZStrs.FontSizeTip = localize('$$$/JavaScripts/psx/FontSizeTip=Select the font size')

ZStrs.MacCourier = localize('$$$/JavaScripts/MeasurementScaleMarker/TextFont/Mac/Courier=Courier')
// was AETE/ContactSheet2/Mac/Courier=Courier
// mapped to Myriad Pro for en_*

ZStrs.MacSansSerif = localize('$$$/JavaScripts/MeasurementScaleMarker/TextFont/Mac/Helvetica=Helvetica')
// was AETE/ContactSheet2/Mac/SansSerif=Helvetica
// mapped to Minion Pro for en_*

ZStrs.MacSansSerifFaceName = localize('$$$/JavaScripts/MeasurementScaleMarker/TextFontFaceName/Mac/Helvetica=Helvetica')

ZStrs.MacSerif = localize('$$$/JavaScripts/MeasurementScaleMarker/TextFont/Mac/TimesNewRoman=Times New Roman')
// was AETE/ContactSheet2/Mac/Serif=Times
// mapped to Lucida Grande for en_*

ZStrs.WinCourier = localize('$$$/JavaScripts/MeasurementScaleMarker/TextFont/Windows/Courier=Courier')
// was AETE/ContactSheet2/Win/Courier=Courier

ZStrs.WinSansSerif = localize('$$$/JavaScripts/MeasurementScaleMarker/TextFont/Windows/Arial=Arial')
// was AETE/ContactSheet2/Win/SansSerif=Arial

ZStrs.WinSansSerifFaceName = localize('$$$/JavaScripts/MeasurementScaleMarker/TextFontFaceName/Windows/Arial=Arial')

ZStrs.WinSerif = localize('$$$/JavaScripts/MeasurementScaleMarker/TextFont/Windows/TimesNewRoman=Times New Roman')
// was AETE/ContactSheet2/Win/Serif=Times New Roman

// =========================== PS Functions ===============================

//
// Function: getApplicationProperty
// Description: Get a value from the Application descriptor
// Input: key - an ID
// Return: The value or undefined
//
psx.getApplicationProperty = function (key) {
  var ref = ref = new ActionReference()
  ref.putProperty(charIDToTypeID('Prpr'), key)
  ref.putEnumerated(charIDToTypeID('capp'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'))
  var desc
  try {
    desc = executeActionGet(ref)
  } catch (e) {
    return undefined
  }
  var val
  if (desc.hasKey(key)) {
    var typ = desc.getType(key)
    switch (typ) {
      case DescValueType.ALIASTYPE:
        val = desc.getPath(key)
        { break }
      case DescValueType.BOOLEANTYPE:
        val = desc.getBoolean(key)
        { break }
      case DescValueType.CLASSTYPE:
        val = desc.getClass(key)
        { break }
      case DescValueType.DOUBLETYPE:
        val = desc.getDouble(key)
        { break }
      case DescValueType.ENUMERATEDTYPE:
        val = desc.getEnumeratedValue(key)
        { break }
      case DescValueType.INTEGERTYPE:
        val = desc.getInteger(key)
        { break }
      case DescValueType.LISTTYPE:
        val = desc.getList(key)
        { break }
      case DescValueType.OBJECTTYPE:
        val = desc.getObjectValue(key)
        { break }
      case DescValueType.RAWTYPE:
        val = desc.getData(key)
        { break }
      case DescValueType.REFERENCETYPE:
        val = desc.getReference(key)
        { break }
      case DescValueType.STRINGTYPE:
        val = desc.getString(key)
        { break }
      case DescValueType.UNITDOUBLE:
        val = desc.getUnitDoubleValue(key)
        { break }
    }
  }
  return val
}

//
// Description: Should the PS locale be used to determine the
// decimal point or should the OS locale be used.
// PS uses the OS locale so scripts may not match
// the PS UI.
//
psx.USE_PS_LOCALE_FOR_DECIMAL_PT = true

//
// Function: determineDecimalPoint
// Description: determine what to use for the decimal point
// Input: <none>
// Return: a locale-specific decimal point
//
// Note: Currently there is no way to determine what decimal
// point is being used in the PS UI so this always returns
// the decimal point for the PS locale
//
psx.determineDecimalPoint = function () {
  // if (psx.USE_PS_LOCALE_FOR_DECIMAL_PT) {
  psx.decimalPoint = $.decimalPoint
  // }
  return psx.decimalPoint
}
psx.determineDecimalPoint()

//
// Function: localizeNumber
// Description: convert a number to a string with a localized decimal point
// Input: n - a number or UnitValue
// Return: a number as a localized string
//
psx.localizeNumber = function (n) {
  return n.toString().replace('.', psx.decimalPoint)
}

//
// Function: delocalizeNumber
// Description: convert a string containing a localized number to
// a "standard" number string
// Input: a localized numeric string
// Return: a numeric string with a EN decimal point
//
psx.delocalizeNumber = function (n) {
  return n.toString().replace(psx.decimalPoint, '.')
}

//
// Function: toNumber
// Description: convert a something to a number
// Input: s - some representation of a number
// def - a value to use if s cannot be parsed
// Return: a number or NaN if there was a problem and no default was specified
//
function toNumber (s, def) {
  if (s == undefined) { return def || NaN }
  try { if (s instanceof XML) s = s.toString() } catch (e) {}
  if (s.constructor == String && s.length == 0) { return def || NaN }
  if (s.constructor == Number) { return s.valueOf() }
  try {
    var n = Number(psx.delocalizeNumber(s.toString()))
  } catch (e) {
    // $.level = 1; debugger;
  }
  return (isNaN(n) ? (def || NaN) : n)
}

//
// Function: getByName
// Description: Get an element in the container with a desired name property
// Input: container - an Array or something with a [] interface
// value - the name of the element being sought
// all - get all elements with the given name
// Return: an object, array of objects, or undefined
//
psx.getByName = function (container, value, all) {
  return psx.getByProperty(container, 'name', value, all)
}

//
// Function: getByProperty
// Description: Get an element in the container with a desired property
// Input: container - an Array or something with a [] interface
// prop - the name of the property
// value - the value of the property of the element being sought
// all - get all elements that match
// Return: an object, array of objects, or undefined
//
psx.getByProperty = function (container, prop, value, all) {
  // check for a bad index
  if (prop == undefined) {
    Error.runtimeError(2, 'prop')
  }
  if (value == undefined) {
    Error.runtimeError(2, 'value')
  }
  var matchFtn

  all = !!all

  if (value instanceof RegExp) {
    matchFtn = function (s1, re) { return s1.match(re) != null }
  } else {
    matchFtn = function (s1, s2) { return s1 == s2 }
  }

  var obj = []

  for (var i = 0; i < container.length; i++) {
    if (matchFtn(container[i][prop], value)) {
      if (!all) {
        return container[i] // there can be only one!
      }
      obj.push(container[i]) // add it to the list
    }
  }

  return all ? obj : undefined
}

//
// Function: determineFont
// Description: find a font based on a name
// Input: str - a font name or postScriptName
// Return: a TextFont or undefined
//
psx.determineFont = function (str) {
  return (psx.getByName(app.fonts, str) ||
          psx.getByProperty(app.fonts, 'postScriptName', str))
}

//
// Function: getDefaultFont
// Description: Attempt to find a resonable locale-specific font
// Input: <none>
// Return: TextFont or undefined
//
psx.getDefaultFont = function () {
  var str

  if (File.fs == 'Macintosh') {
    str = localize('$$$/Project/Effects/Icon/Font/Name/Mac=Lucida Grande')
  } else {
    str = localize('$$$/Project/Effects/Icon/Font/Name/Win=Tahoma')
  }

  var font = psx.determineFont(str)

  if (!font) {
    var f = psx.getApplicationProperty(stringIDToTypeID('fontLargeName'))
    if (f != undefined) {
      font = psx.determineFont(f)
    }
  }

  return font
}

// ======================== Font Panel =================================
//
// Function: createFontPanel
// Description: Creates a font selector panel
// Input: pnl - the panel that will be populated
// ini - an object that contains initial values (not used)
// label - the lable for the panel (opt)
// lwidth - the width to use for the label in the UI
// Return: the panel
//
psxui.createFontPanel = function (pnl, ini, label, lwidth) {
  var w = 180
  var xofs = 0
  var y = 0

  if (pnl.type == 'panel') {
    xofs += 5
    y += 5
  }

  var tOfs = 3
  var x = xofs

  if (label == undefined) {
    label = ZStrs.FontLabel
    lwidth = pnl.graphics.measureString(label)[0] + 5
  }

  if (label != '') {
    pnl.label = pnl.add('statictext', [x, y + tOfs, x + lwidth, y + 22 + tOfs], label)
    pnl.label.helpTip = ZStrs.FontTip
    x += lwidth
  }
  pnl.family = pnl.add('dropdownlist', [x, y, x + 130, y + 22])
  pnl.family.helpTip = ZStrs.FontTip
  x += 185
  pnl.style = pnl.add('dropdownlist', [x, y, x + 80, y + 22])
  pnl.style.helpTip = ZStrs.FontStyleTip
  x += 115
  pnl.fontSize = pnl.add('edittext', [x, y, x + 20, y + 22], '12', { characters: 1, justify: 'right' })
  pnl.fontSize.alignment = 'right'
  pnl.fontSize.helpTip = ZStrs.FontSizeTip
  x += 34
  pnl.sizeLabel = pnl.add('statictext', [x, y + tOfs, x + 15, y + 22 + tOfs], ZStrs.UnitsPT)

  var lbl = pnl.sizeLabel
  lbl.bounds.width = pnl.graphics.measureString(ZStrs.UnitsPT)[0] + 3

  pnl.fontTable = psxui._getFontTable()
  var names = []
  for (var idx in pnl.fontTable) {
    names.push(idx)
  }
  // names.sort()
  for (var i = 0; i < names.length; i++) {
    pnl.family.add('item', names[i])
  }

  pnl.family.onChange = function () {
    var pnl = this.parent
    var sel = pnl.family.selection.text
    var family = pnl.fontTable[sel]

    pnl.style.removeAll()

    var styles = family.styles

    for (var i = 0; i < styles.length; i++) {
      var it = pnl.style.add('item', styles[i].style)
      it.font = styles[i].font
    }
    if (pnl._defaultStyle) {
      var it = pnl.style.find(pnl._defaultStyle)
      pnl._defaultStyle = undefined
      if (it) {
        it.selected = true
      } else {
        pnl.style.items[0].selected = true
      }
    } else {
      pnl.style.items[0].selected = true
    }
  }
  pnl.family.items[0].selected = true

  pnl.fontSize.onChanging = psxui.numericKeystrokeFilter

  //
  // Function: setFont
  // Description: set the font and font size
  // Input: str - TextFont or the font name
  // size - the font size in points
  // Return: <none>
  //
  pnl.setFont = function (str, size) {
    var pnl = this
    if (!str) {
      return
    }
    var font = (str.typename == 'TextFont') ? str : psx.determineFont(str)
    if (!font) {
      font = psx.getDefaultFont()
    }
    if (font) {
      var it = pnl.family.find(font.family)
      if (it) {
        it.selected = true
        pnl._defaultStyle = font.style
      }
    }
    pnl.fontSize.text = size
    pnl._fontSize = size
    pnl.family.onChange()
  }

  //
  // Function: getFont
  // Description: Gets the current font and font size
  // Input: <none>
  // Return: an object containing the font and size
  //
  pnl.getFont = function () {
    var pnl = this
    var font = pnl.style.selection.font
    return { font: font.postScriptName, size: toNumber(pnl.fontSize.text) }

    var fsel = pnl.family.selection.text
    var ssel = pnl.style.selection.text
    var family = pnl.fontTable[sel]
    var styles = familyStyles
    var font

    for (var i = 0; i < styles.length && font == undefined; i++) {
      if (styles[i].style == ssel) {
        font = styles[i].font
      }
    }
    return { font: font, size: toNumber(font.fontSize) }
  }

  return pnl
}

//
// Function: _getFontTable
// Description: Used by the Font Panel. Creates a table that
// maps font names to their styles
// Input: <none>
// Return: an object where the names are font.family and the
// values are objects containing the font family and styles
//
psxui._getFontTable = function () {
  var fonts = app.fonts
  var fontTable = {}
  for (var i = 0; i < fonts.length; i++) {
    var font = fonts[i]
    var entry = fontTable[font.family]
    if (!entry) {
      entry = { family: font.family, styles: [] }
      fontTable[font.family] = entry
    }
    entry.styles.push({ style: font.style, font: font })
  }
  return fontTable
}

//
// Function: _getFontArray
// Description:
// Input: <none>
// Return: an array of font info objects created by _getFontTable
//
psxui._getFontArray = function () {
  var fontTable = psxui._getFontTable()
  var fonts = []
  for (var idx in fontTable) {
    var f = fontTable[idx]
    fonts.push(f)
  }
  return fonts
}

// DEFINED IN INDIVIDUAL INSTANCES NOT IN INCLUDE FILE
// ~ ///////////////////////////////////////////////////////////////////////////////
// ~ // Function: initExportInfo
// ~ // Usage: create our default parameters
// ~ // Input: a new Object
// ~ // Return: a new object with params set to default
// ~ ///////////////////////////////////////////////////////////////////////////////
// ~ function initExportInfo(exportInfo, isSelection) {
// ~     exportInfo.destination = new String("")
// ~     exportInfo.fileNamePrefix = new String("untitled_")
// ~     if (isSelection) exportInfo.selectionOnly = true
// ~     if (!isSelection) exportInfo.selectionOnly = false
// ~     exportInfo.includeOverlapping = true
// ~     exportInfo.expOptions = false
// ~     exportInfo.contentOnly = false
// ~     exportInfo.fileType = psdIndex
// ~     exportInfo.icc = true
// ~     exportInfo.jpegQuality = 8
// ~     exportInfo.psdMaxComp = true
// ~     exportInfo.tiffCompression = TIFFEncoding.NONE
// ~     exportInfo.tiffJpegQuality = 8
// ~     exportInfo.pdfEncoding = PDFEncoding.JPEG
// ~     exportInfo.pdfJpegQuality = 8
// ~     exportInfo.targaDepth = TargaBitsPerPixels.TWENTYFOUR
// ~     exportInfo.bmpDepth = BMPDepthType.TWENTYFOUR
// ~     exportInfo.png24Transparency = true
// ~     exportInfo.png24Interlaced = false
// ~     exportInfo.png24Trim = true
// ~     exportInfo.png8Transparency = true
// ~     exportInfo.png8Interlaced = false
// ~     exportInfo.png8Trim = true

// ~     //init pdf settings
// ~     exportInfo.multipage = true
// ~     exportInfo.inclArtboardName = false
// ~     //exportInfo.background = 0
// ~     exportInfo.pdfJpegQuality = 8

// ~     try {
// ~         exportInfo.destination = Folder(app.activeDocument.fullName.parent).fsName // destination folder
// ~         var tmp = app.activeDocument.fullName.name
// ~         exportInfo.fileNamePrefix = decodeURI(tmp.substring(0, tmp.indexOf("."))) // filename body part
// ~     } catch(someError) {
// ~         exportInfo.destination = new String("")
// ~         exportInfo.fileNamePrefix = app.activeDocument.name // filename body part
// ~     }
// ~ }

/// ////////////////////////////////////////////////////////////////////////////
// Function: initFileNameDestination
// Usage: read the filename and path from the current document, overriding saved or recorded parameters
// Input: an initialized object
// Return: a modified object
/// ////////////////////////////////////////////////////////////////////////////
function initFileNameDestination (exportInfo) {
  try {
    exportInfo.destination = Folder(app.activeDocument.fullName.parent).fsName // destination folder
    var tmp = app.activeDocument.fullName.name
    var pieces = tmp.split('.')
    exportInfo.fileNamePrefix = decodeURI(pieces.length == 1 ? tmp : pieces.slice(0, pieces.length - 1).join('.')) // filename body part
  } catch (someError) {
    exportInfo.destination = new String('')
    exportInfo.fileNamePrefix = app.activeDocument.name // filename body part
  }
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: saveFileNow
// Usage: the worker routine, take our params and save the file accordingly
// Input: reference to the document, the name of the output file,
// export info object containing more information
// Return: <none>, a file on disk
/// ////////////////////////////////////////////////////////////////////////////
function saveFileNow (docRef, fileNameBody, exportInfo) {
  var isS4W = false,
    fileExtension
  switch (exportInfo.fileType) {
    case jpegIndex:
      fileExtension = 'jpg'
      docRef.bitsPerChannel = BitsPerChannelType.EIGHT
      var saveFile = new File(exportInfo.destination + '/' + fileNameBody + '.jpg')
      jpgSaveOptions = new JPEGSaveOptions()
      jpgSaveOptions.embedColorProfile = exportInfo.iccJPG
      jpgSaveOptions.quality = exportInfo.jpegQuality
      docRef.saveAs(saveFile, jpgSaveOptions, true, Extension.LOWERCASE)
      { break }
    case psdIndex:
      fileExtension = 'psd'
      var saveFile = new File(exportInfo.destination + '/' + fileNameBody + '.psd')
      psdSaveOptions = new PhotoshopSaveOptions()
      psdSaveOptions.embedColorProfile = exportInfo.iccPSD
      psdSaveOptions.maximizeCompatibility = exportInfo.psdMaxComp
      docRef.saveAs(saveFile, psdSaveOptions, true, Extension.LOWERCASE)
      { break }
    case tiffIndex:
      fileExtension = 'tiff'
      var saveFile = new File(exportInfo.destination + '/' + fileNameBody + '.tif')
      tiffSaveOptions = new TiffSaveOptions()
      tiffSaveOptions.embedColorProfile = exportInfo.iccTIF
      tiffSaveOptions.imageCompression = exportInfo.tiffCompression
      if (TIFFEncoding.JPEG == exportInfo.tiffCompression) {
        tiffSaveOptions.jpegQuality = exportInfo.tiffJpegQuality
      }
      docRef.saveAs(saveFile, tiffSaveOptions, true, Extension.LOWERCASE)
      { break }
    case pdfIndex:
      // If multipage is true, then need to run Photoshop PDF save on each separate artboard and
      // then make Presentation "binder" PDF when the script is all done. (that is in MAIN())
      if (exportInfo.multipage) {
        fileExtension = 'pdf'
        var tempPSDs = (exportInfo.destination + '/TempPSDs')
        if (!Folder(tempPSDs).exists) { Folder(tempPSDs).create() }
        var saveFile = new File(tempPSDs + '/' + fileNameBody + '.pdf')
        pdfSaveOptions = new PDFSaveOptions()
        pdfSaveOptions.embedColorProfile = exportInfo.iccPDF
        pdfSaveOptions.encoding = exportInfo.pdfEncoding
        if (PDFEncoding.JPEG == exportInfo.pdfEncoding) {
          pdfSaveOptions.jpegQuality = exportInfo.pdfJpegQuality
        }
        docRef.saveAs(saveFile, pdfSaveOptions, true, Extension.LOWERCASE)
        sourceFilesForPdf.push(saveFile)
      }
      // If multipage is false, then exporting separate single page PDF files, one per artboard.
      if (exportInfo.singlepage) {
        fileExtension = 'pdf'
        if (docRef.bitsPerChannel == BitsPerChannelType.THIRTYTWO) { docRef.bitsPerChannel = BitsPerChannelType.SIXTEEN }
        var saveFile = new File(exportInfo.destination + '/' + fileNameBody + '.pdf')
        pdfSaveOptions = new PDFSaveOptions()
        pdfSaveOptions.embedColorProfile = exportInfo.iccPDF
        pdfSaveOptions.encoding = exportInfo.pdfEncoding
        if (PDFEncoding.JPEG == exportInfo.pdfEncoding) {
          pdfSaveOptions.jpegQuality = exportInfo.pdfJpegQuality
        }
        docRef.saveAs(saveFile, pdfSaveOptions, true, Extension.LOWERCASE)
      }
      { break }
    case targaIndex:
      fileExtension = 'tga'
      docRef.bitsPerChannel = BitsPerChannelType.EIGHT
      var saveFile = new File(exportInfo.destination + '/' + fileNameBody + '.tga')
      targaSaveOptions = new TargaSaveOptions()
      targaSaveOptions.resolution = exportInfo.targaDepth

      docRef.saveAs(saveFile, targaSaveOptions, true, Extension.LOWERCASE)
      { break }
    case bmpIndex:
      fileExtension = 'bmp'
      docRef.bitsPerChannel = BitsPerChannelType.EIGHT
      var saveFile = new File(exportInfo.destination + '/' + fileNameBody + '.bmp')
      bmpSaveOptions = new BMPSaveOptions()
      bmpSaveOptions.depth = exportInfo.bmpDepth
      docRef.saveAs(saveFile, bmpSaveOptions, true, Extension.LOWERCASE)
      { break }
    case png8Index:
      fileExtension = 'png8'
      isS4W = true
      var id5 = charIDToTypeID('Expr')
      var desc3 = new ActionDescriptor()
      var id6 = charIDToTypeID('Usng')
      var desc4 = new ActionDescriptor()
      var id7 = charIDToTypeID('Op  ')
      var id8 = charIDToTypeID('SWOp')
      var id9 = charIDToTypeID('OpSa')
      desc4.putEnumerated(id7, id8, id9)
      var id10 = charIDToTypeID('Fmt ')
      var id11 = charIDToTypeID('IRFm')
      var id12 = charIDToTypeID('PNG8')
      desc4.putEnumerated(id10, id11, id12)
      var id13 = charIDToTypeID('Intr') // Interlaced
      desc4.putBoolean(id13, exportInfo.png8Interlaced)
      var id14 = charIDToTypeID('RedA')
      var id15 = charIDToTypeID('IRRd')
      var id16 = charIDToTypeID('Prcp') // Algorithm
      desc4.putEnumerated(id14, id15, id16)
      var id17 = charIDToTypeID('RChT')
      desc4.putBoolean(id17, false)
      var id18 = charIDToTypeID('RChV')
      desc4.putBoolean(id18, false)
      var id19 = charIDToTypeID('AuRd')
      desc4.putBoolean(id19, false)
      var id20 = charIDToTypeID('NCol') // NO. Of Colors
      desc4.putInteger(id20, 256)
      var id21 = charIDToTypeID('Dthr') // Dither
      var id22 = charIDToTypeID('IRDt')
      var id23 = charIDToTypeID('Dfsn') // Dither type
      desc4.putEnumerated(id21, id22, id23)
      var id24 = charIDToTypeID('DthA')
      desc4.putInteger(id24, 100)
      var id25 = charIDToTypeID('DChS')
      desc4.putInteger(id25, 0)
      var id26 = charIDToTypeID('DCUI')
      desc4.putInteger(id26, 0)
      var id27 = charIDToTypeID('DChT')
      desc4.putBoolean(id27, false)
      var id28 = charIDToTypeID('DChV')
      desc4.putBoolean(id28, false)
      var id29 = charIDToTypeID('WebS')
      desc4.putInteger(id29, 0)
      var id30 = charIDToTypeID('TDth') // transparency dither
      var id31 = charIDToTypeID('IRDt')
      var id32 = charIDToTypeID('None')
      desc4.putEnumerated(id30, id31, id32)
      var id33 = charIDToTypeID('TDtA')
      desc4.putInteger(id33, 100)
      var id34 = charIDToTypeID('Trns') // Transparency
      desc4.putBoolean(id34, exportInfo.png8Transparency)
      var id35 = charIDToTypeID('Mtt ')
      desc4.putBoolean(id35, true) // matte
      var id36 = charIDToTypeID('MttR') // matte color
      desc4.putInteger(id36, 255)
      var id37 = charIDToTypeID('MttG')
      desc4.putInteger(id37, 255)
      var id38 = charIDToTypeID('MttB')
      desc4.putInteger(id38, 255)
      var id39 = charIDToTypeID('SHTM')
      desc4.putBoolean(id39, false)
      var id40 = charIDToTypeID('SImg')
      desc4.putBoolean(id40, true)
      var id41 = charIDToTypeID('SSSO')
      desc4.putBoolean(id41, false)
      var id42 = charIDToTypeID('SSLt')
      var list1 = new ActionList()
      desc4.putList(id42, list1)
      var id43 = charIDToTypeID('DIDr')
      desc4.putBoolean(id43, false)
      var id44 = charIDToTypeID('In  ')
      desc4.putPath(id44, new File(exportInfo.destination + '/' + fileNameBody + '.png'))
      desc4.putBoolean(charIDToTypeID('EICC'), exportInfo.iccPNG8)
      var id45 = stringIDToTypeID('SaveForWeb')
      desc3.putObject(id6, id45, desc4)
      executeAction(id5, desc3, DialogModes.NO)
      { break }
    case png24Index:
      fileExtension = 'png24'
      if (exportInfo.png24Transparency) {
        fileExtension = 'png32'
      }
      isS4W = true
      var id6 = charIDToTypeID('Expr')
      var desc3 = new ActionDescriptor()
      var id7 = charIDToTypeID('Usng')
      var desc4 = new ActionDescriptor()
      var id8 = charIDToTypeID('Op  ')
      var id9 = charIDToTypeID('SWOp')
      var id10 = charIDToTypeID('OpSa')
      desc4.putEnumerated(id8, id9, id10)
      var id11 = charIDToTypeID('Fmt ')
      var id12 = charIDToTypeID('IRFm')
      var id13 = charIDToTypeID('PN24')
      desc4.putEnumerated(id11, id12, id13)
      var id14 = charIDToTypeID('Intr')
      desc4.putBoolean(id14, exportInfo.png24Interlaced)
      var id15 = charIDToTypeID('Trns')
      desc4.putBoolean(id15, exportInfo.png24Transparency)
      var id16 = charIDToTypeID('Mtt ')
      desc4.putBoolean(id16, true)
      var id17 = charIDToTypeID('MttR')
      desc4.putInteger(id17, 255)
      var id18 = charIDToTypeID('MttG')
      desc4.putInteger(id18, 255)
      var id19 = charIDToTypeID('MttB')
      desc4.putInteger(id19, 255)
      var id20 = charIDToTypeID('SHTM')
      desc4.putBoolean(id20, false)
      var id21 = charIDToTypeID('SImg')
      desc4.putBoolean(id21, true)
      var id22 = charIDToTypeID('SSSO')
      desc4.putBoolean(id22, false)
      var id23 = charIDToTypeID('SSLt')
      var list1 = new ActionList()
      desc4.putList(id23, list1)
      var id24 = charIDToTypeID('DIDr')
      desc4.putBoolean(id24, false)
      var id25 = charIDToTypeID('In  ')
      desc4.putPath(id25, new File(exportInfo.destination + '/' + fileNameBody + '.png'))
      desc4.putBoolean(charIDToTypeID('EICC'), exportInfo.iccPNG24)
      var id26 = stringIDToTypeID('SaveForWeb')
      desc3.putObject(id7, id26, desc4)
      executeAction(id6, desc3, DialogModes.NO)
      { break }
    default:
      if (DialogModes.NO != app.playbackDisplayDialogs) {
        alert(strUnexpectedError)
      }
      { break }
  }
  logToHeadLights(strTitle + ' file type exported: ' + fileExtension)
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: objectToDescriptor
// Usage: create an ActionDescriptor from a JavaScript Object
// Input: JavaScript Object (o)
// object unique string (s)
// Pre process converter (f)
// Return: ActionDescriptor
// NOTE: Only boolean, string, number and UnitValue are supported, use a pre processor
// to convert (f) other types to one of these forms.
// REUSE: This routine is used in other scripts. Please update those if you
// modify. I am not using include or eval statements as I want these
// scripts self contained.
/// ////////////////////////////////////////////////////////////////////////////
function objectToDescriptor (o, s, f) {
  if (undefined != f) {
    o = f(o)
  }
  var d = new ActionDescriptor()
  var l = o.reflect.properties.length
  d.putString(app.charIDToTypeID('Msge'), s)
  for (var i = 0; i < l; i++) {
    var k = o.reflect.properties[i].toString()
    if (k == '__proto__' || k == '__count__' || k == '__class__' || k == 'reflect') { continue }
    var v = o[k]
    k = app.stringIDToTypeID(k)
    switch (typeof (v)) {
      case 'boolean':
        d.putBoolean(k, v)
        { break }
      case 'string':
        d.putString(k, v)
        { break }
      case 'number':
        d.putDouble(k, v)
        { break }
      default:
        {
          if (v instanceof UnitValue) {
            var uc = new Object()
            uc['px'] = charIDToTypeID('#Rlt') // unitDistance
            uc['%'] = charIDToTypeID('#Prc') // unitPercent
            d.putUnitDouble(k, uc[v.type], v.value)
          } else {
            throw (new Error('Unsupported type in objectToDescriptor: ' + typeof (v)))
          }
        }
    }
  }
  return d
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: descriptorToObject
// Usage: update a JavaScript Object from an ActionDescriptor
// Input: JavaScript Object (o), current object to update (output)
// Photoshop ActionDescriptor (d), descriptor to pull new params for object from
// object unique string (s)
// JavaScript Function (f), post process converter utility to convert
// Return: Nothing, update is applied to passed in JavaScript Object (o)
// NOTE: Only boolean, string, number and UnitValue are supported, use a post processor
// to convert (f) other types to one of these forms.
// REUSE: This routine is used in other scripts. Please update those if you
// modify. I am not using include or eval statements as I want these
// scripts self contained.
/// ////////////////////////////////////////////////////////////////////////////
function descriptorToObject (o, d, s, f) {
  var l = d.count
  if (l) {
    var keyMessage = app.charIDToTypeID('Msge')
    if (d.hasKey(keyMessage) && (s != d.getString(keyMessage))) return
  }
  for (var i = 0; i < l; i++) {
    var k = d.getKey(i) // i + 1 ?
    var t = d.getType(k)
    strk = app.typeIDToStringID(k)
    switch (t) {
      case DescValueType.BOOLEANTYPE:
        o[strk] = d.getBoolean(k)
        { break }
      case DescValueType.STRINGTYPE:
        o[strk] = d.getString(k)
        { break }
      case DescValueType.DOUBLETYPE:
        o[strk] = d.getDouble(k)
        { break }
      case DescValueType.UNITDOUBLE:
        {
          var uc = new Object()
          uc[charIDToTypeID('#Rlt')] = 'px' // unitDistance
          uc[charIDToTypeID('#Prc')] = '%' // unitPercent
          uc[charIDToTypeID('#Pxl')] = 'px' // unitPixels
          var ut = d.getUnitDoubleType(k)
          var uv = d.getUnitDoubleValue(k)
          o[strk] = new UnitValue(uv, uc[ut])
        }
        { break }
      case DescValueType.INTEGERTYPE:
      case DescValueType.ALIASTYPE:
      case DescValueType.CLASSTYPE:
      case DescValueType.ENUMERATEDTYPE:
      case DescValueType.LISTTYPE:
      case DescValueType.OBJECTTYPE:
      case DescValueType.RAWTYPE:
      case DescValueType.REFERENCETYPE:
      default:
        throw (new Error('Unsupported type in descriptorToObject ' + t))
    }
  }
  if (undefined != f) {
    o = f(o)
  }
}

/// ////////////////////////////////////////////////////////////////////////
// Function: StrToIntWithDefault
// Usage: convert a string to a number, first stripping all characters
// Input: string and a default number
// Return: a number
/// ////////////////////////////////////////////////////////////////////////
function StrToIntWithDefault (s, n) {
  var onlyNumbers = /[^0-9]/g
  var t = s.replace(onlyNumbers, '')
  t = parseInt(t)
  if (!isNaN(t)) {
    n = t
  }
  return n
}

/// ////////////////////////////////////////////////////////////////////////
// Function: makeJPEGQualityFieldValidationFunction
// Usage: Validation for JPEG Quality fields
// Input: either an integer or a holding property
// Return: a function for .onChange
/// ////////////////////////////////////////////////////////////////////////
function makeJPEGQualityFieldValidationFunction (defaultValue, alternateProperty) {
  return function () {
    var val = this.text
    if (isNaN(val)) {
      this.text = defaultValue || alternateProperty.value
    } else {
      if (val > 12) { val = 12 }
      if (val < 0) { val = 0 }
      this.text = val
      if (alternateProperty) { alternateProperty.value = val }
    }
  }
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: logToHeadLights
// Usage: Logs to headlight usage data based on "export".
// Input:: (active document.) s
// Return: array of indexes ID's of selected layers.
/// ////////////////////////////////////////////////////////////////////////////
function logToHeadLights (eventRecord) {
  var headlightsActionID = stringIDToTypeID('headlightsLog')
  var desc = new ActionDescriptor()
  desc.putString(stringIDToTypeID('subcategory'), 'Export')
  desc.putString(stringIDToTypeID('eventRecord'), eventRecord)
  executeAction(headlightsActionID, desc, DialogModes.NO)
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: preProcessExportInfo
// Usage: convert Photoshop enums to strings for storage
// Input: JavaScript Object of my params for this script
// Return: JavaScript Object with objects converted for storage
/// ////////////////////////////////////////////////////////////////////////////
function preProcessExportInfo (o) {
  o.tiffCompression = o.tiffCompression.toString()
  o.pdfEncoding = o.pdfEncoding.toString()
  o.targaDepth = o.targaDepth.toString()
  o.bmpDepth = o.bmpDepth.toString()
  o.artboardNameColor = o.artboardNameColor.toSource().toString()
  o.artboardNameBackgroundColor = o.artboardNameBackgroundColor.toSource().toString()
  return o
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: postProcessExportInfo
// Usage: convert strings from storage to Photoshop enums
// Input: JavaScript Object of my params in string form
// Return: JavaScript Object with objects in enum form
/// ////////////////////////////////////////////////////////////////////////////
function postProcessExportInfo (o) {
  o.tiffCompression = eval(o.tiffCompression)
  o.pdfEncoding = eval(o.pdfEncoding)
  o.targaDepth = eval(o.targaDepth)
  o.bmpDepth = eval(o.bmpDepth)
  if (typeof (o.artboardNameColor) === 'string') { o.artboardNameColor = eval(o.artboardNameColor) }
  if (typeof (o.artboardNameBackgroundColor) === 'string') { o.artboardNameBackgroundColor = eval(o.artboardNameBackgroundColor) }
  return o
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// start unArtboard functions.

/// ////////////////////////////////////////////////////////////////////////////
// Function: unArtBoard
// Usage: master function that will ungroup all artboards in document.
// Input: an array of Artboard data, document, boolean whether the export is artboard content only
// Return: array of Artboard data
/// ////////////////////////////////////////////////////////////////////////////

function unArtBoard (abAr, srcDoc, isContentOnly, exportBg) {
  function createBackground (abData) {
    // only create background if export is enabled in artboard properties
    if (exportBg) {
      switch (abData.bgType) {
        case 1: // white
          makeBackground(255, 255, 255, abData.name)
          { break }
        case 2: // black
          makeBackground(0, 0, 0, abData.name)
          { break }
        case 4: // other
          makeBackground(abData.bgColor[0], abData.bgColor[1], abData.bgColor[2], abData.name)
          { break }
      }
    }
  }

  for (var u = 0; u < abAr.length; u++) {
    // if overlap I need to create background before unartboard
    if (!isContentOnly) {
      selectLayerFromAMid(abAr[u].AMid, 'replaceSelection')
      createBackground(abAr[u])
    }

    selectLayerFromAMid(abAr[u].AMid, 'replaceSelection')
    if (!ungroupArtboard(abAr[u].AMid, abAr[u].name)) { return false }
    var newID = layerSetFromSelected(abAr[u].name)
    abAr[u].groupAMid = newID

    // create selection mask for group from AB bounds
    var lt = abAr[u].left
    var tp = abAr[u].top
    var rt = abAr[u].right
    var bt = abAr[u].bottom
    srcDoc.selection.select([[lt, tp], [rt, tp], [rt, bt], [lt, bt]], SelectionType.REPLACE, 0, false)
    makeMaskFromSelection()
    if (isContentOnly) { // create bg after unartboard
      selectLayerFromAMid(newID, 'replaceSelection')
      createBackground(abAr[u])
    }
  }
  return abAr
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: ungroupArtboard
// Usage: will ungroup the artboard document .
// Input: the AM id of an artboard document, name of Artboard
// Return: an ungrouped artboard.
/// ////////////////////////////////////////////////////////////////////////////
function ungroupArtboard (AMid, ArName) {
  try {
    selectLayerFromAMid(AMid, 'replaceSelection')
    var ref = new ActionReference()
    ref.putEnumerated(stringIDToTypeID('layer'), stringIDToTypeID('ordinal'), stringIDToTypeID('targetEnum'))
    var desc = new ActionDescriptor()
    desc.putReference(stringIDToTypeID('null'), ref)
    executeAction(stringIDToTypeID('ungroupLayersEvent'), desc, DialogModes.NO)
    // when process is done, need to get the AMid of the active layer because it no longer is the same as the ABamID I started with.
    // alert("original abID =" + AMid + " new group ID = " + getLayerID())
  } catch (e) {
    return false
  }

  return getLayerID()
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: selectLayerFromAMid
// Usage: Select a layer by its AMid value.
// Input: AM id value and type of selection, either "addToSelectionContinuous" or "addToSelection" or "removeFromSelection"
// Return: a selected layer.
/// ////////////////////////////////////////////////////////////////////////////

function selectLayerFromAMid (AMid, selType) {
  var desc01 = new ActionDescriptor()
  var ref01 = new ActionReference()
  ref01.putIdentifier(charIDToTypeID('Lyr '), parseInt(AMid))
  desc01.putReference(charIDToTypeID('null'), ref01)
  desc01.putEnumerated(stringIDToTypeID('selectionModifier'), stringIDToTypeID('selectionModifierType'), stringIDToTypeID(selType))
  desc01.putBoolean(charIDToTypeID('MkVs'), false)
  executeAction(charIDToTypeID('slct'), desc01, DialogModes.NO)
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: layerSetFromSelected
// Usage: the Group from Selected menu command. Create a layerSet from all selected layers.
// Input: the name that you would like to give the new layerset
// Return: a new layerset.
/// ////////////////////////////////////////////////////////////////////////////

function layerSetFromSelected (laySetName) {
  var idmake = stringIDToTypeID('make')
  var desc229 = new ActionDescriptor()
  var idnull = stringIDToTypeID('null')
  var ref170 = new ActionReference()
  var idlayerSection = stringIDToTypeID('layerSection')
  ref170.putClass(idlayerSection)
  desc229.putReference(idnull, ref170)
  var idfrom = stringIDToTypeID('from')
  var ref171 = new ActionReference()
  var idlayer = stringIDToTypeID('layer')
  var idordinal = stringIDToTypeID('ordinal')
  var idtargetEnum = stringIDToTypeID('targetEnum')
  ref171.putEnumerated(idlayer, idordinal, idtargetEnum)
  desc229.putReference(idfrom, ref171)
  var idusing = stringIDToTypeID('using')
  var desc230 = new ActionDescriptor()
  var idname = stringIDToTypeID('name')
  desc230.putString(idname, laySetName)
  var idlayerSection = stringIDToTypeID('layerSection')
  desc229.putObject(idusing, idlayerSection, desc230)
  var idlayerSectionStart = stringIDToTypeID('layerSectionStart')
  desc229.putInteger(idlayerSectionStart, 56)
  var idlayerSectionEnd = stringIDToTypeID('layerSectionEnd')
  desc229.putInteger(idlayerSectionEnd, 57)
  var idname = stringIDToTypeID('name')
  desc229.putString(idname, laySetName)
  executeAction(idmake, desc229, DialogModes.NO)

  // when process is done, need to get the AMid of the active layer because it no longer is the same as the ABamID I started with.
  // alert("original abID =" + AMid + " new group ID = " + getLayerID())
  return getLayerID()
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: makeMaskFromSelection
// Usage: converts active selection to active layer's mask.
// Input: none.
// Return: none
/// ////////////////////////////////////////////////////////////////////////////
function makeMaskFromSelection () {
  var idmake = stringIDToTypeID('make')
  var desc263 = new ActionDescriptor()
  var idnew = stringIDToTypeID('new')
  var idchannel = stringIDToTypeID('channel')
  desc263.putClass(idnew, idchannel)
  var idat = stringIDToTypeID('at')
  var ref197 = new ActionReference()
  var idchannel = stringIDToTypeID('channel')
  var idchannel = stringIDToTypeID('channel')
  var idmask = stringIDToTypeID('mask')
  ref197.putEnumerated(idchannel, idchannel, idmask)
  desc263.putReference(idat, ref197)
  var idusing = stringIDToTypeID('using')
  var iduserMaskEnabled = stringIDToTypeID('userMaskEnabled')
  var idrevealSelection = stringIDToTypeID('revealSelection')
  desc263.putEnumerated(idusing, iduserMaskEnabled, idrevealSelection)
  executeAction(idmake, desc263, DialogModes.NO)
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: cropFromMask
// Usage: takes mask from selected layerset and crops entire document based on the bounds of the mask.
// Input: none
// Return: none
/// ////////////////////////////////////////////////////////////////////////////

function cropFromMask () {
  var idset = stringIDToTypeID('set')
  var desc78 = new ActionDescriptor()
  var idnull = stringIDToTypeID('null')
  var ref40 = new ActionReference()
  var idchannel = stringIDToTypeID('channel')
  var idselection = stringIDToTypeID('selection')
  ref40.putProperty(idchannel, idselection)
  desc78.putReference(idnull, ref40)
  var idto = stringIDToTypeID('to')
  var ref41 = new ActionReference()
  var idchannel = stringIDToTypeID('channel')
  var idordinal = stringIDToTypeID('ordinal')
  var idtargetEnum = stringIDToTypeID('targetEnum')
  ref41.putEnumerated(idchannel, idordinal, idtargetEnum)
  desc78.putReference(idto, ref41)
  executeAction(idset, desc78, DialogModes.NO)

  // =======================================================
  var idcrop = stringIDToTypeID('crop')
  var desc79 = new ActionDescriptor()
  var iddelete = stringIDToTypeID('delete')
  desc79.putBoolean(iddelete, true)
  executeAction(idcrop, desc79, DialogModes.NO)
}

// end FUNCTIONS TO UNARTBOARD. -----------------------------------------------------------------------------------------------------------------

/// ////////////////////////////////////////////////////////////////////////////
// Function: getABLayerInfo
// Usage: use ActionManager to check each layer in document for artboard and extract location and AMID
// Input: none
// Return: obj containing an array of all artboard object data and an array of only the visible artboards' data.
/// ////////////////////////////////////////////////////////////////////////////
function getABLayerInfo () {
  var abObj = {}
  abObj.all = []
  abObj.visible = []

  var ref = new ActionReference()
  ref.putProperty(charIDToTypeID('Prpr'), charIDToTypeID('NmbL'))
  ref.putEnumerated(charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'))
  var count = executeActionGet(ref).getInteger(charIDToTypeID('NmbL')) + 1 // number of total layers in the document including start AND stop of groups. So layersets get counted twice.
  var infoList = []
  try {
    activeDocument.backgroundLayer
    var i = 0
  } catch (e) {
    var i = 1
  }
  abObj.numVisible = 0

  for (var i; i < count; i++) {
    var isABref = new ActionReference()
    isABref.putProperty(charIDToTypeID('Prpr'), stringIDToTypeID('artboardEnabled'))
    isABref.putIndex(charIDToTypeID('Lyr '), i)
    var isABdesc = executeActionGet(isABref)
    var isArtboard = isABdesc.getBoolean(stringIDToTypeID('artboardEnabled'))

    var visref = new ActionReference()
    visref.putProperty(charIDToTypeID('Prpr'), charIDToTypeID('Vsbl'))
    visref.putIndex(charIDToTypeID('Lyr '), i)
    var visdesc = executeActionGet(visref)
    var isVisible = visdesc.getBoolean(charIDToTypeID('Vsbl'))

    if (isArtboard && isVisible) abObj.numVisible++
    if (isArtboard) {
      ABref = new ActionReference()
      ABref.putProperty(charIDToTypeID('Prpr'), stringIDToTypeID('artboard'))
      ABref.putIndex(charIDToTypeID('Lyr '), i)
      var desc = executeActionGet(ABref)

      var artBoardLay = {}
      var ab_actDesc = desc.getObjectValue(stringIDToTypeID('artboard'))
      var abrect_desc = ab_actDesc.getObjectValue(stringIDToTypeID('artboardRect'))
      var abBgColor_desc = ab_actDesc.getObjectValue(charIDToTypeID('Clr '))

      // get bounds of artboard.
      atop = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Top ')))
      aleft = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Left')))
      abottom = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Btom')))
      aright = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Rght')))

      var namref = new ActionReference()
      namref.putProperty(charIDToTypeID('Prpr'), charIDToTypeID('Nm  '))
      namref.putIndex(charIDToTypeID('Lyr '), i)
      var namdesc = executeActionGet(namref)
      artBoardLay.name = namdesc.getString(charIDToTypeID('Nm  '))

      var idref = new ActionReference()
      idref.putProperty(charIDToTypeID('Prpr'), stringIDToTypeID('layerID'))
      idref.putIndex(charIDToTypeID('Lyr '), i)
      var iddesc = executeActionGet(idref)
      artBoardLay.AMid = iddesc.getInteger(stringIDToTypeID('layerID'))

      var itmref = new ActionReference()
      itmref.putProperty(charIDToTypeID('Prpr'), charIDToTypeID('ItmI'))
      itmref.putIndex(charIDToTypeID('Lyr '), i)
      var itmdesc = executeActionGet(itmref)
      artBoardLay.index = itmdesc.getInteger(charIDToTypeID('ItmI'))

      artBoardLay.result = isArtboard
      artBoardLay.top = atop
      artBoardLay.left = aleft
      artBoardLay.bottom = abottom
      artBoardLay.right = aright
      artBoardLay.bounds = [atop, aleft, abottom, aright]
      artBoardLay.visible = isVisible
      artBoardLay.bgType = ab_actDesc.getInteger(stringIDToTypeID('artboardBackgroundType'))
      artBoardLay.bgColor = [
        abBgColor_desc.getDouble(charIDToTypeID('Rd  ')),
        abBgColor_desc.getDouble(charIDToTypeID('Grn ')),
        abBgColor_desc.getDouble(charIDToTypeID('Bl  '))
      ]
      artBoardLay.empty = isArtboardEmpty(i)
      abObj.all.push(artBoardLay)
      if (isVisible) { abObj.visible.push(artBoardLay) }
    }
  }
  return abObj
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: getLayerID
// Usage: Used to get ActionManager layer ID value
// Input: active layer in active document
// Return: the Am ID of the active layer in the active document.
/// ////////////////////////////////////////////////////////////////////////////
function getLayerID () {
  var ref = new ActionReference()
  ref.putProperty(charIDToTypeID('Prpr'), stringIDToTypeID('layerID'))
  ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'))
  var amID = executeActionGet(ref).getInteger(stringIDToTypeID('layerID'))
  return amID
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: getSelectedLayersAMIdx
// Usage: extract a list of index values of all the selected layers.
// Input:: (active document.) s
// Return: array of indexes ID's of selected layers.
/// ////////////////////////////////////////////////////////////////////////////
function getSelectedLayersAMIdx (srcDoc) {
  var selectedLayers = new Array()
  var ref = new ActionReference()
  // get a number list of selected artLayers in the document
  ref.putProperty(app.charIDToTypeID('Prpr'), stringIDToTypeID('targetLayers'))
  ref.putEnumerated(charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'))
  // what do I want to do this this list? Define an description of an action.
  var desc = executeActionGet(ref)
  // if the selected object has the "Target Layers" key (only works CS4+)
  if (desc.hasKey(stringIDToTypeID('targetLayers'))) {
    desc = desc.getList(stringIDToTypeID('targetLayers'))
    var c = desc.count
    var selectedLayers = [] // for each
    for (var i = 0; i < c; i++) {
      try {
        srcDoc.backgroundLayer // try to select a background layer, if I can then adjust the index counting. (Background layers change index counitng of all layers by 1)
        selectedLayers.push(desc.getReference(i).getIndex())
      } catch (e) {
        selectedLayers.push(desc.getReference(i).getIndex() + 1)
      }
    }
  }
  return selectedLayers
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: artboardFromLayers
// Usage: create an artboard out of selected layers
// Input: nameString you would like to name new artboard
// Return: none
/// ////////////////////////////////////////////////////////////////////////////
function artboardFromLayers (abName) {
  var idmake = stringIDToTypeID('make')
  var desc66 = new ActionDescriptor()
  var idnull = stringIDToTypeID('null')
  var ref46 = new ActionReference()
  var idartboardSection = stringIDToTypeID('artboardSection')
  ref46.putClass(idartboardSection)
  desc66.putReference(idnull, ref46)
  var idfrom = stringIDToTypeID('from')
  var ref47 = new ActionReference()
  var idlayer = stringIDToTypeID('layer')
  var idordinal = stringIDToTypeID('ordinal')
  var idtargetEnum = stringIDToTypeID('targetEnum')
  ref47.putEnumerated(idlayer, idordinal, idtargetEnum)
  desc66.putReference(idfrom, ref47)
  var idusing = stringIDToTypeID('using')
  var desc67 = new ActionDescriptor()
  var idname = stringIDToTypeID('name')
  desc67.putString(idname, abName)
  var idartboardSection = stringIDToTypeID('artboardSection')
  desc66.putObject(idusing, idartboardSection, desc67)
  var idlayerSectionStart = stringIDToTypeID('layerSectionStart')
  desc66.putInteger(idlayerSectionStart, 74)
  var idlayerSectionEnd = stringIDToTypeID('layerSectionEnd')
  desc66.putInteger(idlayerSectionEnd, 75)
  var idname = stringIDToTypeID('name')
  desc66.putString(idname, abName)
  executeAction(idmake, desc66, DialogModes.NO)
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: createSolidColorLayer
// Usage: create an new solid color layer. (underneath the current selected layer)
// Input: RGB values of new color for solid layer.
// Return: none
/// ////////////////////////////////////////////////////////////////////////////
function createSolidColorLayer (Red, Green, Blue) {
  var idmake = stringIDToTypeID('make')
  var desc44 = new ActionDescriptor()
  var idnull = stringIDToTypeID('null')
  var ref28 = new ActionReference()
  var idcontentLayer = stringIDToTypeID('contentLayer')
  ref28.putClass(idcontentLayer)
  desc44.putReference(idnull, ref28)
  var idusing = stringIDToTypeID('using')
  var desc45 = new ActionDescriptor()
  var idtype = stringIDToTypeID('type')
  var desc46 = new ActionDescriptor()
  var idcolor = stringIDToTypeID('color')
  var desc47 = new ActionDescriptor()
  var idred = stringIDToTypeID('red')
  desc47.putDouble(idred, Red)
  var idgrain = stringIDToTypeID('grain')
  desc47.putDouble(idgrain, Green)
  var idblue = stringIDToTypeID('blue')
  desc47.putDouble(idblue, Blue)
  var idRGBColor = stringIDToTypeID('RGBColor')
  desc46.putObject(idcolor, idRGBColor, desc47)
  var idsolidColorLayer = stringIDToTypeID('solidColorLayer')
  desc45.putObject(idtype, idsolidColorLayer, desc46)
  var idcontentLayer = stringIDToTypeID('contentLayer')
  desc44.putObject(idusing, idcontentLayer, desc45)
  executeAction(idmake, desc44, DialogModes.NO)
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: setEnabled
// Usage: To disable or enable scriptable optoins for artboards
// Input: a parameter to toggle: "autoExpandEnabled", "autoNestEnabled", "autoPositionEnabled" and toggle boolean.
// Return: none.
/// ////////////////////////////////////////////////////////////////////////////
function setEnabled (feature, bool) {
  // input "autoExpandEnabled", "autoNestEnabled", "autoPositionEnabled"
  var ref = new ActionReference()
  var desc = new ActionDescriptor()
  ref.putEnumerated(stringIDToTypeID('layer'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'))
  desc.putReference(stringIDToTypeID('null'), ref)
  desc.putBoolean(stringIDToTypeID(feature), bool)
  executeAction(stringIDToTypeID('editArtboardEvent'), desc, DialogModes.NO)
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: artboardDuplToNewDoc
// Usage: selected artboard gets duplicated to new document
// Input: selected artboard.
// Return: none
/// ////////////////////////////////////////////////////////////////////////////
function artboardDuplToNewDoc (docName) {
  var idmake = stringIDToTypeID('make')
  var desc782 = new ActionDescriptor()
  var idnull = stringIDToTypeID('null')
  var ref410 = new ActionReference()
  var iddocument = stringIDToTypeID('document')
  ref410.putClass(iddocument)
  desc782.putReference(idnull, ref410)
  var idname = stringIDToTypeID('name')
  desc782.putString(idname, docName)
  var idusing = stringIDToTypeID('using')
  var ref411 = new ActionReference()
  var idlayer = stringIDToTypeID('layer')
  var idordinal = stringIDToTypeID('ordinal')
  var idtargetEnum = stringIDToTypeID('targetEnum')
  ref411.putEnumerated(idlayer, idordinal, idtargetEnum)
  desc782.putReference(idusing, ref411)
  var idversion = stringIDToTypeID('version')
  desc782.putInteger(idversion, 5)
  executeAction(idmake, desc782, DialogModes.NO)
}

// START - functions to remove empty layers.
/// ////////////////////////////////////////////////////////////////////////////
// Function: removeEmpty Layers
// Usage: after a crop, I get new data array of Bounds and ID's for artboards and if bounds of the layer is 0, then I know its empty, so delete.by ID (does not work on vector layers)
// Input: inDocument
// Return: none.
/// ////////////////////////////////////////////////////////////////////////////
function removeEmptyLayers (srcDoc) {
  var getInfo = getLayerInfo(srcDoc)
  for (i = 0; i < getInfo.length; i++) {
    var addBounds = (getInfo[i].bounds[0] + getInfo[i].bounds[1] + getInfo[i].bounds[2] + getInfo[i].bounds[3])
    if (addBounds === 0) {
      deleteByID(getInfo[i].id)
    }
  }
}

function getLayerInfo (srcDoc) {
  var ref = new ActionReference()
  ref.putEnumerated(charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'))
  var count = executeActionGet(ref).getInteger(charIDToTypeID('NmbL')) + 1 // number of total layers in the document including start AND stop of groups. So layersets get counted twice.
  var infoList = []
  try { srcDoc.backgroundLayer; var i = 0 } catch (e) { var i = 1 }

  for (i; i < count; i++) {
    var newLay = {}
    ref = new ActionReference()
    ref.putIndex(charIDToTypeID('Lyr '), i)
    var desc = executeActionGet(ref)
    // this gets the layer name
    var layerName = desc.getString(charIDToTypeID('Nm  '))
    if (layerName.match(/^<\/Layer group/)) { continue } // removes "/Layer Groups" from the listed output. (like if ID = "/Layer Group" then skip)
    // All kinds of other stuff you can get from a layer.
    newLay.id = desc.getInteger(stringIDToTypeID('layerID'))
    var getbounds = desc.getObjectValue(stringIDToTypeID('bounds'))
    buildBounds = []
    for (var b = 0; b < 4; b++) {
      buildBounds.push(parseInt(getbounds.getUnitDoubleValue(getbounds.getKey(b))))
    }
    newLay.bounds = buildBounds
    infoList.push(newLay)
  }
  return infoList
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: deleteByID
// Usage: delete the layer with the supplied action ID
// Input: ActionManagerID of a layer I wish to delete
// Return: none (deleted layers)
/// ////////////////////////////////////////////////////////////////////////////
function deleteByID (ID) {
  var ref = new ActionReference()
  ref.putIdentifier(charIDToTypeID('Lyr '), ID)
  var desc = new ActionDescriptor()
  desc.putReference(charIDToTypeID('null'), ref)

  desc.putBoolean(charIDToTypeID('MkVs'), false)
  try {
    executeAction(stringIDToTypeID('delete'), desc, DialogModes.NO)
  } catch (e) {}
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: getArtBoards
// Usage: verify that supplied layers (identified by AMid) are artboards.
// Input: array of AM idicies.
// Return: Return list of AMid of actual artboards. (removing any layers that are not artboards and artboards that are hidden)
/// ////////////////////////////////////////////////////////////////////////////
function getArtBoards (inArray) {
  var infoList = []

  for (var i = 0; i < inArray.length; i++) {
    var obj = {}
    ref = new ActionReference()
    ref.putIndex(charIDToTypeID('Lyr '), inArray[i])
    var desc = executeActionGet(ref)
    var Id = desc.getInteger(stringIDToTypeID('layerID'))
    var name = desc.getString(charIDToTypeID('Nm  '))
    var isArtboard = desc.getBoolean(stringIDToTypeID('artboardEnabled'))
    var isVisible = desc.getBoolean(charIDToTypeID('Vsbl'))
    if (isArtboard && isVisible) {
      obj.name = name
      obj.AMid = Id
      obj.visible = isVisible
      var ab_actDesc = desc.getObjectValue(stringIDToTypeID('artboard'))
      obj.bgType = ab_actDesc.getInteger(stringIDToTypeID('artboardBackgroundType'))
      var abBgColor_desc = ab_actDesc.getObjectValue(charIDToTypeID('Clr '))
      obj.bgColor = [
        abBgColor_desc.getDouble(charIDToTypeID('Rd  ')),
        abBgColor_desc.getDouble(charIDToTypeID('Grn ')),
        abBgColor_desc.getDouble(charIDToTypeID('Bl  '))
      ]
      obj.empty = isArtboardEmpty(inArray[i])
      infoList.push(obj)
    }
  }
  return infoList
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: isArtboardEmpty
// Usage: Detect whether given artboard is empty.
// Input: index of artboard
// Return: boolean
/// ////////////////////////////////////////////////////////////////////////////
function isArtboardEmpty (index) {
  var ref = new ActionReference()
  ref.putProperty(charIDToTypeID('Prpr'), stringIDToTypeID('layerSection'))
  ref.putIndex(charIDToTypeID('Lyr '), index - 1)
  var desc = executeActionGet(ref)
  var sectionEnum = desc.getEnumerationValue(stringIDToTypeID('layerSection'))
  return stringIDToTypeID('layerSectionEnd') == sectionEnum
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: cleanUnseenAB
// Usage: Detects overlapping artboards based on the bounds of the supplied artboard (via AMid) and removes all those that are NOT overlapping.
// Also removes hidden artboards.
// Also removes artboards with no layers and a transparent background or background set to not export
// Input: id of layer of interest, array of layer info identified by AMid
// Return: none
/// ////////////////////////////////////////////////////////////////////////////
function cleanUnseenAB (inAMid, abArALL, exportBg) {
  var overlapLayInfo = getIntersectingLayers(inAMid, abArALL, true, exportBg) // true means to invert the function and create array of NOT overlapping artboards.
  for (var x = 0; x < overlapLayInfo.length; x++) {
    deleteByID(overlapLayInfo[x].AMid)
  }
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: getIntersectingLayers
// Usage: using square bounds, trim layer selection to layers that intersect with bounds -- also trimming artboards that are not visible or empty with transparent or non-exporting backgrounds
// Input: LayerID whose bounds you want to get overlapping data from, an array of all artboard data in document, Boolean if you want to invert results.
// Return: array of layer data objects corresponding to selected layers that are not visible from within artboard of interest
/// ////////////////////////////////////////////////////////////////////////////
function getIntersectingLayers (inLayAMid, abArALL, invert, exportBg) {
  for (var i = 0; i < abArALL.length; i++) { // get the bounds of the layer of interest
    if (abArALL[i].AMid == inLayAMid) var pos = abArALL[i].bounds
  }
  var interLayers = []
  var noninterLayers = []
  for (var i = 0; i < abArALL.length; i++) {
    if (abArALL[i].AMid == inLayAMid) { continue } // skip the layer of interest
    if (!abArALL[i].visible || (abArALL[i].empty && (abArALL[i].bgType == 3 || !exportBg))) { // not visible or empty with transparent or non-exporting backgrounds
      noninterLayers.push(abArALL[i])
      { continue }
    }
    var horiz = false
    var vert = false
    var boundsInfo = (abArALL[i].bounds)
    var layName = (abArALL[i].name)
    // if (layName == curLay) {continue}
    if (boundsInfo[3] >= pos[1]) {
      if (boundsInfo[1] <= pos[3]) {
        var horiz = true
      }
    }
    if (boundsInfo[2] >= pos[0]) {
      if (boundsInfo[0] <= pos[2]) {
        var vert = true
      }
    }

    if (!invert) { if ((vert) && (horiz)) interLayers.push(abArALL[i]) } // to get all layers that DO overlap
    if (invert) {
      selectLayerFromAMid(inLayAMid, 'removeFromSelection') // deselect the one you started with.
      if ((!vert) || (!horiz)) noninterLayers.push(abArALL[i]) // to get all layers that DONOT overlap
    }
  }
  return invert ? noninterLayers : interLayers
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: countABNames
// Usage: Count the artboard names collecting duplicates
// Input: array of artboards
// Return: object with names as keys and counts as values
/// ////////////////////////////////////////////////////////////////////////////
function countABNames (list) {
  var obj = {}
  for (var i = 0; i < list.length; i++) {
    var name = list[i].name.toLowerCase()
    if (name in obj) { obj[name].total += 1 } else { obj[name] = {total: 1, nameIndex: 1} }
  }
  return obj
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: addNameLayer
// Usage: Add a text layer with the given string
// Input: text string, font name and style string, size in pts, color array, color of frame : e.g. 'Artboard 1', 'MyriadPro-Regular', 24, [0,0,0], [0,0,0]
// Return: the resulting text layer
/// ////////////////////////////////////////////////////////////////////////////
function addNameLayer (name, font, size, color, frameColor) { // artboard, string, # pt, int, array, array
  var doc = activeDocument
  var posX, posY, alignId
  var nameLayer = doc.artLayers.add()
  nameLayer.kind = LayerKind.TEXT
  nameLayer.textItem.contents = name
  nameLayer.textItem.size = new UnitValue(size, 'pt')
  nameLayer.textItem.font = font
  var solidColor = new SolidColor()
  solidColor.rgb.red = color[0]
  solidColor.rgb.green = color[1]
  solidColor.rgb.blue = color[2]
  nameLayer.textItem.color = solidColor

  var widthRatio = doc.width / (nameLayer.bounds[2] - nameLayer.bounds[0])
  if (widthRatio < 1) { // before adding frame
    nameLayer.resize(widthRatio * 100, widthRatio * 100)
  }
  var frameWidth = addFrameForArtboardName(nameLayer.bounds[3] - nameLayer.bounds[1], frameColor)
  nameLayer.move(doc.layers[0], ElementPlacement.PLACEBEFORE)
  var w = doc.width // after adding frame
  var h = doc.height
  var leftIndent = frameWidth
  var rightIndent = w - frameWidth
  var topIndent = frameWidth / 2
  var bottomIndent = h - frameWidth / 2
  posX = leftIndent
  alignId = 'Left'
  posY = topIndent
  var bnds = nameLayer.bounds
  var textHeight = bnds[3] - bnds[1]
  var textWidth = bnds[2] - bnds[0]
  var textLayerYCenter = (bnds[1] + bnds[3]) / 2
  var deltaX = posX - bnds[0].value // adjust for bounds
  var deltaY = posY - textLayerYCenter.value // adjust for bounds
  nameLayer.translate(deltaX, deltaY) // adjust for bounds
  return nameLayer
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: addFrameForArtboardName
// Usage: Increase canvas size of document to create a frame for artboard name
// Input: height of name layer, color array
// Return: width of frame around document
/// ////////////////////////////////////////////////////////////////////////////
function addFrameForArtboardName (nameHeight, colorArray) {
  var width = activeDocument.width
  var height = activeDocument.height
  var frame = Math.round((width + height) / 10) // formula based on pdf presentation
  if (nameHeight > (frame / 2.1)) { frame = nameHeight * 2.2 }
  var frameWidth = Math.round(frame / 2)
  frame = frameWidth * 2
  var frameLayer = app.activeDocument.artLayers.add()
  activeDocument.selection.selectAll() // correct
  var selBounds = activeDocument.selection.bounds
  var frameBounds = [
    [selBounds[0] + frameWidth, selBounds[1] + frameWidth],
    [selBounds[2] + frameWidth, selBounds[1] + frameWidth],
    [selBounds[2] + frameWidth, selBounds[3] + frameWidth],
    [selBounds[0] + frameWidth, selBounds[3] + frameWidth]
  ]
  frameLayer.name = 'Frame for Artboard Name'
  var fillColor = new SolidColor()
  fillColor.rgb.red = colorArray[0]
  fillColor.rgb.green = colorArray[1]
  fillColor.rgb.blue = colorArray[2]

  activeDocument.resizeCanvas(width + frame, height + frame, AnchorPosition.MIDDLECENTER)
  activeDocument.selection.select(frameBounds)
  activeDocument.selection.invert()
  activeDocument.selection.fill(fillColor)
  activeDocument.selection.deselect()

  return frameWidth
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: getArtboardBackgroundType
// Usage: Get the type index used for the background: 1=white, 2=black, 3=transparent, 4=custom color
// Input: none
// Return: int
/// ////////////////////////////////////////////////////////////////////////////
function getArtboardBackgroundType () {
  var ref = new ActionReference()
  ref.putProperty(charIDToTypeID('Prpr'), stringIDToTypeID('artboard'))
  ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'))
  var ad = executeActionGet(ref)
  var ab = ad.getObjectValue(stringIDToTypeID('artboard'))
  return ab.getInteger(stringIDToTypeID('artboardBackgroundType'))
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: makeBackground
// Usage: Create a layer with input color
// Input: red, blue and green values 255-0, artboard name string
// Return: none
/// ////////////////////////////////////////////////////////////////////////////
function makeBackground (red, green, blue, name, parent) {
  var parent = activeDocument.activeLayer
  createSolidColorLayer(red, green, blue)
  deleteMask()
  var bgLayer = activeDocument.activeLayer
  bgLayer.move(parent, ElementPlacement.PLACEATEND)
  bgLayer.name = name + ' Background'
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: deleteMask
// Usage: Delete the current layer's mask
// Input: none
// Return: none
/// ////////////////////////////////////////////////////////////////////////////
function deleteMask () {
  var idDlt = charIDToTypeID('Dlt ')
  var dltDesc = new ActionDescriptor()
  var idnull = charIDToTypeID('null')
  var chnlRef = new ActionReference()
  var idChnl = charIDToTypeID('Chnl')
  var idChnl = charIDToTypeID('Chnl')
  var idMsk = charIDToTypeID('Msk ')
  chnlRef.putEnumerated(idChnl, idChnl, idMsk)
  dltDesc.putReference(idnull, chnlRef)
  executeAction(idDlt, dltDesc, DialogModes.NO)
}

/// ////////////////////////////////////////////////////////////////////////////
// Function: setArtboardBackground
// Usage: Set the artboard's background type and color (if applicable)
// Input: int, array of float
// Return: none
/// ////////////////////////////////////////////////////////////////////////////
function setArtboardBackground (typeIndex, colorArray) {
  var editDesc = new ActionDescriptor()
  var ref1 = new ActionReference()
  ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'))
  editDesc.putReference(charIDToTypeID('null'), ref1)
  var abDesc = new ActionDescriptor()
  var colorDesc = new ActionDescriptor()
  colorDesc.putDouble(charIDToTypeID('Rd  '), colorArray[0])
  colorDesc.putDouble(charIDToTypeID('Grn '), colorArray[1])
  colorDesc.putDouble(charIDToTypeID('Bl  '), colorArray[2])
  abDesc.putObject(charIDToTypeID('Clr '), charIDToTypeID('RGBC'), colorDesc)
  abDesc.putInteger(stringIDToTypeID('artboardBackgroundType'), typeIndex)
  editDesc.putObject(stringIDToTypeID('artboard'), stringIDToTypeID('artboard'), abDesc)
  editDesc.putBoolean(stringIDToTypeID('changeBackground'), true)
  executeAction(stringIDToTypeID('editArtboardEvent'), editDesc, DialogModes.NO)
}
