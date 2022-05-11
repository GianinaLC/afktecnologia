# **AFK Tecnología**

## _Proyecto ecommerce para el curso de CoderHouse: React JS_

## Requerimiento
NodeJS

## Instalación 🔧
1- Para ello debes clonar el repositorio, ingresando a una terminal y ejecutando:

```
git clone `https://github.com/GianinaLC/afktecnologia.git`

```

2 - En la carpeta donde se encuentra "package.json" ejecutar en la terminal:

```
npm install
```
3 - Una vez finalizado, para abrir el proyecto ejecutar:

```
npm start
```

## Dependencias utilizadas
```
    react-bootstrap 
    react-icons
    react-router-dom
    react-firebase
    react-hook-form
```

- react-bootstrap :point_right: Estilo menú hamburguesa
- react-icons :point_right: Íconos para el carrito y footer
- react-router-dom :point_right: Routing en el browser
- react-firebase :point_right:  Base de datos
- react-hook-form :point_right: Reduce código, mas fácil de mostrar los errores del input, reduce el número de re-render


## Firebase / Firestore
Collección : **_categories_**

Documento: id : **_nombre de la categoria_**

La categoria va a tener campo tipo y valor

| CAMPO | TIPO | VALOR |
| ------ | ------ | ------ |
| description | string | nombre de la categoría


Collección : **_products_**

Documento: **_id_** generado automático

El producto va a tener campo tipo y valor

| CAMPO | TIPO | VALOR |
| ------ | ------ | ------ |
| name | string | nombre del producto
| stock | number| cantidad en stock
| img | string | /images/nombreprod.png (ruta de la imágen)
| price | number | precio unitario
| category | string | categoría a la que pertenece
| description | string | descripción del producto



![Compra en AFK](./docs/afkcompra.gif)


## Análisis y Componentes 🔩

La ruta base ‘ / ’ es el inicio de la aplicación.
Se visualiza la lista contenedora de los items, la cual cuenta con la ímagen de cada producto, nombre, precio y un botón que te llevará a los detalles del mismo.

- ItemListContainer - Contenedor de los productos que se cargan mediante ItemList y también filtra por categoría. 

    - ItemList - Realiza un map de todos los productos para poder mostrarlos en el contenedor.

    - Item - Card del producto con el Link para ver detalles.


El navbar contiene el logo del ecommerce, que está linkeado al inicio de la app ‘ / ’, también cuenta con dos secciones con los nombres de las categorías que provienen del firestore
‘ categories/:id ’
‘ /categories/:categoryId ’.

- NavBar - Setea las categorias. Contiene el Cart Widget.

    - CartWidget - Muestra la cantidad de productos existente en el carrito, de no haber productos, se oculta.

Al ingresar al detalle del producto seleccionado
‘ /item/:id ’ ,
se muestra la imágen del mismo, nombre, precio, cantidad en stock, la descripción del producto y un contador para ingresar la cantidad deseada a comprar, una vez decidida la cantidad, dandole click al botón de agregar al carrito, éste será añadido. 

- ItemDetailContainer - Contenedor del ItemDetail, muestra el producto seleccionado.
    
    - ItemDetail - Retorna el detalle del producto junto con el ItemCount.

    - ItemCount - Es el contador para agregar productos al carrito.


Para ver el contenido del carrito, el cual se aloja en 
‘ /cart ’,
se puede ir desde el ícono o tambíen desde el link que aparece debajo del precio.
En esta ruta se muestra una lista con los productos agregados, encontrarás la cantidad de cada ítem, nombre, precio unitario, el subtotal y la suma total de la compra.
Se puede eliminar de la lista aquél producto no deseado desde el botón que contiene la cruz (x) o bien vaciarlo.

Al encontrarse vacío, deja un link para volver a la página principal.

- Cart - Contenedor del ItemCart.

    - ItemCart - Muestra cada producto seleccionado.


Si queremos seguir con la compra, con los productos que tenemos en el carrito, damos click al botón Realizar compra y la nueva ruta será
‘ /form ’,
donde se muestra la lista de los productos a comprar y un formulario a llenar con los datos del comprador.


- Form - Los campos son requeridos, una vez lleno el formulario, se validan los datos, si algún dato es incorrecto, se muestra dónde está el error, se lo llena nuevamente y se valida de nuevo. Si éstos son correctos, se guarda el estado de los inputs y aparece el botón para generar la orden de compra. 

    - función createOrder - Contiene la lógica para generar la orden de compra. Chequea si hay stock del producto, lo actualiza, y devuelve el _id_ de la orden. Esta orden contiene los datos del comprador y los productos seleccionados, con su respectivo precio, fecha y costo final. 



context - CartContext - Comparte la lógica que utilizarán varios componentes.

- Footer - Simplemente detalla sobre el envío, contacto y logo.

- Spinner - Contiene el dicho spinner para luego aplicarlo en cada loading.


## Construido con 🛠️

**HTML**

**CSS**

**JAVASCRIPT**

**REACT JS**

**BOOTSTRAP**

## Autor :computer:

_**Gianina Carranzani**_ :metal: