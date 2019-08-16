var saveAssetByLayerIDList = function(layerIDListJson) {
    var layerIDList = JSON.parse(layerIDListJson);
    var newLayerIDList = [];
    var workDoc = app.activeDocument;
    app.activeDocument.suspendHistory("导出切图到蓝湖", "_do()");

    function _do() {
        if (app.preferences.rulerUnits != Units.PIXELS) {
            var unitsChanged = true;
            app.preferences.rulerUnits = Units.PIXELS;
            var originalRulerUnits = app.preferences.rulerUnits;
        }
        for (var i = 0; i < layerIDList.length; i += 1) {
            var layerItem = layerIDList[i];
            try {
                app.activeDocument = workDoc;
                saveAssetByLayerID(layerItem.id, layerItem.fileName, workDoc, layerItem.maxFileName, layerItem.maxScale);
            } catch (e) {
                continue;
            }
            newLayerIDList.push(layerItem);
        }
        if (unitsChanged) {
            app.preferences.rulerUnits = originalRulerUnits;
        }
    }
    app.activeDocument = workDoc;
    return JSON.stringify(newLayerIDList);
};
var filterLayerID_byIsArtboard = function(layerIDs) {
    var artboardIDs = [];
    for (var i = 0; i < layerIDs.length; i += 1) {
        if (Kinase.layer.isArtBoard(Kinase.REF_LayerID, layerIDs[i])) {
            artboardIDs.push(layerIDs[i]);
        }
    }
    return JSON.stringify(artboardIDs);
};
var saveArtboardByLayerIDList = function(layerIDListJson) {
    var layerIDList = JSON.parse(layerIDListJson);
    var newLayerIDList = [];
    var workDoc = app.activeDocument;
    app.activeDocument.suspendHistory("导出画板到蓝湖", "_do()");

    function _do() {
        var hasArtboard = null;
        var hasBK = Kinase.lowerIndex() == 2;
        if (NEW.hostVersion < 16.2) {
            hasBK = Kinase.lowerIndex();
            hasArtboard = Kinase.document.hasArtBoard(false, 10);
        }
        app.activeDocument.duplicate("导出画板...", true);
        var outDoc = app.activeDocument;
        if (NEW.hostVersion < 16.2) {
            try {
                if (hasArtboard && !hasBK) {
                    newArtboardFakerBk();
                }
            } catch (e) {

            }
        }
        for (var i = 0; i < layerIDList.length; i += 1) {
            var layerItem = layerIDList[i];
            try {
                if (layerItem.isPage) {
                    saveArtboardByLayerID2(layerItem.id, layerItem.fileName, outDoc, layerItem._bounds);
                } else {
                    saveArtboardByLayerID2(layerItem.id, layerItem.fileName, outDoc, layerItem._bounds);
                }
            } catch (e) {
                continue;
            }
            newLayerIDList.push(layerItem);
        }
        app.activeDocument = outDoc;
        if (app.activeDocument == outDoc) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
    }
    app.activeDocument = workDoc;
    return JSON.stringify(newLayerIDList);
};
var saveDocment = function(fileName) {
    var pngOptions = new PNGSaveOptions();
    pngOptions.compression = 9;
    try {
        if (app.activeDocument.mode != DocumentMode.RGB) {
            app.activeDocument.changeMode(ChangeMode.RGB);
        }
        app.activeDocument.xmpMetadata.rawData = "";
        try {
            app.activeDocument.saveAs(new File(fileName), pngOptions, true);
        } catch (e) {
            alert("保存失败，有可能是 Photoshop v19.0 的 Bug 所致，请尝试升级 Photoshop 到最新版本");
        }
        return JSON.stringify(fileName);
    } catch (e) {
        return JSON.stringify(null);
    }
};
var saveArtboardByLayerID = function(layerID, fileName, workDoc, artboardBounds) {
    var nowDoc = app.activeDocument;
    try {
        var hasBackground = false;
        Kinase.layer.selectLayer_byID(layerID);
        dupLayers();
        try {
            if (app.activeDocument.backgroundLayer) {
                hasBackground = true
            }
        } catch (err) {

        }
        try {
            var idMrgV = charIDToTypeID("MrgV");
            executeAction(idMrgV, undefined, DialogModes.NO);
            app.activeDocument.crop([UnitValue(artboardBounds.left + " px"), UnitValue(artboardBounds.top + " px"), UnitValue(artboardBounds.right + " px"), UnitValue(artboardBounds.bottom + " px")]);
        } catch (e) {

        }
        saveActiveDocForWeb(fileName);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument = workDoc;
        return fileName;
    } catch (e) {
        alert("导出图片错误: " + e);
    }
    app.activeDocument = nowDoc;
};
var saveArtboardByLayerID2 = function(layerID, fileName, workDoc, artboardBounds) {
    app.activeDocument = workDoc;
    try {
        var hasBackground = false;
        Kinase.layer.selectLayer_byID(layerID);
        try {
            if (app.activeDocument.backgroundLayer) {
                hasBackground = true
            }
        } catch (err) {

        }
        try {
            app.activeDocument.crop([UnitValue(artboardBounds.left + " px"), UnitValue(artboardBounds.top + " px"), UnitValue(artboardBounds.right + " px"), UnitValue(artboardBounds.bottom + " px")]);
        } catch (e) {

        }
        app.activeDocument = workDoc;
        saveDocment(fileName);
        undo();
        return fileName;
    } catch (e) {
        alert("导出图片错误: " + e);
    }
    app.activeDocument = workDoc;
};

function saveAssetByLayerID(layerID, fileName, workDoc, maxFileName, maxScale) {
    app.activeDocument = workDoc;
    var REG_ASSET_S_MARK = /^-[s]-/i;
    try {
        try {
            Kinase.layer.selectLayer_byID(layerID);
            Kinase.layer.selectLayer_byID(layerID);
            var isSlice = REG_ASSET_S_MARK.test(app.activeDocument.activeLayer.name);
            dupLayers();
            var newDoc = app.activeDocument;
            if (isSlice) {
                var bounds = getSliceBoundsByActive();
                if (bounds == undefined) {
                    bounds = app.activeDocument.activeLayer.bounds;
                }
            } else {
                var bounds = app.activeDocument.activeLayer.bounds;
            }
            app.activeDocument.crop(bounds);
            app.activeDocument = newDoc;
            saveDocment(fileName);
            docScale(maxScale);
            saveDocment(maxFileName);
            app.activeDocument = newDoc;
            if (app.activeDocument == newDoc) {
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }
        } catch (e) {
            $.writeln("err :" + e);
        }
        app.activeDocument = workDoc;
        return fileName;
    } catch (e) {
        alert("导出图片错误: " + e);
    }
}

// 按比例缩放图像大小
function docScale(scale) {
    var idImgS = charIDToTypeID("ImgS");
    var desc780 = new ActionDescriptor();
    var idWdth = charIDToTypeID("Wdth");
    var idPxl = charIDToTypeID("#Pxl");
    desc780.putUnitDouble(idWdth, idPxl, app.activeDocument.width * scale);
    var idscaleStyles = stringIDToTypeID("scaleStyles");
    desc780.putBoolean(idscaleStyles, true);
    var idCnsP = charIDToTypeID("CnsP");
    desc780.putBoolean(idCnsP, true);
    var idIntr = charIDToTypeID("Intr");
    var idIntp = charIDToTypeID("Intp");
    var idautomaticInterpolation = stringIDToTypeID("automaticInterpolation");
    desc780.putEnumerated(idIntr, idIntp, idautomaticInterpolation);
    executeAction(idImgS, desc780, DialogModes.NO);
}

function undo() {
    try {
        app.activeDocument.activeHistoryState = app.activeDocument.historyStates[app.activeDocument.historyStates.length - 2];
    } catch (e) {

    }
}

// 另存为web
function saveActiveDocForWeb(saveFilePath) {
    try {
        var id6 = charIDToTypeID("Expr");
        var desc3 = new ActionDescriptor();
        var id7 = charIDToTypeID("Usng");
        var desc4 = new ActionDescriptor();
        var id8 = charIDToTypeID("Op  ");
        var id9 = charIDToTypeID("SWOp");
        var id10 = charIDToTypeID("OpSa");
        desc4.putEnumerated(id8, id9, id10);
        var id11 = charIDToTypeID("Fmt ");
        var id12 = charIDToTypeID("IRFm");
        var id13 = charIDToTypeID("PN24");
        desc4.putEnumerated(id11, id12, id13);
        var id14 = charIDToTypeID("Intr");
        desc4.putBoolean(id14, false);
        var id15 = charIDToTypeID("Trns");
        desc4.putBoolean(id15, true);
        var id16 = charIDToTypeID("Mtt ");
        desc4.putBoolean(id16, true);
        var id17 = charIDToTypeID("MttR");
        desc4.putInteger(id17, 255);
        var id18 = charIDToTypeID("MttG");
        desc4.putInteger(id18, 255);
        var id19 = charIDToTypeID("MttB");
        desc4.putInteger(id19, 255);
        var id20 = charIDToTypeID("SHTM");
        desc4.putBoolean(id20, false);
        var id21 = charIDToTypeID("SImg");
        desc4.putBoolean(id21, true);
        var id22 = charIDToTypeID("SSSO");
        desc4.putBoolean(id22, false);
        var id23 = charIDToTypeID("SSLt");
        var list1 = new ActionList();
        desc4.putList(id23, list1);
        var id24 = charIDToTypeID("DIDr");
        desc4.putBoolean(id24, false);
        var id25 = charIDToTypeID("In  ");
        desc4.putPath(id25, new File(saveFilePath));
        desc4.putBoolean(charIDToTypeID("EICC"), true);
        var id26 = stringIDToTypeID("SaveForWeb");
        desc3.putObject(id7, id26, desc4);
        executeAction(id6, desc3, DialogModes.NO);
        return true;
    } catch (e) {
        alert("保存图片错误: " + e);
    }
    return false;
}

// 合并图层
function dupLayers() {
    var desc143 = new ActionDescriptor();
    var ref73 = new ActionReference();
    // document
    ref73.putClass(charIDToTypeID("Dcmn"));
    desc143.putReference(charIDToTypeID("null"), ref73);
    var ref74 = new ActionReference();
    // leyer, ordin, targetEnum
    ref74.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    // using
    desc143.putReference(charIDToTypeID("Usng"), ref74);
    // make
    executeAction(charIDToTypeID("Mk  "), desc143, DialogModes.NO);
}

function getAllArtboardIds() {
    var artboardIds = [];
    try {
        for (var i = 0; i < app.activeDocument.layers.length; i += 1) {
            var id = app.activeDocument.layers[i].id;
            $.writeln("i:" + i + ",id:" + id);
            if (Kinase.layer.isArtBoard(Kinase.REF_LayerID, id)) {
                artboardIds.push(id);
            }
        }
    } catch (e) {

    }
    return JSON.stringify(artboardIds);
}

function getDocumentInfoJson() {
    try {
        var af = new ActionReference();
        var ad = new ActionDescriptor();
        af.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("json"));
        af.putEnumerated(stringIDToTypeID("document"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        ad.putReference(charIDToTypeID("null"), af);
        ad.putBoolean(stringIDToTypeID("getTextStyles"), true);
        ad.putBoolean(stringIDToTypeID("getFullTextStyles"), true);
        ad.putBoolean(stringIDToTypeID("selectedLayers"), false);
        return executeAction(charIDToTypeID("getd"), ad, DialogModes.NO).getString(stringIDToTypeID("json"));
    } catch (e) {
        return e;
    }
}

function calcTimeForGetPsDateRaw() {
    var start = new Date().getTime();
    var json = getDocumentInfoJson(true);
    var end = new Date().getTime();
    alert("获取 PsDataRaw 耗时：" + (end - start));
}

function getPsDataNEW() {
    var json = getDocumentInfoJson();
    return json;
}

function createSlice_byId(id, inSize) {
    var newSetId = null;
    app.activeDocument.suspendHistory("创建自定义尺寸切图", "_do()");

    function _do() {
        Kinase.layer.selectLayer_byID(id);
        var bounds = getActiveLayerBounds();
        var orgName = Kinase.layer.getLayerName_byID(id);
        Kinase.layer.creatNewLayerSet_ByActive("-s-" + orgName);
        var rootId = ki.layer.getLayerIdByActive();
        newSetId = rootId;
        if (inSize) {
            var sizeOb = JSON.parse(inSize);
            if (sizeOb.w == "") {
                sizeOb.w = null
            }
            if (sizeOb.h == "") {
                sizeOb.h = null
            }
            if (sizeOb.w == null) {
                sizeOb.w = bounds.right - bounds.left
            }
            if (sizeOb.h == null) {
                sizeOb.h = bounds.bottom - bounds.top
            }
            sizeOb.h = +sizeOb.h;
            sizeOb.w = +sizeOb.w;
            if (sizeOb.w != undefined || sizeOb.h != undefined) {
                var cX = bounds.left + ((bounds.right - bounds.left) / 2);
                var cY = bounds.top + ((bounds.bottom - bounds.top) / 2);
                bounds.left = Math.round(cX - (sizeOb.w / 2));
                bounds.right = bounds.left + sizeOb.w;
                bounds.top = Math.round(cY - (sizeOb.h / 2));
                bounds.bottom = bounds.top + sizeOb.h;
            }
        }
        try {
            var layerRootId = ki.layer.findRootLayers_byItemIndex(ki.layer.getItemIndexBylayerID(ki.layer.getLayerIdByActive()));
            var at = ki.layer.get_XXX_Objcet(Kinase.REF_LayerID, layerRootId, "artboard", true);
            if (ki.layer.isArtBoard(Kinase.REF_LayerID, layerRootId)) {
                var atRect = at.artboard.artboardRect;
                if (bounds.top < atRect.top) {
                    bounds.top = atRect.top
                }
                if (bounds.left < atRect.left) {
                    bounds.left = atRect.left
                }
                if (bounds.bottom > atRect.bottom) {
                    bounds.bottom = atRect.bottom
                }
                if (bounds.right > atRect.right) {
                    bounds.right = atRect.right
                }
            }
        } catch (e) {

        }
        newShape("-slice-", rootId, {
            left: bounds.left,
            top: bounds.top,
            right: bounds.right,
            bottom: bounds.bottom
        });
        Kinase.layer.selectLayer_byID(id);
        ki.layer.moveActiveLayerOrder((ki.layer.getItemIndexBylayerID(rootId) - 1) - Kinase.BKOffset());
    }
    return JSON.stringify(newSetId);
}

function getSliceByActive() {
    var REG_SLICE_MARK = /^-slice-/;
    try {
        if (app.activeDocument.activeLayer) {
            if (app.activeDocument.activeLayer.artLayers) {
                for (var i = app.activeDocument.activeLayer.artLayers.length - 1; i >= 0; i--) {
                    var isSlice = REG_SLICE_MARK.test(app.activeDocument.activeLayer.artLayers[i].name);
                    if (isSlice) {
                        return JSON.stringify(app.activeDocument.activeLayer.artLayers[i].id);
                    }
                }
            }
        }
    } catch (e) {
        $.writeln(e);
    }
    return JSON.stringify(null);
}

function getSliceById(id) {
    var REG_SLICE_MARK = /^-slice-/;
    try {
        var trgetLayer = Kinase.layer.getLayerDOMObject_byItemIndex(Kinase.layer.getItemIndexBylayerID(id));
        if (trgetLayer) {
            if (trgetLayer.artLayers) {
                for (var i = trgetLayer.artLayers.length - 1; i >= 0; i--) {
                    var isSlice = REG_SLICE_MARK.test(trgetLayer.artLayers[i].name);
                    if (isSlice) {
                        return JSON.stringify(trgetLayer.artLayers[i].id);
                    }
                }
            }
        }
    } catch (e) {
        $.writeln(e);
    }
    return JSON.stringify(null);
}

function getSliceBoundsByActive() {
    var REG_SLICE_MARK = /^-slice-/;
    try {
        if (app.activeDocument.activeLayer) {
            if (app.activeDocument.activeLayer.artLayers) {
                for (var i = app.activeDocument.activeLayer.artLayers.length - 1; i >= 0; i--) {
                    var isSlice = REG_SLICE_MARK.test(app.activeDocument.activeLayer.artLayers[i].name);
                    if (isSlice) {
                        var bounds = app.activeDocument.activeLayer.artLayers[i].bounds;
                        app.activeDocument.activeLayer.artLayers[i].visible = false;
                        return [bounds[0] + UnitValue("1 px"), bounds[1] + UnitValue("1 px"), bounds[2] - UnitValue("1 px"), bounds[3] - UnitValue("1 px")];
                    }
                }
            }
        }
    } catch (e) {
        $.writeln(e);
    }
    return null;
}

function createSliceeFromLayerSet_byId(id, inSize) {
    app.activeDocument.suspendHistory("创建自定义尺寸切图", "_do()");

    function _do() {
        try {
            Kinase.layer.selectLayer_byID(id);
            if (app.activeDocument.activeLayer.artLayers) {
                var nowLayer = app.activeDocument.activeLayer;
                var nowSlice = JSON.parse(getSliceByActive());
                if (nowSlice == null) {
                    app.activeDocument.activeLayer = nowLayer;
                    if (app.activeDocument.activeLayer.artLayers.length > 0) {
                        var layerSetLast = app.activeDocument.activeLayer.artLayers[app.activeDocument.activeLayer.artLayers.length - 1];
                    } else {
                        var layerSetLast = app.activeDocument.activeLayer;
                    }
                    var bounds = getActiveLayerBounds();
                    if (inSize) {
                        var sizeOb = JSON.parse(inSize);
                        if (sizeOb.w == "") {
                            sizeOb.w = null
                        }
                        if (sizeOb.h == "") {
                            sizeOb.h = null
                        }
                        if (sizeOb.w == null) {
                            sizeOb.w = bounds.right - bounds.left
                        }
                        if (sizeOb.h == null) {
                            sizeOb.h = bounds.bottom - bounds.top
                        }
                        sizeOb.h = +sizeOb.h;
                        sizeOb.w = +sizeOb.w;
                        if (sizeOb.w != undefined || sizeOb.h != undefined) {
                            var cX = bounds.left + ((bounds.right - bounds.left) / 2);
                            var cY = bounds.top + ((bounds.bottom - bounds.top) / 2);
                            bounds.left = Math.round(cX - (sizeOb.w / 2));
                            bounds.right = bounds.left + sizeOb.w;
                            bounds.top = Math.round(cY - (sizeOb.h / 2));
                            bounds.bottom = bounds.top + sizeOb.h;
                        }
                    }
                    newShape("-slice-", nowLayer.id, {
                        left: bounds.left,
                        top: bounds.top,
                        right: bounds.right,
                        bottom: bounds.bottom
                    });
                    ki.layer.moveActiveLayerOrder((layerSetLast.itemIndex - 1) - Kinase.BKOffset());
                    return;
                }
            }
        } catch (e) {

        }
    }
}

function removeSlice_byId(id) {
    app.activeDocument.suspendHistory("移除自定义尺寸切图", "_do()");

    function _do() {
        var REG_SLICE_MARK = /^-slice-/;
        try {
            Kinase.layer.selectLayer_byID(id);
            if (app.activeDocument.activeLayer.artLayers) {
                var nowLayer = app.activeDocument.activeLayer;
                for (var i = app.activeDocument.activeLayer.artLayers.length - 1; i >= 0; i--) {
                    var isSlice = REG_SLICE_MARK.test(app.activeDocument.activeLayer.artLayers[i].name);
                    if (isSlice) {
                        app.activeDocument.activeLayer.artLayers[i].remove();
                        break;
                    }
                }
                if (app.activeDocument.activeLayer.artLayers.length == 1) {
                    if (("-h-" + app.activeDocument.activeLayer.artLayers[0].name) == app.activeDocument.activeLayer.name || ("-s-" + app.activeDocument.activeLayer.artLayers[0].name) == app.activeDocument.activeLayer.name) {
                        var idDlt = charIDToTypeID("Dlt ");
                        var desc712 = new ActionDescriptor();
                        var idnull = charIDToTypeID("null");
                        var ref207 = new ActionReference();
                        var idLyr = charIDToTypeID("Lyr ");
                        var idOrdn = charIDToTypeID("Ordn");
                        var idTrgt = charIDToTypeID("Trgt");
                        ref207.putEnumerated(idLyr, idOrdn, idTrgt);
                        desc712.putReference(idnull, ref207);
                        var iddeleteContained = stringIDToTypeID("deleteContained");
                        desc712.putBoolean(iddeleteContained, false);
                        executeAction(idDlt, desc712, DialogModes.NO);
                        app.activeDocument.activeLayer.name = "-h-" + app.activeDocument.activeLayer.name;
                    }
                }
            }
        } catch (e) {
            $.writeln("err:" + e);
        }
    }
}

function getActiveLayerBounds() {
    var orgBounds = app.activeDocument.activeLayer.bounds;
    var bounds = {
        left: orgBounds[0].as("px"),
        top: orgBounds[1].as("px"),
        right: orgBounds[2].as("px"),
        bottom: orgBounds[3].as("px")
    };
    return bounds;
}

function newShape(layerName, id, bounds) {
    $.writeln("bounds.top:" + bounds.top);
    var idMk = charIDToTypeID("Mk  ");
    var desc955 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref583 = new ActionReference();
    var idcontentLayer = stringIDToTypeID("contentLayer");
    ref583.putClass(idcontentLayer);
    desc955.putReference(idnull, ref583);
    var idUsng = charIDToTypeID("Usng");
    var desc956 = new ActionDescriptor();
    var idType = charIDToTypeID("Type");
    var desc957 = new ActionDescriptor();
    var idClr = charIDToTypeID("Clr ");
    var desc958 = new ActionDescriptor();
    var idRd = charIDToTypeID("Rd  ");
    desc958.putDouble(idRd, 22.000001);
    var idGrn = charIDToTypeID("Grn ");
    desc958.putDouble(idGrn, 208.412448);
    var idBl = charIDToTypeID("Bl  ");
    desc958.putDouble(idBl, 255);
    var idRGBC = charIDToTypeID("RGBC");
    desc957.putObject(idClr, idRGBC, desc958);
    var idsolidColorLayer = stringIDToTypeID("solidColorLayer");
    desc956.putObject(idType, idsolidColorLayer, desc957);
    var idShp = charIDToTypeID("Shp ");
    var desc959 = new ActionDescriptor();
    var idunitValueQuadVersion = stringIDToTypeID("unitValueQuadVersion");
    desc959.putInteger(idunitValueQuadVersion, 1);
    var idTop = charIDToTypeID("Top ");
    var idPxl = charIDToTypeID("#Pxl");
    desc959.putUnitDouble(idTop, idPxl, bounds.top);
    var idLeft = charIDToTypeID("Left");
    var idPxl = charIDToTypeID("#Pxl");
    desc959.putUnitDouble(idLeft, idPxl, bounds.left);
    var idBtom = charIDToTypeID("Btom");
    var idPxl = charIDToTypeID("#Pxl");
    desc959.putUnitDouble(idBtom, idPxl, bounds.bottom);
    var idRght = charIDToTypeID("Rght");
    var idPxl = charIDToTypeID("#Pxl");
    desc959.putUnitDouble(idRght, idPxl, bounds.right);
    var idtopRight = stringIDToTypeID("topRight");
    var idPxl = charIDToTypeID("#Pxl");
    desc959.putUnitDouble(idtopRight, idPxl, 0);
    var idtopLeft = stringIDToTypeID("topLeft");
    var idPxl = charIDToTypeID("#Pxl");
    desc959.putUnitDouble(idtopLeft, idPxl, 0);
    var idbottomLeft = stringIDToTypeID("bottomLeft");
    var idPxl = charIDToTypeID("#Pxl");
    desc959.putUnitDouble(idbottomLeft, idPxl, 0);
    var idbottomRight = stringIDToTypeID("bottomRight");
    var idPxl = charIDToTypeID("#Pxl");
    desc959.putUnitDouble(idbottomRight, idPxl, 0);
    var idRctn = charIDToTypeID("Rctn");
    desc956.putObject(idShp, idRctn, desc959);
    var idstrokeStyle = stringIDToTypeID("strokeStyle");
    var desc960 = new ActionDescriptor();
    var idstrokeStyleVersion = stringIDToTypeID("strokeStyleVersion");
    desc960.putInteger(idstrokeStyleVersion, 2);
    var idstrokeEnabled = stringIDToTypeID("strokeEnabled");
    desc960.putBoolean(idstrokeEnabled, true);
    var idfillEnabled = stringIDToTypeID("fillEnabled");
    desc960.putBoolean(idfillEnabled, true);
    var idstrokeStyleLineWidth = stringIDToTypeID("strokeStyleLineWidth");
    var idPxl = charIDToTypeID("#Pxl");
    desc960.putUnitDouble(idstrokeStyleLineWidth, idPxl, 1);
    var idstrokeStyleLineDashOffset = stringIDToTypeID("strokeStyleLineDashOffset");
    var idPnt = charIDToTypeID("#Pnt");
    desc960.putUnitDouble(idstrokeStyleLineDashOffset, idPnt, 0);
    var idstrokeStyleMiterLimit = stringIDToTypeID("strokeStyleMiterLimit");
    desc960.putDouble(idstrokeStyleMiterLimit, 100);
    var idstrokeStyleLineCapType = stringIDToTypeID("strokeStyleLineCapType");
    var idstrokeStyleLineCapType = stringIDToTypeID("strokeStyleLineCapType");
    var idstrokeStyleButtCap = stringIDToTypeID("strokeStyleButtCap");
    desc960.putEnumerated(idstrokeStyleLineCapType, idstrokeStyleLineCapType, idstrokeStyleButtCap);
    var idstrokeStyleLineJoinType = stringIDToTypeID("strokeStyleLineJoinType");
    var idstrokeStyleLineJoinType = stringIDToTypeID("strokeStyleLineJoinType");
    var idstrokeStyleMiterJoin = stringIDToTypeID("strokeStyleMiterJoin");
    desc960.putEnumerated(idstrokeStyleLineJoinType, idstrokeStyleLineJoinType, idstrokeStyleMiterJoin);
    var idstrokeStyleLineAlignment = stringIDToTypeID("strokeStyleLineAlignment");
    var idstrokeStyleLineAlignment = stringIDToTypeID("strokeStyleLineAlignment");
    var idstrokeStyleAlignOutside = stringIDToTypeID("strokeStyleAlignOutside");
    desc960.putEnumerated(idstrokeStyleLineAlignment, idstrokeStyleLineAlignment, idstrokeStyleAlignOutside);
    var idstrokeStyleScaleLock = stringIDToTypeID("strokeStyleScaleLock");
    desc960.putBoolean(idstrokeStyleScaleLock, false);
    var idstrokeStyleStrokeAdjust = stringIDToTypeID("strokeStyleStrokeAdjust");
    desc960.putBoolean(idstrokeStyleStrokeAdjust, false);
    var idstrokeStyleLineDashSet = stringIDToTypeID("strokeStyleLineDashSet");
    var list366 = new ActionList();
    var idNne = charIDToTypeID("#Nne");
    list366.putUnitDouble(idNne, 4);
    var idNne = charIDToTypeID("#Nne");
    list366.putUnitDouble(idNne, 2);
    desc960.putList(idstrokeStyleLineDashSet, list366);
    var idstrokeStyleBlendMode = stringIDToTypeID("strokeStyleBlendMode");
    var idBlnM = charIDToTypeID("BlnM");
    var idNrml = charIDToTypeID("Nrml");
    desc960.putEnumerated(idstrokeStyleBlendMode, idBlnM, idNrml);
    var idstrokeStyleOpacity = stringIDToTypeID("strokeStyleOpacity");
    var idPrc = charIDToTypeID("#Prc");
    desc960.putUnitDouble(idstrokeStyleOpacity, idPrc, 100);
    var idstrokeStyleContent = stringIDToTypeID("strokeStyleContent");
    var desc961 = new ActionDescriptor();
    var idClr = charIDToTypeID("Clr ");
    var desc962 = new ActionDescriptor();
    var idRd = charIDToTypeID("Rd  ");
    desc962.putDouble(idRd, 54.000001);
    var idGrn = charIDToTypeID("Grn ");
    desc962.putDouble(idGrn, 153.33074);
    var idBl = charIDToTypeID("Bl  ");
    desc962.putDouble(idBl, 255);
    var idRGBC = charIDToTypeID("RGBC");
    desc961.putObject(idClr, idRGBC, desc962);
    var idsolidColorLayer = stringIDToTypeID("solidColorLayer");
    desc960.putObject(idstrokeStyleContent, idsolidColorLayer, desc961);
    var idstrokeStyleResolution = stringIDToTypeID("strokeStyleResolution");
    desc960.putDouble(idstrokeStyleResolution, 72);
    var idstrokeStyle = stringIDToTypeID("strokeStyle");
    desc956.putObject(idstrokeStyle, idstrokeStyle, desc960);
    var idcontentLayer = stringIDToTypeID("contentLayer");
    desc955.putObject(idUsng, idcontentLayer, desc956);
    var idLyrI = charIDToTypeID("LyrI");
    desc955.putInteger(idLyrI, id);
    executeAction(idMk, desc955, DialogModes.NO);
    if (layerName != undefined) {
        Kinase.layer.setLayerName_byActive(layerName);
    }
    Kinase.layer.setAppearance_byActive({
        fillOpacity: 15
    });
    Kinase.layer.setLayerEditInfo({
        color: "blue"
    }, Kinase.REF_ActiveLayer);
}

function hideAllSlice() {
    hideIndexList = [];
    var REG_SLICE_MARK = /^-slice-/i;
    var maxIndex = Kinase.upperIndex();
    for (var i = Kinase.lowerIndex(); i <= maxIndex; i++) {
        var name = Kinase.layer.getLayerName_byItemIndex(i);
        if (REG_SLICE_MARK.test(name)) {
            Kinase.layer.setLayerEditInfo({
                visible: false
            }, Kinase.REF_ItemIndex, i + Kinase.BKOffset());
            hideIndexList.push(i);
        }
    }
}
var hideIndexList = [];

function hideAllSlice_hideNeed() {
    hideIndexList = [];
    var REG_SLICE_MARK = /^-slice-/i;
    var maxIndex = Kinase.upperIndex();
    for (var i = Kinase.lowerIndex(); i <= maxIndex; i++) {
        var name = Kinase.layer.getLayerName_byItemIndex(i);
        if (REG_SLICE_MARK.test(name)) {
            var thisVisible = false;
            var visible_raw = Kinase.layer.get_XXX_Objcet(Kinase.REF_ItemIndex, i, "visible");
            visible_raw = visible_raw.visible;
            if (visible_raw != undefined && visible_raw.value != undefined) {
                thisVisible = visible_raw.value;
            }
            if (thisVisible) {
                Kinase.layer.setLayerEditInfo({
                    visible: false
                }, Kinase.REF_ItemIndex, i + Kinase.BKOffset());
                hideIndexList.push(i);
            }
        }
    }
}

function hideAllSlice_revers() {
    for (var i = 0; i < hideIndexList.length; i += 1) {
        Kinase.layer.setLayerEditInfo({
            visible: true
        }, Kinase.REF_ItemIndex, hideIndexList[i] + Kinase.BKOffset());
    }
}

function showAllSlice() {
    var REG_SLICE_MARK = /^-slice-/i;
    var maxIndex = Kinase.upperIndex();
    for (var i = Kinase.lowerIndex(); i <= maxIndex; i++) {
        var name = Kinase.layer.getLayerName_byItemIndex(i);
        if (REG_SLICE_MARK.test(name)) {
            Kinase.layer.setLayerEditInfo({
                visible: true
            }, Kinase.REF_ItemIndex, i + Kinase.BKOffset());
        }
    }
    var t_end = new Date().getTime();
}

function hideAllSlice_dom() {
    var t_start_ = new Date().getTime();
    var REG_SLICE_MARK = /^-slice-/i;
    scan(app.activeDocument.layers);

    function scan(layers) {
        for (var i = 0; i < layers.length; i += 1) {
            if (layers[i].name) {
                var name = layers[i].name;
                if (REG_SLICE_MARK.test(name)) {
                    layers.visible = false;
                }
            }
            if (layers[i].layers) {
                scan(layers[i].layers);
            }
        }
    }
    var t_end = new Date().getTime();
    alert(t_end - t_start_);
}

function getArtboardColor_byActive() {
    return JSON.stringify(Kinase.layer.get_XXX_Objcet(Kinase.REF_ActiveLayer, null, "artboard", true));
}

function getArtboardColor_byId(id) {
    return JSON.stringify(Kinase.layer.get_XXX_Objcet(Kinase.REF_LayerID, id, "artboard", true));
}

function copyShapeSVG() {
    try {
        var idcopyLayerSVG = stringIDToTypeID("copyLayerSVG");
        var desc949 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref225 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        var idOrdn = charIDToTypeID("Ordn");
        var idTrgt = charIDToTypeID("Trgt");
        ref225.putEnumerated(idLyr, idOrdn, idTrgt);
        desc949.putReference(idnull, ref225);
        executeAction(idcopyLayerSVG, desc949, DialogModes.NO);
    } catch (e) {
        return null;
    }
    return 0;
}

function newArtboardFakerBk() {
    var idMk = charIDToTypeID("Mk  ");
    var desc46 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref18 = new ActionReference();
    var idcontentLayer = stringIDToTypeID("contentLayer");
    ref18.putClass(idcontentLayer);
    desc46.putReference(idnull, ref18);
    var idUsng = charIDToTypeID("Usng");
    var desc47 = new ActionDescriptor();
    var idNm = charIDToTypeID("Nm  ");
    desc47.putString(idNm, "画板背景");
    var idType = charIDToTypeID("Type");
    var desc48 = new ActionDescriptor();
    var idClr = charIDToTypeID("Clr ");
    var desc49 = new ActionDescriptor();
    var idRd = charIDToTypeID("Rd  ");
    desc49.putDouble(idRd, 255);
    var idGrn = charIDToTypeID("Grn ");
    desc49.putDouble(idGrn, 255);
    var idBl = charIDToTypeID("Bl  ");
    desc49.putDouble(idBl, 255);
    var idRGBC = charIDToTypeID("RGBC");
    desc48.putObject(idClr, idRGBC, desc49);
    var idsolidColorLayer = stringIDToTypeID("solidColorLayer");
    desc47.putObject(idType, idsolidColorLayer, desc48);
    var idcontentLayer = stringIDToTypeID("contentLayer");
    desc46.putObject(idUsng, idcontentLayer, desc47);
    executeAction(idMk, desc46, DialogModes.NO);
    var idMk = charIDToTypeID("Mk  ");
    var desc50 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref19 = new ActionReference();
    var idBckL = charIDToTypeID("BckL");
    ref19.putClass(idBckL);
    desc50.putReference(idnull, ref19);
    var idUsng = charIDToTypeID("Usng");
    var ref20 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref20.putEnumerated(idLyr, idOrdn, idTrgt);
    desc50.putReference(idUsng, ref20);
    executeAction(idMk, desc50, DialogModes.NO);
}

function getVersion() {
    if (!OLD.getMetadata("versionId")) {
        var id = parseInt(new Date().getTime());
        OLD.setMetadata("versionId", id);
        OLD.setMetadata("newId", 2);
        trySave();
    }
    var vid = OLD.getMetadata("versionId");
    return vid;
}

function getVersionOnly() {
    try {
        var mikuDate = 1535731199000;
        var f = new File(app.activeDocument.fullName);
        var nowCreatedDate = new Date(f.created);
        var timeCreatedDate = nowCreatedDate.getTime();
        if (timeCreatedDate > mikuDate) {
            return null;
        }
    } catch (e) {
        $.writeln(e);
        return null;
    }
    var vid = OLD.getMetadata("versionId");
    if (vid) {

    } else {
        return null;
    }
    return vid;
}

function checkPsdCreated() {
    try {
        var f = new File(app.activeDocument.fullName);
        var nowCreatedDate = new Date(f.created);
        if (!OLD.getMetadata("sign_crated_date")) {
            $.writeln("set lanhu_sign_crated_date:" + nowCreatedDate);
            OLD.setMetadata("sign_crated_date", nowCreatedDate);
        } else {
            var signDate = new Date(OLD.getMetadata("sign_crated_date"));
            $.writeln("signDate:" + signDate);
            $.writeln("nowCreatedDate:" + nowCreatedDate);
            $.writeln("signDate:" + signDate.getTime());
            $.writeln("nowCreatedDate:" + nowCreatedDate.getTime());
            if (signDate.getTime() != nowCreatedDate.getTime()) {
                $.writeln("reset resetVersion.");
                OLD.resetVersion();
            }
        }
    } catch (e) {
        $.writeln(e);
    }
}

function getPsdPath() {
    try {
        var filePath = app.activeDocument.fullName;
        return Folder.decode(filePath);
    } catch (e) {
        return "";
    }
}

function getPsdName() {
    try {
        var rePath = app.activeDocument.name;
        rePath = rePath.split(".");
        var len = rePath.length;
        var doneName = "";
        if (len > 1) {
            for (var i = 0; i < len - 1; i += 1) {
                doneName += rePath[i];
            }
        } else {
            doneName = rePath[0];
        }
        doneName = doneName.replace("\"", "'");
        var ddd = "{\"name\":\"" + doneName + "\", \"test\":\"1020\" }";
        return ddd;
    } catch (e) {
        return "";
    }
}

function getPsdPath() {
    try {
        return Folder.decode(app.activeDocument.fullName);
    } catch (e) {
        return "";
    }
}

function trySave() {
    try {
        app.activeDocument.path;
        app.activeDocument.save();
    } catch (e) {

    }
}

function hasPsdTimestamp() {
    if (!OLD.getMetadata("versionId")) {
        return false;
    } else {
        return true;
    }
}

function getLayerBounds_byActive() {
    try {
        var orgBounds = app.activeDocument.activeLayer.bounds;
        var bounds = {
            left: orgBounds[0].as("px"),
            top: orgBounds[1].as("px"),
            right: orgBounds[2].as("px"),
            bottom: orgBounds[3].as("px")
        };
        bounds = Kinase._rltb2xywh(bounds);
        return JSON.stringify(bounds);
    } catch (e) {

    }
    return JSON.stringify(null);
}

function removeVersion() {
    OLD.delMetadata("versionId");
    OLD.delMetadata("sign_crated_date");
    trySave();
    return;
}

function getLayerBounds_byId(id) {
    var re = Kinase.layer.getLayerBounds(Kinase.REF_LayerID, id, "bounds");
    return JSON.stringify(re);
}
NEW = {
    createSlice_byId: createSlice_byId,
    getSliceByActive: getSliceByActive,
    getSliceById: getSliceById,
    createSliceeFromLayerSet_byId: createSliceeFromLayerSet_byId,
    createSlice_byId: createSlice_byId,
    removeSlice_byId: removeSlice_byId,
    filterLayerID_byIsArtboard: filterLayerID_byIsArtboard,
    getPsDataNEW: getPsDataNEW,
    getPsRawData: getDocumentInfoJson,
    calcTimeForGetPsDateRaw: calcTimeForGetPsDateRaw,
    getAllArtboardIds: getAllArtboardIds,
    saveArtboardByLayerIDList: saveArtboardByLayerIDList,
    saveAssetByLayerIDList: saveAssetByLayerIDList,
    saveArtboardByLayerID: saveArtboardByLayerID,
    saveDocment: saveDocment,
    showAllSlice: showAllSlice,
    hideAllSlice: hideAllSlice,
    hideAllSlice_hideNeed: hideAllSlice_hideNeed,
    hideAllSlice_revers: hideAllSlice_revers,
    getArtboardColor_byId: getArtboardColor_byId,
    copyShapeSVG: copyShapeSVG,
    getVersion: getVersion,
    getPsdPath: getPsdPath,
    hasPsdTimestamp: hasPsdTimestamp,
    getLayerBounds_byActive: getLayerBounds_byActive,
    getLayerBounds_byId: getLayerBounds_byId,
    removeVersion: removeVersion,
    getPsdName: getPsdName,
    getPsdName2: getPsdName,
    getVersionOnly: getVersionOnly,
    hello: function() {
        alert("lanhuapp♥PS 18 个茄子.");
    }
};
var appVersion = app.version;
var appVersion = appVersion.split(".");
var appVersionIndex = ((appVersion[0] * 1000) + (appVersion[1] * 100) + (appVersion[2] * 10)) / 1000;
NEW.hostVersion = appVersionIndex;