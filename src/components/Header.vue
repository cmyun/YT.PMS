<template>
    <header id="header">
        <div class="logoArea">
            <div class="toggleBtn">
                <button type="button">
                    <img src="../assets/btn_toggle.svg" alt="">
                </button>
            </div>
            <h1 id="logo">
                <img src="../assets/logo.svg" alt="">
            </h1>
        </div>
        
        <div class="menuArea">
            <ul class="menuList">
                <li>
                    <router-link to="/" data-title="Board" >
                        <span>
                        <img src="../assets/icon_board.svg" alt="">
                            
                        </span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/message" data-title="Message">
                        <span>
                            <img src="../assets/icon_message.svg" alt="">
                        </span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/calendar" data-title="Calendar">
                        <span>
                            <img src="../assets/icon_calendar.svg" alt="">
                        </span>
                    </router-link>
                </li>
                <li class="active">
                    <router-link to="/contact" data-title="Contacts">
                        <span>
                            <img src="../assets/icon_contact.svg" alt="" class="iconNormal">
                            <img src="../assets/icon_contact_w.svg" alt="" class="iconActive">
                        </span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/task" data-title="Task">
                        <span>
                            <img src="../assets/icon_task.svg" alt="">
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
        <div class="loginArea">
            <div class="userProfile">
                <button type="button" class="btnProfile" @click="toggleNav()">{{ getUsername() }}</button>
            </div>
            <div class="userNav" :class="{active: navActive}" >
                <div class="userInfo">
                    <p class="profile">{{ getUsername() }}</p>
                    <div class="infor">
                        {{ user.name }}
                    </div>
                </div>
                <ul>
                    <li>
                        <router-link to="settings">
                            My Information
                        </router-link>
                    </li>
                    <li v-show="user.isAdmin">
                        <router-link to="/member">
                            Member
                        </router-link>
                    </li>
                    <li v-show="user.isAdmin">
                        <router-link to="/organization">
                            Organization
                        </router-link>
                    </li>
                    <li v-show="user.isAdmin">
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
  data() {
    return {
        navActive: false
    }
  },
  computed: {
    ...mapState('account', ['status']),
    ...mapState('account', ['user'])
  },
  methods: {
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
  },
  mounted(){
    
    }
};
</script>


<style scoped lang="scss" >
#header {
    background-color: #07B53B;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}
.menuList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
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
            -webkit-transform: translate(-50%, 0);
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
        &:hover {
            img.iconNormal {
                opacity: .45;
            }
        }
        .iconActive {
            opacity: 0;
        }
        .iconNormal {
            opacity: 1;
        }
        &.active {
            img {
                opacity: 1;
            }
            .iconActive {
                opacity: 1;
            }
            .iconNormal {
                opacity: 0;
            }
        }
        &:not(.active) {
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
.btnProfile {
    display: block;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: rgb(139, 203, 153);
    font-size: 20px !important;
    color: #fff;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
    border: none;
}
.toggleBtn {
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
.userNav {
    position: absolute;
    top: 54px;
    right: 8px;
    width: 300px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #989898;
    display: none;
    z-index: 1000;
    &.active {
        display: block;
    }
}
.loginArea {
    position: relative;
}
.userInfo {
    display: flex;
    padding: 20px;
    border-bottom: 1px solid #e5e5e6;
    margin-bottom: 20px;
    .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #8BCB99;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden;
        font-size: 20px !important;
        color: #fff;
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
    }
}
.userNav {
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
</style>
