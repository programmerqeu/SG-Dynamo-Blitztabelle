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

var iFrameName;

function getContentFromIframe(iFrameName)
{
	var iFrame = document.getElementById(iFrameName);
	var iFrameContent = iFrame.contentDocument || iFrame.contentWindow.document;
	console.log(iFrameContent);
}

/**
 * AJAX
 * @link http://www.leggetter.co.uk/2010/03/12/making-cross-domain-javascript-requests-using-xmlhttprequest-or-xdomainrequest.html
 */
var invocation = createCrossDomainRequest();
var url = 'http://www.phobos7.co.uk/research/xss/simple.php';

/**
 *
 * @param {type} url
 * @param {type} handler
 * @returns {XMLHttpRequest}
 */
function createCrossDomainRequest(url, handler) {
	var request;
	request = new XMLHttpRequest();
	return request;
}

function callOtherDomain() {
	if (invocation) {
		invocation.open('GET', url, true);
		invocation.onreadystatechange = handler;
		invocation.send();
	}
	else {
		var text = "No Invocation TookPlace At All";
		var textNode = document.createTextNode(text);
		var textDiv = document.getElementById("textDiv");
		textDiv.appendChild(textNode);
	}
}
/**
 *
 * @param {type} evtXHR
 * @returns {undefined}
 */
function handler(evtXHR) {
	if (invocation.readyState === 4)
	{
		if (invocation.status === 200) {
			outputResult();
		}
		else {
			alert("Invocation Errors Occured");
		}
	}
}
/**
 *
 * @returns {undefined}
 */
function outputResult() {
	var response = invocation.responseText;
	var textDiv = document.getElementById("textDiv");
	textDiv.innerHTML += response;
}