<template>
<div class="container">
  <form as="v-form" @submit.prevent="onSubmit">
    <h1 class="text-center mb-5">Login</h1>
    <div class="form-group mb-3">
      <label for="id"><b>ID</b></label>
      <input type="text" v-model="id" class="form-control" id="id" @blur="v$.id.$touch">
      <div v-if="v$.id.$error" :class="{error: v$.id.$error}" >Enter your ID</div>
    </div>
    <div class="form-group mb-5">
      <label for="password"><b>Password</b></label>
      <input type="password" v-model="password" class="form-control" id="password" @blur="v$.password.$touch">
      <div v-if="v$.password.$error" :class="{error: v$.id.$error}">Enter your password</div>
    </div>
    <div class="text-center mb-3">
      <button type="submit" @click="onSubmit" class="btn btn-dark w-100" :disabled='!isComplete'>Login</button>
    </div>
    <p class="text-center">Create an account? <router-link to="/register">Signup now</router-link></p>
  </form>
</div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

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
    isComplete () {
      return this.id && this.password;
    }
  },
  created(){
    const requestOptions = {
        method: 'GET',
        // headers: new Headers(),
        // withCredentials: true,
        crossorigin: true,    
        // mode: 'no-cors',
        // ,
        
        // mode: "cors",
        // cache: "default"
    };

    fetch('http://dev.yunwootech.com:52304/user-management/users', requestOptions).then(function(response){
      console.log(response)
    });
   
  },
  methods: {
    onSubmit() {
      this.submitted = true;
    },
    
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