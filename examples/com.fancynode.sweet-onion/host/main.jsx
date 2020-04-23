"object" != typeof JSON && JSON = {};

function() {
    function f(t) {
        return 10 > t ? "0" + t: t;
    }

    function this_value() {
        return this.valueOf();
    }

    function quote(t) {
        return rx_escapable.lastIndex = 0,
        rx_escapable.test(t) ? "\"" + t.replace(rx_escapable,
        function(t) {
            var e = meta[t];
            return "string" == typeof e ? e: "\\u" + "0000" + t.charCodeAt(0).toString(16).slice( - 4);
        }) + "\"": "\"" + t + "\"";
    }

    function str(t, e) {
        var a = gap;
        var i = e[t];
        switch (i && "object" == typeof i && "function" == typeof i.toJSON && i = i.toJSON(t), "function" == typeof rep && i = rep.call(e, t, i), typeof i) {
        case "string":
            return quote(i);
        case "number":
            return isFinite(i) ? String(i) : "null";
        case "boolean":
        case "null":
            return String(i);
        case "object":
            if (!i) {
                return "null";
            }
            if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                for (u = i.length, r = 0; u > r; r += 1) {
                    f[r] = str(r, i) || "null"
                }
                return o = 0 === f.length ? "[]": gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]": "[" + f.join(",") + "]",
                gap = a,
                o;
            }
            if (rep && "object" == typeof rep) {
                for (u = rep.length, r = 0; u > r; r += 1) {
                    "string" == typeof rep[r] && n = rep[r],
                    o = str(n, i),
                    o && f.push(quote(n) + gap ? ": ": ":" + o)
                }
            } else {
                for (var n in i) {
                    Object.prototype.hasOwnProperty.call(i, n) && o = str(n, i),
                    o && f.push(quote(n) + gap ? ": ": ":" + o)
                }
            }
            return o = 0 === f.length ? "{}": gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}": "{" + f.join(",") + "}",
            gap = a,
            o;
        }
    }
    "use strict";
    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    "function" != typeof Date.prototype.toJSON && Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null;
    },
    Boolean.prototype.toJSON = this_value,
    Number.prototype.toJSON = this_value,
    String.prototype.toJSON = this_value;
    "function" != typeof JSON.stringify && meta = {
        "": "\\b",
        " ": "\\t",
        "
": "\\n",
        "": "\\f",
        "
": "\\r",
        """: "\\\"",
        "\": "\\\\"
}, JSON.stringify = function (t, e, r) {
if (gap = "", indent = "", "number " == typeof r) {
for (n = 0; r > n; n += 1) {
indent += ""
}
} else {
"string " == typeof r && indent = r
}
if (rep = e, e && "
        function " != typeof e && "object " != typeof e || "number " != typeof e.length) {
throw new Error("JSON.stringify ")
}
return str("", {
"": t
});
};
"
        function " != typeof JSON.parse && JSON.parse = function (text, reviver) {
function walk(t, e) {
var o = t[e];
if (o && "object " == typeof o) {
for (var r in o) {
Object.prototype.hasOwnProperty.call(o, r) && n = walk(o, r), void(0) !== n ? o[r] = n : delete o[r]
}
}
return reviver.call(t, e, o);
}
if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && text = text.replace(rx_dangerous, function (t) {
return "\\u " + "0000 " + t.charCodeAt(0).toString(16).slice(-4);
}), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) {
return j = eval(" (" + text + ")"), "
        function " == typeof reviver ? walk({
"": j
}, "") : j;
}
throw new SyntaxError("JSON.parse ")
};
}();
var panelAlert = function (message) {
return alert(message);
};
var panelConfirm = function (message) {
return confirm(message);
};
var panelPrompt = function (message, value) {
return prompt(message, value);
};
var openFolderDialog = function (initialFolder) {
var selectedFolder = initialFolder;
var folderDialog = new Folder(selectedFolder).selectDlg();
if (folderDialog && folderDialog.fsName) {
selectedFolder = folderDialog.fsName;
}
return selectedFolder;
};
function getDocumentId() {
if (app.documents.length > 0) {
return app.activeDocument.id;
}
return null;
}
var idnull = charIDToTypeID("null ");
var idLyr = charIDToTypeID("Lyr ");
var idPxl = charIDToTypeID("#Pxl ");
var idOfst = charIDToTypeID("Ofst ");
function getSelectedLayersIdx() {
var selectedLayers = new Array();
var ref = new ActionReference();
ref.putEnumerated(charIDToTypeID("Dcmn "), charIDToTypeID("Ordn "), charIDToTypeID("Trgt "));
var desc = executeActionGet(ref);
if (desc.hasKey(stringIDToTypeID("targetLayers "))) {
desc = desc.getList(stringIDToTypeID("targetLayers "));
var c = desc.count;
for (var i = 0;i < c; i += 1) {
try {
activeDocument.backgroundLayer;
selectedLayers.push(desc.getReference(i).getIndex());
} catch (e) {
selectedLayers.push(desc.getReference(i).getIndex() + 1);
}
}
} else {
var ref = new ActionReference();
ref.putProperty(charIDToTypeID("Prpr "), charIDToTypeID("ItmI "));
ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn "), charIDToTypeID("Trgt "));
try {
activeDocument.backgroundLayer;
selectedLayers.push(executeActionGet(ref).getInteger(charIDToTypeID("ItmI ")) - 1);
} catch (e) {
selectedLayers.push(executeActionGet(ref).getInteger(charIDToTypeID("ItmI ")));
}
var vis = app.activeDocument.activeLayer.visible;
if (vis === true) {
app.activeDocument.activeLayer.visible = false
}
var desc9 = new ActionDescriptor();
var list9 = new ActionList();
var ref9 = new ActionReference();
ref9.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn "), charIDToTypeID("Trgt "));
list9.putReference(ref9);
desc9.putList(charIDToTypeID("null "), list9);
executeAction(charIDToTypeID("Shw "), desc9, DialogModes.NO);
if (app.activeDocument.activeLayer.visible === false) {
selectedLayers.shift()
}
app.activeDocument.activeLayer.visible = vis;
}
return selectedLayers;
}
function makeActiveByIndex(idx, visible) {
for (var i = 0;i < idx.length; i += 1) {
var desc = new ActionDescriptor();
var ref = new ActionReference();
ref.putIndex(charIDToTypeID("Lyr "), idx[i]);
desc.putReference(charIDToTypeID("null "), ref);
if (i > 0) {
var idselectionModifier = stringIDToTypeID("selectionModifier ");
var idselectionModifierType = stringIDToTypeID("selectionModifierType ");
var idaddToSelection = stringIDToTypeID("addToSelection ");
desc.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelection);
}
desc.putBoolean(charIDToTypeID("MkVs "), visible);
executeAction(charIDToTypeID("slct "), desc, DialogModes.NO);
}
}
function getLayerIdByActive() {
var ref = new ActionReference();
ref.putProperty(charIDToTypeID("Prpr "), stringIDToTypeID("layerID "));
ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn "), charIDToTypeID("Trgt "));
var layerDesc = executeActionGet(ref);
return layerDesc.getInteger(stringIDToTypeID("layerID "));
}
function selectLayerbyID(layerID) {
if (layerID == undefined) {
return;
}
try {
var ref = new ActionReference();
ref.putIdentifier(charIDToTypeID("Lyr "), layerID);
var desc = new ActionDescriptor();
desc.putReference(charIDToTypeID("null "), ref);
executeAction(charIDToTypeID("slct "), desc, DialogModes.NO);
} catch (e) {
return;
}
}
function getSelectedLayers() {
var selectedLayersIdx = getSelectedLayersIdx();
if (selectedLayersIdx.length > 0) {
var sLayers = [];
for (var i = 0;i < selectedLayersIdx.length; i += 1) {
makeActiveByIndex([selectedLayersIdx[i]], false);
if (!activeDocument.activeLayer.isBackgroundLayer) {
var layerId = getLayerIdByActive();
sLayers.push({
id: layerId,
layer: activeDocument.activeLayer
});
}
}
makeActiveByIndex(selectedLayersIdx, false);
return sLayers;
} else {
return null;
}
}
function getLayerBounds(layer) {
var layerBounds = {};
try {
var bounds = layer.bounds;
layerBounds.x = bounds[0].as("px ");
layerBounds.y = bounds[1].as("px ");
layerBounds.width = bounds[2].as("px ") - layerBounds.x;
layerBounds.height = bounds[3].as("px ") - layerBounds.y;
layerBounds.centerX = layerBounds.x + (layerBounds.width / 2);
layerBounds.centerY = layerBounds.y + (layerBounds.height / 2);
} catch (error) {
layerBounds.x = 0;
layerBounds.y = 0;
layerBounds.width = 0;
layerBounds.height = 0;
layerBounds.centerX = 0;
layerBounds.centerY = 0;
}
return layerBounds;
}
function expandBounds(layerPosition, amount) {
layerPosition.x -= amount;
layerPosition.y -= amount;
layerPosition.width += amount;
layerPosition.height += amount;
return layerPosition;
}
function layersCount() {
var res = [];
if (!app.documents.length) {
return JSON.stringify({
noDocument: true
});
}
try {
var selection = getSelectedLayers();
if (selection) {
for (var i = 0, var len = selection.length; i < len; i++) {
var layerObj = selection[i];
var layer = layerObj.layer;
var layerId = layerObj.id;
var layerBounds = getLayerBounds(layer);
res.push({
index: i,
id: layerId,
width: layerBounds.width,
height: layerBounds.height
});
}
}
} catch (e) {

}
return JSON.stringify({
layers: res
});
}
function fillPhoto(images) {
var activeDocument = app.activeDocument;
var empty = false;
try {
var userUnits = app.preferences.rulerUnits;
var userResolution = app.activeDocument.resolution;
var selection = getSelectedLayers();
app.preferences.rulerUnits = Units.PIXELS;
if (userResolution > 72) {
activeDocument.resizeImage(undefined, undefined, 72, ResampleMethod.NONE);
}
if (selection) {
var imagesCount = images.length;
for (var i = 0, var len = selection.length; i < len; i++) {
var targetLayer = selection[i];
var target = getLayerBounds(targetLayer);
if (target.width == 0 || target.height == 0) {
empty = true;
continue ;
}
var targetIndex = targetLayer.itemIndex;
var positionDescriptor = new ActionDescriptor();
positionDescriptor.putUnitDouble(charIDToTypeID("Hrzn "), idPxl, 0);
positionDescriptor.putUnitDouble(charIDToTypeID("Vrtc "), idPxl, 0);
var placementAction = new ActionDescriptor();
placementAction.putPath(idnull, new File(images[i % imagesCount]));
placementAction.putEnumerated(charIDToTypeID("FTcs "), charIDToTypeID("QCSt "), charIDToTypeID("Qcs0 "));
placementAction.putObject(idOfst, idOfst, positionDescriptor);
try {
executeAction(charIDToTypeID("Plc "), placementAction, DialogModes.NO);
} catch (e) {
continue ;
}
var smartObject = activeDocument.activeLayer;
var smartObjectIndex = activeDocument.activeLayer.itemIndex;
var smartObjectBounds = getLayerBounds(smartObject);
if (smartObjectIndex !== (targetIndex + 1)) {
smartObject.move(targetLayer, ElementPlacement.PLACEBEFORE);
}
smartObject.translate(target.centerX - smartObjectBounds.centerX, target.centerY - smartObjectBounds.centerY);
if (smartObjectBounds.width !== target.width && smartObjectBounds.height !== target.height) {
target = expandBounds(target, 1);
var scale = target.width * (100 / smartObjectBounds.width);
var computedHeight = smartObjectBounds.height * (scale / 100);
if (computedHeight < target.height) {
scale = target.height * (100 / smartObjectBounds.height);
}
smartObject.resize(Math.ceil(scale), Math.ceil(scale), AnchorPosition.MIDDLECENTER);
}
var layerRef = new ActionReference();
layerRef.putEnumerated(idLyr, charIDToTypeID("Ordn "), charIDToTypeID("Trgt "));
var clippingAction = new ActionDescriptor();
clippingAction.putReference(idnull, layerRef);
executeAction(charIDToTypeID("GrpL "), clippingAction, DialogModes.NO);
}
}
app.preferences.rulerUnits = userUnits;
if (userResolution > 72) {
activeDocument.resizeImage(undefined, undefined, userResolution, ResampleMethod.NONE);
}
} catch (e) {
return "Line " + e.line + ": " + e.message;
}
if (empty) {
return "existEmpty ";
}
return "";
}
function fillPhoto2(layerId, image) {
var activeDocument = app.activeDocument;
try {
selectLayerbyID(layerId);
var selection = getSelectedLayers();
if (selection && selection.length == 1) {
var userUnits = app.preferences.rulerUnits;
var userResolution = app.activeDocument.resolution;
app.preferences.rulerUnits = Units.PIXELS;
if (userResolution > 72) {
activeDocument.resizeImage(undefined, undefined, 72, ResampleMethod.NONE);
}
var targetLayer = selection[0].layer;
var target = getLayerBounds(targetLayer);
if (target.width == 0 || target.height == 0) {
app.preferences.rulerUnits = userUnits;
if (userResolution > 72) {
activeDocument.resizeImage(undefined, undefined, userResolution, ResampleMethod.NONE);
}
return "existEmpty ";
}
var targetIndex = targetLayer.itemIndex;
var positionDescriptor = new ActionDescriptor();
positionDescriptor.putUnitDouble(charIDToTypeID("Hrzn "), idPxl, 0);
positionDescriptor.putUnitDouble(charIDToTypeID("Vrtc "), idPxl, 0);
var placementAction = new ActionDescriptor();
placementAction.putPath(idnull, new File(image));
placementAction.putEnumerated(charIDToTypeID("FTcs "), charIDToTypeID("QCSt "), charIDToTypeID("Qcs0 "));
placementAction.putObject(idOfst, idOfst, positionDescriptor);
try {
executeAction(charIDToTypeID("Plc "), placementAction, DialogModes.NO);
} catch (e) {
app.preferences.rulerUnits = userUnits;
if (userResolution > 72) {
activeDocument.resizeImage(undefined, undefined, userResolution, ResampleMethod.NONE);
}
return "error ";
}
var smartObject = activeDocument.activeLayer;
var smartObjectIndex = activeDocument.activeLayer.itemIndex;
var smartObjectBounds = getLayerBounds(smartObject);
if (smartObjectIndex !== (targetIndex + 1)) {
smartObject.move(targetLayer, ElementPlacement.PLACEBEFORE);
}
smartObject.translate(target.centerX - smartObjectBounds.centerX, target.centerY - smartObjectBounds.centerY);
if (smartObjectBounds.width !== target.width || smartObjectBounds.height !== target.height) {
target = expandBounds(target, 1);
var scale = target.width * (100 / smartObjectBounds.width);
var computedHeight = smartObjectBounds.height * (scale / 100);
if (computedHeight < target.height) {
scale = target.height * (100 / smartObjectBounds.height);
}
smartObject.resize(Math.ceil(scale), Math.ceil(scale), AnchorPosition.MIDDLECENTER);
}
var layerRef = new ActionReference();
layerRef.putEnumerated(idLyr, charIDToTypeID("Ordn "), charIDToTypeID("Trgt "));
var clippingAction = new ActionDescriptor();
clippingAction.putReference(idnull, layerRef);
executeAction(charIDToTypeID("GrpL "), clippingAction, DialogModes.NO);
app.preferences.rulerUnits = userUnits;
if (userResolution > 72) {
activeDocument.resizeImage(undefined, undefined, userResolution, ResampleMethod.NONE);
}
} else {
return "noLayer ";
}
} catch (e) {
return "Line " + e.line + ": " + e.message;
}
return "";
}"