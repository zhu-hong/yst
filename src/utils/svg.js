import Vue from 'vue'
import Icon from '@/components/Icon.vue'

const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(require.context('./assets/icons', false, /\.svg$/))

Vue.component('Icon', Icon)
