<template>
  <div class="backdrop" v-if="visible" @click="hideConfirmation"></div>
  <div class="confirmation" v-if="visible">
    <h2>Are you sure you want to delete the selected item?</h2>
    <div class="btn_box">
      <button type="button" class="lw_btn" @click="hideConfirmation">Cancel</button>
      <button type="button" class="lw_btn_point" @click="deleteItem">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmationBox',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideConfirmation() {
      this.$emit('close');
    },
    deleteItem(){
      this.$emit('confirm', true);
    }
  }
}
</script>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 19999;
}
.confirmation {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  z-index: 20000;
}
h2 {
  font-size: 20px;
  margin-bottom: 20px;
}
.btn_box {
  text-align: right;
}
</style>
