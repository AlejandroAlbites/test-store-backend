## SOLUCIÓN

- Proyecto desplegado en Heroku: https://bsale-store-backend.herokuapp.com

### Resumen

Este proyecto es una API-REST para obtener una lista de productos para una tienda. En la cual un usuario puede realizar las siguientes funciones:

1. Listas todas las categorías que tiene la tienda.
2. Listar todos los productos de la tienda.
3. Realizar un filtro de los productos de la tienda por nombre.
4. Realizar un filtro de los productos de la tienda por categoría.

### Requerimientos

Para ejecutar el proyecto de manera local se requiere clonar el repositorio y tener instalado node v16.14.0

Ejecutar el comando `npm i` para instalar los node_modules

Ejecutar el comando `npm run dev`

Ejecutar `Control + C` para detener el proceso

### Despliegue en Heroku

El proyecto se encuentra desplegado en Heroku, puede utilizar el siguiente enlace antes de las rutas para usar la API.

`https://bsale-store-backend.herokuapp.com`

Por ejemplo para listar las categorías:

`https://bsale-store-backend.herokuapp.com/api/categories/`

### End Ponits

| Rutas                          | HTTP verb | Descripción                                 |
| ------------------------------ | --------- | ------------------------------------------- |
| /api/categories/               | GET       | Lista todas las categorías disponibles      |
| /api/products/?name=&category= | GET       | Lista todas todos los productos disponibles |

### Estructura JSON - end point de Categorías

Pruebas realizadas con el aplicativo POSTMAN en un servidor local:

Para listar las categorías realice una petición GET al siguiente end point:

http://localhost:8000/api/categories/

#### Respuesta

Al realizar la petición, el servicio retornará un JSON con la siguiente estructura:

```json
{
  "ok": true,
  "msg": "categories found",
  "categories": [
    {
      "id": 0,
      "name": "todos",
      "amount": 57
    },
    {
      "id": 7,
      "name": "vodka",
      "amount": 1
    },
    {
      "id": 6,
      "name": "cerveza",
      "amount": 2
    },
    {
      "id": 5,
      "name": "snack",
      "amount": 5
    },
    {
      "id": 4,
      "name": "bebida",
      "amount": 7
    },
    {
      "id": 3,
      "name": "ron",
      "amount": 13
    },
    {
      "id": 2,
      "name": "pisco",
      "amount": 21
    },
    {
      "id": 1,
      "name": "bebida energetica",
      "amount": 8
    }
  ]
}
```

- ok: Valor en booleano dependiendo de la respuesta de la petición. Un ok = true es una respuesta exitosa, ok = false, error en el servidor.

- msg: Mensaje de respuesta, dependiendo si la respuesta es exitosa o no.

- categories: Lista las categorías dentro de un arreglo de objetos.

- id: Id único de la categoría.

- name: Nombre de la categoría.

- amount: Cantidad de productos que se encuentran en dicha categoría.

### Estructura JSON - end point de Productos

Pruebas realizadas con el aplicativo POSTMAN en un servidor local:

Para listar los productos realice una petición GET al siguiente end point:

`http://localhost:8000/api/products/?name=&category=`

Este end point utiliza los query params para obtener los datos filtrados. Si no se envía ningún valor tomará los parámetros vacíos y retornará el total de los productos.

- Por ejemplo al realizar un filtro por categoría en la clave-valor de categoría ingresamos el Id de la categoría que deseamos filtrar, en este ejemplo se agregó el valor 6 para realizar un filtro por cervezas.

`http://localhost:8000/api/products/?name=&category=6`

- De igual forma se puede realizar un filtro por nombre, agregando el nombre en la clave-valor name, en este ejemplo se agregó el valor papas, para realizar un filtro por papas.

`http://localhost:8000/api/products/?name=papas&category=`

#### Respuesta

Tomando el siguiente ejemplo:

`http://localhost:8000/api/products/?name=&category=7`

Al realizar la petición, el servicio retornará un JSON con la siguiente estructura:

```json
{
  "ok": true,
  "msg": "products found",
  "count": 1,
  "rows": [
    {
      "id": 104,
      "name": "ABSOLUT",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/absolut21381.png",
      "price": 8990,
      "discount": 30,
      "category": 7,
      "Category": {
        "id": 7,
        "name": "vodka"
      }
    }
  ]
}
```

- ok: Valor en booleano dependiendo de la respuesta de la petición. Un ok = true es una respuesta exitosa, ok = false, error en el servidor.

- msg: Mensaje de respuesta, dependiendo si la respuesta es exitosa o no.

- count: Muestra la cantidad de productos encontrados.

- rows: Lista los productos encontrados dentro de un arreglo de objetos.

- id: Id único del producto

- name: Nombre del producto.

- url_image: Imagen del producto.

- price: Precio del producto.

- discount: Descuento del precio del producto.

- category: Id de la categoría a la que pertenece el producto.

- Category: Muestra el nombre de la categoría a la que pertenece el producto. Lo muestra de un objeto con su Id.

## ACERCA DEL BACKEND

El servidor fue realizado con NodeJS y el framework de Express, Para la interacción con la base de datos se usó el ORM Sequelize, el cual nos ayuda a mantener una conexión keep Alive, cuando el servidor está activo.

### Glosario de archivos y carpetas

#### Archivos principales

- app.ts: Archivo principal donde iniciamos el servidor.
- src/server.ts: Archivo donde creamos el servidor en una clase, definimos las rutas de nuestra API, iniciamos conexión con la base de datos.
- src/db.ts: Archivo donde se configura Sequelize con la base de datos asignada para el test.

#### Carpetas

- src/controllers: Carpeta donde definimos los controladores de las categorías y productos, en los controladores se realiza la lógica para buscar los datos de la base de datos y dar respuesta de las peticiones en formato Json.
- src/models: Carpeta donde definimos el modelo de nuestras tablas "category" y "products", se establecen las relaciones entre tablas.
- src/routes: Carpeta donde se define el tipo de petición y la ruta del endpoint. En el archivo de product se agregó un middleware de validación en la ruta.
- src/validators: Carpeta donde se crea la validación de las rutas, se usó la libreria express-validator. En el archivo product se define el valor por defecto por si se envían datos vacíos, o si se envían datos erróneos. Por ejemplo para realizar un filtro por categoría, el valor que acepta son números entre 0 y 7, ya que ese es el rango de los id de las categorías.

### End
