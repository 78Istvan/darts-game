requirejs([
    "modules/local-storage",
    "jquery",
    "underscore"
], function(localStorage, $, _) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    'use strict'

    console.log('darts.js loaded');
    console.log(localStorage.getHello());

    localStorage.setItem('test-key', 'test value')

    $('.footer').text(localStorage.getItem('test-key'));
});

