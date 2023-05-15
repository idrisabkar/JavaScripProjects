let clicked = false
$(".fas").click(function (e) { 
   if (!clicked) {
    $(".fas").addClass("clicked");
    clicked = true
   } else {
    $(".fas").removeClass("clicked");
    clicked = false
   }
    
});