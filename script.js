// GALLERY MODAL
document.addEventListener('DOMContentLoaded', function () {
    var projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            var button = event.relatedTarget;

            // Extract info from data-bs-* attributes (or custom data-* attributes)
            var title = button.getAttribute('data-project-title');
            var img = button.getAttribute('data-project-img');
            var desc = button.getAttribute('data-project-desc');
            var tech = button.getAttribute('data-project-tech');

            // Update the modal's content.
            var modalTitle = projectModal.querySelector('.modal-title');
            var modalBodyImg = projectModal.querySelector('#modalProjectImg');
            var modalBodyDesc = projectModal.querySelector('#modalProjectDesc');
            var modalBodyTech = projectModal.querySelector('#modalProjectTech');

            modalTitle.textContent = title;
            modalBodyImg.src = img;
            modalBodyImg.alt = title + " screenshot"; // Add alt text
            modalBodyDesc.textContent = desc;

            // Clear previous tech items and add new ones
            modalBodyTech.innerHTML = ''; // Clear existing content
            if (tech) {
                var techList = tech.split(', '); // Split by comma and space
                techList.forEach(function(techItem) {
                   var span = document.createElement('span');
                   span.className = 'badge bg-secondary text-dark me-1 mb-1'; // Use secondary badge for tech
                   span.textContent = techItem.trim();
                   modalBodyTech.appendChild(span);
                });
            } else {
                 modalBodyTech.textContent = 'Details not available.';
            }
        });
    }
});

// FORM VALIDATION

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  