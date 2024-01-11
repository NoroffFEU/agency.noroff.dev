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
        //
        // Not in use
        // tbd: path.resolve(__dirname, 'pages/TBD/index.html'),
        // apply: path.resolve(__dirname, 'pages/TBD/apply/index.html'),
        // client: path.resolve(__dirname, 'pages/TBD/client/application/index.html'),
        // offer: path.resolve(__dirname, 'pages/TBD/offer-views/index.html'),
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
};
