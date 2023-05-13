<template>
  <div class="modal1" v-if="visible">
      <div class="modal-body">
        <Form @submit="submitForm">
          <div id="modal-root">
            <div class="ly_wrap dimmed en_US ua_win">
              <div class="ly_common ly_page ly_member_add freeplan freeplan">
                <div class="tit_box">
                  <h3 class="tit"> Edit group </h3>
                </div>
                <div class="btn_box">
                  <button type="button" class="lw_btn" @click="close">Cancel</button>
                  <button type="button" class="lw_btn_point">Save</button>
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
                        <!-- <input class="blind" type="file" name="file" accept="image/x-png, image/jpeg" style="display: none;"> -->
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
                          {{ groupMasters }}
                          <ul class="member_list results">
                            <li class="has_thmb" v-for="master in groupMasters" :key="master">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="../assets/img_group.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">{{ master.userName }}</strong>
                                </div>
                                <div class="txt">
                                  <strong class="position">{{ master.position }}</strong>
                                  <span class="corp">{{ group.name }}</span>
                                  <!-- <span class="email">test2@test-5380</span> -->
                                </div>
                              </div>
                              <button type="button" class="remove">
                                <i>Deselect member</i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="field">
                        <i class="hd">
                          <em class="emp">Required field</em>Member(s) </i>
                        <div class="box srch_member">
                          <div class="task">
                            <input type="text" class="lw_input" autocomplete="off" placeholder="Search by name or ID" value="">
                            <button type="button">Contacts</button>
                          </div>
                          <ul class="member_list results">
                            <li class="has_thmb">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">test test</strong>
                                  <span class="nick">[222222]</span>
                                </div>
                                <div class="txt">
                                  <strong class="position">Management</strong>
                                  <span class="corp">test</span>
                                  <span class="email">test.test@test-5380</span>
                                </div>
                              </div>
                              <button type="button" class="remove">
                                <i>Deselect member</i>
                              </button>
                            </li>
                            
                          </ul>
                          <p class="caption ft">
                            <span class="txt">Total <strong>4</strong> people </span>
                          </p>
                        </div>
                        {{ group }}
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn_close" @click="close">Close</button>
              </div>
            </div>
            
            <select-members-modal
              :visible="visibleSelectMembers"
              :data="selectMembersData"
              @close="closeSelectMembersModal"
            >
            </select-members-modal>
          </div>
        </Form>
      </div>
  </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';
// import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import SelectMembersModal from '@/components/SelectMembersModal.vue';
// import { required } from '@vee-validate/rules';
// defineRule('required', required);
// configure({
//   generateMessage: (ctx) => {
//     const messages = {
//       required: "You can't leave this empty.",
//     };
//     const message = messages[ctx.rule.name] || `Invalid ${ctx.field} field.`;
//     return message;
//   },
// });

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
      selectMembersData: []
    }
  },
  computed: {
    // ...mapState('group', ['group']),
    ...mapState('group', ['groupMembers']),
    ...mapState('group', ['groupMasters']),
    ...mapState('group', ['groupWhole']),
  },
  // created() {
  //   this.form = this.group;
  //   console.log(this.form)
  // },
  methods: {
    // ...mapActions('levels', ['getLevels']),
    // ...mapActions('organizations', ['getOrganizations']),
    // ...mapActions('positions', ['getPositions']),
    // ...mapActions('types', ['getTypes']),
    close() {
      this.$emit('close');
    },
    openSelectMembersModal(value){
      // alert(0)
      this.visibleSelectMembers = true;
      if (value === 'member') {
        this.selectMembersData = this.groupMembers
      } else if (value === 'master') {
        this.selectMembersData = this.groupMasters
      }
    },
    closeSelectMembersModal(){
      this.visibleSelectMembers = false;
      
    },
    changeData(value) {
      // Set different data based on which button was clicked
      if (value === 'member') {
        this.selectMembersData = this.groupMembers
      } else if (value === 'master') {
        this.selectMembersData = this.groupMasters
      }
    }
  },
  watch: {
    group(newVal) {
      this.form = newVal
    }
  },
};
</script>
<style scope lang="scss">
.srch_member .results li .infor {
  width: 100%;
}
</style>
