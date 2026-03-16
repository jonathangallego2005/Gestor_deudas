# 💸 Gestor de Deudas

Aplicación web para gestionar deudas personales. Permite registrar usuarios, crear deudas, realizar abonos parciales y cerrar deudas. Desarrollado con HTML, CSS y JavaScript vanilla, sin frameworks ni base de datos externa.

---

## 📋 Tabla de contenidos

- [Descripción](#descripción)
- [Funcionalidades](#funcionalidades)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación y uso](#instalación-y-uso)
- [Vistas](#vistas)
- [Tecnologías](#tecnologías)

---

## Descripción

**Gestor de Deudas** es una aplicación web frontend que permite llevar un registro organizado de deudas y pagos. Toda la información se almacena en el `localStorage` del navegador, por lo que no requiere servidor ni base de datos.

Ideal para llevar control de deudas personales, préstamos entre conocidos o pagos pendientes.

---

## Funcionalidades

- ✅ **Registro de usuarios** — Crear cuenta con nombre, cédula, correo y contraseña
- ✅ **Inicio de sesión** — Autenticación por cédula, correo y contraseña
- ✅ **Crear deuda** — Registrar deudor con nombre, correo, teléfono, monto y descripción
- ✅ **Ver deudas** — Tabla con todas las deudas activas y sus montos pendientes
- ✅ **Abonar a deuda** — Registrar pagos parciales que reducen el monto pendiente
- ✅ **Cerrar deuda** — Eliminar una deuda una vez saldada

---

## Estructura del proyecto

```
PROYECTO_WEB/
├── backend/
│   ├── app.js               # Lógica de usuarios: login y registro
│   └── app2.js              # Lógica de deudas: crear, abonar, cerrar
├── frontend/
│   ├── css/
│   │   ├── styles.css
│   │   ├── styles_abonar.css
│   │   ├── styles_cerrar_deuda.css
│   │   ├── styles_nueva_deuda.css
│   │   ├── styles_registro.css
│   │   └── styles_ver_todas.css
│   ├── html/
│   │   ├── iniciar_seccion.html     # Login
│   │   ├── registrarse.html         # Crear cuenta
│   │   ├── ver_deudas.html          # Panel principal
│   │   ├── nueva_deuda.html         # Formulario nueva deuda
│   │   ├── abonar.html              # Formulario de abono
│   │   └── cerrar_deuda.html        # Formulario para cerrar deuda
│   └── img/                         # Imágenes y logo
```

---

## Instalación y uso

Este proyecto no requiere instalación de dependencias. Solo necesitas un navegador y un servidor local como **Live Server** en VS Code.

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/gestor-de-deudas.git
cd gestor-de-deudas
```

### 2. Abrir el proyecto

Abre `frontend/html/iniciar_seccion.html` con **Live Server** en VS Code o directamente en tu navegador.

### 3. Usuario de prueba

La aplicación incluye un usuario precargado para probar:

| Campo      | Valor                  |
|-----------|------------------------|
| Cédula    | `1038541102`           |
| Correo    | `jonathan@gmail.com`   |
| Contraseña| `12345`                |

---

## Vistas

### 🔐 Iniciar sesión
Pantalla principal con formulario de acceso por cédula, correo y contraseña.

### 📝 Registrarse
Formulario para crear una nueva cuenta de usuario.

### 📊 Ver deudas
Panel con tabla que muestra todas las deudas activas: ID, nombre, correo, teléfono, monto total, monto pendiente, descripción y fecha de creación.

### ➕ Nueva deuda
Formulario para registrar una nueva deuda con todos los datos del deudor.

### 💵 Abonar
Formulario para registrar un pago parcial a una deuda existente por ID de usuario.

### ❌ Cerrar deuda
Formulario para eliminar definitivamente una deuda por ID de usuario.

---

## Tecnologías

| Tecnología       | Uso                                      |
|-----------------|------------------------------------------|
| **HTML5**        | Estructura de las vistas                 |
| **CSS3**         | Estilos y diseño visual                  |
| **JavaScript**   | Lógica de negocio y manejo del DOM       |
| **localStorage** | Almacenamiento de usuarios y deudas      |
| **Live Server**  | Servidor local para desarrollo           |

---

## Notas

> ⚠️ Los datos se guardan en el `localStorage` del navegador. Si limpias el almacenamiento del navegador, se perderán los datos registrados.

> ⚠️ Este proyecto es de uso educativo y no cuenta con cifrado de contraseñas ni autenticación segura.
