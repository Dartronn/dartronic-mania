console.log("estoy re loco");

function dartronFalken(){
    console.log("tu hermana puto");
    if(document.getElementById("h1Lol").style.color == "red"){
        document.getElementById("h1Lol").style.color="blue";
    }
    else{
        document.getElementById("h1Lol").style.color="red";
    }
}

function envioRespuesta(){
    if(document.getElementById("decision_registro").value == "SI"){
        alert("Bienvenido al FAB.");
        document.getElementById("div_ingreso_nombre").style.display = "block";
        document.getElementById("div_decision_registro").style.display = "none";
    }
    else if(document.getElementById("decision_registro").value == ""){
        alert("Elija una opción.");
    }
    else{
        alert("Andá a cagar.");
        document.getElementById("div_decision_registro").style.display = "none";
    }
}

function registroNombre(){
    if(document.getElementById("nombre_a_registrar").value.toLowerCase() == "falken"){
        window.open("https://i1.sndcdn.com/artworks-000015364470-671i8t-t500x500.jpg");
    }
    else if(document.getElementById("nombre_a_registrar").value != ""){
        alert("Su nombre ha sido registrado. Gracias.");
        document.getElementById("nombre_a_registrar").value = "";
        document.getElementById("div_decision_registro").style.display = "none";
        document.getElementById("div_ingreso_nombre").style.display = "none";
    }
    else{
        alert("Ingrese un nombre por favor.");
    }
}

//function abrirImagenPublicidad1(){
    window.open("https://mir-s3-cdn-cf.behance.net/projects/404/76801b145856159.Y3JvcCwxMjY1LDk4OSwwLDQ2.jpg");
//}

//function abrirImagenPublicidad2(){
    window.open("https://i.pinimg.com/originals/bc/1f/ba/bc1fba04aeb093312d89e9bcf141be31.jpg");
//}

//function abrirImagenPublicidad3(){
    window.open("https://www.shutterstock.com/image-vector/barber-shop-vector-vintage-poster-260nw-1932645428.jpg");
//}


function abrirImagenPublicidad(){
    window.open("https://www.youtube.com/@Brgotastico");
}

