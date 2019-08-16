var lang = {
    openPathTitle: {
        zh: '请选择文件输出目录'
    }
};

function showAlert() {
	alert("请选择文件输出目录");
}

// 选择路径

function choosePath() {
	var tmp = Folder.selectDialog(lang.openPathTitle);
	return escape(tmp);
}

function exportSvg(outputPath) {

	all_function();
	generate(outputPath); 
}


