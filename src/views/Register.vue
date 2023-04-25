<template>
<div class="wrap">
  <form @submit.prevent="submitForm">
    <h1 class="text-center mb-5">Sign up</h1>
    <div class="form-group mb-3">
      <label class="font-weight-bold" for="id">ID</label>
      <input type="text" class="form-control" id="id">
    </div>
    <div class="form-group mb-3">
      <label class="font-weight-bold" for="password">Password</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="form-group mb-3">
      <label class="font-weight-bold" for="confirm_password">Confirm Password</label>
      <input type="password" class="form-control" id="confirm_password">
    </div>
    <div class="form-group mb-3">
      <label class="font-weight-bold" for="name">Name</label>
      <input type="text" class="form-control" name="name">
    </div>
    <div class="form-group mb-3">
      <label class="font-weight-bold" for="nickname">Nickname</label>
      <input type="text" class="form-control" name="nickname">
    </div>
    <div class="form-group mb-3">
      <label class="font-weight-bold" for="office">Office</label>
      <input type="text" class="form-control" name="office">
    </div>
    <div class="form-group mb-3">
      <label class="font-weight-bold" for="mobile">Mobile</label>
      <input type="text" class="form-control" name="mobile">
    </div>
    <div class="form-group mb-3">
      <label class="font-weight-bold" for="email">Email</label>
      <input type="email" class="form-control" name="email">
    </div>
    <p class="text-center mb-3">Already a member? <router-link to="/login">Login</router-link></p>
    <div class="text-center mb-3">
      <button type="submit" @click="onSubmit" class="btn btn-dark w-50">Sign up</button>
    </div>
  </form>
</div>
</template>
<script>

export default {
  data(){
    return {
      form: {
        
      }
    }
  },
  methods: {
    onSubmit() {
      
    }
  },
  
}
</script>
<style scoped>
.wrap {
  width: 50%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>