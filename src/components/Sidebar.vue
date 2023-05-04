<template>
    <div id="sidebar">
        <div class="sidebarCover">
            <div class="menuBox">
                <ul class="menuList">
                    <li>
                        <router-link to="member" class="item">
                            <span class="icon iconMember"></span>
                            <span class="itemTxt">Member</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="organization" class="item">
                            <span class="icon iconOrganization"></span>
                            <span class="itemTxt">Organization</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="group" class="item">
                            <span class="icon iconGroup"></span>
                            <span class="itemTxt">Group</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "SidebarView",
  data() {
    return {
        
    }
  }
}
</script>
<style scoped lang="scss">
#sidebar {
    width: 250px;
    box-sizing: border-box;
    width: 250px;
    background-color: #fff;
    border-right: 1px solid #c5c5c7;
}
.menuList {
    
    text-align-last: left;
    margin-bottom: 0;
    padding: 25px 12px 0;
    a {
        display: flex;
        padding: 5px 10px 4px;
        font-size: 14px;
        color: #222;
        line-height: 1.5;
        text-decoration: none;
        &.active {
            font-weight: bold;
            color: #157efb;
            background-color: rgba(21,126,251,.1);
            border-radius: 2px;
            .iconMember {
                background-image: url(../assets/icon_member_active.svg) ;
            }
            .iconOrganization {
                background-image: url(../assets/icon_organization_active.svg);
            }
            .iconGroup {
                background-image: url(../assets/icon_group_active.svg);
            }
        }
        
    }
    li + li {
        margin-top: 8px;
    }
    .icon {
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }
    .iconMember {
        background: url(../assets/icon_member.svg) no-repeat 0 0;
        background-size: 100% auto;
    }
    .iconOrganization {
        background: url(../assets/icon_organization.svg) no-repeat 0 0;
        background-size: 100% auto;
    }
    .iconGroup {
        background: url(../assets/icon_group.svg) no-repeat 0 0;
        background-size: 100% auto;
    }
    
}
</style>