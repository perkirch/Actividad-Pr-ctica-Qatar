// Validación Login
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("log").addEventListener('submit', validarLogin); 
  });
  
  function validarLogin(evento) {
    evento.preventDefault();

    var usuario = document.getElementById("usuario").value;
    if(usuario.length <=5) {
      alert('El usuario debe contener al menos 6 caracteres')
      return;
    }

    var clave = document.getElementById("clave").value;
    if (clave.length <=5) {
      alert('La clave debe tener al menos 6 caracteres');
      return;
    }
    if (clave.length >=10) {
      alert('La clave debe tener menos de 10 caracteres');
      return;
    }
  
   for (let i = 0 ; i < clave.length ; i++) {
        if(clave[i]="0" && clave[i]<="9"){
          alert('La clave debe contener un número');
          return;
        }
      }
    
    
     this.submit();
  }
  
  
  