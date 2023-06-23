

let boton = document.getElementById("btnRegistrar");

boton.addEventListener("click", evento =>{
    registrarUsuario();
});

let registrarUsuario = async()=>{

let campos={};

campos.correo = document.getElementById("correo").value;
campos.password = document.getElementById("password").value;
campos.usuario = document.getElementById("usuario").value;



const peticion = await fetch("http://localhost:8080/api/auth/signup",
{
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(campos)
});

}