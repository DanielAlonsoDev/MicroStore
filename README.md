# Proyecto MicroStore
Es una aplicación para una tienda de venta de componentes informáticos como proyecto de final de curso para el curso de Desarrollo FrontEnd con ReactJs


### Dependencias
El proyecto esta construido en React Js, con estilos escritos en Sass y apoyándose en las Librerias de Boostrap React, ocupando el servicio de Firebase como api para la información de los productos y las ordenes generadas.

|       Paquete  | Version 						|
|----------------|------------------------------|
| React Js		 | ^17.0.2                      |	
| Firebase       | ^9.6.11                      |
| sass           | ^1.49.9                      |
| react-bootstrap | ^2.2.2                      |


## Creacion del proyecto con Create-React-App

La estructura básica de React para este proyecto se creo con la ayuda de [Create React App](https://github.com/facebook/create-react-app).

### Scripts Disponibles

Una vez descargadas todas las dependencias del proyecto,  se puede iniciar el servidor de desarrollo.

`npm start`

## Llamadas a Firebase

#### Por categorías
Se pueden traer los productos desde firebase filtrados por categorías, donde el valor "all" devuelve las lista de productos completa. Su valor se almacena en un estado a través del parámetro `action`.

`getProductsByCategory(requestedCategory, action);`

#### Por Identificador del producto
Se puede hacer una llamada de un producto especifico conociendo su identificador y almacenar su valor en un estado a través del parámetro `action`.

`getProductById  =  (productIdParam, action, errorAction)`