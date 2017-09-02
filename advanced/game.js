var playerIDs = ["obi", "luke", "darth", "mimi"];


$(".playerOptions").click(function(event) {
    //look for class it currently has
    //if it's player make it

    console.log(event);



    for (var i = 0; i < this.classList.length ; i++) {
        //console.log(this.classList[i]);

        if (this.classList[i] === "player") {
            for (var j = 0; j < playerIDs.length; j++) {
                if (playerIDs[j] !== this.id) {
                    //remove class
                    console.log("we're in");
                    //console.log();
                    $("#" + playerIDs[j] ).addClass( "enemy" );
                    $("#" + playerIDs[j] ).removeClass( "player" );
                    $("#enemy").append($("#" + playerIDs[j] ));
                }
            }

        } else if (this.classList[i] === "enemy") {

            $("#" + this.id).addClass( "defender" );
            $("#" + this.id).removeClass( "enemy" );
            $("#defender").append($("#" + this.id ));

        } else if (this.classList[i] === "defender" ) {

            $("#" + this.id).addClass( "enemy" );
            $("#" + this.id).removeClass( "defender" );
            $("#enemy").append($("#" + this.id ));

        }
    }

    //var myClasslist = this.classList.indexOf("player");
    //console.log(myClasslist);



});

console.log("hi",$("div:last").html().length);
console.log($("div:last").html());

if ( $('#defender').children().length === 0) {
    console.log("ein");
}

//if  ($("div:last").html().length === 2) {
//    console.log("Hi!");
//}

console.log("hi");

//TODO check inner html of defender to see if anything is there. If it is, need to move it up b4 moving anything down.

