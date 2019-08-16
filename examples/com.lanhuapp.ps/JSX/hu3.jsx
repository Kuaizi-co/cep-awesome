OLD = {};

function() {
    OLD.testRepeat = testRepeat;
    OLD.getPsData = getPsData;
    OLD.getVersion = getVersion;
    OLD.resetVersion = resetVersion;
    OLD.getDocumentInfoJson = getDocumentInfoJson;
    OLD.getLayerTextInfo = getLayerTextInfo;
    OLD.REF_LayerID = REF_LayerID;
    OLD.setMetadata = setMetadata;
    OLD.getMetadata = getMetadata;
    OLD.delMetadata = delMetadata;

    function getVersion() {
        if (!getMetadata("versionId")) {
            var id = parseInt(new Date().getTime());
            setMetadata("versionId", id);
        }
        var vid = getMetadata("versionId");
        return vid;
    }

    function resetVersion() {
        var id = parseInt(new Date().getTime());
        setMetadata("versionId", id);
        var vid = getMetadata("versionId");
        try {
            var f = new File(app.activeDocument.fullName);
            var nowCreatedDate = new Date(f.created);
            setMetadata("sign_crated_date", nowCreatedDate);
        } catch (e) {

        }
        trySave();
        return vid;
    }

    function trySave() {
        try {
            app.activeDocument.path;
            app.activeDocument.save();
        } catch (e) {

        }
    }

    function getboardNum() {
        var artboards = 0;
        var layers = activeDocument.layers;
        for (var i = 0; i < layers.length; i += 1) {
            if (isArtBoard(REF_LayerID, layers[i].id)) {
                artboards++;
            }
        }
        return artboards;
    }

    function getSelectedArtboards(type) {
        var layIds = getTargetLayersID();
        var artboardsInfo = [];
        var boardsIds = [];
        var boardsName = [];
        var isRepeat = "";
        for (var i = 0; i < layIds.length; i += 1) {
            if (isArtBoard(REF_LayerID, layIds[i])) {
                boardsIds.push(layIds[i]);
            }
        }
        var res = JSON.stringify({
            ids: boardsIds
        });
        return res;
    }

    function testRepeat(param) {
        var param = JSON.parse(param);
        var type = param.type;
        if (type == "selected") {
            var selectBoardIds = param.selectIds;
        } else {
            if (type == "all") {
                var selectBoardIds = [];
                var laysets = activeDocument.layerSets;
                for (var i = 0; i < laysets.length; i += 1) {
                    if (isArtBoard(REF_LayerID, laysets[i].id)) {
                        selectBoardIds.push(laysets[i].id);
                    }
                }
            } else {
                var selectBoardIds = [];
            }
        }
        var names = [];
        var isRepeat = "";
        for (var i = 0; i < selectBoardIds.length; i += 1) {
            var boardName = getLayerName_byID(selectBoardIds[i]);
            if (!inArray(boardName, names)) {
                names.push(boardName);
            } else {
                isRepeat = "repeat";
            }
        }
        return isRepeat;
    }

    function seeingCat(psInfoOb) {
        if (psInfoOb.layers) {
            for (var i = 0; i < psInfoOb.layers.length; i += 1) {
                _seeLayer(psInfoOb.layers[i]);
            }
        }
        return psInfoOb;

        function _seeLayer(layer) {
            if (layer.type != "layerSection") {
                return null;
            }
            if (layer.artboard) {
                var isArtboard = true;
            } else {
                var isArtboard = false;
            }
            if (layer.layers) {
                if (layer.bounds) {
                    var sectionBottom = layer.bounds.bottom;
                    var sectionTop = layer.bounds.top;
                    var sectionLeft = layer.bounds.left;
                    var sectionRight = layer.bounds.right;
                    for (var i = 0; i < layer.layers.length; i += 1) {
                        var itemLayer = layer.layers[i];
                        if (itemLayer.type == "layerSection") {
                            _seeLayer(layer.layers[i]);
                        }
                        var _hit_delete = false;
                        if (itemLayer.bounds && _hit_delete == false) {
                            if (itemLayer.bounds.bottom >= sectionBottom) {
                                if (itemLayer.bounds.top >= sectionTop) {
                                    if (itemLayer.bounds.left >= sectionLeft) {
                                        if (itemLayer.bounds.right >= sectionRight) {
                                            if (isArtboard == false) {
                                                layer._hit_delete = true;
                                                _hit_delete = true;
                                            }
                                            continue;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function getPsData(param) {
        try {
            app.activeDocument;
        } catch (e) {
            return null;
        }
        if (param == undefined) {
            var param = "{\"type\":\"page\"}";
        }
        var param = JSON.parse(param);
        var boardIds = param.selectIds;
        var sysPath = param.path;
        var type = param.type;
        try {
            var json = getDocumentInfoJson(true);
            var obJson = JSON.parse(json);
            obJson = seeingCat(obJson);
            var layers = obJson.layers;
            var artboardsInfo = [];
            var flatInfo = [];
            var resInfo = [];
            var condition = true;
            for (var i = 0; i < layers.length; i += 1) {
                if (type == "selected") {
                    var condition = inArray(layers[i].id, boardIds);
                } else {
                    if (type == "page") {
                        condition = 1;
                    }
                }
                if (layers[i].artboard && layers[i].visible && condition) {
                    artboardsInfo.push(layers[i]);
                }
            }
            var res = "";
            if (artboardsInfo.length) {
                for (var i = 0; i < artboardsInfo.length; i += 1) {
                    artboardsInfo[i]._orgBounds = artboardsInfo[i].bounds;
                    artboardsInfo[i].width = artboardsInfo[i].bounds.right - artboardsInfo[i].bounds.left;
                    artboardsInfo[i].height = artboardsInfo[i].bounds.bottom - artboardsInfo[i].bounds.top;
                    artboardsInfo[i].isPage = type == "page";
                    delete artboardsInfo[i].index;
                    var boardInfo = toFlatInfo(flatInfo, artboardsInfo[i], artboardsInfo[i].layers);
                    boardInfo.unshift(artboardsInfo[i]);
                    delete boardInfo[0].artboard;
                    delete boardInfo[0].bounds;
                    resInfo.push({
                        board: artboardsInfo[i],
                        info: boardInfo,
                        type: "ps"
                    });
                    flatInfo = [];
                    delete artboardsInfo[i].layers;
                    resInfo[i].info = sortInfo(resInfo[i].info);
                }
                res = JSON.stringify({
                    id: obJson.id,
                    msg: resInfo
                });
            } else {
                obJson._orgBounds = obJson.bounds;
                obJson.width = obJson.bounds.right - obJson.bounds.left;
                obJson.height = obJson.bounds.bottom - obJson.bounds.top;
                obJson.id = 777777;
                obJson.isPage = type == "page";
                obJson.name = activeDocument.name.substr(0, activeDocument.name.lastIndexOf("."));
                delete obJson.timeStamp;
                delete obJson.count;
                delete obJson.selection;
                var psInfo = toFlatInfo(flatInfo, obJson, obJson.layers);
                resInfo.push({
                    board: obJson,
                    info: psInfo,
                    type: "ps"
                });
                flatInfo = [];
                delete obJson.layers;
                resInfo[0].info = sortInfo(resInfo[0].info);
                res = JSON.stringify({
                    id: obJson.id,
                    msg: resInfo
                });
                if (type == "selected" || type == "all") {
                    res = "";
                }
            }
            return res;

            function uniqueArr(arr) {
                var res = [];
                var json = {};
                for (var i = 0; i < arr.length; i += 1) {
                    if (!json[arr[i]]) {
                        res.push(arr[i]);
                        json[arr[i]] = 1;
                    }
                }
                return res;
            }

            function sortInfo(infoArr) {
                var sortArr = [];
                var resInfoArr = [];
                for (var i = 0; i < infoArr.length; i += 1) {
                    sortArr.push(infoArr[i].width * infoArr[i].height);
                }
                var resArr = sortArr.sort(function(a, b) {
                    return b - a;
                });
                resArr = uniqueArr(resArr);
                for (var i = 0; i < resArr.length; i += 1) {
                    for (var j = 0; j < infoArr.length; j += 1) {
                        var thisSize = infoArr[j].width * infoArr[j].height;
                        if (resArr[i] == thisSize) {
                            resInfoArr.push(infoArr[j]);
                        }
                    }
                }
                return resInfoArr;
            }
        } catch (e) {
            alert("获取ps json数据异常\n" + e);
        }
    }

    function toFlatInfo(flatInfo, artboard, layers) {
        var arr = layers;
        if (arr && arr.length) {
            for (var j = 0; j < arr.length; j += 1) {
                if (arr[j].visible) {
                    delete arr[j].index;
                    if (arr[j].bounds.left < artboard.bounds.left) {
                        arr[j].bounds.left = artboard.bounds.left;
                    }
                    if (arr[j].bounds.right > artboard.bounds.right) {
                        arr[j].bounds.right = artboard.bounds.right;
                    }
                    if (arr[j].bounds.top < artboard.bounds.top) {
                        arr[j].bounds.top = artboard.bounds.top;
                    }
                    if (arr[j].bounds.bottom > artboard.bounds.bottom) {
                        arr[j].bounds.bottom = artboard.bounds.bottom;
                    }
                    arr[j].width = arr[j].bounds.right - arr[j].bounds.left.toFixed(1);
                    arr[j].height = arr[j].bounds.bottom - arr[j].bounds.top.toFixed(1);
                    arr[j].left = arr[j].bounds.left - artboard.bounds.left.toFixed(1);
                    arr[j].top = arr[j].bounds.top - artboard.bounds.top.toFixed(1);
                    if (arr[j].width < 0) {
                        arr[j].width = 0;
                    }
                    if (arr[j].height < 0) {
                        arr[j].height = 0;
                    }
                    if (arr[j].type == "textLayer") {
                        var textInfo = getLayerTextInfo(REF_LayerID, arr[j].id);
                        arr[j].textInfo = textInfo;
                    }
                    var b = true;
                    var sIndex = 0;
                    for (var s = 0; s < flatInfo.length; s += 1) {
                        if (flatInfo[s].width == arr[j].width && flatInfo[s].height == arr[j].height) {
                            b = false;
                            sIndex = s;
                        }
                    }
                    if (b) {
                        flatInfo.push(arr[j]);
                    } else {
                        if (!sIndex) {
                            flatInfo.unshift(arr[j]);
                        } else {
                            flatInfo.splice(sIndex - 1, 0, arr[j]);
                        }
                    }
                    var index = flatInfo.length - 1;
                    toFlatInfo(flatInfo, artboard, arr[j].layers);
                    if (flatInfo[index].path) {
                        try {
                            if (flatInfo[index].path.bounds) {
                                delete flatInfo[index].path.bounds;
                            }
                            if (flatInfo[index].path.pathComponents) {
                                for (var s = 0; s < flatInfo[index].path.pathComponents.length; s += 1) {
                                    delete flatInfo[index].path.pathComponents[s].origin.bounds;
                                }
                            }
                            if (flatInfo[index].boundsWithFX) {
                                delete flatInfo[index].boundsWithFX;
                            }
                        } catch (e) {

                        }
                    }
                    delete flatInfo[index].bounds;
                    delete flatInfo[index].layers;
                }
            }
        }
        return flatInfo;
    }

    function outputImg(param) {
        try {
            var param = JSON.parse(param);
            var filePath = param.path;
            var doc = activeDocument;
            var outputPath = filePath;
            var destStatics = new Folder(outputPath);
            if (!destStatics.exists) {
                destStatics.create();
            }
            var lname = param.boardName;
            var type = param.type;
            var exportName = "";
            if (type == "selected" || type == "all") {
                if (lname.toLowerCase() != "null") {
                    var ext = lname.substr(-4);
                    var hashName = param.proId + param.psdId + lname;
                    if (ext === ".png") {
                        var exportName = hashName + ".png";
                    } else {
                        if (ext === ".jpg") {
                            var exportName = hashName.replace(".jpg", ".png");
                        } else {
                            var exportName = hashName + ".png";
                        }
                    }
                    exportName = exportName.replace(/\s/g, "");
                    selectLayer(lname);
                    saveLayer(doc.layers.getByName(lname), exportName, destStatics, true);
                }
            } else {
                if (type == "page") {
                    var hashName = param.proId + param.psdId + lname + ".png".replace(/\s/g, "");
                    var path = destStatics + "/" + hashName;
                    var saveFile = File(path);
                    SavePNG(saveFile);
                }
            }
        } catch (e) {
            alert("导出图片异常\n" + e);
        }
    }

    function saveLayer(layer, lname, path, shouldMerge) {
        activeDocument.activeLayer = layer;
        dupLayers();
        if (shouldMerge === undefined || shouldMerge === true) {
            activeDocument.mergeVisibleLayers();
        }
        activeDocument.trim(TrimType.TRANSPARENT, true, true, true, true);
        var saveFile = File(path + "/" + lname);
        SavePNG(saveFile);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }

    function dupLayers() {
        var desc143 = new ActionDescriptor();
        var ref73 = new ActionReference();
        ref73.putClass(charIDToTypeID("Dcmn"));
        desc143.putReference(charIDToTypeID("null"), ref73);
        desc143.putString(charIDToTypeID("Nm  "), activeDocument.activeLayer.name);
        var ref74 = new ActionReference();
        ref74.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        desc143.putReference(charIDToTypeID("Usng"), ref74);
        executeAction(charIDToTypeID("Mk  "), desc143, DialogModes.NO);
    }

    function resizeImage(size) {
        var idImgS = charIDToTypeID("ImgS");
        var desc178 = new ActionDescriptor();
        var idWdth = charIDToTypeID("Wdth");
        var idPxl = charIDToTypeID("#Pxl");
        desc178.putUnitDouble(idWdth, idPxl, size);
        var idscaleStyles = stringIDToTypeID("scaleStyles");
        desc178.putBoolean(idscaleStyles, true);
        var idCnsP = charIDToTypeID("CnsP");
        desc178.putBoolean(idCnsP, true);
        var idIntr = charIDToTypeID("Intr");
        var idIntp = charIDToTypeID("Intp");
        var idautomaticInterpolation = stringIDToTypeID("automaticInterpolation");
        desc178.putEnumerated(idIntr, idIntp, idautomaticInterpolation);
        executeAction(idImgS, desc178, DialogModes.NO);
    }

    function SavePNG(saveFile) {
        var pngOpts = new ExportOptionsSaveForWeb();
        pngOpts.format = SaveDocumentType.PNG;
        pngOpts.PNG8 = true;
        pngOpts.transparency = true;
        pngOpts.interlaced = false;
        pngOpts.quality = 100;
        activeDocument.exportDocument(new File(saveFile), ExportType.SAVEFORWEB, pngOpts);
    }

    function inArray(val, arr) {
        for (var s = 0; s < arr.length; s += 1) {
            if (arr[s] == val) {
                return true;
            }
        }
        return false;
    }

    function getArtBoards() {
        var boards = [];
        for (var i = 0; i < activeDocument.layerSets.length; i += 1) {
            if (isArtBoard(REF_LayerID, activeDocument.layers[i].id)) {
                boards.push({
                    id: activeDocument.layers[i].id
                });
            }
        }
        return boards;
    }

    function delMetadata(property) {
        if (ExternalObject.AdobeXMPScript == undefined) {
            ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
        }
        try {
            xmp = activeDocument.xmpMetadata.rawData;
            xmpObject = new XMPMeta(xmp);
        } catch (e) {
            xmpObject = new XMPMeta();
        }
        var myNamespace = "lanhu";
        var myPrefix = "lanhuPrefix_";
        XMPMeta.registerNamespace(myNamespace, myPrefix);
        xmpObject.deleteProperty(myNamespace, property);
        activeDocument.xmpMetadata.rawData = xmpObject.serialize();
    }

    function setMetadata(property, propertyValue) {
        if (ExternalObject.AdobeXMPScript == undefined) {
            ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
        }
        try {
            xmp = activeDocument.xmpMetadata.rawData;
            xmpObject = new XMPMeta(xmp);
        } catch (e) {
            xmpObject = new XMPMeta();
        }
        var myNamespace = "lanhu";
        var myPrefix = "lanhuPrefix_";
        XMPMeta.registerNamespace(myNamespace, myPrefix);
        xmpObject.deleteProperty(myNamespace, property);
        xmpObject.setProperty(myNamespace, property, propertyValue);
        activeDocument.xmpMetadata.rawData = xmpObject.serialize();
    }

    function getMetadata(property) {
        if (ExternalObject.AdobeXMPScript == undefined) {
            ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
        }
        try {
            xmp = activeDocument.xmpMetadata.rawData;
            xmpObject = new XMPMeta(xmp);
        } catch (e) {
            xmpObject = new XMPMeta();
        }
        try {
            var myNamespace = "lanhu";
            var myPrefix = "lanhuPrefix_";
            XMPMeta.registerNamespace(myNamespace, myPrefix);
            var metadata = xmpObject.getProperty(myNamespace, property);
        } catch (e) {

        }
        return metadata;
    }

    function getDocumentInfoJson(lessInfo) {
        var af = new ActionReference();
        var ad = new ActionDescriptor();
        af.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("json"));
        af.putEnumerated(stringIDToTypeID("document"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        ad.putReference(charIDToTypeID("null"), af);
        if (lessInfo != true) {
            ad.putBoolean(stringIDToTypeID("getNotes"), true);
        }
        return executeAction(charIDToTypeID("getd"), ad, DialogModes.NO).getString(stringIDToTypeID("json"));
    }

    function getArtBoardsInfo(docInfo) {
        var artBoards = docInfo.layers;
        var infoArr = [];
        for (var i = 0; i < artBoards.length; i += 1) {
            if (isArtBoard(REF_LayerID, artBoards[i].id)) {
                infoArr.push({
                    id: artBoards[i].id,
                    info: artBoards[i]
                });
            }
        }
        return infoArr;
    }

    function isArtBoard(targetReference, target) {
        try {
            var artBoard_raw = get_XXX_Objcet(targetReference, target, "artboardEnabled", "Lyr ");
            if (artBoard_raw.artboardEnabled.value == true) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }

    function isVisible(targetReference, target) {
        try {
            var visible_raw = get_XXX_Objcet(targetReference, target, "visible");
            if (visible_raw != undefined && visible_raw.visible != undefined) {
                return visible_raw.visible.value;
            }
        } catch (e) {
            return false;
        }
    }

    function get_XXX_Objcet(targetReference, target, xxx, getSimpleObject) {
        try {
            var ref = new ActionReference();
            ref.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID(xxx));
            targetReference(ref, target, "layer");
            var layerDesc = executeActionGet(ref);
        } catch (e) {
            $.writeln(e);
        }
        if (getSimpleObject === true) {
            return {
                raw: actionDescriptorToObject(layerDesc),
                simple: actionDescriptorToSimpleObject(layerDesc)
            };
        } else {
            return actionDescriptorToObject(layerDesc);
        }
    }

    function actionDescriptorToObject(actionDescriptor, in_outSimple) {
        if (actionDescriptor == undefined) {
            return null;
        }
        var out_ob = {};
        _scanAD(actionDescriptor, out_ob, false, in_outSimple);

        function _scanAD(ad, ob, isAList, outSimple) {
            var len = ad.count;
            for (var i = 0; i < len; i += 1) {
                if (isAList) {
                    var key = i;
                } else {
                    var key = ad.getKey(i);
                }
                var obType = ad.getType(key);
                var obValue = null;
                if ("DescValueType.BOOLEANTYPE" == obType) {
                    obValue = ad.getBoolean(key);
                } else {
                    if ("DescValueType.STRINGTYPE" == obType) {
                        obValue = ad.getString(key);
                    } else {
                        if ("DescValueType.INTEGERTYPE" == obType) {
                            obValue = ad.getInteger(key);
                        } else {
                            if ("DescValueType.DOUBLETYPE" == obType) {
                                obValue = ad.getDouble(key);
                            } else {
                                if ("DescValueType.CLASSTYPE" == obType) {
                                    obValue = ad.getClass(key);
                                } else {
                                    if ("DescValueType.RAWTYPE" == obType) {
                                        obValue = ad.getData(key);
                                    } else {
                                        if ("DescValueType.LARGEINTEGERTYPE" == obType) {
                                            obValue = ad.getLargeInteger(key);
                                        } else {
                                            if ("DescValueType.ALIASTYPE" == obType) {
                                                obValue = ad.getPath(key).fullName;
                                            } else {
                                                if ("DescValueType.UNITDOUBLE" == obType) {
                                                    obValue = {
                                                        doubleType: typeIDToStringID(ad.getUnitDoubleType(key)),
                                                        doubleValue: ad.getUnitDoubleValue(key)
                                                    };
                                                } else {
                                                    if ("DescValueType.ENUMERATEDTYPE" == obType) {
                                                        obValue = {
                                                            enumerationType: typeIDToStringID(ad.getEnumerationType(key)),
                                                            enumerationValue: typeIDToStringID(ad.getEnumerationValue(key))
                                                        };
                                                    } else {
                                                        if ("DescValueType.REFERENCETYPE" == obType) {
                                                            obValue = actionReferenceToObject(ad.getReference(key));
                                                        } else {
                                                            if ("DescValueType.OBJECTTYPE" == obType) {
                                                                obValue = {};
                                                                _scanAD(ad.getObjectValue(key), obValue, false, outSimple);
                                                            } else {
                                                                if ("DescValueType.LISTTYPE" == obType) {
                                                                    if (outSimple) {
                                                                        obValue = [];
                                                                        _scanAD(ad.getList(key), obValue, true, outSimple);
                                                                    } else {
                                                                        obValue = {};
                                                                        _scanAD(ad.getList(key), obValue, true, outSimple);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (isAList) {
                    var name = key;
                } else {
                    var name = typeIDToStringID(key);
                }
                if (outSimple) {
                    if (isAList) {
                        ob[key] = obValue;
                    } else {
                        ob[name] = obValue;
                        if ("DescValueType.OBJECTTYPE" == obType) {
                            ob[name]._objectType = typeIDToStringID(ad.getObjectType(key));
                        }
                    }
                } else {
                    ob[name] = {
                        value: obValue,
                        type: obType.toString()
                    };
                    if ("DescValueType.OBJECTTYPE" == obType) {
                        ob[name].objectType = typeIDToStringID(ad.getObjectType(key));
                    }
                }
            }
        }
        return out_ob;
    }

    function actionReferenceToObject(actionReference) {
        var ob = {};
        _scanAF(actionReference, ob);

        function _scanAF(actionReference, ob) {
            try {
                ob.container = {};
                var c = actionReference.getContainer();
                if (c != undefined) {
                    _scanAF(c, ob.container);
                }
            } catch (e) {

            }
            try {
                ob.form = actionReference.getForm().toString();
            } catch (e) {

            }
            try {
                ob.desiredClass = typeIDToStringID(actionReference.getDesiredClass());
            } catch (e) {

            }
            try {
                ob.enumeratedType = typeIDToStringID(actionReference.getEnumeratedType());
            } catch (e) {

            }
            try {
                ob.enumeratedValue = typeIDToStringID(actionReference.getEnumeratedValue());
            } catch (e) {

            }
            try {
                ob.identifier = actionReference.getIdentifier();
            } catch (e) {

            }
            try {
                ob.index = actionReference.getIndex();
            } catch (e) {

            }
            try {
                ob.offset = actionReference.getOffset();
            } catch (e) {

            }
            try {
                ob.property = typeIDToStringID(actionReference.getProperty());
            } catch (e) {

            }
            try {
                var t = actionReference.getName();
                if (t.length > 0) {
                    ob.name = t;
                }
            } catch (e) {

            }
        }
        return ob;
    }

    function actionDescriptorToSimpleObject(actionDescriptor) {
        return actionDescriptorToObject(actionDescriptor, true);
    }

    function getLayerTextInfo(targetReference, target) {
        var textInfo = {
            text: null,
            color: {
                r: null,
                g: null,
                b: null
            },
            size: null,
            fontPostScriptName: null,
            bold: null,
            italic: null,
            antiAlias: null,
            underline: null,
            justification: null,
            leading: null,
            tracking: null,
            baselineShift: null,
            horizontalScale: null,
            verticalScale: null
        };
        var layerKind = get_XXX_Objcet(targetReference, target, "layerKind");
        if (layerKind != undefined && layerKind.layerKind.value == 3) {
            var textAdObs = get_XXX_Objcet(targetReference, target, "textKey", true);
            var textKey_raw = textAdObs.raw;
            try {
                var styleRange = textAdObs.simple.textKey.textStyleRange;
                if (styleRange[0].baseParentStyle) {
                    delete styleRange[0];
                }
                textInfo.styleRange = styleRange;
            } catch (e) {
                var styleRange = null;
            }
            textKey_raw = textKey_raw.textKey;
            if (textKey_raw.value.transform) {
                textInfo.transform = textKey_raw.value.transform.value;
            }
            textInfo.text = textKey_raw.value.textKey.value;
            textInfo.antiAlias = textKey_raw.value.antiAlias.value.enumerationValue;
            textInfo.color.r = 0;
            textInfo.color.g = 0;
            textInfo.color.b = 0;
            if (textKey_raw.value.textStyleRange.value[0] != undefined) {
                if (textKey_raw.value.textStyleRange.value[0].value.textStyle.value.color != undefined) {
                    textInfo.color.r = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.color.value.red.value;
                    textInfo.color.g = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.color.value.grain.value;
                    textInfo.color.b = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.color.value.blue.value;
                }
            }
            try {
                textInfo.size = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.size.value.doubleValue;
            } catch (e) {

            }
            try {
                textInfo.fontPostScriptName = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.fontPostScriptName.value;
            } catch (e) {

            }
            try {
                textInfo.bold = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.syntheticBold.value;
            } catch (e) {
                textInfo.bold = false;
            }
            try {
                textInfo.italic = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.syntheticItalic.value;
            } catch (e) {
                textInfo.italic = false;
            }
            try {
                textInfo.underline = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.underline.value.enumerationValue;
            } catch (e) {

            }
            try {
                textInfo.justification = textKey_raw.value.paragraphStyleRange.value[0].value.paragraphStyle.value.align.value.enumerationValue;
            } catch (e) {

            }
            try {
                textInfo.leading = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.leading.value.doubleValue;
            } catch (e) {

            }
            try {
                textInfo.tracking = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.tracking.value;
            } catch (e) {

            }
            try {
                textInfo.baselineShift = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.baselineShift.value.doubleValue;
            } catch (e) {

            }
            try {
                textInfo.horizontalScale = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.horizontalScale.value;
            } catch (e) {

            }
            try {
                textInfo.verticalScale = textKey_raw.value.textStyleRange.value[0].value.textStyle.value.verticalScale.value;
            } catch (e) {

            }
        }
        return textInfo;
    }

    function BKOffset() {
        var backgroundIndexOffset = 0;
        try {
            if (app.activeDocument.backgroundLayer) {
                backgroundIndexOffset = -1;
            }
        } catch (err) {

        }
        return backgroundIndexOffset;
    }

    function getLayerIdByItemIndex(itemIndex) {
        var ref = new ActionReference();
        ref.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("layerID"));
        ref.putIndex(charIDToTypeID("Lyr "), itemIndex + BKOffset());
        var layerDesc = executeActionGet(ref);
        return layerDesc.getInteger(stringIDToTypeID("layerID"));
    }

    function getTargetLayersID() {
        var ref = new ActionReference();
        ref.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("targetLayers"));
        ref.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        var layerDesc = executeActionGet(ref);
        var ob = actionDescriptorToSimpleObject(layerDesc);
        if (ob.targetLayers == undefined) {
            return [];
        }
        var arr = [];
        for (var i in ob.targetLayers) {
            arr.push(getLayerIdByItemIndex(ob.targetLayers[i].index + 1));
        }
        return arr;
    }

    function _rltb2xywh(boundsInfo) {
        var newBoundsInfo = {
            x: null,
            y: null,
            w: null,
            h: null
        };
        for (var i in boundsInfo) {
            if (boundsInfo[i].value != undefined) {
                boundsInfo[i] = boundsInfo[i].value.doubleValue;
            }
        }
        newBoundsInfo.x = boundsInfo.left;
        newBoundsInfo.y = boundsInfo.top;
        newBoundsInfo.h = boundsInfo.bottom - boundsInfo.top;
        newBoundsInfo.w = boundsInfo.right - boundsInfo.left;
        return newBoundsInfo;
    }

    function REF_LayerID(ref, layerID, classString) {
        if (classString != undefined) {
            var typeID = stringIDToTypeID(classString);
        } else {
            var typeID = charIDToTypeID("Lyr ");
        }
        ref.putIdentifier(typeID, layerID);
    }

    function selectLayer(name) {
        var idslct = charIDToTypeID("slct");
        var desc428 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref149 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        ref149.putName(idLyr, name);
        desc428.putReference(idnull, ref149);
        var idMkVs = charIDToTypeID("MkVs");
        desc428.putBoolean(idMkVs, false);
        var idLyrI = charIDToTypeID("LyrI");
        var list153 = new ActionList();
        list153.putInteger(48);
        desc428.putList(idLyrI, list153);
        executeAction(idslct, desc428, DialogModes.NO);
    }

    function getLayerName_byID(layerID) {
        var ref = new ActionReference();
        ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("Nm  "));
        ref.putIdentifier(charIDToTypeID("Lyr "), layerID);
        try {
            return executeActionGet(ref).getString(charIDToTypeID("Nm  "));
        } catch (e) {
            return null;
        }
    }

    function getAppearance(targetReference, target) {
        var appearanceInfo = {
            fillOpacity: null,
            opacity: null,
            visible: null,
            mode: null
        };
        var visible_raw = get_XXX_Objcet(targetReference, target, "visible");
        if (visible_raw != undefined && visible_raw.visible != undefined) {
            appearanceInfo.visible = visible_raw.visible.value;
        }
        return appearanceInfo;
    }
}();