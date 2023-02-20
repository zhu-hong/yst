<script setup>
import CHeader from './components/CHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-screen h-screen flex flex-col overflow-hidden">
    <CHeader/>
    <RouterView class="flex-auto overflow-hidden"></RouterView>
  </div>
</template>
