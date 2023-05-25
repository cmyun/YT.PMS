<template>
  <div v-if="visible" :class="['alert1', type]">
    <span>{{ message }}</span>
    <button class="close" @click="close">x</button>
  </div>
</template>

<script>
  export default {
    name: 'ElMessageBox',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'success'
      },
      message: {
        type: String,
        default: ''
      },
      timeout: {
        type: Number,
        default: 3000
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    },
    mounted() {
      if (this.visible && this.timeout > 0) {
        setTimeout(() => {
          this.close();
        }, this.timeout);
      }
    }
  };
</script>

<style scoped lang="scss">
  .alert1 {
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .alert-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  .alert-danger {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
  .close {
    position: absolute;
    right: 0px;
    top: 0px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
</style>
