<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    hbg: {
      type: String,
      default: '#FFFFFF',
    },
    w: {
      type: String,
      default: '460px',
    },
    t: {
      type: String,
      default: '25vh',
    },
    modal: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
      this.$emit('close')
    },
  },
}
</script>

<template>
  <el-dialog
    :top="t"
    :modal="modal"
    :modal-append-to-body="true"
    :append-to-body="true"
    :visible.sync="visible"
    :width="w"
    :close-on-click-modal="false"
    :show-close="false"
    custom-class="c-dialog"
  >
    <div class="c-dialog-head" :style="{ 'background-color': hbg }">
      <span>{{ title }}</span>
      <svg @click="close" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.071 2.929a.833.833 0 0 1 0 1.178L11.18 10l5.892 5.893a.833.833 0 0 1-1.178 1.178L10 11.18l-5.893 5.89a.833.833 0 0 1-1.178-1.178l5.893-5.894L2.93 4.107A.833.833 0 1 1 4.107 2.93l5.894 5.892 5.892-5.892a.833.833 0 0 1 1.178 0Z" fill="#646A73" fill-rule="evenodd"/></svg>
    </div>
    <slot></slot>
  </el-dialog>
</template>

<style lang="postcss">
.c-dialog {
  border-radius: 8px !important;
  overflow: hidden;

  .el-dialog__ {
    &header, &body, &footer {
      padding: 0;
    }
    &header, &footer {
      display: none;
    }
  }

  &-head {
    box-sizing: border-box;
    height: 48px;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000c25;
    font-size: 16px;
    font-weight: 500;

    svg {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
}
</style>
