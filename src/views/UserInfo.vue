<template>
  <div class="contact">
    <Header/>
    <div id="container">
      <Sidebar/>
      <div id="content" class="contents fixLayout">
        <div class="main">
          <div class="contentsHead">
            <h3 class="title"><span class="txt">My Profile</span></h3>
          </div>
          <div class="contents_body dashboard">
            <form @submit.prevent="handleSubmit">
              <div class="contents_body_inner">
                <div class="profile_form_cover">
                  <div class="profile_form_header">
                    <div class="thumbnail_area">
                      <div class="thumbnail">
                        <span class="initial_profile" style="background-color: rgb(134, 164, 212);">
                          <em>t</em>
                        </span>
                      </div>
                      <div class="task">
                        <button type="button" class="btn_edit">
                        </button>
                      </div>
                    </div>
                    <div class="info_area">
                      <h4 class="name">{{ member.name }}</h4>
                    </div>
                  </div>
                  <div class="profile_form">
                    <div class="field">
                      <strong class="title">Nickname</strong>
                      <div class="box">
                      <div class="input_cover">
                        <input type="text" class="lw_input_36" placeholder="Nickname" v-model="userInfo.nickname" name="nickname" id="nickname">
                      </div>
                      </div>
                    </div>
                    <div class="field">
                      <strong class="title">Company</strong>
                      <div class="box"><p class="text">{{ member.company }}</p></div>
                    </div>
                    <div class="field">
                      <strong class="title">Department</strong>
                      <div class="box"><p class="text">{{ member.department }}</p></div>
                    </div>
                    <div class="field">
                      <strong class="title">Position</strong>
                      <div class="box"><p class="text">{{ member.position }}</p></div>
                    </div>
                    <div class="field">
                      <strong class="title">Level</strong>
                      <div class="box"><p class="text">{{ member.level }}</p></div>
                    </div>
                    <div class="field">
                      <strong class="title">Office</strong>
                      <div class="box">
                      <div class="input_cover">
                        <input type="text" class="lw_input_36" placeholder="Office" v-model="userInfo.office">
                      </div>
                      </div>
                    </div>
                    <div class="field">
                      <strong class="title">Mobile</strong>
                      <div class="box">
                      <div class="input_cover">
                        <input type="text" class="lw_input_36" placeholder="Mobile" v-model="userInfo.mobile">
                      </div>
                      </div>
                    </div>
                    <div class="field">
                      <strong class="title">E-Mail</strong>
                      <div class="box">
                      <div class="input_cover">
                        <input type="text" class="lw_input_36" placeholder="E-Mail" v-model="userInfo.email">
                      </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
                <div class="btn_area">
                  <button class="lw_btn_point_40" :disabled="disabled">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import { mapState, mapActions } from 'vuex'
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
    Sidebar
  },
  data(){
		return {
			userInfo: {
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
			disabled: false

		}
	},
  computed: {
    ...mapState('member', ['member']),
    ...mapState('account', ['user']),
  },
  created() {
    this.getMemberInfo(this.user.id);
  },
  mounted(){
	const member = this.member
	this.userInfo = member
	this.userInfo = {
		'login_ID':  member.login_ID,
		'login_PW':  member.login_PW,
		'confirm_PW':  member.confirm_PW,
		'name':  member.name,
		'nickname':  member.nickname,
		'office':  member.office,
		'mobile':  member.mobile,
		'email':  member.email,
		'note': ''
	}
  },
  methods: {
    ...mapActions('member', ['getMemberInfo']),
    ...mapActions('member', ['updateUser']),
    ...mapActions('account', ['register']),
    handleSubmit(e) {
      this.updateUser(this.userInfo);
    },
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
 

</style>
