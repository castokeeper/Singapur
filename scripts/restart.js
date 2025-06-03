import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules don't have __dirname, so we create it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📋 Limpiando caché y node_modules...');

// Limpieza del proyecto
try {
    // Detener posibles procesos
    console.log('🛑 Deteniendo posibles procesos de Vite...');
    try {
        // Este comando funcionará en Windows
        execSync('taskkill /f /im node.exe', { stdio: 'ignore' });
    } catch (e) {
        // Ignorar errores si no hay procesos para detener
    }

    // Eliminar directorios de caché
    console.log('🧹 Eliminando directorios de caché...');
    const cacheDirectories = [
        'node_modules/.vite',
        'node_modules/.vite',
    ];
    
    cacheDirectories.forEach(dir => {
        const dirPath = path.join(__dirname, '..', dir);
        if (fs.existsSync(dirPath)) {
            fs.rmSync(dirPath, { recursive: true, force: true });
        }
    });

    // Reinstalar dependencias
    console.log('📦 Reinstalando dependencias...');
    execSync('npm install', { stdio: 'inherit' });

    // Iniciar el servidor de desarrollo
    console.log('🚀 Iniciando servidor de desarrollo...');
    execSync('npm run dev', { stdio: 'inherit' });
} catch (error) {
    console.error('❌ Error durante el proceso:', error);
}