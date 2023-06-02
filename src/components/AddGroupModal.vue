<template>
  <div class="modal1" v-if="visible">
      <div class="modal-body">
        <form @submit.prevent="submitForm">
          <div id="modal-root">
            <div class="ly_wrap dimmed en_US ua_win">
              <div class="ly_common ly_page ly_member_add freeplan freeplan">
                <div class="tit_box">
                  <h3 class="tit">Add group</h3>
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
                            <em class="emp">Required fields</em>Group name</span>
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
                          <em class="emp">Required field</em>Master(s)</i>
                        <div class="box srch_member">
                          <div class="task">
                            <input type="text" class="lw_input" autocomplete="off" placeholder="Search by name or ID" value="">
                            <button type="button" @click="openSelectMembersModal('master')">Contacts</button>
                          </div>
                          <ul class="member_list results" v-if="masterArr.length">
                            <li class="has_thmb" v-for="master in masterArr" :key="master">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="../assets/img_profile.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">{{ master.userName }}</strong>
                                </div>
                                <div class="txt">
                                  <strong class="position">{{ master.level }}</strong>
                                  <strong class="position">{{ ' / ' + master.position }}</strong>
                                  <span class="corp">{{ master.organization }}</span>
                                </div>
                              </div>
                              <button type="button" class="remove" @click="handleDeleteMaster(master)">
                                <i>Deselect member</i>
                              </button>
                            </li>
                          </ul>
                          <div class="caption ft">
                            <p class="acption ft" v-if="masterArr.length"><strong>{{ masterArr[0].userName }}</strong>
                              <template v-if="masterArr.length > 1"> and <strong>{{ masterArr.length - 1 }}</strong> more</template>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="field">
                        <i class="hd">
                          <em class="emp">Required field</em>Member(s)</i>
                        <div class="box srch_member">
                          <div class="task">
                            <input type="text" class="lw_input" autocomplete="off" placeholder="Search by name or ID" value="">
                            <button type="button" @click="openSelectMembersModal('member')">Contacts</button>
                          </div>
                          <ul class="member_list results" v-if="memberArr.length">
                            <li class="has_thmb" v-for="mem in memberArr" :key="mem">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="../assets/img_profile.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">{{ mem.userName + ''}}</strong>
                                </div>
                                <div class="txt">
                                  <strong class="position">{{ mem.level + '' }}</strong>
                                  <strong class="position">{{ ' / ' + mem.position }}</strong>
                                  <span class="corp">{{ mem.organization }}</span>
                                </div>
                              </div>
                              <button type="button" class="remove" @click="handleDeleteMember(mem)">
                                <i>Deselect member</i>
                              </button>
                            </li>
                          </ul>
                          <p class="caption ft">
                            <span class="txt">Total <strong>{{ memberArr.length }}</strong> people </span>
                          </p>
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
              :title="memberModalType"
              @close="closeSelectMembersModal"
              @submitData="handleSubmitMembers"
            >
            </select-members-modal>
          </div>
        </form>
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
      masterArr: [],
      member: [],
      memberArr: []
    }
  },
  computed: {
    ...mapState('account', ['user']),
    ...mapState('group', ['group']),
    ...mapState('members', ['members']),
    ...mapState('group', ['groupMembers']),
    ...mapState('group', ['groupMasters']),
    ...mapState('groups', ['apiStatus']),
  },
  created(){
    this.getGroupMasters(this.group.id);
    this.getGroupMembers(this.group.id);
  },
  methods: {
    ...mapActions('groups', ['addGroup']),
    ...mapActions('group', ['getGroupMasters']),
    ...mapActions('group', ['getGroupMembers']),
    close() {
      this.$emit('close');
      this.form = {
        name: '',
        description: '',
        no: 0,
        isUse: true,
        note: '',
        mUser_ID: 0
      };
      this.member = [];
      this.memberArr = [];
      this.master = [];
      this.masterArr = [];
    },
    openSelectMembersModal(value){
      this.visibleSelectMembers = true;
      if (value === 'member') {
        this.selectMembersData = this.memberArr
        this.memberModalType = 'member'
      } else if (value === 'master') {
        this.selectMembersData = this.masterArr
        this.memberModalType = 'master'
      }
    },
    closeSelectMembersModal(){
      this.member = [];
      this.memberArr = [];
      this.master = [];
      this.masterArr = [];
      this.selectMembersData = [];
      this.visibleSelectMembers = false;
    },
    handleSubmitMembers(data, arr){
      if(this.memberModalType=='master'){
        this.master = data;
        this.masterArr = arr;
      }else {
        this.member = data;
        this.memberArr = arr;
      }
      this.visibleSelectMembers = false;
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
      setTimeout(() => {
        if(!this.apiStatus.addGroup.error){
          this.close();
        }
      }, 1000);
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
    },
    handleDeleteMaster(master){
      const index = this.master.indexOf(master.user_ID);
      if (index !== -1) {
        this.master.splice(index, 1);
      }
      const masters = this.masterArr.filter(item => item.user_ID != master.user_ID);
      this.masterArr = masters;
    },
    handleDeleteMember(mem){
      const index = this.member.indexOf(mem.user_ID);
      if (index !== -1) {
        this.member.splice(index, 1);
      }
      const members = this.memberArr.filter(item => item.user_ID != mem.user_ID);
      this.memberArr = members;
    }
  },
  watch: {
    groupMasters(newVal) {
      this.masterArr = {...newVal};
    },
    groupMembers(newVal) {
      this.memberArr = {...newVal};
    },

  },
};
</script>

<style scoped lang="scss">
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
  .member_list li.has_thmb .infor {
    margin: 0;
  }
  .member_list {
    display: block;
  }
</style>
