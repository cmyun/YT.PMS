<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-body">
      <form @submit.prevent="submitForm">
        <div id="modal-root">
          <div class="ly_wrap dimmed en_US ua_win">
            <div class="ly_common ly_page ly_member_select freeplan">
              <h3 class="tit">Change master</h3>
              <div class="btn_box full">
                <button type="button" class="lw_btn" @click="close">Cancel</button>
                <button class="lw_btn_point">Save</button>
              </div>
              <div class="scroller">
                <div class="list_hd">
                  <span>Member(s)</span>
                  <span>Master(s)</span>
                </div>
                <div class="list_cont">
                  <ul class="member_list">
                    <li class="has_thmb" v-for="master in groupMasters" :key="master">
                      <div class="thumb">
                        <span class="thmb_area">
                          <img src="../assets/img_profile.png" loading="lazy" alt="">
                        </span>
                      </div>
                      <div class="infor">
                        <div class="name_box">
                          <strong class="name">{{ master.userName }}</strong>
                        </div>
                        <div class="txt">
                          <span class="email">{{ master.position + '/ ' + master.level }}</span>
                        </div>
                      </div>
                      <span class="slct">
                        <input :name="master.id" type="checkbox" class="lw_checkbox" :value="master.id" :id="master.id" v-model="selected">
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <button type="button" class="btn_close" @click="close">Close</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import store from "../store";
export default {
  name: "GroupMasterModal",
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    masterIds: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {
      selected: this.masterIds
    }
  },
  computed: {
    ...mapState('group', ['group']),
    ...mapState('group', ['groupMasters']),
  },
  watch: {
    masterIds(newVal) {
        this.selected = newVal
    }
  },
  
  methods: {
    close() {
      this.$emit('close');
    },
    submitForm(){
      this.$emit('submitMaster', this.selected);
    }
  }
}
</script>
<style scope lange="scss">
.ly_member_select .list_hd {
    height: 32px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 18px;
    background: #fafafb;
    border-top: 1px solid #e5e5e6;
    padding: 7px 16px 0 16px;
    font-size: 12px;
    color: #434343;
    text-align: right;
}

.ua_win .ly_member_select .list_hd {
    padding-right: 32px;
}

.ly_member_select .list_hd span:first-child {
    float: left;
}
.ly_member_select .list_cont {
    height: 518px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: auto;
    padding: 0 14px;
    border-top: 1px solid #e5e5e6;
}

.ua_win .ly_member_select .list_cont {
    overflow-y: scroll;
}
.ly_member_select .member_list .slct label {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    font-size: 0;
    line-height: 0;
}

.ly_member_select .member_list .slct label:before {
    left: auto;
    right: 10px;
}

.ly_member_select .member_list .slct label {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    font-size: 0;
    line-height: 0;
}
.lw_checkbox+label {
    position: relative;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #222;
    vertical-align: middle;
    text-indent: 22px;
    cursor: pointer;
    line-height: 20px;
    min-width: 16px;
    min-height: 16px;
    word-break: break-all;
}
.ly_member_select .member_list .slct label:before {
    left: auto;
    right: 10px;
}
.ly_member_select .member_list .slct {
  display: block;
    height: 16px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
</style>
