<template>
  <div class="contact wrap">
    <Header
      :title="'Admin'"
    />
    <Sidebar/>
    <div id="container">
      <div id="content" class="contents fix_layout">
        <div class="contentsHead contents_head">
          <h3 class="title"><span class="txt">Member</span></h3>
          <div class="task_area">
            <button type="button" class="btn_cancel" @click="refreshHandle">Refresh</button>
            <button type="button" class="btn_delete02" @click="openConf" :disabled="!selected.length">Delete</button>
            <button type="button" class="btn_cancel" @click="openModal">Add members</button>
            <button type="button" class="btn_save" @click="openSelectApproval">Approval</button>
          </div>
        </div>
        <div class="contentsBody contents_body">
          <div class="memberView member_view">
            <div class="organization">
              <ul class="org_tree">
                <organization-list 
                  v-for="(node, index) in newOrganizations"
                  :node="node" 
                  :key="index"
                  :expandAll="true"
                  :selected="selectedId"
                  @data-up="onDataUp"
                >
                </organization-list>
              </ul>
            </div>
            <div class="fix_contents member_list">
              <div class="fix_head memlist_head">
                <div class="listHead list_head">
                  <h1><strong class="groupName">{{getOrganizationName(selectedId)}}</strong><em class="cnt">{{members.length}}</em></h1>
                </div>
              </div>
              <div class="fixBody fix_body">
                <div class="memberlistTableHeader lw_table tb_cols_memberlist_head">
                  <div class="lwTr thead">
                    <div class="lwTh check">
                      <input type="checkbox" class="lwCheckbox" v-model="selectAll" @click="checkAll()">
                      <label for="default-id-3-all"></label>
                    </div>
                    <div class="lwTh profile"></div>
                    <div class="lwTh userName">Name</div>
                    <div class="lwTh title">Level</div>
                    <div class="lwTh status">Account Status</div>
                    <div class="lwTh detail">Remark</div>
                  </div>
                </div>
                <div class="tableScoll lw_table_scoll">
                  <div class="memberlistTable lw_table tb_cols_memberlist" v-if="members.length">
                    <div class="lw_table tb_cols_memberlist">
                      <div class="lwTr" v-for="member in members" :key="member.id">
                        <div class="lwTd check">
                          <input :name="member.id" :value="member.id" type="checkbox" class="lw_checkbox" :id="member.id" v-model="selected" @change='updateCheckall(member)'>
                        </div>
                        <div class="lwTd profile">
                          <span class="thumb_cover"><img src="../assets/img_profile.png" alt=""></span>
                        </div>
                        <div class="lwTd userName user_name">
                          <span class="name_cover">
                            <router-link :to="{ name: 'MemberDetail', params: { id: member.id } }" class="name">{{ member.name }}</router-link>
                            <span class="name_en"></span>
                          </span>
                          <span class="team">{{ getOrganizationName(member.organization_ID) }}</span>
                        </div>
                        <div class="lwTd title">
                          <span class="ellipsis_element">{{ member.level }}</span>
                        </div>
                        <div class="lwTd status">
                          <span class="msg using">{{member.status}}</span>
                        </div>
                        <div class="lwTd detail"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="selected_list_box selected_list_box02">
                <div class="count">
                  <span>Select {{ selectedMembers.length }}</span>
                  <button type="button" class="btn_remove_all" @click="removeAll">
                  </button>
                </div>
                <ul class="selected_list" v-if="selectedMembers.length">
                  <li v-for="member in selectedMembers" :key="member.id">
                    <a href="#" class="item groups">{{ member.name }}</a>
                    <button type="button" class="btn_delete" @click="unchecked(member)">Delete</button>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-form 
      :title="title" 
      :visible="visible" 
      @close="closeModal" 
      @submit="submitForm">
    </modal-form>
    <confirmation-box 
      :visible="visibleConf" 
      @close="closeConf" 
      @confirm="handleDelete">
    </confirmation-box>
    <select-approval
      :visible="visibleSelectApproval"
      :dataSelected="users"
      @close="closeSelectApproval"
      @submitData="handleSubmitApproval"
    >
    </select-approval>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import ModalForm from '@/components/ModalForm.vue';
import SelectApproval from "@/components/SelectApproval.vue";
import ConfirmationBox from '@/components/ConfirmationBox.vue';
import ElMessageBox from '@/components/ElMessageBox.vue';
import OrganizationList from "@/components/OrganizationList.vue";
import { mapState, mapActions } from 'vuex';

export default {
  name: "MemberView",
  components: {
    Header,
    Sidebar,
    OrganizationList,
    ModalForm,
    SelectApproval,
    ConfirmationBox,
  },
  data(){
    return {
      selectAll: false,
      selected: [],
      selectedMembers: [],
      title: 'Modal Form',
      visible: false,
      visibleConf: false,
      selectedId: 0,
      visibleSelectApproval: false,
      newMembers: []
    }
  },
  computed: {
    ...mapState('members', ['members']),
    ...mapState('organizations', ['organizations']),
    ...mapState('positions', ['positions']),
    ...mapState('account', ['user']),
    ...mapState('members', ['apiStatus']),
    ...mapState('users', ['users']),
    ...mapState({
      apiStatusUsers: state => state.users.apiStatus
    }),
    newOrganizations(){
      const tree = this.buildTree(this.organizations, -1, 0);
      return tree;
    },
  },
  created() {
    this.getMembersByOrg(0);
    this.getOrganizations();
    this.getPositions();
    this.getUsers();
  },
  methods: {
    ...mapActions('members', ['getMembersByOrg']),
    ...mapActions('organizations', ['getOrganizations']),
    ...mapActions('positions', ['getPositions']),
    ...mapActions('members', ['addMember']),
    ...mapActions('members', ['deleteMember']),
    ...mapActions('users', ['getUsers']),
    ...mapActions('users', ['addUsers']),
    checkAll(){
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.members) {
          this.selected.push(this.members[i].id);
        }
      }
      this.selectedMembers = this.members.filter(item => this.selected.includes(item.id));
    },
    removeAll(){
      this.selectAll = true;
      this.checkAll();
      this.selectAll = false;
    },
    updateCheckall(member){
      this.selectedMembers = this.members.filter(item => this.selected.includes(item.id));
      if(this.members.length == this.selected.length){
        this.selectAll = true;
      }else{
        this.selectAll = false;
      }
    },
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
    handleDelete(conf){
      if(conf){
        this.deleteMember(this.selected);  
        this.closeConf();
        this.selected = [];
        this.selectedMembers = [];
      }
    },
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    submitForm(data){
      this.addMember(data);
      setTimeout(() => {
        if(!this.apiStatus.addMember.error){
          this.getMembersByOrg(0);
        }
      }, 1000);
    },
    onDataUp(data){
      this.selectedId = data.id;
      this.getMembersByOrg(data.id);
    },
    closeConf(){
      this.visibleConf = false;
    },
    openConf(){
      this.visibleConf = true;
    },
    getOrganizationName(id){
      const organization = this.organizations.find((item) => item.id === id);
      return organization.name;
    },
    refreshHandle(){
      this.getMembersByOrg(this.selectedId);
    },
    openSelectApproval(){
      this.visibleSelectApproval = true
    },
    closeSelectApproval(){
      this.visibleSelectApproval = false
    },
    handleSubmitApproval(data){
      const ids = {
        'ids': data
      }
      this.addUsers(data);
      setTimeout(()=>{
        if(!this.apiStatusUsers.addUsers.error){
          this.closeSelectApproval();
          this.getUsers();
        }
      }, 1000)
    },
    unchecked(member){
      // const item = this.findElementById(this.newM, member.id);
      this.updateCheckall(member);
    },
  }
};
</script>
<style scoped lang="scss">
  a {
    text-decoration: none;
    color: #2c3e50;
  }
  .lw_table_scoll .tb_cols_memberlist {
    flex: 0 1 auto;
  }
  .name {
    font-weight: bold;
  }
  .selected_list_box {
    padding: 0 0 0 111px;
    border-width: 1px 0 0;
  }
</style>
