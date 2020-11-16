function cargatiempo(){
var contador = document.getElementById("tiempo");
var i =30;
	var timer = setInterval(function(){
	var reloj= "<p id='reloj'>"+i+"</p>";
	contador.innerHTML=reloj;	
	i--;
	if(i<5){
		contador.style.backgroundColor="#A93226";
		document.getElementById("reloj").style.color="#FFFFFF";
	}
	if(i==0){
		detenerTiempo(timer);
		agregar();
		var pagpreguntas = document.getElementById("preguntas");
			var pagrespuestas= document.getElementById("final");
			pagpreguntas.style.display="none";
			pagrespuestas.style.display="block";
			calificador();
	}
}, 1000);
}
function detenerTiempo(timer){

	clearInterval(timer);
}
function agregar(){
	while(respuestas.length != respaux.length){
			var i=0;
			var valor =3;
			respuestas.push(valor);
		}
}

