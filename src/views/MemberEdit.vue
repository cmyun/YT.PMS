<template>
  <div class="contact sub_page wrap">
    <Header
      :title="'Admin'"
    />
    <Sidebar
      :type="'admin'"
    />
    <div id="container">
      <div id="content" class="contents sub">
        <div class="contentsHead contents_head">
          <h3 class="title"><span class="txt">Edit member information</span></h3>
        </div>
        <div class="contents_body dashboard ly_member_add">
          <div class="fm_members">
            <div class="member">
              <Form @submit="handleSubmit">
                <div class="contents_body_inner">
                  <div class="profile_form_cover">
                    <div class="profile_form_header">
                      <div class="thumbnail_area">
                        <div class="thumbnail">
                          <span class="thmb_area">
                            <img src="../assets/img_profile.png" alt="">
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="profile_form">
                      <div class="field">
                        <i class="hd">
                        <em class="emp">Required field</em>Name </i>
                        <div class="box">
                          <Field name="name" type="text" class="lw_input" placeholder="ID" v-model="form.name" rules="required"/>
                        </div>
                        <ErrorMessage name="name" class="text_error"/>
                      </div>
                      <div class="field minor">
                        <i class="hd">Nickname</i>
                        <div class="box">
                          <Field name="nickname" type="text" class="lw_input" placeholder="Nickname" v-model="form.nickname"/>
                        </div>
                        <ErrorMessage name="nickname" class="text_error"/>
                      </div>
                      <div class="field">
                        <i class="hd">
                        <em class="emp">Required field</em>ID </i>
                        <div class="box">
                          <Field name="login_ID" type="text" class="lw_input" placeholder="ID" v-model="form.login_ID" rules="required"/>
                        </div>
                        <ErrorMessage name="login_ID" class="text_error"/>
                      </div>
                      <div class="field">
                        <i class="hd">
                          <em class="emp">Required field</em>Password 
                        </i>
                        <div class="box">
                          <Field  name="login_PW" type="password" class="lw_input" placeholder="Password" v-model="form.login_PW" rules="required"/>
                        </div>
                        <ErrorMessage name="login_PW" class="text_error"/>
                      </div>
                      <div class="field minor">
                        <i class="hd">
                          <em class="emp">Required field</em>
                          Level
                        </i>
                        <div class="box">
                          <div class="lw_selectbox">
                            <select name="level_ID" id="member_type" class="lw_selectbox_source" v-model="form.level_ID">
                              <option :value="level.id" v-for="level in levels" :key="level.id">{{ level.name }}</option>
                            </select>
                          </div>
                          <ErrorMessage name="level_ID" class="text_error"/>
                        </div>
                      </div>
                      <div class="field minor">
                        <i class="hd">
                          <em class="emp">Required field</em>
                          Position
                        </i>
                        <div class="box">
                          <div class="lw_selectbox">
                            <select name="position_ID" id="member_type" class="lw_selectbox_source" v-model="form.position_ID" rules="required">
                              <option :value="position.id" v-for="position in positions" :key="position.id">{{ position.name }}</option>
                            </select>
                          </div>
                          <ErrorMessage name="position_ID" class="text_error"/>
                        </div>
                      </div>
                      <div class="field">
                        <i class="hd"><em class="emp">Required field</em>Organization</i>
                        <div class="box">
                            <Field name="organization_ID" type="text" class="lw_input" placeholder="Organization" v-model="form.organization_ID"/>
                            <ErrorMessage name="organization_ID" class="text_error"/>
                            <button type="button" class="btn w-10 btnAddOrg ms-3" @click="openModalOrg"></button>
                        </div>
                      </div>
                      <div class="field minor">
                        <i class="hd">Employment type</i>
                        <div class="box">
                          <div class="lw_selectbox">
                            <select name="type_ID" id="member_type" class="lw_selectbox_source" v-model="form.type_ID">
                              <option :value="item.id" v-for="item in types" :key="item.id">{{ item.name }}</option>
                            </select>
                          </div>
                          <ErrorMessage name="type_ID" class="text_error"/>
                        </div>
                      </div>
                      <div class="field minor">
                        <i class="hd">Office</i>
                        <div class="box">
                          <Field name="office" type="text" class="lw_input" placeholder="Office" v-model="form.office"/>
                        </div>
                        <ErrorMessage name="office" class="text_error"/>
                      </div>
                      <div class="field minor">
                        <i class="hd">Mobile phone</i>
                        <div class="box wrap_phone">
                          <div class="inp_phone">
                            <Field name="mobile" type="text" class="lw_input" placeholder="Phone number" v-model="form.mobile"/>
                          </div>
                          <ErrorMessage name="mobile" class="text_error"/>
                        </div>
                      </div>
                      <div class="field minor">
                        <i class="hd">Personal Email</i>
                        <div class="box fm_email custom_type">
                          <Field name="email" type="text" class="lw_input email_id" placeholder="Personal Email"  v-model="form.email"/>
                        </div>
                        <ErrorMessage name="email" class="text_error"/>
                      </div>
                      <div class="field minor">
                        <i class="hd"><em class="emp">Required field</em>Status</i>
                        <div class="box fm_date">
                          <span class="fm_box">
                            <input type="radio" id="status_inuse" name="status" class="lw_radio" checked="" v-model="form.isUse">
                            <label for="status_inuse">In use</label>
                            <input type="radio" id="status_notuse" name="status" class="lw_radio" v-model="form.isUse">
                            <label for="status_notuse">Not in use</label>
                          </span>
                        </div>
                      </div>
                      <div class="field minor">
                        <i class="hd"><em class="emp">Required field</em>Admin</i>
                        <div class="box fm_date">  
                          <span class="fm_box">
                            <input type="radio" id="admin_yes" name="admin" class="lw_radio"  v-model="form.isAdmin">
                            <label for="admin_yes">Yes</label>
                            <input type="radio" id="admin_no" name="admin" class="lw_radio" checked="" v-model="form.isAdmin">
                            <label for="admin_no">No</label>
                          </span>
                        </div>
                      </div>
                      <div class="field minor">
                        <i class="hd">Remark</i>
                        <div class="box">
                          <textarea class="lw_textarea" v-model="form.remark" ></textarea>
                        </div>
                        <ErrorMessage name="number" class="text_error"/>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="btn_area">
                    <button class="lw_btn_point_40" :disabled="disabled">Save</button>
                  </div> -->
                  <div class="btn_area">
                    <button type="button" class="lw_btn" @click="clear">Cancel</button>
                    <button class="lw_btn_point">Add</button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <org-modal :title="'Select Organization'" 
        :visible="visibleOrg" 
        @close="closeModalOrg" 
        @selectedOrg="onSelectedOrg">
      </org-modal>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import { mapState, mapActions } from 'vuex';
import { required } from '@vee-validate/rules';
import OrgModal from '@/components/OrgModal.vue';
defineRule('required', required);
configure({
  generateMessage: (ctx) => {
    const messages = {
      required: "You can't leave this empty.",
    };
    const message = messages[ctx.rule.name] || `Invalid ${ctx.field} field.`;
    return message;
  },
});

export default {
  name: "UserInfo",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    Header,
    Sidebar,
    Form,
    Field,
    ErrorMessage
  },
  data(){
		return {
      form: {
        name: '',
        login_ID: '',
        login_PW: '',
        level_ID: 0,
        position_ID: 0,
        type_ID: 0,
        organization_ID: 0,
        office: '',
        mobile: '',
        email: '',
        nickname: '',
        isUse: true,
        isAdmin: false,
        remark: '',
        note: ''
      },
      mem: {},
			disabled: false,
      visibleOrg: false
		}
	},
  computed: {
    ...mapState('member', ['member']),
    ...mapState('account', ['user']),
    ...mapState('levels', ['levels']),
    ...mapState('organizations', ['organizations']),
    ...mapState('positions', ['positions']),
    ...mapState('types', ['types']),
  },
  created() {
    this.getMemberInfo(this.id);
    this.getLevels();
    this.getTypes();
    this.getOrganizations();
    this.getPositions();
    this.mem = this.member;
  },
  watch: {
    member(newVal) {
      this.form = newVal
    }
  },
  methods: {
    ...mapActions('levels', ['getLevels']),
    ...mapActions('organizations', ['getOrganizations']),
    ...mapActions('positions', ['getPositions']),
    ...mapActions('types', ['getTypes']),
    ...mapActions('member', ['getMemberInfo']),
    ...mapActions('member', ['updateUser']),
    ...mapActions('account', ['register']),
    handleSubmit(e) {
      // this.updateUser(this.userInfo);
      const form = {
        ...this.form,
        'token': this.user.token,
        'expiresTime': this.user.expiresTime,
        'note': ''
      }
      console.log(form)
      this.updateUser(form);
    },
    closeModalOrg() {
      this.visibleOrg = false;
    },
    openModalOrg() {
      this.visibleOrg = true;
    },
    clear(){
      this.form = this.mem;
    }
  }
}
</script>
<style lang="scss" scoped>
.lw_btn_point_34.disabled:hover, 
.lw_btn_point_34:disabled:hover, 
.lw_btn_point_40 {
  background: #157efb;
}
.btn_area {
  position: relative;
  display: flex;
  margin-top: 30px;
}
.btn_area button {
  flex: 0 0 auto;
  margin-left: auto;
  min-width: 73px;
  padding: 9px 24px 10px;
}
.btn_area button + button {
  margin-left: 8px;
}
.lw_btn_point_40 {
  font-size: 14px;
  display: inline-block;
  box-sizing: border-box;
  height: 40px;
  border-radius: 2px;
  line-height: 21px;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 9px 8px 10px;
  cursor: pointer;
  min-width: 49px;
  border: 0;
  color: #fff;
  font-weight: 700;
}
.lw_btn_point_40:hover {
  background-color: #f3f3f3;
  background: #1373e6;
}
.lw_btn_point_40:disabled {
  cursor: default;
  opacity: 0.4;
}
.lw_btn_point_40:disabled:hover {
  background-color: #fff;
  background: #157efb;
}
.lw_btn_point_40.active {
  color: #157efb;
}
.lw_btn_point_40.hover {
  background-color: #f3f3f3;
  background: #1373e6;
}
.lw_btn_point_40.on {
  background-color: #e6e6e6;
  background: #1373e6;
}
.lw_btn_point_40.disabled {
  cursor: default;
  opacity: 0.4;
}
.lw_btn_point_40.disabled:hover {
  background-color: #fff;
  background: #157efb;
}
ul {
  padding-left: 0;
}
p {
  margin-bottom: 0;
}
.lw_input_36 {
  font-size: 14px;
  color: #222;
  line-height: 21px;
  padding: 7px 0 8px 10px;
  box-sizing: border-box;
  height: 36px;
  border: 1px solid #ddd;
  border-radius: 2px;
  width: 100%;
}
.lw_input_36:focus {
  border-color: #157efb;
  outline: none;
}
.lw_input_36.focus {
  border-color: #157efb;
  outline: none;
}
form .profile_form_cover .profile_form_header {
  display: flex;
  padding-bottom: 7px;
  border-bottom: 1px solid #eee;
}
.profile_form_cover .profile_form_header.view_type {
  padding-bottom: 30px;
  align-items: center;
}
.profile_form_cover .profile_form_header.view_type .info_area .name {
  margin-bottom: 0;
}
.profile_form_cover .profile_form_header {
  display: flex;
  padding-bottom: 7px;
  border-bottom: 1px solid #eee;
}
.profile_form_cover .profile_form_header .thumbnail_area {
  flex: 0 0 auto;
  position: relative;
  width: 100px;
  height: 100px;
  margin-right: 83px;
}
.profile_form_cover .profile_form_header .thumbnail_area .thumbnail {
  position: relative;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.profile_form_cover .profile_form_header .thumbnail_area .thumbnail img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 100%;
  transform: translate(-50%, -50%);
}
.profile_form_cover .profile_form_header .thumbnail_area .thumbnail:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 50%;
  content: "";
}
.profile_form_cover .profile_form_header .thumbnail_area .thumbnail .initial_profile em {
  font-size: 40px;
}
.profile_form_cover .profile_form_header .thumbnail_area .task {
  position: absolute;
  right: 0;
  bottom: 0;
}
.profile_form_cover .profile_form_header .thumbnail_area .task .btn_edit {
  display: inline-block;
  vertical-align: top;
  border: 0;
  background-color: transparent;
}
.profile_form_cover .profile_form_header .info_area {
  flex: 1 1 auto;
}
.profile_form_cover .profile_form_header .info_area h4.name {
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: bold;
}
.profile_form_cover .profile_form_header .info_area strong.title {
  display: block;
  padding: 10px 0 6px;
}
.profile_form_cover .profile_form.view_type .field {
  padding: 7px 0;
  border-bottom: 0;
}
.profile_form_cover .profile_form .field {
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
}
.profile_form_cover .profile_form .field strong.title {
  flex: 0 0 auto;
  box-sizing: border-box;
  display: inline-block;
  width: 183px;
  padding: 8px 20px 8px 0;
  line-height: 20px;
}
.profile_form_cover .profile_form .field .at {
  display: inline-block;
  flex: 0 0 auto;
  align-self: center;
  margin-left: 8px;
  line-height: 1;
}
.profile_form_cover .profile_form .field .box {
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
}
.profile_form_cover .profile_form .field .box .birth {
  flex: 0 0 auto;
  padding: 8px 0;
  display: inline-block;
}
.profile_form_cover .profile_form .field .box .solar_lunar {
  flex: 0 0 auto;
  padding: 8px 0;
  display: inline-block;
}
.profile_form_cover .profile_form .field .box .text_box {
  display: flex;
  width: 100%;
}
.profile_form_cover .profile_form .field .box .text_box + .text_box {
  margin-top: 10px;
}
.profile_form_cover .profile_form .field .box .team_box {
  flex: 1 1 auto;
  width: 100%;
  padding: 8px 0;
}
.profile_form_cover .profile_form .field .box .team_box .team + .position:before {
  display: inline-block;
  width: 1px;
  height: 14px;
  margin: 4px 6px 0;
  background-color: #ddd;
  vertical-align: top;
  content: "";
}
.profile_form_cover .profile_form .field .box .team_box ~ .team_box {
  margin-top: 8px;
}
.profile_form_cover .profile_form .field .box .text {
  padding: 8px 0;
  flex: 1 1 auto;
  display: block;
  width: 100%;
  line-height: 20px;
}
.profile_form_cover .profile_form .field .box .text + .text {
  padding-top: 0;
}
.profile_form_cover .profile_form .field .box .text.half {
  flex: 0 0 auto;
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
}
.profile_form_cover .profile_form .field .box .text.half ~ .half {
  margin-left: 20px;
  padding-top: 8px;
  flex: 1 1 auto;
}
.profile_form_cover .profile_form .field .box .input_cover {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
}
.profile_form_cover .profile_form .field .box .input_cover.fixed {
  flex: 0 0 auto;
  width: 200px;
}
.profile_form_cover .profile_form .field .box .input_cover ~ .input_cover {
  width: 1px;
  margin-left: 8px;
}

.initial_profile {
  display: block;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.initial_profile em {
  display: block;
  width: 100%;
  font-size: 20px;
  font-style: normal;
  color: #fff;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
}
.ly_member_add .field {
  margin-top: 0;
}
.ly_member_add .field .hd {
  top: 25px;
}
.btnAddOrg {
  position: absolute;
  width: 34px;
  height: 34px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: url(../assets/icon_group_active.svg) no-repeat 0 0;
  background-size: 100% 100%;
  outline: none;
  border: none;
}
.text_error {
  margin-top: 10px;
  margin-left: 120px;
  width: 100%;
}
.profile_form_cover .profile_form .field {
  flex-wrap: wrap;
}
</style>
