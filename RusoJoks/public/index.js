$(document).ready(function () {
    $("#button").click(function (e) { 
        $("#joke").text("Loading....");
        
        $.ajax({
            url: "https://official-joke-api.appspot.com/random_joke",
            success: function(result) {
                $("#joke").html(`<h6 id="joke"> ${result.setup} <br> ${result.punchline}</h6>`);
            },
            error: function() {
                $("#joke").text("Error fetching joke.");
            }
        });
    });
});