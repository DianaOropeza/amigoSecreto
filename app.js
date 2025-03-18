// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let lista=document.getElementById("listaAmigos");

function agregarAmigo(){
    const mensaje = document.getElementById("amigo").value;

    if(mensaje!="") {
        document.getElementById("resultado").innerHTML="";
        amigos.push(mensaje);
        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus();
        lista.innerHTML = "";
        for (let i = 0; i < amigos.length; i++) {
            let nuevoElemento = document.createElement("li"); // Crear <li>
            nuevoElemento.textContent = amigos[i]; // Asignar el nombre del amigo
            lista.appendChild(nuevoElemento); 
        }
    }
    else {
        alert("Por favor, inserte un nombre.");
    }
}

function sortearAmigo(){
    if(amigos.length != 0){
        let numero = amigos.length;
        let random = Math.floor(Math.random() * numero);
        document.getElementById("resultado").innerHTML=amigos[random];
      lista.innerHTML = ""; // Vaciar la lista
      amigos=[];
    }
    else{
        
    }
}