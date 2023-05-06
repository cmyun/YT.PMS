<template>
  <div class="contact">
    <Header/>
    <div id="container">
      <Sidebar/>
      <div id="content" class="fixLayout">
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
                    <h4 class="name">{{ member[0].name }}</h4>
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
							<div class="box"><p class="text">{{ member[0].company }}</p></div>
						</div>
						<div class="field">
							<strong class="title">Department</strong>
							<div class="box"><p class="text">{{ member[0].department }}</p></div>
						</div>
						<div class="field">
							<strong class="title">Position</strong>
							<div class="box"><p class="text">{{ member[0].position }}</p></div>
						</div>
						<div class="field">
							<strong class="title">Level</strong>
							<div class="box"><p class="text">{{ member[0].level }}</p></div>
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
	this.userInfo = member[0]
	this.userInfo = {
		'login_ID':  member[0].login_ID,
		'login_PW':  member[0].login_PW,
		'confirm_PW':  member[0].confirm_PW,
		'name':  member[0].name,
		'nickname':  member[0].nickname,
		'office':  member[0].office,
		'mobile':  member[0].mobile,
		'email':  member[0].email,
		'note': ''
	}
	console.log(this.userInfo)
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
$color_1: #222;
$color_2: #767676;
$color_3: #fff;
$color_4: #434343;
$color_5: #157efb;
$color_6: #07c05b;
$background-color_1: #07b53b;
$background-color_2: rgba(0,0,0,.05);
$background-color_3: rgba(21,126,251,.1);
$background-color_4: #f3f3f3;
$background-color_5: #e6e6e6;
$background-color_6: #fff;
$background-color_7: transparent;
$background-color_8: #ddd;
$border-color_1: #157efb;

.lw_btn_point_34.disabled:hover, .lw_btn_point_34:disabled:hover, .lw_btn_point_40 {
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
.btn_area button+button {
    margin-left: 8px;
}
.lw_btn_point_40 {
	font-size: 14px;
	display: inline-block;
	-webkit-box-sizing: border-box;
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
	color: $color_3;
	font-weight: 700;
	&:hover {
		background-color: $background-color_4;
		background: #1373e6;
	}
	&:disabled {
		cursor: default;
		opacity: .4;
		&:hover {
			background-color: $background-color_6;
			background: #157efb;
		}
	}
}
.lw_btn_point_40.active {
	color: $color_5;
}
.lw_btn_point_40.hover {
	background-color: $background-color_4;
	background: #1373e6;
}
.lw_btn_point_40.on {
	background-color: $background-color_5;
	background: #1373e6;
}
.lw_btn_point_40.disabled {
	cursor: default;
	opacity: .4;
	&:hover {
		background-color: $background-color_6;
		background: #157efb;
	}
}
ul {
	padding-left: 0;
}
p {
  margin-bottom: 0;
}
.lw_input_36 {
	font-size: 14px;
	color: $color_1;
	line-height: 21px;
	padding: 7px 0 8px 10px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	height: 36px;
	border: 1px solid #ddd;
	border-radius: 2px;
	width: 100%;
	-webkit-appearance: none;
	&:focus {
		border-color: $border-color_1;
		outline: none;
	}
}
.lw_input_36.focus {
	border-color: $border-color_1;
	outline: none;
}
.contentsHead {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 18px 0 0;
	margin-bottom: 30px;
}
.contents_body {
	-webkit-box-flex: 1;
	-webkit-flex: 1 1 auto;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0 20px;
	color: $color_1;
	overflow: auto;
	.contents_body_inner {
		min-width: 733px;
		max-width: 1029px;
		padding-bottom: 80px;
		text-align: left;
	}
}
.contents_body.fixed_layout {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	width: 100%;
	height: 100%;
	min-height: 400px;
	overflow-y: hidden;
	.empty {
		-webkit-box-flex: 1;
		-webkit-flex: 1 1 auto;
		-ms-flex: 1 1 auto;
		flex: 1 1 auto;
	}
	.contents_header {
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 auto;
		-ms-flex: 0 0 auto;
		flex: 0 0 auto;
	}
	.contents_body_inner {
		-webkit-box-flex: 1;
		-webkit-flex: 1 1 auto;
		-ms-flex: 1 1 auto;
		flex: 1 1 auto;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		height: 100%;
		min-height: 0;
		.lw_table_cover {
			-webkit-box-flex: 1;
			-webkit-flex: 1 1 auto;
			-ms-flex: 1 1 auto;
			flex: 1 1 auto;
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			height: 100%;
			min-height: 0;
			.lw_table_header {
				-webkit-box-flex: 0;
				-webkit-flex: 0 0 auto;
				-ms-flex: 0 0 auto;
				flex: 0 0 auto;
			}
			.lw_table_scroll {
				display: -webkit-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				-webkit-box-flex: 1;
				-webkit-flex: 1 1 auto;
				-ms-flex: 1 1 auto;
				flex: 1 1 auto;
				.tb_empty {
					display: -webkit-box;
					display: -webkit-flex;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-orient: vertical;
					-webkit-box-direction: normal;
					-webkit-flex-direction: column;
					-ms-flex-direction: column;
					flex-direction: column;
					-webkit-box-flex: 1;
					-webkit-flex: 1 1 auto;
					-ms-flex: 1 1 auto;
					flex: 1 1 auto;
					padding: 0;
					-webkit-box-align: center;
					-webkit-align-items: center;
					-ms-flex-align: center;
					align-items: center;
					-webkit-box-pack: center;
					-webkit-justify-content: center;
					-ms-flex-pack: center;
					justify-content: center;
				}
			}
		}
		.settings_cover {
			-webkit-box-flex: 1;
			-webkit-flex: 1 1 auto;
			-ms-flex: 1 1 auto;
			flex: 1 1 auto;
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			height: 100%;
			min-height: 0;
		}
		.btn_area {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 auto;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
		}
		.detail_settings_desc {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 auto;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
		}
		.detail_settings_header {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 auto;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
		}
		.detail_settings_list {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 auto;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
		}
		.detail_settings_title {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 auto;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
		}
	}
}
.empty {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	padding: 20px;
	text-align: center;
	strong {
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 auto;
		-ms-flex: 0 0 auto;
		flex: 0 0 auto;
		display: block;
		width: 100%;
		font-size: 20px;
		color: $color_1;
	}
	strong~p {
		padding-top: 10px;
	}
	p {
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 auto;
		-ms-flex: 0 0 auto;
		flex: 0 0 auto;
		width: 100%;
		color: $color_2;
		line-height: 20px;
	}
	button[class^=lw_btn] {
		min-width: 97px;
		margin-top: 30px;
	}
}
.empty.empty_connect {
	&:before {
		background-position: -100px -76px;
	}
}
.header {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	min-width: 1024px;
	height: 52px;
	background-color: $background-color_1;
	border-bottom: 1px solid rgba(0,0,0,.1);
	h1 {
		margin: 14px 0 0 20px;
		font-size: 17px;
		font-weight: 600;
		color: $color_3;
		line-height: 24px;
	}
}
.header.hide {
	display: none;
}
.header.hide~.container {
	top: 0;
}
.header.hide~.lnb {
	top: 0;
}
.lnb {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	position: absolute;
	top: 52px;
	bottom: 0;
	left: 0;
	width: 251px;
	border-right: 1px solid #eee;
	overflow: auto;
	.lnb_cover {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		height: 100%;
		min-height: 0;
	}
	.menu_box {
		-webkit-box-flex: 1;
		-webkit-flex: 1 1 auto;
		-ms-flex: 1 1 auto;
		flex: 1 1 auto;
		.menu_list {
			padding: 25px 12px 0;
			li {
				.item {
					position: relative;
					display: block;
					padding: 5px 10px 4px;
					&:hover {
						background-color: $background-color_2;
					}
					.item_txt {
						color: $color_4;
					}
				}
			}
			li+li {
				margin-top: 8px;
			}
			li.selected {
				.item {
					background-color: $background-color_3;
					border-radius: 2px;
					.item_txt {
						color: $color_5;
						font-weight: 700;
					}
				}
			}
		}
	}
	.footer {
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 auto;
		-ms-flex: 0 0 auto;
		flex: 0 0 auto;
		padding: 12px;
		.campaign_code {
			position: relative;
			padding: 0 83px 19px 0;
			.slogan {
				font-size: 13px;
				line-height: 20px;
				letter-spacing: -.28px;
				color: $color_1;
			}
			.link {
				display: inline-block;
				margin-top: 5px;
				font-size: 12px;
				color: $color_6;
				text-decoration: none;
			}
		}
	}
}
.lnb~.container {
	left: 251px;
}
.lw_btn {
	font-size: 14px;
	display: inline-block;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	height: 36px;
	border-radius: 2px;
	line-height: 21px;
	text-decoration: none;
	vertical-align: middle;
	white-space: nowrap;
	padding: 6px 12px 7px;
	cursor: pointer;
	min-width: 49px;
	border: 1px solid #c5c5c6;
	background: #fff;
	color: $color_1;
	&:hover {
		background-color: $background-color_4;
	}
	&:disabled {
		cursor: default;
		opacity: .4;
		&:hover {
			background-color: $background-color_6;
		}
	}
}
.lw_btn.active {
	color: $color_5;
}
.lw_btn.hover {
	background-color: $background-color_4;
}
.lw_btn.on {
	background-color: $background-color_5;
}
.lw_btn.disabled {
	cursor: default;
	opacity: .4;
	&:hover {
		background-color: $background-color_6;
	}
}
.lw_btn_28 {
	font-size: 12px;
	display: inline-block;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	height: 28px;
	border-radius: 2px;
	line-height: 17px;
	text-decoration: none;
	vertical-align: middle;
	white-space: nowrap;
	padding: 4px 12px 5px;
	cursor: pointer;
	min-width: 48px;
	border: 1px solid #c5c5c6;
	background: #fff;
	color: $color_1;
	&:hover {
		background-color: $background-color_4;
	}
	&:disabled {
		cursor: default;
		opacity: .4;
		&:hover {
			background-color: $background-color_6;
		}
	}
}
.lw_btn_28.active {
	color: $color_5;
}
.lw_btn_28.hover {
	background-color: $background-color_4;
}
.lw_btn_28.on {
	background-color: $background-color_5;
}
.lw_btn_28.disabled {
	cursor: default;
	opacity: .4;
	&:hover {
		background-color: $background-color_6;
	}
}
.lw_btn_32 {
	font-size: 12px;
	display: inline-block;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	height: 32px;
	border-radius: 2px;
	line-height: 17px;
	text-decoration: none;
	vertical-align: middle;
	white-space: nowrap;
	padding: 6px 8px 7px;
	cursor: pointer;
	min-width: 48px;
	border: 1px solid #c5c5c6;
	background: #fff;
	color: $color_1;
	&:hover {
		background-color: $background-color_4;
	}
	&:disabled {
		cursor: default;
		opacity: .4;
		&:hover {
			background-color: $background-color_6;
		}
	}
}
.lw_btn_32.active {
	color: $color_5;
}
.lw_btn_32.hover {
	background-color: $background-color_4;
}
.lw_btn_32.on {
	background-color: $background-color_5;
}
.lw_btn_32.disabled {
	cursor: default;
	opacity: .4;
	&:hover {
		background-color: $background-color_6;
	}
}
.lw_btn_34 {
	font-size: 14px;
	display: inline-block;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	height: 34px;
	border-radius: 2px;
	line-height: 20px;
	text-decoration: none;
	vertical-align: middle;
	white-space: nowrap;
	padding: 6px 12px 6px;
	cursor: pointer;
	min-width: 49px;
	border: 1px solid #c5c5c6;
	background: #fff;
	color: $color_1;
	&:hover {
		background-color: $background-color_4;
	}
	&:disabled {
		cursor: default;
		opacity: .4;
		&:hover {
			background-color: $background-color_6;
		}
	}
}
.lw_btn_34.active {
	color: $color_5;
}
.lw_btn_34.hover {
	background-color: $background-color_4;
}
.lw_btn_34.on {
	background-color: $background-color_5;
}
.lw_btn_34.disabled {
	cursor: default;
	opacity: .4;
	&:hover {
		background-color: $background-color_6;
	}
}
.lw_btn_40 {
	font-size: 14px;
	display: inline-block;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	height: 40px;
	border-radius: 2px;
	line-height: 21px;
	text-decoration: none;
	vertical-align: middle;
	white-space: nowrap;
	padding: 8px 12px 9px;
	cursor: pointer;
	min-width: 49px;
	border: 1px solid #c5c5c6;
	background: #fff;
	color: $color_1;
	&:hover {
		background-color: $background-color_4;
	}
	&:disabled {
		cursor: default;
		opacity: .4;
		&:hover {
			background-color: $background-color_6;
		}
	}
}
.lw_btn_40.active {
	color: $color_5;
}
.lw_btn_40.hover {
	background-color: $background-color_4;
}
.lw_btn_40.on {
	background-color: $background-color_5;
}
.lw_btn_40.disabled {
	cursor: default;
	opacity: .4;
	&:hover {
		background-color: $background-color_6;
	}
}
// {
	form {
		.profile_form_cover {
			.profile_form_header {
				display: -webkit-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				padding-bottom: 7px;
				border-bottom: 1px solid #eee;
			}
		}
	}
// }
.profile_form_cover {
	.profile_form_header.view_type {
		padding-bottom: 30px;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		.info_area {
			.name {
				margin-bottom: 0;
			}
			.en_name {
				display: block;
				margin-top: 5px;
				line-height: 20px;
			}
			.status {
				display: -webkit-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				margin-top: 15px;
				.text {
					-webkit-box-flex: 0;
					-webkit-flex: 0 0 auto;
					-ms-flex: 0 0 auto;
					flex: 0 0 auto;
					display: inline-block;
					margin-left: 20px;
				}
				strong {
					-webkit-box-flex: 0;
					-webkit-flex: 0 0 auto;
					-ms-flex: 0 0 auto;
					flex: 0 0 auto;
					display: inline-block;
				}
			}
		}
	}
	.profile_form_header {
    display: flex;
    padding-bottom: 7px;
    border-bottom: 1px solid #eee;
		.thumbnail_area {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 auto;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			position: relative;
			width: 100px;
			height: 100px;
			margin-right: 83px;
			.thumbnail {
				position: relative;
				height: 100%;
				border-radius: 50%;
				overflow: hidden;
				img {
					position: absolute;
					top: 50%;
					left: 50%;
					width: auto;
					height: 100%;
					-webkit-transform: translate(-50%,-50%);
					transform: translate(-50%,-50%);
				}
				&:after {
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					border: 1px solid rgba(0,0,0,.1);
					border-radius: 50%;
					content: "";
				}
				.initial_profile {
					em {
						font-size: 40px;
					}
				}
			}
			.task {
				position: absolute;
				right: 0;
				bottom: 0;
				.btn_edit {
					display: inline-block;
					vertical-align: top;
					border: 0;
					background-color: $background-color_7;
				}
				.ly_context {
					display: block;
					top: 100%;
					left: 0;
					width: 160px;
					margin-top: 4px;
				}
			}
		}
		.info_area {
			-webkit-box-flex: 1;
			-webkit-flex: 1 1 auto;
			-ms-flex: 1 1 auto;
			flex: 1 1 auto;
			h4.name {
				font-size: 18px;
				margin-bottom: 8px;
				font-weight: bold;
			}
			.field {
				display: -webkit-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				margin-bottom: 8px;
				.input_cover {
					-webkit-box-flex: 0;
					-webkit-flex: 0 0 auto;
					-ms-flex: 0 0 auto;
					flex: 0 0 auto;
					width: 200px;
				}
				.input_cover+.input_cover {
					-webkit-box-flex: 1;
					-webkit-flex: 1 1 auto;
					-ms-flex: 1 1 auto;
					flex: 1 1 auto;
					margin-left: 8px;
				}
			}
			strong.title {
				display: block;
				padding: 10px 0 6px;
			}
		}
	}
	.profile_form.view_type {
		.field {
			padding: 7px 0;
			border-bottom: 0;
		}
	}
	.profile_form {
		.field {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			padding: 16px 0;
			border-bottom: 1px solid #eee;
			strong.title {
				-webkit-box-flex: 0;
				-webkit-flex: 0 0 auto;
				-ms-flex: 0 0 auto;
				flex: 0 0 auto;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				display: inline-block;
				width: 183px;
				padding: 8px 20px 8px 0;
				line-height: 20px;
			}
			.at {
				display: inline-block;
				-webkit-box-flex: 0;
				-webkit-flex: 0 0 auto;
				-ms-flex: 0 0 auto;
				flex: 0 0 auto;
				-webkit-align-self: center;
				-ms-flex-item-align: center;
				align-self: center;
				margin-left: 8px;
				line-height: 1;
			}
			.box {
				-webkit-box-flex: 1;
				-webkit-flex: 1 1 auto;
				-ms-flex: 1 1 auto;
				flex: 1 1 auto;
				display: -webkit-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				-webkit-flex-wrap: wrap;
				-ms-flex-wrap: wrap;
				flex-wrap: wrap;
				.birth {
					-webkit-box-flex: 0;
					-webkit-flex: 0 0 auto;
					-ms-flex: 0 0 auto;
					flex: 0 0 auto;
					padding: 8px 0;
					display: inline-block;
				}
				.solar_lunar {
					-webkit-box-flex: 0;
					-webkit-flex: 0 0 auto;
					-ms-flex: 0 0 auto;
					flex: 0 0 auto;
					padding: 8px 0;
					display: inline-block;
				}
				.text_box {
					display: -webkit-box;
					display: -webkit-flex;
					display: -ms-flexbox;
					display: flex;
					width: 100%;
				}
				.text_box+.text_box {
					margin-top: 10px;
				}
				.team_box {
					-webkit-box-flex: 1;
					-webkit-flex: 1 1 auto;
					-ms-flex: 1 1 auto;
					flex: 1 1 auto;
					width: 100%;
					padding: 8px 0;
					.team+.position {
						&:before {
							display: inline-block;
							width: 1px;
							height: 14px;
							margin: 4px 6px 0;
							background-color: $background-color_8;
							vertical-align: top;
							content: "";
						}
					}
				}
				.team_box~.team_box {
					margin-top: 8px;
				}
				.social_box {
					-webkit-box-flex: 1;
					-webkit-flex: 1 1 auto;
					-ms-flex: 1 1 auto;
					flex: 1 1 auto;
					width: 100%;
					padding: 8px 0;
					.service+.account {
						&:before {
							display: inline-block;
							width: 1px;
							height: 14px;
							margin: 4px 6px 0;
							background-color: $background-color_8;
							vertical-align: top;
							content: "";
						}
					}
				}
				.text {
					padding: 8px 0;
					-webkit-box-flex: 1;
					-webkit-flex: 1 1 auto;
					-ms-flex: 1 1 auto;
					flex: 1 1 auto;
					display: block;
					width: 100%;
					line-height: 20px;
				}
				.text+.text {
					padding-top: 0;
				}
				.text.half {
					-webkit-box-flex: 0;
					-webkit-flex: 0 0 auto;
					-ms-flex: 0 0 auto;
					flex: 0 0 auto;
					width: 200px;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					max-width: 100%;
					word-wrap: normal;
				}
				.text.half~.half {
					margin-left: 20px;
					padding-top: 8px;
					-webkit-box-flex: 1;
					-webkit-flex: 1 1 auto;
					-ms-flex: 1 1 auto;
					flex: 1 1 auto;
				}
				.select_cover {
					-webkit-box-flex: 0;
					-webkit-flex: 0 0 auto;
					-ms-flex: 0 0 auto;
					flex: 0 0 auto;
					width: 200px;
					img {
						display: inline-block;
						margin: 4px 12px 0 0;
						vertical-align: top;
					}
					.ly_context {
						img {
							-webkit-box-flex: 0;
							-webkit-flex: 0 0 auto;
							-ms-flex: 0 0 auto;
							flex: 0 0 auto;
						}
						.text {
							padding: 0;
							line-height: 21px;
						}
					}
				}
				.select_cover~.input_cover {
					-webkit-box-flex: 1;
					-webkit-flex: 1 1 auto;
					-ms-flex: 1 1 auto;
					flex: 1 1 auto;
					width: 1px;
					margin-left: 8px;
				}
				.radio_cover {
					-webkit-box-flex: 0;
					-webkit-flex: 0 0 auto;
					-ms-flex: 0 0 auto;
					flex: 0 0 auto;
				}
				.radio_cover+.radio_cover {
					margin-left: 16px;
				}
				.radio_cover~.input_cover {
					margin-top: 8px;
				}
				.input_cover {
					position: relative;
					-webkit-box-flex: 1;
					-webkit-flex: 1 1 auto;
					-ms-flex: 1 1 auto;
					flex: 1 1 auto;
					width: 100%;
					.ly_calendar {
						top: 100%;
						left: 0;
						margin-top: 4px;
					}
				}
				.input_cover.fixed {
					-webkit-box-flex: 0;
					-webkit-flex: 0 0 auto;
					-ms-flex: 0 0 auto;
					flex: 0 0 auto;
					width: 200px;
				}
				.input_cover~.input_cover {
					width: 1px;
					margin-left: 8px;
				}
				.input_cover.has_country_code {
					display: -webkit-box;
					display: -webkit-flex;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-align: center;
					-webkit-align-items: center;
					-ms-flex-align: center;
					align-items: center;
					border: 1px solid #ddd;
					padding-left: 8px;
					.country_code {
						-webkit-box-flex: 0;
						-webkit-flex: 0 0 auto;
						-ms-flex: 0 0 auto;
						flex: 0 0 auto;
						display: inline-block;
						padding-left: 4px;
					}
					input[type=text] {
						-webkit-box-flex: 1;
						-webkit-flex: 1 1 auto;
						-ms-flex: 1 1 auto;
						flex: 1 1 auto;
						height: 34px;
						padding: 7px 12px 7px 4px;
						line-height: 20px;
						border: 0;
					}
				}
				.input_cover.has_country_code.focus {
					border-color: $border-color_1;
				}
				.contact_box {
					-webkit-box-sizing: border-box;
					box-sizing: border-box;
					position: relative;
					-webkit-box-flex: 0;
					-webkit-flex: 0 0 auto;
					-ms-flex: 0 0 auto;
					flex: 0 0 auto;
					display: -webkit-box;
					display: -webkit-flex;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-align: center;
					-webkit-align-items: center;
					-ms-flex-align: center;
					align-items: center;
					width: 100%;
					padding-right: 60px;
					.input_cover.fixed+.search_member {
						-webkit-box-flex: 1;
						-webkit-flex: 1 1 auto;
						-ms-flex: 1 1 auto;
						flex: 1 1 auto;
						width: 1px;
						margin-left: 8px;
					}
					.btn_add_field {
						position: absolute;
						top: 50%;
						right: 0;
						line-height: 20px;
						-webkit-transform: translateY(-50%);
						transform: translateY(-50%);
						border: 0;
						background-color: $background-color_7;
					}
				}
				.contact_box~.contact_box {
					margin-top: 8px;
				}
			}
		}
	}
}
.initial_profile {
	display: block;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	overflow: hidden;
	em {
		display: block;
		width: 100%;
		font-size: 20px;
		font-style: normal;
		color: $color_3;
		line-height: 1.5;
		text-align: center;
		text-transform: uppercase;
	}
}

</style>
