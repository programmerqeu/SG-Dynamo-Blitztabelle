/**
 * SG Dynamo Blitztabelle
 *
 * LICENSE:    MIT
 *
 * @project		 SGD
 * @package    Blitztabelle
 * @author     André Lademann <andre.lademann@programmerq.eu>
 * @copyright  Copyright (c) 2012 programmerq.eu (http://www.programmerq.eu)
 * @license    http://programmerq.eu/license
 * @link
 * Dateiname:  popup.js
 * @since      2012-12-18 - 11:53:21 PM
 */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-9020018-8']);
_gaq.push(['_anonymizeIp']);
_gaq.push(['_trackPageview']);
_gaq.push(['_trackEvent', 'Open', 'Ticker','Die App wurde geöffnet']);
_gaq.push(['_trackPageLoadTime']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();