<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-screen h-screen flex flex-col overflow-hidden">
    <Header/>
    <RouterView class="flex-auto overflow-hidden"></RouterView>
  </div>
</template>
