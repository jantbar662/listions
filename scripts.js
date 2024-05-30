
function abrirMenu() {
	var visibility = document.getElementById('menu').style.visibility;
	if (visibility =='hidden')
		document.getElementById('menu').style.visibility='visible';
	else 
		document.getElementById('menu').style.visibility='hidden';
	}

function mostrarCrear() {
	document.getElementById('contenidoCrear').style.visibility='visible';
	document.getElementById('contenidoVer').style.visibility='hidden';
	document.getElementById('lista').style.visibility='hidden';
	}
function crearLista(){
	var tituloLista = document.getElementById("tituloLista").value;
	localStorage.setItem("tituloLista", tituloLista);
	document.getElementById("nombreListaV").innerHTML = tituloLista;
	document.getElementById("nombreListaM").innerHTML = tituloLista ;
	alert("Se ha guardado la lista")
	tituloLista.value = '';
 	}

function mostrarVer() {
	document.getElementById('contenidoCrear').style.visibility='hidden';
	document.getElementById('contenidoVer').style.visibility='visible';
	document.getElementById('lista').style.visibility='hidden';
	var tituloLista=localStorage.getItem("tituloLista");
	document.getElementById("nombreListaV").innerHTML = tituloLista;
	
	}
function verLista(){
 	document.getElementById('contenidoCrear').style.visibility='hidden';
	document.getElementById('contenidoVer').style.visibility='hidden';
 	document.getElementById('lista').style.visibility='visible';
 	var tituloLista=localStorage.getItem("tituloLista");
	document.getElementById("nombreListaM").innerHTML = tituloLista;
	//Pros
	var pros= document.getElementById("pros");
	var storedPros = JSON.parse(localStorage.getItem("storedPros")) || [];
	storedPros.forEach((pro) => {
		var nuevoElemento = document.createElement("li");
		nuevoElemento.textContent = pro;
		pros.appendChild(nuevoElemento);
	});
	//Contras
	var contras= document.getElementById("contras");
	var storedContras = JSON.parse(localStorage.getItem("storedContras")) || [];
	storedContras.forEach((contra) => {
		var nuevoElemento = document.createElement("li");
		nuevoElemento.textContent = contra;
		contras.appendChild(nuevoElemento);
	});
	}


function anadirPro(){
	var pros= document.getElementById("pros");
	var pro = document.getElementById("Apro").value;
	var nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = pro;
    pros.appendChild(nuevoElemento);
    pro.value = '';
	var storedPros = JSON.parse(localStorage.getItem("storedPros")) || [];
	storedPros.push(pro);
	localStorage.setItem("storedPros",JSON.stringify(storedPros));
	alert("Se ha guardado el comentario");
	
 	}
function anadirContra(){
	var contra = document.getElementById("Acontra").value;
	var contras = document.getElementById("contras");
	var nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = contra;
    contras.appendChild(nuevoElemento);
    contra.value = '';
	var storedContras = JSON.parse(localStorage.getItem("storedContras")) || [];
	storedContras.push(contra);
	localStorage.setItem("storedContras",JSON.stringify(storedContras));
	alert("Se ha guardado el comentario");
	
 	}


