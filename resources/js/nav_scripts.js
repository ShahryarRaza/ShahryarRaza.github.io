$(document).ready(function(){
    $("#search-btn").click(() => {
        $("#search-icon").css("display", "none");
        $(".nav_other").css("display", "none");
        $("#search-box").css("display", "block");
        $("#search-input").attr("placeholder", "Search in the site...");
        // $("#search-input").val("");
        $("#search-input").focus();
    });

    $("#search-input").on("keyup keypress", (e) => {
        const keyCode = e.keyCode || e.which;
        const text = $("#search-input").val();
        if (keyCode === 13) {
            if (text === "" || $.trim(text) === "") {
                $(".search-container").css("background-color", "rgb(255, 124, 124)");
                $(".search-box-input").css("background-color", "rgb(255, 124, 124)");
                $("#search-input").attr("placeholder", "Can\'t search without text. Type something...");
            }
            else{
                location.replace("search.html?query="+text);
            }
        }
    });

    // Checking page with data-value
    var nav_data = $(".nav_header").data("value");
    if(nav_data == "home"){
        $("#home-icon").css("border-bottom", "5px solid black");
        $("#home-btn").css("color", "rgb(0, 0, 0)");
        $("#home-btn").css("font-size", "20pt");

        // Network button hover effect
        networksHoverEffect();

        // Personal button hover effect
        personalHoverEffect();
    }
    if(nav_data == "networks"){
        $("#network-icon").css("border-bottom", "5px solid black");
        $("#network-btn").css("color", "rgb(0, 0, 0)");
        $("#network-btn").css("font-size", "20pt");

        // Home button hover effect
        homeHoverEffect();

        // Personal button hover effect
        personalHoverEffect();
    }
    if(nav_data == "personal"){
        $("#cv-icon").css("border-bottom", "5px solid black");
        $("#cv-btn").css("color", "rgb(0, 0, 0)");
        $("#cv-btn").css("font-size", "20pt");

        // Home button hover effect
        homeHoverEffect();

       // Network button hover effect
        networksHoverEffect();
    }
    if(nav_data == "search"){
        $("#search-icon").css("display", "none");
        $(".nav_other").css("display", "none");
        $("#search-box").css("display", "block");
        $("#search-input").val("");

        // Change /Sr logo to back button
        $("#github-logo").hover(() => {
            $("#github-logo").css("content", "url('../../resources/favicon/nav_back_down.png')");
        }, () => {
            $("#github-logo").css("content", "url('../../resources/favicon/nav_back_normal.png')");
        });

        // Changing ref attribute to go back of the page
        $("#github-ref").attr("href", "#");
        $("#github-ref").attr("onclick", "location.href = document.referrer; return false;");
        // $("#github-ref").attr("href", "javascript:history.back()");
        $("#github-logo").attr("title", "Back");
        document.querySelector('img[name="github-logo"]').src = "resources/favicon/nav_back_normal.png";
        // $("github-logo").attr("this.src", "../../resources/favicon/nav_back_normal.png");
        // document.getElementById("github-logo").src = "../../resources/favicon/nav_back_normal.png";

        // Get Search Query from querystring
        var query = GetParameterValues('query');
        function GetParameterValues(param) {
            var querystring = location.search.slice(location.search.indexOf('?') + 1).split('&');
            for (var i = 0; i < querystring.length; i++) {
                var queryparam = querystring[i].split('=');
                if (queryparam[0] == param) {
                    return queryparam[1];
                }
            }
        };
        $("#search-input").val(decodeURIComponent(query));
        $("#search-term").html("\"" + decodeURIComponent(query) + "\"");
    }
    if(nav_data != "search"){
        hideSearchOnMouseUp();
    }
});

// function changeSrcOnSearchPage(ctxt){
//     if($(".nav_header").data("value") == "search"){
//         ctxt.firstChild.src = "../../resources/favicon/nav_back_normal.png";
//     }
// }

function homeHoverEffect(){
    $("#home-btn").hover(() => {
        $("#home-icon").css("border-bottom", "5px solid black");
        $("#home-btn").css("color", "rgb(0, 0, 0)");
        $("#home-btn").css("font-size", "20pt");
    }, () => {
        $("#home-icon").css("border-bottom", "5px solid transparent");
        $("#home-btn").css("color", "rgb(92, 91, 91)");
        $("#home-btn").css("font-size", "18pt");
    });
}

function networksHoverEffect(){
    $("#network-btn").hover(() => {
        $("#network-icon").css("border-bottom", "5px solid black");
        $("#network-btn").css("color", "rgb(0, 0, 0)");
        $("#network-btn").css("font-size", "20pt");
    }, () => {
        $("#network-icon").css("border-bottom", "5px solid transparent");
        $("#network-btn").css("color", "rgb(92, 91, 91)");
        $("#network-btn").css("font-size", "18pt");
    });
}

function personalHoverEffect(){
    $("#cv-btn").hover(() => {
        $("#cv-icon").css("border-bottom", "5px solid black");
        $("#cv-btn").css("color", "rgb(0, 0, 0)");
        $("#cv-btn").css("font-size", "20pt");
    }, () => {
        $("#cv-icon").css("border-bottom", "5px solid transparent");
        $("#cv-btn").css("color", "rgb(92, 91, 91)");
        $("#cv-btn").css("font-size", "18pt");
    });
}

function hideSearchOnMouseUp(){
    $(document).mouseup(function(e){
        var container = $("#search-box");
    
        // If the target of the click isn't the container
        if(!container.is(e.target) && container.has(e.target).length === 0){
            $("#search-box").css("display", "none");
            $("#search-icon").css("display", "flex");
            $(".nav_other").css("display", "flex");
    
            // Resetting any modification
            $(".search-container").css("background-color", "rgb(238, 243, 248)");
            $(".search-box-input").css("background-color", "rgb(238, 243, 248)");
        }
    });
}
