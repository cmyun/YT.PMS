<template>
  <div class="modal1" v-if="visible">
      <div class="modal-body">
        <form @submit.prevent="submitForm">
          <div id="modal-root">
            <div class="ly_wrap dimmed en_US ua_win">
              <div class="ly_common ly_page ly_member_add freeplan freeplan">
                <div class="tit_box">
                  <h3 class="tit">Edit organization</h3>
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
                            <em class="emp">Required fields</em>Organization name </span>
                        </p>
                        <div class="name_box">
                          <input type="text" class="lw_input" placeholder="Organization name" v-model="form.name">
                        </div>
                      </div>
                    </div>
                    <div class="body">
                      <div class="field">
                        <i class="hd">Description</i>
                        <div class="box">
                          <input type="text" class="lw_input" placeholder="Description" v-model="form.description">
                        </div>
                      </div>
                    </div>
                    <button type="button" :class="['opt_toggle', {fold: !visibleAdvance}]"
                    @click="visibleAdvance=!visibleAdvance"
                    >Advanced</button>
                    <ul class="func_box minor" v-show="visibleAdvance">
                      <li class="func">
                        <i class="hd">Send organizational notifications to all members</i>
                        <p>Notification messages for all members will be sent when any change occurs to the organization.</p>
                        <input type="checkbox" class="lw_toggle" id="team_func1" v-model="form.isNotify">
                        <label for="team_func1">toggle button</label>
                      </li>
                      <li class="func">
                        <i class="hd">Display</i>
                        <p>When private, it does not appear in the organizational list.</p>
                        <input type="checkbox" class="lw_toggle" id="team_func2" v-model="form.isDisclose">
                        <label for="team_func2">toggle button</label>
                      </li>
                    </ul>
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
        </form>
      </div>
  </div>
</template>
  
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import SelectMembersModal from '@/components/SelectMembersModal.vue';

export default {
  name: 'EditOrgModal',
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    organization: {
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
        isNotify: false,
        isDisclose: false
      },
      visibleAdvance: true
    }
  },
  computed: {
    ...mapState('organization', ['organization']),
  },
  methods: {
    ...mapActions('organization', ['updateOrganization']),
    close() {
      
      this.$emit('close');
    },
    submitForm(){
      const form = {
        ...this.form,
        note: ''
      }
      this.updateOrganization(form);
    }
  },
  watch: {
    organization(newVal) {
      this.form = newVal;
    },
  },
};
</script>
<style scoped lang="scss">
.func_box .lw_toggle+label {
  position: absolute;
  top: 50%;
  right: 13px;
  margin-top: -12px;
}
.func_box .func {
  position: relative;
  padding: 20px 61px 20px 0;
  border-top: 1px solid #eee;
  word-break: keep-all;
}
.func_box .func a.disabled {
  opacity: .4;
  cursor: default;
}
.func_box .func .sub {
  position: relative;
  margin-right: -61px;
  padding-right: 61px;
}
.func_box .func .sub .lw_toggle+label {
  top: 0;
  margin-top: 0;
}
.func_box .func .sub+.sub {
  margin-top: 8px;
}
.func_box .func .sub.disabled p {
  opacity: .4;
}
.func_box .func p {
  margin: 12px 0 0;
}
.func_box .func p .link {
  margin-left: 6px;
}
.func_box .func .link {
  color: #157efb;
  text-decoration: underline;
}
.func_box .func.disabled .hd,.func_box .func.disabled p {
  opacity: .4;
}
.lw_toggle:checked+label:before {
  left: 17px;
}
.lw_toggle+label {
  position: relative;
  display: inline-block;
  font-size: 0;
  color: transparent;
  vertical-align: middle;
  padding: 4px 1px;
  cursor: pointer!important;
}
.lw_toggle+label:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background-color: #fff;
  box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
  border-radius: 100%;
  transition: left .2s;
}
.lw_toggle:checked+label:after {
  background-color: #157efb;
}
.lw_toggle+label:after {
  content: "";
  display: inline-block;
  background-color: #ddd;
  width: 39px;
  height: 16px;
  border-radius: 8px;
  vertical-align: top;
  transition: background-color .2s;
}
.lw_toggle {
  position: absolute;
  clip: rect(0 0 0 0);
}
</style>
