console.log("hola mundo")
,
function generarProductos() {
    const productos = [
        {
            id :"1",
            name: "primer producto",
            descripcion: "descripcion de un producto, el primero",
            amount: 2000,
        },
        {
            id :"2",
            name: "segundo producto",
            descripcion: "descripcion de un producto, el segundo",
            amount: 2400
        },
        {
            id :"3",
            name: "tercer producto",
            descripcion: "descripcion de un producto, el tercero",
            amount: 1000
        },
        {
            id :"4",
            name: "cuarto producto",
            descripcion: "descripcion de un producto, el final",
            amount: 1500
        }
    ]

    return productos;
}


function validarContacto(evento) {
    evento.preventDefault();
    console.log("validando")
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    console.log(nombre, email, asunto, mensaje)
    if (nombre && email && asunto && mensaje) {
        console.log("todos campos completados")
    } else {
        console.log("faltan campos")
    }

}

let enviarContacto = document.getElementById("enviar");
if (enviarContacto) {
    enviarContacto.addEventListener('click', validarContacto)
}

function ocultarDescripcion(id) {
    console.log('ocultarDescripcion')
    if (document.getElementById(id).style.display === 'block') {
        document.getElementById(id).style.display = 'none'
    } else {
        document.getElementById(id).style.display = 'block';
    }
}
const infoCarolina = document.getElementById("info-carolina");
if (infoCarolina) {
    infoCarolina.addEventListener('click', () => {
        ocultarDescripcion('centrado-carolina');
    });
}

const infoDior = document.getElementById("info-dior");
if (infoDior) {
    infoDior.addEventListener('click', () => {
        ocultarDescripcion('centrado-dior');
    });
}

const infoDolce = document.getElementById("info-dolce");
if (infoDolce) {
    infoDolce.addEventListener('click', () => {
        ocultarDescripcion('centrado-dolce');
    });
}
const infoLancome = document.getElementById("info-lancome");
if (infoLancome) {
    infoLancome.addEventListener('click', () => {
        ocultarDescripcion('centrado-lancome');
    });
}
const infoMessi = document.getElementById("info-messi");
if (infoMessi) {
    infoMessi.addEventListener('click', () => {
        ocultarDescripcion('centrado-messi');
    });
}
const infoNarciso = document.getElementById("info-narciso");
if (infoNarciso) {
    infoNarciso.addEventListener('click', () => {
        ocultarDescripcion('centrado-narciso');
    });
}

