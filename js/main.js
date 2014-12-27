/* jshint esnext: true, browser: true, easy: true */
(function(window) {
    'use strict';
    //screen.mozLockOrientation("landscape");
    // Prefetch it to cache, then change location.
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'http://stackoverflow.com/questions/tagged/firefox-os');
    iframe.classList.add('hidden');
    iframe.addEventListener('load', function() {
        console.log('loaded, bye!');
        document.location = 'http://stackoverflow.com/questions/tagged/firefox-os';
    });
    document.body.appendChild(iframe);
})(this);
