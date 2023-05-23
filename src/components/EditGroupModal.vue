<template>
  <div class="modal1" v-if="visible">
      <div class="modal-body">
        <Form @submit.prevent="submitForm">
          <div id="modal-root">
            <div class="ly_wrap dimmed en_US ua_win">
              <div class="ly_common ly_page ly_member_add freeplan freeplan">
                <div class="tit_box">
                  <h3 class="tit"> Edit group </h3>
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
                        <p class="msg_alert">
                          <em></em>
                        </p>
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
                          <ul class="member_list results" v-if="groupMasters.length">
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
                          </ul>
                          <div class="caption ft">
                            <p class="acption ft"><strong>{{ groupMasters[0].userName }}</strong>
                              <template v-if="groupMasters.length > 1"> and <strong>{{ groupMasters.length - 1 }}</strong> more</template>
                            </p>
                          </div>
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
                          <ul class="member_list results" v-if="groupMembers.length">
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
                          </ul>
                          <p class="caption ft">
                            <span class="txt">Total <strong>{{ groupMembers.length }}</strong> people </span>
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
  name: 'EditGroupModal',
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    group: {
      type: Object,
      default: ()=>{}
    }
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
        cDate: '',
        cUser_ID: null,
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
    ...mapState('group', ['group']),
    ...mapState('members', ['members']),
    ...mapState('group', ['groupMembers']),
    ...mapState('group', ['groupMasters']),
    ...mapState('group', ['groupWhole']),
  },
  methods: {
    ...mapActions('group', ['updateGroup']),
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
        this.masters = data;
      }else {
        this.members = data;
      }
      this.closeSelectMembersModal();
    },
    submitForm(){
      const group = {
        group: {
          ...this.form,
          note: ""
        },
        masters: this.master,
        members: this.member
      }
      this.updateGroup(group);
    },
    renameProperty(obj, oldName, newName) {
      if (oldName === newName) {
        return obj;
      }
      
      if (Object.prototype.hasOwnProperty.call(obj, oldName)) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
      }
      
      return obj;
    }
    
  },
  watch: {
    group(newVal) {
      this.form = newVal;
    },
    groupMasters(newVal) {
      this.master = newVal.map(obj => obj.user_ID);
    },
    groupMembers(newVal) {
      this.member = newVal.map(obj => obj.id);
    },

  },
};
</script>
