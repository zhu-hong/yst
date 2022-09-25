import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { fileURLToPath } from 'node:url'
import WindiCSS from 'vite-plugin-windicss'
import axios from 'axios'
import nested from 'postcss-nested'

export default defineConfig(async ({ mode, command }) => {
  const { data: ENVS } = await axios.get('https://dl-res.effio.cn/envList.json')

  return {
    plugins: [
      vue({
        style: {
          postcssPlugins: [
            nested(),
          ],
        },
      }),
      WindiCSS({
        preflight: false,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      RUNTIME_ENV: JSON.stringify(mode),
      RUNTIME_MODE: JSON.stringify(command),
      API_URL: JSON.stringify(ENVS[mode].api),
      ACCOUNT_URL: JSON.stringify(ENVS[mode].account),
      HOME_URL: JSON.stringify(ENVS[mode].webhomepage),
    },
  }
})
