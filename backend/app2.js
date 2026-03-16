let deudas = JSON.parse(localStorage.getItem('deudas')) || {
    1 : {
        idUsuario: 1,
        nombre: "nombreDeudor",
        correo: "correoDeudor",
        telefono: "telefonoDeudor",
        montoTotal: "monto",
        montoPendiente: 150000,
        descripcion: "descripcion",
        fechaCreacion: "02/10/2023",
        abonos: []
    },
    2 : {
        idUsuario: 2,
        nombre: "nombreDeudor",
        correo: "correoDeudor",
        telefono: "telefonoDeudor",
        montoTotal: "monto",
        montoPendiente: 120000,
        descripcion: "descripcion",
        fechaCreacion: "02/10/2023",
        abonos: []
    }
};

function mostrarDeudas() {
    let contenido = "";
  
    for (let key in deudas) {
        let deuda = deudas[key];
        contenido += `
            <tr>
                <td>${deuda.idUsuario}</td>
                <td>${deuda.nombre}</td>
                <td>${deuda.correo}</td>
                <td>${deuda.telefono}</td>
                <td>${deuda.montoTotal}</td>
                <td>${deuda.montoPendiente}</td>
                <td>${deuda.descripcion}</td>
                <td>${deuda.fechaCreacion}</td>
            </tr>
        `;
    }
    document.getElementById("mostrarDeudas").innerHTML = contenido;
}


function CrearDeuda() {
    let idUsu = parseInt(document.getElementById("idUsuario").value);
    let nombreDeudor = document.getElementById("nombreDeudor").value;
    let correoDeudor = document.getElementById("correoDeudor").value;
    let telefonoDeudor = document.getElementById("telefonoDeudor").value;
    let monto = parseFloat(document.getElementById("monto").value);
    let descripcion = document.getElementById("descripcion").value;
    let fechaCreacion = new Date().toISOString().split('T')[0];
  
    deudas[idUsu] = {
      idUsuario : idUsu,
      nombre: nombreDeudor,
      correo: correoDeudor,
      telefono: telefonoDeudor,
      montoTotal: monto,
      montoPendiente: monto,
      descripcion: descripcion,
      fechaCreacion: fechaCreacion,
      abonos: []
    };
  
    localStorage.setItem('deudas', JSON.stringify(deudas));
    alert(" Deuda creada exitosamente");
};

function AbonarDeuda() {
    let idUsu = parseInt(document.getElementById("idUsuario").value);
    let cuantoAbona = parseFloat(document.getElementById("cuantoAbona").value);
    let fechaAbono = document.getElementById("fechaAbono").value;

    console.log("ID usuario:", idUsu);
    console.log("Cuánto abona:", cuantoAbona);
    console.log("Fecha abono:", fechaAbono);
    console.log("Deuda encontrada:", deudas[idUsu]);

  
    if (!deudas[idUsu]) {
      alert(" No se encontró ninguna deuda para este ID.");
      return;
    } else {
        let deuda = deudas[idUsu];
        deuda.montoPendiente -= cuantoAbona;
        if (deuda.montoPendiente < 0) deuda.montoPendiente = 0;

        deuda.abonos.push({
            cantidad: cuantoAbona,
            fecha: fechaAbono || new Date().toISOString().split('T')[0]
        });

        localStorage.setItem('deudas', JSON.stringify(deudas));
        alert(" Abono realizado exitosamente");
    }
}

function CerrarDeuda() {
    let id = parseInt(document.getElementById("idUsuario").value);
  
    if (!deudas[id]) {
      alert(" No se encontró deuda para este ID.");
      return;
    } 
    if (confirm("¿Está seguro de cerrar (eliminar) esta deuda?")) {
        delete deudas[id];
        localStorage.setItem('deudas', JSON.stringify(deudas));
        alert(" Deuda cerrada correctamente.");
    }
}