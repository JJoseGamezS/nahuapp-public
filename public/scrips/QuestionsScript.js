document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencia a todos los enlaces con la clase "start-btn"
    const start_btns = document.querySelectorAll(".start-btn");

    // Agregar event listener a cada enlace "Comenzar"
    start_btns.forEach(function(start_btn) {
        start_btn.addEventListener('click', function (event) {
            // Evitar que el enlace redirija a una nueva página
            event.preventDefault();

            // Obtener los valores de los atributos "topic" y "quizz" del enlace actual
            const topic = start_btn.getAttribute('topic');
            const quizz = start_btn.getAttribute('quizz');

            // Guardar las variables en el localStorage
            localStorage.setItem('topic', topic);
            localStorage.setItem('quizz', quizz);

            // Redirigir a la página de destino
            window.location.href = './../../scrips/quizzes/quizz.html'; 
        });
    });
});

//Modal
$(document).ready(function () {
    $('#exampleModal').modal('toggle')
  });