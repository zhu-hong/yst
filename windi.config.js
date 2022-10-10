import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
  shortcuts: {
    'bg-primary': 'bg-$primary-color',
    'text-danger': 'text-$danger-color',
    'text-primary': 'text-$primary-color',
    'border-primary': 'border-$primary-color',
    'text-normal': 'text-$text-normal-color',
    'border-normal': 'border-$border-normal-color',
  },
})
