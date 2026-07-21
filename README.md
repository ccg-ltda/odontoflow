# OdontoFlow 360

Versión organizada de la aplicación original que venía contenida en un solo archivo HTML.

## Estructura

```text
.
├── index.html
└── assets
    ├── css
    │   └── styles.css
    └── js
        ├── config
        │   └── console-filter.js
        └── app.js
```

## Ejecución

Se puede abrir `index.html` directamente en el navegador. Para desarrollo, es preferible levantar el servidor local incluido:

```powershell
node dev-server.cjs
```

Después, abrir `http://localhost:8000`.

En producción, Vercel sirve directamente `index.html` y la carpeta `assets`.

## Dependencias externas

La aplicación conserva las dependencias del archivo recibido y necesita conexión a internet para cargar Tailwind CSS, Chart.js y las fuentes de Google Fonts.

## Orden de carga

`app.js` conserva la lógica en el mismo contexto y orden del archivo original. Esto es necesario porque varias funciones y variables globales dependen del comportamiento de elevación (hoisting) de JavaScript.
