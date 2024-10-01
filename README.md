README - Web (Huejutla Delfines Web)
markdown
Copiar código
# 🏊‍♂️ Huejutla Delfines - Web

## Descripción

Este proyecto es la versión web de la aplicación para la escuela de natación *Huejutla Delfines*. La aplicación permite la gestión de usuarios, clases, entrenadores, y pagos. Utiliza el stack MERN (MongoDB, Express, React, Node.js) para garantizar un funcionamiento robusto y eficiente.

---

## 📋 **Objetivos**
- Facilitar la inscripción y administración de clases de natación.
- Gestionar horarios y entrenadores en tiempo real.
- Permitir el pago de membresías y cursos a través de la plataforma.
- Ofrecer un historial de actividades y clases asistidas.

## ⚙️ **Tecnologías Utilizadas**
- **Frontend**: React.js con TailwindCSS.
- **Backend**: Node.js, Express.js.
- **Base de Datos**: MongoDB.
- **Control de Versiones**: GitHub.
- **Estrategia de Versionamiento**: GitFlow.

---

## 🛠 **Instalación**

### Requisitos
- Node.js >= 14.x
- MongoDB
- Git

### Clonar el Repositorio

### bash
git clone https://github.com/AlanOOP/HuejutlaDelfines_MERN_frontend.git
Instalación de Dependencias
bash
Copiar código
cd HuejutlaDelfines_MERN_frontend
npm install
Ejecutar el Proyecto
bash
Copiar código
npm start

### 🔀 Estrategia de Versionamiento
Usamos GitFlow como estrategia de versionamiento, con las siguientes ramas principales:

main: Versión estable en producción.
develop: Integración de nuevas características.
feature/*: Nuevas funcionalidades.
release/*: Preparación de lanzamientos.

### Flujo de Trabajo
Crear una nueva rama feature desde develop.
Realizar los cambios y hacer commits.
Fusionar la rama feature en develop y luego en main.

# 🚀 Despliegue
El despliegue se realiza en un entorno de producción con Netlify. Se utilizan tres entornos: desarrollo, staging, y producción, asegurando calidad en cada fase.
