$(document).ready(function() {
    
    // import api
    var s = document.createElement("script");
    s.type="text/javascript";
    s.src = chrome.extension.getURL("js/API.js");
    document.body.appendChild(s);

    // parse hashcode
    var href = decodeURI(window.location.href);
    if (href.indexOf("?squirtle-hash=") !== -1) {
        href = href.slice(href.indexOf("?squirtle-hash=") + "?squirtle-hash=".length);
        var hashCode = href.slice(0, href.indexOf("#endHash"));
        var state = parseHash(hashCode);
        fillForms(state.inputs);
        scrolling(state.offset);
    }
});

var scrolling = function (finish) {
    var body = $("html, body");
    body.animate({scrollTop:finish}, '1000', 'swing', function() { });
};

var fillForms =  function (inputs) {
	inputs.forEach(function(input) {
		var selector = "[" + input.attributeType + "='" + input.id + "']";  
		var element = $('html').find(selector);
        if (input.type === "textarea") {
            element.html(input.value);
        } else {
		    element.val(input.value);
        }
	});
}}



// var mouseMove = function () {
// 	$('body').css('cursor','none');
// 	$('body').prepend("<img id=cursor4432 src='http://i.stack.imgur.com/sAqmU.png' >");
// 	$("#cursor").animate({
// 			left: 
// 		,	right: 
	
// 	}, 400);

// }
