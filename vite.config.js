export default {
    base: 'sandbox-three.js/', // Chemin de base pour les fichiers construits
    
    build: {
      outDir: 'build',            // Dossier de sortie pour les fichiers construits
      assetsDir: 'assets',        // Dossier pour les fichiers statiques (images, fonts, etc.)
      emptyOutDir: true,          // Vide le dossier de sortie avant chaque build
      sourcemap: false,           // Désactive la génération de source maps
      manifest: true,             // Génère un fichier de manifeste pour l'intégration
    },
  }
  