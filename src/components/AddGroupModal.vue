<template>
  <div class="modal1" v-if="visible">
      <div class="modal-body">
        <Form @submit="submitForm">
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
</style>
