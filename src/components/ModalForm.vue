<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-container">
      <div class="modal-header">
        <h2>Add members</h2>
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
                              <Field name="organization_ID" type="text" class="lw_input" placeholder="Organization" readonly v-model="form.organization_ID"/>
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
      
      <org-modal :title="'Select Organization'" :visible="visibleOrg" 
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
  name: 'ModalForm',
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
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
      // organization_name: '',
      visibleOrg: false,
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
  
<style lang="scss">
  .text_error {
    color: red;
    display: block;
  }
  /* add */
  .modal1 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .modal-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
    z-index: 11;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h2 {
      margin: 0;
    }
  }
  .modal-close {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    button[type="submit"] {
      margin-top: 20px;
      align-self: flex-end;
    }
  }
  .btnAddMember {
    position: absolute;
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
  .field_group {
    display: flex;
    justify-content: space-between;
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
  .ly_member_add {
    text-align: left;
    width: 700px;
    padding-right: 0;
    padding-left: 0;
    .tit_box {
      padding-right: 0;
    }
    .btn_box {
        .prev {
            float: left;
            button {
                margin-left: -12px;
            }
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
            color: #157efb;
            &:hover {
                background-color: #f2f2f2;
            }
            &:disabled {
                cursor: default;
                opacity: .4;
                &:hover {
                    background-color: #fff;
                }
            }
        }
        .lw_btn_text.hover {
            background-color: #f2f2f2;
        }
        .lw_btn_text.on {
            background-color: #f2f2f2;
        }
        .lw_btn_text.disabled {
            cursor: default;
            opacity: .4;
            &:hover {
                background-color: #fff;
            }
        }
    }
    .alert {
        color: #767676;
    }
    .msg_alert {
        margin: 8px 0 16px;
        font-size: 12px;
        em {
            color: #fd472b;
            font-style: normal;
        }
        strong {
            color: #157efb;
            font-weight: 400;
        }
    }
    .noti {
        margin-top: 3px;
        padding-right: 24px;
        em.emp {
            width: auto;
            background: transparent;
            font-size: 12px;
            color: #157efb;
            font-style: normal;
            &:before {
                content: "";
                display: inline-block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #157efb;
                margin: -1px 6px 0 0;
                vertical-align: middle;
            }
        }
    }
    .member {
        min-height: 80px;
        .thumb {
            position: relative;
            float: left;
            width: 36px;
            height: 36px;
            z-index: 20;
            width: 80px;
            height: 80px;
            margin-right: 20px;
            img {
                width: 100%;
                height: 100%;
                display: block;
                border-radius: 50px;
            }
            .thmb_area {
                &:after {
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
            }
            .f_pic {
                position: absolute;
                right: -4px;
                bottom: -4px;
                z-index: 10;
                width: 28px;
                height: 28px;
                a {
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
                    &:before {
                        content: "";
                        background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                        background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                        background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                        background-size: 1013px 983px;
                        background-position: -993px -563px;
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        margin: 5px;
                    }
                }
            }
            .ly_context {
                top: 88px;
                left: 0;
                z-index: 80;
            }
        }
        .infor {
            color: #222;
            float: none;
            overflow: hidden;
            .txt {
                margin-bottom: -5px;
                font-size: 12px;
                line-height: 16px;
                em.emp {
                    margin: -3px 6px 0 0;
                }
                span {
                    display: inline-block;
                    vertical-align: middle;
                    &:first-child {
                        width: 52%;
                        max-width: 127px;
                        white-space: nowrap;
                    }
                }
            }
        }
        .name_box {
            font-weight: 700;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            margin-top: 8px;
            span {
                margin-left: 6px;
            }
            i {
                display: inline-block;
                margin: -3px 6px 0 0;
                font-size: 0;
                line-height: 0;
                vertical-align: middle;
            }
          //   input {
          //       -webkit-box-flex: 1;
          //       -webkit-flex: 0 1 auto;
          //       -ms-flex: 0 1 auto;
          //       flex: 0 1 auto;
          //       -webkit-box-sizing: border-box;
          //       box-sizing: border-box;
          //       display: block;
          //       margin-left: 9px;
                
          //   }
        }
        &:after {
            content: "";
            display: block;
            height: 0;
            clear: both;
        }
      //   .name_box.reverse {
      //       -webkit-box-orient: horizontal;
      //       -webkit-box-direction: reverse;
      //       -webkit-flex-direction: row-reverse;
      //       -ms-flex-direction: row-reverse;
      //       flex-direction: row-reverse;
      //       input {
      //           width: 100%;
      //           margin: 0 9px 0 0;
      //           &:first-child {
      //               -webkit-box-flex: 1;
      //               -webkit-flex: 0 1 auto;
      //               -ms-flex: 0 1 auto;
      //               flex: 0 1 auto;
      //               -webkit-box-sizing: border-box;
      //               box-sizing: border-box;
      //               display: block;
      //               margin: 0;
      //           }
      //       }
      //   }
        .name_box~.txt {
            padding-top: 10px;
        }
    }
    .fm_members {
        margin-top: 16px;
        overflow: visible;
        em.emp {
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #157efb;
            font-size: 0;
            line-height: 0;
            vertical-align: middle;
        }
    }
    button.generate {
        font-size: 14px;
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 34px;
        border-radius: 2px;
        line-height: 20px;
        text-decoration: none;
        vertical-align: middle;
        padding: 7px 12px 7px;
        cursor: pointer;
        min-width: 54px;
        border: 0;
        color: #222;
        background: transparent;
        padding: 0;
        color: #157efb;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 100%;
        word-wrap: normal;
        &:hover {
            background-color: #f2f2f2;
            background: transparent;
        }
        &:disabled {
            cursor: default;
            opacity: .4;
            &:hover {
                background-color: #fff;
            }
        }
        &:before {
            content: "";
            background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
            background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
            background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
            background-size: 1013px 983px;
            background-position: -438px -220px;
            width: 16px;
            height: 16px;
            display: inline-block;
            margin: -3px 4px 0 0;
            vertical-align: middle;
        }
        &:active {
            background: transparent;
        }
        &:focus {
            background: transparent;
        }
    }
    button.generate.hover {
        background-color: #f2f2f2;
    }
    button.generate.on {
        background-color: #f2f2f2;
    }
    button.generate.disabled {
        cursor: default;
        opacity: .4;
        &:hover {
            background-color: #fff;
        }
    }
    .field {
        position: relative;
        min-height: 34px;
        margin-top: 16px;
        .hd {
            position: absolute;
            top: 8px;
            left: 0;
            font-size: 12px;
            font-style: normal;
            max-width: 90px;
            em.emp {
                margin: -3px 6px 0 0;
            }
            .num {
                color: #157efb;
            }
            .ly_tooltip {
                margin-left: -44px;
                &:before {
                    left: 25px;
                }
            }
        }
        .box {
            margin-left: 100px;
            .value_text {
                margin-right: 8px;
            }
            .btn_chg_id {
                display: inline-block;
                color: #157efb;
                text-decoration: underline;
            }
            .lw_note {
                font-size: 12px;
                color: #767676;
            }
            .srch_member {
                position: relative;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                .lw_input {
                    -webkit-box-flex: 1;
                    -webkit-flex: 1 1 auto;
                    -ms-flex: 1 1 auto;
                    flex: 1 1 auto;
                }
                .btn_contact {
                    font-size: 14px;
                    display: inline-block;
                    -webkit-box-sizing: border-box;
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
                    -webkit-box-flex: 0;
                    -webkit-flex: 0 0 auto;
                    -ms-flex: 0 0 auto;
                    flex: 0 0 auto;
                    margin-left: 8px;
                    &:hover {
                        background-color: #f2f2f2;
                    }
                    &:disabled {
                        cursor: default;
                        opacity: .4;
                        &:hover {
                            background-color: #fff;
                        }
                    }
                }
                .btn_contact.hover {
                    background-color: #f2f2f2;
                }
                .btn_contact.on {
                    background-color: #f2f2f2;
                }
                .btn_contact.disabled {
                    cursor: default;
                    opacity: .4;
                    &:hover {
                        background-color: #fff;
                    }
                }
            }
        }
        .box.justify {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            min-width: 0;
            .value_text {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                max-width: 100%;
                word-wrap: normal;
                -webkit-box-flex: 1;
                -webkit-flex: 1 1 auto;
                -ms-flex: 1 1 auto;
                flex: 1 1 auto;
            }
            .value_text.none_ellipsis {
                white-space: normal;
                text-overflow: clip;
            }
            .aside {
                -webkit-box-flex: 0;
                -webkit-flex: 0 0 auto;
                -ms-flex: 0 0 auto;
                flex: 0 0 auto;
                .lwds_size_small {
                    margin-top: -2px;
                }
            }
        }
        .readonly {
            .lw_input {
                background: #f2f2f2;
                color: #989898;
            }
        }
        .lw_selectbox {
            max-width: 100%;
            overflow: hidden;
            vertical-align: middle;
            width: 100%;
            &+ .lw_selectbox {
              float: right;
              margin-left: 15px;
            }
        }
        .set_item {
            button.add {
                background: transparent;
                border: 0;
                font-size: 0;
                line-height: 0;
                vertical-align: middle;
                position: absolute;
                bottom: 36px;
                right: 0;
                &:before {
                    content: "";
                    display: block;
                    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                    background-size: 1013px 983px;
                    background-position: -676px -909px;
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                }
            }
            button.remove {
                background: transparent;
                border: 0;
                font-size: 0;
                line-height: 0;
                vertical-align: middle;
                margin-top: -2px;
                padding: 5px;
                &:before {
                    content: "";
                    display: block;
                    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                    background-size: 1013px 983px;
                    background-position: -140px -964px;
                    width: 12px;
                    height: 12px;
                    display: inline-block;
                }
            }
            .msg_alert+button.add {
                bottom: 60px;
            }
            button.add.after_msg {
                bottom: 38px;
            }
        }
        .set_item.fm_email {
            .item {
                padding-top: 0;
            }
            button.add {
                bottom: 11px;
            }
            .set_domain+button.add {
                bottom: 1px;
            }
        }
        .set_item.fm_contact {
            .item {
                padding-top: 0;
            }
            button.add {
                bottom: 17px;
            }
        }
        .domain {
            display: block;
            margin: 8px 0 5px;
            font-weight: 400;
        }
        .wrap_phone {
            position: relative;
            .inp_phone {
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                border: 1px solid #ddd;
                border-radius: 2px;
                -align-items: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                .country {
                    margin: 0 24px 0 9px;
                    img {
                        display: block;
                    }
                }
                .lw_input {
                    height: 32px;
                    padding-top: 8px;
                    border: 0;
                }
                button.opt {
                    position: absolute;
                    top: 1px;
                    left: 1px;
                    width: 54px;
                    height: 34px;
                    background: transparent;
                    border: 0;
                    font-size: 0;
                    line-height: 0;
                    -webkit-appearance: none;
                    &:after {
                        content: "";
                        background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                        background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                        background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                        background-size: 1013px 983px;
                        background-position: -612px -964px;
                        width: 8px;
                        height: 8px;
                        display: inline-block;
                        display: block;
                        margin: -2px 0 0 37px;
                    }
                }
            }
            .inp_phone.focus {
                border-color: #157efb;
            }
            .inp_phone.invalid {
                border-color: #fd472b;
            }
            .ly_codelist {
                position: absolute;
                top: 33px;
                right: 0;
                left: 0;
                z-index: 1;
                height: 176px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 2px;
                overflow: auto;
                padding: 8px 0;
                a {
                    display: block;
                    padding: 6px 0 5px;
                    color: #222;
                    &:hover {
                        background: #f1f1f1;
                    }
                }
                img {
                    display: inline-block;
                    margin: -2px 10px 0;
                    vertical-align: middle;
                }
                span {
                    margin-left: 2px;
                }
                .line {
                    height: 1px;
                    margin: 8px 0;
                    overflow: hidden;
                    background: #e5e5e6;
                    font-size: 0;
                    line-height: 0;
                }
            }
        }
        .fm_box {
            margin-top: 10px;
            display: inline-block;
            label {
                margin-right: 16px;
            }
        }
        .fm_contact {
            margin-bottom: -8px;
            .lw_input {
                margin-bottom: 8px;
            }
            .lw_selectbox {
                margin-bottom: 8px;
            }
            span {
                margin: 4px 0;
                padding: 0 8px;
            }
            .email_domain {
                display: none;
            }
            .sns_name {
                display: none;
            }
            .custom_type {
                .email_domain {
                    display: inline-block;
                }
                .sns_name {
                    display: inline-block;
                }
                .lw_selectbox {
                    display: none;
                }
            }
            .item {
                position: relative;
            }
            .item+.item {
                margin-top: 4px;
            }
            .contact {
                width: 181px;
                margin: 0 0 8px;
            }
            span.contact {
                width: 181px;
                display: inline-block;
                color: #222;
                line-height: 34px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                max-width: 100%;
                word-wrap: normal;
                vertical-align: middle;
                em {
                    padding: 0 0 0 8px;
                    color: #767676;
                    font-style: normal;
                }
                span {
                    padding: 0 0 0 8px;
                }
                strong {
                    font-weight: 400;
                }
                i {
                    color: #989898;
                    font-style: normal;
                }
            }
            .member_list {
                position: absolute;
                top: 75px;
                right: 0;
                left: 0;
                z-index: 10;
                background: #fff;
                border: 1px solid #157efb;
                border-radius: 2px;
                height: 126px;
                overflow: auto;
                span {
                    padding: 0;
                }
            }
        }
        .fm_email {
            margin-bottom: -8px;
            .lw_input {
                margin-bottom: 8px;
            }
            .lw_selectbox {
                margin-bottom: 8px;
            }
            span {
                margin: 4px 0;
                padding: 0 8px;
            }
            .email_domain {
                display: none;
                width: 181px;
            }
            .sns_name {
                display: none;
            }
            .custom_type {
                .email_domain {
                    display: inline-block;
                }
                .sns_name {
                    display: inline-block;
                }
                .lw_selectbox {
                    display: none;
                }
            }
            .domain {
                width: 181px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                max-width: 100%;
                word-wrap: normal;
                display: inline-block;
                margin: 0;
                font-weight: 400;
                vertical-align: middle;
            }
            .item {
                .lw_selectbox_label {
                    width: 181px;
                    min-width: 0;
                }
            }
            .msg_alert {
                margin: 0;
                padding-bottom: 8px;
            }
            .readonly {
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    top: 8px;
                    left: -24px;
                    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                    background-size: 1013px 983px;
                    background-position: -967px -317px;
                    width: 16px;
                    height: 16px;
                    display: inline-block;
                }
            }
        }
        .fm_sns {
            margin-bottom: -8px;
            .lw_input {
                margin-bottom: 8px;
            }
            .lw_selectbox {
                margin-bottom: 8px;
            }
            span {
                margin: 4px 0;
                padding: 0 8px;
            }
            .email_domain {
                display: none;
            }
            .sns_name {
                display: none;
            }
            .custom_type {
                .email_domain {
                    display: inline-block;
                }
                .sns_name {
                    display: inline-block;
                }
                .lw_selectbox {
                    display: none;
                }
            }
            .lw_input.sns_name {
                width: 181px;
                display: none;
            }
        }
        .fm_contact.custom_type {
            .email_domain {
                display: inline-block;
            }
            .sns_name {
                display: inline-block;
            }
            .lw_selectbox {
                display: none;
            }
        }
        .fm_email.custom_type {
            .email_domain {
                display: inline-block;
            }
            .sns_name {
                display: inline-block;
            }
            .lw_selectbox {
                display: none;
            }
        }
        .fm_sns.custom_type {
            .email_domain {
                display: inline-block;
            }
            .sns_name {
                display: inline-block;
            }
            .lw_selectbox {
                display: none;
            }
            .lw_input.sns_name {
                display: block;
            }
        }
        .fm_func {
            background: #fafafb;
            border: 1px solid #e5e5e6;
            border-radius: 2px;
            padding-top: 1px;
            .func {
                position: relative;
                margin: 0 16px;
                padding: 13px 0;
            }
            .func+.func {
                border-top: 1px solid #e5e5e6;
            }
            .label {
                display: inline-block;
                i {
                    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                    background-size: 1013px 983px;
                    background-position: -32px -909px;
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    margin: 0 6px 0 0;
                    font-size: 0;
                    line-height: 0;
                    vertical-align: top;
                }
                .num {
                    color: #157efb;
                }
            }
            .lw_toggle+label {
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -12px;
            }
            .msg_alert {
                margin-bottom: 0;
            }
            .has_depth {
                .msg_alert {
                    margin-left: 30px;
                }
            }
        }
        .fm_func+.fm_func {
            margin-top: 10px !important;
        }
        .pw_option {
            background: #fafafb;
            border: 1px solid #e5e5e6;
            border-radius: 2px;
            padding: 2px 16px 14px;
            li {
                margin-top: 8px;
            }
            .txt {
                position: relative;
                margin-left: 22px;
                font-size: 12px;
                color: #767676;
                padding-left: 8px;
                &:before {
                    content: "";
                    position: absolute;
                    top: 7px;
                    left: 0;
                    width: 2px;
                    height: 2px;
                    background-color: #767676;
                    border-radius: 50%;
                }
            }
            .alert {
                margin-top: 6px;
                font-size: 12px;
                color: #fd472b;
            }
            .pw_regis {
                max-width: 224px;
                height: 34px;
                margin-top: 8px;
                padding: 4px 10px 0;
                background: #fff;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                border: 1px solid #ddd;
                border-radius: 2px;
                input {
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    float: left;
                    width: calc(100% - 22px);
                    background: transparent;
                    border: 0;
                    margin: 0;
                    padding: 0;
                    color: #222;
                    line-height: 22px;
                    &::-ms-clear {
                        display: none;
                    }
                    &::-ms-reveal {
                        display: none;
                    }
                }
                .btn_masking {
                    background: transparent;
                    border: 0;
                    font-size: 0;
                    line-height: 0;
                }
            }
            .pw_regis.focus {
                border-color: #157efb;
            }
            .pw_user {
                margin-top: 8px;
                .lw_input {
                    max-width: 224px;
                }
                label {
                    margin-top: 8px;
                    font-size: 12px;
                    color: #767676;
                    line-height: 1.5;
                    &:before {
                        top: 0;
                        -webkit-transform: none;
                        transform: none;
                    }
                }
            }
        }
    }
    .field.custom {
        .lw_input+.lw_input {
            margin-top: 8px;
        }
        .has_label+.has_label {
            margin-top: 8px;
        }
    }
    .field.set_position {
        button.add {
            background: transparent;
            border: 0;
            font-size: 0;
            line-height: 0;
            vertical-align: middle;
            position: absolute;
            bottom: 36px;
            right: 0;
            &:before {
                content: "";
                display: block;
                background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                background-size: 1013px 983px;
                background-position: -676px -909px;
                width: 20px;
                height: 20px;
                display: inline-block;
            }
        }
        button.remove {
            background: transparent;
            border: 0;
            font-size: 0;
            line-height: 0;
            vertical-align: middle;
            margin-top: -2px;
            padding: 5px;
            &:before {
                content: "";
                display: block;
                background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                background-size: 1013px 983px;
                background-position: -140px -964px;
                width: 12px;
                height: 12px;
                display: inline-block;
            }
        }
        .item+.item {
            margin-top: 16px;
        }
        .team {
            position: relative;
        }
        .chk_item {
            position: absolute;
            clip: rect(0,0,0,0);
            width: 1px;
            height: 1px;
            margin: -1px;
            overflow: hidden;
            &:checked+label {
                &:before {
                    background-position: -967px -245px;
                }
            }
        }
        .chk_item+label {
            position: absolute;
            top: 6px;
            left: -25px;
            z-index: 1;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: 3px;
            font-size: 0;
            line-height: 0;
            &:before {
                content: "";
                background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                background-size: 1013px 983px;
                background-position: -967px -221px;
                width: 16px;
                height: 16px;
                display: inline-block;
            }
        }
        .fmbox {
            position: relative;
            font-size: 14px;
            color: #222;
            line-height: 21px;
            padding: 6px 0 7px 10px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            height: 34px;
            border: 1px solid #ddd;
            border-radius: 2px;
            width: 100%;
            -webkit-appearance: none;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            display: block;
            margin: 0 0 8px;
            padding: 0;
            &::-webkit-input-placeholder {
                color: #989898;
                opacity: 1;
            }
            &::-moz-placeholder {
                color: #989898;
                opacity: 1;
            }
            &:-ms-input-placeholder {
                color: #989898;
                opacity: 1;
            }
            &:-moz-placeholder {
                color: #989898;
                opacity: 1;
            }
            &:focus {
                border-color: #157efb;
                outline: none;
            }
            &:disabled {
                opacity: .4;
                -webkit-text-fill-color: #222;
                background-color: #f8f8f8;
            }
            input {
                background: transparent;
                border: 0;
                width: 100%;
                display: block;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                padding: 6px 10px 7px;
                line-height: 1.5;
            }
            span {
                display: block;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                padding: 6px 10px 7px;
                line-height: 1.5;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                max-width: 100%;
                word-wrap: normal;
                cursor: pointer;
            }
        }
        .fmbox.invalid {
            border-color: #fd472b;
        }
        .fmbox.valid {
            background-color: #e7f2fe;
        }
        .fmbox.focus {
            border-color: #157efb;
            outline: none;
        }
        .fmbox.disabled {
            opacity: .4;
            -webkit-text-fill-color: #222;
            background-color: #f8f8f8;
        }
        .fmbox[disabled] {
            opacity: .4;
            -webkit-text-fill-color: #222;
            background-color: #f8f8f8;
        }
        .chk_leader {
            clear: both;
            margin-top: 6px;
        }
    }
    .field_box {
        position: relative;
        margin: 24px -16px;
        padding: 19px 16px 16px;
        background: #fafafb;
        -webkit-box-shadow: 0 1px 0 0 #eee,inset 0 1px 0 0 #eee;
        box-shadow: 0 1px 0 0 #eee,inset 0 1px 0 0 #eee;
        .add_field {
            position: static;
            float: right;
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 27px;
            z-index: 1;
            background: transparent;
            border: 0;
            text-decoration: underline;
            color: #157efb;
        }
        .remove_field {
            position: static;
            float: right;
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 27px;
            z-index: 1;
            background: transparent;
            border: 0;
            text-decoration: underline;
            color: #fd472b;
        }
        .field {
            margin: 8px 0 0;
            clear: both;
        }
    }
      .field_box+.field_box {
          margin-top: -24px;
      }
      .txtbox {
          margin-bottom: 14px;
          .hd {
              top: 3px;
          }
      }
      .fm_members.group_box {
          .member {
              .name_box {
                  input {
                      &:first-child {
                          width: 100%;
                          max-width: none;
                      }
                      width: 100%;
                      max-width: none;
                  }
              }
              .txt {
                  margin-top: 16px;
                  &:first-child {
                      margin-top: 0;
                  }
              }
          }
          .field {
              .func {
                  .lw_input {
                      margin-right: 8px;
                  }
              }
              .domain {
                  display: inline-block;
                  vertical-align: middle;
              }
              .hd.has_txt {
                  white-space: normal;
                  overflow: visible;
              }
          }
      }
      .fm_members.team_box {
          .member {
              .name_box {
                  input {
                      &:first-child {
                          width: 100%;
                          max-width: none;
                      }
                  }
              }
          }
          .field {
              .func {
                  .lw_input {
                      margin-right: 8px;
                  }
              }
              .domain {
                  display: inline-block;
                  vertical-align: middle;
              }
              .hd.has_txt {
                  white-space: normal;
                  overflow: visible;
              }
          }
      }
      .fm_members.sharegroup_box {
          margin-top: 0;
          .field.txt_type {
              margin-top: 10px;
              .hd {
                  top: 4px;
              }
          }
          .fm_memo {
              textarea {
                  width: 100%;
                  height: 68px;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  border: 1px solid #ddd;
                  padding: 7px 8px;
                  resize: none;
                  color: #222;
                  line-height: 1.5;
              }
          }
          .fm_type {
              min-height: 23px;
              span+span {
                  margin-left: 35px;
              }
          }
          .srch_member {
              .desc {
                  padding: 4px 0 0;
                  font-size: 12px;
                  color: #767676;
              }
          }
      }
      .fm_members.share_box {
          .member {
              .custom_box {
                  position: relative;
                  .name_box {
                      width: calc(100% - 35px);
                  }
              }
              button.add {
                  background: transparent;
                  border: 0;
                  font-size: 0;
                  line-height: 0;
                  position: absolute;
                  bottom: 0;
                  right: 0;
                  &:before {
                      content: "";
                      background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                      background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-size: 1013px 983px;
                      background-position: -676px -909px;
                      width: 20px;
                      height: 20px;
                      display: inline-block;
                  }
              }
              button.remove {
                  background: transparent;
                  border: 0;
                  font-size: 0;
                  line-height: 0;
                  margin-top: -4px;
                  padding: 5px;
                  &:before {
                      content: "";
                      background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                      background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-size: 1013px 983px;
                      background-position: -140px -964px;
                      width: 12px;
                      height: 12px;
                      display: inline-block;
                  }
              }
              .name_box {
                  display: block;
                  &:first-child {
                      margin-top: 0;
                  }
              }
          }
      }
      button.opt_toggle {
          font-size: 14px;
          display: inline-block;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          height: 34px;
          border-radius: 2px;
          line-height: 20px;
          text-decoration: none;
          vertical-align: middle;
          white-space: nowrap;
          padding: 7px 12px 7px;
          cursor: pointer;
          min-width: 54px;
          border: 0;
          background: transparent;
          color: #222;
          display: block;
          margin: 16px 0 16px;
          width: 100%;
          padding: 0;
          color: #157efb;
          text-align: center;
          &:hover {
              background-color: #f2f2f2;
          }
          &:disabled {
              cursor: default;
              opacity: .4;
              &:hover {
                  background-color: #fff;
              }
          }
          &:after {
              content: "";
              background-position: -420px -964px;
              margin: -2px 0 0 6px;
              background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
              background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
              background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
              background-size: 1013px 983px;
              width: 8px;
              height: 8px;
              display: inline-block;
          }
      }
      button.opt_toggle.hover {
          background-color: #f2f2f2;
      }
      button.opt_toggle.on {
          background-color: #f2f2f2;
      }
      button.opt_toggle.disabled {
          cursor: default;
          opacity: .4;
          &:hover {
              background-color: #fff;
          }
      }
      button.opt_toggle.fold {
          &:after {
              background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
              background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
              background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
              background-size: 1013px 983px;
              width: 8px;
              height: 8px;
              display: inline-block;
              background-position: -948px -937px;
          }
      }
      .ocr_cover {
          padding: 24px 0 18px;
          .btn_ocr {
              width: 100%;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              border: 1px solid #157efb;
              background-color: transparent;
              font-size: 14px;
              color: #157efb;
              line-height: 20px;
              padding: 10px;
              border-radius: 2px;
              &:before {
                  content: "";
                  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                  background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                  background-size: 1013px 983px;
                  background-position: -993px -539px;
                  width: 16px;
                  height: 16px;
                  display: inline-block;
                  vertical-align: middle;
                  margin: -2px 8px 0 0;
              }
          }
      }
  }
  .ly_member_modify {
      width: 700px;
      padding-right: 0;
      padding-left: 0;
      .tit_box {
          padding-right: 0;
      }
      .btn_box {
          .prev {
              float: left;
              button {
                  margin-left: -12px;
              }
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
              color: #157efb;
              &:hover {
                  background-color: #f2f2f2;
              }
              &:disabled {
                  cursor: default;
                  opacity: .4;
                  &:hover {
                      background-color: #fff;
                  }
              }
          }
          .lw_btn_text.hover {
              background-color: #f2f2f2;
          }
          .lw_btn_text.on {
              background-color: #f2f2f2;
          }
          .lw_btn_text.disabled {
              cursor: default;
              opacity: .4;
              &:hover {
                  background-color: #fff;
              }
          }
      }
      .alert {
          color: #767676;
      }
      .msg_alert {
          margin: 8px 0 16px;
          font-size: 12px;
          em {
              color: #fd472b;
              font-style: normal;
          }
          strong {
              color: #157efb;
              font-weight: 400;
          }
      }
      .noti {
          margin-top: 3px;
          padding-right: 24px;
          em.emp {
              width: auto;
              background: transparent;
              font-size: 12px;
              color: #157efb;
              font-style: normal;
              &:before {
                  content: "";
                  display: inline-block;
                  width: 6px;
                  height: 6px;
                  border-radius: 50%;
                  background: #157efb;
                  margin: -1px 6px 0 0;
                  vertical-align: middle;
              }
          }
      }
      .member {
          min-height: 80px;
          .thumb {
              position: relative;
              float: left;
              width: 36px;
              height: 36px;
              z-index: 20;
              width: 80px;
              height: 80px;
              margin-right: 20px;
              img {
                  width: 100%;
                  height: 100%;
                  display: block;
                  border-radius: 50px;
              }
              .thmb_area {
                  &:after {
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
              }
              .f_pic {
                  position: absolute;
                  right: -4px;
                  bottom: -4px;
                  z-index: 10;
                  width: 28px;
                  height: 28px;
                  a {
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
                      &:before {
                          content: "";
                          background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                          background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                          background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                          background-size: 1013px 983px;
                          background-position: -993px -563px;
                          width: 16px;
                          height: 16px;
                          display: inline-block;
                          margin: 5px;
                      }
                  }
              }
              .ly_context {
                  top: 88px;
                  left: 0;
                  z-index: 80;
              }
          }
          .infor {
              color: #222;
              float: none;
              overflow: hidden;
              .txt {
                  margin-bottom: -5px;
                  font-size: 12px;
                  line-height: 16px;
                  em.emp {
                      margin: -3px 6px 0 0;
                  }
                  span {
                      display: inline-block;
                      vertical-align: middle;
                      &:first-child {
                          width: 52%;
                          max-width: 127px;
                          white-space: nowrap;
                      }
                  }
              }
          }
          .name_box {
              font-weight: 700;
              display: -webkit-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              margin-top: 8px;
              span {
                  margin-left: 6px;
              }
              i {
                  display: inline-block;
                  margin: -3px 6px 0 0;
                  font-size: 0;
                  line-height: 0;
                  vertical-align: middle;
              }
              input {
                  -webkit-box-flex: 1;
                  -webkit-flex: 0 1 auto;
                  -ms-flex: 0 1 auto;
                  flex: 0 1 auto;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  display: block;
                  margin-left: 9px;
                  &:first-child {
                      width: 49%;
                      max-width: 118px;
                      margin-left: 0;
                      -webkit-box-flex: 0;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                  }
              }
          }
          &:after {
              content: "";
              display: block;
              height: 0;
              clear: both;
          }
          .name_box.reverse {
              -webkit-box-orient: horizontal;
              -webkit-box-direction: reverse;
              -webkit-flex-direction: row-reverse;
              -ms-flex-direction: row-reverse;
              flex-direction: row-reverse;
              input {
                  width: 100%;
                  margin: 0 9px 0 0;
                  &:first-child {
                      -webkit-box-flex: 1;
                      -webkit-flex: 0 1 auto;
                      -ms-flex: 0 1 auto;
                      flex: 0 1 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                      margin: 0;
                  }
              }
          }
          .name_box~.txt {
              padding-top: 10px;
          }
      }
      .fm_members {
          margin-top: 16px;
          overflow: visible;
          em.emp {
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #157efb;
              font-size: 0;
              line-height: 0;
              vertical-align: middle;
          }
      }
      button.generate {
          font-size: 14px;
          display: inline-block;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          height: 34px;
          border-radius: 2px;
          line-height: 20px;
          text-decoration: none;
          vertical-align: middle;
          padding: 7px 12px 7px;
          cursor: pointer;
          min-width: 54px;
          border: 0;
          color: #222;
          background: transparent;
          padding: 0;
          color: #157efb;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 100%;
          word-wrap: normal;
          &:hover {
              background-color: #f2f2f2;
              background: transparent;
          }
          &:disabled {
              cursor: default;
              opacity: .4;
              &:hover {
                  background-color: #fff;
              }
          }
          &:before {
              content: "";
              background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
              background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
              background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
              background-size: 1013px 983px;
              background-position: -438px -220px;
              width: 16px;
              height: 16px;
              display: inline-block;
              margin: -3px 4px 0 0;
              vertical-align: middle;
          }
          &:active {
              background: transparent;
          }
          &:focus {
              background: transparent;
          }
      }
      button.generate.hover {
          background-color: #f2f2f2;
      }
      button.generate.on {
          background-color: #f2f2f2;
      }
      button.generate.disabled {
          cursor: default;
          opacity: .4;
          &:hover {
              background-color: #fff;
          }
      }
      .field {
          position: relative;
          min-height: 34px;
          margin-top: 16px;
          .hd {
              position: absolute;
              top: 8px;
              left: 0;
              font-size: 12px;
              font-style: normal;
              max-width: 90px;
              em.emp {
                  margin: -3px 6px 0 0;
              }
              .num {
                  color: #157efb;
              }
              .ly_tooltip {
                  margin-left: -44px;
                  &:before {
                      left: 25px;
                  }
              }
          }
          .box {
              margin-left: 100px;
              .value_text {
                  margin-right: 8px;
              }
              .btn_chg_id {
                  display: inline-block;
                  color: #157efb;
                  text-decoration: underline;
              }
              .lw_note {
                  font-size: 12px;
                  color: #767676;
              }
              .srch_member {
                  position: relative;
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  .lw_input {
                      -webkit-box-flex: 1;
                      -webkit-flex: 1 1 auto;
                      -ms-flex: 1 1 auto;
                      flex: 1 1 auto;
                  }
                  .btn_contact {
                      font-size: 14px;
                      display: inline-block;
                      -webkit-box-sizing: border-box;
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
                      -webkit-box-flex: 0;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      margin-left: 8px;
                      &:hover {
                          background-color: #f2f2f2;
                      }
                      &:disabled {
                          cursor: default;
                          opacity: .4;
                          &:hover {
                              background-color: #fff;
                          }
                      }
                  }
                  .btn_contact.hover {
                      background-color: #f2f2f2;
                  }
                  .btn_contact.on {
                      background-color: #f2f2f2;
                  }
                  .btn_contact.disabled {
                      cursor: default;
                      opacity: .4;
                      &:hover {
                          background-color: #fff;
                      }
                  }
              }
          }
          .box.justify {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              min-width: 0;
              .value_text {
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  max-width: 100%;
                  word-wrap: normal;
                  -webkit-box-flex: 1;
                  -webkit-flex: 1 1 auto;
                  -ms-flex: 1 1 auto;
                  flex: 1 1 auto;
              }
              .value_text.none_ellipsis {
                  white-space: normal;
                  text-overflow: clip;
              }
              .aside {
                  -webkit-box-flex: 0;
                  -webkit-flex: 0 0 auto;
                  -ms-flex: 0 0 auto;
                  flex: 0 0 auto;
                  .lwds_size_small {
                      margin-top: -2px;
                  }
              }
          }
          .readonly {
              .lw_input {
                  background: #f2f2f2;
                  color: #989898;
              }
          }
          .lw_selectbox {
              max-width: 100%;
              overflow: hidden;
              vertical-align: middle;
              .lw_selectbox_label {
                  width: 181px;
              }
          }
          .set_item {
              button.add {
                  background: transparent;
                  border: 0;
                  font-size: 0;
                  line-height: 0;
                  vertical-align: middle;
                  position: absolute;
                  bottom: 36px;
                  right: 0;
                  &:before {
                      content: "";
                      display: block;
                      background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                      background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-size: 1013px 983px;
                      background-position: -676px -909px;
                      width: 20px;
                      height: 20px;
                      display: inline-block;
                  }
              }
              button.remove {
                  background: transparent;
                  border: 0;
                  font-size: 0;
                  line-height: 0;
                  vertical-align: middle;
                  margin-top: -2px;
                  padding: 5px;
                  &:before {
                      content: "";
                      display: block;
                      background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                      background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-size: 1013px 983px;
                      background-position: -140px -964px;
                      width: 12px;
                      height: 12px;
                      display: inline-block;
                  }
              }
              .msg_alert+button.add {
                  bottom: 60px;
              }
              button.add.after_msg {
                  bottom: 38px;
              }
          }
          .set_item.fm_email {
              .item {
                  padding-top: 0;
              }
              button.add {
                  bottom: 11px;
              }
              .set_domain+button.add {
                  bottom: 1px;
              }
          }
          .set_item.fm_contact {
              .item {
                  padding-top: 0;
              }
              button.add {
                  bottom: 17px;
              }
          }
          .domain {
              display: block;
              margin: 8px 0 5px;
              font-weight: 400;
          }
          .wrap_phone {
              position: relative;
              .inp_phone {
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  border: 1px solid #ddd;
                  border-radius: 2px;
                  -align-items: center;
                  -ms-flex-align: center;
                  -webkit-align-items: center;
                  .country {
                      margin: 0 24px 0 9px;
                      img {
                          display: block;
                      }
                  }
                  .lw_input {
                      height: 32px;
                      padding-top: 8px;
                      border: 0;
                  }
                  button.opt {
                      position: absolute;
                      top: 1px;
                      left: 1px;
                      width: 54px;
                      height: 34px;
                      background: transparent;
                      border: 0;
                      font-size: 0;
                      line-height: 0;
                      -webkit-appearance: none;
                      &:after {
                          content: "";
                          background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                          background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                          background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                          background-size: 1013px 983px;
                          background-position: -612px -964px;
                          width: 8px;
                          height: 8px;
                          display: inline-block;
                          display: block;
                          margin: -2px 0 0 37px;
                      }
                  }
              }
              .inp_phone.focus {
                  border-color: #157efb;
              }
              .inp_phone.invalid {
                  border-color: #fd472b;
              }
              .ly_codelist {
                  position: absolute;
                  top: 33px;
                  right: 0;
                  left: 0;
                  z-index: 1;
                  height: 176px;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  background: #fff;
                  border: 1px solid #ddd;
                  border-radius: 2px;
                  overflow: auto;
                  padding: 8px 0;
                  a {
                      display: block;
                      padding: 6px 0 5px;
                      color: #222;
                      &:hover {
                          background: #f1f1f1;
                      }
                  }
                  img {
                      display: inline-block;
                      margin: -2px 10px 0;
                      vertical-align: middle;
                  }
                  span {
                      margin-left: 2px;
                  }
                  .line {
                      height: 1px;
                      margin: 8px 0;
                      overflow: hidden;
                      background: #e5e5e6;
                      font-size: 0;
                      line-height: 0;
                  }
              }
          }
          .fm_box {
              margin-top: 10px;
              display: inline-block;
              label {
                  margin-right: 16px;
              }
          }
          .fm_contact {
              margin-bottom: -8px;
              .lw_input {
                  margin-bottom: 8px;
              }
              .lw_selectbox {
                  margin-bottom: 8px;
              }
              span {
                  margin: 4px 0;
                  padding: 0 8px;
              }
              .email_domain {
                  display: none;
              }
              .sns_name {
                  display: none;
              }
              .custom_type {
                  .email_domain {
                      display: inline-block;
                  }
                  .sns_name {
                      display: inline-block;
                  }
                  .lw_selectbox {
                      display: none;
                  }
              }
              .item {
                  position: relative;
              }
              .item+.item {
                  margin-top: 4px;
              }
              .contact {
                  width: 181px;
                  margin: 0 0 8px;
              }
              span.contact {
                  width: 181px;
                  display: inline-block;
                  color: #222;
                  line-height: 34px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  max-width: 100%;
                  word-wrap: normal;
                  vertical-align: middle;
                  em {
                      padding: 0 0 0 8px;
                      color: #767676;
                      font-style: normal;
                  }
                  span {
                      padding: 0 0 0 8px;
                  }
                  strong {
                      font-weight: 400;
                  }
                  i {
                      color: #989898;
                      font-style: normal;
                  }
              }
              .member_list {
                  position: absolute;
                  top: 75px;
                  right: 0;
                  left: 0;
                  z-index: 10;
                  background: #fff;
                  border: 1px solid #157efb;
                  border-radius: 2px;
                  height: 126px;
                  overflow: auto;
                  span {
                      padding: 0;
                  }
              }
          }
          .fm_email {
              margin-bottom: -8px;
              .lw_input {
                  margin-bottom: 8px;
              }
              .lw_selectbox {
                  margin-bottom: 8px;
              }
              span {
                  margin: 4px 0;
                  padding: 0 8px;
              }
              .email_domain {
                  display: none;
                  width: 181px;
              }
              .sns_name {
                  display: none;
              }
              .custom_type {
                  .email_domain {
                      display: inline-block;
                  }
                  .sns_name {
                      display: inline-block;
                  }
                  .lw_selectbox {
                      display: none;
                  }
              }
              .domain {
                  width: 181px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  max-width: 100%;
                  word-wrap: normal;
                  display: inline-block;
                  margin: 0;
                  font-weight: 400;
                  vertical-align: middle;
              }
              .email_id {
                  width: 181px;
              }
              .item {
                  .lw_selectbox_label {
                      width: 181px;
                      min-width: 0;
                  }
              }
              .msg_alert {
                  margin: 0;
                  padding-bottom: 8px;
              }
              .readonly {
                  position: relative;
                  &:before {
                      content: "";
                      position: absolute;
                      top: 8px;
                      left: -24px;
                      background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                      background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-size: 1013px 983px;
                      background-position: -967px -317px;
                      width: 16px;
                      height: 16px;
                      display: inline-block;
                  }
              }
          }
          .fm_sns {
              margin-bottom: -8px;
              .lw_input {
                  margin-bottom: 8px;
              }
              .lw_selectbox {
                  margin-bottom: 8px;
              }
              span {
                  margin: 4px 0;
                  padding: 0 8px;
              }
              .email_domain {
                  display: none;
              }
              .sns_name {
                  display: none;
              }
              .custom_type {
                  .email_domain {
                      display: inline-block;
                  }
                  .sns_name {
                      display: inline-block;
                  }
                  .lw_selectbox {
                      display: none;
                  }
              }
              .lw_input.sns_name {
                  width: 181px;
                  display: none;
              }
          }
          .fm_contact.custom_type {
              .email_domain {
                  display: inline-block;
              }
              .sns_name {
                  display: inline-block;
              }
              .lw_selectbox {
                  display: none;
              }
          }
          .fm_email.custom_type {
              .email_domain {
                  display: inline-block;
              }
              .sns_name {
                  display: inline-block;
              }
              .lw_selectbox {
                  display: none;
              }
          }
          .fm_sns.custom_type {
              .email_domain {
                  display: inline-block;
              }
              .sns_name {
                  display: inline-block;
              }
              .lw_selectbox {
                  display: none;
              }
              .lw_input.sns_name {
                  display: block;
              }
          }
          .fm_func {
              background: #fafafb;
              border: 1px solid #e5e5e6;
              border-radius: 2px;
              padding-top: 1px;
              .func {
                  position: relative;
                  margin: 0 16px;
                  padding: 13px 0;
              }
              .func+.func {
                  border-top: 1px solid #e5e5e6;
              }
              .label {
                  display: inline-block;
                  i {
                      background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                      background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-size: 1013px 983px;
                      background-position: -32px -909px;
                      width: 20px;
                      height: 20px;
                      display: inline-block;
                      margin: 0 6px 0 0;
                      font-size: 0;
                      line-height: 0;
                      vertical-align: top;
                  }
                  .num {
                      color: #157efb;
                  }
              }
              .lw_toggle+label {
                  position: absolute;
                  top: 50%;
                  right: 0;
                  margin-top: -12px;
              }
              .msg_alert {
                  margin-bottom: 0;
              }
              .has_depth {
                  .msg_alert {
                      margin-left: 30px;
                  }
              }
          }
          .fm_func+.fm_func {
              margin-top: 10px !important;
          }
          .pw_option {
              background: #fafafb;
              border: 1px solid #e5e5e6;
              border-radius: 2px;
              padding: 2px 16px 14px;
              li {
                  margin-top: 8px;
              }
              .txt {
                  position: relative;
                  margin-left: 22px;
                  font-size: 12px;
                  color: #767676;
                  padding-left: 8px;
                  &:before {
                      content: "";
                      position: absolute;
                      top: 7px;
                      left: 0;
                      width: 2px;
                      height: 2px;
                      background-color: #767676;
                      border-radius: 50%;
                  }
              }
              .alert {
                  margin-top: 6px;
                  font-size: 12px;
                  color: #fd472b;
              }
              .pw_regis {
                  max-width: 224px;
                  height: 34px;
                  margin-top: 8px;
                  padding: 4px 10px 0;
                  background: #fff;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  border: 1px solid #ddd;
                  border-radius: 2px;
                  input {
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      float: left;
                      width: calc(100% - 22px);
                      background: transparent;
                      border: 0;
                      margin: 0;
                      padding: 0;
                      color: #222;
                      line-height: 22px;
                      &::-ms-clear {
                          display: none;
                      }
                      &::-ms-reveal {
                          display: none;
                      }
                  }
                  .btn_masking {
                      background: transparent;
                      border: 0;
                      font-size: 0;
                      line-height: 0;
                  }
              }
              .pw_regis.focus {
                  border-color: #157efb;
              }
              .pw_user {
                  margin-top: 8px;
                  .lw_input {
                      max-width: 224px;
                  }
                  label {
                      margin-top: 8px;
                      font-size: 12px;
                      color: #767676;
                      line-height: 1.5;
                      &:before {
                          top: 0;
                          -webkit-transform: none;
                          transform: none;
                      }
                  }
              }
          }
      }
      .field.custom {
          .lw_input+.lw_input {
              margin-top: 8px;
          }
          .has_label+.has_label {
              margin-top: 8px;
          }
      }
      .field.set_position {
          button.add {
              background: transparent;
              border: 0;
              font-size: 0;
              line-height: 0;
              vertical-align: middle;
              position: absolute;
              bottom: 36px;
              right: 0;
              &:before {
                  content: "";
                  display: block;
                  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                  background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                  background-size: 1013px 983px;
                  background-position: -676px -909px;
                  width: 20px;
                  height: 20px;
                  display: inline-block;
              }
          }
          button.remove {
              background: transparent;
              border: 0;
              font-size: 0;
              line-height: 0;
              vertical-align: middle;
              margin-top: -2px;
              padding: 5px;
              &:before {
                  content: "";
                  display: block;
                  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                  background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                  background-size: 1013px 983px;
                  background-position: -140px -964px;
                  width: 12px;
                  height: 12px;
                  display: inline-block;
              }
          }
          .item+.item {
              margin-top: 16px;
          }
          .team {
              position: relative;
          }
          .chk_item {
              position: absolute;
              clip: rect(0,0,0,0);
              width: 1px;
              height: 1px;
              margin: -1px;
              overflow: hidden;
              &:checked+label {
                  &:before {
                      background-position: -967px -245px;
                  }
              }
          }
          .chk_item+label {
              position: absolute;
              top: 6px;
              left: -25px;
              z-index: 1;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              padding: 3px;
              font-size: 0;
              line-height: 0;
              &:before {
                  content: "";
                  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                  background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                  background-size: 1013px 983px;
                  background-position: -967px -221px;
                  width: 16px;
                  height: 16px;
                  display: inline-block;
              }
          }
          .fmbox {
              position: relative;
              font-size: 14px;
              color: #222;
              line-height: 21px;
              padding: 6px 0 7px 10px;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              height: 34px;
              border: 1px solid #ddd;
              border-radius: 2px;
              width: 100%;
              -webkit-appearance: none;
              -webkit-transform: translateZ(0);
              transform: translateZ(0);
              display: block;
              margin: 0 0 8px;
              padding: 0;
              &::-webkit-input-placeholder {
                  color: #989898;
                  opacity: 1;
              }
              &::-moz-placeholder {
                  color: #989898;
                  opacity: 1;
              }
              &:-ms-input-placeholder {
                  color: #989898;
                  opacity: 1;
              }
              &:-moz-placeholder {
                  color: #989898;
                  opacity: 1;
              }
              &:focus {
                  border-color: #157efb;
                  outline: none;
              }
              &:disabled {
                  opacity: .4;
                  -webkit-text-fill-color: #222;
                  background-color: #f8f8f8;
              }
              input {
                  background: transparent;
                  border: 0;
                  width: 100%;
                  display: block;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  padding: 6px 10px 7px;
                  line-height: 1.5;
              }
              span {
                  display: block;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  padding: 6px 10px 7px;
                  line-height: 1.5;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  max-width: 100%;
                  word-wrap: normal;
                  cursor: pointer;
              }
          }
          .fmbox.invalid {
              border-color: #fd472b;
          }
          .fmbox.valid {
              background-color: #e7f2fe;
          }
          .fmbox.focus {
              border-color: #157efb;
              outline: none;
          }
          .fmbox.disabled {
              opacity: .4;
              -webkit-text-fill-color: #222;
              background-color: #f8f8f8;
          }
          .fmbox[disabled] {
              opacity: .4;
              -webkit-text-fill-color: #222;
              background-color: #f8f8f8;
          }
          .chk_leader {
              clear: both;
              margin-top: 6px;
          }
      }
      .field_box {
          position: relative;
          margin: 24px -16px;
          padding: 19px 16px 16px;
          background: #fafafb;
          -webkit-box-shadow: 0 1px 0 0 #eee,inset 0 1px 0 0 #eee;
          box-shadow: 0 1px 0 0 #eee,inset 0 1px 0 0 #eee;
          .add_field {
              position: static;
              float: right;
              font-size: 14px;
              line-height: 20px;
              margin-bottom: 27px;
              z-index: 1;
              background: transparent;
              border: 0;
              text-decoration: underline;
              color: #157efb;
          }
          .remove_field {
              position: static;
              float: right;
              font-size: 14px;
              line-height: 20px;
              margin-bottom: 27px;
              z-index: 1;
              background: transparent;
              border: 0;
              text-decoration: underline;
              color: #fd472b;
          }
          .field {
              margin: 8px 0 0;
              clear: both;
          }
      }
      .field_box+.field_box {
          margin-top: -24px;
      }
      .txtbox {
          margin-bottom: 14px;
          .hd {
              top: 3px;
          }
      }
      .fm_members.group_box {
          .member {
              .name_box {
                  input {
                      &:first-child {
                          width: 100%;
                          max-width: none;
                      }
                      width: 100%;
                      max-width: none;
                  }
              }
              .txt {
                  margin-top: 16px;
                  &:first-child {
                      margin-top: 0;
                  }
              }
          }
          .field {
              .func {
                  .lw_input {
                      margin-right: 8px;
                  }
              }
              .domain {
                  display: inline-block;
                  vertical-align: middle;
              }
              .hd.has_txt {
                  white-space: normal;
                  overflow: visible;
              }
          }
      }
      .fm_members.team_box {
          .member {
              .name_box {
                  input {
                      &:first-child {
                          width: 100%;
                          max-width: none;
                      }
                  }
              }
          }
          .field {
              .func {
                  .lw_input {
                      margin-right: 8px;
                  }
              }
              .domain {
                  display: inline-block;
                  vertical-align: middle;
              }
              .hd.has_txt {
                  white-space: normal;
                  overflow: visible;
              }
          }
      }
      .fm_members.sharegroup_box {
          margin-top: 0;
          .field.txt_type {
              margin-top: 10px;
              .hd {
                  top: 4px;
              }
          }
          .fm_memo {
              textarea {
                  width: 100%;
                  height: 68px;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  border: 1px solid #ddd;
                  padding: 7px 8px;
                  resize: none;
                  color: #222;
                  line-height: 1.5;
              }
          }
          .fm_type {
              min-height: 23px;
              span+span {
                  margin-left: 35px;
              }
          }
          .srch_member {
              .desc {
                  padding: 4px 0 0;
                  font-size: 12px;
                  color: #767676;
              }
          }
      }
      .fm_members.share_box {
          .member {
              .custom_box {
                  position: relative;
                  .name_box {
                      width: calc(100% - 35px);
                  }
              }
              button.add {
                  background: transparent;
                  border: 0;
                  font-size: 0;
                  line-height: 0;
                  position: absolute;
                  bottom: 0;
                  right: 0;
                  &:before {
                      content: "";
                      background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                      background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-size: 1013px 983px;
                      background-position: -676px -909px;
                      width: 20px;
                      height: 20px;
                      display: inline-block;
                  }
              }
              button.remove {
                  background: transparent;
                  border: 0;
                  font-size: 0;
                  line-height: 0;
                  margin-top: -4px;
                  padding: 5px;
                  &:before {
                      content: "";
                      background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                      background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                      background-size: 1013px 983px;
                      background-position: -140px -964px;
                      width: 12px;
                      height: 12px;
                      display: inline-block;
                  }
              }
              .name_box {
                  display: block;
                  &:first-child {
                      margin-top: 0;
                  }
              }
          }
      }
      button.opt_toggle {
          font-size: 14px;
          display: inline-block;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          height: 34px;
          border-radius: 2px;
          line-height: 20px;
          text-decoration: none;
          vertical-align: middle;
          white-space: nowrap;
          padding: 7px 12px 7px;
          cursor: pointer;
          min-width: 54px;
          border: 0;
          background: transparent;
          color: #222;
          display: block;
          margin: 16px 0 16px;
          width: 100%;
          padding: 0;
          color: #157efb;
          text-align: center;
          &:hover {
              background-color: #f2f2f2;
          }
          &:disabled {
              cursor: default;
              opacity: .4;
              &:hover {
                  background-color: #fff;
              }
          }
          &:after {
              content: "";
              background-position: -420px -964px;
              margin: -2px 0 0 6px;
              background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
              background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
              background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
              background-size: 1013px 983px;
              width: 8px;
              height: 8px;
              display: inline-block;
          }
      }
      button.opt_toggle.hover {
          background-color: #f2f2f2;
      }
      button.opt_toggle.on {
          background-color: #f2f2f2;
      }
      button.opt_toggle.disabled {
          cursor: default;
          opacity: .4;
          &:hover {
              background-color: #fff;
          }
      }
      button.opt_toggle.fold {
          &:after {
              background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
              background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
              background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
              background-size: 1013px 983px;
              width: 8px;
              height: 8px;
              display: inline-block;
              background-position: -948px -937px;
          }
      }
      .ocr_cover {
          padding: 24px 0 18px;
          .btn_ocr {
              width: 100%;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              border: 1px solid #157efb;
              background-color: transparent;
              font-size: 14px;
              color: #157efb;
              line-height: 20px;
              padding: 10px;
              border-radius: 2px;
              &:before {
                  content: "";
                  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
                  background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
                  background-size: 1013px 983px;
                  background-position: -993px -539px;
                  width: 16px;
                  height: 16px;
                  display: inline-block;
                  vertical-align: middle;
                  margin: -2px 8px 0 0;
              }
          }
      }
  }
  @media screen and (max-width: 767px) {
      .ly_member_add {
          width: auto;
          max-width: none;
          .scroller {
              padding: 1px 16px 24px;
              padding: 0 16px;
              .tab_menu {
                  margin-left: -16px;
                  margin-right: -16px;
              }
              .noti {
                  .alert {
                      font-size: 14px;
                  }
                  em.emp {
                      font-size: 14px;
                  }
              }
          }
          .noti {
              text-align: right;
              text-align: left;
              .alert {
                  float: left;
                  font-size: 14px;
                  font-size: 14px;
              }
              em.emp {
                  font-size: 14px;
                  font-size: 14px;
              }
          }
          .tit_box {
              .tit {
                  display: block;
              }
              .alert {
                  display: none;
              }
          }
          .noti.has_msg {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding-right: 0;
              .emp {
                  -webkit-box-flex: 0;
                  -webkit-flex: 0 0 auto;
                  -ms-flex: 0 0 auto;
                  flex: 0 0 auto;
              }
              .alert {
                  -webkit-box-flex: 1;
                  -webkit-flex: 1 1 auto;
                  -ms-flex: 1 1 auto;
                  flex: 1 1 auto;
                  margin-right: 16px;
                  float: none;
              }
          }
          .field.set_position {
              .only_team+button.add {
                  bottom: 30px;
              }
          }
          .field {
              .fm_sns.custom_type {
                  .lw_selectbox {
                      display: inline-block;
                  }
              }
              .fm_contact {
                  button.remove {
                      margin-top: -8px;
                  }
              }
              .fm_func {
                  .lw_input {
                      width: 128px;
                  }
              }
          }
          .fm_members.group_box {
              .field {
                  .hd {
                      display: block;
                      position: static;
                      max-width: none;
                  }
                  .box {
                      margin-left: 0;
                      margin-top: 6px;
                  }
              }
          }
          .fm_members.team_box {
              .field {
                  .hd {
                      display: block;
                      position: static;
                      max-width: none;
                  }
                  .box {
                      margin-left: 0;
                      margin-top: 6px;
                  }
              }
          }
          .fm_members.sharegroup_box {
              width: auto;
              .field {
                  .hd {
                      display: block;
                      margin: 0 0 4px;
                      position: static;
                  }
                  .box {
                      margin-left: 0;
                  }
              }
              .fm_type {
                  padding-top: 2px;
                  span {
                      display: block;
                      margin: 4px 0 4px 12px;
                  }
                  span+span {
                      margin: 4px 0 4px 12px;
                  }
              }
          }
          .fm_members.share_box {
              .member {
                  .name_box {
                      input {
                          display: block;
                          width: 100%;
                          max-width: none;
                          margin: 0 0 8px;
                      }
                  }
              }
          }
      }
      .ly_member_added {
          width: auto;
          max-width: none;
          .scroller {
              padding: 1px 16px 24px;
              .tab_menu {
                  margin-left: -16px;
                  margin-right: -16px;
              }
          }
          .noti {
              text-align: right;
              .alert {
                  float: left;
                  font-size: 14px;
              }
              em.emp {
                  font-size: 14px;
              }
          }
      }
      .ly_member_detail {
          width: auto;
          max-width: none;
          .scroller {
              padding: 1px 16px 24px;
              .tab_menu {
                  margin-left: -16px;
                  margin-right: -16px;
              }
          }
      }
      .ly_member_modify {
          width: auto;
          max-width: none;
          .scroller {
              padding: 1px 16px 24px;
              padding: 0 16px;
              .tab_menu {
                  margin-left: -16px;
                  margin-right: -16px;
              }
              .noti {
                  .alert {
                      font-size: 14px;
                  }
                  em.emp {
                      font-size: 14px;
                  }
              }
          }
          .noti {
              text-align: right;
              text-align: left;
              .alert {
                  float: left;
                  font-size: 14px;
                  font-size: 14px;
              }
              em.emp {
                  font-size: 14px;
                  font-size: 14px;
              }
          }
          .tit_box {
              .tit {
                  display: block;
              }
              .alert {
                  display: none;
              }
          }
          .noti.has_msg {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding-right: 0;
              .emp {
                  -webkit-box-flex: 0;
                  -webkit-flex: 0 0 auto;
                  -ms-flex: 0 0 auto;
                  flex: 0 0 auto;
              }
              .alert {
                  -webkit-box-flex: 1;
                  -webkit-flex: 1 1 auto;
                  -ms-flex: 1 1 auto;
                  flex: 1 1 auto;
                  margin-right: 16px;
                  float: none;
              }
          }
          .field.set_position {
              .only_team+button.add {
                  bottom: 30px;
              }
          }
          .field {
              .fm_sns.custom_type {
                  .lw_selectbox {
                      display: inline-block;
                  }
              }
              .fm_contact {
                  button.remove {
                      margin-top: -8px;
                  }
              }
              .fm_func {
                  .lw_input {
                      width: 128px;
                  }
              }
          }
          .fm_members.group_box {
              .field {
                  .hd {
                      display: block;
                      position: static;
                      max-width: none;
                  }
                  .box {
                      margin-left: 0;
                      margin-top: 6px;
                  }
              }
          }
          .fm_members.team_box {
              .field {
                  .hd {
                      display: block;
                      position: static;
                      max-width: none;
                  }
                  .box {
                      margin-left: 0;
                      margin-top: 6px;
                  }
              }
          }
          .fm_members.sharegroup_box {
              width: auto;
              .field {
                  .hd {
                      display: block;
                      margin: 0 0 4px;
                      position: static;
                  }
                  .box {
                      margin-left: 0;
                  }
              }
              .fm_type {
                  padding-top: 2px;
                  span {
                      display: block;
                      margin: 4px 0 4px 12px;
                  }
                  span+span {
                      margin: 4px 0 4px 12px;
                  }
              }
          }
          .fm_members.share_box {
              .member {
                  .name_box {
                      input {
                          display: block;
                          width: 100%;
                          max-width: none;
                          margin: 0 0 8px;
                      }
                  }
              }
          }
      }
      .ly_member_select {
          width: auto;
          max-width: none;
          .scroller {
              padding: 1px 16px 24px;
              .tab_menu {
                  margin-left: -16px;
                  margin-right: -16px;
              }
          }
      }
  }
  @media screen and (min-width: 768px) {
      .ly_member_add {
          .scroller {
              margin-bottom: 90px;
              max-height: 568px;
              overflow: auto;
              overflow-x: hidden;
              margin-top: 16px;
              padding: 0;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              .alert {
                  display: none;
              }
          }
          .tit {
              margin-left: 24px;
              margin-left: 24px;
          }
          .tit_box {
              display: inline;
              margin-right: -4px;
              .tit {
                  display: inline;
              }
          }
          .btn_box {
              border-top: 1px solid #e5e5e6;
          }
          .noti {
              padding-left: 24px;
          }
          .member {
              .thumb {
                  margin-top: 3px;
                  margin-right: 40px;
                  .ly_context {
                      left: 59px;
                  }
              }
              .infor {
                  .txt {
                      span {
                          &:first-child {
                              width: 185px;
                              max-width: none;
                          }
                      }
                  }
              }
              .name_box {
                  input {
                      &:first-child {
                        //   width: 176px;
                          max-width: none;
                      }
                  }
              }
              .name_box.reverse {
                  input {
                      &:last-child {
                          -webkit-box-flex: 0;
                          -webkit-flex: 0 0 auto;
                          -ms-flex: 0 0 auto;
                          flex: 0 0 auto;
                          -webkit-box-sizing: border-box;
                          box-sizing: border-box;
                          display: block;
                        //   width: 176px;
                      }
                  }
              }
          }
          .fm_members {
              width: auto;
              padding-left: 24px;
              padding-right: 24px;
              padding-bottom: 20px;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
          }
          .field {
              .hd {
                  max-width: 110px;
              }
              .box {
                  margin-left: 120px;
                  .lw_note {
                      margin-top: 6px;
                  }
              }
              .lw_input.w_limit {
                  max-width: 176px;
              }
              .lw_selectbox {
                  .lw_selectbox_label {
                      width: 240px;
                  }
              }
              .set_item.fm_email {
                  button.add {
                      bottom: 16px;
                  }
                  .set_domain+button.add {
                      bottom: 16px;
                  }
              }
              .set_item.fm_contact {
                  button.add {
                      bottom: 16px;
                  }
              }
              .set_item {
                  .msg_alert+button.add {
                      bottom: 42px;
                  }
              }
              .domain {
                  display: inline-block;
                  margin: -2px 0 0 12px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  max-width: 100%;
                  word-wrap: normal;
                  max-width: 254px;
                  vertical-align: middle;
              }
              .fm_email {
                  
                  .email_domain {
                      width: 200px;
                  }
                  .domain {
                      width: 220px;
                      margin: 0 0 0 8px;
                      line-height: 34px;
                  }
                  .item {
                      .domain {
                          float: left;
                      }
                      .lw_selectbox {
                          float: left;
                      }
                      input {
                          float: left;
                      }
                      span {
                          float: left;
                          margin-top: 6px;
                      }
                      .lw_selectbox_label {
                          width: 200px;
                      }
                      &:after {
                          content: "";
                          display: block;
                          clear: both;
                          height: 0;
                      }
                      button.remove {
                          margin: 5px 0 0 3px;
                      }
                  }
              }
              .fm_sns {
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  .lw_input {
                      -webkit-box-flex: 1;
                      -webkit-flex: 0 1 auto;
                      -ms-flex: 0 1 auto;
                      flex: 0 1 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                      min-width: 0;
                  }
                  .lw_input.sns_name {
                      margin-right: 8px;
                      -webkit-box-flex: 0;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                  }
                  .lw_selectbox {
                      margin-right: 8px;
                      -webkit-box-flex: 0;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                  }
                  .lw_selectbox_label {
                      width: 176px;
                  }
              }
              .fm_sns.custom_type {
                  .lw_input.sns_name {
                      display: block;
                  }
                  .lw_selectbox {
                      display: block;
                  }
              }
              .fm_date {
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  .fm_box {
                      -webkit-box-flex: 0;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                      height: 23px;
                      margin: auto -16px auto 16px;
                  }
                  .lw_input {
                      -webkit-box-flex: 1;
                      -webkit-flex: 0 1 auto;
                      -ms-flex: 0 1 auto;
                      flex: 0 1 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                  }
              }
              .fm_contact {
                  span.contact {
                      margin-bottom: 0;
                  }
                  .member_list {
                      top: 33px;
                      left: 248px;
                      width: 280px;
                  }
                  .lw_input {
                      width: 240px;
                  }
                  .lw_input.contact {
                      width: 200px;
                      margin-left: 8px;
                  }
              }
              .pw_option {
                  .txt {
                      margin-top: 6px;
                  }
                  .alert {
                      margin-left: 22px;
                  }
                  .pw_regis {
                      margin-left: 22px;
                  }
                  .pw_user {
                      margin-left: 22px;
                  }
              }
          }
          .field.custom {
              .has_label {
                  clear: both;
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  .lw_input+.lw_input {
                      margin-top: 0;
                  }
                  .inp_label {
                      width: 176px;
                      margin-right: 8px;
                      -webkit-box-flex: 0;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                  }
              }
          }
          .field.set_position {
              .fmbox {
                  display: inline-block;
                  float: left;
                  max-width: 240px;
                  margin: 0 8px 0 0;
              }
              .lw_selectbox_label {
                  width: 200px;
              }
              .only_team {
                  .fmbox {
                      max-width: 448px;
                      float: none;
                      margin-right: 0;
                      vertical-align: middle;
                  }
              }
          }
          .field_box {
              margin: 22px -24px;
              padding: 16px 24px;
              .add_field {
                  position: absolute;
                  top: 24px;
                  right: 35px;
              }
              .remove_field {
                  position: absolute;
                  top: 24px;
                  right: 35px;
              }
          }
          button.opt_toggle {
              width: calc(100% - 48px);
              margin-right: 24px;
              margin-left: 24px;
          }
          .ocr_cover {
              padding-left: 24px;
              padding-right: 24px;
          }
      }
      .ly_member_added {
          .scroller {
              margin-bottom: 57px;
              max-height: 568px;
              overflow: auto;
              overflow-x: hidden;
          }
      }
      .ly_member_modify {
          .scroller {
              margin-bottom: 57px;
              max-height: 568px;
              overflow: auto;
              overflow-x: hidden;
              margin-top: 16px;
              padding: 0;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              .alert {
                  display: none;
              }
          }
          .tit {
              margin-left: 24px;
              margin-left: 24px;
          }
          .tit_box {
              display: inline;
              margin-right: -4px;
              .tit {
                  display: inline;
              }
          }
          .btn_box {
              border-top: 1px solid #e5e5e6;
          }
          .noti {
              padding-left: 24px;
          }
          .member {
              .thumb {
                  margin-top: 3px;
                  margin-right: 40px;
                  .ly_context {
                      left: 59px;
                  }
              }
              .infor {
                  .txt {
                      span {
                          &:first-child {
                              width: 185px;
                              max-width: none;
                          }
                      }
                  }
              }
              .name_box {
                  input {
                      &:first-child {
                          width: 176px;
                          max-width: none;
                      }
                  }
              }
              .name_box.reverse {
                  input {
                      &:last-child {
                          -webkit-box-flex: 0;
                          -webkit-flex: 0 0 auto;
                          -ms-flex: 0 0 auto;
                          flex: 0 0 auto;
                          -webkit-box-sizing: border-box;
                          box-sizing: border-box;
                          display: block;
                          width: 176px;
                      }
                  }
              }
          }
          .fm_members {
              width: auto;
              padding-left: 24px;
              padding-right: 24px;
              padding-bottom: 20px;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
          }
          .field {
              .hd {
                  max-width: 110px;
              }
              .box {
                  margin-left: 120px;
                  .lw_note {
                      margin-top: 6px;
                  }
              }
              .lw_input.w_limit {
                  max-width: 176px;
              }
              .lw_selectbox {
                  .lw_selectbox_label {
                      width: 240px;
                  }
              }
              .set_item.fm_email {
                  button.add {
                      bottom: 16px;
                  }
                  .set_domain+button.add {
                      bottom: 16px;
                  }
              }
              .set_item.fm_contact {
                  button.add {
                      bottom: 16px;
                  }
              }
              .set_item {
                  .msg_alert+button.add {
                      bottom: 42px;
                  }
              }
              .domain {
                  display: inline-block;
                  margin: -2px 0 0 12px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  max-width: 100%;
                  word-wrap: normal;
                  max-width: 254px;
                  vertical-align: middle;
              }
              .fm_email {
                  .email_id {
                      width: 240px;
                  }
                  .email_domain {
                      width: 200px;
                  }
                  .domain {
                      width: 220px;
                      margin: 0 0 0 8px;
                      line-height: 34px;
                  }
                  .item {
                      .domain {
                          float: left;
                      }
                      .lw_selectbox {
                          float: left;
                      }
                      input {
                          float: left;
                      }
                      span {
                          float: left;
                          margin-top: 6px;
                      }
                      .lw_selectbox_label {
                          width: 200px;
                      }
                      &:after {
                          content: "";
                          display: block;
                          clear: both;
                          height: 0;
                      }
                      button.remove {
                          margin: 5px 0 0 3px;
                      }
                  }
              }
              .fm_sns {
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  .lw_input {
                      -webkit-box-flex: 1;
                      -webkit-flex: 0 1 auto;
                      -ms-flex: 0 1 auto;
                      flex: 0 1 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                      min-width: 0;
                  }
                  .lw_input.sns_name {
                      margin-right: 8px;
                      -webkit-box-flex: 0;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                  }
                  .lw_selectbox {
                      margin-right: 8px;
                      -webkit-box-flex: 0;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                  }
                  .lw_selectbox_label {
                      width: 176px;
                  }
              }
              .fm_sns.custom_type {
                  .lw_input.sns_name {
                      display: block;
                  }
                  .lw_selectbox {
                      display: block;
                  }
              }
              .fm_date {
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  .fm_box {
                      -webkit-box-flex: 0;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                      height: 23px;
                      margin: auto -16px auto 16px;
                  }
                  .lw_input {
                      -webkit-box-flex: 1;
                      -webkit-flex: 0 1 auto;
                      -ms-flex: 0 1 auto;
                      flex: 0 1 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                  }
              }
              .fm_contact {
                  span.contact {
                      margin-bottom: 0;
                  }
                  .member_list {
                      top: 33px;
                      left: 248px;
                      width: 280px;
                  }
                  .lw_input {
                      width: 240px;
                  }
                  .lw_input.contact {
                      width: 200px;
                      margin-left: 8px;
                  }
              }
              .pw_option {
                  .txt {
                      margin-top: 6px;
                  }
                  .alert {
                      margin-left: 22px;
                  }
                  .pw_regis {
                      margin-left: 22px;
                  }
                  .pw_user {
                      margin-left: 22px;
                  }
              }
          }
          .field.custom {
              .has_label {
                  clear: both;
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  .lw_input+.lw_input {
                      margin-top: 0;
                  }
                  .inp_label {
                      width: 176px;
                      margin-right: 8px;
                      -webkit-box-flex: 0;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      display: block;
                  }
              }
          }
          .field.set_position {
              .fmbox {
                  display: inline-block;
                  float: left;
                  max-width: 240px;
                  margin: 0 8px 0 0;
              }
              .lw_selectbox_label {
                  width: 200px;
              }
              .only_team {
                  .fmbox {
                      max-width: 448px;
                      float: none;
                      margin-right: 0;
                      vertical-align: middle;
                  }
              }
          }
          .field_box {
              margin: 22px -24px;
              padding: 16px 24px;
              .add_field {
                  position: absolute;
                  top: 24px;
                  right: 35px;
              }
              .remove_field {
                  position: absolute;
                  top: 24px;
                  right: 35px;
              }
          }
          button.opt_toggle {
              width: calc(100% - 48px);
              margin-right: 24px;
              margin-left: 24px;
          }
          .ocr_cover {
              padding-left: 24px;
              padding-right: 24px;
          }
      }
  }
  @media screen and (max-width: 320px) {
      .ly_member_add {
          .field {
              .set_item.fm_contact {
                  button.add {
                      bottom: 1px;
                  }
              }
          }
      }
      .ly_member_modify {
          .field {
              .set_item.fm_contact {
                  button.add {
                      bottom: 1px;
                  }
              }
          }
      }
  }
  @media screen and (max-height: 710px) and (min-width:892px) {
      .ly_member_add {
          height: 100%;
      }
      .ly_member_modify {
          height: 100%;
      }
      .ly_member_add.ly_page {
          .btn_box+.scroller {
              position: absolute;
              top: 62px;
              left: 0;
              right: 0;
              bottom: 82px;
              overflow: auto;
              margin: 0;
          }
      }
      .ly_member_modify.ly_page {
          .btn_box+.scroller {
              position: absolute;
              top: 62px;
              left: 0;
              right: 0;
              bottom: 82px;
              overflow: auto;
              margin: 0;
          }
      }
  }
  
  .lw_input {
      font-size: 14px;
      color: #222;
      line-height: 21px;
      padding: 6px 0 7px 10px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 34px;
      border: 1px solid #ddd;
      border-radius: 2px;
      width: 100%;
      -webkit-appearance: none;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
  }
  
  .lw_input::-webkit-input-placeholder {
      color: #989898;
      opacity: 1;
  }
  
  .lw_input::-moz-placeholder {
      color: #989898;
      opacity: 1;
  }
  
  .lw_input:-ms-input-placeholder {
      color: #989898;
      opacity: 1;
  }
  
  .lw_input:-moz-placeholder {
      color: #989898;
      opacity: 1;
  }
  
  .lw_input.invalid {
      border-color: #fd472b;
  }
  
  .lw_input.valid {
      background-color: #e7f2fe;
  }
  
  .lw_input.focus,.lw_input:focus {
      border-color: #157efb;
      outline: none;
  }
  
  .lw_input.disabled,.lw_input:disabled,.lw_input[disabled] {
      opacity: .4;
      -webkit-text-fill-color: #222;
      background-color: #f8f8f8;
  }
  
  .lw_btn {
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
      padding: 6px 12px 7px;
      cursor: pointer;
      min-width: 64px;
      border: 1px solid #c5c5c6;
      background: #fff;
      color: #222;
  }
  
  .lw_btn.hover,.lw_btn.on,.lw_btn:hover {
      background-color: #f2f2f2;
  }
  
  .lw_btn.disabled,.lw_btn:disabled {
      cursor: default;
      opacity: .4;
  }
  
  .lw_btn.disabled:hover,.lw_btn:disabled:hover {
      background-color: #fff;
  }
  
  .lw_selectbox,.lw_selectbox .lw_selectbox_label {
      position: relative;
      display: inline-block;
      max-width: 100%;
  }
  
  .lw_selectbox .lw_selectbox_label {
      font-size: 14px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 34px;
      border-radius: 2px;
      line-height: 20px;
      text-decoration: none;
      vertical-align: middle;
      padding: 6px 12px 6px;
      cursor: pointer;
      min-width: 54px;
      border: 1px solid #c5c5c6;
      background: #fff;
      color: #222;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      word-wrap: normal;
      min-width: 135px;
      border-color: #ddd;
      padding-right: 24px;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
  }
  
  .lw_selectbox .lw_selectbox_label.hover,.lw_selectbox .lw_selectbox_label.on,.lw_selectbox .lw_selectbox_label:hover {
      background-color: #f2f2f2;
  }
  
  .lw_selectbox .lw_selectbox_label.disabled,.lw_selectbox .lw_selectbox_label:disabled {
      cursor: default;
      opacity: .4;
  }
  
  .lw_selectbox .lw_selectbox_label.disabled:hover,.lw_selectbox .lw_selectbox_label:disabled:hover {
      background-color: #fff;
  }
  
  .lw_selectbox .lw_selectbox_label:after {
      content: "";
      background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
      background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
      background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
      background-size: 1013px 983px;
      background-position: -612px -964px;
      width: 8px;
      height: 8px;
      display: inline-block;
      margin: -2px 0 0 6px;
      vertical-align: middle;
  }
  
  .lw_selectbox .lw_selectbox_label.on:after {
      background-position: -484px -964px;
  }
  
  .lw_selectbox .lw_selectbox_label:after {
      position: absolute;
      margin-top: 0;
      right: 12px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
  }
  
  .lw_selectbox .lw_selectbox_source {
      min-width: 100%;
      // position: absolute;
      // left: 0;
      // top: 0;
      height: 100%;
      // opacity: 0;
      // -webkit-appearance: none;
      max-width: 100%;
      height: 34px;
      width: 100%;
      padding: 6px 12px 6px;
      outline: none;
      border: 1px solid #ddd;
    }
  
  .lw_selectbox.disabled {
      cursor: default;
      opacity: .4;
  }
  
  .lw_radio {
      position: absolute;
      clip: rect(0 0 0 0);
  }
  
  .lw_radio+label {
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
  
  .lw_radio+label:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
      background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
      background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
      background-size: 1013px 983px;
      background-position: -993px -467px;
      width: 16px;
      height: 16px;
      display: inline-block;
  }
  
  .lw_radio+label:hover:before {
      background-position: -993px -419px;
  }
  
  .lw_radio:checked+label {
      color: #157efb;
  }
  
  .lw_radio:checked+label:before {
      background-position: -993px -491px;
  }
  
  .lw_radio:disabled+label {
      color: rgba(34,34,34,.4);
  }
  
  .lw_radio:disabled+label:before {
      background-position: -993px -443px;
  }
  
  .lw_radio:disabled+label:hover {
      cursor: default;
  }
  
  .lw_radio:disabled:checked+label {
      color: #222;
  }
  
  .lw_radio:disabled:checked+label:before {
      background-position: -993px -515px;
  }
  
  .lw_radio.partial+label:before {
      background-position: -967px -573px;
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
  .lw_btn {
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
    padding: 6px 12px 7px;
    cursor: pointer;
    min-width: 64px;
    border: 1px solid #c5c5c6;
    background: #fff;
    color: #222
}
.lw_btn.hover,.lw_btn.on,.lw_btn:hover {
    background-color: #f2f2f2
}
.lw_btn.disabled,.lw_btn:disabled {
    cursor: default;
    opacity: .4
}

.lw_btn.disabled:hover,.lw_btn:disabled:hover {
    background-color: #fff
}

.lw_btn_point {
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
    background: #157efb;
    border: 0;
    color: #fff;
    font-weight: 700
}

.lw_btn_point.hover,.lw_btn_point.on,.lw_btn_point:hover {
    background-color: #f2f2f2
}

.lw_btn_point.disabled,.lw_btn_point:disabled {
    cursor: default;
    opacity: .4
}

.lw_btn_point.disabled:hover,.lw_btn_point:disabled:hover {
    background-color: #fff
}

.lw_btn_point.hover,.lw_btn_point.on,.lw_btn_point:hover {
    background: #1373e6
}

.lw_btn_point.disabled:hover,.lw_btn_point:disabled:hover {
    background: #157efb
}

.ly_common.ly_page .btn_box { 
    background-color: #FFF;
}
.ly_common .btn_box {
    text-align: right;
}
.btn_box button+button {
    margin-left: 8px;
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
        padding: 10px 16px
    }

    .ly_common.ly_page .btn_box .lw_btn_text {
        left: 16px;
        top: 10px;
        bottom: 0;
        padding-left: 0;
        padding-right: 0;
        font-size: 12px
    }

    .ly_common.ly_page .btn_box .lw_btn_text:hover {
        background-color: transparent
    }
}

@media screen and (min-width: 768px) {
    .ly_common.ly_page .btn_box {
        position:absolute;
        right: 0;
        bottom: 23px;
        left: 0;
        padding: 22px 23px 0
    }

    .ly_common.ly_page .btn_box+.scroller {
        margin-bottom: 61px
    }
}
  </style>
