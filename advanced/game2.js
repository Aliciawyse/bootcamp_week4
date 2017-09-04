
var obiHealth = 120;
var obiAttack = 8;

var lukeHealth = 100;
var lukeAttack = 5;

var darthHealth = 150;
var darthAttack =  20;

var mimiHealth = 180;
var mimiAttack = 25;

var unlockGame = false;

document.getElementById("obiHealth").innerHTML = obiHealth;
document.getElementById("lukeHealth").innerHTML = lukeHealth;
document.getElementById("darthHealth").innerHTML = darthHealth;
document.getElementById("mimiHealth").innerHTML = mimiHealth;


$("#player").click(function(event) {

    //console.log(event);

    //for example id = 'luke'
    var chosenCharacter = event.target.id;

    //an array-like list
    var allFourChildren = event.currentTarget.children;

    //loop backwards otherwise due to shrinking list items will be skipped
    for (var i = allFourChildren.length - 1; i >=0 ; i-- ) {

        if (chosenCharacter !== allFourChildren[i].id) {

            //console.log(allFourChildren[i].id);
            //console.log(allFourChildren[i]);

            $("#" + allFourChildren[i].id).removeClass( "player" );
            $("#" + allFourChildren[i].id).addClass( "enemy" );

            $("#enemy").append(allFourChildren[i]);
        }
    }
});


$("#enemy").click(function(event) {

    var chosenEnemy = event.target.id;
    var allThreeChildren = event.currentTarget.children;

    for (var i = allThreeChildren.length - 1; i >= 0; i--) {

        if (chosenEnemy === allThreeChildren[i].id && $("#defender").children().length === 0) {

            //console.log(allThreeChildren[i].id);

            $("#" + allThreeChildren[i].id).removeClass( "enemy" );
            $("#" + allThreeChildren[i].id).addClass( "defender" );

            $("#defender").append(allThreeChildren[i]);


            unlockGame = true;

        }
    }
});


$("#attack").click(function() {

    if (unlockGame === true) {
        console.log("hi");
    }


})






