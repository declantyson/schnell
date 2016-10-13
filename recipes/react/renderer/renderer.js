/*
 *
 *	Renderer
 *	v0.0.1
 *	13/10/2016
 *  
 */ 

var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var assetFolder = "/renderer/img";
var mountedComponents = 0;
var scrollIndex = 1;

function setAssetFolder(dir) {
    assetFolder = dir;
}

function renderViews(views) {
	var content = document.getElementById("content");

	for(var i = 0; i < views.length; i++) {
		var view = views[i],
			componentType = view.type,
			data = view.data,
			el = React.createElement(window[componentType], { data: data }),
			wrapper = document.createElement('div');

		wrapper.id = generateId();
		wrapper.className = "component " + componentType.toLowerCase();
		content.appendChild(wrapper);

		ReactDOM.render(el, wrapper);
	}

	var components = document.getElementsByClassName('component');
	for(var c = 0; c < components.length; c++) {
		components[c].style.height = windowHeight + "px";
	}
}

function renderComplete() {
	document.body.className = "ready";
}

function generateId() {
    var id = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 16; i++ )
        id += characters.charAt(Math.floor(Math.random() * characters.length));

    return id;
}