<template>
<div class="container">
  <form @submit.prevent="submitForm">
    <h1 class="text-center mb-5">Sign up</h1>
    <div class="form-group mb-3">
      <label for="id"><b>ID</b><span class="req"> *</span></label>
      <input type="text" v-model="user.name" class="form-control" id="id" required>
      
    </div>
    <div class="form-group mb-3">
      <label for="password"><b>Password</b><span class="req"> *</span></label>
      <input type="password" v-model="user.password" class="form-control" id="password" required>
      
    </div>
    <div class="form-group mb-3">
      <label for="confirm_password"><b>Confirm Password</b><span class="req"> *</span></label>
      <input type="password" v-model="user.confirm_password" class="form-control" id="confirm_password" required>
      
    </div>
    <div class="form-group mb-3">
      <label for="name"><b>Name</b><span class="req"> *</span></label>
      <input type="text" v-model="user.name" class="form-control" name="name" id="name" required>
      
    </div>
    <div class="form-group mb-3">
      <label for="nickname"><b>Nickname</b></label>
      <input type="text" v-model="user.nickname" class="form-control" name="nickname" id="nickname">
      
    </div>
    <div class="form-group mb-3">
      <label for="office"><b>Office</b></label>
      <input type="text" v-model="user.office" class="form-control" name="office" id="office">
      
    </div>
    <div class="form-group mb-3">
      <label for="mobile"><b>Mobile</b></label>
      <input type="text" v-model="user.mobile" class="form-control" name="mobile" id="mobile">
      
    </div>
    <div class="form-group mb-3">
      <label for="email"><b>Email</b></label>
      <input type="email" v-model="user.email" class="form-control" name="email" id="email">
      
    </div>
    <p class="text-center mb-3">Already a member? <router-link to="/login">Login</router-link></p>
    <div class="text-center mb-3">
      <button type="submit" @click="onSubmit" class="btn btn-dark w-100">Sign up</button>
    </div>
  </form>
</div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
// import { required } from '@vuelidate/validators'
export default {
  name: "RegisterView",
  setup () {
    return { v$: useVuelidate() }
  },
  data(){
    return {
      user: {
        id: '',
        password: '',
        confirm_password: '',
        name: '',
        nickname: '',
        office: '',
        mobile: '',
        email: ''
      },
      submitted: false
    }
  },
  methods: {
    onSubmit() {
      this.submitted = true;
    }
  },
  
}
</script>
<style scoped>
.container {
  width: 50%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: left;
}
.req {
  color: red;
}
</style>