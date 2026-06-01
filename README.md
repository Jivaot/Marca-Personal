Portafolio Personal - Javier Alexis Fernandez Yañez

Este proyecto corresponde a un sitio web estático desarrollado como portafolio personal para Javier Alexis Fernandez Yañez, Ingeniero Civil en Ciencias de Datos de la Universidad Tecnológica Metropolitana, UTEM.

La página busca presentar de manera clara su perfil profesional, sus áreas de interés, sus habilidades técnicas y algunos de los proyectos en los que ha trabajado o explorado durante su formación.

Propósito del sitio

El objetivo principal del sitio es funcionar como una carta de presentación digital. A través de una interfaz breve e interactiva, se muestra quién es Javier, qué áreas domina y qué tipo de soluciones le interesa construir.

El portafolio está orientado a ciencia de datos, inteligencia artificial, visión computacional, procesamiento de lenguaje natural y optimización. También busca transmitir una idea personal importante: aprender del error, mejorar con cada intento y mantener una forma de trabajo constante y disciplinada.

Enfoque de marca personal

La marca personal del sitio se construye desde una idea central:

El error no me detiene. Me entrena.

Esta frase resume una manera de enfrentar el aprendizaje y el desarrollo profesional. En lugar de presentar el error como algo negativo, el sitio lo integra como parte del proceso de mejora, similar a cómo un modelo aprende a partir de datos, ajustes e iteraciones.

El diseño del sitio busca ser moderno, compacto y visualmente atractivo, evitando una estructura tradicional demasiado larga. Por eso se optó por una interfaz tipo panel, donde las secciones cambian en el mismo espacio mediante navegación interna.

Secciones del sitio

El sitio incluye las siguientes secciones:

Inicio: presentación principal del perfil y frase de identidad.
Sobre mí: breve descripción personal y profesional.
Proyectos: listado de sistemas y proyectos relacionados con ciencia de datos e inteligencia artificial.
Skills: habilidades técnicas organizadas por áreas.
Contacto: correo institucional, GitHub y espacio para LinkedIn.
Proyectos incluidos

El portafolio presenta seis proyectos o áreas de trabajo:

Clinical Search AI
Bot de inteligencia artificial para búsqueda de insumos clínicos usando procesamiento de lenguaje natural.
Vision Detection Engine
Sistema de visión computacional con YOLO para detección automatizada y análisis visual.
Enterprise Logic System
Sistema ERP orientado a organizar procesos, información y operaciones internas.
Deep Learning Lab
Experimentación con modelos de deep learning para resolver problemas complejos desde los datos.
Evolutionary Code
Exploración de soluciones computacionales mediante programación genética.
Heuristic Pathfinding
Aplicación de optimización heurística para encontrar buenas soluciones en problemas complejos.
Tecnologías utilizadas

El proyecto fue desarrollado con:

Astro
HTML5
CSS3
Tailwind CSS
JavaScript
CSS Grid
Flexbox
Animaciones y transiciones con CSS
Diseño responsive
Estructura del proyecto
portafolio/
├── public/
│   └── avatar.png
│
├── src/
│   ├── data/
│   │   └── portfolio.js
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
Instrucciones para ejecutar el proyecto

Para visualizar el sitio de forma local, primero se deben instalar las dependencias:

npm install

Luego se ejecuta el servidor de desarrollo:

npm run dev

https://marca-personal-2dz.pages.dev