<template>
<div class="container">
  <form as="v-form" @submit.prevent="onSubmit">
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
      <!-- <button type="submit" @click="onSubmit" class="btn btn-dark w-100" :disabled='!isComplete'>Login</button> -->
      <button type="submit" @click="onSubmit" class="btn btn-dark w-100">Login</button>
    </div>
    <p class="text-center">Create an account? <router-link to="/register">Signup now</router-link></p>
  </form>
</div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { userService } from '../../services';
import router from "../router";

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
    // const requestOptions2 = {
    //     method: 'POST',
    //     // headers: new Headers(),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     // credentials: "include",
    //     // headers: new Headers(),
    //     // mode: "no-cors",
    //     body: JSON.stringify({
    //       id: "TEST01",
    //       password: "TEST01234"
    //     }),
    //     // id: "TEST01",
    //     //   password: "TEST01234"
        
    // };

    // (async () => {
    //   const rawResponse = await fetch('http://dev.yunwootech.com:52304/user-management/login/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     // mode: "cors",
    //     body: JSON.stringify({
    //       id: 'TEST01',
    //       password: 'TEST01234'
    //     })
    //   });
    //   const content = await rawResponse.json();

    //   console.log(content);
    // })();
    // ; charset=utf-8
    // fetch('http://dev.yunwootech.com:52304/user-management/login', requestOptions2).then(function(response){
    //   console.log(response)
    // });
    // const requestOptions = {
    //     method: 'GET',
    //     headers: new Headers(),
    //     mode: "cors"
    //     // credentials: "include",
    //     // body: JSON.stringify({
    //     //   id: "TEST01",
    //     //   password: "TEST01234"
    //     // }),
        
    // };

    // fetch('http://dev.yunwootech.com:52304/user-management/users', requestOptions).then(function(response){
    //   console.log(response)
    // });
   
  },
  methods: {
    onSubmit() {
      this.submitted = true;
      // const user = {
      //   "id": 0,
      //   "name": "TEST",
      //   "login_ID": "TEST01",
      //   "login_PW": "TEST01234",
      //   "level_ID": 2,
      //   "position_ID": 6,
      //   "type_ID": 8,
      //   "organization_ID": 12,
      //   "no": 0,
      //   "office": "070-0000-0000",
      //   "mobile": "000-0000-0000",
      //   "email": "TEST@yunwoo.co.kr",
      //   "nickname": "TEST",
      //   "isUse": true,
      //   "isAdmin": true,
      //   "note": null
      // }
      // console.log(user)
      // async function fetchMoviesJSON(){
      //   const rawResponse = await fetch('http://dev.yunwootech.com:52304/user-management/users', {
      //     method: 'GET',
      //     headers: new Headers(),
      //     mode: "cors",
      //   });
      //   const content = await rawResponse.json();

      //   // console.log(content);
      //   return content;
      // }
      // fetchMoviesJSON().then(content=>{
      //   console.log(content)
      // })
      const { id, password } = this;
      userService.login({ id, password }).then(function(user){
        console.log(user);
        router.push('/');
      })
        
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