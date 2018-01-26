/*
 *
 *	Renderer
 *	v0.3.0
 *	26/01/2018
 *  
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './renderer.scss';
import '../views/test-view/test-view.jsx';
import '../views/test-item/test-item.jsx';

const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
      fullScreenComponents = false,
	  defaultPollInterval = 5000;

window.scrollIndex = 1;
window.mountedComponents = 0;
window.assetFolder = "/img";

window.renderViews = (views,  clear = false) => {
	let content = document.getElementById("content");
    if(clear) content.innerHTML = '';

	for(var i = 0; i < views.length; i++) {
		let view = views[i],
			componentType = view.type,
			api = view.api,
			data = view.data,
			pollInterval = view.pollInterval || defaultPollInterval,
			el = React.createElement(window[componentType], { data: data, pollInterval: pollInterval, api: api }),
			wrapper = document.createElement('div');

		wrapper.id = generateId();
		wrapper.className = "component " + componentType.toLowerCase();
		content.appendChild(wrapper);

		ReactDOM.render(el, wrapper);
	}

	if(fullScreenComponents) {
		let components = document.getElementsByClassName('component');
		for (let c = 0; c < components.length; c++) {
			components[c].style.height = viewportHeight + "px";
		}
	}
};

window.renderComplete = () => {
	document.body.className = "ready";
	if(fullScreenComponents) {
		document.body.className += " fullscreencomponents"
	}
};

window.generateId = () => {
    let id = "",
        characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i = 0; i < 16; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return id;
};

if(typeof views !== 'undefined') renderViews(views, true);

if(module.hot) {
	module.hot.accept();
}