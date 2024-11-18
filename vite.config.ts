import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: (chunkInfo) => {
          // Periksa apakah chunkInfo adalah dari node_modules
          if (chunkInfo.name.includes('node_modules')) {
            return 'plugins/[name].[hash].js'; // Simpan library di plugins
          }
          return 'assets/[name].[hash].js';
        },
        assetFileNames: (assetInfo) => {
          // Pisahkan file CSS, SCSS, dan ikon ke dalam folder css
          if (assetInfo.name?.endsWith('.css') || assetInfo.name?.endsWith('.scss') || assetInfo.name?.endsWith('.svg')) {
            return 'assets/css/[name].[hash].[ext]'; // Simpan file CSS, SCSS, dan SVG di css
          }
          return 'assets/[name].[hash].[ext]'; // Simpan file lain di assets
        },
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            const match = id.match(/node_modules\/([^/]+)/);
            if (match) {
              const libraryName = match[1];
              return `plugins/${libraryName}`; // Memasukkan ke dalam manualChunks
            }
          }
          if (id.includes('/src/app/')) {
            return 'app';
          }
          if (id.includes('/src/hooks/')) {
            return 'hooks';
          }
          if (id.includes('/src/components/')) {
            return 'components';
          }
          if (id.includes('/src/templates/')) {
            return 'templates';
          }
          if (id.includes('/src/context/')) {
            return 'context';
          }
        },
      },
    },
  },
  cacheDir: path.resolve(__dirname, 'node_modules/.vite_cache'),
  optimizeDeps: {
    include: ['react', 'react-dom'],  // Pre-bundle dependencies
    esbuildOptions: {
      target: 'esnext',
      supported: {
        'top-level-await': true,
        'async-await': true,
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
    hmr: {
      overlay: false,
    },
  },

  resolve: {
    alias: {
      '@root': '/src',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@app': '/src/app',
      '@templates': '/src/templates',
      '@assets': '/src/assets',
      '@utils': '/src/utils',
      '@context': '/src/context',
    },
  },
})
