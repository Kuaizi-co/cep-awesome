
$._ext = {
    openDir: function (dir) {
        try {
            var folder = new Folder(dir);
            if (!folder.exists) {
                return;
            }
            folder.execute();
        } catch (ex) {
        }
    },
    sendToGenerator: function (param) {
        try {
            var generatorDesc = new ActionDescriptor();
            generatorDesc.putString (stringIDToTypeID("name"), "Apollo");
            generatorDesc.putString (stringIDToTypeID("sampleAttribute"), param);
            executeAction (stringIDToTypeID("generateAssets"), generatorDesc, DialogModes.NO);
            return "1";
        } catch (e) {
            //return JSON.stringify({err: 1, msg: e})
        }
    }
};
