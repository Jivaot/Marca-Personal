# Portafolio Personal - Javier Alexis Fernandez Yañez

Este proyecto corresponde a un sitio web estático desarrollado como portafolio personal para mi  **Javier Alexis Fernandez Yañez**, Ingeniero Civil en Ciencias de Datos de la Universidad Tecnológica Metropolitana, UTEM.

La página busca presentar de forma clara y visual mi perfil profesional, mis habilidades técnicas y algunos de mis proyectos relacionados con ciencia de datos, inteligencia artificial, visión computacional, procesamiento de lenguaje natural y optimización.

## Sitio publicado

El portafolio se encuentra publicado en Cloudflare Pages:

```txt
https://marca-personal-2dz.pages.dev
```

## Propósito del sitio

El objetivo principal del sitio es funcionar como una carta de presentación digital. A través de una interfaz breve, interactiva y visualmente atractiva, se muestra quién soy yo  Javier, qué áreas domino y qué tipo de soluciones me interesa construir.

El portafolio se construye desde mi idea central o camino ninja:

> El error no me detiene. Me entrena.

Esta frase resume la forma de enfrentar el aprendizaje y el desarrollo profesional: entendiendo  el error como parte del proceso, aprendiendo  de cada intento y mejorar mediante disciplina, iteración y análisis.

## Enfoque de diseño

El sitio evita una estructura larga y tradicional. En su lugar, utiliza una navegación compacta por secciones, donde el contenido cambia dentro de la misma vista.

La propuesta visual combina una estética oscura, tecnológica y moderna, con animaciones suaves, efectos de hover, galería interactiva, fondo dinámico y transiciones entre paneles.

## Secciones del sitio

El sitio incluye las siguientes secciones:

* **Inicio:** presentación principal del perfil y frase de identidad.
* **Sobre mí:** descripción personal y profesional.
* **Proyectos:** galería interactiva con proyectos seleccionados.
* **Skills:** galería de habilidades técnicas organizadas por áreas.
* **Contacto:** correo institucional, GitHub y espacio para LinkedIn.

##

## Tecnologías utilizadas

El proyecto fue desarrollado con:

* Astro
* HTML5
* CSS3
* Tailwind CSS
* JavaScript
* GSAP
* Lenis
* Three.js
* WebGL
* CSS Grid
* Flexbox
* Animaciones y transiciones con CSS
* Diseño responsive

## Estructura del proyecto

```txt
portafolio/
├── public/
│   └── avatar.png
│
├── src/
│   ├── data/
│   │   └── portfolio.js
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   ├── scripts/
│   │   ├── main.js
│   │   ├── gallery.js
│   │   ├── lenisScroll.js
│   │   ├── panelTransitions.js
│   │   ├── parallax.js
│   │   ├── physicsCursor.js
│   │   ├── shaderBackground.js
│   │   └── tiltEffects.js
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## Instrucciones para ejecutar el proyecto

Para visualizar el sitio de forma local, primero se deben instalar las dependencias:

```bash
npm install
```

Luego se ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Astro entregará una URL local similar a:

```txt
http://localhost:4321
```

## Construcción del proyecto

Para generar la versión final optimizada del sitio:

```bash
npm run build
```

Para previsualizar la versión construida:

```bash
npm run preview
```


## Contacto

* Correo: [jfernandezy@utem.cl](mailto:jfernandezy@utem.cl)
* GitHub: https://github.com/Jivaot
* LinkedIn: pendiente

## Autor del portafolio

**Javier Alexis Fernandez Yañez**
Ingeniero Civil en Ciencias de Datos
Universidad Tecnológica Metropolitana, UTEM
Santiago, Chile

