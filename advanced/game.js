var playerIDs = ["obi", "luke", "darth", "mimi"];


$(".playerOptions").click(function(event) {
    //look for class it currently has
    //if it's player make it


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




                    //add class
                }
            }

        } else if (this.classList[i] === "enemy") {

            $("#" + this.id).addClass( "defender" );
            $("#" + this.id).removeClass( "enemy" );
            $("#defender").append($("#" + this.id ));

        } else if (this.classList[i] === "defender") {

        }
    }

    //var myClasslist = this.classList.indexOf("player");
    //console.log(myClasslist);



});


//TODO check inner html of defender to see if anything is there. If it is, need to move it up b4 moving anything down.

//what are the common questions folks have with product
//appy those skills to the product for the customers.

//making better product for company
//being a team lead
//go into product management

//self starter, 9-5 don't need someone to tell me what to do...

//he needs someone who can hit the ground running...

//if I notice trends