$('#exportBtn').click(function () {
	 var outputPath = $("#output").val();
	 if (outputPath== '') {
	 	showTip();
	 	return;
	 }
     _AdobeInvokeScript("exportSvg('" + outputPath + "')");
 });

function showTip() {
    _AdobeInvokeScript("showAlert()");
};

$("#openFolder").click(function(){
	filePath();
});


function filePath() {
	var path ="choosePath";
    var feedback = unescape(_Adobe.JSXInterface.call(path));
    getPath(feedback);
}


function getPath(feedback) {
	$("#output").val(feedback);
}