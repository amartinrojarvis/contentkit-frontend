# ContentKit Frontend

Frontend HTML estático para ContentKit Alpha - Generador de contenido con IA.

## 🚀 Despliegue en Vercel

### Paso 1: Subir a GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU_USUARIO/contentkit-frontend.git
git push -u origin main
```

### Paso 2: Conectar Vercel
1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Click "Add New Project"
3. Importa el repo `contentkit-frontend`
4. Framework Preset: **Other** (HTML estático)
5. Click **Deploy**

### Paso 3: Configurar Variables de Entorno
En el dashboard de Vercel:
- Settings → Environment Variables
- Añadir: `API_URL` = `https://contentkit-api.onrender.com` (la URL de tu backend)

### URL resultante
`https://contentkit-frontend.vercel.app`

---

## 📁 Estructura
```
├── index.html       # Landing + wizard + UI completa
├── vercel.json      # Configuración Vercel
└── README.md        # Este archivo
```

---

## 🔄 Actualizaciones automáticas
Cada vez que hagas `git push` a main, Vercel despliega automáticamente.

---

## 📝 Personalización
Edita `index.html` para cambiar:
- Precios de los planes
- Colores (variables CSS en el `<style>`)
- Textos y copy
- Imágenes de ejemplo

---

*ContentKit Alpha - Tu agencia de contenido, en una app*
