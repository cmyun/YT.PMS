<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-body">
      <form @submit.prevent="submitForm">
        <div id="modal-root">
          <div class="ly_wrap dimmed en_US ua_win">
            <div class="ly_common ly_page ly_member_select freeplan">
              <h3 class="tit">Change organizational head</h3>
              <div class="btn_box full">
                <button type="button" class="lw_btn" @click="close">Cancel</button>
                <button class="lw_btn_point">Save</button>
              </div>
              <div class="scroller">
                <div class="list_hd">
                  <span>Member</span>
                  <span>Organizational head</span>
                </div>
                <div class="list_cont">
                  <ul class="member_list">
                    <li class="has_thmb" v-for="member in orgMembers" :key="member">
                      <div class="thumb">
                        <span class="thmb_area">
                          <img src="../assets/img_profile.png" loading="lazy" alt="">
                        </span>
                      </div>
                      <div class="infor">
                        <div class="name_box">
                          <strong class="name">{{ member.userName }}</strong>
                        </div>
                        <div class="txt">
                          <span class="email">{{ member.position + '/ ' + member.level }}</span>
                        </div>
                      </div>
                      <span class="slct">
                        <input name="lw_checkbox" type="checkbox" class="lw_checkbox" :value="member.user_ID" :id="member.user_ID" v-model="selected">
                      </span>
                    </li>
                  </ul>
                </div>
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
import { mapState, mapActions } from 'vuex';
import store from "../store";
export default {
  name: "SelectOrgHeadModal",
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
  data(){
    return {
      selected: null
    }
  },
  computed: {
    ...mapState('organization', ['orgMembers']),
  },
  watch: {
    orgMembers(newVal) {
      this.selected = newVal
        .filter(member => member.isHead)
        .map(member => member.user_ID);
      }
    },
  methods: {
    close() {
      this.$emit('close');
    },
    submitForm(){
      this.$emit('submitHead', this.selected);
    }
  }
}
</script>
<style scoped lang="scss">
.member_list {
  display: block;
  border: none;
}
</style>
