Application = function() {
    this.rulerUnits = null;
    this.typeUnits = null;

    function init() {
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("PbkO"));
        ref.putEnumerated(charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        desc.putReference(charIDToTypeID("null"), ref);
        var pdesc = new ActionDescriptor();
        pdesc.putEnumerated(stringIDToTypeID("performance"), stringIDToTypeID("performance"), stringIDToTypeID("accelerated"));
        desc.putObject(charIDToTypeID("T   "), charIDToTypeID("PbkO"), pdesc);
        executeAction(charIDToTypeID("setd"), desc, DialogModes.NO);
    }
    init();
};
Application.prototype.togglePanel = function(name, visible) {
    try {
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putName(stringIDToTypeID("classPanel"), name);
        desc.putReference(charIDToTypeID("null"), ref);
        executeAction(stringIDToTypeID(visible ? "show" : "hide"), desc, DialogModes.NO);
    } catch (ex) {
        console_error($.fileName, $.line, ex);
    }
};
Application.prototype.getActiveDocument = function() {
    return new Document(this, this.getDocumentID());
};
Application.prototype.hasActiveDocument = function() {
    return this.getDocumentID() != -1 ? true : false;
};
Application.prototype.getDocumentID = function() {
    try {
        var documentReference = new ActionReference();
        documentReference.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("DocI"));
        documentReference.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        var documentDescriptor = executeActionGet(documentReference);
        return documentDescriptor.getInteger(charIDToTypeID("DocI"));
    } catch (e) {
        return -1;
    }
};
Application.prototype.seDocumentActive = function(document) {
    var documentDescriptor = new ActionDescriptor();
    var documentReference = new ActionReference();
    documentReference.putIdentifier(typeID("Dcmn"), document.id);
    documentDescriptor.putReference(typeID("null"), documentReference);
    executeAction(typeID("slct"), documentDescriptor, DialogModes.NO);
};
Application.prototype.getRulerUnits = function() {
    return app.preferences.rulerUnits;
};
Application.prototype.setRulerUnits = function(rulerUnits) {
    app.preferences.rulerUnits = rulerUnits;
};
Application.prototype.getTypeUnits = function() {
    return app.preferences.typeUnits;
};
Application.prototype.setTypeUnits = function(typeUnits) {
    app.preferences.typeUnits = typeUnits;
};
Application.prototype.loadFileAsSmartObject = function(filename) {
    var b = new ActionDescriptor();
    b.putPath(app.charIDToTypeID("null"), new File(filename));
    b.putEnumerated(app.charIDToTypeID("FTcs"), app.charIDToTypeID("QCSt"), app.stringIDToTypeID("QCSAverage"));
    var c = new ActionDescriptor();
    c.putUnitDouble(app.charIDToTypeID("Hrzn"), app.charIDToTypeID("#Pxl"), 0);
    c.putUnitDouble(app.charIDToTypeID("Vrtc"), app.charIDToTypeID("#Pxl"), 0);
    b.putObject(app.charIDToTypeID("Ofst"), app.charIDToTypeID("Ofst"), c);
    app.executeAction(app.charIDToTypeID("Plc "), b, DialogModes.NO);
};
Application.prototype.saveInstance = function() {
    this.rulerUnits = this.getRulerUnits();
    this.typeUnits = this.getTypeUnits();
    this.setRulerUnits(Units.PIXELS);
    this.setTypeUnits(TypeUnits.PIXELS);
};
Application.prototype.restoreInstance = function() {
    this.setRulerUnits(this.rulerUnits);
    this.setTypeUnits(this.typeUnits);
};
Application.prototype.isMac = function() {
    return Folder.fs.toLowerCase().indexOf("mac") > -1;
};
Application.prototype.isWin = function() {
    return Folder.fs.toLowerCase().indexOf("win") > -1;
};
Application.prototype.isCC2015 = function() {
    var v = parseFloat(app.version);
    return v >= 16;
};
Application.prototype.isCC2014 = function() {
    var v = parseFloat(app.version);
    return v < 16 && v >= 15;
};
Application.deleteDir = function(path) {
    var folder = new Folder(path);
    if (folder.exists) {

    }
};