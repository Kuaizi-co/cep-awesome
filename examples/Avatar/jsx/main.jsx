/* vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8 nobomb: */

/**
 * filename.js
 *
 * @author xiaoqiang
 * @mail   qiang0902@126.com
 * @date
 */

Avatar = {
    version: "1.0"
};

Avatar.create = function(root, pid, overlay) {
    if (app.documents.length < 1) { return 1; }
    var doc = app.activeDocument;
    var currentLayer = doc.activeLayer;

    var file = new File(root + pid + '.jpg');
    if (file.exists) {
        console_debug('file exists');
        var tmpDoc = app.open(file);
            tmpDoc.layers[0].duplicate(doc);
            tmpDoc.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument = doc;
        var theLayer = doc.activeLayer;
        theLayer.name = "Avatar sample " + pid;
        theLayer.move(currentLayer, ElementPlacement.PLACEBEFORE);
        if (overlay == 1) {
            var bounds = currentLayer.bounds;
            var newBounds = theLayer.bounds;
            var w = bounds[2].value - bounds[0].value;
            var h = bounds[3].value - bounds[1].value;
            var w1 = newBounds[2].value - newBounds[0].value;
            var h1 = newBounds[3].value - newBounds[1].value;

            var deltaX = bounds[0].value - newBounds[0].value;
            var deltaY = bounds[1].value - newBounds[1].value;
            theLayer.translate(deltaX, deltaY);
            theLayer.resize(w*100/w1, h*100/h1, AnchorPosition.TOPLEFT);
            Avatar.setLayerMask();
        }
        return 0;
    } else {
        console_debug('file not exists');
        return 2;
    }
};

Avatar.setLayerMask = function()
{
    var idGrpL = app.charIDToTypeID( "GrpL" );
    var desc6 = new ActionDescriptor();
    var idnull = app.charIDToTypeID( "null" );
    var ref6 = new ActionReference();
    var idLyr = app.charIDToTypeID( "Lyr " );
    var idOrdn = app.charIDToTypeID( "Ordn" );
    var idTrgt = app.charIDToTypeID( "Trgt" );
    ref6.putEnumerated( idLyr, idOrdn, idTrgt );
    desc6.putReference( idnull, ref6 );
    app.executeAction( idGrpL, desc6, DialogModes.NO );
}
