// Validación Formulario

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formu").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value;
    if(nombre.length == 0) {
      alert('Escribe tu nombre');
      return;
    }
    const apellido = document.getElementById("apellido").value;
    if(apellido.length == 0) {
      alert('Escribe tu apellido');
      return;
    }
    const email = document.getElementById("email").value;
    if(email.length == 0) {
      alert('Escribe tu email');
      return;
    }
    const nacimiento = document.getElementById("nacimiento").value;
    if(nacimiento.length ==0) {
      alert('Escribe tu fecha de nacimiento');
      return;
    }
    const pais = document.getElementById("pais").value;
    if(pais.length == 0) {
      alert('Escribe tu país');
      return;
    }
   const terminos = document.getElementById("terminos");
    if(terminos.checked == false) {
    alert('Acepta los términos');
    return;
  }
    this.submit();
  }
  
  