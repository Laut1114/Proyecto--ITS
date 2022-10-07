<?php
	//conexion con la base de datos y el servidor
	$connect = mysqli_connect("localhost","root","", "formulario") or die("<h2>No se encuentra el servidor</h2>");

	//Le damos los valores del formulario

	// Datos Personales
	$nombres = $_POST['nombreuser'];
	$apellidos = $_POST['apellidosuser'];
	$fecha_nacimiento = $_POST['fecha_nacimientoUSer'];
	$lugar_nacimiento = $_POST['lugar_nacimientoUSer'];
	$tipo_doc = $_POST['tipo_docUser'];
	$num_doc = $_POST['num_docUser'];
	$domicilio = $_POST['domicilioUser'];
	$dep_piso = $_POST['depUser'];
	$localidad = $_POST['localidadUser'];
	$celular = $_POST['celUser'];
	$telefono_2 = $_POST['telefonoUser'];
	$email = $_POST['emailuser'];

	// Datos generales
	$carrera_select = $_POST['carreraUser'];
	$nivel_educativo = $_POST['nivelUser'];
	$institucion_graduado = $_POST['inst_gradUser'];
	$localidad_inst = $_POST['localidad_gradUser'];
	$cod_postal = $_POST['cod_postal_InstUser'];
	$provincia = $_POST['provincia_InstUser'];
	$foto_doc = $_POST['img_docUser'];


	// Obtiene los datos
	$req = (
		strlen($nombres)*
		strlen($apellidos)*
		strlen($fecha_nacimiento)*
		strlen($lugar_nacimiento)*
		strlen($tipo_doc)*
		strlen($num_doc)*
		strlen($domicilio)*
		strlen($localidad)*
		strlen($celular)*
		strlen($email)*
		strlen($carrera_select)*
		strlen($nivel_educativo)*
		strlen($institucion_graduado)*
		strlen($localidad_inst)*
		strlen($cod_postal)*
		strlen($provincia)*
		strlen($foto_doc)
	) or die("No se han llenado todos los campos"); 

	//ingresamos la informacion a la base de datos
	$consulta = "INSERT INTO datos_preinscripcion(nombres, apellidos, fecha_nacimiento, lugar_nacimiento, tipo_doc, num_doc, domicilio, dep_piso, localidad, celular, telefono_2, email, carrera_select, nivel_educativo, institucion_graduado, localidad_inst, cod_postal, provincia, foto_doc) VALUES ('$nombres','$apellidos', '$fecha_nacimiento', '$lugar_nacimiento', '$tipo_doc', '$num_doc', '$domicilio', '$dep_piso', '$localidad', '$celular', '$telefono_2', '$email', '$carrera_select','$nivel_educativo', '$institucion_graduado', '$localidad_inst', '$cod_postal', '$provincia', '$foto_doc')";
	
	$resultado = mysqli_query($connect, $consulta) or die("<h2>Error Guardando los datos</h2>");

	if ($resultado) {
		?>
		<h3>formulario enviado correctamente</h3>
		<?php
	} else {
		?>
		<h3>Ocurrio un error</h3>
		<?php
	}
?>