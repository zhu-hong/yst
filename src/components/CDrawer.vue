<script setup>
import { ref } from 'vue'
const props = defineProps({
  mc: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '标题',
  },
})
const emits = defineEmits(['confirm', 'close'])
const visible = ref(false)
const open = () => {
  visible.value = true
}
const close = () => {
  visible.value = false
  emits('close')
}
const onModalClick = () => {
  if(!props.mc) return
  close()
}
const confirm = () => {
  emits('confirm')
}
defineExpose({
  open,
  close,
})
</script>

<template>
  <transition name="cdrawer">
    <div @click.self="onModalClick" class="cdrawer-container" v-if="visible">
      <div class="cdrawer-wrapper">
        <div class="h-64px flex-none border-b border-normal px-24px flex justify-between items-center">
          <span class="text-base font-medium">{{ title }}</span>
          <svg @click="close" class="cursor-pointer" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.071 2.929a.833.833 0 0 1 0 1.178L11.18 10l5.892 5.893a.833.833 0 0 1-1.178 1.178L10 11.18 4.107 17.07a.833.833 0 0 1-1.178-1.178l5.893-5.894L2.93 4.107A.833.833 0 1 1 4.107 2.93l5.894 5.892 5.892-5.892a.833.833 0 0 1 1.178 0Z" fill="#646A73" fill-rule="evenodd"/></svg>
        </div>
        <div class="flex-auto overflow-auto p-24px">
          <slot></slot>
        </div>
        <div class="h-64px flex-none border-t border-normal px-24px flex justify-end items-center">
          <el-button size="small" @click="close">取消</el-button>
          <el-button size="small" type="primary" @click="confirm">保存</el-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="postcss">
.cdrawer-enter-active, .cdrawer-leave-active {
  transition: all .5s ease;
}
.cdrawer-enter, .cdrawer-leave-to {
  transform: translateX(420px);
  opacity: 0;
}
.cdrawer {
  &-container {
    position: fixed;
    width: calc(100vw + 420px);
    height: 100vh;
    bottom: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(0,0,0,0.2);
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 420px;
    box-shadow: -4px 0px 13px 0px rgba(0,0,0,0.13);
    background-color: #ffffff;
  }
}
</style>
