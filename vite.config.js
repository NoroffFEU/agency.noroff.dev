import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('vite').UserConfig} */
export default {
  build: {
    outDir: path.resolve(__dirname, './dist'),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        admin: path.resolve(__dirname, 'pages/admin/index.html'),
        login: path.resolve(__dirname, 'pages/auth/login/index.html'),
        register: path.resolve(__dirname, 'pages/auth/register/index.html'),
        applicant: path.resolve(__dirname, 'pages/auth/register/applicant/index.html'),
        company: path.resolve(__dirname, 'pages/auth/register/company/index.html'),
        listings: path.resolve(__dirname, 'pages/listings/index.html'),
        listing: path.resolve(__dirname, 'pages/listings/listing/index.html'),
        create: path.resolve(__dirname, 'pages/listings/listing/create/index.html'),
        edit: path.resolve(__dirname, 'pages/listings/listing/edit/index.html'),
        user: path.resolve(__dirname, 'pages/user/index.html'),
        privacy: path.resolve(__dirname, 'privacy_policy.html'),
        terms: path.resolve(__dirname, 'terms_of_use.html'),
      },
    },
  },
  server: {
    port: 5173,
    hot: true,
    host: '127.0.0.1',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/src/scss/index.scss";`, // Optional: Auto-import a global SCSS file
      },
    },
  },
};
