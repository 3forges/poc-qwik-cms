import { defineConfig } from 'vite'
import {  staticAdapter } from '@builder.io/qwik-city/adapters/static/vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import createExternal from 'vite-plugin-external';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    staticAdapter({
      origin: 'http://localhost:5174/',
    }),
    /*:createExternal({
      externals: {
        '@qwik-city-plan': 'QwikCityPlan',
        '@qwik-city-sw-register': 'QwikCitySwRegister'
      }
    }),*/
    qwikVite({
      csr: true,
    }),
  ],
})
