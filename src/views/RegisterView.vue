<template>
  <div class="wrap_lg">
    <h1 class="text-center mb-5">Sign up</h1>
    <div class="container_lg">
      <form @submit.prevent="handleSubmit">
        <div class="inp">
          <!-- <label for="id"><b>ID</b><span class="req"> *</span></label> -->
          <input type="text" placeholder="ID" v-model="user.login_ID" id="id" @blur="v$.user.login_ID.$touch" maxlength="20">
          <div v-if="v$.user.login_ID.$error" :class="{error: v$.user.login_ID.$error}" >You can't leave this empty.</div>
        </div>
        <div class="inp">
          <!-- <label for="login_PW"><b>Password</b><span class="req"> *</span></label> -->
          <input type="password" placeholder="Password" v-model="user.login_PW" id="login_PW" @blur="v$.user.login_PW.$touch" maxlength="16">
          <div v-if="v$.user.login_PW.$error" :class="{error: v$.user.login_PW.$error}" >You can't leave this empty.</div>
        </div>
        <div class="inp">
          <!-- <label for="confirm_PW"><b>Confirm Password</b><span class="req"> *</span></label> -->
          <input type="password" placeholder="Confirm password" v-model="user.confirm_PW" id="confirm_PW" @blur="v$.user.confirm_PW.$touch" maxlength="16">
          <div v-if="v$.user.confirm_PW.$error" :class="{error: v$.user.confirm_PW.$error}" >These passwords don’t match.</div>
        </div>
        <div class="inp">
          <!-- <label for="name"><b>Name</b><span class="req"> *</span></label> -->
          <input type="text" placeholder="Name" v-model="user.name" name="name" id="name" @blur="v$.user.name.$touch">
          <div v-if="v$.user.name.$error" :class="{error: v$.user.name.$error}" >You can't leave this empty.</div>
        </div>
        <div class="inp">
          <!-- <label for="nickname"><b>Nickname</b></label> -->
          <input type="text" placeholder="Nickname" v-model="user.nickname" name="nickname" id="nickname">
        </div>
        <div class="inp">
          <!-- <label for="office"><b>Office</b></label> -->
          <input type="text" placeholder="Office" v-model="user.office" name="office" id="office">
        </div>
        <div class="inp">
          <!-- <label for="mobile"><b>Mobile</b></label> -->
          <input type="text" placeholder="Mobile" v-model="user.mobile" name="mobile" id="mobile">
        </div>
        <div class="inp">
          <!-- <label for="email"><b>Email</b></label> -->
          <input type="email" placeholder="Email" v-model="user.email" name="email" id="email" @blur="v$.user.name.$touch">
          <div v-if="v$.user.email.$error" :class="{error: v$.user.email.$error}" >Please enter a valid address.</div>
        </div>
        <div class="btn_lg">
          <button class="btn btn-dark w-100">Sign up</button>
        </div>
        <p class="text-center mb-3">Already a member? <router-link to="/login">Login</router-link></p>
      </form>
    </div>
  </div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email  } from '@vuelidate/validators'
import { mapState, mapActions } from 'vuex'
export default {
  name: "RegisterView",
  setup () {
    return { v$: useVuelidate() }
  },
  data(){
    return {
      user: {
        login_ID: '',
        login_PW: '',
        confirm_PW: '',
        name: '',
        nickname: '',
        office: '',
        mobile: '',
        email: '',
        note: ''
      },
      submitted: false
    }
  },
  
  validations () {
    return {
      user: {
        login_ID: {
          required
        },
        login_PW: {
          required
        },
        confirm_PW: {
          required
        },
        name: {
          required
        },
        email: {
          email: email
        }
      },
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit(e) {
        const user = this;
        this.submitted = true;
        this.register(this.user);
    }
  },
  mounted() {
    document.body.style.backgroundColor = '#f6f6f9';
  },
}
</script>
<style scoped>
.error,
.req {
  color: red;
}
.wrap_lg {
  max-width: 560px;
  min-width: 320px;
  margin: 0 auto;
  text-align: center;
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
