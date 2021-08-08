requirejs([
    "modules/local-storage",
    "jquery",
    "underscore",
    "jquery-ui.min"
], function(localStorage, $, _) {
    'use strict'

    $( function() {
        $( "#dialog-single-player, #dialog-multiplayer" ).dialog({
            buttons: [
                {
                    text: "Start Game",
                    click: function() {
                        $( this ).dialog( submitGame(this) );
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

    function submitGame(e) {

        const formId = $(e).attr('id');
        let gameArray = [],
            gameArrayCopy;

        // Get all the selected inputs
        $("#"+formId+" :input").each(function(){
            let input = $(this),
                setting = $(this).closest('div').attr('data-type');

            if(input[0].checked) {
                let inputValue = $(input).val(),
                    setting = []

                // Create key: value pairs
                setting = {setting: inputValue};

                // Push the setting inyo gameArray
                gameArray.push(setting);
            }
        });

        // Change Array to Object so we can stringify it
        gameArrayCopy = Object.assign({}, ...gameArray);

        // Set the settings in the local storage
        localStorage.setItem('darts-game', JSON.stringify(gameArrayCopy));

        // Redirect to the game page
        window.location.replace("game.html");
    }
});
