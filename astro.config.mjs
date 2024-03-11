// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Specify the root directory for your Astro project
  root: '.',

  // Specify the directory for your Astro components
  components: './src/components',

  // Specify the directory for your static files (HTML, Markdown, etc.)
  static: './src/static',

  // Specify any plugins you want to use with Astro
  plugins: [
    // Example plugins:
    // 'astro-plugin-sitemap',
    // 'astro-plugin-google-analytics'
  ],

  // Specify any global data variables you want to define
  // e.g., site metadata, global settings
  data: {
    siteName: 'My Astro Website',
    baseUrl: 'https://example.com',
  },

  // Specify any optimizations or settings for the build process
  buildOptions: {
    // Specify output directory for built files
    // Default: 'dist'
    out: 'public',

    // Specify whether to minify HTML output
    // Default: true
    minifyHtml: true,

    // Specify whether to remove CSS whitespace
    // Default: true
    minifyCss: true,

    // Specify whether to remove JS whitespace
    // Default: true
    minifyJs: true,

    // Specify whether to generate a service worker
    // Default: true
    serviceWorker: true,
  },

  // Specify any settings for development mode
  devOptions: {
    // Specify whether to open browser automatically
    // Default: true
    open: true,

    // Specify port number for development server
    // Default: 3000
    port: 4000,
  },

  // Specify any settings for production mode
  // (e.g., server settings, caching)
  prodOptions: {
    // Specify any production-specific settings here
  },
});
