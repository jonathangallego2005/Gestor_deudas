let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {
  1038541102: {
    cedula: 1038541102,
    nombres: "Jonathan",
    apellidos: "García",
    correo: "jonathan@gmail.com",
    contrasena: "12345",
    rol: "usuario",
  }
};


function login() {
  let cedula = document.getElementById("cedula_secion").value;
  let correo = document.getElementById("correo_secion").value;
  let contrasena = document.getElementById("contrasena_secion").value;

  for (let key in usuarios) {
    let usuario = usuarios[key];

    if (
      usuario.cedula.toString() === cedula &&
      usuario.correo === correo &&
      usuario.contrasena === contrasena
    ) {
      alert("¡Inicio de sesión exitoso!");
      localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
      window.location.href = "./ver_deudas.html";
      return;
    }
  }

  alert("El usuario o la clave son incorrectos");
}

function CrearUsuario() {
  let nombre = document.getElementById("nombre_registro").value;
  let cedula = document.getElementById("cedula_registro").value;
  let correo = document.getElementById("correo_registro").value;
  let contrasena = document.getElementById("contrasena_registro").value;

  usuarios[nombre] = {
    nombre : nombre,
    cedula: cedula,
    correo: correo,
    contrasena: contrasena,
  };

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert(" registrado exitosamente");
};