$(document).ready(

function(){
$("#contenido").empty();
alert("quibo");

$("#cargar").click(function(){

	alert("quibo");
	$("#contenido").load("http://valeriacarrillo.github.io/");
});

$("#Ajax").click(function(){

  $.ajax({
		url: "https://andreihelo-restful-api.herokuapp.com/students",
		success: function(result, status, xhr){

			$("#contenido").text(JSON.stringify(result))
}

	});
	});

	$("#listar").click(function () {
		$("#contenido").empty();
		 $.ajax({
			 url: "https://andreihelo-restful-api.herokuapp.com/students",
			 success: function (result, status, xhr) {
				 $("#contenido").append(
					 //"<td><th>Matricula</th></td>" + "<td><th>Nombre</th></td>" + "<td><th>Apellido</th></td>"
					 "<th>id</th>" + "<th>Matrícula</th>" + "<th>Nombre</th>" + "<th>Apellido</th>" + "<th>Eliminar</th>"
					 );
					 for (var i = 0; i < 50; i++) {
	           $("#contenido").append(
	             "<tr><td>" + result[i].id + "</td><td>" + result[i].registration_number + "</td><td>" + result[i].name +
	             "</td><td>" + result[i].last_name + "</td><td>" + "<button id='eliminar'>Eliminar</button>" + "</td></tr>"
	           );
	         }
			 }
		 });
	 });

	 $("#actualizar").click(function () {
		 $("#contenido").empty();
 		 $.ajax({
 			 url: "https://andreihelo-restful-api.herokuapp.com/students",
 			 success: function (result, status, xhr) {
 				 $("#contenido").append(
 					 //"<td><th>Matricula</th></td>" + "<td><th>Nombre</th></td>" + "<td><th>Apellido</th></td>"
 					 "<th>id</th>" + "<th>Matrícula</th>" + "<th>Nombre</th>" + "<th>Apellido</th>" + "<th>Eliminar</th>"
 					 );
 					 for (var i = 0; i < 50; i++) {
 	           $("#contenido").append(
 	             "<tr><td>" + result[i].id + "</td><td>" + result[i].registration_number + "</td><td>" + result[i].name +
 	             "</td><td>" + result[i].last_name + "</td><td>" + "<button id='eliminar'>Eliminar</button>" + "</td></tr>"
 	           );
 	         }
 			 }
 		 });
 	 });

	 $("#crear").click(function(){
			 var estudiante = {
					 "registration_number" : parseInt($("input[name*=Matricula]").val()),
					 "name"                : $("input[name*=Nombre]").val(),
					 "last_name"           : $("input[name*=Apellido]").val(),
					 "status"              : $("select option:selected").val()
			 };
			 $.ajax({
					 url: "https://andreihelo-restful-api.herokuapp.com/students",
					 method: "POST",
					 data: estudiante,
					 success: function (result, status, xhr) {
							 actualizar();
							 $("#overlap").slideUp("slow");
							 $("div:not(#overlap)").animate({opacity: "1.0"}, "slow");
							 $("#cambiar").show();
							 $("aside").slideUp("fast");
			 },
					 statusCode:{
							 400: function(){
									 $("aside").slideDown("fast");
							 }
					 }
		});
	 });
	/*$.post("https://andreihelo-restful-api.herokuapp.com/students", {registration_number: 259605,name: "Kitaro",last_name: "Gegege",status: "°o°"}, "json", function(result){
        $("span").text(JSON.stringify(result))
    });
	*/
		/*success: function(result, status, xhr){

			$(selector).post("https://andreihelo-restful-api.herokuapp.com/students",(registration_number=356325,name="Khe",last_name="ooo",status="Creado desde ajax"),function(result,status,xhr),JSON)
}*/



/*$("#borrar").click(function() {
	$.ajax({
    url: "https://andreihelo-restful-api.herokuapp.com/students",
    type: 'DELETE',
    success: function(result, status, xhr) {
        // Do something with the result
    }
});
});*/

	});
//{}
