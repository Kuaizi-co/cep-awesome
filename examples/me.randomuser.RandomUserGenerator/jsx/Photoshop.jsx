$._ext_PHXS={
    run : function() {
    
        /**********  Replace below sample code with your own JSX code  **********/
        var appName;        
        appName = "Hello Photoshop";        
        alert(appName);
        /************************************************************************/
        
        return appName;
    },
};

var file = '';

$._random_image={
    save: function(imgUrl){
        // OpenImageFromWeb.jsx
        // Written by Jeffrey Tranberry

        // enable double clicking from the
        // Macintosh Finder or the Windows Explorer
        #target photoshop
         
        // Make Photoshop the frontmost application
        app.bringToFront();
         
        /////////////////////////
        // SETUP
        /////////////////////////

        var html = "";
        var request = "";
        var url = "";
        var binary = "";
        var requesthtml = "";
        var socket = new Socket;
        var domain = "" // the domain for the file we want
        var sImg = ""; // the rest of the url for the file we want
        var port = ":80"; // the port for the file we want
        var cache = new Folder("/Applications/Adobe\ Photoshop\ CC\ 2014/Plug-ins/Panels/Random\ User/cache/"); // cache the images

        if(!cache.exists) cache.create();

         
        /////////////////////////
        // MAIN
        /////////////////////////
        // var url = 'http://api.randomuser.me/portraits/women/92.jpg';   // prompt for domain name
        var url = imgUrl;  

        if (url != null && url != ""){
            if ( (url.indexOf("http://") != -1)  || (url.indexOf("HTTP://") != -1)  ) {
                domainPathLength = url.length - "http://".length; 
                domainPath = url.substr(7, domainPathLength);
                pathOffset = domainPath.indexOf("/"); 
                domain = domainPath.substr(0, pathOffset);
                sImg = domainPath.substr(pathOffset, domainPath.length - pathOffset );
                // Isolate Image name 
                var Name =  sImg
                var imagePath = "";
                while (Name.indexOf("/") != -1 ) {              // Strip Path
                    imagePath= imagePath + Name.substr(0, Name.indexOf("/") + 1);
                    Name = Name.substr(Name.indexOf("/") + 1 ,);        
                }
                // alert("domain = " +  domain + " , Image = " + sImg + " Image File Name = " + Name);
                if ( domain != "" && sImg != "" && sImg != "/" && Name.indexOf(".") != -1 ) {
                    file = File(cache +'/'+ Name); // Image file name
                    var f = file
                    f.encoding = "binary"; // set binary mode
                    f.open("w");

                    if (socket.open(domain + port, "binary")){
                        //alert("GET " + sImg +" HTTP/1.0\n\n");
                        requesthtml ="\n\nDmain:" + domain + " Port" + port + " binary\n"
                        //request ="GET " + sImg +" HTTP/1.0\n\n"
                        request ="GET " + sImg +" HTTP/1.0\nHost: " + domain + "\nAccept: image/gif, image/x-xbitmap, image/png, image/jpeg, */*\n\n";
                        socket.write(request); // get the file
                        var binary = socket.read(99999999);
                        binary = removeHeaders(binary);
                        f.write(binary);
                        socket.close();
                    } 
                    else { alert("Connection to Domain:" + domain + " Port" + port + " Failed   ");}

                    f.close();

                    // f.remove(); // Remove temporary downloaded files
                    }
                else { alert("Invalid Image URL: " + url ); }
                }
            else { alert("Invalid URL: " + url ); }
            }
        else { if ( url == "" ) alert("No URL Entered"); }
         
        /////////////////////////
        // FUNCTIONS
        /////////////////////////
        // Remove header lines from HTTP response
        function removeHeaders(binary){
            var bContinue = true ; // flag for finding end of header
            var line = "";
            var httpheader = "";
            var nFirst = 0;
            var count = 0;
            while (bContinue) {
                line = getLine(binary) ; // each header line
                httpheader = httpheader + line;
                bContinue = line.length >= 2 ; // blank header == end of header
                nFirst = line.length + 1 ;
                binary = binary.substr(nFirst) ;
            }
            if (httpheader.indexOf("Bad Request") != -1 || httpheader.indexOf("Not Found") != -1) {
                alert (requesthtml + request + httpheader);
                var binary = "";
            }
            //alert (requesthtml + request + httpheader + "\nFile length = " + binary.length);
            return binary;
        };
         
        // Get a response line from the HTML
        function getLine(html){
            var line = "" ;
            for (var i = 0; html.charCodeAt(i) != 10; i++){ // finding line end
                line += html[i] ;
            }
            return line ;
        };
    },
    open: function(){
        function placeSmartObject(fileRef){
            //create a new smart object  layer using a file
            try { 
                var desc = new ActionDescriptor();
                    desc.putPath( charIDToTypeID( "null" ), new File( fileRef ) );
                    desc.putEnumerated( charIDToTypeID( "FTcs" ), charIDToTypeID( "QCSt" ),charIDToTypeID( "Qcsa" ));
                    desc.putUnitDouble( charIDToTypeID( "Wdth" ),charIDToTypeID( "#Prc" ), 100 );
                    desc.putUnitDouble( charIDToTypeID( "Hght" ), charIDToTypeID( "#Prc" ), 100 );
                    desc.putUnitDouble( charIDToTypeID( "Angl" ), charIDToTypeID( "#Ang" ), 0 );
                    desc.putBoolean( charIDToTypeID( "Lnkd" ), true );
                executeAction( charIDToTypeID( "Plc " ), desc, DialogModes.NO );
                activeDocument.activeLayer.resize(100 ,100,AnchorPosition.MIDDLECENTER);
                activeDocument.activeLayer.name = 'Photo';
                activeDocument.revealAll();
            } catch (e) { alert("Placeing file: '" + fileRef + "' failed"); }
        };

        if(app.documents.length == 0) { 
            //app.documents.add([width] [, height] [, resolution] [, name] [, mode] [, initialFill] [,pixelAspectRatio] [, bitsPerChannel] [,colorProfileName])
            app.documents.add(new UnitValue(512,'px'), new UnitValue(512,'px'), 72, null, NewDocumentMode.RGB, DocumentFill.WHITE, 1,BitsPerChannelType.EIGHT, "sRGB IEC61966-2.1" );
        }
        placeSmartObject(file);
    }
}

$._image={
    clip: function(){

        var doc = app.activeDocument;

        var clipTo_layer = doc.activeLayer,
            clipTo_width = clipTo_layer.bounds[3]-clipTo_layer.bounds[1],
            clipTo_height = clipTo_layer.bounds[2]-clipTo_layer.bounds[0];

            clipTo_layer.name = 'Photo Mask'

        $._random_image.open() // Add the image

        var userPhoto_layer = doc.activeLayer,
            userPhoto_width = userPhoto_layer.bounds[3]-userPhoto_layer.bounds[1],
            userPhoto_height = userPhoto_layer.bounds[2]-userPhoto_layer.bounds[0];

        var new_Width = (clipTo_width/userPhoto_width)*100,
            new_Height = (clipTo_height/userPhoto_height)*100;

        // If it isn't a perfect square, size it to always fit. 
        if(new_Height > new_Width){
            new_Width = new_Height;
        } else if(new_Width > new_Height){
            new_Height = new_Width;
        }

        var user = doc.activeLayer; // Set the image active
            user.resize(new_Width, new_Height, AnchorPosition.MIDDLECENTER);

        var user_Bounds = user.bounds;
            user_Bounds[0] = user_Bounds[0] - clipTo_layer.bounds[0]; // Left
            user_Bounds[1] = user_Bounds[1] - clipTo_layer.bounds[1]; // Top

        
        if(clipTo_width > clipTo_height){
            user_Bounds[0] = (user_Bounds[0] + (clipTo_width/2))
        } else if(clipTo_height > clipTo_width){
            user_Bounds[1] = (user_Bounds[1] + (clipTo_height/2))
        }

        // Reposition
        user.translate(-user_Bounds[0], -user_Bounds[1]);

        // Group the layers

        var layerSet = doc.layerSets.add();
            layerSet.name = 'Photo'

        clipTo_layer.move(layerSet, ElementPlacement.INSIDE);
        userPhoto_layer.move(layerSet, ElementPlacement.INSIDE);

        user.grouped = true; // Clip the image
    }
}