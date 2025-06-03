import fs from 'fs';
import { glob } from 'glob'; 

// Función para leer todos los archivos CSS y JS/JSX
const findImagePaths = () => {
    const files = glob.sync('src/**/*.{js,jsx,css}');
    
    const imagePaths = [];
    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Buscar URLs en CSS
        const cssUrls = content.match(/url\(['"']?(.*?)['"']?\)/g) || [];
        cssUrls.forEach(match => {
            const urlMatch = match.match(/url\(['"']?(.*?)['"']?\)/);
            if (urlMatch && urlMatch[1] && (urlMatch[1].includes('images') || urlMatch[1].includes('assets'))) {
                imagePaths.push({
                    file,
                    path: urlMatch[1],
                    type: 'css'
                });
            }
        });
        
        // Buscar getAssetPath en JS/JSX
        const jsUrls = content.match(/getAssetPath\(['"](.*?)['"]\)/g) || [];
        jsUrls.forEach(match => {
            const urlMatch = match.match(/getAssetPath\(['"](.*?)['"]\)/);
            if (urlMatch && urlMatch[1]) {
                imagePaths.push({
                    file,
                    path: urlMatch[1],
                    type: 'js'
                });
            }
        });
    });
    
    return imagePaths;
};

const paths = findImagePaths();

// Contar imágenes únicas
const uniqueImagePaths = [...new Set(paths.map(p => p.path))];

console.log(`Encontradas ${paths.length} referencias a imágenes`);
console.log(`Detectadas ${uniqueImagePaths.length} imágenes únicas`);
console.log("\nDetalle de referencias:");
paths.forEach(p => {
    console.log(`${p.file} => ${p.path} (${p.type})`);
});

// También podemos mostrar las imágenes únicas
console.log("\nListado de imágenes únicas:");
uniqueImagePaths.forEach(path => {
    console.log(path);
});

// Añadir mensaje final con resumen
console.log("\n==============================================");
console.log(`RESUMEN: Se encontraron ${uniqueImagePaths.length} imágenes únicas en ${paths.length} referencias totales`);
console.log("==============================================");