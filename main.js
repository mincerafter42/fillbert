function copy(text) {
	navigator.clipboard.writeText(text);
}

function removeElementsWithTagName(tagName) {
	while (document.getElementsByTagName(tagName).length > 0) document.getElementsByTagName(tagName)[0].remove()
}

function invertStorageFromId(element) {
	try {
		window.localStorage.setItem(element.id, window.localStorage.getItem(element.id)!="true");
		location.reload();
	} catch(e) {alert(e.message)}
}

document.addEventListener('DOMContentLoaded', e => {
    if (window.localStorage.getItem("disableAnimations")=="true") {
    	removeElementsWithTagName("animate");
    	removeElementsWithTagName("animateTransform");
    	removeElementsWithTagName("animateMotion");
    	removeElementsWithTagName("set");
    	document.getElementById("disableAnimations").innerText = "Enable animations";
    }
});
