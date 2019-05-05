# Bootcampweb Modulo de Fundamentos de Node.js

Realización de la práctica de fundamentos de node.js del bootcamp web de KeepCoding

## Enunciado:

Desarrollar el software que se ejecutará en el servidor dando servicio a una app (API) de venta de artículos de segunda mano, llamada Nodepop. Hazte a la idea que esta API que vas a construir será utilizada por una app iOS y otra Android.
La pantalla principal de la (supuesta) app mostraría una lista de anuncios y permitiría tanto buscar como poner filtros por varios criterios, por tanto la API a desarrollar deberá proveer los métodos necesarios para esto.
### Cada anuncio mostrará los siguientes datos:
  - Nombre del artículo, un anuncio siempre tendrá un solo artículo
  - Si el artículo se vende o se busca
  - Precio. Será el precio del artículo en caso de ser una oferta de venta. En caso de que sea un anuncio de ‘se busca’ será el precio que el solicitante estaría dispuesto a pagar
  - Foto del artículo. Cada anuncio tendrá solo una foto.
  - Tags del anuncio. Podrá contener uno o varios de estos cuatro: work, lifestyle, motor y mobile
### Operaciones que debe realizar el API a crear:
  - Lista de anuncios paginada. Con filtros por tag, tipo de anuncio (venta o búsqueda), rango de precio (precio min. y precio max.) y nombre de artículo (que empiece por el dato buscado)
  - Lista de tags existentes
  - Creación de anuncio
Los sistemas donde se desplegará el API utilizan bases de datos MongoDB.

Nodepop
=======

Para inicializar el proyecto:

Es necesario tener instalado [node](https://nodejs.org/es/) y [mongoDB](https://docs.mongodb.com/manual/installation/#mongodb-community-edition)


```shell
npm install
```

Verifica la cadena de conexion a la base de datos en lib/connectMongoose.js

Puedes utilizar el script de inicializacion de la base de datos con:

```shell
npm run install_db
```

# Arranque

Para arrancar el proyecto usar:

* En produccion:

```Shell
npm start
```

* En desarrollo:

```shell
npm run dev
```

## Rutas del API

Ruta API:
  http://localhost:8000/api/anuncios

Ruta publica:
  http://localhost:3000/anuncios

Listar tags:
  http://localhost:3000/api/anuncios/tags

## Ejemplos de llamadas:

Ejemplo de recibir la lista de anuncios aplicando todos los filtros:
http://localhost:3000/api/anuncios?tag=mobile&venta=false&nombre=ip&precio=50-&start=0&limit=2&sort=precio

Para mostrar los anuncios con filtros y paginación:
http://localhost:3000/anuncios?start=1&limit=3&sort=name&tag=lifestyle

# Entrega práctica devops con node:

## Enunciado

### Ejercicio 1

La arquitectura deseada para la puesta en producción es la siguiente:
• Utilizar node como servidor de aplicación utilizando PM2 como gestor de procesos node para
que siempre esté en ejecución. La aplicación node deberá reiniciarse automáticamente al
arrancar el servidor (en el startup).
• Utilizar nginx como proxy inverso que se encargue de recibir las peticiones HTTP y derivárselas
a node.
• Los archivos estáticos de la aplicación (imágenes, css, etc.) deberán ser servidos por nginx (no
por node). Para poder diferenciar quién sirve estos estáticos, se deberá añadir una cabecera
HTTP cuando se sirvan estáticos cuyo valor sea: X-Owner (la X- indica que es una cabecera
personalizada) y el valor de la cabecera deberá ser el nombre de la cuenta de usuario en github
o bitbucket del alumno. Si la solución de la práctica por parte del alumno no tuviera archivos
estáticos, deberá proporcionar el acceso a un archivo estático que se sirva a través de nginx
(por ejemplo a través de la URL <dominio>/public/logo.jpg). En este caso, el alumno deberá
indicar la URL del archivo estático en el archivo README.md del repositorio.

### Ejercicio 2

Si se accede al servidor web indicando la dirección IP del servidor en lugar del nombre de dominio, se deberá mostrar el contenido de alguna plantilla de https://startbootstrap.com. Si lo desea, el alumno podrá personalizar los textos de la página.

### Solución:

Aplicacion del ejercicio 1: [Nodepop](http://ec2-3-17-190-49.us-east-2.compute.amazonaws.com)
Para ver la cabecera personalizada, hay que acceder a la ruta de las imagenes, como por ejemplo esta: http://ec2-3-17-190-49.us-east-2.compute.amazonaws.com/images/anuncios/huawei-3737335_640.jpg

Web del ejercicio 2: [Portfolio](http://3.17.190.49)
Para la solución de este ejercicio se ha utilizado la web del módulo de html-javascript del bootcamp, en vez de una plantilla de bootstrap.
