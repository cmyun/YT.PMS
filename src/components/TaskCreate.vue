<template>
  <div class="modal1" v-if="visible">
      <div class="modal-body">
        <form @submit.prevent="submitForm">
          <div id="modal-root">
            <div class="ly_wrap dimmed en_US ua_win">
              <div class="ly_common ly_write">
                <div class="tit_box">
                  <h3 class="tit">Write</h3>
                </div>
                <div class="layer_body">
                  <div class="write_cover">
                    <div class="item_cover">
                      <span class="item_label">Content</span>
                      <div class="item_value">
                        <span class="textarea_cover">
                          <textarea type="text" class="lw_textarea" placeholder="Enter task information"></textarea>
                        </span>
                      </div>
                    </div>
                    <div class="item_cover">
                      <span class="item_label">Deadline</span>
                      <div class="item_value expire_date">
                        <span class="toggle_cover">
                          <input type="checkbox" name="period_preset" id="period_preset_01_layer" readonly="" checked="">
                          <label for="period_preset_01_layer">None</label>
                          <input type="checkbox" name="period_preset" id="period_preset_02_layer" readonly="">
                          <label for="period_preset_02_layer">Today</label>
                          <input type="checkbox" name="period_preset" id="period_preset_03_layer" readonly="">
                          <label for="period_preset_03_layer">Tomorrow</label>
                          <input type="checkbox" name="period_preset" id="period_preset_04_layer" readonly="">
                          <label for="period_preset_04_layer">Next Week</label>
                        </span>
                        <span class="date_cover">
                          <span class="input_cover">
                            <input type="date" class="lw_input" placeholder="Select dates" value="">
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="item_cover">
                      <span class="item_label">Team/Group</span>
                      <div class="item_value">
                        <span class="select_cover">
                          <span class="lw_selectbox_label">1</span>
                          <div class="lw_selectbox_layer" style="display: none;">
                            <ul>
                              <li class="">
                                <a>None</a>
                              </li>
                              <li class="on">
                                <a>1</a>
                              </li>
                            </ul>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="item_cover">
                      <span class="item_label">Assigner <div class="tooltip_cover">
                          <a class="ico_help">
                            <i class="blind">Help</i>
                          </a>
                        </div>
                      </span>
                      <div class="item_value">
                        <div class="member_list completed">
                          <span class="added_member">
                            <span class="name">test test</span>
                            <button type="button" class="btn_remove">
                              <i class="blind">Select to delete</i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="item_cover">
                      <span class="item_label">Assignee <div class="tooltip_cover">
                          <a class="ico_help">
                            <i class="blind">Help</i>
                          </a>
                        </div>
                      </span>
                      <div class="item_value">
                        <div class="member_list completed">
                          <span class="added_member">
                            <span class="name">test test</span>
                            <button type="button" class="btn_remove">
                              <i class="blind">Select to delete</i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="item_cover file_attachment fold">
                      <span class="item_label">Attach File <button type="button" class="btn_toggle">
                          <i class="blind">Expand/collapse attachments box</i>
                        </button>
                      </span>
                      <div class="item_value">
                        <div class="lw_file_attach_write">
                          <div class="file_infor">
                            <label class="btn_attach">
                              <input type="file" class="btn_attach" multiple="" @change="handleFileUpload" style="display: none;">My PC </label>
                            <button type="button" class="btn_attach">Folder</button>
                            <p class="total_volume">Attached file <em class="cnt">0</em> Files 0KB </p>
                          </div>
                          <div class="file_wrap">
                            <table class="file_head">
                              <colgroup>
                                <col class="col_file_del">
                                <col class="col_file_name">
                                <col class="col_file_size">
                              </colgroup>
                              <thead>
                                <tr>
                                  <th class="file_del"></th>
                                  <th class="file_name">
                                    <p class="file_cell">File name</p>
                                  </th>
                                  <th class="file_size">
                                    <p class="file_cell">Size</p>
                                  </th>
                                </tr>
                              </thead>
                            </table>
                            <div class="file_scroll_box">
                              <table class="file_cont">
                                <colgroup>
                                  <col class="col_file_del">
                                  <col class="col_file_name">
                                  <col class="col_file_size">
                                </colgroup>
                                <tbody>
                                  <tr v-if="!selectedFiles.length">
                                    <td colspan="3">
                                      <div class="empty attach">
                                        <p class="sub_msg">Drag and drop a file with the mouse.</p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr v-else v-for="(file, index) in selectedFiles" :key="file.name">
                                    <td class="file_del">
                                      <button type="button" class="btn_file_del" @click="removeFile(index)">
                                        <i class="blind">Delete attached file</i>
                                      </button>
                                    </td>
                                    <td class="file_name">
                                      <p class="file_cell">
                                        <i :class="['lw_file', 'lw_file_'+getFileExtension(file.name)]"></i>
                                        <span class="file_name_txt" :title="file.name">{{file.name}}</span>
                                      </p>
                                    </td>
                                    <td class="file_size">
                                      <p class="file_cell">{{ formatFileSize(file.size) }}</p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="btn_cover">
                  <button type="button" class="lw_btn" @click="close">Cancel</button>
                  <button class="lw_btn_point">Save</button>
                </div>
                <button type="button" class="btn_close" @click="close">Close</button>
              </div>
            </div>
          </div>
        </form>
      </div>
  </div>
</template>
  
<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'TaskCreate',
  props: {
    // title: {
    //   type: String,
    //   required: true
    // },
    visible: {
      type: Boolean,
      default: false
    },
    // organization: {
    //   type: Object,
    //   default: ()=>{}
    // }
  },
  data(){
    return {
      form: {
        name: '',
        description: '',
        isNotify: true,
        isDisclose: true
      },
      visibleAdvance: true,
      selectedFiles: []
    }
  },
  computed: {
    // ...mapState('organizations', ['status']),
  },
  methods: {
    // ...mapActions('organizations', ['addOrg']),
    removeFile(index) {
      this.selectedFiles.splice(index, 1);
    },
    formatFileSize(sizeInBytes) {
      if (sizeInBytes < 1024) {
        return sizeInBytes + ' bytes';
      } else if (sizeInBytes < 1024 * 1024) {
        const sizeInKilobytes = (sizeInBytes / 1024).toFixed(2);
        return sizeInKilobytes + ' KB';
      } else if (sizeInBytes < 1024 * 1024 * 1024) {
        const sizeInMegabytes = (sizeInBytes / (1024 * 1024)).toFixed(2);
        return sizeInMegabytes + ' MB';
      } else {
        const sizeInGigabytes = (sizeInBytes / (1024 * 1024 * 1024)).toFixed(2);
        return sizeInGigabytes + ' GB';
      }
    },
    getFileExtension(filename) {
      return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
    },
    close() {
      this.$emit('close');
      // this.form = {
      //   name: '',
      //   description: '',
      //   isNotify: true,
      //   isDisclose: true
      // }
    },
    submitForm(){
      // const form = {
      //   ...this.form,
      //   note: '',
      //   type: ''
      // }
      // this.addOrg(form);
      // setTimeout(() => {
      //   this.status == null ? this.close() : '';
      // }, 1000);
    },
    multiSubmitForm(){
      // const form = {
      //   ...this.form,
      //   note: '',
      //   type: ''
      // }
      // this.addOrg(form);
      // this.form = {
      //   name: '',
      //   description: '',
      //   isNotify: false,
      //   isDisclose: false
      // }
    },
    handleFileUpload(event) {
      this.selectedFiles = Array.from(event.target.files);
    },
    // uploadFiles() {
    //   const formData = new FormData();

    //   // Append each selected file to the formData object
    //   this.selectedFiles.forEach((file) => {
    //     formData.append('files', file);
    //   });

    //   // Send the formData to the server using Axios
    //   axios
    //     .post('/upload', formData)
    //     .then((response) => {
    //       // Handle the server's response
    //       console.log('Files uploaded successfully:', response.data);
    //     })
    //     .catch((error) => {
    //       // Handle any errors that occur during the upload
    //       console.error('Error uploading files:', error);
    //     });
    // }
  }
};
</script>
<style scoped lang="scss">
.btn_cover button+.btn_drop_cover, 
.btn_cover button+button {
  margin-left: 8px;
}
.empty.attach {
  padding-top: 14px;
  height: 67px;
  box-sizing: border-box;
}
.empty.attach:before {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
  background-size: 318px 311px;
  background-position: -298px -76px;
  width: 16px;
  height: 16px;
  display: inline-block;
  display: block;
  margin: 0 auto;
}
.empty {
  text-align: center;
}
.lw_file_attach_write .file_wrap {
  border: 1px solid #ddd;
  border-radius: 2px;
}
.empty.attach .sub_msg {
  font-size: 12px;
  margin-top: 7px;
}
.select_cover, .select_cover .lw_selectbox_label {
  position: relative;
  display: inline-block;
  max-width: 100%;
}
.write_cover .item_value .select_cover .lw_selectbox_label {
  min-width: 214px;
  height: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
}
.write_cover {
  width: 100%;
  min-width: 490px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px 32px;
}
.lw_file_attach_write .file_infor .btn_attach~.btn_attach {
  margin-left: 8px;
}
.select_cover .lw_selectbox_label.hover, .select_cover .lw_selectbox_label:hover {
  background-color: rgba(0,0,0,.05);
}
.select_cover .lw_selectbox_label {
  font-size: 14px;
  box-sizing: border-box;
  height: 32px;
  border-radius: 2px;
  line-height: 20px;
  text-decoration: none;
  vertical-align: middle;
  padding: 5px 12px 5px;
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
.ly_common .tit_box {
  margin-bottom: 19px;
}
.select_cover .lw_selectbox_label:after {
  position: absolute;
  margin-top: 0;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.select_cover .lw_selectbox_label:after {
  content: "";
  background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
  background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
  background-size: 318px 311px;
  background-position: -206px -124px;
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: -2px 0 0 6px;
  vertical-align: middle;
}
.select_cover, .select_cover .lw_selectbox_label {
  position: relative;
  display: inline-block;
  max-width: 100%;
}
.empty .sub_msg {
  color: #767676;
  line-height: 1.5;
  margin-top: 4px;
}
.ly_common.ly_write {
  width: 600px;
  max-width: 100%;
}
.write_cover .item_cover {
  position: relative;
}

.write_cover .item_cover:after {
  content: "";
  height: 0;
  overflow: hidden;
  clear: both;
  display: block;
}

.write_cover .item_cover~.item_cover {
  padding-top: 12px;
}
.write_cover .item_cover .item_label+.item_value {
  margin-left: 114px;
}
.write_cover .item_cover .item_value {
  display: flex;
  position: relative;
}
.write_cover .textarea_cover {
  flex: 1 1 auto;
}
.write_cover .textarea_cover .lw_textarea {
  font-size: 14px;
  color: #222;
  line-height: 21px;
  box-sizing: border-box;
  height: 140px;
  padding: 10px 0 10px 12px;
  border: 1px solid #ddd;
  border-radius: 2px;
  width: 100%;
  min-width: 0;
  vertical-align: top;
  resize: none;
}
.write_cover .item_value .toggle_cover input {
  position: absolute;
  clip: rect(0 0 0 0);
}
.en_US .write_cover .item_value.expire_date .toggle_cover {
  margin-right: 8px;
  margin-bottom: 8px;
}
.write_cover .item_value .toggle_cover {
  font-size: 0;
  flex: 0 0 auto;
}
.write_cover .item_value .toggle_cover input:checked+label {
  border-color: #157efb;
  color: #157efb;
  position: relative;
  z-index: 10;
}
.write_cover .item_value .toggle_cover label:first-of-type {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.write_cover .item_value .toggle_cover label {
  display: inline-block;
  border: 1px solid #c5c5c6;
  font-size: 14px;
  line-height: 20px;
  padding: 9px 12px;
  box-sizing: border-box;
}
.en_US .write_cover .item_value.expire_date .date_cover {
  margin-bottom: 8px;
}
.write_cover .item_value .date_cover, .write_cover .item_value .input_cover {
  flex: 1 1 auto;
}
.write_cover .item_value .input_cover .lw_input {
  font-size: 14px;
  color: #222;
  line-height: 21px;
  box-sizing: border-box;
  height: 40px;
  padding: 9px 0 10px 12px;
  border: 1px solid #ddd;
  border-radius: 2px;
  width: 100%;
  -webkit-appearance: none;
  min-width: 0;
}
.en_US .write_cover .item_value.expire_date .input_cover {
  margin-left: 0;
}
.write_cover .item_value .input_cover {
  margin-left: 8px;
}
.write_cover .item_value .date_cover, 
.write_cover .item_value .input_cover {
  flex: 1 1 auto;
}
.en_US .write_cover .item_value.expire_date {
  flex-wrap: wrap;
  margin-bottom: -8px;
}
.lw_file_attach_write .file_infor .btn_attach.hover, .lw_file_attach_write .file_infor .btn_attach:hover {
  background-color: rgba(0,0,0,.05);
}
.lw_file_attach_write .file_infor .btn_attach {
  font-size: 14px;
  display: inline-block;
  box-sizing: border-box;
  height: 40px;
  border-radius: 2px;
  line-height: 21px;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 8px 12px 9px;
  min-width: 64px;
  border: 1px solid #c5c5c6;
  background: #fff;
  color: #222;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.date_cover .input_cover {
  flex: 1 1 auto;
  min-width: 0;
}
.lw_file_attach_write .file_infor .total_volume {
  flex: 1 1 auto;
  text-align: right;
  padding: 11px 0;
  font-size: 12px;
  line-height: 18px;
  color: #767676;
}
.lw_file_attach_write .file_infor {
  display: flex;
  margin-bottom: 8px;
}
.lw_file_attach_write .file_head th {
  font-size: 12px;
  color: #434343;
  font-weight: 400;
  text-align: left;
  box-sizing: border-box;
  line-height: 18px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.lw_file_attach_write .file_wrap table .file_size {
  text-align: right;
  padding-right: 33px;
}
.lw_file_attach_write .file_wrap table p {
  margin-bottom: 0;
}
.lw_file_attach_write .file_wrap table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.lw_file_attach_write .file_head {
  background-color: #fafafb;
}
.ly_common.ly_write .write_cover {
  padding-left: 24px;
  padding-right: 24px;
}
.write_cover .item_cover .item_label {
  clear: both;
  float: left;
  color: #222;
  line-height: 1.5;
  font-size: 14px;
  width: 114px;
  padding-top: 8px;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.ly_common .tit {
  font-size: 18px;
  line-height: 26px;
  color: #222;
  padding: 22px 48px 21px 24px;
  flex: 0 0 auto;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  word-wrap: normal;
}
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
.ly_common.ly_write .layer_body {
  overflow: auto;
}
.ly_common .layer_body {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  overflow: auto;
}
.ly_wrap.dimmed .ly_alert, .ly_wrap.dimmed .ly_common {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  text-align: left;
  white-space: normal;
  vertical-align: middle;
  position: relative;
  z-index: 10;
  max-height: 100%;
}
.ly_common {
  flex-direction: column;
}
#modal-root .ly_common {
  top: 50%;
  transform: translateY(-50%);
}
.ly_wrap.dimmed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  text-align: center;
  white-space: nowrap;
  height: 100%;
}
.ly_common .btn_cover {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  text-align: right;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  border-top: 1px solid #e5e5e6;
}
</style>
