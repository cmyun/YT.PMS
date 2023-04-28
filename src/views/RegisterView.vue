<template>
<div class="container">
  <form @submit.prevent="handleSubmit">
    <h1 class="text-center mb-5">Sign up</h1>
    <div class="form-group mb-3">
      <label for="id"><b>ID</b><span class="req"> *</span></label>
      <input type="text" v-model="user.login_ID" class="form-control" id="id" @blur="v$.user.login_ID.$touch" maxlength="20">
      <div v-if="v$.user.login_ID.$error" :class="{error: v$.user.login_ID.$error}" >You can't leave this empty.</div>
    </div>
    <div class="form-group mb-3">
      <label for="login_PW"><b>Password</b><span class="req"> *</span></label>
      <input type="password" v-model="user.login_PW" class="form-control" id="login_PW" @blur="v$.user.login_PW.$touch" maxlength="16">
      <div v-if="v$.user.login_PW.$error" :class="{error: v$.user.login_PW.$error}" >You can't leave this empty.</div>
    </div>
    <div class="form-group mb-3">
      <label for="confirm_PW"><b>Confirm Password</b><span class="req"> *</span></label>
      <input type="password" v-model="user.confirm_PW" class="form-control" id="confirm_PW" @blur="v$.user.confirm_PW.$touch" maxlength="16">
      <div v-if="v$.user.confirm_PW.$error" :class="{error: v$.user.confirm_PW.$error}" >These passwords don’t match.</div>
    </div>
    <div class="form-group mb-3">
      <label for="name"><b>Name</b><span class="req"> *</span></label>
      <input type="text" v-model="user.name" class="form-control" name="name" id="name" @blur="v$.user.name.$touch">
      <div v-if="v$.user.name.$error" :class="{error: v$.user.name.$error}" >You can't leave this empty.</div>
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
      <input type="email" v-model="user.email" class="form-control" name="email" id="email" @blur="v$.user.name.$touch">
      <div v-if="v$.user.email.$error" :class="{error: v$.user.email.$error}" >Please enter a valid address.</div>
    </div>
    <p class="text-center mb-3">Already a member? <router-link to="/login">Login</router-link></p>
    <div class="text-center mb-3">
      <button class="btn btn-dark w-100">Sign up</button>
    </div>
  </form>
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
        console.log(user)
        this.submitted = true;
        this.register(this.user);
    }
  },
  
}
</script>
<style scoped>
.container {
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: left;
}
.error,
.req {
  color: red;
}
</style>