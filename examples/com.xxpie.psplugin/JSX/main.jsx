function openFile(filePath) {
    try{
        var fileRef = new File(encodeURI(filePath))
        var docRef = app.open(fileRef)
        return null;
    }catch(e){
        alert(e);
        throw e;
    }
}

function openFiles(filePaths){
    try{
        var pathArray = filePaths.split(',');
        for(var i = 0; i < pathArray.length - 1; i++){
            var fileRef = new File(encodeURI(pathArray[i]))
            var docRef = app.open(fileRef) 
            if(i == pathArray.length - 2){
                return null;
            }
        }
    }catch(e){
        alert(e);
        throw e;
    }
}

function saveFile(filePath, filename) {
    var jpgFile = new File(encodeURI(filePath))
    var jpgSaveOpt = new JPEGSaveOptions()
    jpgSaveOpt.embedColorProfile = true
    jpgSaveOpt.formatOptions = FormatOptions.STANDARDBASELINE
    jpgSaveOpt.matte = MatteType.NONE
    jpgSaveOpt.quality = 11
    for (var i = 0; i < app.documents.length; i++) {
        if (app.documents[i].name == filename) {
            app.documents[i].saveAs(jpgFile, jpgSaveOpt, true, Extension.LOWERCASE)
            return
        }
    }
}

function closeFile(fileName) {
    for (var i = 0; i < app.documents.length; i++) {
        if (app.documents[i].name == fileName) {
            app.documents[i].close(SaveOptions.DONOTSAVECHANGES)
            return
        }
    }
}

function active(fileName) {
    for (var i = 0; i < app.documents.length; i++) {
        if (app.documents[i].name == fileName) {
            app.activeDocument = app.documents[i]
            return
        }
    }
}