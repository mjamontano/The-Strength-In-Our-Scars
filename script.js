// Get all modal buttons
var modalBtns = document.querySelectorAll(".modal-btn");

// Loop through each modal button
modalBtns.forEach(function(btn) {
  // Get the modal ID from the data-modal-id attribute
  var modalId = btn.getAttribute("data-modal-id");
  // Get the modal element by ID
  var modal = document.getElementById(modalId);
  // Get the close button inside the modal
  var closeBtn = modal.querySelector(".close");

  // When the button is clicked, open the corresponding modal
  btn.addEventListener("click", function() {
    modal.style.display = "block";
  });

  // When the close button is clicked, close the modal
  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
