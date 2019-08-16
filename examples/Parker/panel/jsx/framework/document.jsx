Document = function(application, id) {
    this.id = id;
    this.App = application;
    this.size = null;
    this.rootGroupName = "@parker";
    this.artboardList = [];
};
Document.prototype.getProperty = function(name) {
    var documentReference = new ActionReference();
    documentReference.putProperty(charIDToTypeID("Prpr"), charIDToTypeID(name));
    documentReference.putIdentifier(charIDToTypeID("Dcmn"), this.id);
    var documentDescriptor = executeActionGet(documentReference);
    return documentDescriptor.getInteger(charIDToTypeID(name));
};
Document.prototype.getName = function() {
    var documentReference = new ActionReference();
    documentReference.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("Ttl "));
    documentReference.putIdentifier(charIDToTypeID("Dcmn"), this.id);
    var documentDescriptor = executeActionGet(documentReference);
    return documentDescriptor.getString(charIDToTypeID("Ttl "));
};
Document.prototype.getResolution = function() {
    return this.getProperty("Rslt");
};
Document.prototype.setResolution = function(resolution) {
    var desc122 = new ActionDescriptor();
    desc122.putUnitDouble(charIDToTypeID("Rslt"), charIDToTypeID("#Rsl"), resolution);
    executeAction(charIDToTypeID("ImgS"), desc122, DialogModes.NO);
};
Document.prototype.getSize = function() {
    var docRef = app.activeDocument;
    this.size = new Size(docRef.width.value, docRef.height.value);
    return this.size;
};
Document.prototype.hasArtboard = function() {
    return this.App.isCC2015() && this.artboardList.length > 0;
};
Document.prototype.getArtboardList = function() {
    if (!this.App.isCC2015()) {
        return;
    }
    var current = this.App.getDocumentID();
    this.artboardList.length = 0;
    this.id = current;
    try {
        var ab = [];
        var abCount = 0;
        var theRef = new ActionReference();
        theRef.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("artboards"));
        theRef.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        var getDescriptor = new ActionDescriptor();
        getDescriptor.putReference(stringIDToTypeID("null"), theRef);
        var abDesc = executeAction(charIDToTypeID("getd"), getDescriptor, DialogModes.NO).getObjectValue(stringIDToTypeID("artboards"));
        abCount = abDesc.getList(stringIDToTypeID("list")).count;
        if (abCount > 0) {
            for (var i = 0; i < abCount; i += 1) {
                var abObj = abDesc.getList(stringIDToTypeID("list")).getObjectValue(i);
                var abTopIndex = abObj.getInteger(stringIDToTypeID("top"));
                ab.push(abTopIndex);
            }
        }
        for (var i = 0; i < abCount; i += 1) {
            var ref = new ActionReference();
            ref.putIndex(charIDToTypeID("Lyr "), ab[i] + 1);
            var layerDesc = executeActionGet(ref);
            if (layerDesc.getBoolean(stringIDToTypeID("artboardEnabled")) == true) {
                var artBoardRect = layerDesc.getObjectValue(stringIDToTypeID("artboard")).getObjectValue(stringIDToTypeID("artboardRect"));
                var theName = layerDesc.getString(stringIDToTypeID("name"));
                var theID = layerDesc.getInteger(stringIDToTypeID("layerID"));
                var left = artBoardRect.getUnitDoubleValue(stringIDToTypeID("left"));
                var top = artBoardRect.getUnitDoubleValue(stringIDToTypeID("top"));
                var right = artBoardRect.getUnitDoubleValue(stringIDToTypeID("right"));
                var bottom = artBoardRect.getUnitDoubleValue(stringIDToTypeID("bottom"));
                var layerReference = new ActionReference();
                layerReference.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("ItmI"));
                layerReference.putIdentifier(charIDToTypeID("Lyr "), theID);
                var descriptor = executeActionGet(layerReference);
                var index = descriptor.getInteger(charIDToTypeID("ItmI"));
                this.artboardList.push({
                    name: theName,
                    id: theID,
                    index: index,
                    rect: new Rect(left, top, right - left, bottom - top)
                });
            }
        }
    } catch (ex) {
        console_error($.fileName, $.line, ex);
    }
};
Document.prototype.resize = function(width) {
    var action = new ActionDescriptor();
    action.putUnitDouble(app.charIDToTypeID("Wdth"), app.charIDToTypeID("#Pxl"), width);
    action.putBoolean(app.stringIDToTypeID("scaleStyles"), true);
    action.putBoolean(app.charIDToTypeID("CnsP"), true);
    action.putEnumerated(app.charIDToTypeID("Intr"), app.charIDToTypeID("Intp"), app.charIDToTypeID("Blnr"));
    app.executeAction(app.charIDToTypeID("ImgS"), action, DialogModes.NO);
};
Document.prototype.duplicate = function() {
    var documentDescriptor = new ActionDescriptor();
    var documentReference = new ActionReference();
    documentReference.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Frst"));
    documentDescriptor.putReference(charIDToTypeID("null"), documentReference);
    executeAction(charIDToTypeID("Dplc"), documentDescriptor, DialogModes.NO);
};
Document.prototype.getGlobalLight = function() {
    var ref = new ActionReference();
    ref.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("globalAngle"));
    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    var descriptor = executeActionGet(ref);
    return descriptor.getInteger(stringIDToTypeID("globalAngle"));
};
Document.prototype.selectFrontLayer = function() {
    var layerDescriptor = new ActionDescriptor();
    var layerReference = new ActionReference();
    layerReference.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Frnt"));
    layerDescriptor.putReference(charIDToTypeID("null"), layerReference);
    layerDescriptor.putBoolean(charIDToTypeID("MkVs"), false);
    executeAction(charIDToTypeID("slct"), layerDescriptor, DialogModes.NO);
};
Document.prototype.selectLayerByName = function(name) {
    var desc8 = new ActionDescriptor();
    var ref5 = new ActionReference();
    ref5.putName(charIDToTypeID("Lyr "), name);
    desc8.putReference(charIDToTypeID("null"), ref5);
    desc8.putBoolean(charIDToTypeID("MkVs"), false);
    executeAction(charIDToTypeID("slct"), desc8, DialogModes.NO);
};
Document.prototype.getSelectedLayers = function() {
    var selectedLayers = [];
    try {
        var targetLayersTypeId = stringIDToTypeID("targetLayers");
        var selectedLayersReference = new ActionReference();
        selectedLayersReference.putProperty(charIDToTypeID("Prpr"), targetLayersTypeId);
        selectedLayersReference.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        var descriptor = executeActionGet(selectedLayersReference);
        if (descriptor.hasKey(targetLayersTypeId) == false) {
            selectedLayersReference = new ActionReference();
            selectedLayersReference.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("LyrI"));
            selectedLayersReference.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
            descriptor = executeActionGet(selectedLayersReference);
            var id = descriptor.getInteger(charIDToTypeID("LyrI"));
            if (Layer.isVisible(id)) {
                selectedLayers.push(new Layer(id))
            }
        } else {
            var hasBackground = this.hasBackgroundLayer() ? 0 : 1;
            var list = descriptor.getList(targetLayersTypeId);
            for (var i = 0; i < list.count; i += 1) {
                var selectedLayerIndex = list.getReference(i).getIndex() + hasBackground;
                var selectedLayersReference = new ActionReference();
                selectedLayersReference.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("LyrI"));
                selectedLayersReference.putIndex(charIDToTypeID("Lyr "), selectedLayerIndex);
                descriptor = executeActionGet(selectedLayersReference);
                var id = descriptor.getInteger(charIDToTypeID("LyrI"));
                if (Layer.isVisible(id)) {
                    selectedLayers.push(new Layer(id))
                }
            }
        }
    } catch (ex) {
        console_error($.fileName, $.line, ex);
    }
    return selectedLayers;
};
Document.prototype.setSelectedLayers = function(layers) {
    if (layers.constructor != Array) {
        layers = [layers]
    }
    if (layers.length == 0) {
        return;
    }
    var current = new ActionReference();
    for (var i = 0; i < layers.length; i += 1) {
        current.putIdentifier(charIDToTypeID("Lyr "), layers[i].id);
    }
    var desc = new ActionDescriptor();
    desc.putReference(charIDToTypeID("null"), current);
    executeAction(charIDToTypeID("slct"), desc, DialogModes.NO);
};
Document.prototype.hideLayer = function(selectedLayers) {
    if (selectedLayers.constructor === Number) {
        selectedLayers = [selectedLayers]
    }
    var current = new ActionReference();
    for (var i = 0; i < selectedLayers.length; i += 1) {
        current.putIdentifier(charIDToTypeID("Lyr "), selectedLayers[i])
    }
    var idHd = charIDToTypeID("Hd  ");
    var desc242 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var list10 = new ActionList();
    list10.putReference(current);
    desc242.putList(idnull, list10);
    executeAction(idHd, desc242, DialogModes.NO);
};
Document.prototype.deleteLayerContent = function() {
    var idDlt = charIDToTypeID("Dlt ");
    executeAction(idDlt, undefined, DialogModes.NO);
};
Document.prototype.getSelection = function() {
    try {
        var selection = activeDocument.selection.bounds;
        return new Rect(selection[0].value, selection[1].value, selection[2].value - selection[0].value, selection[3].value - selection[1].value);
    } catch (ex) {
        return null;
    }
};
Document.prototype.setSelection = function(bounds) {
    var size = this.getSize();
    var documentBounds = new Rect(0, 0, size.width, size.height);
    var bounds = documentBounds.intersect(bounds);
    if (bounds == null) {
        return null;
    }
    var selectionMode = charIDToTypeID("setd");
    var selectionDescriptor = new ActionDescriptor();
    var selectionReference = new ActionReference();
    selectionReference.putProperty(charIDToTypeID("Chnl"), charIDToTypeID("fsel"));
    selectionDescriptor.putReference(charIDToTypeID("null"), selectionReference);
    selectionDescriptor.putObject(charIDToTypeID("T   "), charIDToTypeID("Rctn"), bounds.toDescriptor());
    executeAction(selectionMode, selectionDescriptor, DialogModes.NO);
    return bounds;
};
Document.prototype.deselectSelection = function() {
    var selectionDescriptor = new ActionDescriptor();
    var selectionReference = new ActionReference();
    selectionReference.putProperty(charIDToTypeID("Chnl"), charIDToTypeID("fsel"));
    selectionDescriptor.putReference(charIDToTypeID("null"), selectionReference);
    selectionDescriptor.putEnumerated(charIDToTypeID("T   "), charIDToTypeID("Ordn"), charIDToTypeID("None"));
    executeAction(charIDToTypeID("setd"), selectionDescriptor, DialogModes.NO);
};
Document.prototype.snapToPixelGridEnabled = function() {
    var ref = new ActionReference();
    ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("GnrP"));
    ref.putEnumerated(charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    var desc = executeActionGet(ref);
    var gnrp = desc.getObjectValue(charIDToTypeID("GnrP"));
    return gnrp.getBoolean(stringIDToTypeID("transformsSnapToPixels"));
};
Document.prototype.getColorSamplers = function() {
    var result = [];
    var cs = activeDocument.colorSamplers;
    if (cs.length > 0) {
        for (var i = 0; i < cs.length; i += 1) {
            var colorSampler = new ColorSampler();
            colorSampler.color = cs[i] == null ? new Color(0, 0, 0) : new Color(cs[i].color.rgb.red, cs[i].color.rgb.green, cs[i].color.rgb.blue);
            colorSampler.position = new Point(cs[i].position[0], cs[i].position[1]);
            result.push(colorSampler);
        }
    }
    return result;
};
Document.prototype.removeColorSamplers = function() {
    var idDlt = charIDToTypeID("Dlt ");
    var desc30 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref19 = new ActionReference();
    var idClSm = charIDToTypeID("ClSm");
    var idOrdn = charIDToTypeID("Ordn");
    var idAl = charIDToTypeID("Al  ");
    ref19.putEnumerated(idClSm, idOrdn, idAl);
    desc30.putReference(idnull, ref19);
    executeAction(idDlt, desc30, DialogModes.NO);
};
Document.prototype.hasBackgroundLayer = function() {
    var backgroundReference = new ActionReference();
    backgroundReference.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("Bckg"));
    backgroundReference.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Back"));
    var backgroundDescriptor = executeActionGet(backgroundReference);
    var hasBackground = backgroundDescriptor.getBoolean(charIDToTypeID("Bckg"));
    if (hasBackground == false) {
        try {
            var layerReference = new ActionReference();
            layerReference.putIndex(charIDToTypeID("Lyr "), 0);
            var zero = executeActionGet(layerReference);
            hasBackground = true;
        } catch (ex) {

        }
    }
    return hasBackground;
};
Document.prototype.toSelection = function() {
    var desc3 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(charIDToTypeID("Chnl"), charIDToTypeID("fsel"));
    desc3.putReference(charIDToTypeID("null"), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(charIDToTypeID("Path"), charIDToTypeID("Path"), stringIDToTypeID("vectorMask"));
    ref2.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    desc3.putReference(charIDToTypeID("T   "), ref2);
    desc3.putInteger(charIDToTypeID("Vrsn"), 1);
    desc3.putBoolean(stringIDToTypeID("vectorMaskParams"), true);
    executeAction(charIDToTypeID("setd"), desc3, DialogModes.NO);
};
Document.prototype.inverseSelection = function() {
    var idInvs = charIDToTypeID("Invs");
    executeAction(idInvs, undefined, DialogModes.NO);
};
Document.prototype.getRootGroup = function(layer) {
    var root = null;
    var parent = activeDocument;
    if (this.hasArtboard() && layer != undefined) {
        var ab = this.getArtboardByLayer(layer);
        if (ab != null) {
            this.setSelectedLayers(ab);
            parent = activeDocument.activeLayer;
        }
    }
    try {
        root = parent.layerSets.getByName(this.rootGroupName);
    } catch (e) {
        root = parent.layerSets.add();
        root.name = this.rootGroupName;
    }
    return root;
};
Document.prototype.getArtboardByLayer = function(layer) {
    if (this.hasArtboard()) {
        for (var i = 0; i < this.artboardList.length; i += 1) {
            var ab = this.artboardList[i];
            var layerIdx = layer.getIndex();
            if (layerIdx < ab.index) {
                return ab;
            }
        }
    }
    return null;
};
Document.prototype.isSaved = function() {
    var a = new ActionReference();
    a.putEnumerated(app.charIDToTypeID("Dcmn"), app.charIDToTypeID("Ordn"), app.charIDToTypeID("Trgt"));
    return app.executeActionGet(a).hasKey(app.stringIDToTypeID("fileReference")) ? true : false;
};
Document.prototype.getPath = function() {
    var path = null;
    if (this.isSaved()) {
        try {
            path = activeDocument.path;
        } catch (ex) {
            path = null;
        }
    }
    return path;
};
Document.prototype.close = function() {
    var desc904 = new ActionDescriptor();
    desc904.putEnumerated(charIDToTypeID("Svng"), charIDToTypeID("YsN "), charIDToTypeID("N   "));
    executeAction(charIDToTypeID("Cls "), desc904, DialogModes.NO);
};
Document.prototype.saveAndClose = function() {
    var desc904 = new ActionDescriptor();
    desc904.putEnumerated(charIDToTypeID("Svng"), charIDToTypeID("YsN "), charIDToTypeID("Ys  "));
    executeAction(charIDToTypeID("Cls "), desc904, DialogModes.NO);
};