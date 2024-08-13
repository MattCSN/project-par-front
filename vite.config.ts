import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    plugins: [
        react(),
        svgr(),
    ],
});