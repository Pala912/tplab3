var botonInicio = document.getElementById("comenzar");
botonInicio.addEventListener('click',function(){
	var nombre = document.getElementById("nombre").value;
	console.log(nombre);
	var agregarNombre= document.getElementById("name");
	agregarNombre.innerHTML=nombre;

	if (nombre.length>0) {
		var carga = document.getElementById("carga");
		var pregunta = document.getElementById("preguntas");
		carga.style.display="none";
		pregunta.style.display="block";
		cargatiempo();
		
	}
	else{
		alert('se debe ingresar nombre');
	}
		
});


	var orden = elegirPreguntas();
	
	contar = 0;
	mostrar(orden[contar]);
	var respuestas = [];

	/*escucha al boton siguiente*/
	var bsiguiente = document.getElementById("bsiguiente");
	bsiguiente.addEventListener('click',function(){
	var valor =	document.getElementsByName("respuesta");
	contar++;
	if(contar ==4){
		var botonfinalizar = document.getElementById("bfinalizar");
		botonfinalizar.style.display="block";
		bsiguiente.style.display="none";
	}
	for(var i=0; i<valor.length; i++) {
  			if(valor[i].checked==true){
  			respuestas.push(valor[i].value)
  			}
	}	
		document.getElementById("opcion1_4").checked="true";
		mostrar(orden[contar]);
		
		
	});
	/*escucha al boton finalizar*/
	var botonfinalizar = document.getElementById("bfinalizar");
		botonfinalizar.addEventListener('click',function(){
		var contar = 0;
		var valor =	document.getElementsByName("respuesta");
			for(var i=0; i<valor.length; i++) {
  				if(valor[i].checked==true){
  				respuestas.push(valor[i].value);
  				}
			}
		
		
			var pagpreguntas = document.getElementById("preguntas");
			var pagrespuestas= document.getElementById("final");
			pagpreguntas.style.display="none";
			pagrespuestas.style.display="block";
		calificador();
			
			
		
	});
	var respaux = [];
		var valor =0 ;
		var resultado = 0;
		for (var i = 0; i < orden.length; i++) {
			 valor = orden[i];
			  
			resultado = listresultados[valor];
			
			respaux.push(resultado);
		}
	function calificador(){

		console.log(listresultados);
		console.log(listPreguntas);
		console.log("el orden de las preguntas es:"+orden);
		console.log("las respuestas  que dio son: "+respuestas)
		console.log("las respuestas son: "+respaux);
		var divcambio = 0 ;
				/**preparando divs para respuestas**/
		for (var i = 0 ; i < orden.length; i++) {
			
			var preg =document.createElement('div');
			var num = orden[i];			
			if(respaux[i]==respuestas[i]){
				var texto = "<p class='correcto'>"+listPreguntas[num][0]+"</p><p>Correcto!</p>";					
				
			}
			else{
				if(respuestas[i]!=3){

				var texto = "<p class='incorrecto'>"+listPreguntas[num][0]+"</p><p>Incorrecto!</p>";
				}
				else{
					var texto = "<p class='incorrecto'>"+listPreguntas[num][0]+"</p>";
				}
			}
			if(respuestas[i]==0){
				var texto2 = "<p>Su respuesta: "+listPreguntas[num][1]+"</p>";
			}
			if(respuestas[i]==1){
				var texto2 = "<p>Su respuesta: "+listPreguntas[num][2]+"</p>";
			}
			if(respuestas[i]==2){
				var texto2 = "<p>Su respuesta: "+listPreguntas[num][3]+"</p>";
			}
			if(respuestas[i]==3){
				var texto2 = "<p>No ha dado respuesta.. :(</p>";
			}

			if(respaux[i]==0){
					var texto1 = "<p class='correcto'>La respuesta es:"+listPreguntas[num][1]+"</p>";
				}

			
			
			if(respaux[i]==1){
				var texto1 = "<p class='correcto'>La respuesta es:"+listPreguntas[num][2]+"</p>";
				}

			
			
			if(respaux[i]==2){
				var texto1 = "<p class='correcto'>La respuesta es:"+listPreguntas[num][3]+"</p>";
				}
			
		
			/*puede que no haya dado el valor correcto*/
			
			
			preg.innerHTML =texto+texto2+texto1;
			preg.className="respuesta"+i;
			document.getElementById("respuestas").appendChild(preg);
		}
		
		
		
}

/*muestra */
	function mostrar(num){
	var p1 = document.getElementById("pregunta1");
	var r1 = document.getElementById("r1_1");
	var r2 = document.getElementById("r1_2");
	var r3 = document.getElementById("r1_3");
	


	p1.innerHTML="";
	p1.innerHTML= listPreguntas[num][0];
	/**/
	r1.innerHTML="";
	r1.innerHTML= listPreguntas[num][1];
	/**/
	r2.innerHTML="";
	r2.innerHTML= listPreguntas[num][2];
	/**/
	r3.innerHTML="";
	r3.innerHTML= listPreguntas[num][3];
	};

/*elige las posiciones*/
function aleatorio(a,b) {
         return Math.round(Math.random()*(b-a)+parseInt(a));
         }

/*devuelve lista de numero de orden de preguntas*/
function elegirPreguntas(){

	var numero =0;
	let  lista=[];

	for (var i = 0; lista.length < 5; i++) {
		var encontrado = false;
		numero=aleatorio(0,5);
		for(var j = 0; j<lista.length ; j++){
			
			if(numero==lista[j]){
				encontrado = true;		
			}
		}
		if(encontrado == false){
			lista.push(numero);
		}
	}

return (lista);
}
document.getElementById("recargar").addEventListener('click',function(){

location.reload();
});
