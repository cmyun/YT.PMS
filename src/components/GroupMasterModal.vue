<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-body">
      <div id="modal-root">
        <div class="ly_wrap dimmed en_US ua_win">
          <div class="ly_common ly_page ly_member_select freeplan">
            <h3 class="tit">Change master</h3>
            <div class="btn_box full">
              <button type="button" class="lw_btn" @click="close">Cancel</button>
              <button type="button" class="lw_btn_point">Save</button>
            </div>
            <div class="scroller">
              <div class="list_hd">
                <span>Member(s)</span>
                <span>Master(s)</span>
              </div>
              <div class="list_cont">
                <ul class="member_list">
                  <li class="has_thmb">
                    <div class="thumb">
                      <span class="thmb_area">
                        <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" loading="lazy" alt="">
                      </span>
                    </div>
                    <div class="infor">
                      <div class="name_box">
                        <strong class="name">test2 test2</strong>
                      </div>
                      <div class="txt">
                        <span class="email">test2@test-5380</span>
                      </div>
                    </div>
                    <span class="slct">
                      <input type="checkbox" class="lw_checkbox" id="slct_member_modify_110002506998668_400253934" name="slct_leader" checked="">
                      <!-- <label for="slct_member_modify_110002506998668_400253934">Select member</label> -->
                    </span>
                  </li>
                  <li class="has_thmb">
                    <div class="thumb">
                      <span class="thmb_area">
                        <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" loading="lazy" alt="">
                      </span>
                    </div>
                    <div class="infor">
                      <div class="name_box">
                        <strong class="name">test test</strong>
                      </div>
                      <div class="txt">
                        <span class="email">test.test@test-5380</span>
                      </div>
                    </div>
                    <span class="slct">
                      <input type="checkbox" class="lw_checkbox" id="slct_member_modify_110002506932338_400253934" name="slct_leader" checked="">
                      <!-- <label for="slct_member_modify_110002506932338_400253934">Select member</label> -->
                    </span>
                  </li>
                  <li class="has_thmb">
                    <div class="thumb">
                      <span class="thmb_area">
                        <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" loading="lazy" alt="">
                      </span>
                    </div>
                    <div class="infor">
                      <div class="name_box">
                        <strong class="name">test04 test04</strong>
                      </div>
                      <div class="txt">
                        <span class="email">test04@test-5380</span>
                      </div>
                    </div>
                    <span class="slct">
                      <input type="checkbox" class="lw_checkbox" id="slct_member_modify_110002506999096_400253934" name="slct_leader" checked="">
                      <!-- <label for="slct_member_modify_110002506999096_400253934">Select member</label> -->
                    </span>
                  </li>
                  <li class="has_thmb">
                    <div class="thumb">
                      <span class="thmb_area">
                        <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" loading="lazy" alt="">
                      </span>
                    </div>
                    <div class="infor">
                      <div class="name_box">
                        <strong class="name">test03 test03</strong>
                      </div>
                      <div class="txt">
                        <span class="email">test03@test-5380</span>
                      </div>
                    </div>
                    <span class="slct">
                      <input type="checkbox" class="lw_checkbox" id="slct_member_modify_110002506999105_400253934" name="slct_leader" checked="">
                      <!-- <label for="slct_member_modify_110002506999105_400253934">Select member</label> -->
                    </span>
                  </li>
                  <li class="has_thmb">
                    <div class="thumb">
                      <span class="thmb_area">
                        <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile_group2.png" loading="lazy" alt="">
                      </span>
                      <i class="ico_groups">group</i>
                    </div>
                    <div class="infor">
                      <div class="name_box">
                        <strong class="name">New organization (1)</strong>
                      </div>
                      <div class="txt">
                        <span class="email">t_512br@test-5380</span>
                      </div>
                    </div>
                    <span class="slct">
                      <input type="checkbox" class="lw_checkbox" id="slct_member_modify_230000002195103_400253934" name="slct_leader" disabled="">
                      <!-- <label for="slct_member_modify_230000002195103_400253934">Select member</label> -->
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" class="btn_close" @click="close">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GroupMasterModal",
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
  data(){
    return {
      selectedOrg: {}
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>
<style scope lange="scss">
.ly_member_select .list_hd {
    height: 32px;
    -webkit-box-sizing: border-box;
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
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: auto;
    padding: 0 14px;
    border-top: 1px solid #e5e5e6;
}

.ua_win .ly_member_select .list_cont {
    overflow-y: scroll;
}
y_member_select .member_list .slct label {
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
.ly_member_select .member_list .slct label:before {
    left: auto;
    right: 10px;
}
/* .lw_checkbox:checked+label:before {
    background-position: -967px -765px;
}
.lw_checkbox+label:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -993px -659px;
    width: 16px;
    height: 16px;
    display: inline-block;
} */
.ly_member_select .member_list .slct {
  display: block;
    height: 16px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
</style>
