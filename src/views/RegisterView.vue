<template>
  <div class="wrap_lg">
    <h1><span>Sign up</span></h1>
    <div class="container_lg">
      <Form @submit="handleSubmit">
        <div class="inp">
          <Field type="text" name="id" placeholder="ID" v-model="user.login_ID" rules="required" maxlength="12"/>
          <ErrorMessage name="id" class="text_error"/>
        </div>
        <div class="inp">
          <Field type="password" name="login_PW" placeholder="Password" v-model="user.login_PW" rules="required" maxlength="16"/>
          <ErrorMessage name="login_PW" class="text_error"/>
        </div>
        <div class="inp">
          <Field type="password" name="confirm_PW" placeholder="Confirm password" v-model="user.confirm_PW" rules="required|confirmed:@login_PW"/>
          <ErrorMessage name="confirm_PW" class="text_error"/>
        </div>
        <div class="inp">
          <Field type="text" placeholder="Name" v-model="user.name" name="name" rules="required"/>
          <ErrorMessage name="name" class="text_error"/>
        </div>
        <div class="inp">
          <Field type="text" placeholder="Nickname" v-model="user.nickname" name="nickname" rules="required"/>
        </div>
        <div class="inp">
          <Field type="text" placeholder="Office" v-model="user.office" name="office"/>
        </div>
        <div class="inp">
          <Field type="text" placeholder="Mobile" v-model="user.mobile" name="mobile"/>
        </div>
        <div class="inp">
          <Field type="email" placeholder="Email" v-model="user.email" name="email" rules="email"/>
          <ErrorMessage name="email" class="text_error"/>
        </div>
        <div class="btn_lg">
          <button class="btn btn-dark w-100">Sign up</button>
        </div>
        <p class="text-center mb-3">Already a member? <router-link to="/login">Login</router-link></p>
      </Form>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, confirmed } from '@vee-validate/rules';
defineRule('required', required);
defineRule('email', email);
defineRule('confirmed', confirmed);
configure({
  generateMessage: (ctx) => {
    const messages = {
      required: "You can't leave this empty.",
      confirmed: "These passwords don’t match."
    };
    const message = messages[ctx.rule.name] || `Invalid ${ctx.field} field.`;
    return message;
  },
});
export default {
  name: "RegisterView",
  components: {
    Form,
    Field,
    ErrorMessage
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
<style scoped lang="scss">
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
  box-sizing: border-box;
  padding: 12px 0;
  vertical-align: top;
  border-bottom: 1px solid #ddd;
}
.btn_lg .login_normal:disabled,
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
