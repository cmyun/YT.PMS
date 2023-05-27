<template>
  <div v-if="message && typeof message == 'string'" :class="`alert ${type}`">{{message}}</div>
  <div v-if="typeof message == 'object' && message" :class="`alert ${type}`">{{message.title}}</div>
  <router-view />
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState('alert', ['message']),
    ...mapState('alert', ['type'])
  },
  methods: {
    ...mapActions('alert', ['clear'])
  },
  watch: {
    $route (to, from){
      this.clear();
    },
    message(newVal, oldVal){
      setTimeout(() => {
        this.clear()
      }, 6000);
    }
  }
};
</script>
<style lang="scss">
.alert {
  position: fixed !important;
  right: 15px;
  bottom: 15px;
  z-index: 999999;
}
#app {
  font-family: -apple-system,BlinkMacSystemFont,Helvetica,Arial,Dotum,sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  line-height: 1.5;
}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, object, iframe, pre, code, p, blockquote, form, fieldset, legend, table, th, td, caption, tbody, tfoot, thead, article, aside, figure, footer, header, hgroup, menu, nav, section, audio, video, canvas {
  margin:0;
  padding:0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, nav, section, menu { display:block; }
audio:not([controls]) {
  display:none;
  height:0;
}
[hidden] { 
  display:none; 
}
table {
  border-collapse:collapse;
  border-spacing:0;
}
fieldset, img { border:none; }
address, caption, cite, code, dfn, em, strong, th, var {
  font-style:normal;
  font-weight:normal;
}
ul, ol, menu { 
  list-style:none; 
}
.wrap {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFF;
}
#header {
  height: 56px;
  position: relative;
  min-width: 1024px;
}
#container {
  flex: 1 1 auto;
  position: absolute;
  z-index: 20;
  display: flex;
  min-height: 0;
  padding-bottom:0;
  top: 56px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
}
.contents {
  flex: 1 1 auto;
  flex-direction: column;
  z-index: 10;
}
#content {
  &.fixLayout {
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
    .main {
      max-width: 1250px;
      min-width: 1000px;
      padding: 0 50px;
      flex: 1 1 auto;
    }
  }
}

@media screen and (min-width: 768px){
  .contents.fix_layout {
    overflow: hidden;
    min-height: 400px;
  }
}
.contents.fix_layout {
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 50px;
}

@media screen and (min-width: 768px){
.contents.fix_layout .contents_body {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 0;
  height: 100%;
}
}
.modal-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 90%;
  max-height: 90%;margin-bottom: 20px;
  overflow-y: auto;
  z-index: 11;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-modal-header-padding);
  border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
  border-top-left-radius: var(--bs-modal-inner-border-radius);
  border-top-right-radius: var(--bs-modal-inner-border-radius);
  margin-bottom: 20px;
  h2 {
    margin: 0;
  }
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: var(--bs-modal-padding);
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
#modal-root {
  z-index: 10;
  .ly_common {
    z-index: 22;
    position: relative;
  }
}
.ly_common {
  position: absolute;
  z-index: 50;
  display: inline-block;
  padding: 19px 23px 21px;
  background-color: #fff;
  vertical-align: middle;
  box-sizing: border-box;
  white-space: normal;
  text-align: left;
  color: #222;
  word-wrap: break-word;
  border-radius: 2px;
}
@media screen and (min-width: 768px){
.ly_member_add .scroller {
  margin-bottom: 90px;
  max-height: 568px;
  overflow: auto;
  overflow-x: hidden;
  margin-top: 16px;
  padding: 0;
  box-sizing: border-box;
  }
}
@media screen and (min-width: 768px){
.ly_member_add .noti {
    padding-left: 24px;
    margin-top: 3px;
    padding-right: 24px;
  }
}
@media screen and (min-width: 768px){
.ly_member_add .field .hd {
  max-width: 110px;
  }
}

.ly_member_add .field .hd {
  position: absolute;
  top: 8px;
  left: 0;
  font-size: 12px;
  font-style: normal;
  max-width: 90px;
}
@media screen and (min-width: 768px){
.ly_member_add .member .name_box input:first-child {
  max-width: none;
}
.lw_input {
  font-size: 14px;
  color: #222;
  line-height: 21px;
  padding: 6px 0 7px 10px;
  box-sizing: border-box;
  height: 34px;
  border: 1px solid #ddd;
  border-radius: 2px;
  width: 100%;
  transform: translateZ(0);
}
}
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
.modal-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
h4 {
  margin-bottom: 0;
}
p {
  margin-bottom: 0;
}
a {
  text-decoration: none !important;
}
.srch_member .results li .infor {
  width: 100%;
}
.func_box {
  border-bottom: 1px solid #eee;
}
.func_box .hd {
  display: block;
  font-size: 12px;
  color: #767676;
  font-style: normal;
}
@media screen and (min-width: 768px) {
  .func_box {
      border-bottom:0;
  }
}
.field_group {
  display: flex;
  justify-content: space-between;
}
.lw_textarea {
  width: 100%;
  height: 68px;
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
}
.ly_member_add .tit_box {
  padding-right: 0;
}
.ly_member_add .btn_box .prev {
  float: left;
}
.ly_member_add .btn_box .prev button {
  margin-left: -12px;
}
.ly_member_add .btn_box .lw_btn_text {
  font-size: 14px;
  display: inline-block;
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
}
.ly_member_add .btn_box .lw_btn_text:hover {
  background-color: #f2f2f2;
}
.ly_member_add .btn_box .lw_btn_text:disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_add .btn_box .lw_btn_text:disabled:hover {
  background-color: #fff;
}
.ly_member_add .btn_box .lw_btn_text.hover {
  background-color: #f2f2f2;
}
.ly_member_add .btn_box .lw_btn_text.on {
  background-color: #f2f2f2;
}
.ly_member_add .btn_box .lw_btn_text.disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_add .btn_box .lw_btn_text.disabled:hover {
  background-color: #fff;
}
.ly_member_add .alert {
  color: #767676;
}
.ly_member_add .msg_alert {
  margin: 8px 0 16px;
  font-size: 12px;
}
.ly_member_add .msg_alert em {
  color: #fd472b;
  font-style: normal;
}
.ly_member_add .msg_alert strong {
  color: #157efb;
  font-weight: 400;
}
.ly_member_add .noti {
  margin-top: 3px;
  padding-right: 24px;
}
.ly_member_add .noti em.emp {
  width: auto;
  background: transparent;
  font-size: 12px;
  color: #157efb;
  font-style: normal;
}
.ly_member_add .noti em.emp:before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #157efb;
  margin: -1px 6px 0 0;
  vertical-align: middle;
}
.ly_member_add .member {
  min-height: 80px;
}
.ly_member_add .member .thumb {
  position: relative;
  float: left;
  width: 36px;
  height: 36px;
  z-index: 20;
  width: 80px;
  height: 80px;
  margin-right: 20px;
}
.ly_member_add .member .thumb img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50px;
}
.ly_member_add .member .thumb .thmb_area:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 50px;
  z-index: 1;
}
.ly_member_add .member .thumb .f_pic {
  position: absolute;
  right: -4px;
  bottom: -4px;
  z-index: 10;
  width: 28px;
  height: 28px;
}
.ly_member_add .member .thumb .f_pic a {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #c5c5c6;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
}
.ly_member_add .member .thumb .f_pic a:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -993px -563px;
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: 5px;
}
.ly_member_add .member .thumb .ly_context {
  top: 88px;
  left: 0;
  z-index: 80;
}
.ly_member_add .member .infor {
  color: #222;
  float: none;
  overflow: hidden;
}
.ly_member_add .member .infor .txt {
  margin-bottom: -5px;
  font-size: 12px;
  line-height: 16px;
}
.ly_member_add .member .infor .txt em.emp {
  margin: -3px 6px 0 0;
}
.ly_member_add .member .infor .txt span {
  display: inline-block;
  vertical-align: middle;
}
.ly_member_add .member .infor .txt span:first-child {
  width: 52%;
  max-width: 127px;
  white-space: nowrap;
}
.ly_member_add .member .name_box {
  font-weight: 700;
  display: flex;
  margin-top: 8px;
}
.ly_member_add .member .name_box span {
  margin-left: 6px;
}
.ly_member_add .member .name_box i {
  display: inline-block;
  margin: -3px 6px 0 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
}
.ly_member_add .member:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.ly_member_add .member .name_box ~ .txt {
  padding-top: 10px;
}
.ly_member_add .fm_members {
  margin-top: 16px;
  overflow: visible;
}
.ly_member_add .fm_members em.emp {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #157efb;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
}
.ly_member_add button.generate {
  font-size: 14px;
  display: inline-block;
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
}
.ly_member_add button.generate:hover {
  background-color: #f2f2f2;
  background: transparent;
}
.ly_member_add button.generate:disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_add button.generate:disabled:hover {
  background-color: #fff;
}
.ly_member_add button.generate:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -438px -220px;
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: -3px 4px 0 0;
  vertical-align: middle;
}
.ly_member_add button.generate:active {
  background: transparent;
}
.ly_member_add button.generate:focus {
  background: transparent;
}
.ly_member_add button.generate.hover {
  background-color: #f2f2f2;
}
.ly_member_add button.generate.on {
  background-color: #f2f2f2;
}
.ly_member_add button.generate.disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_add button.generate.disabled:hover {
  background-color: #fff;
}
.ly_member_add .field {
  position: relative;
  min-height: 34px;
  margin-top: 16px;
}
.ly_member_add .field .hd {
  position: absolute;
  top: 8px;
  left: 0;
  font-size: 12px;
  font-style: normal;
  max-width: 90px;
}
.ly_member_add .field .hd em.emp {
  margin: -3px 6px 0 0;
}
.ly_member_add .field .hd .num {
  color: #157efb;
}
.ly_member_add .field .hd .ly_tooltip {
  margin-left: -44px;
}
.ly_member_add .field .hd .ly_tooltip:before {
  left: 25px;
}
.ly_member_add .field .box {
  margin-left: 100px;
}
.ly_member_add .field .box .value_text {
  margin-right: 8px;
}
.ly_member_add .field .box .btn_chg_id {
  display: inline-block;
  color: #157efb;
  text-decoration: underline;
}
.ly_member_add .field .box .lw_note {
  font-size: 12px;
  color: #767676;
}
.ly_member_add .field .box .srch_member {
  position: relative;
  display: flex;
}
.ly_member_add .field .box .srch_member .lw_input {
  flex: 1 1 auto;
}
.ly_member_add .field .box .srch_member .btn_contact {
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
  flex: 0 0 auto;
  margin-left: 8px;
}
.ly_member_add .field .box .srch_member .btn_contact:hover {
  background-color: #f2f2f2;
}
.ly_member_add .field .box .srch_member .btn_contact:disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_add .field .box .srch_member .btn_contact:disabled:hover {
  background-color: #fff;
}
.ly_member_add .field .box .srch_member .btn_contact.hover {
  background-color: #f2f2f2;
}
.ly_member_add .field .box .srch_member .btn_contact.on {
  background-color: #f2f2f2;
}
.ly_member_add .field .box .srch_member .btn_contact.disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_add .field .box .srch_member .btn_contact.disabled:hover {
  background-color: #fff;
}
.ly_member_add .field .box.justify {
  display: flex;
  min-width: 0;
}
.ly_member_add .field .box.justify .value_text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  flex: 1 1 auto;
}
.ly_member_add .field .box.justify .value_text.none_ellipsis {
  white-space: normal;
  text-overflow: clip;
}
.ly_member_add .field .box.justify .aside {
  flex: 0 0 auto;
}
.ly_member_add .field .box.justify .aside .lwds_size_small {
  margin-top: -2px;
}
.ly_member_add .field .readonly .lw_input {
  background: #f2f2f2;
  color: #989898;
}
.ly_member_add .field .lw_selectbox {
  max-width: 100%;
  overflow: hidden;
  vertical-align: middle;
  width: 100%;
}
.ly_member_add .field .lw_selectbox + .lw_selectbox {
  float: right;
  margin-left: 15px;
}
.ly_member_add .field .set_item button.add {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  position: absolute;
  bottom: 36px;
  right: 0;
}
.ly_member_add .field .set_item button.add:before {
  content: "";
  display: block;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -676px -909px;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.ly_member_add .field .set_item button.remove {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  margin-top: -2px;
  padding: 5px;
}
.ly_member_add .field .set_item button.remove:before {
  content: "";
  display: block;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -140px -964px;
  width: 12px;
  height: 12px;
  display: inline-block;
}
.ly_member_add .field .set_item .msg_alert + button.add {
  bottom: 60px;
}
.ly_member_add .field .set_item button.add.after_msg {
  bottom: 38px;
}
.ly_member_add .field .set_item.fm_email .item {
  padding-top: 0;
}
.ly_member_add .field .set_item.fm_email button.add {
  bottom: 11px;
}
.ly_member_add .field .set_item.fm_email .set_domain + button.add {
  bottom: 1px;
}
.ly_member_add .field .set_item.fm_contact .item {
  padding-top: 0;
}
.ly_member_add .field .set_item.fm_contact button.add {
  bottom: 17px;
}
.ly_member_add .field .domain {
  display: block;
  margin: 8px 0 5px;
  font-weight: 400;
}
.ly_member_add .field .wrap_phone {
  position: relative;
}
.ly_member_add .field .wrap_phone .inp_phone {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 2px;
  -align-items: center;
}
.ly_member_add .field .wrap_phone .inp_phone .country {
  margin: 0 24px 0 9px;
}
.ly_member_add .field .wrap_phone .inp_phone .country img {
  display: block;
}
.ly_member_add .field .wrap_phone .inp_phone .lw_input {
  height: 32px;
  padding-top: 8px;
  border: 0;
}
.ly_member_add .field .wrap_phone .inp_phone button.opt {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 54px;
  height: 34px;
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
}
.ly_member_add .field .wrap_phone .inp_phone button.opt:after {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -612px -964px;
  width: 8px;
  height: 8px;
  display: inline-block;
  display: block;
  margin: -2px 0 0 37px;
}
.ly_member_add .field .wrap_phone .inp_phone.focus {
  border-color: #157efb;
}
.ly_member_add .field .wrap_phone .inp_phone.invalid {
  border-color: #fd472b;
}
.ly_member_add .field .wrap_phone .ly_codelist {
  position: absolute;
  top: 33px;
  right: 0;
  left: 0;
  z-index: 1;
  height: 176px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  overflow: auto;
  padding: 8px 0;
}
.ly_member_add .field .wrap_phone .ly_codelist a {
  display: block;
  padding: 6px 0 5px;
  color: #222;
}
.ly_member_add .field .wrap_phone .ly_codelist a:hover {
  background: #f1f1f1;
}
.ly_member_add .field .wrap_phone .ly_codelist img {
  display: inline-block;
  margin: -2px 10px 0;
  vertical-align: middle;
}
.ly_member_add .field .wrap_phone .ly_codelist span {
  margin-left: 2px;
}
.ly_member_add .field .wrap_phone .ly_codelist .line {
  height: 1px;
  margin: 8px 0;
  overflow: hidden;
  background: #e5e5e6;
  font-size: 0;
  line-height: 0;
}
.ly_member_add .field .fm_box {
  margin-top: 10px;
  display: inline-block;
}
.ly_member_add .field .fm_box label {
  margin-right: 16px;
}
.ly_member_add .field .fm_contact {
  margin-bottom: -8px;
}
.ly_member_add .field .fm_contact .lw_input {
  margin-bottom: 8px;
}
.ly_member_add .field .fm_contact .lw_selectbox {
  margin-bottom: 8px;
}
.ly_member_add .field .fm_contact span {
  margin: 4px 0;
  padding: 0 8px;
}
.ly_member_add .field .fm_contact .email_domain {
  display: none;
}
.ly_member_add .field .fm_contact .sns_name {
  display: none;
}
.ly_member_add .field .fm_contact .custom_type .email_domain {
  display: inline-block;
}
.ly_member_add .field .fm_contact .custom_type .sns_name {
  display: inline-block;
}
.ly_member_add .field .fm_contact .custom_type .lw_selectbox {
  display: none;
}
.ly_member_add .field .fm_contact .item {
  position: relative;
}
.ly_member_add .field .fm_contact .item + .item {
  margin-top: 4px;
}
.ly_member_add .field .fm_contact .contact {
  width: 181px;
  margin: 0 0 8px;
}
.ly_member_add .field .fm_contact span.contact {
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
}
.ly_member_add .field .fm_contact span.contact em {
  padding: 0 0 0 8px;
  color: #767676;
  font-style: normal;
}
.ly_member_add .field .fm_contact span.contact span {
  padding: 0 0 0 8px;
}
.ly_member_add .field .fm_contact span.contact strong {
  font-weight: 400;
}
.ly_member_add .field .fm_contact span.contact i {
  color: #989898;
  font-style: normal;
}
.ly_member_add .field .fm_contact .member_list {
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
}
.ly_member_add .field .fm_contact .member_list span {
  padding: 0;
}
.ly_member_add .field .fm_email {
  margin-bottom: -8px;
}
.ly_member_add .field .fm_email .lw_input {
  margin-bottom: 8px;
}
.ly_member_add .field .fm_email .lw_selectbox {
  margin-bottom: 8px;
}
.ly_member_add .field .fm_email span {
  margin: 4px 0;
  padding: 0 8px;
}
.ly_member_add .field .fm_email .email_domain {
  display: none;
  width: 181px;
}
.ly_member_add .field .fm_email .sns_name {
  display: none;
}
.ly_member_add .field .fm_email .custom_type .email_domain {
  display: inline-block;
}
.ly_member_add .field .fm_email .custom_type .sns_name {
  display: inline-block;
}
.ly_member_add .field .fm_email .custom_type .lw_selectbox {
  display: none;
}
.ly_member_add .field .fm_email .domain {
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
.ly_member_add .field .fm_email .item .lw_selectbox_label {
  width: 181px;
  min-width: 0;
}
.ly_member_add .field .fm_email .msg_alert {
  margin: 0;
  padding-bottom: 8px;
}
.ly_member_add .field .fm_email .readonly {
  position: relative;
}
.ly_member_add .field .fm_email .readonly:before {
  content: "";
  position: absolute;
  top: 8px;
  left: -24px;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -967px -317px;
  width: 16px;
  height: 16px;
  display: inline-block;
}
.ly_member_add .field .fm_sns {
  margin-bottom: -8px;
}
.ly_member_add .field .fm_sns .lw_input {
  margin-bottom: 8px;
}
.ly_member_add .field .fm_sns .lw_selectbox {
  margin-bottom: 8px;
}
.ly_member_add .field .fm_sns span {
  margin: 4px 0;
  padding: 0 8px;
}
.ly_member_add .field .fm_sns .email_domain {
  display: none;
}
.ly_member_add .field .fm_sns .sns_name {
  display: none;
}
.ly_member_add .field .fm_sns .custom_type .email_domain {
  display: inline-block;
}
.ly_member_add .field .fm_sns .custom_type .sns_name {
  display: inline-block;
}
.ly_member_add .field .fm_sns .custom_type .lw_selectbox {
  display: none;
}
.ly_member_add .field .fm_sns .lw_input.sns_name {
  width: 181px;
  display: none;
}
.ly_member_add .field .fm_contact.custom_type .email_domain {
  display: inline-block;
}
.ly_member_add .field .fm_contact.custom_type .sns_name {
  display: inline-block;
}
.ly_member_add .field .fm_contact.custom_type .lw_selectbox {
  display: none;
}
.ly_member_add .field .fm_email.custom_type .email_domain {
  display: inline-block;
}
.ly_member_add .field .fm_email.custom_type .sns_name {
  display: inline-block;
}
.ly_member_add .field .fm_email.custom_type .lw_selectbox {
  display: none;
}
.ly_member_add .field .fm_sns.custom_type .email_domain {
  display: inline-block;
}
.ly_member_add .field .fm_sns.custom_type .sns_name {
  display: inline-block;
}
.ly_member_add .field .fm_sns.custom_type .lw_selectbox {
  display: none;
}
.ly_member_add .field .fm_sns.custom_type .lw_input.sns_name {
  display: block;
}
.ly_member_add .field .fm_func {
  background: #fafafb;
  border: 1px solid #e5e5e6;
  border-radius: 2px;
  padding-top: 1px;
}
.ly_member_add .field .fm_func .func {
  position: relative;
  margin: 0 16px;
  padding: 13px 0;
}
.ly_member_add .field .fm_func .func + .func {
  border-top: 1px solid #e5e5e6;
}
.ly_member_add .field .fm_func .label {
  display: inline-block;
}
.ly_member_add .field .fm_func .label i {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
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
.ly_member_add .field .fm_func .label .num {
  color: #157efb;
}
.ly_member_add .field .fm_func .lw_toggle + label {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -12px;
}
.ly_member_add .field .fm_func .msg_alert {
  margin-bottom: 0;
}
.ly_member_add .field .fm_func .has_depth .msg_alert {
  margin-left: 30px;
}
.ly_member_add .field .fm_func + .fm_func {
  margin-top: 10px !important;
}
.ly_member_add .field .pw_option {
  background: #fafafb;
  border: 1px solid #e5e5e6;
  border-radius: 2px;
  padding: 2px 16px 14px;
}
.ly_member_add .field .pw_option li {
  margin-top: 8px;
}
.ly_member_add .field .pw_option .txt {
  position: relative;
  margin-left: 22px;
  font-size: 12px;
  color: #767676;
  padding-left: 8px;
}
.ly_member_add .field .pw_option .txt:before {
  content: "";
  position: absolute;
  top: 7px;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #767676;
  border-radius: 50%;
}
.ly_member_add .field .pw_option .alert {
  margin-top: 6px;
  font-size: 12px;
  color: #fd472b;
}
.ly_member_add .field .pw_option .pw_regis {
  max-width: 224px;
  height: 34px;
  margin-top: 8px;
  padding: 4px 10px 0;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 2px;
}
.ly_member_add .field .pw_option .pw_regis input {
  box-sizing: border-box;
  float: left;
  width: calc(100% - 22px);
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  color: #222;
  line-height: 22px;
}
.ly_member_add .field .pw_option .pw_regis .btn_masking {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
}
.ly_member_add .field .pw_option .pw_regis.focus {
  border-color: #157efb;
}
.ly_member_add .field .pw_option .pw_user {
  margin-top: 8px;
}
.ly_member_add .field .pw_option .pw_user .lw_input {
  max-width: 224px;
}
.ly_member_add .field .pw_option .pw_user label {
  margin-top: 8px;
  font-size: 12px;
  color: #767676;
  line-height: 1.5;
}
.ly_member_add .field .pw_option .pw_user label:before {
  top: 0;
  transform: none;
}
.ly_member_add .field.custom .lw_input + .lw_input {
  margin-top: 8px;
}
.ly_member_add .field.custom .has_label + .has_label {
  margin-top: 8px;
}
.ly_member_add .field.set_position button.add {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  position: absolute;
  bottom: 36px;
  right: 0;
}
.ly_member_add .field.set_position button.add:before {
  content: "";
  display: block;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -676px -909px;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.ly_member_add .field.set_position button.remove {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  margin-top: -2px;
  padding: 5px;
}
.ly_member_add .field.set_position button.remove:before {
  content: "";
  display: block;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -140px -964px;
  width: 12px;
  height: 12px;
  display: inline-block;
}
.ly_member_add .field.set_position .item + .item {
  margin-top: 16px;
}
.ly_member_add .field.set_position .team {
  position: relative;
}
.ly_member_add .field.set_position .chk_item {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}
.ly_member_add .field.set_position .chk_item:checked + label:before {
  background-position: -967px -245px;
}
.ly_member_add .field.set_position .chk_item + label {
  position: absolute;
  top: 6px;
  left: -25px;
  z-index: 1;
  box-sizing: border-box;
  padding: 3px;
  font-size: 0;
  line-height: 0;
}
.ly_member_add .field.set_position .chk_item + label:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -967px -221px;
  width: 16px;
  height: 16px;
  display: inline-block;
}
.ly_member_add .field.set_position .fmbox {
  position: relative;
  font-size: 14px;
  color: #222;
  line-height: 21px;
  padding: 6px 0 7px 10px;
  box-sizing: border-box;
  height: 34px;
  border: 1px solid #ddd;
  border-radius: 2px;
  width: 100%;
  transform: translateZ(0);
  display: block;
  margin: 0 0 8px;
  padding: 0;
}
.ly_member_add .field.set_position .fmbox:focus {
  border-color: #157efb;
  outline: none;
}
.ly_member_add .field.set_position .fmbox:disabled {
  opacity: 0.4;
  background-color: #f8f8f8;
}
.ly_member_add .field.set_position .fmbox input {
  background: transparent;
  border: 0;
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 6px 10px 7px;
  line-height: 1.5;
}
.ly_member_add .field.set_position .fmbox span {
  display: block;
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
.ly_member_add .field.set_position .fmbox.invalid {
  border-color: #fd472b;
}
.ly_member_add .field.set_position .fmbox.valid {
  background-color: #e7f2fe;
}
.ly_member_add .field.set_position .fmbox.focus {
  border-color: #157efb;
  outline: none;
}
.ly_member_add .field.set_position .fmbox.disabled {
  opacity: 0.4;
  background-color: #f8f8f8;
}
.ly_member_add .field.set_position .fmbox[disabled] {
  opacity: 0.4;
  background-color: #f8f8f8;
}
.ly_member_add .field.set_position .chk_leader {
  clear: both;
  margin-top: 6px;
}
.ly_member_add .field_box {
  position: relative;
  margin: 24px -16px;
  padding: 19px 16px 16px;
  background: #fafafb;
  box-shadow: 0 1px 0 0 #eee, inset 0 1px 0 0 #eee;
}
.ly_member_add .field_box .add_field {
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
.ly_member_add .field_box .remove_field {
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
.ly_member_add .field_box .field {
  margin: 8px 0 0;
  clear: both;
}
.ly_member_add .field_box + .field_box {
  margin-top: -24px;
}
.ly_member_add .txtbox {
  margin-bottom: 14px;
}
.ly_member_add .txtbox .hd {
  top: 3px;
}
.ly_member_add .fm_members.group_box .member .name_box input {
  width: 100%;
  max-width: none;
}
.ly_member_add .fm_members.group_box .member .name_box input:first-child {
  width: 100%;
  max-width: none;
}
.ly_member_add .fm_members.group_box .member .txt {
  margin-top: 16px;
}
.ly_member_add .fm_members.group_box .member .txt:first-child {
  margin-top: 0;
}
.ly_member_add .fm_members.group_box .field .func .lw_input {
  margin-right: 8px;
}
.ly_member_add .fm_members.group_box .field .domain {
  display: inline-block;
  vertical-align: middle;
}
.ly_member_add .fm_members.group_box .field .hd.has_txt {
  white-space: normal;
  overflow: visible;
}
.ly_member_add .fm_members.team_box .member .name_box input:first-child {
  width: 100%;
  max-width: none;
}
.ly_member_add .fm_members.team_box .field .func .lw_input {
  margin-right: 8px;
}
.ly_member_add .fm_members.team_box .field .domain {
  display: inline-block;
  vertical-align: middle;
}
.ly_member_add .fm_members.team_box .field .hd.has_txt {
  white-space: normal;
  overflow: visible;
}
.ly_member_add .fm_members.sharegroup_box {
  margin-top: 0;
}
.ly_member_add .fm_members.sharegroup_box .field.txt_type {
  margin-top: 10px;
}
.ly_member_add .fm_members.sharegroup_box .field.txt_type .hd {
  top: 4px;
}
.ly_member_add .fm_members.sharegroup_box .fm_memo textarea {
  width: 100%;
  height: 68px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 7px 8px;
  resize: none;
  color: #222;
  line-height: 1.5;
}
.ly_member_add .fm_members.sharegroup_box .fm_type {
  min-height: 23px;
}
.ly_member_add .fm_members.sharegroup_box .fm_type span + span {
  margin-left: 35px;
}
.ly_member_add .fm_members.sharegroup_box .srch_member .desc {
  padding: 4px 0 0;
  font-size: 12px;
  color: #767676;
}
.ly_member_add .fm_members.share_box .member .custom_box {
  position: relative;
}
.ly_member_add .fm_members.share_box .member .custom_box .name_box {
  width: calc(100% - 35px);
}
.ly_member_add .fm_members.share_box .member button.add {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  position: absolute;
  bottom: 0;
  right: 0;
}
.ly_member_add .fm_members.share_box .member button.add:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -676px -909px;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.ly_member_add .fm_members.share_box .member button.remove {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  margin-top: -4px;
  padding: 5px;
}
.ly_member_add .fm_members.share_box .member button.remove:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -140px -964px;
  width: 12px;
  height: 12px;
  display: inline-block;
}
.ly_member_add .fm_members.share_box .member .name_box {
  display: block;
}
.ly_member_add .fm_members.share_box .member .name_box:first-child {
  margin-top: 0;
}
.ly_member_add button.opt_toggle {
  font-size: 14px;
  display: inline-block;
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
}
.ly_member_add button.opt_toggle:hover {
  background-color: #f2f2f2;
}
.ly_member_add button.opt_toggle:disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_add button.opt_toggle:disabled:hover {
  background-color: #fff;
}
.ly_member_add button.opt_toggle:after {
  content: "";
  background-position: -420px -964px;
  margin: -2px 0 0 6px;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  width: 8px;
  height: 8px;
  display: inline-block;
}
.ly_member_add button.opt_toggle.hover {
  background-color: #f2f2f2;
}
.ly_member_add button.opt_toggle.on {
  background-color: #f2f2f2;
}
.ly_member_add button.opt_toggle.disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_add button.opt_toggle.disabled:hover {
  background-color: #fff;
}
.ly_member_add button.opt_toggle.fold:after {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  width: 8px;
  height: 8px;
  display: inline-block;
  background-position: -948px -937px;
}
.ly_member_add .ocr_cover {
  padding: 24px 0 18px;
}
.ly_member_add .ocr_cover .btn_ocr {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #157efb;
  background-color: transparent;
  font-size: 14px;
  color: #157efb;
  line-height: 20px;
  padding: 10px;
  border-radius: 2px;
}
.ly_member_add .ocr_cover .btn_ocr:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -993px -539px;
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  margin: -2px 8px 0 0;
}


.ly_member_modify {
  width: 700px;
  padding-right: 0;
  padding-left: 0;
}
.ly_member_modify .tit_box {
  padding-right: 0;
}
.ly_member_modify .btn_box .prev {
  float: left;
}
.ly_member_modify .btn_box .prev button {
  margin-left: -12px;
}
.ly_member_modify .btn_box .lw_btn_text {
  font-size: 14px;
  display: inline-block;
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
}
.ly_member_modify .btn_box .lw_btn_text:hover {
  background-color: #f2f2f2;
}
.ly_member_modify .btn_box .lw_btn_text:disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_modify .btn_box .lw_btn_text:disabled:hover {
  background-color: #fff;
}
.ly_member_modify .btn_box .lw_btn_text.hover {
  background-color: #f2f2f2;
}
.ly_member_modify .btn_box .lw_btn_text.on {
  background-color: #f2f2f2;
}
.ly_member_modify .btn_box .lw_btn_text.disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_modify .btn_box .lw_btn_text.disabled:hover {
  background-color: #fff;
}
.ly_member_modify .alert {
  color: #767676;
}
.ly_member_modify .msg_alert {
  margin: 8px 0 16px;
  font-size: 12px;
}
.ly_member_modify .msg_alert em {
  color: #fd472b;
  font-style: normal;
}
.ly_member_modify .msg_alert strong {
  color: #157efb;
  font-weight: 400;
}
.ly_member_modify .noti {
  margin-top: 3px;
  padding-right: 24px;
}
.ly_member_modify .noti em.emp {
  width: auto;
  background: transparent;
  font-size: 12px;
  color: #157efb;
  font-style: normal;
}
.ly_member_modify .noti em.emp:before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #157efb;
  margin: -1px 6px 0 0;
  vertical-align: middle;
}
.ly_member_modify .member {
  min-height: 80px;
}
.ly_member_modify .member .thumb {
  position: relative;
  float: left;
  width: 36px;
  height: 36px;
  z-index: 20;
  width: 80px;
  height: 80px;
  margin-right: 20px;
}
.ly_member_modify .member .thumb img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50px;
}
.ly_member_modify .member .thumb .thmb_area:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 50px;
  z-index: 1;
}
.ly_member_modify .member .thumb .f_pic {
  position: absolute;
  right: -4px;
  bottom: -4px;
  z-index: 10;
  width: 28px;
  height: 28px;
}
.ly_member_modify .member .thumb .f_pic a {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #c5c5c6;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
}
.ly_member_modify .member .thumb .f_pic a:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -993px -563px;
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: 5px;
}
.ly_member_modify .member .thumb .ly_context {
  top: 88px;
  left: 0;
  z-index: 80;
}
.ly_member_modify .member .infor {
  color: #222;
  float: none;
  overflow: hidden;
}
.ly_member_modify .member .infor .txt {
  margin-bottom: -5px;
  font-size: 12px;
  line-height: 16px;
}
.ly_member_modify .member .infor .txt em.emp {
  margin: -3px 6px 0 0;
}
.ly_member_modify .member .infor .txt span {
  display: inline-block;
  vertical-align: middle;
}
.ly_member_modify .member .infor .txt span:first-child {
  width: 52%;
  max-width: 127px;
  white-space: nowrap;
}
.ly_member_modify .member .name_box {
  font-weight: 700;
  display: flex;
  margin-top: 8px;
}
.ly_member_modify .member .name_box span {
  margin-left: 6px;
}
.ly_member_modify .member .name_box i {
  display: inline-block;
  margin: -3px 6px 0 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
}
.ly_member_modify .member .name_box input {
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
  margin-left: 9px;
}
.ly_member_modify .member .name_box input:first-child {
  width: 49%;
  max-width: 118px;
  margin-left: 0;
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
}
.ly_member_modify .member:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.ly_member_modify .member .name_box.reverse {
  flex-direction: row-reverse;
}
.ly_member_modify .member .name_box.reverse input {
  width: 100%;
  margin: 0 9px 0 0;
}
.ly_member_modify .member .name_box.reverse input:first-child {
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
  margin: 0;
}
.ly_member_modify .member .name_box ~ .txt {
  padding-top: 10px;
}
.ly_member_modify .fm_members {
  margin-top: 16px;
  overflow: visible;
}
.ly_member_modify .fm_members em.emp {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #157efb;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
}
.ly_member_modify button.generate {
  font-size: 14px;
  display: inline-block;
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
}
.ly_member_modify button.generate:hover {
  background-color: #f2f2f2;
  background: transparent;
}
.ly_member_modify button.generate:disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_modify button.generate:disabled:hover {
  background-color: #fff;
}
.ly_member_modify button.generate:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -438px -220px;
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: -3px 4px 0 0;
  vertical-align: middle;
}
.ly_member_modify button.generate:active {
  background: transparent;
}
.ly_member_modify button.generate:focus {
  background: transparent;
}
.ly_member_modify button.generate.hover {
  background-color: #f2f2f2;
}
.ly_member_modify button.generate.on {
  background-color: #f2f2f2;
}
.ly_member_modify button.generate.disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_modify button.generate.disabled:hover {
  background-color: #fff;
}
.ly_member_modify .field {
  position: relative;
  min-height: 34px;
  margin-top: 16px;
}
.ly_member_modify .field .hd {
  position: absolute;
  top: 8px;
  left: 0;
  font-size: 12px;
  font-style: normal;
  max-width: 90px;
}
.ly_member_modify .field .hd em.emp {
  margin: -3px 6px 0 0;
}
.ly_member_modify .field .hd .num {
  color: #157efb;
}
.ly_member_modify .field .hd .ly_tooltip {
  margin-left: -44px;
}
.ly_member_modify .field .hd .ly_tooltip:before {
  left: 25px;
}
.ly_member_modify .field .box {
  margin-left: 100px;
}
.ly_member_modify .field .box .value_text {
  margin-right: 8px;
}
.ly_member_modify .field .box .btn_chg_id {
  display: inline-block;
  color: #157efb;
  text-decoration: underline;
}
.ly_member_modify .field .box .lw_note {
  font-size: 12px;
  color: #767676;
}
.ly_member_modify .field .box .srch_member {
  position: relative;
  display: flex;
}
.ly_member_modify .field .box .srch_member .lw_input {
  flex: 1 1 auto;
}
.ly_member_modify .field .box .srch_member .btn_contact {
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
  flex: 0 0 auto;
  margin-left: 8px;
}
.ly_member_modify .field .box .srch_member .btn_contact:hover {
  background-color: #f2f2f2;
}
.ly_member_modify .field .box .srch_member .btn_contact:disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_modify .field .box .srch_member .btn_contact:disabled:hover {
  background-color: #fff;
}
.ly_member_modify .field .box .srch_member .btn_contact.hover {
  background-color: #f2f2f2;
}
.ly_member_modify .field .box .srch_member .btn_contact.on {
  background-color: #f2f2f2;
}
.ly_member_modify .field .box .srch_member .btn_contact.disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_modify .field .box .srch_member .btn_contact.disabled:hover {
  background-color: #fff;
}
.ly_member_modify .field .box.justify {
  display: flex;
  min-width: 0;
}
.ly_member_modify .field .box.justify .value_text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  flex: 1 1 auto;
}
.ly_member_modify .field .box.justify .value_text.none_ellipsis {
  white-space: normal;
  text-overflow: clip;
}
.ly_member_modify .field .box.justify .aside {
  flex: 0 0 auto;
}
.ly_member_modify .field .box.justify .aside .lwds_size_small {
  margin-top: -2px;
}
.ly_member_modify .field .readonly .lw_input {
  background: #f2f2f2;
  color: #989898;
}
.ly_member_modify .field .lw_selectbox {
  max-width: 100%;
  overflow: hidden;
  vertical-align: middle;
}
.ly_member_modify .field .lw_selectbox .lw_selectbox_label {
  width: 181px;
}
.ly_member_modify .field .set_item button.add {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  position: absolute;
  bottom: 36px;
  right: 0;
}
.ly_member_modify .field .set_item button.add:before {
  content: "";
  display: block;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -676px -909px;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.ly_member_modify .field .set_item button.remove {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  margin-top: -2px;
  padding: 5px;
}
.ly_member_modify .field .set_item button.remove:before {
  content: "";
  display: block;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -140px -964px;
  width: 12px;
  height: 12px;
  display: inline-block;
}
.ly_member_modify .field .set_item .msg_alert + button.add {
  bottom: 60px;
}
.ly_member_modify .field .set_item button.add.after_msg {
  bottom: 38px;
}
.ly_member_modify .field .set_item.fm_email .item {
  padding-top: 0;
}
.ly_member_modify .field .set_item.fm_email button.add {
  bottom: 11px;
}
.ly_member_modify .field .set_item.fm_email .set_domain + button.add {
  bottom: 1px;
}
.ly_member_modify .field .set_item.fm_contact .item {
  padding-top: 0;
}
.ly_member_modify .field .set_item.fm_contact button.add {
  bottom: 17px;
}
.ly_member_modify .field .domain {
  display: block;
  margin: 8px 0 5px;
  font-weight: 400;
}
.ly_member_modify .field .wrap_phone {
  position: relative;
}
.ly_member_modify .field .wrap_phone .inp_phone {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 2px;
  -align-items: center;
}
.ly_member_modify .field .wrap_phone .inp_phone .country {
  margin: 0 24px 0 9px;
}
.ly_member_modify .field .wrap_phone .inp_phone .country img {
  display: block;
}
.ly_member_modify .field .wrap_phone .inp_phone .lw_input {
  height: 32px;
  padding-top: 8px;
  border: 0;
}
.ly_member_modify .field .wrap_phone .inp_phone button.opt {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 54px;
  height: 34px;
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
}
.ly_member_modify .field .wrap_phone .inp_phone button.opt:after {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -612px -964px;
  width: 8px;
  height: 8px;
  display: inline-block;
  display: block;
  margin: -2px 0 0 37px;
}
.ly_member_modify .field .wrap_phone .inp_phone.focus {
  border-color: #157efb;
}
.ly_member_modify .field .wrap_phone .inp_phone.invalid {
  border-color: #fd472b;
}
.ly_member_modify .field .wrap_phone .ly_codelist {
  position: absolute;
  top: 33px;
  right: 0;
  left: 0;
  z-index: 1;
  height: 176px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  overflow: auto;
  padding: 8px 0;
}
.ly_member_modify .field .wrap_phone .ly_codelist a {
  display: block;
  padding: 6px 0 5px;
  color: #222;
}
.ly_member_modify .field .wrap_phone .ly_codelist a:hover {
  background: #f1f1f1;
}
.ly_member_modify .field .wrap_phone .ly_codelist img {
  display: inline-block;
  margin: -2px 10px 0;
  vertical-align: middle;
}
.ly_member_modify .field .wrap_phone .ly_codelist span {
  margin-left: 2px;
}
.ly_member_modify .field .wrap_phone .ly_codelist .line {
  height: 1px;
  margin: 8px 0;
  overflow: hidden;
  background: #e5e5e6;
  font-size: 0;
  line-height: 0;
}
.ly_member_modify .field .fm_box {
  margin-top: 10px;
  display: inline-block;
}
.ly_member_modify .field .fm_box label {
  margin-right: 16px;
}
.ly_member_modify .field .fm_contact {
  margin-bottom: -8px;
}
.ly_member_modify .field .fm_contact .lw_input {
  margin-bottom: 8px;
}
.ly_member_modify .field .fm_contact .lw_selectbox {
  margin-bottom: 8px;
}
.ly_member_modify .field .fm_contact span {
  margin: 4px 0;
  padding: 0 8px;
}
.ly_member_modify .field .fm_contact .email_domain {
  display: none;
}
.ly_member_modify .field .fm_contact .sns_name {
  display: none;
}
.ly_member_modify .field .fm_contact .custom_type .email_domain {
  display: inline-block;
}
.ly_member_modify .field .fm_contact .custom_type .sns_name {
  display: inline-block;
}
.ly_member_modify .field .fm_contact .custom_type .lw_selectbox {
  display: none;
}
.ly_member_modify .field .fm_contact .item {
  position: relative;
}
.ly_member_modify .field .fm_contact .item + .item {
  margin-top: 4px;
}
.ly_member_modify .field .fm_contact .contact {
  width: 181px;
  margin: 0 0 8px;
}
.ly_member_modify .field .fm_contact span.contact {
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
}
.ly_member_modify .field .fm_contact span.contact em {
  padding: 0 0 0 8px;
  color: #767676;
  font-style: normal;
}
.ly_member_modify .field .fm_contact span.contact span {
  padding: 0 0 0 8px;
}
.ly_member_modify .field .fm_contact span.contact strong {
  font-weight: 400;
}
.ly_member_modify .field .fm_contact span.contact i {
  color: #989898;
  font-style: normal;
}
.ly_member_modify .field .fm_contact .member_list {
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
}
.ly_member_modify .field .fm_contact .member_list span {
  padding: 0;
}
.ly_member_modify .field .fm_email {
  margin-bottom: -8px;
}
.ly_member_modify .field .fm_email .lw_input {
  margin-bottom: 8px;
}
.ly_member_modify .field .fm_email .lw_selectbox {
  margin-bottom: 8px;
}
.ly_member_modify .field .fm_email span {
  margin: 4px 0;
  padding: 0 8px;
}
.ly_member_modify .field .fm_email .email_domain {
  display: none;
  width: 181px;
}
.ly_member_modify .field .fm_email .sns_name {
  display: none;
}
.ly_member_modify .field .fm_email .custom_type .email_domain {
  display: inline-block;
}
.ly_member_modify .field .fm_email .custom_type .sns_name {
  display: inline-block;
}
.ly_member_modify .field .fm_email .custom_type .lw_selectbox {
  display: none;
}
.ly_member_modify .field .fm_email .domain {
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
.ly_member_modify .field .fm_email .email_id {
  width: 181px;
}
.ly_member_modify .field .fm_email .item .lw_selectbox_label {
  width: 181px;
  min-width: 0;
}
.ly_member_modify .field .fm_email .msg_alert {
  margin: 0;
  padding-bottom: 8px;
}
.ly_member_modify .field .fm_email .readonly {
  position: relative;
}
.ly_member_modify .field .fm_email .readonly:before {
  content: "";
  position: absolute;
  top: 8px;
  left: -24px;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -967px -317px;
  width: 16px;
  height: 16px;
  display: inline-block;
}
.ly_member_modify .field .fm_sns {
  margin-bottom: -8px;
}
.ly_member_modify .field .fm_sns .lw_input {
  margin-bottom: 8px;
}
.ly_member_modify .field .fm_sns .lw_selectbox {
  margin-bottom: 8px;
}
.ly_member_modify .field .fm_sns span {
  margin: 4px 0;
  padding: 0 8px;
}
.ly_member_modify .field .fm_sns .email_domain {
  display: none;
}
.ly_member_modify .field .fm_sns .sns_name {
  display: none;
}
.ly_member_modify .field .fm_sns .custom_type .email_domain {
  display: inline-block;
}
.ly_member_modify .field .fm_sns .custom_type .sns_name {
  display: inline-block;
}
.ly_member_modify .field .fm_sns .custom_type .lw_selectbox {
  display: none;
}
.ly_member_modify .field .fm_sns .lw_input.sns_name {
  width: 181px;
  display: none;
}
.ly_member_modify .field .fm_contact.custom_type .email_domain {
  display: inline-block;
}
.ly_member_modify .field .fm_contact.custom_type .sns_name {
  display: inline-block;
}
.ly_member_modify .field .fm_contact.custom_type .lw_selectbox {
  display: none;
}
.ly_member_modify .field .fm_email.custom_type .email_domain {
  display: inline-block;
}
.ly_member_modify .field .fm_email.custom_type .sns_name {
  display: inline-block;
}
.ly_member_modify .field .fm_email.custom_type .lw_selectbox {
  display: none;
}
.ly_member_modify .field .fm_sns.custom_type .email_domain {
  display: inline-block;
}
.ly_member_modify .field .fm_sns.custom_type .sns_name {
  display: inline-block;
}
.ly_member_modify .field .fm_sns.custom_type .lw_selectbox {
  display: none;
}
.ly_member_modify .field .fm_sns.custom_type .lw_input.sns_name {
  display: block;
}
.ly_member_modify .field .fm_func {
  background: #fafafb;
  border: 1px solid #e5e5e6;
  border-radius: 2px;
  padding-top: 1px;
}
.ly_member_modify .field .fm_func .func {
  position: relative;
  margin: 0 16px;
  padding: 13px 0;
}
.ly_member_modify .field .fm_func .func + .func {
  border-top: 1px solid #e5e5e6;
}
.ly_member_modify .field .fm_func .label {
  display: inline-block;
}
.ly_member_modify .field .fm_func .label i {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
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
.ly_member_modify .field .fm_func .label .num {
  color: #157efb;
}
.ly_member_modify .field .fm_func .lw_toggle + label {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -12px;
}
.ly_member_modify .field .fm_func .msg_alert {
  margin-bottom: 0;
}
.ly_member_modify .field .fm_func .has_depth .msg_alert {
  margin-left: 30px;
}
.ly_member_modify .field .fm_func + .fm_func {
  margin-top: 10px !important;
}
.ly_member_modify .field .pw_option {
  background: #fafafb;
  border: 1px solid #e5e5e6;
  border-radius: 2px;
  padding: 2px 16px 14px;
}
.ly_member_modify .field .pw_option li {
  margin-top: 8px;
}
.ly_member_modify .field .pw_option .txt {
  position: relative;
  margin-left: 22px;
  font-size: 12px;
  color: #767676;
  padding-left: 8px;
}
.ly_member_modify .field .pw_option .txt:before {
  content: "";
  position: absolute;
  top: 7px;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #767676;
  border-radius: 50%;
}
.ly_member_modify .field .pw_option .alert {
  margin-top: 6px;
  font-size: 12px;
  color: #fd472b;
}
.ly_member_modify .field .pw_option .pw_regis {
  max-width: 224px;
  height: 34px;
  margin-top: 8px;
  padding: 4px 10px 0;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 2px;
}
.ly_member_modify .field .pw_option .pw_regis input {
  box-sizing: border-box;
  float: left;
  width: calc(100% - 22px);
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  color: #222;
  line-height: 22px;
}
.ly_member_modify .field .pw_option .pw_regis .btn_masking {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
}
.ly_member_modify .field .pw_option .pw_regis.focus {
  border-color: #157efb;
}
.ly_member_modify .field .pw_option .pw_user {
  margin-top: 8px;
}
.ly_member_modify .field .pw_option .pw_user .lw_input {
  max-width: 224px;
}
.ly_member_modify .field .pw_option .pw_user label {
  margin-top: 8px;
  font-size: 12px;
  color: #767676;
  line-height: 1.5;
}
.ly_member_modify .field .pw_option .pw_user label:before {
  top: 0;
  transform: none;
}
.ly_member_modify .field.custom .lw_input + .lw_input {
  margin-top: 8px;
}
.ly_member_modify .field.custom .has_label + .has_label {
  margin-top: 8px;
}
.ly_member_modify .field.set_position button.add {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  position: absolute;
  bottom: 36px;
  right: 0;
}
.ly_member_modify .field.set_position button.add:before {
  content: "";
  display: block;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -676px -909px;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.ly_member_modify .field.set_position button.remove {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  margin-top: -2px;
  padding: 5px;
}
.ly_member_modify .field.set_position button.remove:before {
  content: "";
  display: block;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -140px -964px;
  width: 12px;
  height: 12px;
  display: inline-block;
}
.ly_member_modify .field.set_position .item + .item {
  margin-top: 16px;
}
.ly_member_modify .field.set_position .team {
  position: relative;
}
.ly_member_modify .field.set_position .chk_item {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}
.ly_member_modify .field.set_position .chk_item:checked + label:before {
  background-position: -967px -245px;
}
.ly_member_modify .field.set_position .chk_item + label {
  position: absolute;
  top: 6px;
  left: -25px;
  z-index: 1;
  box-sizing: border-box;
  padding: 3px;
  font-size: 0;
  line-height: 0;
}
.ly_member_modify .field.set_position .chk_item + label:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -967px -221px;
  width: 16px;
  height: 16px;
  display: inline-block;
}
.ly_member_modify .field.set_position .fmbox {
  position: relative;
  font-size: 14px;
  color: #222;
  line-height: 21px;
  padding: 6px 0 7px 10px;
  box-sizing: border-box;
  height: 34px;
  border: 1px solid #ddd;
  border-radius: 2px;
  width: 100%;
  transform: translateZ(0);
  display: block;
  margin: 0 0 8px;
  padding: 0;
}
.ly_member_modify .field.set_position .fmbox:focus {
  border-color: #157efb;
  outline: none;
}
.ly_member_modify .field.set_position .fmbox:disabled {
  opacity: 0.4;
  background-color: #f8f8f8;
}
.ly_member_modify .field.set_position .fmbox input {
  background: transparent;
  border: 0;
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 6px 10px 7px;
  line-height: 1.5;
}
.ly_member_modify .field.set_position .fmbox span {
  display: block;
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
.ly_member_modify .field.set_position .fmbox.invalid {
  border-color: #fd472b;
}
.ly_member_modify .field.set_position .fmbox.valid {
  background-color: #e7f2fe;
}
.ly_member_modify .field.set_position .fmbox.focus {
  border-color: #157efb;
  outline: none;
}
.ly_member_modify .field.set_position .fmbox.disabled {
  opacity: 0.4;
  background-color: #f8f8f8;
}
.ly_member_modify .field.set_position .fmbox[disabled] {
  opacity: 0.4;
  background-color: #f8f8f8;
}
.ly_member_modify .field.set_position .chk_leader {
  clear: both;
  margin-top: 6px;
}
.ly_member_modify .field_box {
  position: relative;
  margin: 24px -16px;
  padding: 19px 16px 16px;
  background: #fafafb;
  box-shadow: 0 1px 0 0 #eee, inset 0 1px 0 0 #eee;
}
.ly_member_modify .field_box .add_field {
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
.ly_member_modify .field_box .remove_field {
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
.ly_member_modify .field_box .field {
  margin: 8px 0 0;
  clear: both;
}
.ly_member_modify .field_box + .field_box {
  margin-top: -24px;
}
.ly_member_modify .txtbox {
  margin-bottom: 14px;
}
.ly_member_modify .txtbox .hd {
  top: 3px;
}
.ly_member_modify .fm_members.group_box .member .name_box input {
  width: 100%;
  max-width: none;
}
.ly_member_modify .fm_members.group_box .member .name_box input:first-child {
  width: 100%;
  max-width: none;
}
.ly_member_modify .fm_members.group_box .member .txt {
  margin-top: 16px;
}
.ly_member_modify .fm_members.group_box .member .txt:first-child {
  margin-top: 0;
}
.ly_member_modify .fm_members.group_box .field .func .lw_input {
  margin-right: 8px;
}
.ly_member_modify .fm_members.group_box .field .domain {
  display: inline-block;
  vertical-align: middle;
}
.ly_member_modify .fm_members.group_box .field .hd.has_txt {
  white-space: normal;
  overflow: visible;
}
.ly_member_modify .fm_members.team_box .member .name_box input:first-child {
  width: 100%;
  max-width: none;
}
.ly_member_modify .fm_members.team_box .field .func .lw_input {
  margin-right: 8px;
}
.ly_member_modify .fm_members.team_box .field .domain {
  display: inline-block;
  vertical-align: middle;
}
.ly_member_modify .fm_members.team_box .field .hd.has_txt {
  white-space: normal;
  overflow: visible;
}
.ly_member_modify .fm_members.sharegroup_box {
  margin-top: 0;
}
.ly_member_modify .fm_members.sharegroup_box .field.txt_type {
  margin-top: 10px;
}
.ly_member_modify .fm_members.sharegroup_box .field.txt_type .hd {
  top: 4px;
}
.ly_member_modify .fm_members.sharegroup_box .fm_memo textarea {
  width: 100%;
  height: 68px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 7px 8px;
  resize: none;
  color: #222;
  line-height: 1.5;
}
.ly_member_modify .fm_members.sharegroup_box .fm_type {
  min-height: 23px;
}
.ly_member_modify .fm_members.sharegroup_box .fm_type span + span {
  margin-left: 35px;
}
.ly_member_modify .fm_members.sharegroup_box .srch_member .desc {
  padding: 4px 0 0;
  font-size: 12px;
  color: #767676;
}
.ly_member_modify .fm_members.share_box .member .custom_box {
  position: relative;
}
.ly_member_modify .fm_members.share_box .member .custom_box .name_box {
  width: calc(100% - 35px);
}
.ly_member_modify .fm_members.share_box .member button.add {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  position: absolute;
  bottom: 0;
  right: 0;
}
.ly_member_modify .fm_members.share_box .member button.add:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -676px -909px;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.ly_member_modify .fm_members.share_box .member button.remove {
  background: transparent;
  border: 0;
  font-size: 0;
  line-height: 0;
  margin-top: -4px;
  padding: 5px;
}
.ly_member_modify .fm_members.share_box .member button.remove:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -140px -964px;
  width: 12px;
  height: 12px;
  display: inline-block;
}
.ly_member_modify .fm_members.share_box .member .name_box {
  display: block;
}
.ly_member_modify .fm_members.share_box .member .name_box:first-child {
  margin-top: 0;
}
.ly_member_modify button.opt_toggle {
  font-size: 14px;
  display: inline-block;
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
}
.ly_member_modify button.opt_toggle:hover {
  background-color: #f2f2f2;
}
.ly_member_modify button.opt_toggle:disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_modify button.opt_toggle:disabled:hover {
  background-color: #fff;
}
.ly_member_modify button.opt_toggle:after {
  content: "";
  background-position: -420px -964px;
  margin: -2px 0 0 6px;
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  width: 8px;
  height: 8px;
  display: inline-block;
}
.ly_member_modify button.opt_toggle.hover {
  background-color: #f2f2f2;
}
.ly_member_modify button.opt_toggle.on {
  background-color: #f2f2f2;
}
.ly_member_modify button.opt_toggle.disabled {
  cursor: default;
  opacity: 0.4;
}
.ly_member_modify button.opt_toggle.disabled:hover {
  background-color: #fff;
}
.ly_member_modify button.opt_toggle.fold:after {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  width: 8px;
  height: 8px;
  display: inline-block;
  background-position: -948px -937px;
}
.ly_member_modify .ocr_cover {
  padding: 24px 0 18px;
}
.ly_member_modify .ocr_cover .btn_ocr {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #157efb;
  background-color: transparent;
  font-size: 14px;
  color: #157efb;
  line-height: 20px;
  padding: 10px;
  border-radius: 2px;
}
.ly_member_modify .ocr_cover .btn_ocr:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -993px -539px;
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  margin: -2px 8px 0 0;
}
@media screen and (max-width: 767px) {
.ly_member_add {
  width: auto;
  max-width: none;
}
.ly_member_add .scroller {
  padding: 1px 16px 24px;
  padding: 0 16px;
}
.ly_member_add .scroller .tab_menu {
  margin-left: -16px;
  margin-right: -16px;
}
.ly_member_add .scroller .noti .alert {
  font-size: 14px;
}
.ly_member_add .scroller .noti em.emp {
  font-size: 14px;
}
.ly_member_add .noti {
  text-align: right;
  text-align: left;
}
.ly_member_add .noti .alert {
  float: left;
  font-size: 14px;
  font-size: 14px;
}
.ly_member_add .noti em.emp {
  font-size: 14px;
  font-size: 14px;
}
.ly_member_add .tit_box .tit {
  display: block;
}
.ly_member_add .tit_box .alert {
  display: none;
}
.ly_member_add .noti.has_msg {
  display: flex;
  padding-right: 0;
}
.ly_member_add .noti.has_msg .emp {
  flex: 0 0 auto;
}
.ly_member_add .noti.has_msg .alert {
  flex: 1 1 auto;
  margin-right: 16px;
  float: none;
}
.ly_member_add .field.set_position .only_team + button.add {
  bottom: 30px;
}
.ly_member_add .field .fm_sns.custom_type .lw_selectbox {
  display: inline-block;
}
.ly_member_add .field .fm_contact button.remove {
  margin-top: -8px;
}
.ly_member_add .field .fm_func .lw_input {
  width: 128px;
}
.ly_member_add .fm_members.group_box .field .hd {
  display: block;
  position: static;
  max-width: none;
}
.ly_member_add .fm_members.group_box .field .box {
  margin-left: 0;
  margin-top: 6px;
}
.ly_member_add .fm_members.team_box .field .hd {
  display: block;
  position: static;
  max-width: none;
}
.ly_member_add .fm_members.team_box .field .box {
  margin-left: 0;
  margin-top: 6px;
}
.ly_member_add .fm_members.sharegroup_box {
  width: auto;
}
.ly_member_add .fm_members.sharegroup_box .field .hd {
  display: block;
  margin: 0 0 4px;
  position: static;
}
.ly_member_add .fm_members.sharegroup_box .field .box {
  margin-left: 0;
}
.ly_member_add .fm_members.sharegroup_box .fm_type {
  padding-top: 2px;
}
.ly_member_add .fm_members.sharegroup_box .fm_type span {
  display: block;
  margin: 4px 0 4px 12px;
}
.ly_member_add .fm_members.sharegroup_box .fm_type span + span {
  margin: 4px 0 4px 12px;
}
.ly_member_add .fm_members.share_box .member .name_box input {
  display: block;
  width: 100%;
  max-width: none;
  margin: 0 0 8px;
}
  .ly_member_added {
  width: auto;
  max-width: none;
}
  .ly_member_added .scroller {
  padding: 1px 16px 24px;
}
  .ly_member_added .scroller .tab_menu {
  margin-left: -16px;
  margin-right: -16px;
}
  .ly_member_added .noti {
  text-align: right;
}
  .ly_member_added .noti .alert {
  float: left;
  font-size: 14px;
}
  .ly_member_added .noti em.emp {
  font-size: 14px;
}
  .ly_member_detail {
  width: auto;
  max-width: none;
}
  .ly_member_detail .scroller {
  padding: 1px 16px 24px;
}
  .ly_member_detail .scroller .tab_menu {
  margin-left: -16px;
  margin-right: -16px;
}
  .ly_member_modify {
  width: auto;
  max-width: none;
}
.ly_member_modify .scroller {
  padding: 1px 16px 24px;
  padding: 0 16px;
}
.ly_member_modify .scroller .tab_menu {
  margin-left: -16px;
  margin-right: -16px;
}
.ly_member_modify .scroller .noti .alert {
  font-size: 14px;
}
.ly_member_modify .scroller .noti em.emp {
  font-size: 14px;
}
.ly_member_modify .noti {
  text-align: right;
  text-align: left;
}
.ly_member_modify .noti .alert {
  float: left;
  font-size: 14px;
  font-size: 14px;
}
.ly_member_modify .noti em.emp {
  font-size: 14px;
  font-size: 14px;
}
.ly_member_modify .tit_box .tit {
  display: block;
}
.ly_member_modify .tit_box .alert {
  display: none;
}
.ly_member_modify .noti.has_msg {
  display: flex;
  padding-right: 0;
}
.ly_member_modify .noti.has_msg .emp {
  flex: 0 0 auto;
}
.ly_member_modify .noti.has_msg .alert {
  flex: 1 1 auto;
  margin-right: 16px;
  float: none;
}
.ly_member_modify .field.set_position .only_team + button.add {
  bottom: 30px;
}
.ly_member_modify .field .fm_sns.custom_type .lw_selectbox {
  display: inline-block;
}
.ly_member_modify .field .fm_contact button.remove {
  margin-top: -8px;
}
.ly_member_modify .field .fm_func .lw_input {
  width: 128px;
}
.ly_member_modify .fm_members.group_box .field .hd {
  display: block;
  position: static;
  max-width: none;
}
.ly_member_modify .fm_members.group_box .field .box {
  margin-left: 0;
  margin-top: 6px;
}
.ly_member_modify .fm_members.team_box .field .hd {
  display: block;
  position: static;
  max-width: none;
}
.ly_member_modify .fm_members.team_box .field .box {
  margin-left: 0;
  margin-top: 6px;
}
.ly_member_modify .fm_members.sharegroup_box {
  width: auto;
}
.ly_member_modify .fm_members.sharegroup_box .field .hd {
  display: block;
  margin: 0 0 4px;
  position: static;
}
.ly_member_modify .fm_members.sharegroup_box .field .box {
  margin-left: 0;
}
.ly_member_modify .fm_members.sharegroup_box .fm_type {
  padding-top: 2px;
}
.ly_member_modify .fm_members.sharegroup_box .fm_type span {
  display: block;
  margin: 4px 0 4px 12px;
}
.ly_member_modify .fm_members.sharegroup_box .fm_type span + span {
  margin: 4px 0 4px 12px;
}
.ly_member_modify .fm_members.share_box .member .name_box input {
  display: block;
  width: 100%;
  max-width: none;
  margin: 0 0 8px;
}
  .ly_member_select {
  width: auto;
  max-width: none;
}
  .ly_member_select .scroller {
  padding: 1px 16px 24px;
}
  .ly_member_select .scroller .tab_menu {
  margin-left: -16px;
  margin-right: -16px;
}
}
@media screen and (min-width: 768px) {
.ly_member_add .scroller .alert {
  display: none;
}
.ly_member_add .tit {
  margin-left: 24px;
  margin-left: 24px;
}
.ly_member_add .tit_box {
  display: inline;
  margin-right: -4px;
}
.ly_member_add .tit_box .tit {
  display: inline;
}
.ly_member_add .btn_box {
  border-top: 1px solid #e5e5e6;
}
.ly_member_add .noti {
  padding-left: 24px;
}
.ly_member_add .member .thumb {
  margin-top: 3px;
  margin-right: 40px;
}
.ly_member_add .member .thumb .ly_context {
  left: 59px;
}
.ly_member_add .member .infor .txt span:first-child {
  width: 185px;
  max-width: none;
}
.ly_member_add .member .name_box input:first-child {
  max-width: none;
}
.ly_member_add .member .name_box.reverse input:last-child {
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
}
.ly_member_add .fm_members {
  width: auto;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 20px;
  box-sizing: border-box;
}
.ly_member_add .field .hd {
  max-width: 110px;
}
.ly_member_add .field .box {
  margin-left: 120px;
}
.ly_member_add .field .box .lw_note {
  margin-top: 6px;
}
.ly_member_add .field .lw_input.w_limit {
  max-width: 176px;
}
.ly_member_add .field .lw_selectbox .lw_selectbox_label {
  width: 240px;
}
.ly_member_add .field .set_item.fm_email button.add {
  bottom: 16px;
}
.ly_member_add .field .set_item.fm_email .set_domain + button.add {
  bottom: 16px;
}
.ly_member_add .field .set_item.fm_contact button.add {
  bottom: 16px;
}
.ly_member_add .field .set_item .msg_alert + button.add {
  bottom: 42px;
}
.ly_member_add .field .domain {
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
.ly_member_add .field .fm_email .email_domain {
  width: 200px;
}
.ly_member_add .field .fm_email .domain {
  width: 220px;
  margin: 0 0 0 8px;
  line-height: 34px;
}
.ly_member_add .field .fm_email .item .domain {
  float: left;
}
.ly_member_add .field .fm_email .item .lw_selectbox {
  float: left;
}
.ly_member_add .field .fm_email .item input {
  float: left;
}
.ly_member_add .field .fm_email .item span {
  float: left;
  margin-top: 6px;
}
.ly_member_add .field .fm_email .item .lw_selectbox_label {
  width: 200px;
}
.ly_member_add .field .fm_email .item:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
}
.ly_member_add .field .fm_email .item button.remove {
  margin: 5px 0 0 3px;
}
.ly_member_add .field .fm_sns {
  display: flex;
}
.ly_member_add .field .fm_sns .lw_input {
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
  min-width: 0;
}
.ly_member_add .field .fm_sns .lw_input.sns_name {
  margin-right: 8px;
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
}
.ly_member_add .field .fm_sns .lw_selectbox {
  margin-right: 8px;
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
}
.ly_member_add .field .fm_sns .lw_selectbox_label {
  width: 176px;
}
.ly_member_add .field .fm_sns.custom_type .lw_input.sns_name {
  display: block;
}
.ly_member_add .field .fm_sns.custom_type .lw_selectbox {
  display: block;
}
.ly_member_add .field .fm_date {
  display: flex;
}
.ly_member_add .field .fm_date .fm_box {
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
  height: 23px;
  margin: auto -16px auto 16px;
}
.ly_member_add .field .fm_date .lw_input {
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
}
.ly_member_add .field .fm_contact span.contact {
  margin-bottom: 0;
}
.ly_member_add .field .fm_contact .member_list {
  top: 33px;
  left: 248px;
  width: 280px;
}
.ly_member_add .field .fm_contact .lw_input {
  width: 240px;
}
.ly_member_add .field .fm_contact .lw_input.contact {
  width: 200px;
  margin-left: 8px;
}
.ly_member_add .field .pw_option .txt {
  margin-top: 6px;
}
.ly_member_add .field .pw_option .alert {
  margin-left: 22px;
}
.ly_member_add .field .pw_option .pw_regis {
  margin-left: 22px;
}
.ly_member_add .field .pw_option .pw_user {
  margin-left: 22px;
}
.ly_member_add .field.custom .has_label {
  clear: both;
  display: flex;
}
.ly_member_add .field.custom .has_label .lw_input + .lw_input {
  margin-top: 0;
}
.ly_member_add .field.custom .has_label .inp_label {
  width: 176px;
  margin-right: 8px;
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
}
.ly_member_add .field.set_position .fmbox {
  display: inline-block;
  float: left;
  max-width: 240px;
  margin: 0 8px 0 0;
}
.ly_member_add .field.set_position .lw_selectbox_label {
  width: 200px;
}
.ly_member_add .field.set_position .only_team .fmbox {
  max-width: 448px;
  float: none;
  margin-right: 0;
  vertical-align: middle;
}
.ly_member_add .field_box {
  margin: 22px -24px;
  padding: 16px 24px;
}
.ly_member_add .field_box .add_field {
  position: absolute;
  top: 24px;
  right: 35px;
}
.ly_member_add .field_box .remove_field {
  position: absolute;
  top: 24px;
  right: 35px;
}
.ly_member_add button.opt_toggle {
  width: calc(100% - 48px);
  margin-right: 24px;
  margin-left: 24px;
}
.ly_member_add .ocr_cover {
  padding-left: 24px;
  padding-right: 24px;
}
.ly_member_added .scroller {
  margin-bottom: 57px;
  max-height: 568px;
  overflow: auto;
  overflow-x: hidden;
}
.ly_member_modify .scroller {
  margin-bottom: 57px;
  max-height: 568px;
  overflow: auto;
  overflow-x: hidden;
  margin-top: 16px;
  padding: 0;
  box-sizing: border-box;
}
.ly_member_modify .scroller .alert {
  display: none;
}
.ly_member_modify .tit {
  margin-left: 24px;
  margin-left: 24px;
}
.ly_member_modify .tit_box {
  display: inline;
  margin-right: -4px;
}
.ly_member_modify .tit_box .tit {
  display: inline;
}
.ly_member_modify .btn_box {
  border-top: 1px solid #e5e5e6;
}
.ly_member_modify .noti {
  padding-left: 24px;
}
.ly_member_modify .member .thumb {
  margin-top: 3px;
  margin-right: 40px;
}
.ly_member_modify .member .thumb .ly_context {
  left: 59px;
}
.ly_member_modify .member .infor .txt span:first-child {
  width: 185px;
  max-width: none;
}
.ly_member_modify .member .name_box input:first-child {
  width: 176px;
  max-width: none;
}
.ly_member_modify .member .name_box.reverse input:last-child {
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
  width: 176px;
}
.ly_member_modify .fm_members {
  width: auto;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 20px;
  box-sizing: border-box;
}
.ly_member_modify .field .hd {
  max-width: 110px;
}
.ly_member_modify .field .box {
  margin-left: 120px;
}
.ly_member_modify .field .box .lw_note {
  margin-top: 6px;
}
.ly_member_modify .field .lw_input.w_limit {
  max-width: 176px;
}
.ly_member_modify .field .lw_selectbox .lw_selectbox_label {
  width: 240px;
}
.ly_member_modify .field .set_item.fm_email button.add {
  bottom: 16px;
}
.ly_member_modify .field .set_item.fm_email .set_domain + button.add {
  bottom: 16px;
}
.ly_member_modify .field .set_item.fm_contact button.add {
  bottom: 16px;
}
.ly_member_modify .field .set_item .msg_alert + button.add {
  bottom: 42px;
}
.ly_member_modify .field .domain {
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
.ly_member_modify .field .fm_email .email_id {
  width: 240px;
}
.ly_member_modify .field .fm_email .email_domain {
  width: 200px;
}
.ly_member_modify .field .fm_email .domain {
  width: 220px;
  margin: 0 0 0 8px;
  line-height: 34px;
}
.ly_member_modify .field .fm_email .item .domain {
  float: left;
}
.ly_member_modify .field .fm_email .item .lw_selectbox {
  float: left;
}
.ly_member_modify .field .fm_email .item input {
  float: left;
}
.ly_member_modify .field .fm_email .item span {
  float: left;
  margin-top: 6px;
}
.ly_member_modify .field .fm_email .item .lw_selectbox_label {
  width: 200px;
}
.ly_member_modify .field .fm_email .item:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
}
.ly_member_modify .field .fm_email .item button.remove {
  margin: 5px 0 0 3px;
}
.ly_member_modify .field .fm_sns {
  display: flex;
}
.ly_member_modify .field .fm_sns .lw_input {
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
  min-width: 0;
}
.ly_member_modify .field .fm_sns .lw_input.sns_name {
  margin-right: 8px;
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
}
.ly_member_modify .field .fm_sns .lw_selectbox {
  margin-right: 8px;
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
}
.ly_member_modify .field .fm_sns .lw_selectbox_label {
  width: 176px;
}
.ly_member_modify .field .fm_sns.custom_type .lw_input.sns_name {
  display: block;
}
.ly_member_modify .field .fm_sns.custom_type .lw_selectbox {
  display: block;
}
.ly_member_modify .field .fm_date {
  display: flex;
}
.ly_member_modify .field .fm_date .fm_box {
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
  height: 23px;
  margin: auto -16px auto 16px;
}
.ly_member_modify .field .fm_date .lw_input {
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
}
.ly_member_modify .field .fm_contact span.contact {
  margin-bottom: 0;
}
.ly_member_modify .field .fm_contact .member_list {
  top: 33px;
  left: 248px;
  width: 280px;
}
.ly_member_modify .field .fm_contact .lw_input {
  width: 240px;
}
.ly_member_modify .field .fm_contact .lw_input.contact {
  width: 200px;
  margin-left: 8px;
}
.ly_member_modify .field .pw_option .txt {
  margin-top: 6px;
}
.ly_member_modify .field .pw_option .alert {
  margin-left: 22px;
}
.ly_member_modify .field .pw_option .pw_regis {
  margin-left: 22px;
}
.ly_member_modify .field .pw_option .pw_user {
  margin-left: 22px;
}
.ly_member_modify .field.custom .has_label {
  clear: both;
  display: flex;
}
.ly_member_modify .field.custom .has_label .lw_input + .lw_input {
  margin-top: 0;
}
.ly_member_modify .field.custom .has_label .inp_label {
  width: 176px;
  margin-right: 8px;
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
}
.ly_member_modify .field.set_position .fmbox {
  display: inline-block;
  float: left;
  max-width: 240px;
  margin: 0 8px 0 0;
}
.ly_member_modify .field.set_position .lw_selectbox_label {
  width: 200px;
}
.ly_member_modify .field.set_position .only_team .fmbox {
  max-width: 448px;
  float: none;
  margin-right: 0;
  vertical-align: middle;
}
.ly_member_modify .field_box {
  margin: 22px -24px;
  padding: 16px 24px;
}
.ly_member_modify .field_box .add_field {
  position: absolute;
  top: 24px;
  right: 35px;
}
.ly_member_modify .field_box .remove_field {
  position: absolute;
  top: 24px;
  right: 35px;
}
  .ly_member_modify button.opt_toggle {
  width: calc(100% - 48px);
  margin-right: 24px;
  margin-left: 24px;
}
.ly_member_modify .ocr_cover {
  padding-left: 24px;
  padding-right: 24px;
}
}
@media screen and (max-width: 320px) {
.ly_member_add .field .set_item.fm_contact button.add {
  bottom: 1px;
}
.ly_member_modify .field .set_item.fm_contact button.add {
  bottom: 1px;
}
}
@media screen and (max-height: 710px) and (min-width: 892px) {
  .ly_member_add {
    height: 100%;
  }
    .ly_member_modify {
    height: 100%;
  }
    .ly_member_add.ly_page .btn_box + .scroller {
    position: absolute;
    top: 62px;
    left: 0;
    right: 0;
    bottom: 82px;
    overflow: auto;
    margin: 0;
  }
    .ly_member_modify.ly_page .btn_box + .scroller {
    position: absolute;
    top: 62px;
    left: 0;
    right: 0;
    bottom: 82px;
    overflow: auto;
    margin: 0;
  }
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
.lw_input.focus, .lw_input:focus {
  border-color: #157efb;
  outline: none;
}
.lw_input.disabled, .lw_input:disabled, .lw_input[disabled] {
  opacity: 0.4;
  background-color: #f8f8f8;
}
.lw_btn {
  font-size: 14px;
  display: inline-block;
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
.lw_btn.hover, .lw_btn.on, .lw_btn:hover {
  background-color: #f2f2f2;
}
.lw_btn.disabled, .lw_btn:disabled {
  cursor: default;
  opacity: 0.4;
}
.lw_btn.disabled:hover, .lw_btn:disabled:hover {
  background-color: #fff;
}
.lw_selectbox, .lw_selectbox .lw_selectbox_label {
  position: relative;
  display: inline-block;
  max-width: 100%;
}
.lw_selectbox .lw_selectbox_label {
  font-size: 14px;
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
  transform: translateZ(0);
}
.lw_selectbox .lw_selectbox_label.hover, .lw_selectbox .lw_selectbox_label.on, .lw_selectbox .lw_selectbox_label:hover {
  background-color: #f2f2f2;
}
.lw_selectbox .lw_selectbox_label.disabled, .lw_selectbox .lw_selectbox_label:disabled {
  cursor: default;
  opacity: 0.4;
}
.lw_selectbox .lw_selectbox_label.disabled:hover, .lw_selectbox .lw_selectbox_label:disabled:hover {
  background-color: #fff;
}
.lw_selectbox .lw_selectbox_label:after {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
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
  transform: translateY(-50%);
}
.lw_selectbox .lw_selectbox_source {
  min-width: 100%;
  height: 100%;
  max-width: 100%;
  height: 34px;
  width: 100%;
  padding: 6px 12px 6px;
  outline: none;
  border: 1px solid #ddd;
}
.lw_selectbox.disabled {
  cursor: default;
  opacity: 0.4;
}
.lw_radio {
  position: absolute;
  clip: rect(0 0 0 0);
}
.lw_radio + label {
  position: relative;
  display: inline-block;
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
.lw_radio + label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent, transparent), url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -993px -467px;
  width: 16px;
  height: 16px;
  display: inline-block;
}
.lw_radio + label:hover:before {
  background-position: -993px -419px;
}
.lw_radio:checked + label {
  color: #157efb;
}
.lw_radio:checked + label:before {
  background-position: -993px -491px;
}
.lw_radio:disabled + label {
  color: rgba(34, 34, 34, .4);
}
.lw_radio:disabled + label:before {
  background-position: -993px -443px;
}
.lw_radio:disabled + label:hover {
  cursor: default;
}
.lw_radio:disabled:checked + label {
  color: #222;
}
.lw_radio:disabled:checked + label:before {
  background-position: -993px -515px;
}
.lw_radio.partial + label:before {
  background-position: -967px -573px;
}
@media screen and (min-width: 768px) {
  .ly_common.ly_page .btn_box {
    position: absolute;
    right: 0;
    bottom: 23px;
    left: 0;
    padding: 22px 23px 0;
  }
    .ly_common.ly_page .btn_box + .scroller {
    margin-bottom: 61px;
  }
}
.lw_btn {
  font-size: 14px;
  display: inline-block;
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
.lw_btn.hover, .lw_btn.on, .lw_btn:hover {
  background-color: #f2f2f2;
}
.lw_btn.disabled, .lw_btn:disabled {
  cursor: default;
  opacity: 0.4;
}
.lw_btn.disabled:hover, .lw_btn:disabled:hover {
  background-color: #fff;
}
.lw_btn_point {
  font-size: 14px;
  display: inline-block;
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
  font-weight: 700;
}
.lw_btn_point.hover, .lw_btn_point.on, .lw_btn_point:hover {
  background-color: #f2f2f2;
}
.lw_btn_point.disabled, .lw_btn_point:disabled {
  cursor: default;
  opacity: 0.4;
}
.lw_btn_point.disabled:hover, .lw_btn_point:disabled:hover {
  background-color: #fff;
}
.lw_btn_point.hover, .lw_btn_point.on, .lw_btn_point:hover {
  background: #1373e6;
}
.lw_btn_point.disabled:hover, .lw_btn_point:disabled:hover {
  background: #157efb;
}
.ly_common.ly_page .btn_box {
  background-color: #fff;
}
.ly_common .btn_box {
  text-align: right;
  padding-top: 24px;
  text-align: right;
}
.btn_box button + button {
  margin-left: 8px;
}
@media screen and (max-width: 767px) {
  .ly_common.ly_page .btn_box {
  display: block !important;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 70;
  background: #fff;
  padding: 10px 16px;
}
  .ly_common.ly_page .btn_box .lw_btn_text {
  left: 16px;
  top: 10px;
  bottom: 0;
  padding-left: 0;
  padding-right: 0;
  font-size: 12px;
  }
  .ly_common.ly_page .btn_box .lw_btn_text:hover {
  background-color: transparent;
  }
}
@media screen and (min-width: 768px) {
  .ly_common.ly_page .btn_box {
  position: absolute;
  right: 0;
  bottom: 23px;
  left: 0;
  padding: 22px 23px 0;
  }
  .ly_common.ly_page .btn_box + .scroller {
  margin-bottom: 61px;
  }
}
.ly_common .btn_close:before {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -967px -525px;
  width: 16px;
  height: 16px;
  display: inline-block;
  content: "";
}
.lw_btn_text {
  font-size: 14px;
  display: inline-block;
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
}
.lw_btn_text.hover, .lw_btn_text.on, .lw_btn_text:hover {
  background-color: #f2f2f2;
}
@media screen and (min-width: 768px) {
  .ly_member_detail .tab_cont {
      height:392px;
      box-sizing: border-box;
      overflow: auto;
  }
}
.ly_member_detail .member .caption {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  margin: 0 0 8px;
}
.ly_common .btn_box:after {
  content: "";
  height: 0;
  overflow: hidden;
  clear: both;
  display: block;
}
.ly_common .btn_box .aside_btn {
  float: left;
}
.ly_common .btn_box button[class*=lwds_button] {
  min-width: 64px;
}
.ly_common .btn_close {
  border: 0;
  background-color: transparent;
  position: absolute;
  top: 21px;
  right: 19px;
  padding: 5px;
  font-size: 0;
  color: transparent;
  line-height: 0;
}
.ly_common .btn_close:hover:before {
  background-position: -967px -549px;
}
.ly_common .ico_alert,.ly_common .ico_confirm {
  display: block;
  margin: 4px 0 16px;
  font-size: 0;
  color: transparent;
  line-height: 0;
}
.ly_common .lw_pagination {
  display: block;
}
@media screen and (max-width: 767px) {
  .ly_common {
      width:100%;
      max-width: 400px;
  }
}

@media screen and (min-width: 768px) {
  .ly_common {
      width:400px;
  }
}
.ly_common h3.tit {
  display: block;
  padding-right: 24px;
  font-size: 18px;
}
.ly_common h3.tit .block {
  display: block;
  margin: 8px 0 20px;
}

.ly_common .ico_alert~h3.tit {
  padding-right: 0;
}

.ly_common .red {
  color: #fd472b;
}

.ly_common h3.desc {
  font-size: 18px;
  line-height: 24px;
  margin-top: 0;
}

.ly_common .desc,.ly_common .desc p+p {
  margin-top: 8px;
}

.ly_common .desc a {
  color: inherit;
}

.ly_common .desc a.point {
  color: #157efb;
}

.ly_common .cont {
  margin-top: 20px;
}

.ly_common .point {
  color: #157efb;
}

.ly_common .lw_note_list {
  margin: 8px 0 0;
}

.ly_common .fm {
  margin: 20px 0 0;
}

.ly_common .fm label {
  padding-left: 22px;
  text-indent: 0;
  max-width: 100%;
  word-wrap: break-word;
  word-break: normal;
}

.ly_common .fm label:before {
  top: 2px;
  transform: translate(0);
}

.ly_common .fm .lw_toggle+label {
  padding-left: 1px;
}

.ly_common .fm .lw_toggle+label:before {
  top: 0;
}

.ly_common .fm em {
  color: #fd472b;
  font-style: normal;
}

.ly_common .fm_list {
  box-sizing: border-box;
  margin: 20px 0 0;
  padding: 6px 15px 14px;
  background: #fbfbfb;
  border: 1px solid #ddd;
  border-radius: 2px;
}

.ly_common .fm_list li {
  margin: 8px 0 0;
}

.ly_common .msg_box {
  margin-top: 20px;
  padding: 18px 19px;
  border: 1px solid #e5e5e6;
  border-radius: 2px;
  background-color: #fafafb;
  font-size: 14px;
  line-height: 20px;
  color: #222;
}

.ly_common .msg_box strong {
  font-weight: 400;
}

.ly_common .alert {
  color: #fd472b;
}

.ly_common .inp p.alert {
  margin-top: 10px;
}

.ly_common .desc~.alert_text {
  margin-top: 8px;
}

.ly_common .alert_text {
  color: #fd472b;
  position: relative;
  padding-left: 21px;
}

.ly_common .alert_text:before {
  content: "";
  background-size: 1013px 983px;
  background-position: -967px -477px;
  width: 16px;
  height: 16px;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 3px;
}

.ly_common .check_contents {
  margin-top: 8px;
  border: 1px solid #ddd;
  background-color: #fbfbfb;
  padding: 15px 20px;
}

.ly_common .check_contents .check_cover {
  display: block;
}

.ly_common .check_contents .check_cover .lw_checkbox+label {
  padding-left: 22px;
  text-indent: 0;
}

.ly_common .check_contents .check_cover .lw_checkbox+label:before {
  top: 2px;
  transform: none;
}

.ly_common .agree_box {
  padding: 20px 0 0;
}

.ly_common .link {
  display: inline-block;
  color: #157efb;
}
@media screen and (max-width: 767px) {
  .ly_common.ly_fadein {
    animation-duration: .6s;
    animation-name: subpage-in;
    left: 0;
  }
}

@keyframes subpage-in {
  0% {
    left: 100%;
    width: 100%;
  }

  to {
    left: 0;
  };
}

.ly_common.ly_fadeout {
  animation-duration: .5s;
  animation-name: subpage-out;
  left: 100%;
}

@keyframes subpage-out {
  0% {
    left: 0;
  }

  to {
    left: 100%;
  };
}

@media screen and (max-width: 767px) {
  .ly_common.ly_page {
    position:fixed;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: none;
    padding: 0;
    border: 0;
    width: 100%;
    overflow: auto;
  }
}
.ly_common.ly_page .sub_header {
  display: flex;
  padding-bottom: 13px;
}

.ly_common.ly_page .sub_header .sub_title {
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
  margin: auto auto auto 0;
  padding-bottom: 0;
  vertical-align: middle;
}

.ly_common.ly_page .sub_header .task {
  margin: auto 0 auto auto;
}

.ly_common.ly_page .sub_header .link {
  margin-top: 4px;
  color: #157efb;
  margin-right: 10px;
}

@media screen and (min-width: 768px) {
  .ly_common.ly_page .sub_header .link {
    margin-top:0;
  }
}

.ly_common.ly_page .sub_header .link.ico_help:before {
  margin-right: 6px;
  vertical-align: middle;
}

@media screen and (max-width: 767px) {
  .ly_common.ly_page h3.tit {
    display:block;
    height: 44px;
    line-height: 44px;
    padding: 0 60px;
    background-color: #3a3b50;
    color: #fff;
    text-align: center;
  }
}

@media screen and (max-width: 767px) {
  .ly_common.ly_page .btn_close {
    top:6px;
    left: 8px;
    right: auto;
  }

  .ly_common.ly_page .btn_close:before {
    background-size: 1013px 983px;
    background-position: -495px -876px;
    width: 24px;
    height: 24px;
    display: inline-block;
  }
}

@media screen and (max-width: 767px) {
  .ly_common.ly_page .scroller {
    box-sizing: border-box;
    padding-bottom: 24px;
  }
}

@media screen and (max-width: 767px) {
  .ly_common.ly_page .desc {
    margin-top:0;
    padding: 16px 16px 0;
  }
}

@media screen and (max-width: 767px) {
  .ly_common.ly_page .cont {
    padding:0 16px;
  }
}

.ly_common.ly_page .btn_box {
  box-sizing: border-box;
}

.ly_common.ly_page .btn_box .btn_text_aside,.ly_common.ly_page .btn_box .lw_btn_text {
  position: absolute;
  left: 24px;
  top: 22px;
  margin-left: 0;
  color: #157efb;
}

.ly_common.ly_page .btn_box .btn_text_aside {
  border: 0;
  background-color: transparent;
  line-height: 20px;
  font-size: 13px;
  padding: 8px 0;
}


@media screen and (max-width: 767px) {
  .ly_common.ly_page .btn_box {
    display:block!important;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 0;
    z-index: 70;
    background: #fff;
    padding: 10px 16px;
  }

  .ly_common.ly_page .btn_box .lw_btn_text {
    left: 16px;
    top: 10px;
    bottom: 0;
    padding-left: 0;
    padding-right: 0;
    font-size: 12px;
  }

  .ly_common.ly_page .btn_box .lw_btn_text:hover {
    background-color: transparent;
  }
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

@media screen and (max-width: 767px) {
  .ly_common.ly_page .chk_list {
    padding:0 16px;
  }
}

@media screen and (max-width: 767px) {
  .ly_common.ly_page .tab_menu {
    margin:0 -23px;
    position: sticky;
    top: 57px;
    z-index: 100;
  }
}

.ly_common.ly_page .lw_pagination {
  padding-bottom: 0;
  margin-bottom: -11px;
}

.ly_common.ly_page .scroll_box {
  margin-top: 20px;
  border: 1px solid #e5e5e6;
  max-height: 396px;
  box-sizing: border-box;
  overflow: auto;
  padding: 12px;
}

@media screen and (max-width: 767px) {
  .ly_common.ly_page .scroll_box {
    margin-top:0;
    border: 0;
    max-height: none;
    overflow: visible;
    padding: 16px;
  }
}

.ly_common.freeplan_type {
  width: 400px;
  padding: 40px 24px 30px;
  text-align: center;
}

@media screen and (max-width: 767px) {
  .ly_common.freeplan_type {
    width:100%;
  }
}
.ly_common.freeplan_type .ico_freeplan {
  /* background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg); */
  background-size: 1013px 983px;
  background-position: -340px -267px;
  width: 109px;
  height: 82px;
  display: inline-block;
  margin: 0 auto;
  font-size: 0;
  line-height: 0;
}

.ly_common.freeplan_type h3.tit {
  margin-top: 24px;
  padding-right: 0;
}

.ly_common.freeplan_type .desc span {
  display: inline-block;
  vertical-align: middle;
}

.ly_common.freeplan_type .btn_box {
  text-align: center;
}
.ly_context {
  position: absolute;
  border: 1px solid #989898;
  border-radius: 2px;
  background-color: #fff;
  min-width: 110px;
  z-index: 50;
  box-sizing: border-box;
  transform: translateZ(0);
}

.ly_context ul {
  padding: 8px 0;
}

.ly_context li.disabled a {
  opacity: .4;
  cursor: default;
  pointer-events: none;
}
.lw_btn_text.disabled, 
.lw_btn_text:disabled {
  cursor: default;
  opacity: .4;
}
.lw_btn_text.disabled:hover, .lw_btn_text:disabled:hover {
  background-color: #fff;
}
.ly_context a {
  display: block;
  min-width: 110px;
  box-sizing: border-box;
  font-size: 14px;
  color: #222;
  padding: 5px 12px 6px;
  white-space: nowrap;
}

.ly_context a:hover {
  background-color: rgba(0,0,0,.05);
}

.ly_context li:hover {
  background-color: transparent;
}

.ly_context li.on a,.ly_context li.selected a {
  color: #157efb;
  font-weight: 700;
}

.ly_context.autocomplete {
  overflow: auto;
  max-height: 176px;
  border-color: #157efb;
  margin-top: -1px;
  width: 100%;
}

.ly_context.autocomplete a:hover {
  background: none;
}

.ly_context.autocomplete li.selected a {
  background-color: rgba(0,0,0,.05);
}

.ly_context.autocomplete .key {
  font-style: normal;
  color: #157efb;
  font-weight: 700;
}
.ly_loading {
  position: absolute;
  z-index: 50;
  display: inline-block;
  padding: 19px 23px 21px;
  border: 1px solid #989898;
  background-color: #fff;
  vertical-align: middle;
  box-sizing: border-box;
  white-space: normal;
  text-align: left;
  color: #222;
  word-wrap: break-word;
  border-radius: 2px;
  width: 217px;
  padding: 24px 0 20px;
  border: 0;
  background-color: rgba(0,0,0,.7);
  text-align: center;
}
.ly_wrap .ly_loading {
  position: relative;
}

.ly_loading .btn_box {
  padding-top: 24px;
  text-align: right;
}

.ly_loading .btn_box:after {
  content: "";
  height: 0;
  overflow: hidden;
  clear: both;
  display: block;
}

.ly_loading .btn_box .aside_btn {
  float: left;
}

.ly_loading .btn_box button[class*=lwds_button] {
  min-width: 64px;
}

.ly_loading .btn_close {
  border: 0;
  background-color: transparent;
  position: absolute;
  top: 21px;
  right: 19px;
  padding: 5px;
  font-size: 0;
  color: transparent;
  line-height: 0;
}

.ly_loading .btn_close:before {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -967px -525px;
  width: 16px;
  height: 16px;
  display: inline-block;
  content: "";
}

.ly_loading .btn_close:hover:before {
  background-position: -967px -549px;
}

.ly_loading .ico_alert,.ly_loading .ico_confirm {
  display: block;
  margin: 4px 0 16px;
  font-size: 0;
  color: transparent;
  line-height: 0;
}

.ly_loading .lw_pagination {
  display: block;
}

.ly_loading p {
  font-size: 12px;
  color: #c5c5c6;
}

.ly_drag_move {
  display: none;
  position: absolute;
  border: 1px solid #989898;
  background-color: #fff;
  z-index: 200;
  border-radius: 2px;
  padding: 5px 15px 6px;
  box-sizing: border-box;
  min-width: 180px;
  font-size: 14px;
  line-height: 21px;
}

.ly_drag_move .drag_item {
  font-weight: 700;
  color: #222;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  display: inline-block;
  vertical-align: top;
  max-width: 160px;
}

.ly_drag_move .cnt {
  color: #767676;
  margin-left: 6px;
}

.ly_calendar {
  position: absolute;
  z-index: 50;
}

@media screen and (max-width: 767px) {
  .ly_calendar {
      top:0!important;
      left: 0!important;
      right: 0!important;
      bottom: 0!important;
      text-align: center;
  }

  .ly_calendar:after {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
  }
}

.basic_calendar {
  border-radius: 2px;
}

.basic_calendar .move_month .calendar-btn-prev-year:before {
  background-position: -447px -694px;
}

.basic_calendar .move_month .calendar-btn-prev-mon:before,.basic_calendar .move_month .calendar-btn-prev-year:before {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
}

.basic_calendar .move_month .calendar-btn-prev-mon:before {
  background-position: -668px -694px;
}

.basic_calendar .move_month .calendar-btn-next-mon:before {
  background-position: -688px -694px;
}

.basic_calendar .move_month .calendar-btn-next-mon:before,.basic_calendar .move_month .calendar-btn-next-year:before {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
}

.basic_calendar .move_month .calendar-btn-next-year:before {
  background-position: -426px -694px;
}

.basic_calendar .manual_set .btn_remind_ok {
  font-size: 14px;
  border-radius: 2px;
}

.basic_calendar .date .btn_today_select,.basic_calendar .date .utx_btn_b {
  font-size: 14px;
  border-radius: 2px;
  padding: 5px 12px 5px;
  border: 1px solid #c5c5c6;
  background: #fff;
  color: #222;
}

.basic_calendar .select_area .btn_group button {
  font-size: 14px;
  height: 32px;
  border-radius: 2px;
  line-height: 20px;
  padding: 5px 16px 5px;
  min-width: 54px;
}

.ly_organization {
  width: 700px;
  box-sizing: border-box;
  padding-bottom: 84px;
}

.ly_organization .member_view {
  height: 100%;
  flex: 1 1 auto;
}
.ly_member_detail .btn_box .float {
  float: left;
}

@media screen and (min-width: 768px) {
  .ly_member_detail .scroller {
      margin-right:-23px;
      padding-right: 23px;
      max-height: 572px;
      overflow: auto;
  }
}

.ly_member_detail .empty {
  text-align: center;
}

.ly_member_detail .empty .txt {
  display: block;
  color: #767676;
}

.ly_member_detail .empty:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -340px -828px;
  width: 40px;
  height: 40px;
  display: inline-block;
  display: block;
  margin: 120px auto 16px;
}

.ly_member_detail em {
  font-style: normal;
}

.ly_member_detail .member {
  margin: 20px 0 24px;
}

.ly_member_detail .member .thumb {
  position: relative;
  float: left;
  width: 56px;
  height: 56px;
  margin-right: 20px;
  z-index: 20;
}

@media screen and (min-width: 768px) {
  .ly_member_detail .member .thumb {
      margin-top:3px;
  }
}

.ly_member_detail .member .thumb img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50px;
}

.ly_member_detail .member .thumb .thmb_area:after {
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

.ly_member_detail .member .thumb .f_pic {
  position: absolute;
  right: -4px;
  bottom: -4px;
  z-index: 10;
  width: 28px;
  height: 28px;
}

.ly_member_detail .member .thumb .f_pic a {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #c5c5c6;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
}

.ly_member_detail .member .thumb .f_pic a:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -993px -563px;
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: 5px;
}

.ly_member_detail .member .infor {
  color: #222;
  overflow: hidden;
}

.ly_member_detail .member .name_box {
  font-weight: 700;
}

.ly_member_detail .member .name_box span {
  margin-left: 6px;
}

.ly_member_detail .member .name_box i {
  display: inline-block;
  margin: -3px 6px 0 0;
  vertical-align: middle;
}

.ly_member_detail .member:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.ly_member_detail .member.main {
  min-height: 80px;
  max-width: none;
  min-width: 0 !important;
  padding: 0 !important;
  margin-left: 0;
}
.ly_member_detail .member .infor button em {
  color: #fd472b;
}
.ly_member_detail .member .infor button.hover, 
.ly_member_detail .member .infor button.on, 
.ly_member_detail .member .infor button:hover {
  background-color: #f2f2f2;
}
@media screen and (min-width: 768px){
  .ly_member_detail {
  width: 460px;
  }
}

.ly_member_detail .member.main .thumb {
  width: 80px;
  height: 80px;
}

.ly_member_detail .member .thumb {
  margin-right: 16px;
}
.ly_member_detail .member .infor button {
  font-size: 12px;
  display: inline-block;
  box-sizing: border-box;
  height: 28px;
  border-radius: 2px;
  line-height: 17px;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 4px 12px 5px;
  cursor: pointer;
  min-width: 48px;
  border: 1px solid #c5c5c6;
  background: #fff;
  color: #222;
  padding: 0 12px;
}
.ly_common .tab_menu {
  position: relative;
  display: flex;
  height: 44px;
  background: #fff;
  overflow: hidden;
}

.ly_common .tab_menu:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
  background: #e6e6e6;
}

.ly_common .tab_menu .menu {
  position: relative;
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
  width: 100%;
  font-size: 16px;
  /* text-align: left; */
}

.ly_common .tab_menu .menu .txt {
  display: inline-block;
  padding: 0 8px;
  line-height: 45px;
}

.ly_common .tab_menu .menu.selected {
  color: #157efb;
  z-index: 1;
}

.ly_common .tab_menu .menu.selected .txt {
  position: relative;
  font-weight: 700;
}

.ly_common .tab_menu .menu.selected .txt:after {
  content: "";
  position: absolute;
  right: 0;
  top: 42px;
  left: 0;
  z-index: 1;
  height: 2px;
  background: #157efb;
}

.ly_common .tab_menu a {
  color: inherit;
}
.ly_member_detail .cont {
  border-top: 1px solid #eee;
}

@media screen and (max-width: 767px) {
  .ly_member_detail .cont {
      padding:0!important;
  }
}

.ly_member_detail .detail_item {
  border-top: 1px solid #eee;
  padding: 20px 0;
}

.ly_member_detail .detail_item:first-child {
  border-top: 0;
}

.ly_member_detail .detail_item i {
  font-style: normal;
}

.ly_member_detail .detail_item .hd {
  display: block;
  margin: 0 0 8px;
  font-size: 12px;
  color: #767676;
}

.ly_member_detail .detail_item p {
  margin-top: 8px;
  margin-bottom: 0;
}

.ly_member_detail .detail_item .retire {
  color: #fd472b;
}

.ly_member_detail .detail_item .has_tit+.has_tit,.ly_member_detail .detail_item p+p {
  margin-top: 8px;
}

.ly_member_detail .detail_item .txt p {
  margin-top: 1px;
}

.ly_member_detail .detail_item a {
  color: inherit;
  /* text-decoration: underline; */
}

.ly_member_detail .detail_item .ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
}

.ly_member_detail .detail_item .has_tit {
  display: flex;
}

.ly_member_detail .detail_item .has_tit .s_tit {
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
  width: 110px;
  margin-right: 13px;
}

.ly_member_detail .detail_item .has_tit .txt {
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
  word-break: break-all;
}

.ly_member_detail .detail_item .works {
  margin-top: 8px;
}

.ly_member_detail .detail_item .works p {
  margin-top: 0;
}

.ly_member_detail .detail_item .ico_email {
  display: inline-block;
  margin: -3px 6px 0 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
}

.ly_member_detail .detail_item .pic_list {
  padding-bottom: 4px;
}

.ly_member_detail .detail_item .pic_list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}

.ly_member_detail .detail_item .pic_list .pic {
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  text-align: center;
  display: flex;
  margin-left: 8px;
}

.ly_member_detail .detail_item .pic_list .pic:first-child {
  margin-left: 0;
}

.ly_member_detail .detail_item .pic_list .pic img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}

.ly_member_detail .detail_item .pic_list .pic:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(0,0,0,.1);
}

.member_list {
  padding: 8px 0;
}

.member_list li {
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}

.member_list li.empty {
  cursor: default;
}

.member_list li.empty:hover {
  background-color: transparent;
}

.member_list li.empty p {
  text-align: center;
}

.member_list li.focus,.member_list li:hover {
  background: rgba(0,0,0,.04);
}

.member_list li .keyword {
  font-style: normal;
}

.member_list li .lang,.member_list li .name,.member_list li .nick {
  color: #222;
}

.member_list li .position {
  color: #3a61ce;
  font-weight: 400;
}

.member_list li .position em {
  color: #237a1f;
  font-style: normal;
}

.member_list li i.ico_bot,.member_list li i.ico_line,.member_list li i.ico_works {
  display: inline-block;
  margin: -1px 6px 0 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
}

.member_list li .infor span+span,.member_list li .infor strong+span {
  margin-left: 8px;
}

.member_list li .thumb {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50px;
}

.member_list li .thumb img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}

.member_list li .thumb .thmb_area:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 50px;
}

.member_list li .thumb i.ico_absence,.member_list li .thumb i.ico_busy,.member_list li .thumb i.ico_groups {
  position: absolute;
  right: -6px;
  bottom: -4px;
  z-index: 1;
  font-size: 0;
  line-height: 0;
}

.member_list li.has_txt {
  min-height: 32px;
  padding: 5px 12px 6px;
  color: #767676;
}

.member_list li.has_txt .infor {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
}

.member_list li.has_txt .name_box,.member_list li.has_txt .txt {
  display: inline;
  vertical-align: top;
}

.member_list li.has_txt .name_box+.txt {
  margin-left: 8px;
}

.member_list li.has_txt .thumb {
  display: none;
}

.member_list li.has_thmb {
  min-height: 36px;
  padding: 12px 11px;
  display: flex;
  min-width: 0;
}

.member_list li.has_thmb .thumb {
  flex: 0 0 auto;
  box-sizing: border-box;
  display: block;
  margin-right: 12px;
}

.member_list li.has_thmb .infor,.member_list li.has_thmb .txt {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  flex: 0 1 auto;
  box-sizing: border-box;
  display: block;
}

.member_list li.has_thmb .infor {
  height: 36px;
  margin-top: auto;
  margin-bottom: auto;
}

.member_list li.has_thmb .name_box {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  margin-top: -1px;
  color: #767676;
}

.member_list li.has_thmb .txt {
  font-size: 12px;
  color: #767676;
}

.member_list li.has_thmb .master {
  flex: 0 0 auto;
  margin-left: auto;
  color: #157efb;
  align-self: center;
}

.member_list li.removed .infor {
  opacity: .5;
}

.member_list li.line {
  border-top: 1px solid #eee;
  margin-top: 10px;
  padding-top: 10px;
}
.ly_member_select .list_cont .member_list li.has_thmb, 
.tab_cont .member_list li.has_thmb {
  border-bottom: 1px solid #f5f5f6;
  padding-left: 0;
  padding-right: 0;
  cursor: default;
}
.member_list li .thumb i.ico_absence, .member_list li .thumb i.ico_busy, .member_list li .thumb i.ico_groups {
  position: absolute;
  right: -6px;
  bottom: -4px;
  z-index: 1;
  font-size: 0;
  line-height: 0;
}
.ico_groups:before, .ico_p_member:before {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  width: 16px;
  height: 16px;
  display: inline-block;
  content: "";
}
.ico_groups:before {
  background-position: -993px -251px;
}
@media screen and (max-width: 767px) {
  ul.member_list {
      transform: translateZ(0);
  }
}
.selected_list_box {
  padding: 0 0 0 111px;
  position: relative;
  border-width: 1px 0 0;
  overflow: hidden;
}
.ly_member_select .list_hd {
  height: 32px;
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
.pl0 {
  padding-left: 0;
}
.org_tree {
  display: inline-block;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding-left: 0;
}

.org_tree li {
  position: relative;
}

.org_tree .tree_item {
  position: relative;
  margin-bottom: 2px;
  border-radius: 2px;
}

.org_tree .tree_item,.org_tree .tree_item .group_name {
  display: flex;
}

.org_tree .tree_item .group_name,.org_tree .tree_item .group_name .txt {
  flex: 0 1 auto;
}

.org_tree .tree_item .group_name .txt {
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
}

.org_tree .tree_item .group_name .cnt,.org_tree .tree_item .group_name .ico_lock {
  flex: 0 0 auto;
  align-self: center;
}

.org_tree .tree_item .group_name .ico_lock {
  margin-top: -1px;
  margin-left: 8px;
}

.org_tree .tree_item:not(.no_hover):hover {
  background-color: rgba(0,0,0,.05);
}

.org_tree .tree_item:not(.no_hover):hover .drag_handle {
  display: inline-block;
}

.org_tree .tree_item:not(.no_hover):hover .btn_context {
  opacity: 1;
}

.org_tree .tree_item.hover .drag_handle {
  display: inline-block;
}

.org_tree .tree_item.hover .btn_context {
  opacity: 1;
}

.org_tree .tree_item.corp .group_name:before,.org_tree .tree_item.corp .group_name_modify:before,.org_tree .tree_item.tenant .group_name:before,.org_tree .tree_item.tenant .group_name_modify:before {
  background-position: -4px -909px;
}

.org_tree .tree_item.selected {
  background-color: #e7f2fe;
}

.org_tree .tree_item.selected .group_name {
  color: #157efb;
  font-weight: 700;
}

.org_tree .tree_item.selected .group_name:before {
  background-position: -284px -909px;
}

.org_tree .tree_item.selected .group_name.private_type:before {
  background-position: -937px -560px;
}

.org_tree .tree_item.selected.corp .group_name:before,.org_tree .tree_item.selected.tenant .group_name:before {
  background-position: -852px -784px;
}

.org_tree .tree_item.selected .cnt {
  color: #157efb;
  font-weight: 400;
}

.org_tree .tree_item.selected .btn_context,.org_tree .tree_item.selected.closed .group_name {
  opacity: 1;
}

.org_tree .tree_item.closed .group_name {
  opacity: .4;
}

.org_tree .tree_item.closed:hover {
  background-color: transparent;
}

.org_tree .tree_item.closed:hover,
.org_tree .tree_item.closed:hover .check_cover label,
.org_tree .tree_item.closed:hover .group_name {
  cursor: default;
}

.org_tree .tree_item .drag_handle {
  display: none;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 1px;
}

.org_tree .tree_item .btn_context {
  opacity: 0;
  border: 0;
  background-color: transparent;
  flex: 0 0 auto;
  width: 16px;
  position: relative;
}

.org_tree .tree_item .btn_context:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -967px -100px;
  width: 16px;
  height: 17px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.org_tree .tree_item .ly_context {
  display: none;
  margin-top: 4px;
  margin-bottom: 4px;
}

.org_tree .tree_item .ly_context ul {
  display: block!important;
}

.org_tree .tree_item .btn_toggle_tree {
  flex: 0 0 auto;
}

.lw_table_scoll .org_tree .tree_item.dragging .group_name,.org_tree .tree_item.dragging .group_name {
  opacity: .4;
}

.org_tree .tree_item.dragging .btn_context,.org_tree .tree_item.dragging .drag_handle {
  display: inline-block;
}

.lw_table_scoll .org_tree .tree_item.drop:after,.org_tree .tree_item.drop:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 2px solid #157efb;
  border-radius: 2px;
}

.lw_table_scoll .org_tree .tree_item.drop_top:after,.org_tree .tree_item.drop_top:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 2px solid #157efb;
  border-radius: 2px;
}

.org_tree .tree_item.drop_into:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid #157efb!important;
  border-radius: 2px;
}

.org_tree .tree_item.modify .btn_context,.org_tree .tree_item.modify .drag_handle,.org_tree .tree_item.modify .group_name {
  display: none;
}

.org_tree .tree_item.modify .group_name_modify {
  display: inline-block;
}

.org_tree .tree_item .group_name_modify {
  flex: 1 1 auto;
  display: none;
}

.org_tree .tree_item .group_name_modify .ipt_modify {
  width: 100%;
  border: 1px solid #157efb;
  border-radius: 2px;
  box-sizing: border-box;
  height: 28px;
  font-size: 14px;
  color: #222;
  line-height: 20px;
  padding: 3px 0 3px 10px;
}

.org_tree .tree_item .group_name_modify:before {
  content: "";
  margin-right: 12px;
  vertical-align: top;
}

.org_tree .btn_toggle_tree {
  border: 0;
  background-color: transparent;
  padding: 6px;
  line-height: 0;
  overflow: hidden;
  margin-right: -20px;
  position: relative;
  z-index: 10;
}

.org_tree .btn_toggle_tree:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -548px -964px;
  width: 8px;
  height: 8px;
  display: inline-block;
  vertical-align: top;
}

.org_tree .group_name,.org_tree .group_name_modify {
  display: block;
  position: relative;
}

.org_tree .group_name:before,.org_tree .group_name_modify:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -312px -909px;
  width: 20px;
  height: 20px;
  display: inline-block;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.org_tree .group_name.private_type:before,.org_tree .group_name_modify.private_type:before {
  background-position: -937px -589px;
}

.org_tree .group_name_modify {
  padding: 2px 2px 2px 42px;
}

.org_tree .group_name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  font-size: 14px;
  color: #222;
  line-height: 21px;
  padding: 6px 0 5px 52px;
}

.org_tree .group_name .cnt {
  margin-left: 8px;
  color: #767676;
  vertical-align: top;
}

.org_tree .sub_group .tree_item {
  padding-left: 12px;
}

.org_tree .sub_group .sub_group .tree_item {
  padding-left: 24px;
}

.org_tree .sub_group .sub_group .sub_group .tree_item {
  padding-left: 36px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .tree_item {
  padding-left: 48px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
  padding-left: 60px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
  padding-left: 72px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
  padding-left: 84px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
  padding-left: 96px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
  padding-left: 108px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
  padding-left: 120px;
}

.org_tree .depth_1 .tree_item {
  padding-left: 12px;
}

.org_tree .depth_2 .tree_item {
  padding-left: 24px;
}

.org_tree .depth_3 .tree_item {
  padding-left: 36px;
}

.org_tree .depth_4 .tree_item {
  padding-left: 48px;
}

.org_tree .depth_5 .tree_item {
  padding-left: 60px;
}

.org_tree .depth_6 .tree_item {
  padding-left: 72px;
}

.org_tree .depth_7 .tree_item {
  padding-left: 84px;
}

.org_tree .depth_8 .tree_item {
  padding-left: 96px;
}

.org_tree .depth_9 .tree_item {
  padding-left: 108px;
}

.org_tree .depth_10 .tree_item {
  padding-left: 120px;
}

.org_tree .fold .btn_toggle_tree:before {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -373px -357px;
  width: 8px;
  height: 9px;
  display: inline-block;
}

.org_tree .fold ul {
  display: none;
}

.org_tree .check_cover {
  display: inline-block;
  width: 31px;
  height: 0;
}

.org_tree .check_cover .lw_checkbox+label,.org_tree .check_cover .lw_radio+label {
  position: absolute;
  left: 12px;
  top: 50%;
}

.org_tree li.empty {
  text-align: center;
  padding: 120px 0 0;
}

.org_tree li.empty .title {
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #767676;
  line-height: 1.5;
}

.org_tree li.empty .title:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -52px -828px;
  width: 40px;
  height: 40px;
  display: inline-block;
  display: block;
  margin: 0 auto 13px;
}

@media screen and (max-width: 767px) {
  .org_tree li.empty .title {
    font-size:16px;
  }
}

.org_tree li.empty .desc {
  font-size: 12px;
  line-height: 1.5;
  color: #767676;
  margin-bottom: 15px;
}

@media screen and (max-width: 767px) {
  .org_tree li.empty .desc {
    font-size:14px;
  }
}

.org_tree li.empty .btn_add_group {
  font-size: 12px;
  display: inline-block;
  box-sizing: border-box;
  height: 28px;
  border-radius: 2px;
  line-height: 17px;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 4px 12px 5px;
  cursor: pointer;
  min-width: 48px;
  border: 1px solid #c5c5c6;
  background: #fff;
  color: #222;
}

.org_tree li.empty .btn_add_group.hover,.org_tree li.empty .btn_add_group.on,.org_tree li.empty .btn_add_group:hover {
  background-color: #f2f2f2;
}

.org_tree li.empty .btn_add_group.disabled,.org_tree li.empty .btn_add_group:disabled {
  cursor: default;
  opacity: .4;
}

.org_tree li.empty .btn_add_group.disabled:hover,.org_tree li.empty .btn_add_group:disabled:hover {
  background-color: #fff;
}

@media screen and (max-width: 767px) {
  .org_tree li.empty .btn_add_group {
    display:none;
  }
}

.org_tree.search_result .group_name {
  padding-left: 16px;
}

.org_tree.search_result .group_name:before {
  display: none;
}

@media screen and (max-width: 767px) {
  .org_tree.search_result .check_cover {
    display:none;
  }
}

.lw_table_scoll .org_tree {
  width: 100%;
  margin-bottom: 0;
}

.lw_table_scoll .org_tree .tree_item {
  border-bottom: 1px solid #f5f5f6;
  margin-bottom: 0;
  padding-right: 27%;
}

@media screen and (max-width: 767px) {
  .lw_table_scoll .org_tree .tree_item {
    padding-right:0;
  }
}

.lw_table_scoll .org_tree .tree_item:hover .drag_handle {
  display: none;
}

.lw_table_scoll .org_tree .tree_item .drag_handle {
  display: none;
  left: 5px;
}

.lw_table_scoll .org_tree .tree_item .check_cover {
  display: inline-block;
  width: 60px;
  flex: 0 0 auto;
}

.lw_table_scoll .org_tree .tree_item .check_cover label {
  left: 24px;
  margin-top: -8px;
}

@media screen and (max-width: 767px) {
  .lw_table_scoll .org_tree .tree_item .check_cover {
    width:55px;
  }

  .lw_table_scoll .org_tree .tree_item .check_cover label {
    left: 30px;
  }
}

.lw_table_scoll .org_tree .tree_item .admin_count,.lw_table_scoll .org_tree .tree_item .group_name,.lw_table_scoll .org_tree .tree_item .leader,.lw_table_scoll .org_tree .tree_item .member_count,.lw_table_scoll .org_tree .tree_item .storage {
  padding-top: 10px;
  padding-bottom: 9px;
}

@media screen and (max-width: 767px) {
  .lw_table_scoll .org_tree .tree_item .admin_count,.lw_table_scoll .org_tree .tree_item .group_name,.lw_table_scoll .org_tree .tree_item .leader,.lw_table_scoll .org_tree .tree_item .member_count,.lw_table_scoll .org_tree .tree_item .storage {
    padding-top:8px;
    padding-bottom: 7px;
  }
}

@media screen and (max-width: 767px) {
  .lw_table_scoll .org_tree .tree_item .group_name {
    padding-right:8px;
  }
}

.lw_table_scoll .org_tree .tree_item .admin_count,.lw_table_scoll .org_tree .tree_item .leader,.lw_table_scoll .org_tree .tree_item .member_count,.lw_table_scoll .org_tree .tree_item .storage {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 14px;
  color: #222;
  line-height: 21px;
  box-sizing: border-box;
}

@media screen and (max-width: 767px) {
  .lw_table_scoll .org_tree .tree_item .admin_count,.lw_table_scoll .org_tree .tree_item .leader,.lw_table_scoll .org_tree .tree_item .member_count,.lw_table_scoll .org_tree .tree_item .storage {
    display:none;
  }
}

.lw_table_scoll .org_tree .tree_item .admin_count {
  right: 12%;
  padding-right: 15px;
  padding-left: 5px;
}

.lw_table_scoll .org_tree .tree_item .admin_count,.tb_cols_memberlist_head .lw_th.admin_count {
  width: 15%;
}

.lw_table_scoll .org_tree .tree_item .member_count {
  padding-left: 2px;
}
.tb_cols_memberlist_head .lw_th {
  font-size: 12px;
  color: #434343;
  line-height: 20px;
  padding: 10px 10px 10px 0;
  box-sizing: border-box;
  text-align: left;
}
.tb_cols_memberlist_head .lw_th.check {
  text-align: center;
  padding-left: 0;
  padding-right: 0;

}
.lw_table_scoll .org_tree .tree_item .member_count,.tb_cols_memberlist_head .lw_th.member_count {
  width: 12%;
}

.lw_table_scoll .org_tree .tree_item .leader {
  right: 12%;
  padding-right: 15px;
}

.lw_table_scoll .org_tree .tree_item .leader,.tb_cols_memberlist_drop .lw_td.leader,.tb_cols_memberlist_head .lw_th.leader {
  width: 15%;
}

.lw_table_scoll .org_tree .tree_item .storage,.tb_cols_memberlist_head .lw_th.storage {
  width: 12%;
}

@media screen and (min-width: 768px) {
  .lw_table_scoll .org_tree .tree_item.tenant .check_cover {
    width:50px;
  }
}

.lw_table_scoll .org_tree .tree_item.tenant .btn_toggle_tree,.lw_table_scoll .org_tree .tree_item.tenant .check_cover input,.lw_table_scoll .org_tree .tree_item.tenant .check_cover label {
  display: none;
}

.lw_table_scoll .org_tree.drag_move .tree_item:hover .drag_handle,.lw_table_scoll .org_tree.drag_move span.drag_handle {
  display: inline-block;
  line-height: 0;
}

.lw_table_scoll .org_tree li.empty .title:before {
  background-position: -544px -622px;
  margin: 0 auto 12px;
}

.lw_table_scoll .org_tree li.empty.no_request .title:before,.lw_table_scoll .org_tree li.empty .title:before {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  width: 64px;
  height: 64px;
  display: inline-block;
  display: block;
}

.lw_table_scoll .org_tree li.empty.no_request .title:before {
  background-position: -773px -586px;
  margin: 0 auto;
}
.org_tree .check_cover .lw_checkbox, 
.org_tree .check_cover .lw_radio {
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
}
.modal2 .btn_toggle_tree {
  margin-left: 18px;
}
.modal2 {
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
.ly_organization .org_container .member_list {
  flex: 1 1 auto;
  min-width: 0;
}
.fix_contents {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid #e5e5e6;
}

@media screen and (max-width: 767px) {
  .fix_contents {
    position:static;
    border: 0;
  }
}
.ly_organization .fix_contents .fix_head.memlist_head.ly_organization .fix_contents .fix_head.memlist_head {
  padding: 15px 0 15px 16px;
}
.fix_contents .fix_head {
  flex: 0 0 auto;
  border-bottom: 1px solid #e5e5e6;
  position: relative;
  line-height: 20px;
  padding: 16px 0 16px 20px;
}
@media screen and (min-width: 768px){
  .tb_cols_memberlist .lw_tr:hover, .tb_cols_memberlist_drop .lw_tr:hover {
    background-color: #fbfbfb;
  }
  .tb_cols_memberlist .lw_tr, .tb_cols_memberlist_drop .lw_tr, .tb_cols_memberlist_head .lw_tr {
    display: table-row;
  }
}
.fix_contents.member_list .tb_cols_memberlist .lw_td.check, .fix_contents.member_list .tb_cols_memberlist .lw_th.check, .fix_contents.member_list .tb_cols_memberlist_head .lw_td.check, .fix_contents.member_list .tb_cols_memberlist_head .lw_th.check {
  padding-left: 16px;
  width: 46px;
  line-height: 0;
}
.tb_cols_memberlist .lw_td.check, .tb_cols_memberlist .lw_th.check, .tb_cols_memberlist_drop .lw_td.check, .tb_cols_memberlist_drop .lw_th.check, .tb_cols_memberlist_head .lw_td.check, .tb_cols_memberlist_head .lw_th.check {
  width: 63px;
  box-sizing: border-box;
  padding-top: 6px;
  position: relative;
}
.tb_cols_memberlist .lw_td, .tb_cols_memberlist_drop .lw_td {
  box-sizing: border-box;
  padding: 10px 10px 10px 0;
  vertical-align: middle;
  border-bottom: 1px solid #f5f5f6;
}
.tb_cols_memberlist .lw_td.check~.profile, .tb_cols_memberlist .lw_th.check~.profile, .tb_cols_memberlist_drop .lw_td.check~.profile, .tb_cols_memberlist_drop .lw_th.check~.profile, .tb_cols_memberlist_head .lw_td.check~.profile, .tb_cols_memberlist_head .lw_th.check~.profile {
  width: 50px;
  padding-left: 0;
}
.tb_cols_memberlist .lw_td.profile, .tb_cols_memberlist .lw_th.profile, .tb_cols_memberlist_drop .lw_td.profile, .tb_cols_memberlist_drop .lw_th.profile, .tb_cols_memberlist_head .lw_td.profile, .tb_cols_memberlist_head .lw_th.profile {
  width: 66px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 14px;
  padding-left: 16px;
}
.tb_cols_memberlist .lw_td, .tb_cols_memberlist_drop .lw_td {
  box-sizing: border-box;
  padding: 10px 10px 10px 0;
  vertical-align: middle;
  border-bottom: 1px solid #f5f5f6;
}
.tb_cols_memberlist .lw_td.user_name, .tb_cols_memberlist .lw_th.user_name, .tb_cols_memberlist_drop .lw_td.user_name, .tb_cols_memberlist_drop .lw_th.user_name, .tb_cols_memberlist_head .lw_td.user_name, .tb_cols_memberlist_head .lw_th.user_name {
  width: auto;
}
.tb_cols_memberlist .user_name, .tb_cols_memberlist_drop .user_name {
  padding-right: 15px;
}
.tb_cols_memberlist .lw_td, .tb_cols_memberlist_drop .lw_td {
  box-sizing: border-box;
  padding: 10px 10px 10px 0;
  vertical-align: middle;
  border-bottom: 1px solid #f5f5f6;
}
.tb_cols_memberlist .lw_td, .tb_cols_memberlist_drop .lw_td, .tb_cols_memberlist_head .lw_td {
  cursor: pointer;
  word-break: break-all;
}
.tb_cols_memberlist .lw_td, .tb_cols_memberlist .lw_th, .tb_cols_memberlist_drop .lw_td, .tb_cols_memberlist_drop .lw_th, .tb_cols_memberlist_head .lw_td, .tb_cols_memberlist_head .lw_th {
  display: table-cell;
}

.tb_cols_memberlist .lw_td.check ~ .profile, .tb_cols_memberlist .lw_th.check ~ .profile, .tb_cols_memberlist_drop .lw_td.check ~ .profile, .tb_cols_memberlist_drop .lw_th.check ~ .profile, .tb_cols_memberlist_head .lw_td.check ~ .profile, .tb_cols_memberlist_head .lw_th.check ~ .profile {
  width: 50px;
  padding-left: 0;
}
.tb_cols_memberlist .lw_td.profile, .tb_cols_memberlist .lw_th.profile, .tb_cols_memberlist_drop .lw_td.profile, .tb_cols_memberlist_drop .lw_th.profile, .tb_cols_memberlist_head .lw_td.profile, .tb_cols_memberlist_head .lw_th.profile {
  width: 66px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 14px;
  padding-left: 16px;
}
.tb_cols_memberlist .thumb_cover img, .tb_cols_memberlist_drop .thumb_cover img {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.tb_cols_memberlist .user_name .name_cover, .tb_cols_memberlist_drop .user_name .name_cover {
  display: block;
  font-size: 14px;
  color: #222;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  text-align: left;
}
.tb_cols_memberlist, .tb_cols_memberlist_drop, .tb_cols_memberlist_head {
  display: table;
  width: 100%;
  box-sizing: border-box;
}
.fix_contents .fix_body .lw_table_scoll .tb_cols_memberlist {
  flex: 0 1 auto;
}
.tb_cols_memberlist, .tb_cols_memberlist_drop {
  margin-top: -1px;
}
.ly_organization .fix_contents .fix_head.memlist_head {
  padding: 15px 0 15px 16px;
}

.ly_organization .fix_contents .fix_head.memlist_head .check_cover~.group_name {
  margin-left: 8px;
} .fix_contents .fix_head.memlist_head .check_cover~.group_name {
  margin-left: 8px;
}

.ly_organization .fix_contents .fix_head.memlist_head .group_name {
  font-weight: 700;
  color: #222;
}

.ly_organization .fix_contents .fix_head.memlist_head .cnt {
  font-weight: 700;
}

@media screen and (max-width: 767px) {
  .ly_organization .fix_contents .fix_head.memlist_head {
    padding-top:10px;
    padding-bottom: 10px;
  }
}

.ly_organization .fix_contents .search_cover .lw_search {
  padding-top: 12px;
  padding-bottom: 12px;
}

.ly_organization .fix_contents .search_cover .lw_search .lw_input {
  font-size: 14px;
}

.ly_organization .fix_contents .search_cover .ly_autocomplete {
  top: 49px;
}

.ly_organization .fix_contents .search_result_head .group_name {
  float: left;
  font-weight: 400;
  margin-right: 8px;
}

.ly_organization .fix_contents .search_result_head .keyword {
  font-weight: 700;
}

.ly_organization .fix_contents .search_result_head .check_cover {
  margin-top: -1px;
}
.fix_contents .fix_head .list_head, .fix_contents .fix_head h1 {
  display: flex;
}
.fix_contents .fix_head .list_head {
  min-height: 20px;
}
.ua_win .fix_contents .fix_head h1 {
  line-height: 19px;
  align-items: center;
}
.ua_win .fix_contents .fix_head h1 .check_cover {
  line-height: 0;
}
.fix_contents .fix_head h1 {
  flex: 1 1 auto;
  min-width: 0;
  font-size: 13px;
  font-weight: 400;
  color: #666;
  line-height: 20px;
  margin-bottom: 0;
}
.fix_contents .fix_head h1 .cnt {
  margin-left: 6px;
  color: #157efb;
}
.ly_organization .fix_contents .fix_head.memlist_head .group_name {
  font-weight: 700;
  color: #222;
}
.tb_cols_memberlist .lw_tr.selected, .tb_cols_memberlist .lw_tr.selected .lw_td, .tb_cols_memberlist_drop .lw_tr.selected, .tb_cols_memberlist_drop .lw_tr.selected .lw_td {
  background-color: #ecf5ff;
}
.selected_list_box {
  padding: 0 0 0 111px;
  position: relative;
  border-width: 1px 0 0;
  overflow: hidden;
}
.ly_organization .org_container .selected_list_box {
  flex: 0 0 auto;
  border-width: 0 1px 1px;
}

@media screen and (max-width: 767px) {
  .ly_organization .org_container .selected_list_box {
    border-width:1px 0 0;
    position: relative;
  }
}
.selected_list_box .count {
  position: absolute;
  top: 20px;
  left: 16px;
  color: #157efb;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}
.selected_list_box .selected_list {
  padding: 15px 11px 7px 0;
  overflow-y: scroll;
  max-height: 102px;
  box-sizing: border-box;
  margin-bottom: 0;
}
.selected_list_box .selected_list {
  overflow: hidden;
}
.selected_list_box .btn_remove_all {
  border: 0;
  background-color: transparent;
  line-height: 0;
  padding: 4px;
  vertical-align: top;
}

.selected_list_box .btn_remove_all:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -708px -694px;
  width: 12px;
  height: 12px;
  display: inline-block;
  display: block;
  vertical-align: top;
}
.selected_list_box li .btn_delete {
  border: 0;
  background-color: transparent;
  position: absolute;
  top: 7px;
  right: 3px;
  padding: 5px;
  font-size: 0;
  color: transparent;
  line-height: 0;
}

.selected_list_box li .btn_delete:after {
  background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
  background-size: 1013px 983px;
  background-position: -436px -964px;
  width: 8px;
  height: 8px;
  display: inline-block;
  content: "";
}
.selected_list_box li .item {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
  max-width: 500px;
  position: relative;
  display: block;
  padding: 6px 23px 6px 8px;
  border: 1px solid #c6e1ff;
  border-radius: 2px;
  background-color: #e1f0ff;
  font-size: 12px;
  color: #222;
}
.selected_list_box .selected_list li {
  line-height: 1.5;
}
.selected_list_box li {
  position: relative;
  float: left;
  max-width: 100%;
  margin: 0 8px 8px 0;
}
.selected_list_box {
  overflow-y: auto;
  padding: 15px 11px 7px 11px;
  border: 1px solid #ddd;
  border-radius: 2px;
  box-sizing: border-box;
  background-color: #fafafb;
}
.member_view .organization {
  flex: 0 0 auto;
  width: 240px;
  overflow: auto;
  position: relative;
  box-sizing: border-box;
  border-right: 0;
  min-height: 0;
  min-width: 0;

  overflow: auto;
}

@media screen and (max-width: 767px) {
  .member_view .organization {
    border:0;
    flex: 1 1 auto;
    width: 100%;
  }
}
.ly_organization .member_view {
  height: 100%;
  flex: 1 1 auto;
}
.member_view {
  flex: 1 1 auto;
  display: flex;
  position: relative;
  min-height: 0;
  height: 100%;
}
.organization {
  box-sizing: border-box;
  border: 1px solid #e5e5e6;
  padding: 13px;
}
.ly_common .tit_box {
  display: block;
  padding-right: 20px;
  font-size: 18px;
}

.ly_organization .tit_box {
  margin-bottom: 15px;
}
@media screen and (max-width: 767px) {
  .ly_common .tit_box {
    padding-right:0;
  }
}

.ly_common .tit_box .tit {
  display: inline;
  font-weight: bold;
}
.member_list {
  padding: 0 !important;
}
.fix_contents .fix_body {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  min-height: 0;
}
@media screen and (min-width: 768px){
  .fix_contents .fix_body {
    height: 1px;
  }
}
.fix_contents .editing_bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #e7f2fe;
  padding: 10px 25px;
  box-sizing: border-box;
  z-index: 70;
  text-align: left;
}

@media screen and (max-width: 767px) {
  .fix_contents .editing_bar {
    position: sticky;
    height: 56px;
    padding: 11px 16px;
    z-index: 25;
    border-bottom: 1px solid #e5e5e6
  }
}

.fix_contents .editing_bar button+button {
  margin-left: 8px;
}

.fix_contents .editing_bar button {
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
}

.fix_contents .editing_bar button.hover,.fix_contents .editing_bar button.on,.fix_contents .editing_bar button:hover {
  background-color: #f2f2f2;
}

.fix_contents .editing_bar button.disabled,.fix_contents .editing_bar button:disabled {
  cursor: default;
  opacity: .4;
}

.fix_contents .editing_bar button.disabled:hover,.fix_contents .editing_bar button:disabled:hover {
  background-color: #fff;
}

.fix_contents .editing_bar .btn_delete {
  color: #fd472b;
}

.fix_contents .editing_bar .pos_right {
  float: right;
}
.contentsHead {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 18px 0 0;
  margin-bottom: 30px;
}
.btnAddGroup {
  background-color: #07B53B;
  color: #FFF;
  transition: all .3s;
  &:hover {
    background-color: #07B53B;
    color: #FFF;
    opacity: .8;
  }
}
.contentsBody {
  width: 100%;
}
.btnAddMember {
  position: absolute;
  background-color: #07B53B;
  color: #FFF;
  transition: all .3s;
  &:hover {
    background-color: #07B53B;
    color: #FFF;
    opacity: .8;
  }
}
.memberView {
  display: flex;
  .organization {
    ul {
      padding-left: 0;
    }
  }
  .memberList {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #e5e5e6;
  }
}
.listHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .taskArea {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  h1 {
    font-size: 13px;
  }
  .cnt {
    margin-left: 6px;
    color: #157efb;
  }
}
.btnFilter,
.btnSearch {
  border: none;
  background: transparent;
}
.memberlistTableHeader {
  display: table;
  width: 100%;
  border-bottom: 1px solid #e5e5e6;
  background-color: #fafafb;
}
.lwTr {
  display: table-row;
  text-decoration: none;
  color: #2c3e50;
}
.lwTd {
  border-bottom: 1px solid #f5f5f6;
}
.lwTd,
.lwTh {
  display: table-cell;
  padding: 10px 10px 10px 0;
  box-sizing: border-box;
  vertical-align: middle;
  &.move {
    width: 10px;
  }
  &.check {
    width: 46px;
  }
  &.profile {
    width: 50px;
  }
  &.userName {
    width: auto;
    text-align: left;
  }
  &.title {
    width: 18.5%;
  }
  &.status {
    width: 16.4%;
    line-height: 20px;
  }
  &.detail {
    width: 21.6%;
    line-height: 20px;
  }
}
.memberlistTable {
  display: table;
  width: 100%;
  .lwTr {
    transition: all .3s;
    &:hover {
      background-color: #fbfbfb;
      
    }
  }
}
img {
  width: 100%;
  height: auto;
}
.thumbCover {
  display: block;
}

.orgTree {
  display: inline-block;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
  li {
    position: relative;
  }
  .treeItem {
    position: relative;
    display: flex;
    margin-bottom: 2px;
    border-radius: 2px;
    &.selected {
      background-color: #e7f2fe;
      .groupName {
        color: #157efb;
        font-weight: 700;
        &:before {
          background-image: url(./assets/icon_group_active.svg)
        }
      }
      
    }
    &.corp {
      .groupName {
        &:before {
          background-image: url(./assets/icon_organization.svg)
        }
        
      }
      &.selected {
        .groupName {
          &:before {
            background-image: url(./assets/icon_organization_active.svg);
          }
        }
      }
    }
    
    .groupName {
      position: relative;
      display: flex;
      flex: 0 1 auto;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 100%;
      word-wrap: normal;
      font-size: 14px;
      color: #222;
      line-height: 21px;
      padding: 6px 0 5px 52px;
      &:before {
        content: '';
        background-image: linear-gradient(transparent,transparent),url(./assets/icon_group.svg);
        background-size: 100% auto;
        background-position: 0 0;
        width: 20px;
        height: 20px;
        display: inline-block;
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
      }
    
      
    }
    .btnToggleTree {
      flex: 0 0 auto;
      border: 0;
      background-color: transparent;
      padding: 6px;
      line-height: 0;
      overflow: hidden;
      margin-right: -20px;
      position: relative;
      z-index: 10;
      &::before {
        background-image: linear-gradient(transparent,transparent),url(./assets/icon_organization.svg);
        background-size: 1013px 983px;
        background-position: -548px -964px;
        width: 8px;
        height: 8px;
        display: inline-block;
        vertical-align: top;
      }
    }
    
    .dragHandle {
      display: none;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      margin-top: 1px;
      .cstTooltip {
        left: 0;
        top: 100%;
        margin-top: 8px;
      }
      &.lastoflist {
        top: auto;
        bottom: 100%;
        margin-bottom: 8px;
        margin-top: auto;
      }
    }
    .btnContext {
      opacity: 0;
      border: 0;
      background-color: transparent;
      flex: 0 0 auto;
      width: 16px;
      position: relative;
      &:before {
        background-image: linear-gradient(transparent,transparent),url(./assets/icon_group.svg);
        background-size: 1013px 983px;
        background-position: -967px -100px;
        width: 16px;
        height: 17px;
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
    
  }
  .subGroup {
    padding-left: 0;
  }
}
.cstTooltip {
  display: none;
  position: absolute;
  border-radius: 2px;
  background-color: rgba(0,0,0,.6);
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  padding: 2px 8px;
  white-space: nowrap;
}
.blind {
  position: absolute;
  clip: rect(0,0,0,0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}
.btn_save {
  font-size: 14px;
  display: inline-block;
  box-sizing: border-box;
  height: 36px;
  border-radius: 2px;
  line-height: 21px;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 7px 12px 8px;
  min-width: 64px;
  background: #157efb;
  border: 0;
  color: #fff;
  font-weight: 700;
  transition: all 0.3s;
  &:hover {
    opacity: .7;
  }
}
.task_area .btn_combo + button, 
.task_area button + .tooltip_cover, 
.task_area button + button {
  margin-left: 8px;
}

button:not(:disabled), 
[type=button]:not(:disabled), 
[type=reset]:not(:disabled), 
[type=submit]:not(:disabled) {
  cursor: pointer;
}
.btn_delete02:disabled {
  opacity: 0.4;
}
.btn_delete02 {
  font-size: 14px;
  display: inline-block;
  box-sizing: border-box;
  height: 36px;
  border-radius: 2px;
  line-height: 21px;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 6px 12px 7px;
  min-width: 64px;
  border: 1px solid #c5c5c6;
  background: #fff;
  color: #fd472b !important;
  transition: all 0.3s;
  &:disabled {
    opacity: .4;
    &:hover {
      opacity: .4;
    }
  }
  &:hover {
    opacity: .7;
  }
}
.btn_cancel {
  font-size: 14px;
  display: inline-block;
  box-sizing: border-box;
  height: 36px;
  border-radius: 2px;
  line-height: 21px;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 6px 12px 7px;
  min-width: 64px;
  border: 1px solid #c5c5c6;
  background: #fff;
  color: #222;
  transition: all 0.3s;
  &:hover {
    opacity: .7;
  }
  &:disabled {
    opacity: .4;
    &:hover {
      opacity: .4;
    }
  }
}
.task_area .btn_combo+button, 
.task_area button+.tooltip_cover, 
.task_area button+button {
  margin-left: 8px;
}
.contents_body {
  flex: 1 1 auto;
  box-sizing: border-box;
  padding: 0 20px;
  color: #222;
}

.contents_body .contents_body_inner {
  min-width: 733px;
  max-width: 1029px;
  padding-bottom: 80px;
  text-align: left;
}
.contents_body.fixed_layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 400px;
  overflow-y: hidden;
}
.contents_body.fixed_layout .empty {
  flex: 1 1 auto;
}
.contents_body.fixed_layout .contents_header {
  flex: 0 0 auto;
}
.contents_body.fixed_layout .contents_body_inner {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}
.contents_body.fixed_layout .contents_body_inner .lw_table_cover {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}
.contents_body.fixed_layout .contents_body_inner .lw_table_cover .lw_table_header {
  flex: 0 0 auto;
}
.contents_body.fixed_layout .contents_body_inner .lw_table_cover .lw_table_scroll {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
.contents_body.fixed_layout .contents_body_inner .lw_table_cover .lw_table_scroll .tb_empty {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
}
.contents_body.fixed_layout .contents_body_inner .settings_cover {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}
.contents_body.fixed_layout .contents_body_inner .btn_area {
  flex: 0 0 auto;
}
.contents_body.fixed_layout .contents_body_inner .detail_settings_desc {
  flex: 0 0 auto;
}
.contents_body.fixed_layout .contents_body_inner .detail_settings_header {
  flex: 0 0 auto;
}
.contents_body.fixed_layout .contents_body_inner .detail_settings_list {
  flex: 0 0 auto;
}
.contents_body.fixed_layout .contents_body_inner .detail_settings_title {
  flex: 0 0 auto;
}
@media screen and (min-width: 768px){
  .contents.fix_layout .contentsBody {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 0;
    min-height: 0;
    height: 100%;
  }
}
@media screen and (min-width: 768px){
  .contents.fix_layout .contents_body {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 0;
    min-height: 0;
    height: 100%;
  }
}
.fix_contents .fix_body .lw_table_scoll {
  flex: 1 1 auto;
  overflow: scroll;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.selected_list_box li .item.groups {
  border-color: #f1d69c;
  background-color: #f8eac8;
  transition: all .3s;
  &:hover {
    opacity: .7;
  }
}
.lnb {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: none;
}
@media screen and (min-width: 768px){
  .lnb {
    position: absolute;
    top: 56px;
    width: 250px;
    border-right: 1px solid #d9d9d9;
    display: block;
  }
}
@supports (left:env(safe-area-inset-left)){
  .lnb {
    left: calc(constant(safe-area-inset-left));
    left: calc(env(safe-area-inset-left));
  }
}

.lnb .lnb_cover {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  min-height: 0;
}
@media screen and (min-width: 768px){
  #container {
    position: absolute;
    top: 56px;
    left: 250px;
    right: 0;
    bottom: 0;
    overflow: auto;
    z-index: 10;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
}
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
.lw_textarea {
  width: 100%;
  height: 68px;
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
  flex: 0 0 auto;
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
  height: 34px;
  border: 1px solid #ddd;
  border-radius: 2px;
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
