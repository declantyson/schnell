/*
 *
 *	Renderer
 *	v0.0.1
 *	04/11/2016
 *  
 */ 

var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var assetFolder = "/renderer/img";
var mountedComponents = 0;
var defaultPollInterval = 5000;
var scrollIndex = 1;
var fullScreenComponents = false;

function setAssetFolder(dir) {
    assetFolder = dir;
}

function renderViews(views) {
	var content = document.getElementById("content");

	for(var i = 0; i < views.length; i++) {
		var view = views[i],
			componentType = view.type,
			data = view.data,
			pollInterval = view.pollInterval || defaultPollInterval,
			el = React.createElement(window[componentType], { data: data, pollInterval: pollInterval }),
			wrapper = document.createElement('div');

		wrapper.id = generateId();
		wrapper.className = "component " + componentType.toLowerCase();
		content.appendChild(wrapper);

		ReactDOM.render(el, wrapper);
	}

	if(fullScreenComponents) {
		var components = document.getElementsByClassName('component');
		for (var c = 0; c < components.length; c++) {
			components[c].style.height = windowHeight + "px";
		}
	}
}

function renderComplete() {
	document.body.className = "ready";
	if(fullScreenComponents) {
		document.body.className += " fullscreencomponents"
	}
}

function generateId() {
    var id = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 16; i++ )
        id += characters.charAt(Math.floor(Math.random() * characters.length));

    return id;
}