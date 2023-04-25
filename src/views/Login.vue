<template>
<div class="wrap">
  <form as="v-form" @submit.prevent="submitForm">
    <h1 class="text-center mb-5">Login</h1>
    <div class="form-group mb-3">
      <label class="font-weight-bold" for="id">ID</label>
      <input type="text" class="form-control" id="id">
    </div>
    <div class="form-group mb-5">
      <label class="font-weight-bold" for="password">Password</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="text-center mb-3">
      <button type="submit" @click="onSubmit" class="btn btn-dark w-50">Login</button>
    </div>
    <p class="text-center">Create an account? <router-link to="/register">Signup now</router-link></p>
  </form>
</div>
</template>
<script>

export default {
  // setup () {
  //   return { v$: Vuelidate.useVuelidate() }
  // },
  data(){
    return {
      form: {
        id: '',
        password: ''
      }
    }
  },
  // validations: {
  //   form: {
  //     id: {
  //       required: VuelidateValidators.required
  //     },
  //     password: {
  //       required: VuelidateValidators.required
  //     }
  //   }
    
  // },
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
  margin-top: 200px;
}
</style>