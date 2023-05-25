<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-container">
      <div class="modal-header">
        <h2>Edit member information</h2>
      </div>
      <div class="modal-body">
        <Form @submit="submitForm">
          <div id="modal-root">
            <div class="ly_wrap dimmed en_US">
                <div class="ly_common ly_page ly_fadein ly_member_add freeplan">
                  <div class="scroller">
                    <p class="noti has_msg">
                    <em class="emp">Required field</em>
                    </p>
                    <div class="fm_members">
                      <div class="member">
                        <div class="thumb">
                          <span class="thmb_area">
                            <img src="../assets/img_profile.png" alt="">
                          </span>
                        </div>
                        <div class="infor">
                          <p class="txt">
                            <span>
                            <em class="emp">Required field</em>Name</span>
                          </p>
                          <div class="name_box box has-error">
                            <Field name="name" type="text" class="lw_input is-invalid" placeholder="Name" v-model="form.name" rules="required"/>
                          </div>
                          <ErrorMessage name="name" class="text_error"/>
                        </div>
                      </div>
                      <div class="body">
                        <div class="field minor">
                          <i class="hd">Nickname</i>
                          <div class="box">
                            <Field name="nickname" type="text" class="lw_input" placeholder="Nickname" v-model="form.nickname"/>
                          </div>
                          <ErrorMessage name="nickname" class="text_error"/>
                        </div>
                        <div class="field">
                          <i class="hd">
                          <em class="emp">Required field</em>ID </i>
                          <div class="box">
                            <Field name="login_ID" type="text" class="lw_input" placeholder="ID" v-model="form.login_ID" rules="required"/>
                            
                          </div>
                          <ErrorMessage name="login_ID" class="text_error"/>
                        </div>
                        <div class="field">
                          <i class="hd">
                            <em class="emp">Required field</em>Password 
                          </i>
                          <div class="box">
                            <Field  name="login_PW" type="password" class="lw_input" placeholder="Password" v-model="form.login_PW" rules="required"/>
                            
                          </div>
                          <ErrorMessage name="login_PW" class="text_error"/>
                        </div>
                        <div class="field minor">
                          <i class="hd">
                            <em class="emp">Required field</em>
                            Level
                          </i>
                          <div class="box">
                            <div class="lw_selectbox">
                              <select name="level_ID" id="member_type" class="lw_selectbox_source" v-model="form.level_ID">
                                <option :value="level.id" v-for="level in levels" :key="level.id">{{ level.name }}</option>
                              </select>
                              
                            </div>
                            <ErrorMessage name="level_ID" class="text_error"/>
                          </div>
                        </div>
                        <div class="field minor">
                          <i class="hd">
                            <em class="emp">Required field</em>
                            Position
                          </i>
                          <div class="box">
                            <div class="lw_selectbox">
                              <select name="position_ID" id="member_type" class="lw_selectbox_source" v-model="form.position_ID" rules="required">
                                <option :value="position.id" v-for="position in positions" :key="position.id">{{ position.name }}</option>
                              </select>
                              
                            </div>
                            <ErrorMessage name="position_ID" class="text_error"/>
                          </div>
                        </div>
                        <div class="field">
                          <i class="hd"><em class="emp">Required field</em>Organization</i>
                          <div class="box">
                              <Field name="organization_ID" type="text" class="lw_input" placeholder="Organization" v-model="form.organization_ID"/>
                              <ErrorMessage name="organization_ID" class="text_error"/>
                              <button type="button" class="btn w-10 btnAddOrg ms-3" @click="openModalOrg"></button>
                          </div>
                        </div>
                        <div class="field minor">
                          <i class="hd">Employment type</i>
                          <div class="box">
                            <div class="lw_selectbox">
                              <select name="type_ID" id="member_type" class="lw_selectbox_source" v-model="form.type_ID">
                                <option :value="item.id" v-for="item in types" :key="item.id">{{ item.name }}</option>
                              </select>
                            </div>
                            <ErrorMessage name="type_ID" class="text_error"/>
                          </div>
                        </div>
                          
                        <div class="field minor">
                          <i class="hd">Office</i>
                          <div class="box">
                            <Field name="office" type="text" class="lw_input" placeholder="Office" v-model="form.office"/>
                          </div>
                          <ErrorMessage name="office" class="text_error"/>
                        </div>
                        <div class="field minor">
                          <i class="hd">Mobile phone</i>
                          <div class="box wrap_phone">
                            <div class="inp_phone">
                              <Field name="mobile" type="text" class="lw_input" placeholder="Phone number" v-model="form.mobile"/>
                            </div>
                            <ErrorMessage name="mobile" class="text_error"/>
                          </div>
                        </div>
                        <div class="field minor">
                          <i class="hd">Personal Email</i>
                          <div class="box fm_email custom_type">
                            <Field name="email" type="text" class="lw_input email_id" placeholder="Personal Email"  v-model="form.email"/>
                          </div>
                          <ErrorMessage name="email" class="text_error"/>
                        </div>
                        <div class="field minor">
                          <i class="hd"><em class="emp">Required field</em>Status</i>
                          <div class="box fm_date">
                            <span class="fm_box">
                              <input type="radio" id="status_inuse" name="status" class="lw_radio" checked="" v-model="form.isUse">
                              <label for="status_inuse">In use</label>
                              <input type="radio" id="status_notuse" name="status" class="lw_radio" v-model="form.isUse">
                              <label for="status_notuse">Not in use</label>
                            </span>
                          </div>
                        </div>
                        <div class="field minor">
                          <i class="hd"><em class="emp">Required field</em>Admin</i>
                          <div class="box fm_date">  
                            <span class="fm_box">
                              <input type="radio" id="admin_yes" name="admin" class="lw_radio"  v-model="form.isAdmin">
                              <label for="admin_yes">Yes</label>
                              <input type="radio" id="admin_no" name="admin" class="lw_radio" checked="" v-model="form.isAdmin">
                              <label for="admin_no">No</label>
                            </span>
                          </div>
                        </div>
                        <div class="field minor">
                          <i class="hd">Remark</i>
                          <div class="box">
                            <textarea class="lw_textarea" v-model="form.remark" ></textarea>
                          </div>
                          <ErrorMessage name="number" class="text_error"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="btn_box">
                    <button type="button" class="lw_btn" @click="close">Cancel</button>
                    <button class="lw_btn_point">Add</button>
                  </div>
                </div>
            </div>
          </div>
        </form>
      </div>
      
      <org-modal :title="'Select Organization'" 
      :visible="visibleOrg" 
      @close="closeModalOrg" 
      @selectedOrg="onSelectedOrg">
      </org-modal>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import OrgModal from '@/components/OrgModal.vue';
import { required } from '@vee-validate/rules';
defineRule('required', required);
configure({
  generateMessage: (ctx) => {
    const messages = {
      required: "You can't leave this empty.",
    };
    const message = messages[ctx.rule.name] || `Invalid ${ctx.field} field.`;
    return message;
  },
});

export default {
  name: 'ModalEditForm',
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    OrgModal,
    Form,
    Field,
    ErrorMessage
  },
  data(){
    return {
      form: {
        name: '',
        login_ID: '',
        login_PW: '',
        level_ID: 0,
        position_ID: 0,
        type_ID: 0,
        organization_ID: 0,
        office: '',
        mobile: '',
        email: '',
        nickname: '',
        isUse: true,
        isAdmin: false,
        remark: '',
        note: ''
      },
      visibleOrg: false
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
    submitForm() {
      this.$emit('submit', this.form);
    },
    closeModalOrg() {
      this.visibleOrg = false;
    },
    openModalOrg() {
      this.visibleOrg = true;
    },
    onSelectedOrg(item){
      this.form.organization_ID = item.id;
      this.closeModalOrg();
    }
    
  }
};
</script>
  
<style scoped lang="scss">
.text_error {
  color: red;
  display: block;
}
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
