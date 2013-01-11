// ==UserScript==
// @name           Speech for Elbot
// @namespace      kaxap
// @description    Userscript for Elbot. Adds speech recognition/synthesis from Google.
// @include        http://elbot_e.csoica.artificial-solutions.com/cgi-bin/*
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  //get text field
  var entry = $('input[name="ENTRY"]');
  
  //add speech recognition (currently Chrome only)
  entry.attr('x-webkit-speech', 'x-webkit-speech');
  
  //get Elbot's text
  var text = entry.parent().parent().prev().children().first().next().text().trim();
  
  if (text != '' && text != undefined && text != null)
  {
    chrome.tts.speak(text);
  }
}

// load jQuery and execute the main function
addJQuery(main);

  



