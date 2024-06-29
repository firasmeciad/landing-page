let countdown = new Date("jan 01,2025 00:00:00").getTime();
x= setInterval(function(){


let dateNow = new Date().getTime();
let datedefr = countdown - dateNow ;
let mounth =Math.floor(datedefr /(1000*60*60*24*30));
let days = Math.floor((datedefr %(1000*60*60*24*30))/(1000*60*60*24));
let hours = Math.floor((datedefr % (1000*60*60*24))/(1000*60*60));
let muint = Math.floor(((datedefr % (1000*60*60))/(1000*60)));
let seconds =Math.floor(((datedefr % (1000*60))/(1000)));
let mth = document.getElementById("mounth");
mth.innerHTML=mounth;
let dy = document.getElementById("days");
dy.innerHTML=days;
let hs = document.getElementById("hours");
hs.innerHTML=hours;
let mn = document.getElementById("muint");
mn.innerHTML=muint;
let sc = document.getElementById("seconds");
sc.innerHTML=seconds;
},1000);

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  $(function(){
    $(".img_style").fadeIn(2000);
    var x_width= $(window).width();
    console.log(x_width);
    $( window ).resize( function() {
    if( $( window ).width() > 768){
      $(".image_02").mouseenter(function(){
        $(".animate").css('grid-template-columns','23% 49% 23%');
        $(".image_01").css('transform','translateX(-15%)')
        $(".image_03").css('transform','translateX(-60%)')

    });
    $(".image_03").mouseenter(function(){
        $(".animate").css('grid-template-columns','23% 23% 49%');
        $(".image_03").css('transform','translateX(0%)')


    });
    $(".image_01").mouseenter(function(){
        $(".image_01").css('transform','translateX(0%)')
        $(".animate").css('grid-template-columns','49% 23% 23%');
        $(".image_03").css('transform','translateX(-60%)')
    });
    $(".animate").mouseleave(function(){
        $(".image_01").css('transform','translateX(0%)')
        $(".animate").css('grid-template-columns','49% 23% 23%');
        $(".image_03").css('transform','translateX(-60%)')
    });
    };
  });
   



});

