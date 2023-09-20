# Elective-4-project

## Descripción

Documentación del proyecto de electiva 4.

## Instalación

Para instalar el proyecto de electiva, use NPM y siga estos pasos:

1. Clone el repositorio:
2. Ejecute:

   ```bash
   npm i
   ```

## Scripts

El proyecto incluye los siguientes scripts definidos en el archivo package.json:

- **`build`**: Este script se utiliza para compilar la aplicación para producción utilizando Turbo. Para construir el proyecto, ejecute:

  ```bash
  npm run build
  ```

- **`dev`**: Este script inicia un servidor de desarrollo para el proyecto. Se recargará automáticamente cada vez que realice cambios en el código. Para ejecutar el servidor de desarrollo, utilice:

  ```bash
  npm run dev
  ```

- **`start`**: Este script inicia la aplicación en un entorno de producción. La aplicación se ejecutará utilizando el archivo index.js ubicado en la carpeta apps/api/dist. Para iniciar la aplicación en producción, utilice:

  ```bash
  npm start
  ```

- **`Format`**: Formatea los archivos TypeScript y SCSS en el directorio src usando Prettier.

  ```bash
  npm run format
  ```

## Notas para desarrolladores:

1. Workspace en package.json ruta apps/\*

2. apps/client = frontend

3. apps/api = backend

4. Para instalar, eliminar o actualizar paquetes para un workspace en específico ejecute:

   ```bash
   npm install @paquete --workspace name
   ```

   ```bash
   npm remove @paquete --workspace name
   ```

   **Ejemplo:**

   ```bash
   npm install @jwt --workspace api
   ```

5. Proxy server en el archivo vite.config.ts en apps/client para conexión con la api en el mismo dominio

6. El backend sirve los archivos estáticos del frontend, al ejecutar **npm start** se ejecuta el backend y el sirve los archivos estáticos.

## Apps

- [Elective-4-project Frontend.](apps/client/README.md)

- [Elective-4-project RestApi.](apps/api/README.md)

## Autores

- Ricardo Andrés Rojas Rico
- Raul Andrés Quimbaya
- José Manuel Mendoza Vásquez

## Dependencias de desarrollo

El proyecto utiliza dependencias de desarrollo para la construcción y las pruebas. Consulte los respectivos archivos `package.json` para obtener la lista completa de dependencias de desarrollo.

-Turbo
