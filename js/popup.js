/**
 * SG Dynamo Blitztabelle
 *
 * LICENSE:    MIT
 *
 * @project		 SGD
 * @package    Blitztabelle
 * @author     André Lademann <andre.lademann@programmerq.eu>
 * @copyright  Copyright (c) 2013 programmerq.eu (http://www.programmerq.eu)
 * @license    http://programmerq.eu/license
 * @since      2012-12-18 - 11:53:21 PM
 */

document.addEventListener('DOMContentLoaded', function() {

	/*
	 * Content
	 *
	 */
	
	var html;
	var main = document.getElementById('main');

	if (navigator.onLine) {
		// Online
		html = '<iframe src="http://www.dynamo-dresden.de/app/blitztabelle.html" id="blitztabelle" width="380" height="575" scrolling="no" frameborder="0">';
	} else {
		// Offline
		html =  '<img src="img/offline.png" alt="'+chrome.i18n.getMessage('offline')+'" title="'+chrome.i18n.getMessage('offline')+'" >';
	}
	main.innerHTML = html;

});