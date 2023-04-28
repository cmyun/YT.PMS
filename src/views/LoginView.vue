<template>
<div class="container">
  <form as="v-form" @submit.prevent="handleSubmit">
    <h1 class="text-center mb-5">Login</h1>
    <div class="form-group mb-3">
      <label for="id"><b>ID</b></label>
      <input type="text" v-model="id" class="form-control" id="id">
    </div>
    <div class="form-group mb-5">
      <label for="password"><b>Password</b></label>
      <input type="password" v-model="password" class="form-control" id="password">
    </div>
    <div class="text-center mb-3">
      <button class="btn btn-dark w-100" :disabled="status.loggingIn">Login</button>
    </div>
    <p class="text-center">Create an account? <router-link to="/register">Signup now</router-link></p>
  </form>
</div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { mapState, mapActions } from 'vuex'

export default {
  name: "LoginView",
  setup () {
    return { v$: useVuelidate() }
  },
  data(){
    return {
      id: '',
      password: '',
      submitted: false
    }
  },
  validations () {
    return {
      id: { required } ,
      password: {required} ,
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  created(){
   this.logout();
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit (e) {
        this.submitted = true;
        const { id, password } = this;
        if (id && password) {
          console.log({id, password})
            this.login({ id, password })
        }
    }
  },
  
}
</script>
<style scoped>
.container {
  width: 50%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 200px;
  text-align: left;
}
.error {
  color: red;
}
</style>