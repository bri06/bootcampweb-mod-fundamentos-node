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
  http://localhost:3000/api/anuncios

Listar tags:
  http://localhost:3000/api/anuncios/tags
