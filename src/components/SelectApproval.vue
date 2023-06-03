<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <form @submit.prevent="submitForm">
      <div class="modal-body">
        <div id="modal-root">
          <div class="ly_wrap dimmed en_US ua_win">
            <div class="ly_common ly_page ly_organization ly_organization02 freeplan">
              <div class="tit_box"><h3 class="tit">Select {{title}}(s) <em class="cnt">{{ users.length }}</em></h3></div>
              <div class="btn_box">
                <button type="button" class="lw_btn" @click="close">Cancel</button>
                <button class="lw_btn_point">OK</button>
              </div>
              <div class="org_container">
                <div class="member_view">
                  <section class="fix_contents member_list">
                    <div class="lw_table tb_cols_memberlist">
                      <div class="lw_tr" :class="{selected: selected.includes(item.id)}" v-for="item in users" :key="item">
                        <div class="lw_td check">
                          <input type="checkbox" class="lw_checkbox" :name="item.id" :value="item.id" :id="item.id" v-model="selected" @change='updateCheckall()'>
                        </div>
                        <div class="lw_td profile">
                          <span class="thumb_cover">
                            <img src="../assets/img_profile.png" alt="">
                          </span>
                        </div>
                        <div class="lw_td user_name">
                          <span class="name_cover">
                            <span class="name">{{ item.name }}</span>
                          </span>
                          <span class="team">{{ item.login_ID }}</span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class="selected_list_box selected_list_box02" v-if="selectedArr.length">
                  <div class="count">
                    <span>Select {{ selectedArr.length }}</span>
                    <button type="button" class="btn_remove_all" @click="removeAll">
                    </button>
                  </div>
                  <ul class="selected_list">
                    <li v-for="item in selectedArr" :key="item">
                      <span class="item">{{ item.name }}</span>
                      <button type="button" class="btn_delete" @click="deleteIem(item.id)">Delete</button>
                    </li>
                  </ul>
                </div>
              </div>
              <button type="button" class="btn_close" @click="close">Close</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import OrganizationList from "@/components/OrganizationList.vue";
import { mapState, mapActions } from 'vuex';
export default {
  name: "SelectMembersModal",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    dataSelected: {
      type: Array,
      default: ()=>[]
    },
    title: {
      type: String,
      default: 'Member'
    },
    
  },
  data(){
    return {
      selected: [],
      selectedArr: [],
      dataIds: [],
      selectedId: 0
    }
  },
  computed: {
    ...mapState('organizations', ['organizations']),
    ...mapState('group', ['group']),
    ...mapState('users', ['users']),
    ...mapState('organizations', ['organizations']),
    ...mapState('group', ['groupMembers']),
    ...mapState('group', ['groupMasters'])
  },
  watch: {
    // dataSelected(newVal) {
    //   this.selected = newVal.map(obj => obj.user_ID)
    //   this.selectedArr = this.getCommonElements(this.members, newVal)
    // },
  },
  methods: {
    close() {
      this.$emit('close');
      this.selected = []
      this.selectedArr = []
    },
    submitForm() {
      this.$emit('submitData', this.selected);
    },
    onDataUp(data) {
      this.selectedId = data.id;
    },
    updateCheckall(){
      if(this.users.length == this.selected.length){
        this.selectedArr = this.users;
      }else{
        this.selectedArr = this.users.filter(item => this.selected.includes(item.id));
      }
    },
    deleteIem(id){
      const selected = this.selected.filter(item => item !== id);
      this.selected = selected;
      const selectedArr = this.selectedArr.filter(item => item.id !== id);
      this.selectedArr = selectedArr;
      this.updateCheckall();
    },
    removeAll(){
      this.selected = []
      this.selectedArr = []
    }
  }
}
</script>
<style scoped lang="scss">
.ly_organization02 {
  padding-bottom: 84px !important;
}
.selected_list_box02 {
  padding: 0 0 0 111px !important;
}
.tb_cols_memberlist {
    margin-top: 0;
}
.org_container {
  height: 362px;
}
.member_view {
  height: 300px;
  overflow-y: auto;
}
</style>
