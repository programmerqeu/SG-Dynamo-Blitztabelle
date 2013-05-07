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