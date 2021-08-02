requirejs([
    "modules/local-storage",
    "jquery",
    "underscore",
    "jquery-ui.min"
], function(localStorage, $, _) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    'use strict'

    $( function() {
        $( "#dialog-single-player" ).dialog({
            buttons: [
                {
                    text: "Start Game",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            closeText: "Back",
            title: "Chose a game",
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 500
            },
            hide: {
                effect: "explode",
                duration: 500
            }
        });

        $( "#single-player" ).on( "click", function() {
            $( "#dialog-single-player" ).dialog( "open" );
        });
    } );
});

