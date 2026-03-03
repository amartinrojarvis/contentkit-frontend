// config.js - Configuración de la API
// En desarrollo: usa localhost
// En producción: cambia por tu URL de Render

const CONFIG = {
    // Cambia esto por tu URL de Render una vez desplegado
    // Ejemplo: 'https://contentkit-api.onrender.com'
    API_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:5000' 
        : 'https://contentkit-backend.onrender.com',
    
    VERSION: 'alpha-1.1'
};

// Helper para hacer peticiones a la API
async function api(endpoint, options = {}) {
    const url = `${CONFIG.API_URL}/api${endpoint}`;
    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
    return response.json();
}
