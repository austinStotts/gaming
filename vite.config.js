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
        // Disable the crossorigin attribute in the production build
        // by customizing the HTML minification options
        // This option applies to Vite 2.x, and might change in future versions
        terserOptions: {
            format: {
                // Disable the crossorigin attribute addition
                crossorigin: false,
            },
        },
    },
  };