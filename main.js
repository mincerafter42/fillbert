function copy(text) {
	navigator.clipboard.writeText(text);
}

function removeElementsWithTagName(tagName) {
	while (document.getElementsByTagName(tagName).length > 0) document.getElementsByTagName(tagName)[0].remove()
}

function localStorageAndReload(key, value) {
	try {
		window.localStorage.setItem(key, value);
		location.reload();
	} catch(e) {alert(e.message)}
}

document.addEventListener('DOMContentLoaded', e => {
    if (window.localStorage.getItem("disableAnimations")=="true") {
    	removeElementsWithTagName("animate");
    	removeElementsWithTagName("animateTransform");
    	removeElementsWithTagName("animateMotion");
    	removeElementsWithTagName("set");
    	document.getElementById("disableAnimations").removeAttribute("checked");
    }
});
