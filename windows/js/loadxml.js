function loadxmlDoc(file) {
	var xmlDoc;
	var xmlhttp;
	// try { //IE
	// 	xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	// } catch (e) { //firefox,opera
	// 	xmlDoc = document.implementation.createDocument("", "", null);
	// }

	// try {
	// 	xmlDoc.asyc = false; //是否异步调用
	// 	xmlDoc.load(file); //文件路径

	// } catch (e) { //chrome
	// 	var xmlhttp = new XMLHttpRequest();
	// 	xmlhttp.open("GET", file, false); //创建一个新的http请求，并指定此请求的方法、URL以及验证信息
	// 	xmlDoc = xmlhttp.responseXML;
	// }
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", "xml/test.xml", false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;
	return xmlDoc;
}
