-- Base de datos: `formulario`
CREATE DATABASE IF NOT EXISTS `formulario`;
USE `formulario`;


-- Tabla de datos
CREATE TABLE IF NOT EXISTS `datos_preinscripcion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(50) NOT NULL,
  `apellidos` VARCHAR(50) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `lugar_nacimiento` VARCHAR(50) NOT NULL,
  `tipo_doc` VARCHAR(50) NOT NULL,
  `num_doc` VARCHAR(10) NOT NULL,
  `domicilio` VARCHAR(50) NOT NULL,
  `dep_piso` VARCHAR(10),
  `localidad` VARCHAR(50),
  `celular` INT(11) NOT NULL,
  `telefono_2` INT(11),
  `email` VARCHAR(50) NOT NULL,
  `carrera_select` VARCHAR(50) NOT NULL,
  `nivel_educativo` VARCHAR(50) NOT NULL,
  `institucion_graduado` VARCHAR(50) NOT NULL,
  `localidad_inst` VARCHAR(50) NOT NULL,
  `cod_postal` INT(4) NOT NULL,
  `provincia` VARCHAR(50) NOT NULL,
  `foto_doc` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);
