<template>
  <div class="modal1" v-if="visible">
      <div class="modal-body">
        <Form @submit.prevent="submitForm">
          <div id="modal-root">
            <div class="ly_wrap dimmed en_US ua_win">
              <div class="ly_common ly_page ly_member_add freeplan freeplan">
                <div class="tit_box">
                  <h3 class="tit">Add group </h3>
                </div>
                <div class="btn_box">
                  <button type="button" class="lw_btn" @click="close">Cancel</button>
                  <button class="lw_btn_point">Save</button>
                </div>
                <div class="scroller">
                  <p class="noti">
                    <em class="emp">Required field</em>
                  </p>
                  <div class="fm_members group_box">
                    <div class="member">
                      <div class="thumb">
                        <span class="thmb_area">
                          <img src="../assets/img_group.png" alt="">
                        </span>
                        <span class="f_pic">
                          <a href="#">Register</a>
                        </span>
                      </div>
                      <div class="infor">
                        <p class="txt">
                          <span>
                            <em class="emp">Required fields</em>Group name </span>
                        </p>
                        <div class="name_box">
                          <input type="text" class="lw_input" placeholder="Group name" v-model="form.name">
                        </div>
                        <p class="txt">
                          <span>Description</span>
                        </p>
                        <div class="name_box">
                          <input type="text" class="lw_input" placeholder="Description" v-model="form.description">
                        </div>
                      </div>
                    </div>
                    <div class="body">
                      <div class="field">
                        <i class="hd">
                          <em class="emp">Required field</em>Master(s) </i>
                        <div class="box srch_member">
                          <div class="task">
                            <input type="text" class="lw_input" autocomplete="off" placeholder="Search by name or ID" value="">
                            <button type="button" @click="openSelectMembersModal('master')">Contacts</button>
                          </div>
                          <!-- <ul class="member_list results" v-if="groupMasters.length">
                            <li class="has_thmb" v-for="master in groupMasters" :key="master">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="../assets/img_profile.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">{{ master.userName + ' ' + master.user_ID }}</strong>
                                </div>
                                <div class="txt">
                                  <strong class="position">{{ master.position }}</strong>
                                  <span class="corp">{{ group.name }}</span>
                                </div>
                              </div>
                              <button type="button" class="remove">
                                <i>Deselect member</i>
                              </button>
                            </li>
                          </ul> -->
                          <!-- <div class="caption ft">
                            <p class="acption ft"><strong>{{ groupMasters[0].userName }}</strong>
                              <template v-if="groupMasters.length > 1"> and <strong>{{ groupMasters.length - 1 }}</strong> more</template>
                            </p>
                          </div> -->
                        </div>
                      </div>
                      <div class="field">
                        <i class="hd">
                          <em class="emp">Required field</em>Member(s) </i>
                        <div class="box srch_member">
                          <div class="task">
                            <input type="text" class="lw_input" autocomplete="off" placeholder="Search by name or ID" value="">
                            <button type="button" @click="openSelectMembersModal('member')">Contacts</button>
                          </div>
                          <!-- <ul class="member_list results" v-if="groupMembers.length">
                            <li class="has_thmb" v-for="member in groupMembers" :key="member">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="../assets/img_profile.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">{{ member.userName + ' ' + member.user_ID }}</strong>
                                </div>
                                <div class="txt">
                                  <span class="corp">{{ member.organization }}</span>
                                  <span class="email">{{ member.position + '/ ' + member.level }}</span>
                                </div>
                              </div>
                              <button type="button" class="remove">
                                <i>Deselect member</i>
                              </button>
                            </li>
                          </ul> -->
                          <!-- <p class="caption ft">
                            <span class="txt">Total <strong>{{ groupMembers.length }}</strong> people </span>
                          </p> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn_close" @click="close">Close</button>
              </div>
            </div>
            <select-members-modal
              :visible="visibleSelectMembers"
              :dataSelected="selectMembersData"
              @close="closeSelectMembersModal"
              @submitData="handleSubmitMembers"
            >
            </select-members-modal>
          </div>
        </Form>
      </div>
  </div>
</template>
  
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import SelectMembersModal from '@/components/SelectMembersModal.vue';

export default {
  name: 'AddGroupModal',
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
  },
  components: {
    SelectMembersModal
  },
  data(){
    return {
      form: {
        name: '',
        description: '',
        no: 0,
        isUse: true,
        note: '',
        mUser_ID: 0
      },
      visibleSelectMembers: false,
      selectMembersData: [],
      memberModalType: '',
      master: [],
      member: []
    }
  },
  computed: {
    ...mapState('account', ['user']),
    ...mapState('group', ['group']),
    ...mapState('members', ['members']),
    ...mapState('group', ['groupMembers']),
    ...mapState('group', ['groupMasters']),
    ...mapState('group', ['groupWhole']),
  },
  methods: {
    ...mapActions('groups', ['addGroup']),
    close() {
      this.$emit('close');
    },
    openSelectMembersModal(value){
      this.visibleSelectMembers = true;
      if (value === 'member') {
        this.selectMembersData = this.groupMembers
        this.memberModalType = 'member'
      } else if (value === 'master') {
        this.selectMembersData = this.groupMasters
        this.memberModalType = 'master'
      }
    },
    closeSelectMembersModal(){
      this.visibleSelectMembers = false;
      
    },
    handleSubmitMembers(data){
      if(this.memberModalType=='master'){
        this.master = data;
      }else {
        this.member = data;
      }
      this.closeSelectMembersModal();
    },
    submitForm(){
      const group = {
        user_ID: this.user.id,
        group: {
          ...this.form,
          note: ""
        },
        masters: this.master,
        members: this.member
      }
      this.addGroup(group);
      this.close();
      
    },
    renameProperty(obj, oldName, newName) {
      if (oldName === newName) {
        return obj
      }
      
      if (Object.prototype.hasOwnProperty.call(obj, oldName)) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
      }
      
      return obj;
    }
    
  },
};
</script>

<style lang="scss">
.ly_member_add, .ly_member_modify {
  width: 700px;
  padding-right: 0;
  padding-left: 0;
}
.text_error {
  color: red;
  display: block;
}
.srch_member .caption.ft {
  margin: 8px 0 0;
}
.srch_member .caption strong {
  color: #157efb;
  font-weight: 400;
}
  /* add */

.btnAddOrg {
  position: absolute;
  width: 34px;
  height: 34px;
  right: 0;
  top: 0;
  background: url(../assets/icon_group_active.svg) no-repeat 0 0;
  background-size: 100% 100%;
  outline: none;
  border: none;
}
.lw_textarea {
  width: 100%;
  height: 68px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 7px 8px;
  resize: none;
  color: #222;
  line-height: 1.5;
  &:focus {
    border-color: #157efb;
    outline: none;
  }
  &.invalid {
    border-color: #fd472b
  }
}
.srch_member .task button {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-box-sizing: border-box;
  display: block;
  font-size: 14px;
  display: inline-block;
  box-sizing: border-box;
  height: 34px;
  border-radius: 2px;
  line-height: 20px;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 6px 12px 6px;
  cursor: pointer;
  min-width: 54px;
  border: 1px solid #c5c5c6;
  background: #fff;
  color: #222;
  margin-left: 8px;
}
.srch_member .task input[type=text] {
  font-size: 14px;
  color: #222;
  line-height: 21px;
  padding: 6px 0 7px 10px;
  -webkit-box-sizing: border-box;
  height: 34px;
  border: 1px solid #ddd;
  border-radius: 2px;
  -webkit-appearance: none;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
  width: 100%;
}
.srch_member .task {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  min-width: 0;
  position: relative;
  z-index: 10;
}
.srch_member .results {
  min-height: 144px;
  height: 144px;
  overflow: auto;
  border: 1px solid #e5e5e6;
  border-radius: 2px;
  margin: 8px 0 0;
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
.srch_member .results li .remove {
  flex: 0 0 auto;
  background: transparent;
  border: 0;
  height: 18px;
  padding: 5px 4px 5px 5px;
  margin: auto -5px auto 6px;
}
.srch_member .results li .remove:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -452px -964px;
  width: 8px;
  height: 8px;
  display: inline-block;
  display: block;
  padding-right: 1px;
}
.srch_member .results li .remove i {
  position: absolute;
  clip: rect(0,0,0,0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}
.member_list li.has_thmb .infor {
  height: 36px;
  margin-top: auto;
  margin-bottom: auto;
}
.member_list li.has_thmb .infor, .member_list li.has_thmb .txt {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
}

</style>
