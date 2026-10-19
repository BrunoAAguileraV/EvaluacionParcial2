# Portafolio Web Front-End

Aplicación web desarrollada como portafolio personal en formato de página única. El proyecto está construido con React y Vite, utilizando la biblioteca de antD. La arquitectura del código sigue la metodología Atomic Design para los componentes, implementa hooks para la gestión de estados y eventos.

---

## Tecnologías Utilizadas

- React 18
- Vite
- Ant Design (antd)
- @ant-design/icons
- JavaScript (ES6+)
- CSS3

---

## Estructura del Proyecto

```text
src/
├── assets/
├── components/
│   ├── atoms/
│   │   ├── TituloSeccion.jsx
│   │   └── ButtonRedSocial.jsx
│   ├── molecules/
│   │   ├── TarjetaEstudio.jsx
│   │   └── TarjetaProyecto.jsx
│   ├── organisms/
│   │   ├── DatosPersonales.jsx
│   │   ├── ExperienciaLaboral.jsx
│   │   ├── ListaEstudios.jsx
│   │   ├── GaleriaProyectos.jsx
│   │   ├── SeccionContacto.jsx
│   │   └── PieDePagina.jsx
│   └── layout/
│       └── BarraNavegacion.jsx
├── hooks/
│   └── useFormularioContacto.js
├── App.jsx
├── main.jsx
└── index.css
