(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    Swal.fire({
                        title: 'Error!',
                        text: '¡Por favor, verifica los datos ingresados!',
                        icon: 'error',
                        confirmButtonText: 'Continuar'
                    })
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                    Swal.fire({
                        title: '¡Gracias!',
                        text: 'Un agente se comunicara a la brevedad',
                        icon: 'success',
                        confirmButtonText: 'Continuar',
                    }).then((result) => {
                        if (result.isConfirmed) { window.location.href = "index.html" }
                    })
                }

                form.classList.add('was-validated')

            }, false)
        })
})()










