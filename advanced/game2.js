$("#player").click(function(event) {

    //console.log(event);

    //for example id = 'luke'
    var chosenCharacter = event.target.id;

    //an array-like list
    var allFourChildren = event.currentTarget.children;




    for (var i = allFourChildren.length - 1; i >=0 ; i-- ) {


        if (chosenCharacter !== allFourChildren[i].id) {

            console.log(allFourChildren[i].id);
            console.log(allFourChildren[i]);


            $("#" + allFourChildren[i].id).removeClass( "player" );

            $("#" + allFourChildren[i].id).addClass( "enemy" );

            $("#enemy").append(allFourChildren[i]);


        }
    }

});


