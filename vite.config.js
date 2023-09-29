export default {
    build: {
      // Output directory for production build
      outDir: 'dist',
  
      // Filename for the production build
      // You can use [name] to include the entry point name
      // For example, if you have an entry point named "main",
      // it will generate "main.js"
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
        },
      },
    },
  };