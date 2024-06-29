let play_vid_state = false;
const playVid = () => {
  if (play_vid_state == false) {
    let video = document.getElementById("video");
    video.play();
    play_vid_state = true;
  } else if (play_vid_state) {
    video.pause();
    play_vid_state = false;
  }
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
