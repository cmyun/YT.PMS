
<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-body">
      <div id="modal-root">
        <div class="ly_wrap dimmed en_US ua_win">
          <div class="ly_common ly_page ly_member_detail freeplan">
            <h3 class="tit">Group info</h3>
            <div class="btn_box full">
              <button type="button" class="lw_btn_point" @click="openEditGroup">Modify</button>
              <button type="button" class="lw_btn_text" @click="openGroupMasterModal(group.id)">Change master</button>
            </div>
            <div class="scroller">
              <div class="member main">
                <div class="thumb">
                  <span class="thmb_area">
                    <img src="../assets/img_group.png" alt="thumbnail">
                  </span>
                </div>
                <div class="infor">
                  <div class="name_box">
                    <h4 class="name">{{ group.name }}</h4>
                  </div>
                  <p class="caption">1</p>
                  <button type="button">
                    <em>Delete group</em>
                  </button>
                </div>
              </div>
              <div class="tab_menu">
                <span class="menu" 
                v-bind:class="{ selected: activeTab === 'tab1' }"
                @click="activeTab = 'tab1'"
                >
                  <a href="#" class="txt">Group info</a>
                </span>
                <span class="menu"
                v-bind:class="{ selected: activeTab === 'tab2' }"
                @click="activeTab = 'tab2'"
                >
                  <a class="txt" href="#">Members ({{ groupMembers.length }})</a>
                </span>
              </div>
              <div class="tab_cont" v-show="activeTab === 'tab1'">
                <div class="detail_item">
                  <i class="hd">Group name</i>
                  <p>
                    <strong>{{ group.name }}</strong>
                  </p>
                </div>
                <div class="detail_item">
                  <i class="hd">Description</i>
                  <p>{{ group.description }}</p>
                </div>
                
              </div>
              <div class="tab_cont" v-show="activeTab === 'tab2'">
                <ul class="member_list">
                  <li class="has_thmb" v-for="member in groupMembers" :key="member">
                    <div class="thumb">
                      <span class="thmb_area">
                        <img src="../assets/img_profile.png" alt="">
                      </span>
                    </div>
                    <div class="infor" style="cursor: pointer;">
                      <div class="name_box">
                        <strong class="name">{{ member.userName }}</strong>
                      </div>
                      <div class="txt">
                        <span class="email">{{ member.position + '/ ' + member.level }}</span>
                      </div>
                    </div>
                    <span class="master">{{ member.isMaster ? 'Master(s)' : '' }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" class="btn_close" @click="close">Close</button>
          </div>
        </div>
        <edit-group-modal :title="'title'" 
        :visible="visibleEdit" 
        @close="closeEditGroup" 
        @submit="submitEditGroup"
        >
        </edit-group-modal>
        <group-master-modal :title="'title'" 
          :visible="visibleMasterModal" 
          :groupMasters = "groupMasters"
          :selected = "groupMasters.map(obj => obj.id)"
          @close="closeGroupMasterModal" 
          @submit="handleSubmitMasters"
          >
        </group-master-modal>
        
      </div>
    </div>
  </div>
</template>
<script>
import EditGroupModal from '@/components/EditGroupModal.vue';
import GroupMasterModal from '@/components/GroupMasterModal.vue';
import {mapState, mapActions} from 'vuex';
export default {
  name: 'GroupDetailModal',
  props: {
    group: {
      type: Object,
      required: true
    },
    groupMembers: {
      type: Array,
      required: true
    },
    groupWhole: {
      type: Array,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    EditGroupModal,
    GroupMasterModal
  },
  computed: {
    ...mapState('group', ['groupMasters']),
  },
  data(){
    return {
      visibleEdit: false,
      activeTab: 'tab1',
      visibleMasterModal: false,
      // groupMasters: []
    }
  },
  methods: {
    ...mapActions('group', ['updateGroupMasters']),
    ...mapActions('group', ['getGroupMasters']),
    close() {
      this.$emit('close');
    },
    openEditGroup() {
      this.visibleEdit = true;
    },
    closeEditGroup(){
      this.visibleEdit = false;
    },
    openGroupMasterModal(id){
      this.getGroupMasters(id);
      this.visibleMasterModal = true;
      
    },
    closeGroupMasterModal(){
      this.visibleMasterModal = false;
    },
    handleSubmitMasters(selected){
      console.log(selected)
      this.updateGroupMasters(this.group.id,selected)
    }
  }
}
</script>

<style scope>
.modal-overlay {
  z-index: 9;
}
#modal-root {
  z-index: 10;
}
h4 {
  margin-bottom: 0;
}
p {
  margin-bottom: 0;
}
a {
  text-decoration: none !important;
}
.ly_common .btn_close:before {
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -967px -525px;
    width: 16px;
    height: 16px;
    display: inline-block;
    content: "";
}
.lw_btn_text {
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
    padding: 7px 12px 8px;
    cursor: pointer;
    min-width: 64px;
    border: 0;
    background: transparent;
    color: #222;
}
.lw_btn_text.hover, .lw_btn_text.on, .lw_btn_text:hover {
    background-color: #f2f2f2;
}
@media screen and (min-width: 768px) {
    .ly_member_detail .tab_cont {
        height:392px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: auto
    }
}

.ly_member_detail .member .caption {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    margin: 0 0 8px;
}

.ly_common {
    position: absolute;
    z-index: 50;
    display: inline-block;
    padding: 19px 23px 21px;
    border: 1px solid #989898;
    background-color: #fff;
    vertical-align: middle;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: normal;
    text-align: left;
    color: #222;
    word-wrap: break-word;
    border-radius: 2px;
}

.ly_wrap .ly_common {
    position: relative;
}

.ly_common .btn_box {
    padding-top: 24px;
    text-align: right;
}

.ly_common .btn_box:after {
    content: "";
    height: 0;
    overflow: hidden;
    clear: both;
    display: block;
}

.ly_common .btn_box .aside_btn {
    float: left;
}

.ly_common .btn_box button[class*=lwds_button] {
    min-width: 64px;
}

.ly_common .btn_close {
    border: 0;
    background-color: transparent;
    position: absolute;
    top: 21px;
    right: 19px;
    padding: 5px;
    font-size: 0;
    color: transparent;
    line-height: 0;
}

.ly_common .btn_close:before {
    background-size: 1013px 983px;
    background-position: -967px -525px;
    width: 16px;
    height: 16px;
    display: inline-block;
    content: "";
}

.ly_common .btn_close:hover:before {
    background-position: -967px -549px;
}

.ly_common .ico_alert,.ly_common .ico_confirm {
    display: block;
    margin: 4px 0 16px;
    font-size: 0;
    color: transparent;
    line-height: 0;
}

.ly_common .lw_pagination {
    display: block;
}

@media screen and (max-width: 767px) {
    .ly_common {
        width:100%;
        max-width: 400px;
    }
}

@media screen and (min-width: 768px) {
    .ly_common {
        width:400px;
    }
}

.ly_common h3.tit {
    display: block;
    padding-right: 24px;
    font-size: 18px;
}

.ly_common h3.tit .block {
    display: block;
    margin: 8px 0 20px;
}

.ly_common .ico_alert~h3.tit {
    padding-right: 0;
}

.ly_common .red {
    color: #fd472b;
}

.ly_common h3.desc {
    font-size: 18px;
    line-height: 24px;
    margin-top: 0;
}

.ly_common .desc,.ly_common .desc p+p {
    margin-top: 8px;
}

.ly_common .desc a {
    color: inherit;
}

.ly_common .desc a.point {
    color: #157efb;
}

.ly_common .cont {
    margin-top: 20px;
}

.ly_common .point {
    color: #157efb;
}

.ly_common .lw_note_list {
    margin: 8px 0 0;
}

.ly_common .fm {
    margin: 20px 0 0;
}

.ly_common .fm label {
    padding-left: 22px;
    text-indent: 0;
    max-width: 100%;
    word-wrap: break-word;
    word-break: normal;
}

.ly_common .fm label:before {
    top: 2px;
    -webkit-transform: translate(0);
    transform: translate(0);
}

.ly_common .fm .lw_toggle+label {
    padding-left: 1px;
}

.ly_common .fm .lw_toggle+label:before {
    top: 0;
}

.ly_common .fm em {
    color: #fd472b;
    font-style: normal;
}

.ly_common .fm_list {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 20px 0 0;
    padding: 6px 15px 14px;
    background: #fbfbfb;
    border: 1px solid #ddd;
    border-radius: 2px;
}

.ly_common .fm_list li {
    margin: 8px 0 0;
}

.ly_common .msg_box {
    margin-top: 20px;
    padding: 18px 19px;
    border: 1px solid #e5e5e6;
    border-radius: 2px;
    background-color: #fafafb;
    font-size: 14px;
    line-height: 20px;
    color: #222;
}

.ly_common .msg_box strong {
    font-weight: 400;
}

.ly_common .alert {
    color: #fd472b;
}

.ly_common .inp p.alert {
    margin-top: 10px;
}

.ly_common .desc~.alert_text {
    margin-top: 8px;
}

.ly_common .alert_text {
    color: #fd472b;
    position: relative;
    padding-left: 21px;
}

.ly_common .alert_text:before {
    content: "";
    background-size: 1013px 983px;
    background-position: -967px -477px;
    width: 16px;
    height: 16px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 3px;
}

.ly_common .check_contents {
    margin-top: 8px;
    border: 1px solid #ddd;
    background-color: #fbfbfb;
    padding: 15px 20px;
}

.ly_common .check_contents .check_cover {
    display: block;
}

.ly_common .check_contents .check_cover .lw_checkbox+label {
    padding-left: 22px;
    text-indent: 0;
}

.ly_common .check_contents .check_cover .lw_checkbox+label:before {
    top: 2px;
    -webkit-transform: none;
    transform: none;
}

.ly_common .agree_box {
    padding: 20px 0 0;
}

.ly_common .link {
    display: inline-block;
    color: #157efb;
}

@media screen and (max-width: 767px) {
    .ly_common.ly_fadein {
        -webkit-animation-duration:.6s;
        animation-duration: .6s;
        -webkit-animation-name: subpage-in;
        animation-name: subpage-in;
        left: 0;
    }

    @-webkit-keyframes subpage-in {
        0% {
            left: 100%;
            width: 100%;
        }

        to {
            left: 0;
        };
    }

    @keyframes subpage-in {
        0% {
            left: 100%;
            width: 100%;
        }

        to {
            left: 0;
        };
    }

    .ly_common.ly_fadeout {
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
        -webkit-animation-name: subpage-out;
        animation-name: subpage-out;
        left: 100%;
    }

    @-webkit-keyframes subpage-out {
        0% {
            left: 0;
        }

        to {
            left: 100%;
        };
    }

    @keyframes subpage-out {
        0% {
            left: 0;
        }

        to {
            left: 100%;
        };
    }
}

@media screen and (max-width: 767px) {
    .ly_common.ly_page {
        position:fixed;
        top: 0;
        right: 0;
        bottom: 0;
        max-width: none;
        padding: 0;
        border: 0;
        width: 100%;
        overflow: auto;
    }
}

.ly_common.ly_page .sub_header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    padding-bottom: 13px;
}

.ly_common.ly_page .sub_header .sub_title {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    margin: auto auto auto 0;
    padding-bottom: 0;
    vertical-align: middle;
}

.ly_common.ly_page .sub_header .task {
    margin: auto 0 auto auto;
}

.ly_common.ly_page .sub_header .link {
    margin-top: 4px;
    color: #157efb;
    margin-right: 10px;
}

@media screen and (min-width: 768px) {
    .ly_common.ly_page .sub_header .link {
        margin-top:0;
    }
}

.ly_common.ly_page .sub_header .link.ico_help:before {
    margin-right: 6px;
    vertical-align: middle;
}

@media screen and (max-width: 767px) {
    .ly_common.ly_page h3.tit {
        display:block;
        height: 44px;
        line-height: 44px;
        padding: 0 60px;
        background-color: #3a3b50;
        color: #fff;
        text-align: center;
    }
}

@media screen and (max-width: 767px) {
    .ly_common.ly_page .btn_close {
        top:6px;
        left: 8px;
        right: auto;
    }

    .ly_common.ly_page .btn_close:before {
        background-size: 1013px 983px;
        background-position: -495px -876px;
        width: 24px;
        height: 24px;
        display: inline-block;
    }
}

@media screen and (max-width: 767px) {
    .ly_common.ly_page .scroller {
        -webkit-box-sizing:border-box;
        box-sizing: border-box;
        padding-bottom: 24px;
    }
}

@media screen and (max-width: 767px) {
    .ly_common.ly_page .desc {
        margin-top:0;
        padding: 16px 16px 0;
    }
}

@media screen and (max-width: 767px) {
    .ly_common.ly_page .cont {
        padding:0 16px;
    }
}

.ly_common.ly_page .btn_box {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.ly_common.ly_page .btn_box .btn_text_aside,.ly_common.ly_page .btn_box .lw_btn_text {
    position: absolute;
    left: 24px;
    top: 22px;
    margin-left: 0;
    color: #157efb;
}

.ly_common.ly_page .btn_box .btn_text_aside {
    border: 0;
    background-color: transparent;
    line-height: 20px;
    font-size: 13px;
    padding: 8px 0;
}


@media screen and (max-width: 767px) {
    .ly_common.ly_page .btn_box {
        display:block!important;
        border-bottom: 1px solid #ddd;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 70;
        background: #fff;
        padding: 10px 16px;
    }

    .ly_common.ly_page .btn_box .lw_btn_text {
        left: 16px;
        top: 10px;
        bottom: 0;
        padding-left: 0;
        padding-right: 0;
        font-size: 12px;
    }

    .ly_common.ly_page .btn_box .lw_btn_text:hover {
        background-color: transparent;
    }
}

@media screen and (min-width: 768px) {
    .ly_common.ly_page .btn_box {
        position:absolute;
        right: 0;
        bottom: 23px;
        left: 0;
        padding: 22px 23px 0;
    }

    .ly_common.ly_page .btn_box+.scroller {
        margin-bottom: 61px;
    }
}

@media screen and (max-width: 767px) {
    .ly_common.ly_page .chk_list {
        padding:0 16px;
    }
}

@media screen and (max-width: 767px) {
    .ly_common.ly_page .tab_menu {
        margin:0 -23px;
        position: -webkit-sticky;
        position: sticky;
        top: 57px;
        z-index: 100;
    }
}

.ly_common.ly_page .lw_pagination {
    padding-bottom: 0;
    margin-bottom: -11px;
}

.ly_common.ly_page .scroll_box {
    margin-top: 20px;
    border: 1px solid #e5e5e6;
    max-height: 396px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: auto;
    padding: 12px;
}

@media screen and (max-width: 767px) {
    .ly_common.ly_page .scroll_box {
        margin-top:0;
        border: 0;
        max-height: none;
        overflow: visible;
        padding: 16px;
    }
}

.ly_common.freeplan_type {
    width: 400px;
    padding: 40px 24px 30px;
    text-align: center;
}

@media screen and (max-width: 767px) {
    .ly_common.freeplan_type {
        width:100%;
    }
}

.ly_common.freeplan_type .ico_freeplan {
    /* background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg); */
    background-size: 1013px 983px;
    background-position: -340px -267px;
    width: 109px;
    height: 82px;
    display: inline-block;
    margin: 0 auto;
    font-size: 0;
    line-height: 0;
}

.ly_common.freeplan_type h3.tit {
    margin-top: 24px;
    padding-right: 0;
}

.ly_common.freeplan_type .desc span {
    display: inline-block;
    vertical-align: middle;
}

.ly_common.freeplan_type .btn_box {
    text-align: center;
}
.ly_context {
    position: absolute;
    border: 1px solid #989898;
    border-radius: 2px;
    background-color: #fff;
    min-width: 110px;
    z-index: 50;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.ly_context ul {
    padding: 8px 0;
}

.ly_context li.disabled a {
    opacity: .4;
    cursor: default;
    pointer-events: none;
}

.ly_context a {
    display: block;
    min-width: 110px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #222;
    padding: 5px 12px 6px;
    white-space: nowrap;
}

.ly_context a:hover {
    background-color: rgba(0,0,0,.05);
}

.ly_context li:hover {
    background-color: transparent;
}

.ly_context li.on a,.ly_context li.selected a {
    color: #157efb;
    font-weight: 700;
}

.ly_context.autocomplete {
    overflow: auto;
    max-height: 176px;
    border-color: #157efb;
    margin-top: -1px;
    width: 100%;
}

.ly_context.autocomplete a:hover {
    background: none;
}

.ly_context.autocomplete li.selected a {
    background-color: rgba(0,0,0,.05);
}

.ly_context.autocomplete .key {
    font-style: normal;
    color: #157efb;
    font-weight: 700;
}
.ly_loading {
    position: absolute;
    z-index: 50;
    display: inline-block;
    padding: 19px 23px 21px;
    border: 1px solid #989898;
    background-color: #fff;
    vertical-align: middle;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: normal;
    text-align: left;
    color: #222;
    word-wrap: break-word;
    border-radius: 2px;
    width: 217px;
    padding: 24px 0 20px;
    border: 0;
    background-color: rgba(0,0,0,.7);
    text-align: center;
}
.ly_wrap .ly_loading {
    position: relative;
}

.ly_loading .btn_box {
    padding-top: 24px;
    text-align: right;
}

.ly_loading .btn_box:after {
    content: "";
    height: 0;
    overflow: hidden;
    clear: both;
    display: block;
}

.ly_loading .btn_box .aside_btn {
    float: left;
}

.ly_loading .btn_box button[class*=lwds_button] {
    min-width: 64px;
}

.ly_loading .btn_close {
    border: 0;
    background-color: transparent;
    position: absolute;
    top: 21px;
    right: 19px;
    padding: 5px;
    font-size: 0;
    color: transparent;
    line-height: 0;
}

.ly_loading .btn_close:before {
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    /* background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg); */
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -967px -525px;
    width: 16px;
    height: 16px;
    display: inline-block;
    content: "";
}

.ly_loading .btn_close:hover:before {
    background-position: -967px -549px;
}

.ly_loading .ico_alert,.ly_loading .ico_confirm {
    display: block;
    margin: 4px 0 16px;
    font-size: 0;
    color: transparent;
    line-height: 0;
}

.ly_loading .lw_pagination {
    display: block;
}

.ly_loading p {
    font-size: 12px;
    color: #c5c5c6;
}

.ly_drag_move {
    display: none;
    position: absolute;
    border: 1px solid #989898;
    background-color: #fff;
    z-index: 200;
    border-radius: 2px;
    padding: 5px 15px 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 180px;
    font-size: 14px;
    line-height: 21px;
}

.ly_drag_move .drag_item {
    font-weight: 700;
    color: #222;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    display: inline-block;
    vertical-align: top;
    max-width: 160px;
}

.ly_drag_move .cnt {
    color: #767676;
    margin-left: 6px;
}

.ly_calendar {
    position: absolute;
    z-index: 50;
}

@media screen and (max-width: 767px) {
    .ly_calendar {
        top:0!important;
        left: 0!important;
        right: 0!important;
        bottom: 0!important;
        text-align: center;
    }

    .ly_calendar:after {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
}

.basic_calendar {
    border-radius: 2px;
}

.basic_calendar .move_month .calendar-btn-prev-year:before {
    background-position: -447px -694px;
}

.basic_calendar .move_month .calendar-btn-prev-mon:before,.basic_calendar .move_month .calendar-btn-prev-year:before {
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    /* background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg); */
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
}

.basic_calendar .move_month .calendar-btn-prev-mon:before {
    background-position: -668px -694px;
}

.basic_calendar .move_month .calendar-btn-next-mon:before {
    background-position: -688px -694px;
}

.basic_calendar .move_month .calendar-btn-next-mon:before,.basic_calendar .move_month .calendar-btn-next-year:before {
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    /* background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg); */
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
}

.basic_calendar .move_month .calendar-btn-next-year:before {
    background-position: -426px -694px;
}

.basic_calendar .manual_set .btn_remind_ok {
    font-size: 14px;
    border-radius: 2px;
}

.basic_calendar .date .btn_today_select,.basic_calendar .date .utx_btn_b {
    font-size: 14px;
    border-radius: 2px;
    padding: 5px 12px 5px;
    border: 1px solid #c5c5c6;
    background: #fff;
    color: #222;
}

.basic_calendar .select_area .btn_group button {
    font-size: 14px;
    height: 32px;
    border-radius: 2px;
    line-height: 20px;
    padding: 5px 16px 5px;
    min-width: 54px;
}

.ly_organization {
    width: 700px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-bottom: 84px;
}

.ly_organization .member_view {
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
.ly_member_detail .btn_box .float {
    float: left;
}

@media screen and (min-width: 768px) {
    .ly_member_detail .scroller {
        margin-right:-23px;
        padding-right: 23px;
        max-height: 572px;
        overflow: auto;
    }
}

.ly_member_detail .empty {
    text-align: center;
}

.ly_member_detail .empty .txt {
    display: block;
    color: #767676;
}

.ly_member_detail .empty:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    /* background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg); */
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -340px -828px;
    width: 40px;
    height: 40px;
    display: inline-block;
    display: block;
    margin: 120px auto 16px;
}

.ly_member_detail em {
    font-style: normal;
}

.ly_member_detail .member {
    margin: 20px 0 24px;
}

.ly_member_detail .member .thumb {
    position: relative;
    float: left;
    width: 56px;
    height: 56px;
    margin-right: 20px;
    z-index: 20;
}

@media screen and (min-width: 768px) {
    .ly_member_detail .member .thumb {
        margin-top:3px;
    }
}

.ly_member_detail .member .thumb img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50px;
}

.ly_member_detail .member .thumb .thmb_area:after {
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

.ly_member_detail .member .thumb .f_pic {
    position: absolute;
    right: -4px;
    bottom: -4px;
    z-index: 10;
    width: 28px;
    height: 28px;
}

.ly_member_detail .member .thumb .f_pic a {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #c5c5c6;
    border-radius: 50%;
    font-size: 0;
    line-height: 0;
}

.ly_member_detail .member .thumb .f_pic a:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    /* background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg); */
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -993px -563px;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin: 5px;
}

.ly_member_detail .member .infor {
    color: #222;
    overflow: hidden;
}

.ly_member_detail .member .name_box {
    font-weight: 700;
}

.ly_member_detail .member .name_box span {
    margin-left: 6px;
}

.ly_member_detail .member .name_box i {
    display: inline-block;
    margin: -3px 6px 0 0;
    vertical-align: middle;
}

.ly_member_detail .member:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
}
.ly_member_detail .member.main {
    min-height: 80px;
    max-width: none;
    min-width: 0 !important;
    padding: 0 !important;
    margin-left: 0;
}
.ly_member_detail .member .infor button em {
    color: #fd472b;
}
.ly_member_detail .member .infor button.hover, 
.ly_member_detail .member .infor button.on, 
.ly_member_detail .member .infor button:hover {
    background-color: #f2f2f2;
}
@media screen and (min-width: 768px){
  .ly_member_detail {
    width: 460px;
  }
}

.ly_member_detail .member.main .thumb {
    width: 80px;
    height: 80px;
}

.ly_member_detail .member .thumb {
    margin-right: 16px;
}
.ly_member_detail .member .infor button {
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
    color: #222;
    padding: 0 12px;
}
.ly_common .tab_menu {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    height: 44px;
    background: #fff;
    overflow: hidden;
}

.ly_common .tab_menu:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background: #e6e6e6;
}

.ly_common .tab_menu .menu {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    width: 100%;
    font-size: 16px;
    text-align: center;
}

.ly_common .tab_menu .menu .txt {
    display: inline-block;
    padding: 0 8px;
    line-height: 45px;
}

.ly_common .tab_menu .menu.selected {
    color: #157efb;
    z-index: 1;
}

.ly_common .tab_menu .menu.selected .txt {
    position: relative;
    font-weight: 700;
}

.ly_common .tab_menu .menu.selected .txt:after {
    content: "";
    position: absolute;
    right: 0;
    top: 42px;
    left: 0;
    z-index: 1;
    height: 2px;
    background: #157efb;
}

.ly_common .tab_menu a {
    color: inherit;
}
.ly_member_detail .cont {
    border-top: 1px solid #eee;
}

@media screen and (max-width: 767px) {
    .ly_member_detail .cont {
        padding:0!important;
    }
}

.ly_member_detail .detail_item {
    border-top: 1px solid #eee;
    padding: 20px 0;
}

.ly_member_detail .detail_item:first-child {
    border-top: 0;
}

.ly_member_detail .detail_item i {
    font-style: normal;
}

.ly_member_detail .detail_item .hd {
    display: block;
    margin: 0 0 8px;
    font-size: 12px;
    color: #767676;
}

.ly_member_detail .detail_item p {
    margin-top: 8px;
    margin-bottom: 0;
}

.ly_member_detail .detail_item .retire {
    color: #fd472b;
}

.ly_member_detail .detail_item .has_tit+.has_tit,.ly_member_detail .detail_item p+p {
    margin-top: 8px;
}

.ly_member_detail .detail_item .txt p {
    margin-top: 1px;
}

.ly_member_detail .detail_item a {
    color: inherit;
    /* text-decoration: underline; */
}

.ly_member_detail .detail_item .ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
}

.ly_member_detail .detail_item .has_tit {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

.ly_member_detail .detail_item .has_tit .s_tit {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    width: 110px;
    margin-right: 13px;
}

.ly_member_detail .detail_item .has_tit .txt {
    -webkit-box-flex: 1;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    word-break: break-all;
}

.ly_member_detail .detail_item .works {
    margin-top: 8px;
}

.ly_member_detail .detail_item .works p {
    margin-top: 0;
}

.ly_member_detail .detail_item .ico_email {
    display: inline-block;
    margin: -3px 6px 0 0;
    font-size: 0;
    line-height: 0;
    vertical-align: middle;
}

.ly_member_detail .detail_item .pic_list {
    padding-bottom: 4px;
}

.ly_member_detail .detail_item .pic_list:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
}

.ly_member_detail .detail_item .pic_list .pic {
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    margin-left: 8px;
}

.ly_member_detail .detail_item .pic_list .pic:first-child {
    margin-left: 0;
}

.ly_member_detail .detail_item .pic_list .pic img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
}

.ly_member_detail .detail_item .pic_list .pic:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid rgba(0,0,0,.1);
}

.member_list {
    padding: 8px 0;
}

.member_list li {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
}

.member_list li.empty {
    cursor: default;
}

.member_list li.empty:hover {
    background-color: transparent;
}

.member_list li.empty p {
    text-align: center;
}

.member_list li.focus,.member_list li:hover {
    background: rgba(0,0,0,.04);
}

.member_list li .keyword {
    font-style: normal;
}

.member_list li .lang,.member_list li .name,.member_list li .nick {
    color: #222;
}

.member_list li .position {
    color: #3a61ce;
    font-weight: 400;
}

.member_list li .position em {
    color: #237a1f;
    font-style: normal;
}

.member_list li i.ico_bot,.member_list li i.ico_line,.member_list li i.ico_works {
    display: inline-block;
    margin: -1px 6px 0 0;
    font-size: 0;
    line-height: 0;
    vertical-align: middle;
}

.member_list li .infor span+span,.member_list li .infor strong+span {
    margin-left: 8px;
}

.member_list li .thumb {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50px;
}

.member_list li .thumb img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
}

.member_list li .thumb .thmb_area:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 50px;
}

.member_list li .thumb i.ico_absence,.member_list li .thumb i.ico_busy,.member_list li .thumb i.ico_groups {
    position: absolute;
    right: -6px;
    bottom: -4px;
    z-index: 1;
    font-size: 0;
    line-height: 0;
}

.member_list li.has_txt {
    min-height: 32px;
    padding: 5px 12px 6px;
    color: #767676;
}

.member_list li.has_txt .infor {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
}

.member_list li.has_txt .name_box,.member_list li.has_txt .txt {
    display: inline;
    vertical-align: top;
}

.member_list li.has_txt .name_box+.txt {
    margin-left: 8px;
}

.member_list li.has_txt .thumb {
    display: none;
}

.member_list li.has_thmb {
    min-height: 36px;
    padding: 12px 11px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    min-width: 0;
}

.member_list li.has_thmb .thumb {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    margin-right: 12px;
}

.member_list li.has_thmb .infor,.member_list li.has_thmb .txt {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    -webkit-box-flex: 1;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
}

.member_list li.has_thmb .infor {
    height: 36px;
    margin-top: auto;
    margin-bottom: auto;
}

.member_list li.has_thmb .name_box {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    margin-top: -1px;
    color: #767676;
}

.member_list li.has_thmb .txt {
    font-size: 12px;
    color: #767676;
}

.member_list li.has_thmb .master {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-left: auto;
    color: #157efb;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
}

.member_list li.removed .infor {
    opacity: .5;
}

.member_list li.line {
    border-top: 1px solid #eee;
    margin-top: 10px;
    padding-top: 10px;
}
.ly_member_select .list_cont .member_list li.has_thmb, .tab_cont .member_list li.has_thmb {
    border-bottom: 1px solid #f5f5f6;
    padding-left: 0;
    padding-right: 0;
    cursor: default;
}
.member_list li .thumb i.ico_absence, .member_list li .thumb i.ico_busy, .member_list li .thumb i.ico_groups {
    position: absolute;
    right: -6px;
    bottom: -4px;
    z-index: 1;
    font-size: 0;
    line-height: 0;
}
.ico_groups:before, .ico_p_member:before {
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    /* background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg); */
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    width: 16px;
    height: 16px;
    display: inline-block;
    content: "";
}
.ico_groups:before {
    background-position: -993px -251px;
}
@media screen and (max-width: 767px) {
    ul.member_list {
        -webkit-transform:translateZ(0);
        transform: translateZ(0);
    }
}
</style>
