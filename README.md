# Huejutla Delfines - Web

## Descripción

Este proyecto es la aplicación web para la escuela de natación *Huejutla Delfines*. El objetivo es ofrecer una plataforma accesible para la gestión de inscripciones, horarios, entrenadores, y pagos en línea. La web está desarrollada con el stack MERN (MongoDB, Express, React, Node.js).

### Objetivos del Proyecto
- Proveer una interfaz amigable para la gestión de clases de natación.
- Facilitar el registro de usuarios y la inscripción a clases.
- Implementar un sistema de reservas y pagos en línea.

### Metodología de Trabajo
Este proyecto se gestionó bajo la metodología **Scrum**, con sprints quincenales para el desarrollo iterativo y la entrega continua de funcionalidades. Para el tracking de tareas y el seguimiento del equipo se utilizó **Jira**.

## Control de Versiones

Usamos **GitHub** como la herramienta principal de control de versiones. Todo el flujo de trabajo sigue la estrategia **Git Flow**, lo que permite una colaboración estructurada.

### Flujo de Trabajo
- **Main**: rama principal y estable.
- **Develop**: rama de desarrollo.
- **Feature/bugfix**: ramas individuales para cada nueva característica o corrección.
- **Release**: para preparar versiones de producción.
- **Hotfix**: ramas para correcciones críticas en producción.

## Estrategia de Versionamiento

Se sigue la estrategia **Git Flow**, donde las ramas se manejan según el tipo de cambio:
- Cada nueva funcionalidad o cambio se implementa en una rama `feature`.
- Al finalizar una nueva funcionalidad, se fusiona en `develop` para pruebas.
- Cuando se lanza una nueva versión estable, se fusiona en `main`.

## Despliegue

### Entornos
- **Desarrollo**: Ambiente de prueba con datos no reales.
- **Producción**: Versión estable que está activa para los usuarios.

Usamos una estrategia de despliegue **Rolling**, con **CI/CD** mediante GitHub Actions para integración continua. Esto permite aplicar actualizaciones sin interrumpir el servicio.

## Instrucciones de Uso

### Clonación del Repositorio
```bash
git clone https://github.com/tuusuario/huejutladelfines-web.git
