// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Adicione a linha 'base' abaixo:
  // Substitua 'meu-convite-dino' pelo nome exato do seu repositório no GitHub.
  base: '/Convite-Joaquim/', 
  plugins: [react()],
})