$(document).ready(function(){
    $("#search-btn").click(() => {
        $("#search-icon").css("display", "none");
        $(".nav_other").css("display", "none");
        $("#search-box").css("display", "block");
        // $("#search-box").show();
    });
    
    // if($("#search-input").focus()){
    //     $(".search-container").css("border-color", "rgb(92, 91, 91)");
    // }
    // else{
    //     $("#search-input").blur();
    // }

});

$(document).mouseup(function(e){
    var container = $("#search-box");

    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        // $("#search-box").hide();
        $("#search-box").css("display", "none");
        $("#search-icon").css("display", "flex");
        $(".nav_other").css("display", "flex");
    }
});
