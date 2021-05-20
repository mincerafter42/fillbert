function copy(text) {
	if (window.clipboardData) window.clipboardData.setData("Text", text); // IE
	else navigator.clipboard.writeText(text);
}
