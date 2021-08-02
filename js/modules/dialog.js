define([
    "jquery",
    "jquery-ui.min"
],function ($) {
    'use strict'

    $( function() {
        $( "#dialog-single-player, #dialog-multiplayer" ).dialog({
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
        $( "#multiplayer" ).on( "click", function() {
            $( "#dialog-multiplayer" ).dialog( "open" );
        });
    } );
});