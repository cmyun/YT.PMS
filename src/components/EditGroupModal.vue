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
                          <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile_group2.png" alt="">
                        </span>
                        <span class="f_pic">
                          <a href="#">Register</a>
                        </span>
                        <input class="blind" type="file" name="file" accept="image/x-png, image/jpeg" style="display: none;">
                      </div>
                      <div class="infor">
                        <p class="txt">
                          <span>
                            <em class="emp">Required fields</em>Group name </span>
                        </p>
                        <div class="name_box">
                          <input type="text" class="lw_input" placeholder="Group name" value="1">
                        </div>
                        <p class="msg_alert">
                          <em></em>
                        </p>
                        <p class="txt">
                          <span>Description</span>
                        </p>
                        <div class="name_box">
                          <input type="text" class="lw_input" placeholder="Description" value="1">
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
                            <button type="button" @click="openSelectMembersModal">Contacts</button>
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
                                  <strong class="name">test2 test2</strong>
                                </div>
                                <div class="txt">
                                  <strong class="position">Part-time Employee</strong>
                                  <span class="corp">test</span>
                                  <span class="email">test2@test-5380</span>
                                </div>
                              </div>
                              <button type="button" class="remove">
                                <i>Deselect member</i>
                              </button>
                            </li>
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
                            <li class="has_thmb">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">test04 test04</strong>
                                </div>
                                <div class="txt">
                                  <strong class="position">Part-time Employee</strong>
                                  <span class="corp">test</span>
                                  <span class="email">test04@test-5380</span>
                                </div>
                              </div>
                              <button type="button" class="remove">
                                <i>Deselect member</i>
                              </button>
                            </li>
                            <li class="has_thmb">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">test03 test03</strong>
                                </div>
                                <div class="txt">
                                  <strong class="position">Part-time Employee</strong>
                                  <span class="corp">test</span>
                                  <span class="email">test03@test-5380</span>
                                </div>
                              </div>
                              <button type="button" class="remove">
                                <i>Deselect member</i>
                              </button>
                            </li>
                          </ul>
                          <!-- <p class="caption ft">
                          <p class="acption ft">
                            <strong>test2 test2</strong> and <strong>3</strong> more
                          </p>
                          </p> -->
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
                            <li class="has_thmb">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">test03 test03</strong>
                                </div>
                                <div class="txt">
                                  <strong class="position">Part-time Employee</strong>
                                  <span class="corp">test</span>
                                  <span class="email">test03@test-5380</span>
                                </div>
                              </div>
                              <button type="button" class="remove">
                                <i>Deselect member</i>
                              </button>
                            </li>
                            <li class="has_thmb">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">test04 test04</strong>
                                </div>
                                <div class="txt">
                                  <strong class="position">Part-time Employee</strong>
                                  <span class="corp">test</span>
                                  <span class="email">test04@test-5380</span>
                                </div>
                              </div>
                              <button type="button" class="remove">
                                <i>Deselect member</i>
                              </button>
                            </li>
                            <li class="has_thmb">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">test2 test2</strong>
                                </div>
                                <div class="txt">
                                  <strong class="position">Part-time Employee</strong>
                                  <span class="corp">test</span>
                                  <span class="email">test2@test-5380</span>
                                </div>
                              </div>
                              <button type="button" class="remove">
                                <i>Deselect member</i>
                              </button>
                            </li>
                            <li class="has_thmb">
                              <div class="thumb">
                                <span class="thmb_area">
                                  <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile_group2.png" alt="" loading="lazy">
                                </span>
                              </div>
                              <div class="infor">
                                <div class="name_box">
                                  <strong class="name">New organization (1)</strong>
                                </div>
                                <div class="txt">
                                  <span class="corp">test</span>
                                  <span class="email">t_512br@test-5380</span>
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
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn_close" @click="close">Close</button>
              </div>
            </div>
          </div>
        </Form>
      </div>
      
  </div>
  <select-members-modal
        :visible="visibleSelectMembers"
        @close="closeSelectMembersModal"
      >

      </select-members-modal>
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
  },
  components: {
    SelectMembersModal
  },
  data(){
    return {
      // form: {
      //   name: '',
      //   login_ID: '',
      //   login_PW: '',
      //   level_ID: 0,
      //   position_ID: 0,
      //   type_ID: 0,
      //   organization_ID: 0,
      //   office: '',
      //   mobile: '',
      //   email: '',
      //   nickname: '',
      //   isUse: true,
      //   isAdmin: false,
      //   remark: '',
      //   note: ''
      // },
      visibleSelectMembers: false
    }
  },
  computed: {
    ...mapState('levels', ['levels']),
    ...mapState('organizations', ['organizations']),
    ...mapState('positions', ['positions']),
    ...mapState('types', ['types']),
  },
  created() {
    this.getLevels();
    this.getTypes();
    this.getOrganizations();
    this.getPositions();
    this.form = this.data;
  },
  methods: {
    ...mapActions('levels', ['getLevels']),
    ...mapActions('organizations', ['getOrganizations']),
    ...mapActions('positions', ['getPositions']),
    ...mapActions('types', ['getTypes']),
    close() {
      this.$emit('close');
    },
    openSelectMembersModal(){
      // alert(0)
      this.visibleSelectMembers = true;
    },
    closeSelectMembersModal(){
      this.visibleSelectMembers = false;
    }
  }
};
</script>
<style scope lang="scss">
.srch_member .results li .infor {
  width: 100%;
}
</style>
