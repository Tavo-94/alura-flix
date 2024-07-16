
# Alura Flix

Este es un proyecto de React desarrollado con Vite. El proyecto utiliza un servidor local generado con la librería `json-server` para simular una API REST.

## Instrucciones para ejecutar el proyecto

1. Clonar el repositorio:

```sh
git clone https://github.com/Tavo-94/alura-flix.git
cd alura-flix
```

2. Instalar las dependencias del proyecto:

```sh
npm install
```

3. Iniciar el servidor local con `json-server`:

```sh
json-server --watch ./db.json --port 5000
```

Esto iniciará un servidor local en `http://localhost:5000` que servirá los datos del archivo `db.json`.

4. Iniciar la aplicación de desarrollo de Vite:

```sh
npm run dev
```

Esto abrirá la aplicación en el navegador, normalmente en `http://localhost:3000`.

## Estructura del proyecto

- `src/`: Contiene el código fuente de la aplicación React.
- `public/`: Contiene los archivos estáticos.
- `db.json`: Archivo que contiene los datos para `json-server`.

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o enviar un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
