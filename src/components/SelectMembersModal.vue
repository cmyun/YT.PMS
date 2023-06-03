<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <form @submit.prevent="submitForm">
      <div class="modal-body">
        <div id="modal-root">
          <div class="ly_wrap dimmed en_US ua_win">
            <div class="ly_common ly_page ly_organization ly_organization02 freeplan">
              <div class="tit_box"><h3 class="tit">Select {{title}}(s)</h3></div>
              <div class="btn_box">
                <button type="button" class="lw_btn" @click="close">Cancel</button>
                <button class="lw_btn_point">OK</button>
              </div>
              <div class="org_container">
                <div class="member_view">
                  <section class="organization">
                    <ul class="org_tree">
                      <organization-list 
                        v-for="(node, index) in newOrganizations"
                        :node="node" 
                        :key="index"
                        :expandAll="true"
                        :selected = selectedId
                        @data-up="onDataUp"
                      >
                      </organization-list>
                    </ul>
                  </section>
                  <section class="fix_contents member_list">
                    <div class="fix_head memlist_head">
                      <div class="list_head">
                        <h1>
                          <span class="check_cover">
                            <input type="checkbox" class="lw_checkbox" v-model="selectAll" @click="checkAll()">
                          </span>
                          <span class="group_name">{{ getOrganizationName(this.selectedId) }}</span>
                          <em class="cnt">{{ members.length }}</em>
                        </h1>
                      </div>
                    </div>
                    <div class="fix_body">
                      <div class="lw_table_scoll">
                        <div class="lw_table tb_cols_memberlist">
                          <div class="lw_tr" :class="{selected: selected.includes(item.id)}" v-for="item in members" :key="item">
                            
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
                                <span class="name"><strong>{{ item.name }}</strong></span>
                                <span class="team">{{ item.organizationName }}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class="selected_list_box selected_list_box02" v-if="selectedArr.length">
                  <div class="count">
                    <span>select {{ selectedArr.length }}</span>
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
      selectAll: false,
      dataIds: [],
      selectedId: 0
    }
  },
  components: {
    OrganizationList
  },
  computed: {
    ...mapState('organizations', ['organizations']),
    ...mapState('group', ['group']),
    ...mapState('members', ['members']),
    ...mapState('organizations', ['organizations']),
    ...mapState('group', ['groupMembers']),
    ...mapState('group', ['groupMasters']),
    newOrganizations(){
      const tree = this.buildTree(this.organizations, -1, 0);
      return tree;
    },
  },
  watch: {
    dataSelected(newVal) {
      this.selectAll = this.members.length == this.selected.length ? true : false;
      this.selected = newVal.length ? newVal.map(obj => obj.user_ID) : [];
      this.selectedArr = newVal.length ? this.getCommonElements(this.members, newVal) : [];
    },
    visible(newVal){
      if(newVal){
        this.getMembersByOrg(0);
      }
    }
  },
  methods: {
    ...mapActions('members', ['getMembersByOrg']),
    buildTree(data, parent, level) {
      const tree = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].pid === parent) {
          const node = {
            id: data[i].id,
            name: data[i].name,
            no: data[i].no,
            type: data[i].type,
            isDisclose: data[i].isDisclose,
            isNotify: data[i].isNotify,
            description: data[i].description,
            pid: data[i].pid,
            lv: level,
            note: data[i].note,
            fName: data[i].fName,
            fid: data[i].fid,
            hUser_ID: data[i].hUser_ID,
            hUserName: data[i].hUserName,
            count: data[i].count,
            children: []
          };
          const children = this.buildTree(data, data[i].id, level + 1);
          if (children.length) {
            node.children = children;
          }
          tree.push(node);
        }
      }
      return tree;
    },
    close() {
      this.$emit('close');
      this.selected = []
      this.selectedArr = []
      this.selectAll = false;
    },
    submitForm() {
      const memList = this.members.filter(item=>this.selected.includes(item.id));
      const arr = [];
      memList.forEach(obj => {
        arr.push({
          'user_ID': obj.id,
          'userName': obj.name,
          'organization': obj.organizationName,
          'level': obj.level,
          'position': obj.position,
        })
      });
      this.$emit('submitData', this.selected, arr);
    },
    onDataUp(data) {
      this.selectedId = data.id;
      this.getMembersByOrg(data.id);
      setTimeout(()=>{
        this.updateCheckall();
      }, 1000)
    },
    checkAll(){
      this.selected = [];
      this.selectedArr = [];
      if (!this.selectAll) {
        for (let i in this.members) {
          this.selected.push(this.members[i].id);
        }
        this.selectedArr = this.members;
      }
    },
    updateCheckall(){
      if(this.members.length <= this.selected.length){
        this.selectAll = true;
        this.selectedArr = this.members;
      }else{
        this.selectAll = false;
        this.selectedArr = this.members.filter(item => this.selected.includes(item.id));
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
      this.selectAll = false
      this.selected = []
      this.selectedArr = []
    },
    getCommonElements(A, B) {
      let commonElements = A.filter(function(elementA) {
        return B.some(function(elementB) {
          return elementB.user_ID === elementA.id;
        });
      });
      return commonElements;
    },
    getOrganizationName(id){
      const organization = this.organizations.find((item) => item.id === id);
      return organization.name;
    },
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
.name_cover .team {
  display: block;
}
</style>
