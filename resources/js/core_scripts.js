$(document).ready(function(){

    var nav_data = $(".nav_header").data("value"); // Check for page. i.e.: home,mynetworks,personalinfo
    
    if(nav_data == "home"){ // Triggers only for home page

        // Getting current dateTime and getting hour from that and setting wishes
        date = new Date();
        currHours = date.getHours();
        var greet = "";
        if(currHours < 12){
            greet = "Good morning,";
        }
        else if(currHours < 18){
            greet = "Good afternoon,";
        }
        else{
            greet = "Good evening,";
        }

        $("#day-wish").html(greet); // Setting wishes

        // Close btn behaviour welcome pad
        $("#close-wlcm-bnr").click(() => {
            $(".welcome-container").css("display", "none");
        });
    }
     
});
