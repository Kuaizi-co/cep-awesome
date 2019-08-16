var extendPath = "";
mu = new Muclease();
ki = Kinase;

function lang(str, postfix) {
    return str;
}
EnzJSX = {};
EnzJSX.
try = function(func) {
    try {
        func();
        return 0;
    } catch (e) {
        return e;
    }
};
EnzJSX.deletLayer = function(id) {
    if ((id instanceof Array) == false) {
        id = [id];
    }
    app.activeDocument.suspendHistory(lang("#删除图层"), "_func()");

    function _func() {
        var selectSave = EnzJSX.selectSave(true);
        EnzJSX.selectLoad(id);
        ki.layer.deleteLayer_ByActive();
        selectSave = EnzJSX.ArrayRemove(selectSave, id);
        EnzJSX.selectLoad(selectSave);
    }
};
EnzJSX.colorHexToPsCMYK = function(hex) {
    try {
        var c = new SolidColor();
        c.rgb.hexValue = hex.slice(1);
        var cob = {
            k: Math.round(c.cmyk.black),
            c: Math.round(c.cmyk.cyan),
            m: Math.round(c.cmyk.magenta),
            y: Math.round(c.cmyk.yellow)
        };
        return JSON.stringify(cob);
    } catch (e) {
        return "";
    }
};
EnzJSX.getDocumentBaseInfo_byActive = function() {
    var ob = Kinase.document.getDocumentBaseInfo_byActive();
    return JSON.stringify(ob);
};
EnzJSX.getLayerId_byName = function(layerName) {
    _jsx("ki.layer.getAllLayersItemIndex();");
};
EnzJSX.getLayerType_byID = function(layerId) {
    var type = ki.layer.getLayerType(Kinase.REF_LayerID, layerId);
    return JSON.stringify(type);
};
EnzJSX.getAllLayersList = function(retrunRaw) {
    var layersList = ki.layer.getAllLayerList_quick();
    if (retrunRaw == true) {
        return layersList;
    } else {
        return JSON.stringify(layersList);
    }
};
EnzJSX.creatLayer = function(layerName) {
    app.activeDocument.suspendHistory(lang("#新建图层"), "_func()");

    function _func() {
        ki.layer.creatNewLayer_ByActive();
        if (layerName !== undefined) {
            ki.layer.setLayerName_byActive(layerName);
        }
    }
    return ki.layer.getLayerIdByActive();
};
EnzJSX.getAllLayersName = function(retrunRaw) {
    var names = [];
    var itemIndexs = ki.layer.getAllLayersItemIndex();
    for (var i = 0; i < itemIndexs.length; i += 1) {
        names.push(ki.layer.getLayerName_byItemIndex(itemIndexs[i]));
    }
    if (retrunRaw == true) {
        return names;
    }
    return JSON.stringify(names);
};
EnzJSX.getAllLayersID = function(retrunRaw) {
    var ids = [];
    var itemIndexs = ki.layer.getAllLayersItemIndex();
    for (var i = 0; i < itemIndexs.length; i += 1) {
        ids.push(ki.layer.getLayerIdByItemIndex(itemIndexs[i]));
    }
    if (retrunRaw == true) {
        return ids;
    }
    return JSON.stringify(ids);
};
EnzJSX.getAllLayersItemIndex = function(retrunRaw) {
    var itemIndexs = ki.layer.getAllLayersItemIndex();
    if (retrunRaw == true) {
        itemIndexs;
    } else {
        return JSON.stringify(itemIndexs);
    }
};
EnzJSX.checkLayerExist = function(layerHandle, handleType, scanAll, returnRaw, giveLayerList, equalFunc) {
    if (giveLayerList != undefined) {
        var layerList = giveLayerList;
    } else {
        var layerList = EnzJSX.getAllLayersList(true);
    }
    if (equalFunc != undefined) {
        var _equal = equalFunc;
    } else {
        function _equal(value1, value2) {
            return value1 == value2;
        }
    }
    if (handleType == 0) {
        handleType = "id";
    } else if (handleType == 1) {
        handleType = "itemIndex";
    } else {
        if (handleType == 2) {
            handleType = "name";
        }
    }
    var allResult = [];
    for (var i = 0; i < layerList.length; i += 1) {
        if (_equal(layerList[i][handleType], layerHandle)) {
            if (scanAll == true) {
                allResult.push(layerList[i]);
            } else {
                if (returnRaw) {
                    return [layerList[i]];
                } else {
                    return JSON.stringify([layerList[i]]);
                }
            }
        }
    }
    if (scanAll == true) {
        if (allResult.length == 0) {
            return null;
        } else {
            if (returnRaw) {
                return allResult;
            } else {
                return JSON.stringify(allResult);
            }
        }
    } else {
        return null;
    }
};
EnzJSX.selectSave = function(retrunRaw) {
    var layerIDs = ki.layer.selectSave();
    if (retrunRaw) {
        return layerIDs;
    } else {
        return JSON.stringify(layerIDs);
    }
};
EnzJSX.selectLoad = function(layerIDs) {
    ki.layer.selectLoad(layerIDs);
};
EnzJSX.getSelectLayerItemIndex = function() {
    var itemIndexs = ki.layer.getTargetLayersItemIndex();
    return JSON.stringify(itemIndexs);
};
EnzJSX.getSelectLayerID = function() {
    var ids = ki.layer.getTargetLayersID();
    return JSON.stringify(ids);
};
EnzJSX.getSelectLayerName = function() {
    var names = [];
    var itemIndexs = ki.layer.getTargetLayersItemIndex();
    for (var i = 0; i < itemIndexs.length; i += 1) {
        names.push(ki.layer.getLayerName_byItemIndex(itemIndexs[i]));
    }
    return JSON.stringify(names);
};
EnzJSX.getSelectLayerArray = function(debarDataLayer) {
    var layersList = [];
    var itemIndexs = ki.layer.getTargetLayersItemIndex();
    for (var i = 0; i < itemIndexs.length; i += 1) {
        var layer = {
            name: ki.layer.getLayerName_byItemIndex(itemIndexs[i]),
            id: ki.layer.getLayerIdByItemIndex(itemIndexs[i]),
            itemIndex: itemIndexs[i],
            type: ki.layer.getLayerType(Kinase.REF_ItemIndex, itemIndexs[i] + Kinase.BKOffset())
        };
        if (layer.name === "__UI-DNA__" || layer.name === "_DNA_DATA_" || layer.name === "_ui-dna.nullice.com_") {
            continue;
        }
        layersList.push(layer);
    }
    return JSON.stringify(layersList);
};
EnzJSX.ArrayRemove = function(array, removeArray) {
    for (var i = 0; i < array.length; i += 1) {
        for (var z = 0; z < removeArray.length; z += 1) {
            if (array[i] == removeArray[z]) {
                array.splice(i, 1);
                i--;
                break;
            }
        }
    }
    return array;
};
EnzJSX.writeJSON = function(rootName, itemName, json) {
    app.activeDocument.suspendHistory(lang("#更新数据"), "_func()");

    function _func() {
        var select0 = EnzJSX.selectSave(true);
        var rootId = 0;
        var isOpen = false;
        var re = EnzJSX.checkLayerExist(rootName, "name", false, true);
        if (re == undefined) {
            var upperIndex = Kinase.upperIndex();
            if (Kinase.layer.isArtBoard(Kinase.REF_ItemIndex, upperIndex + Kinase.BKOffset())) {
                ki.layer.selectLayer_byItemIndex(upperIndex - 1);
            } else {
                ki.layer.selectLayer_byItemIndex(upperIndex);
            }
            ki.layer.creatNewLayerSet_ByActive(rootName);
            ki.layer.setAppearance_byActive({
                fillOpacity: 50,
                opacity: 50,
                visible: false
            });
            rootId = ki.layer.getLayerIdByActive();
            isOpen = true;
            var result = ki.document.hasArtBoard(true);
            if (result.hasArtBoard) {
                ki.layer.moveActiveLayerOrder(ki.layer.getItemIndexBylayerID(result.aArtBoardId) - 1);
                ki.layer.selectLayer_byItemIndex(ki.layer.getItemIndexBylayerID(result.aArtBoardId) - 1);
            }
        } else {
            rootId = re[0].id;
        }
        var re = EnzJSX.checkLayerExist("_ui-dna.nullice.com_", "name", false, true);
        if (re == undefined) {
            ki.layer.selectLayer_byItemIndex(ki.layer.getItemIndexBylayerID(rootId));
            ki.layer.creatNewTextLayer_ByActive("_ui-dna.nullice.com_", 100, 100, "UI-DNA 数据保存图层，请勿修改、删除");
            ki.layer.setAppearance_byActive({
                fillOpacity: 100,
                opacity: 100,
                visible: false
            });
            ki.layer.moveActiveLayerOrder(ki.layer.getItemIndexBylayerID(rootId) - 1);
            ki.layer.selectLayer_byItemIndex(ki.layer.getItemIndexBylayerID(rootId));
        }
        var re = EnzJSX.checkLayerExist(itemName, "name", false, true);
        var hasSameNameElse = false;
        if (re != undefined) {
            hasSameNameElse = ki.layer.getLayerIdByItemIndex(ki.layer.getParentLayerItemIndex_byItemIndex(ki.layer.getItemIndexBylayerID(re[0].id))) != rootId;
        }
        if (re == undefined || hasSameNameElse) {
            ki.layer.selectLayer_byItemIndex(ki.layer.getItemIndexBylayerID(rootId));
            ki.layer.creatNewTextLayer_ByActive(itemName, 50, 100, json);
            ki.layer.setAppearance_byActive({
                fillOpacity: 50,
                opacity: 50,
                visible: false
            });
            isOpen = true;
            if (isOpen) {
                ki.layer.selectLayer_byItemIndex(ki.layer.getItemIndexBylayerID(rootId));
                ki.layer.setAppearance_byActive({
                    fillOpacity: 50,
                    opacity: 50,
                    visible: false
                });
                ki.layer.selectLayer_byItemIndex(ki.layer.getItemIndexBylayerID(rootId));
                ki.layer.closeLayerSet_byActive();
                ki.layer.moveActiveLayerOrder(Kinase.upperIndex());
            }
            EnzJSX.selectLoad(select0);
        } else {
            ki.layer.setLayerText_Quick(json, Kinase.REF_LayerID, re[0].id);
        }
    }
};
EnzJSX.readJSON = function(rootName, itemName) {
    var re = EnzJSX.checkLayerExist(rootName, "name", false, true);
    if (re == undefined) {
        return null;
    }
    var rootLayerList = ki.layer.getChildLayerList_byItemIndex(re[0].itemIndex);
    var re = EnzJSX.checkLayerExist(itemName, "name", false, true, rootLayerList);
    if (re != undefined) {
        var layer = ki.layer.getLayerDOMObject_byItemIndex(re[0].itemIndex);
    } else {
        return null;
    }
    return layer.textItem.contents;
};
EnzJSX.getLayerInfo_position_byId = function(id) {
    return JSON.stringify(ki.layer.getLayerBounds(Kinase.REF_LayerID, id));
};
EnzJSX.setLayerInfo_position_byId = function(boundsInfo, id, doSelect) {
    if (doSelect) {
        ki.layer.selectLayer_byID(id);
    }
    return ki.layer.setLayerBounds(boundsInfo, Kinase.REF_LayerID, id, true);
};
EnzJSX.getLayerInfo_text_byId = function(id) {
    return JSON.stringify(ki.layer.getLayerTextInfo(Kinase.REF_LayerID, id));
};
EnzJSX.setLayerInfo_text_byId = function(textInfo, id, doSelect) {
    if (doSelect) {
        ki.layer.selectLayer_byID(id);
    }
    if (id === -1020) {
        return ki.layer.setLayerTextInfo(textInfo, Kinase.REF_ActiveLayer, null);
    } else {
        return ki.layer.setLayerTextInfo(textInfo, Kinase.REF_LayerID, id);
    }
};
EnzJSX.getLayerInfo_shape_byId = function(id) {
    var strokeStyle = ki.layer.getStrokeStyle(Kinase.REF_LayerID, id);
    var radian = ki.layer.getLayerRadian(Kinase.REF_LayerID, id);
    var shapeSize = ki.layer.getLayerShapeSize(Kinase.REF_LayerID, id);
    var shapeInfo = {
        strokeColor: {
            r: strokeStyle.strokeColor.r,
            g: strokeStyle.strokeColor.g,
            b: strokeStyle.strokeColor.b
        },
        strokeColorEnabled: strokeStyle.strokeColor.enabled,
        fillColor: {
            r: strokeStyle.fillColor.r,
            g: strokeStyle.fillColor.g,
            b: strokeStyle.fillColor.b
        },
        fillColorEnabled: strokeStyle.fillColor.enabled,
        lineWidth: strokeStyle.lineWidth,
        dashSet: strokeStyle.dashSet,
        lineAlignment: strokeStyle.lineAlignment,
        lineCapType: strokeStyle.lineCapType,
        lineJoinType: strokeStyle.lineJoinType,
        shapeSize: shapeSize,
        radian: radian
    };
    return JSON.stringify(shapeInfo);
};
EnzJSX.setLayerInfo_shape_byId = function(shapeInfo, id, doSelect) {
    if (doSelect) {
        ki.layer.selectLayer_byID(id);
    }
    try {
        var strokeStyle = {
            strokeColor: {
                r: null,
                g: null,
                b: null,
                enabled: null
            },
            fillColor: {
                r: null,
                g: null,
                b: null,
                enabled: null
            },
            lineWidth: EnzJSX._set(shapeInfo.lineWidth),
            dashSet: EnzJSX._set(shapeInfo.dashSet),
            lineAlignment: EnzJSX._set(shapeInfo.lineAlignment),
            lineCapType: EnzJSX._set(shapeInfo.lineCapType),
            lineJoinType: EnzJSX._set(shapeInfo.lineJoinType)
        };
        if (shapeInfo.strokeColorEnabled != undefined) {
            strokeStyle.strokeColor.enabled = shapeInfo.strokeColorEnabled;
        }
        if (shapeInfo.fillColorEnabled != undefined) {
            strokeStyle.fillColor.enabled = shapeInfo.fillColorEnabled;
        }
        if (shapeInfo.strokeColor != undefined) {
            strokeStyle.strokeColor.r = shapeInfo.strokeColor.r;
            strokeStyle.strokeColor.g = shapeInfo.strokeColor.g;
            strokeStyle.strokeColor.b = shapeInfo.strokeColor.b;
        }
        if (shapeInfo.fillColor != undefined) {
            strokeStyle.fillColor.r = shapeInfo.fillColor.r;
            strokeStyle.fillColor.g = shapeInfo.fillColor.g;
            strokeStyle.fillColor.b = shapeInfo.fillColor.b;
        }
        if (shapeInfo.dashSet != undefined) {
            if (shapeInfo.dashSet.split != undefined) {
                strokeStyle.dashSet = shapeInfo.dashSet.split(",");
            }
        }
        $.writeln(JSON.stringify(shapeInfo));
        $.writeln(JSON.stringify(strokeStyle));
        ki.layer.setStrokeStyle_byActive(strokeStyle);
    } catch (e) {
        return e;
    }
    try {
        if (shapeInfo.radian != undefined) {
            var radian = shapeInfo.radian;
            ki.layer.setLayerRadian_byActive(radian);
        }
    } catch (e) {
        return e;
    }
    try {
        if (shapeInfo.shapeSize != undefined) {
            var shapeSize = shapeInfo.shapeSize;
            ki.layer.setLayerShapeSize_byActive(shapeSize);
        }
    } catch (e) {
        return e;
    }
};
EnzJSX.getLayerInfo_smartObject_byId = function(id) {
    var smartInfo = Kinase.layer.getLayerSmartInfo(Kinase.REF_LayerID, id);
    return JSON.stringify(smartInfo);
};
EnzJSX.setLayerInfo_smartObject_byId = function(smartObject, id, doSelect) {
    var newId = null;
    app.activeDocument.suspendHistory("设置智能对象", "func()");

    function func() {
        ki.layer.selectLayer_byID(id);
        var targetLayerType = Kinase.layer.getLayerType(Kinase.REF_LayerID, id);
        var oldBounds = Kinase.layer.getLayerBounds(Kinase.REF_LayerID, id);
        if (targetLayerType.typeName != "smartObject") {
            Kinase.layer.setLayerToSmart_ByActive();
            newId = Kinase.layer.getLayerIdByActive();
        }
        Kinase.layer.setLayerSmartInfo_ByActive(smartObject);
        Kinase.layer.setLayerBounds_byActive(oldBounds);
    }
    if (newId != undefined) {
        return newId;
    } else {
        return id;
    }
};
EnzJSX.getLayerInfo_quickEffect_byId = function(id, retrunRaw) {
    var effectInfo = {
        dropShadow: {
            enable: null,
            color: {
                r: null,
                g: null,
                b: null,
                $hex: null
            },
            opacity: null,
            x: null,
            y: null,
            blur: null,
            spread: null
        },
        raw: null
    };
    var effectOb = Kinase.layer.getLayerEffectsObject(Kinase.REF_LayerID, id);
    if (effectOb != undefined) {
        effectInfo.raw = effectOb;
        var dropShadow = Kinase.layer.getEffectsList_universal(effectOb, "dropShadow");
        if (dropShadow != undefined) {
            if (dropShadow.length > 0) {
                dropShadow = dropShadow[0];
                var cssShadow = EnzJSX._psShadow2CssShadow(dropShadow.localLightingAngle, dropShadow.distance, dropShadow.blur, dropShadow.chokeMatte);
                effectInfo.dropShadow.x = cssShadow.x;
                effectInfo.dropShadow.y = cssShadow.y;
                effectInfo.dropShadow.blur = cssShadow.blur;
                effectInfo.dropShadow.spread = cssShadow.spread;
                effectInfo.dropShadow.enable = dropShadow.enabled;
                effectInfo.dropShadow.opacity = dropShadow.opacity;
                effectInfo.dropShadow.color.r = dropShadow.color.red;
                effectInfo.dropShadow.color.g = dropShadow.color.grain;
                effectInfo.dropShadow.color.b = dropShadow.color.blue;
            } else {
                effectInfo.dropShadow.enabled = false;
            }
        }
    }
    if (retrunRaw) {
        return effectInfo;
    } else {
        return JSON.stringify(effectInfo);
    }
};
EnzJSX._psShadow2CssShadow = function(lightingAngle, distance, blur, chokeMatte) {
    var css = {
        x: 0,
        y: 0,
        blur: 0,
        spread: 0
    };
    var angle = lightingAngle * (Math.PI / 180);
    css.x = floatClean(-Math.cos(angle) * distance);
    css.y = floatClean(Math.sin(angle) * distance);
    css.blur = blur;
    css.spread = chokeMatte;

    function floatClean(x) {
        return Math.round(x * 1000) / 1000;
    }
    return css;
};
EnzJSX._psCssShadow2Shadow = function(x, y, blur, spread) {
    if (x == 0) {
        var angle = (Math.PI / 180) * 90;
        var distance = y;
    } else if (y == 0) {
        var angle = (Math.PI / 180) * -180;
        var distance = x;
    } else {
        var angle = Math.atan(-y / x);
        var distance = y / Math.sin(angle);
    }
    var lightingAngle = angle / (Math.PI / 180);
    if (distance < 0) {
        distance = -distance;
        lightingAngle = lightingAngle - 180;
    }
    if (lightingAngle > 180) {
        lightingAngle = lightingAngle - 360;
    }
    if (lightingAngle < -180) {
        lightingAngle = 360 + lightingAngle;
    }
    var psShadow = {
        lightingAngle: Math.round(lightingAngle),
        distance: Math.round(distance),
        blur: blur,
        chokeMatte: spread
    };
    return psShadow;
};
EnzJSX.setLayerInfo_quickEffect_byId = function(quickEffect, id, doSelect) {
    function _checkEnableQuickEffect(quickEffect) {
        var list = [];
        for (var name in quickEffect) {
            list.push(name);
        }
        if (list.length < 1) {
            return false;
        } else if (list.length == 1 && list[0] == "dropShadow") {
            if (isEmptyObject(quickEffect.dropShadow)) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }

        function isEmptyObject(obj) {
            for (var name in obj) {
                return false;
            }
            return true;
        }
    }
    if (_checkEnableQuickEffect(quickEffect) == false) {
        return;
    }
    if (doSelect) {
        ki.layer.selectLayer_byID(id);
    }
    if (quickEffect.copyEffect_All != undefined) {
        try {
            if (typeof quickEffect.copyEffect_All.value === "object") {
                var obALL = quickEffect.copyEffect_All;
            } else {
                var obALL = JSON.parse(quickEffect.copyEffect_All);
            }
            if (obALL.value != undefined) {
                Kinase.layer.setLayerEffectsObject(obALL, Kinase.REF_LayerID, id);
            }
        } catch (e) {

        }
    }
    var Old_quickEffect = this.getLayerInfo_quickEffect_byId(id, true);
    var effectObject = Old_quickEffect.raw;
    if (quickEffect != undefined) {
        function _checkEnableDropShadow(obj) {
            var list = [];
            for (var name in obj) {
                list.push(name);
            }
            if (list.length < 1) {
                return false;
            } else if (list.length == 1 && list[0] == "color") {
                if (obj[list[0]].r != undefined || obj[list[0]].$hex != undefined) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
        if (quickEffect.dropShadow != undefined && _checkEnableDropShadow(quickEffect.dropShadow)) {
            var Ob_dropShadow = {
                enabled: true,
                color: {
                    r: null,
                    g: null,
                    b: null
                },
                opacity: null,
                lightingAngle: null,
                useGlobalAngle: false,
                distance: null,
                chokeMatte: null,
                blur: null
            };
            var dropShadowList = Kinase.layer.getEffectsList_dropShadow(effectObject);
            if (dropShadowList == undefined || dropShadowList.length < 1) {
                dropShadowList = [Ob_dropShadow];
            }
            if (quickEffect.dropShadow.x != undefined) {
                var _x = +quickEffect.dropShadow.x;
            } else {
                var _x = Old_quickEffect.dropShadow.x;
            }
            if (quickEffect.dropShadow.y != undefined) {
                var _y = +quickEffect.dropShadow.y;
            } else {
                var _y = Old_quickEffect.dropShadow.y;
            }
            var _ss = this._psCssShadow2Shadow(+_x, +_y);
            var _distance = _ss.distance || 0;
            var _lightingAngle = _ss.lightingAngle || 0;
            dropShadowList[0].localLightingAngle = _lightingAngle;
            dropShadowList[0].distance = _distance;
            if (quickEffect.dropShadow.color != undefined) {
                dropShadowList[0].color.red = quickEffect.dropShadow.color.r;
                dropShadowList[0].color.grain = quickEffect.dropShadow.color.g;
                dropShadowList[0].color.blue = quickEffect.dropShadow.color.b;
            } else {
                dropShadowList[0].color.red = Old_quickEffect.dropShadow.color.r;
                dropShadowList[0].color.grain = Old_quickEffect.dropShadow.color.g;
                dropShadowList[0].color.blue = Old_quickEffect.dropShadow.color.b;
            }
            if (quickEffect.dropShadow.opacity != undefined) {
                dropShadowList[0].opacity = +quickEffect.dropShadow.opacity;
            } else {
                dropShadowList[0].opacity = Old_quickEffect.dropShadow.opacity;
            }
            if (quickEffect.dropShadow.spread != undefined) {
                dropShadowList[0].chokeMatte = +quickEffect.dropShadow.spread;
            } else {
                dropShadowList[0].chokeMatte = Old_quickEffect.dropShadow.chokeMatte;
            }
            if (quickEffect.dropShadow.blur != undefined) {
                dropShadowList[0].blur = +quickEffect.dropShadow.blur;
            } else {
                dropShadowList[0].blur = Old_quickEffect.dropShadow.blur;
            }
            if (effectObject == undefined) {
                effectObject = {
                    noEffects: true
                };
            }
            effectObject = Kinase.layer.putEffectsList_universal(effectObject, "dropShadow", dropShadowList);
        }
    }
    Kinase.layer.setLayerEffectsObject(effectObject, Kinase.REF_LayerID, id);
    return;
};
EnzJSX.getLayerInfo_more_byId = function(id, retrunRaw) {
    var moreInfo = {
        layerName: null,
        $alias: null,
        $nameGroup0: null,
        $nameGroup1: null,
        $nameGroup2: null,
        $nameGroup3: null,
        $nameGroup4: null,
        $nameGroup5: null,
        $nameGroup6: null,
        $nameGroup7: null,
        $nameGroup8: null,
        $nameGroup9: null,
        $class: null,
        $tags: null,
        $note1: null,
        $note2: null,
        $note3: null,
        layerColor: null,
        visible: null,
        mode: null,
        opacity: null,
        fillOpacity: null
    };
    var appearanceInfo = Kinase.layer.getAppearance(Kinase.REF_LayerID, id);
    moreInfo.fillOpacity = appearanceInfo.fillOpacity;
    moreInfo.opacity = appearanceInfo.opacity;
    moreInfo.visible = appearanceInfo.visible;
    moreInfo.mode = appearanceInfo.mode;
    var name = Kinase.layer.getLayerName_byID(id);
    moreInfo.layerName = name;
    var editInfo = Kinase.layer.getLayerEditInfo(Kinase.REF_LayerID, id);
    moreInfo.layerColor = editInfo.color;
    if (retrunRaw) {
        return moreInfo;
    } else {
        return JSON.stringify(moreInfo);
    }
};
EnzJSX.setLayerInfo_more_byId = function(moreInfo, id, doSelect) {
    if (doSelect) {
        ki.layer.selectLayer_byID(id);
    }
    var appearanceInfo = {};
    var setAppearance = false;
    if (moreInfo.fillOpacity != undefined) {
        appearanceInfo.fillOpacity = moreInfo.fillOpacity;
        setAppearance = true;
    }
    if (moreInfo.opacity != undefined) {
        appearanceInfo.opacity = moreInfo.opacity;
        setAppearance = true;
    }
    if (moreInfo.visible != undefined) {
        appearanceInfo.visible = moreInfo.visible;
        setAppearance = true;
    }
    if (moreInfo.mode != undefined) {
        appearanceInfo.mode = moreInfo.mode;
        setAppearance = true;
    }
    var setName = false;
    if (moreInfo.layerName != undefined) {
        setName = true;
    }
    if (setAppearance || setName || moreInfo.layerColor != undefined) {
        Kinase.layer.selectLayer_byID(id);
    }
    if (setAppearance) {
        Kinase.layer.setAppearance_byActive(appearanceInfo);
    }
    if (setName) {
        Kinase.layer.setLayerName_byActive(moreInfo.layerName);
    }
    if (moreInfo.layerColor != undefined) {
        Kinase.layer.setLayerEditInfo({
            color: moreInfo.layerColor
        }, Kinase.REF_ActiveLayer, null);
    }
};
EnzJSX.EnhancerKeys = {
    keys: {
        parent: ["parent", "父", "親"],
        child: ["child", "子"],
        sibling: ["sibling", "near", "mate", "邻", "同级", "隣"],
        id: ["id"]
    },
    infoKeys: {
        x: ["x", "左"],
        y: ["y", "顶"],
        h: ["h", "高"],
        w: ["x", "宽"]
    }
};
EnzJSX.evalEnhancer = function(enhancer, thisId) {
    if (enhancer == undefined) {
        return;
    }
    if (enhancer[0] == "$" && enhancer[0] == "￥") {
        var keys = EnzJSX.EnhancerKeys.keys;
        enhancer = enhancer.slice(1);
        var nodeList = enhancer.split(".");
        var getMode = null;
        if (nodeList.length > 0) {
            var _inArray = EnzJSX._inArray;
            if (_inArray(nodeList[0], keys.parent)) {
                try {
                    var targetId = ki.layer.getParentLayerId_byItemIndex(ki.layer.getItemIndexBylayerID(thisId));
                    getMode = "layerProperty";
                } catch (e) {
                    getMode = null;
                }
            }
            var result = _inArray(nodeList[0], keys.child, true);
            if (result != false) {
                if (result[0] == "_") {
                    result = "-" + result.slice(1);
                }
                try {
                    var idList = ki.layer.getChildLayerID_byItemIndex(ki.layer.getItemIndexBylayerID(thisId));
                    if (idList != undefined && idList.length > 0) {
                        if (result.length == 0 || +result != result) {
                            var targetId = idList[0];
                        } else {
                            if (result > 0) {
                                var targetId = idList[result];
                            } else {
                                var targetId = idList[idList.length + result];
                            }
                        }
                        if (targetId != undefined) {
                            getMode = "layerProperty";
                        }
                    }
                } catch (e) {
                    getMode = null;
                }
            }
            var result = _inArray(nodeList[0], keys.child, true);
            if (result != false) {
                if (result[0] == "_") {
                    result = "-" + result.slice(1);
                }
                try {
                    var idList = ki.layer.getChildLayerID_byItemIndex(ki.layer.getItemIndexBylayerID(thisId));
                    if (idList != undefined && idList.length > 0) {
                        if (result.length == 0 || +result != result) {
                            var targetId = idList[0];
                        } else {
                            if (result > 0) {
                                var targetId = idList[result];
                            } else {
                                var targetId = idList[idList.length + result];
                            }
                        }
                        if (targetId != undefined) {
                            getMode = "layerProperty";
                        }
                    }
                } catch (e) {
                    getMode = null;
                }
            }
            var result = _inArray(nodeList[0], keys.sibling, true);
            if (result != false) {
                if (result[0] == "_") {
                    result = "-" + result.slice(1);
                }
                try {
                    var targetId = ki.layer.getLayerIdByItemIndex(ki.layer.getItemIndexBylayerID(thisId) + +result);
                    if (targetId != undefined) {
                        getMode = "layerProperty";
                    }
                } catch (e) {
                    getMode = null;
                }
            }
        }
        if (getMode == "layerProperty") {
            if (nodeList.length > 2) {
                if (nodeList[1] = "position") {
                    var info = ki.layer.getLayerBounds(Kinase.REF_LayerID, targetId);
                    if (info[nodeList[2]] != undefined) {
                        var re = info[nodeList[2]];
                        return re;
                    }
                }
            }
        }
    }
    return "";
};
EnzJSX.DNAExpress = function(mRNA_Layers_json) {
    var log = "";
    var layers = mRNA_Layers_json;
    app.activeDocument.suspendHistory("UI-DNA 渲染", "_func()");

    function _func() {
        var save = EnzJSX.selectSave(true);
        var queryCache = {};
        var _inArray = EnzJSX._inArray;
        for (var layerId in layers) {
            if (layers[layerId].position != undefined) {
                var _info_position = {};
                var _do_position = false;
                for (var _x in layers[layerId].position) {
                    if (_inArray(_x, ["x", "y", "h", "w"])) {
                        _info_position[_x] = layers[layerId].position[_x];
                        _do_position = true;
                    } else {
                        if (_x == "$anchor") {
                            _info_position.centerState = layers[layerId].position[_x];
                            _do_position = true;
                        }
                    }
                }
                if (_do_position) {
                    ki.layer.selectLayer_byID(layerId);
                    EnzJSX.setLayerInfo_position_byId(_info_position, layerId);
                }
            }
            if (layers[layerId].text != undefined) {
                var _info_text = {};
                var _do_text = false;
                for (var _x in layers[layerId].text) {
                    if (_inArray(_x, ["bold", "italic"])) {
                        _info_text[_x] = layers[layerId].text[_x] == "true";
                        _do_text = true;
                    } else {
                        _info_text[_x] = layers[layerId].text[_x];
                        _do_text = true;
                    }
                }
                if (_do_text) {
                    ki.layer.selectLayer_byID(layerId);
                    EnzJSX.setLayerInfo_text_byId(_info_text, layerId);
                }
            }
            if (layers[layerId].shape != undefined) {
                var _info_shape = {};
                var _do_shape = false;
                for (var _x in layers[layerId].shape) {
                    if (_inArray(_x, ["strokeColorEnabled", "fillColorEnabled"])) {
                        _info_shape[_x] = layers[layerId].shape[_x] == "true";
                        _do_shape = true;
                    } else {
                        _info_shape[_x] = layers[layerId].shape[_x];
                        _do_shape = true;
                    }
                }
                if (_do_shape) {
                    ki.layer.selectLayer_byID(layerId);
                    EnzJSX.setLayerInfo_shape_byId(_info_shape, layerId);
                }
            }
            if (layers[layerId].smartObject != undefined) {
                var _info_smartObject = {};
                var _do_smartObject = false;
                for (var _x in layers[layerId].shape) {
                    _info_smartObject[_x] = layers[layerId].smartObject[_x];
                    _do_smartObject = true;
                    if (_x == "link") {
                        _info_smartObject.linked = true;
                    }
                }
                if (_do_smartObject) {
                    ki.layer.selectLayer_byID(layerId);
                    EnzJSX.setLayerInfo_smartObject_byId(_info_smartObject, layerId);
                }
            }
            if (layers[layerId].quickEffect != undefined) {
                var _info_quickEffect = {};
                var _do_quickEffect = false;
                for (var _x in layers[layerId].quickEffect) {
                    _info_quickEffect[_x] = layers[layerId].quickEffect[_x];
                    _do_quickEffect = true;
                }
                if (_do_quickEffect) {
                    ki.layer.selectLayer_byID(layerId);
                    EnzJSX.setLayerInfo_quickEffect_byId(_info_quickEffect, layerId);
                }
            }
            if (layers[layerId].more != undefined) {
                var _info_more = {};
                var _do_more = false;
                for (var _x in layers[layerId].more) {
                    if (_inArray(_x, ["visible"])) {
                        _info_more[_x] = layers[layerId].more[_x] == "true";
                        _do_more = true;
                    } else {
                        _info_more[_x] = layers[layerId].more[_x];
                        _do_more = true;
                    }
                }
                if (_do_more) {
                    ki.layer.selectLayer_byID(layerId);
                    EnzJSX.setLayerInfo_more_byId(_info_more, layerId);
                }
            }
        }
        EnzJSX.selectLoad(save);
    }
};
EnzJSX.jsxFunctionReturnJson = function(jsxFunction) {
    if (jsxFunction != undefined) {
        return JSON.stringify(jsxFunction());
    }
};
EnzJSX._inArray = function(name, array, prefix) {
    for (var x in array) {
        if (prefix) {
            if (name.slice(0, array[x].length) == array[x]) {
                return name.slice(array[x].length);
            }
        } else {
            if (name == array[x]) {
                return true;
            }
        }
    }
    return false;
};
EnzJSX._set = function(value, defaultValue) {
    if (value != undefined) {
        return value;
    } else {
        if (defaultValue != undefined) {
            return defaultValue;
        } else {
            return null;
        }
    }
};