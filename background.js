'use strict';

chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
  var headers = details.requestHeaders,
  blockingResponse = {};

  for( var i = 0, l = headers.length; i < l; ++i ) {
    if( headers[i].name == 'User-Agent' ) {
      headers[i].value = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
      console.log(headers[i].value);
      break;
    }
  }

  blockingResponse.requestHeaders = headers;
  return blockingResponse;
},
{urls: [ "*://*.youtube.com/*" ]},['requestHeaders','blocking']);
