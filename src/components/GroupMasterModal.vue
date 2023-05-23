<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-body">
      <form @submit.prevent="submitForm">
        <div id="modal-root">
          <div class="ly_wrap dimmed en_US ua_win">
            <div class="ly_common ly_page ly_member_select freeplan">
              <h3 class="tit">Change master</h3>
              <div class="btn_box full">
                <button type="button" class="lw_btn" @click="close">Cancel</button>
                <button class="lw_btn_point">Save</button>
              </div>
              <div class="scroller">
                <div class="list_hd">
                  <span>Member(s)</span>
                  <span>Master(s)</span>
                </div>
                <div class="list_cont">
                  <ul class="member_list">
                    <li class="has_thmb" v-for="master in groupMasters" :key="master">
                      <div class="thumb">
                        <span class="thmb_area">
                          <img src="../assets/img_profile.png" loading="lazy" alt="">
                        </span>
                      </div>
                      <div class="infor">
                        <div class="name_box">
                          <strong class="name">{{ master.userName }}</strong>
                        </div>
                        <div class="txt">
                          <span class="email">{{ master.position + '/ ' + master.level }}</span>
                        </div>
                      </div>
                      <span class="slct">
                        <input :name="master.id" type="checkbox" class="lw_checkbox" :value="master.id" :id="master.id" v-model="selected">
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
  name: "GroupMasterModal",
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    masterIds: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {
      selected: this.masterIds
    }
  },
  computed: {
    ...mapState('group', ['group']),
    ...mapState('group', ['groupMasters']),
  },
  watch: {
    masterIds(newVal) {
        this.selected = newVal
    }
  },
  
  methods: {
    close() {
      this.$emit('close');
    },
    submitForm(){
      this.$emit('submitMaster', this.selected);
    }
  }
}
</script>
