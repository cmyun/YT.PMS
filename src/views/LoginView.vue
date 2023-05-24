<template>
  <div class="wrap_lg">
    <h1><span>Login</span></h1>
    <div class="container_lg">
      <form as="v-form" @submit.prevent="handleSubmit">
        <div class="inp">
          <input type="text" v-model="id" id="id" placeholder="Login ID">
        </div>
        <div class="inp">
          <input type="password" v-model="password" id="password" placeholder="Password">
        </div>
        <div class="btn_lg">
          <button :disabled="!id||!password" :class="['login_normal', {disabled: !id||!password}]">Login</button>
        </div>
        <p class="text-center">Create an account? <router-link to="/register">Signup now</router-link></p>
      </form>
    </div>
  </div>
</template>
<script>
import { required } from '@vuelidate/validators'
import { mapState, mapActions } from 'vuex'

export default {
  name: "LoginView",
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
          this.login({ id, password })
        }
    }
  },
  mounted() {
    document.body.style.backgroundColor = '#f6f6f9';
  },
}
</script>
<style scoped>
.wrap_lg {
  max-width: 560px;
  min-width: 320px;
  margin: 0 auto;
  text-align: center;
}
.error {
  color: red;
}
.register .fm_register .inp {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 48px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
}
.inp + .inp {
  margin-top: 12px;
}
.container_lg {
  margin: 0 auto;
  padding: 50px 6%;
  background-color: #fff;
  border: 1px solid #e5e5e6;
  border-radius: 2px;
  text-align: left;
  word-break: break-all;
}
h1 {
  padding: 80px 0 40px;
}
.inp input {
  outline-style: none;
  width: 100%;
  height: 47px;
  border: 0 none;
  font-size: 17px;
  color: #222;
  line-height: 32px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 12px 0;
  vertical-align: top;
  border-bottom: 1px solid #ddd;
}
.btn_lg .login_normal:disabled, .
.btn_lg .login_normal.disabled {
  background-color: #ccc;
  cursor: default;
}
.register.login .btn_lg button {
  display: block;
  width: 100%;
  height: 48px;
  font-size: 15px;
}
.btn_lg .login_normal {
  border: 1px solid #b2b2b2;
  background-color: #157efb;
  border: 0;
}
.btn_lg button {
  display: inline-block;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #157efb;;
  border-radius: 2px;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 40px;
  color: #fff;
  border: 0;
  min-width: 129px;
  box-sizing: border-box;
}
.btn_lg button {
  display: block;
  width: 100%;
  height: 48px;
  font-size: 15px;
}
.btn_lg {
  padding-top: 20px;
  margin-bottom: 19px;
}
.btn_lg .login_normal.disabled {
  background-color: #ccc;
}
</style>
