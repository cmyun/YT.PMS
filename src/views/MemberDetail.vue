<template>
  <div class="contact sub_page wrap">
    <Header
      :title="'Admin'"
    />
    <Sidebar/>
    <div id="container">
      <div id="content" class="contents sub">
        <div class="contentsHead contents_head">
          <h3 class="title"><span class="txt">Member Information</span></h3>
          <div class="taskArea">
            <div class="btnGroup">
              <button type="button" class="btn_save" @click="openModal">Edit member information</button>
            </div>
          </div>
        </div>
        <div class="contentsBody contents_body dashboard">
          <div class="fm_members">
            <div class="member">
              <div class="thumb">
                <span class="thmb_area">
                  <img src="../assets/img_profile.png" alt="">
                </span>
              </div>
              <div class="infor">
                <div class="name">
                  <strong>{{ member.name }}</strong>
                </div>
                <div class="box">
                  <span class="position">Management</span>
                  <span class="email">{{ member.nickname }}</span>
                  <div class="status">
                    <p class="pont">{{ member.status }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="body">
              <div class="field">
                <i class="hd">Original company &amp; affiliation</i>
                <ul class="list">
                  <li class="box">
                    <em class="h_li">Company</em>
                    <span class="txt">{{ member.company }}</span>
                  </li>
                  <li class="box">
                    <em class="h_li">Organization/ position</em>
                    <ul class="txt_box">{{ member.organization?member.organization:'' + '/ ' + member.position?member.position:'' }}</ul>
                  </li>
                  <li class="box">
                    <em class="h_li">Employment type</em>
                    <spa class="txt">{{ member.type }}</spa>
                  </li>
                  <li class="box">
                    <em class="h_li">Level</em>
                    <span class="txt">{{ member.level }}</span>
                  </li>
                  <li class="box">
                    <em class="h_li">Extension</em>
                  </li>
                  <li class="box">
                    <em class="h_li">Mobile phone</em>
                    <ul class="txt_box">{{ member.mobile }}</ul>
                  </li>
                  <li class="box">
                    <em class="h_li">ID</em>
                    <span class="txt">{{ member.nickname }}</span>
                  </li>
                  <li class="box">
                    <em class="h_li">Personal Email</em>
                    <a :href="`mailto:${member.email}`" class="link">{{ member.email }}</a>
                  </li>
                </ul>
              </div>
              <div class="field minor">
                <i class="hd"></i>
                <ul class="list">
                  <li class="box">
                    <em class="h_li"></em>
                    <span class="txt"></span>
                  </li>
                  <li class="box">
                    <em class="h_li"></em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-edit-form :title="'title'" 
      :visible="visible" 
      @close="closeModal" 
      @submit="submitForm" 
      :data="member">
    </modal-edit-form>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import ModalEditForm from '@/components/ModalEditForm.vue';
import { mapState, mapActions } from 'vuex'
export default {
  name: "MemberDetail",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      visible: false
    }
  },
  components: {
    Header,
    Sidebar,
    ModalEditForm
  },
  computed: {
    ...mapState('member', ['member']),
    ...mapState('positions', ['positions']),

    newOrganizations(){
      const tree = this.buildTree(this.organizations, -1, 0);
      return tree;
    },
  },
  created() {
    this.getMemberInfo(this.id);
    this.getPositions();
    
  },
  methods: {
    ...mapActions('member', ['getMemberInfo']),
    ...mapActions('positions', ['getPositions']),
    ...mapActions('member', ['updateUser']),
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    submitForm(data){
      this.updateUser(data);
      this.closeModal()
    }
  }
}
</script>
<style lang="scss" scoped>
$color_1: #222;
$color_2: #767676;
$color_3: #999;
$color_4: #157efb;
$color_5: #fd472b;
$background-color_1: #f2f2f2;
$background-color_2: #fff;

ul {
	padding-left: 0;
}
.contents.member {
	.dashboard.contentsBody {
		padding: 16px;
	}
}
.dashboard {
	.fm_members {
		margin-bottom: 0;
		padding-bottom: 20px;
		border-bottom: 1px solid #e5e5e6;
		text-align: left;
	}
	.fm_members.minimize {
		.body {
			.minor {
				display: none;
			}
		}
	}
	.member {
		.thumb {
			position: relative;
			float: left;
			width: 80px;
			height: 80px;
			z-index: 20;
			margin-right: 20px;
			img {
				width: 100%;
				height: 100%;
				display: block;
				border-radius: 50px;
			}
			.thmb_area {
				&:after {
					content: "";
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					border: 1px solid rgba(0,0,0,.1);
					border-radius: 50px;
					z-index: 1;
				}
			}
			.f_pic {
				position: absolute;
				right: -4px;
				bottom: -4px;
				z-index: 10;
				width: 28px;
				height: 28px;
				a {
					display: block;
					width: 100%;
					height: 100%;
					box-sizing: border-box;
					background: #fff;
					border: 1px solid #c5c5c6;
					border-radius: 50%;
					font-size: 0;
					line-height: 0;
				}
			}
		}
		.infor {
			color: $color_1;
			overflow: hidden;
			padding-top: 3px;
			word-wrap: break-word;
			overflow-wrap: break-word;
			.name {
				font-size: 16px;
				strong {
					font-size: 20px;
				}
			}
			.name.lang {
				margin: -2px 0 2px;
				vertical-align: baseline;
			}
			.name.lang~.lang {
				margin-left: 6px;
				&:before {
					content: "/";
					padding-right: 6px;
				}
			}
			.name.ruby {
				display: block;
				font-size: 14px;
				color: $color_2;
				line-height: 21px;
			}
			.email {
				display: block;
				color: $color_3;
			}
			.position {
				display: block;
				color: $color_3;
			}
			.team {
				display: block;
				color: $color_3;
			}
			.status {
				margin-top: 6px;
				font-size: 14px;
				p {
					display: inline-block;
					vertical-align: middle;
				}
				p+p {
					margin-left: 8px;
				}
				.date {
					padding-left: 10px;
				}
				.point {
					color: $color_4;
					vertical-align: top;
				}
				.alert {
					color: $color_5;
				}
			}
		}
		.name_box {
			font-weight: 700;
			span {
				margin-left: 6px;
			}
			i {
				display: inline-block;
				margin: -3px 6px 0 0;
				font-size: 0;
				line-height: 0;
				vertical-align: middle;
			}
		}
		&:after {
			content: "";
			display: block;
			height: 0;
			clear: both;
		}
	}
	.field {
		em {
			font-style: normal;
		}
		i {
			font-style: normal;
		}
		a.link {
			color: $color_4;
			text-decoration: underline;
			word-break: break-all;
		}
		.hd {
			display: block;
			margin-top: 20px;
			padding-top: 22px;
			border-top: 1px solid #eee;
			font-size: 12px;
			color: $color_2;
		}
		.list {
			&:after {
				content: "";
				display: block;
				height: 0;
				clear: both;
			}
			.box {
				display: flex;
				margin: 12px 0 0;
				.h_li {
					flex: 0 0 auto;
					box-sizing: border-box;
					display: block;
					width: 135px;
					margin-right: 10px;
				}
				.txt {
					display: block;
					flex: 0 1 auto;
					min-width: 0;
					word-wrap: break-word;
					word-break: break-all;
				}
				.txt_box {
					display: block;
					flex: 0 1 auto;
					min-width: 0;
					word-wrap: break-word;
					word-break: break-all;
					strong {
						margin-right: 6px;
					}
					li+li {
						margin-top: 8px;
					}
				}
			}
			.flexbox {
				display: block;
				flex: 1 1 auto;
				min-width: 0;
				word-break: break-all;
				.sns_id {
					word-wrap: break-word;
					word-break: break-all;
					font-weight: 400;
				}
				strong {
					word-wrap: break-word;
					word-break: break-all;
					font-weight: 400;
				}
				a.link {
					flex: 0 1 auto;
					word-wrap: break-word;
					word-break: break-all;
				}
				span {
					flex: 0 1 auto;
					word-wrap: break-word;
					word-break: break-all;
				}
				.title {
					flex: 0 0 auto;
				}
			}
		}
		.list+.list {
			border-top: 1px solid #f6f6f6;
			margin-top: 20px;
			padding-top: 2px;
		}
	}
	button.opt_toggle {
		font-size: 14px;
		display: inline-block;
		box-sizing: border-box;
		height: 34px;
		border-radius: 2px;
		line-height: 20px;
		text-decoration: none;
		vertical-align: middle;
		white-space: nowrap;
		padding: 7px 12px 7px;
		cursor: pointer;
		min-width: 54px;
		border: 0;
		background: transparent;
		color: $color_1;
		display: block;
		width: 100%;
		margin: 16px 0 0;
		padding: 0;
		color: $color_4;
		text-align: center;
		&:hover {
			background-color: $background-color_1;
		}
		&:disabled {
			cursor: default;
			opacity: .4;
			&:hover {
				background-color: $background-color_2;
			}
		}
		&:after {
			content: "";
			background-position: -420px -964px;
			margin: -2px 0 0 6px;
		}
	}
	button.opt_toggle.hover {
		background-color: $background-color_1;
	}
	button.opt_toggle.on {
		background-color: $background-color_1;
	}
	button.opt_toggle.disabled {
		cursor: default;
		opacity: .4;
		&:hover {
			background-color: $background-color_2;
		}
	}
	button.opt_toggle.fold {
		&:after {
			background-position: -948px -937px;
		}
	}
}
@media screen and (min-width: 768px) {
	.dashboard {
		padding: 0;
		.fm_members {
			margin-bottom: 40px;
			padding: 24px 0 17px;
			border-top: 1px solid #a9a9a9;
			.body {
				margin-left: 120px;
			}
		}
		.member {
			.thumb {
				margin-top: 3px;
				width: 96px;
				height: 96px;
				margin: 0 24px 0 0;
			}
			.infor {
				.name {
					line-height: 27px;
					display: inline;
					strong {
						font-size: 22px;
					}
				}
				.name.lang {
					margin: 0 0 0 12px;
				}
				.name.nickname {
					&:before {
						content: "/";
						margin-right: 4px;
						padding-left: 4px;
					}
				}
				.box {
					clear: both;
					font-size: 14px;
				}
				.email {
					display: inline-block;
				}
				.position {
					display: inline-block;
				}
				.team {
					display: inline-block;
				}
				span+span {
					&:before {
						content: "/ ";
						padding-left: 3px;
					}
				}
				.discipline {
					&:before {
						content: normal;
					}
				}
			}
		}
		.field {
			.list {
				.box {
					.h_li {
						width: 116px;
					}
					display: inline-flex;
					width: 50%;
					margin-right: -3px;
					box-sizing: border-box;
					padding-right: 24px;
				}
				display: table;
				width: 100%;
				table-layout: fixed;
			}
		}
	}
}
@media screen and (max-width: 767px) {
	.dashboard {
		.member {
			.infor {
				padding-top: 0;
				position: relative;
				top: -4px;
			}
		}
	}
}
@media screen and (min-width: 768px){
.sub_page .contents.sub {
    width: 100%;
    min-width: 1000px;
    max-width: 1250px;
    height: 100%;
    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;
}}
.sub_page .contents.sub {
    display: block;
}
</style>
