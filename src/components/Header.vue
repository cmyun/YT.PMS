<template>
  <header id="header">
    <div class="logoArea">
      <div class="toggle_lnb">
        <button type="button">
          <img src="../assets/btn_toggle.svg" alt="">
        </button>
      </div>
      <h1 id="logo">
        {{ title }}
      </h1>
    </div>
    <div class="gnb_list_box">
      <ul>
        <li>
          <router-link to="/" data-title="Board" >
            <span>
              <img src="../assets/icon_board.svg" alt="" class="icon_nm">
              <img src="../assets/icon_board_w.svg" alt="" class="icon_active">
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/message" data-title="Message">
            <span>
              <img src="../assets/icon_message.svg" alt="" class="icon_nm">
              <img src="../assets/icon_message_w.svg" alt="" class="icon_active">
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/calendar" data-title="Calendar">
            <span>
              <img src="../assets/icon_calendar.svg" alt="" class="icon_nm">
              <img src="../assets/icon_calendar_w.svg" alt="" class="icon_active">
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/member" data-title="Contacts">
            <span>
              <img src="../assets/icon_contact.svg" alt="" class="icon_nm">
              <img src="../assets/icon_contact_w.svg" alt="" class="icon_active">
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/tasks" data-title="Task">
            <span>
              <img src="../assets/icon_task.svg" alt="" class="icon_nm">
              <img src="../assets/icon_task_w.svg" alt="" class="icon_active">
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/form" data-title="Form">
            <span>
              <img src="../assets/icon_form.svg" alt="">
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="login_area">
      <div class="user_profile">
        <button type="button" class="user_profile" ref="user_profile" @click="toggleNav()">{{ getUsername() }}</button>
      </div>
      <div class="gnb_user" :class="{active: navActive}" ref="gnb_user">
        <div class="user_info">
          <p class="profile">{{ getUsername() }}</p>
          <div class="infor">
            <p class="user">{{ member.name }}</p>
            <p class="work">
              <span>{{ member.level + ' / ' + member.position }}</span>
              <span>{{ member.organization }}</span>
            </p>
          </div>
        </div>
        <ul>
          <li>
            <router-link to="/settings">
              My Information
            </router-link>
          </li>
          <li v-show="member.isAdmin">
            <router-link to="/member">
              Member
            </router-link>
          </li>
          <li v-show="member.isAdmin">
            <router-link to="/organization">
              Organization
            </router-link>
          </li>
          <li v-show="member.isAdmin">
            <router-link to="/group">
              Group
            </router-link>
          </li>
          <li>
            <button type="button" @click="handleLogout">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "HeaderView",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      navActive: false
    }
  },
  computed: {
    ...mapState('account', ['status']),
    ...mapState('account', ['user']),
    ...mapState('member', ['member'])
  },
  created() {
    if(this.user){
      this.getMemberInfo(this.user.id);
    }
  },
  methods: {
    ...mapActions('member', ['getMemberInfo']),
    getUsername(){
      return Array.from(this.user.name)[0];
    },
    ...mapActions({
      logout: 'account/logout'
    }),
    handleLogout () {
      this.logout();
      location.reload(true);
    },
    toggleNav(){
      this.navActive = !this.navActive;
    },
    handleOutsideClick(event){
      const gnb_user = this.$refs.gnb_user;
      const user_profile = this.$refs.user_profile;
      if (gnb_user && !gnb_user.contains(event.target) && user_profile && !user_profile.contains(event.target)) {
        this.navActive = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
};
</script>


<style scoped lang="scss" >
#header {
  background-color: rgb(41,50,99);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
#logo {
  font-size: 24px;
  color: #FFF;
  margin-bottom: 0;
}
.gnb_list_box ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  padding-left: 0;
  a {
    display: block;
    width: 100%;
    height: 100%;
    transition: all .3s;
    &:hover:before {
      content: attr(data-title);
      position: absolute;
      left: 50%;
      top: 100%;
      margin-top: 15px;
      color: #fff;
      font-size: 12px;
      line-height: 19px;
      padding: 1px 8px 2px;
      border-radius: 2px;
      background-color: rgba(0, 0, 0, 0.6);
      white-space: nowrap;
      -ms-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
      margin-left: 1px;
    }
  }
  span {
    display: block;
  }
  li {
    margin: 0 5px;
    position: relative;
    width: 33px;
    height: 33px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity .3s;
    }
    a:hover {
      img.icon_nm {
        opacity: .45;
      }
    }
    .icon_active {
      opacity: 0;
    }
    .icon_nm {
      opacity: 1;
    }
    .active {
      img {
        opacity: 1;
      }
      .icon_active {
        opacity: 1;
      }
      .icon_nm {
        opacity: 0;
      }
    }
    a:not(.active) {
      span {
        opacity: .35;
        &:hover {
          opacity: .45;
        }
      }
    }
  }
}
.logoArea {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
}
.user_profile {
  display: block;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: rgb(235, 235, 245);
  font-size: 20px !important;
  color: #000;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  border: none;
}
.toggle_lnb {
  width: 32px;
  height: 32px;
  margin-right: 25px;
  button {
    width: 100%;
    height: 100%;
    border: #07B53B;
    background: transparent;
    border-radius: 50%;
    padding: 0;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  } 
}
.gnb_user {
  position: absolute;
  top: 54px;
  right: 8px;
  width: 300px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #989898;
  display: none;
  z-index: 1000;
  &.active {
    display: block;
  }
}
.login_area {
  position: relative;
}
.user_info {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #e5e5e6;
  margin-bottom: 20px;
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(235, 235, 245);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 20px !important;
    color: #000;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
    margin-right: 15px;
    margin-bottom: 0;
  }
  .infor {
    font-size: 14px;
    line-height: 1.5;
    word-break: break-all;
    color: #222;
    font-weight: bold;
    text-align: left;
    font-weight: normal;
  }
  .work {
    margin-bottom: 0;
    color: #787878;
  }
}
.gnb_user {
  ul {
    text-align: left;
    padding-left: 0;
  }
  button,
  a {
    display: block;
    padding: 6px 11px 5px;
    font-size: 14px;
    color: #222;
    line-height: 1.5;
    text-decoration: none;
  }
  button {
    border: none;
    background-color: transparent;
  }
}
.user {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
