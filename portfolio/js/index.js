$(window).scroll(function(){
    if($(this).scrollTop() >=200){
        $("#navbar").addClass("noTransparent");
    } else {
        $("#navbar").removeClass("noTransparent");
    }
})
$(Document).ready(function(){
    $('.circle').circleProgress({
        startAngle:-Math.PI / 2,
        fill: "#0575e6"
    }).on("circle-animation-progress", function(event , progress ,stapValue){
        $(this).find('span').html(Math.round(stapValue*100)+'%');
    })
    $(function(){
        $("#contact-Form").validate();
    })
})