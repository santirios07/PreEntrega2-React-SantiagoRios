# Proyecto Final React: E-Commerce - Rios Santiago

Este proyecto es un E-Commerce desarrollado como proyecto final del curso de React. El objetivo del proyecto es crear una aplicación web funcional que permita a los usuarios navegar por diferentes productos, agregar productos al carrito y realizar pedidos. El proyecto utiliza Firebase como base de datos y algunas bibliotecas adicionales para mejorar la funcionalidad y la apariencia de la aplicación.

## Características Principales

- **NavBar con CartWidget:** Una barra de navegación que incluye un widget del carrito de compras.
- **ItemList:** Una lista de productos que se pueden filtrar por categoría.
- **CartView con CartItems:** Una vista del carrito de compras que muestra los productos agregados y permite modificar las cantidades o eliminar productos.
- **Order con OrderItem y OrderID:** Funcionalidad para realizar pedidos y generar un ID de pedido único.

## Tecnologías Utilizadas
- **React:** Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router:** Para la navegación entre diferentes vistas de la aplicación.
- **Next UI:** Para componentes de interfaz de usuario elegantes y fáciles de usar.
- **Firebase:** Como base de datos para almacenar y gestionar los productos y pedidos.

- ## Instalación

1. Clona este repositorio:

```bash
  git clone https://github.com/santirios07/ProyectoFinal-React-SantiagoRios.git
```

2. Navega al directorio del proyecto:

```bash
  cd ProyectoFinal-React-SantiagoRios
```

3. Instala las dependencias:

```bash
  npm install
```

4. Configura Firebase:

- Crea un proyecto en Firebase y configura Firestore.
- Agrega tu configuración de Firebase en un archivo .env en la raíz del proyecto.

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Créditos
Este proyecto fue desarrollado por Santiago Rios, como parte del curso de React de CoderHouse. Agradecimientos especiales a los instructores y compañeros de clase por su apoyo y colaboración.
