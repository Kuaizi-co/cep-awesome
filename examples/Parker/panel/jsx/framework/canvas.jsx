Canvas = function(doc) {
    this.document = doc;
    this.fontSize = 12;
    this.foreground = new Color(255, 0, 156);
    this.background = "";
    this.fontFamily = "Verdana";
    this.bold = true;
    this.textAlignment = charIDToTypeID("Left");
    this.opacity = 100;
    this.style = 1;
    this.strokeColor = new Color(255, 255, 255);
    this.dpi = "XHDPI";
    this.unit = "px";
    this.showUnit = 1;
    this.link = 1;
    this.colorType = "HEX&RGB";
    this.shapes = [];
    this.shapeLayers = [];
};
Canvas.prototype.updateSetting = function(setting) {
    this.fontSize = parseInt(setting.fontSize);
    this.foreground = Color.fromHex(setting.foreground.background.replace(/#/, ""));
    this.background = Color.fromHex(setting.background.background.replace(/#/, ""));
    this.style = parseInt(setting.style);
    this.dpi = setting.dpi;
    this.unit = setting.unit;
    this.colorType = setting.colorType;
    this.link = parseInt(setting.link);
    this.showUnit = parseInt(setting.showUnit);
};
Canvas.prototype.clear = function() {
    this.fontFamily = "Verdana";
    this.opacity = 100;
    this.shapes.length = 0;
    this.shapeLayers.length = 0;
};
Canvas.prototype.addLine = function(x, y, length, horizontal) {
    this.shapes.push(new Line(Math.round(x), Math.round(y), Math.round(length), horizontal));
};
Canvas.prototype.addRectangle = function(x, y, width, height, radius) {
    this.shapes.push(new Rectangle(Math.round(x), Math.round(y), Math.round(width), Math.round(height), radius));
};
Canvas.prototype.addEllipse = function(x, y, width, height) {
    this.shapes.push(new Ellipse(Math.round(x), Math.round(y), Math.round(width), Math.round(height)));
};
Canvas.prototype.addLayerItem = function() {
    var selectedLayers = this.document.getSelectedLayers();
    for (var i in selectedLayers) {
        this.shapeLayers.push(selectedLayers[i]);
    }
    return selectedLayers[0];
};
Canvas.prototype.collapse = function(groupName, layer) {
    if (this.shapeLayers.length == 0) {
        return;
    }
    this.document.getArtboardList();
    var root = this.document.getRootGroup(layer);
    if (root != null) {
        var subGroup = root.layerSets.add();
        subGroup.name = groupName;
        var result = this.document.getSelectedLayers();
        var groupIdx = result[0].getIndex() - 1;
        this.document.setSelectedLayers(this.shapeLayers);
        if (this.shapeLayers.length > 1 && this.link == 1) {
            var desc11 = new ActionDescriptor();
            var ref7 = new ActionReference();
            ref7.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
            desc11.putReference(charIDToTypeID("null"), ref7);
            executeAction(stringIDToTypeID("linkSelectedLayers"), desc11, DialogModes.NO);
        }
        this.moveLayer(groupIdx);
    }
    this.shapeLayers.length = 0;
};
Canvas.prototype.moveLayer = function(index) {
    try {
        var desc9 = new ActionDescriptor();
        var ref5 = new ActionReference();
        ref5.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        desc9.putReference(charIDToTypeID("null"), ref5);
        var ref6 = new ActionReference();
        ref6.putIndex(charIDToTypeID("Lyr "), index);
        desc9.putReference(charIDToTypeID("T   "), ref6);
        desc9.putBoolean(charIDToTypeID("Adjs"), false);
        desc9.putInteger(charIDToTypeID("Vrsn"), 5);
        executeAction(charIDToTypeID("move"), desc9, DialogModes.NO);
    } catch (ex) {
        console_error($.fileName, $.line, "move layer error: " + ex);
    }
};
Canvas.prototype.drawShapes = function() {
    if (this.shapes.length == 0) {
        return;
    }
    activeDocument.suspendHistory("Render Canvas Drawing", "OnRender.apply(this)");

    function OnRender() {
        var fg = this.foreground;
        if (this.style == 2) {
            fg = this.background;
        }
        var desc448 = new ActionDescriptor();
        var ref321 = new ActionReference();
        ref321.putClass(stringIDToTypeID("contentLayer"));
        desc448.putReference(charIDToTypeID("null"), ref321);
        var layerDescriptor = new ActionDescriptor();
        var solidColorLayerDescriptor = new ActionDescriptor();
        solidColorLayerDescriptor.putObject(charIDToTypeID("Clr "), charIDToTypeID("RGBC"), fg.toDescriptor());
        layerDescriptor.putUnitDouble(charIDToTypeID("Opct"), charIDToTypeID("#Prc"), this.opacity);
        layerDescriptor.putObject(charIDToTypeID("Type"), stringIDToTypeID("solidColorLayer"), solidColorLayerDescriptor);
        layerDescriptor.putObject(charIDToTypeID("Shp "), this.shapes[0].descriptorType, this.shapes[0].createDescriptor());
        desc448.putObject(charIDToTypeID("Usng"), stringIDToTypeID("contentLayer"), layerDescriptor);
        executeAction(charIDToTypeID("Mk  "), desc448, DialogModes.NO);
        for (var i = 1; i < this.shapes.length; i += 1) {
            var desc453 = new ActionDescriptor();
            var ref322 = new ActionReference();
            ref322.putEnumerated(charIDToTypeID("Path"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
            desc453.putReference(charIDToTypeID("null"), ref322);
            desc453.putObject(charIDToTypeID("T   "), this.shapes[i].descriptorType, this.shapes[i].createDescriptor());
            executeAction(charIDToTypeID("AddT"), desc453, DialogModes.NO);
        }
        this.addLayerItem();
    }
    this.shapes.length = 0;
};
Canvas.prototype.drawLength = function(x, y, length, horizontal) {
    this.textAlignment = horizontal ? charIDToTypeID("Cntr") : charIDToTypeID("Left");
    var horizontalOffset = horizontal ? length / 2 : 1;
    var verticalOffset = horizontal ? 6 + (this.fontSize * 0.5) : (length * 0.5) + (this.fontSize / 2);
    if (horizontal) {
        y += 6;
        this.addLine(x, y - 5, 11, false);
        this.addLine((x + length) - 1, y - 5, 11, false);
    } else {
        x += 6;
        this.addLine(x - 5, y, 11, true);
        this.addLine(x - 5, (y + length) - 1, 11, true);
    }
    this.addLine(x, y, length - 1, horizontal);
    this.drawShapes();
    this.drawText(x + horizontalOffset, y + verticalOffset, this.fixUnit(Math.round(length)));
    this.textAlignment = charIDToTypeID("Left");
};
Canvas.prototype.drawText = function(x, y, text) {
    if (text == null || text == "") {
        return;
    }
    if (typeof text != "String") {
        text = text.toString();
    }
    x = typeof x !== "undefined" ? x : 0;
    y = typeof y !== "undefined" ? y : 0;
    var docSize = this.document.getSize();
    x = (x * 100) / docSize.width;
    y = (y * 100) / docSize.height;
    var textLayerDescriptor = new ActionDescriptor();
    var textLayerTypeReference = new ActionReference();
    textLayerTypeReference.putClass(charIDToTypeID("TxLr"));
    textLayerDescriptor.putReference(charIDToTypeID("null"), textLayerTypeReference);
    var styleRangeDescriptor = new ActionDescriptor();
    styleRangeDescriptor.putString(charIDToTypeID("Txt "), text);
    styleRangeDescriptor.putObject(charIDToTypeID("TxtC"), charIDToTypeID("#Pxl"), new Point(x, y).toDescriptor());
    styleRangeDescriptor.putEnumerated(charIDToTypeID("AntA"), charIDToTypeID("Annt"), this.getAntiAliasing());
    var styleDescriptor = new ActionDescriptor();
    styleDescriptor.putUnitDouble(charIDToTypeID("Sz  "), charIDToTypeID("#Pxl"), this.fontSize);
    styleDescriptor.putObject(charIDToTypeID("Clr "), charIDToTypeID("RGBC"), this.foreground.toDescriptor());
    styleDescriptor.putString(stringIDToTypeID("fontPostScriptName"), this.getPostScriptFontName(this.fontFamily));
    styleDescriptor.putBoolean(stringIDToTypeID("syntheticBold"), this.bold);
    var textStyleDescriptor = new ActionDescriptor();
    textStyleDescriptor.putInteger(charIDToTypeID("From"), 0);
    textStyleDescriptor.putInteger(charIDToTypeID("T   "), text.length);
    textStyleDescriptor.putObject(charIDToTypeID("TxtS"), charIDToTypeID("TxtS"), styleDescriptor);
    var textStyleList = new ActionList();
    textStyleList.putObject(charIDToTypeID("Txtt"), textStyleDescriptor);
    styleRangeDescriptor.putList(charIDToTypeID("Txtt"), textStyleList);
    var paragraphStyles = new ActionList();
    var paragraphStyleDescriptor = new ActionDescriptor();
    paragraphStyleDescriptor.putInteger(charIDToTypeID("From"), 0);
    paragraphStyleDescriptor.putInteger(charIDToTypeID("T   "), text.length);
    var alignmentDescriptor = new ActionDescriptor();
    alignmentDescriptor.putEnumerated(charIDToTypeID("Algn"), charIDToTypeID("Alg "), this.textAlignment);
    paragraphStyleDescriptor.putObject(stringIDToTypeID("paragraphStyle"), stringIDToTypeID("paragraphStyle"), alignmentDescriptor);
    paragraphStyles.putObject(stringIDToTypeID("paragraphStyleRange"), paragraphStyleDescriptor);
    styleRangeDescriptor.putList(stringIDToTypeID("paragraphStyleRange"), paragraphStyles);
    textLayerDescriptor.putObject(charIDToTypeID("Usng"), charIDToTypeID("TxLr"), styleRangeDescriptor);
    executeAction(charIDToTypeID("Mk  "), textLayerDescriptor, DialogModes.NO);
    if (this.style == 1) {
        this.stroke();
    }
    this.addLayerItem();
    if (this.style == 2) {
        var selectedLayerReference = new ActionReference();
        selectedLayerReference.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("bounds"));
        selectedLayerReference.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        var selectedLayerDescriptor = executeActionGet(selectedLayerReference);
        var bounds = Rect.fromDescriptor(selectedLayerDescriptor);
        this.addRectangle(bounds.X - 1, bounds.Y - 1, bounds.width + 2, bounds.height + 2);
        this.drawShapes();
        var idmove = charIDToTypeID("move");
        var desc70 = new ActionDescriptor();
        var ref51 = new ActionReference();
        ref51.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        desc70.putReference(charIDToTypeID("null"), ref51);
        var ref52 = new ActionReference();
        ref52.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Prvs"));
        desc70.putReference(charIDToTypeID("T   "), ref52);
        executeAction(idmove, desc70, DialogModes.NO);
        this.addLayerItem();
    }
};
Canvas.prototype.stroke = function() {
    var desc32 = new ActionDescriptor();
    var ref14 = new ActionReference();
    ref14.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("Lefx"));
    ref14.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    desc32.putReference(charIDToTypeID("null"), ref14);
    var desc33 = new ActionDescriptor();
    desc33.putUnitDouble(charIDToTypeID("Scl "), charIDToTypeID("#Prc"), 100);
    var desc34 = new ActionDescriptor();
    desc34.putBoolean(charIDToTypeID("enab"), true);
    desc34.putEnumerated(charIDToTypeID("Styl"), charIDToTypeID("FStl"), charIDToTypeID("OutF"));
    desc34.putEnumerated(charIDToTypeID("PntT"), charIDToTypeID("FrFl"), charIDToTypeID("SClr"));
    desc34.putEnumerated(charIDToTypeID("Md  "), charIDToTypeID("BlnM"), charIDToTypeID("Nrml"));
    desc34.putUnitDouble(charIDToTypeID("Opct"), charIDToTypeID("#Prc"), 100);
    desc34.putUnitDouble(charIDToTypeID("Sz  "), charIDToTypeID("#Pxl"), 1);
    var desc35 = new ActionDescriptor();
    desc35.putDouble(charIDToTypeID("Rd  "), this.strokeColor.R);
    desc35.putDouble(charIDToTypeID("Grn "), this.strokeColor.G);
    desc35.putDouble(charIDToTypeID("Bl  "), this.strokeColor.B);
    desc34.putObject(charIDToTypeID("Clr "), charIDToTypeID("RGBC"), desc35);
    desc33.putObject(charIDToTypeID("FrFX"), charIDToTypeID("FrFX"), desc34);
    desc32.putObject(charIDToTypeID("T   "), charIDToTypeID("Lefx"), desc33);
    executeAction(charIDToTypeID("setd"), desc32, DialogModes.NO);
};
Canvas.prototype.getAntiAliasing = function() {
    return stringIDToTypeID("antiAliasPlatformLCD");
};
Canvas.prototype.getPostScriptFontName = function(fontName) {
    var fonts = app.fonts;
    var count = fonts.length;
    var similarFonts = [];
    for (var i = 0; i < count; i += 1) {
        if (fonts[i].name == fontName || fonts[i].name.indexOf(fontName) == 0) {
            return fonts[i].postScriptName;
        }
    }
    return "MicrosoftYaHei";
};
Canvas.prototype.fixUnit = function(value, sp) {
    var result = Math.round(value);
    if (this.unit == "PX") {

    } else if (this.unit == "PT") {
        if (this.dpi == "3X") {
            result = parseInt(result / 3);
        } else {
            result = parseInt(result / 2);
        }
    } else {
        if (this.dpi == "LDPI") {
            result = result * 1.33333333333333
        } else if (this.dpi == "MDPI") {
            result = result * 1
        } else if (this.dpi == "HDPI") {
            result = result * 0.666666666666667
        } else if (this.dpi == "XHDPI") {
            result = result * 0.5
        } else if (this.dpi == "XXHDPI") {
            result = result * 0.333333333333333
        } else if (this.dpi == "XXXHDPI") {
            result = result * 0.25
        } else {
            result = result * 0.5
        }
    }
    var unit = sp != undefined && this.unit == "DP" ? "SP" : this.unit;
    if (this.showUnit == 0) {
        unit = "";
    }
    return parseInt(result) + unit;
};