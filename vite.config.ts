import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const htmlPlugin =() => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)\/title>/,
        `<title>Zhenkai's Portfolio v2</title>`
      )
    }

  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), htmlPlugin()],
})
