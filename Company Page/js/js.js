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

    

    $(window).scroll(function(){
      let sc =  $(window).scrollTop()
      if(sc>600){
          $(".navbar").css('background-color','rgb(22, 174, 202)');
          $(".nav-link").addClass("navbar_scroll");

      }
      else{
        $(".navbar").css('background-color','hsl(240, 15%, 92%,0.1)');
          $(".nav-link").removeClass("navbar_scroll");
      }

    });


     
    


  });

   
