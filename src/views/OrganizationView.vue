<template>
  <div class="contact wrap">
    <Header
      :title="'Admin'"
    />
    <Sidebar/>
    <div id="container">
      <div id="content" class="contents fix_layout">
        <div class="contentsHead contents_head">
          <h3 class="title"><span class="txt">Organization</span></h3>
            <div class="task_area">
              <button type="button" class="btn_delete02" :disabled="!selected.length || visibleEdittingBar" @click="openConf">Delete</button>
              <button type="button" class="btn_cancel" @click="openMove" :disabled="selected.length||visibleEdittingBar">Move</button>
              <button type="button" class="btn_save" @click="openAddOrgModal">Add</button>
            </div>
        </div>
        <div class="contentsBody contents_body">
          <div class="fix_contents">
            <div class="editing_bar" v-show="visibleEdittingBar">
              <button type="button" @click="closeMove">Cancel</button>
              <button type="button" :disabled="!isMoved">Save</button>
              <button type="button" class="pos_right" v-show="selected.length" @click="openSelectOrgModal">Move to</button>
            </div>
            <div class="fix_head">
              <div class="listHead list_head">
                <h1><span class="groupName">Total</span><em class="cnt">{{organizations.length}}</em></h1>
              </div>
            </div>
            <div class="fix_body">
              <div class="lw_table tb_cols_memberlist_head">
                <div class="lw_tr thead">
                  <div class="lw_th check">
                    <input type="checkbox" class="lw_checkbox" v-model="selectAll" @click="checkAll()">
                  </div>
                  <div class="lw_th">Organization</div>
                  <div class="lw_th leader">Head of Organization</div>
                </div>
              </div>
              <div class="lw_table_scoll">
                <ul class="org_tree">
                  <tree-node 
                    v-for="(node, index) in newOrganizations"
                    :node="node" 
                    :key="index"
                    :selected="selected"
                    @child-check="updateCheckall"
                    @openDetail="openOrgDetail"
                  >
                  </tree-node>
                </ul>
              </div>
              <div class="selected_list_box selected_list_box02">
                <div class="count">
                  <span>Select {{ selectedOrgs.length }}</span>
                  <button type="button" class="btn_remove_all" @click="removeAll">
                  </button>
                </div>
                <ul class="selected_list" v-if="selectedOrgs.length">
                  <li v-for="org in selectedOrgs" :key="org.id">
                    <a href="#" class="item groups">{{ org.name }}</a>
                    <button type="button" class="btn_delete" @click="unchecked(org)">Delete</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <add-org-modal :title="title" 
      :visible="visible" 
      @close="closeAddOrgModal" 
    >
    </add-org-modal>
    <confirmation-box 
      :visible="visibleConf" 
      @close="closeConf" 
      @confirm="handleDelete"
    >
    </confirmation-box>
    <org-detail-modal
      :visible="visibleDetail"
      @close="closeOrgDetail"
      @delete="deleteOrg02"
    >
    </org-detail-modal>
    <select-organization-modal 
      :visible="visibleSelectOrg"
      :data="newOrganizations"
      :selected2="selected"
      @close="closeSelectOrgModal"
      @submit="handleSubmitMoveOrg"
    >
    </select-organization-modal>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import ConfirmationBox from '@/components/ConfirmationBox.vue';
import OrgDetailModal from '@/components/OrgDetailModal.vue';
import AddOrgModal from '@/components/AddOrgModal.vue';
import ElMessageBox from '@/components/ElMessageBox.vue';
import TreeNode from "@/components/TreeNode.vue";
import SelectOrganizationModal from "@/components/SelectOrganizationModal.vue";
import { mapState, mapActions } from 'vuex';

export default {
  name: "OrganizationView",
  components: {
    Header,
    Sidebar,
    ConfirmationBox,
    OrgDetailModal,
    TreeNode,
    AddOrgModal,
    SelectOrganizationModal
  },
  data(){
    return {
      selectAll: false,
      selected: [],
      title: 'Modal Form',
      visible: false,
      visibleConf: false,
      visibleDetail: false,
      groupDetail: null,
      visibleSelectOrg: false,
      selectedOrgs: [],
      visibleEdittingBar: false,
      isMoved: false
    }
  },
  computed: {
    ...mapState('organizations', ['organizations']),
    ...mapState('organization', ['organization']),
    ...mapState('organization', ['orgMembers']),
    newOrganizations(){
      const tree = this.buildTree(this.organizations, -1, 0);
      return tree;
    },
    
  },
  created() {
    this.getOrganizations();
  },
  methods: {
    ...mapActions('organizations', ['deleteOrg']),
    ...mapActions('organization', ['getOrganizationInfo']),
    ...mapActions('organization', ['getOrgMembers']),
    ...mapActions('organizations', ['getOrganizations']),
    closeMove(){
      this.visibleEdittingBar = false;
    },
    openMove(){
      this.visibleEdittingBar = true;
    },
    removeAll(){
      this.selectAll = true;
      this.checkAll();
      this.selectAll = false;
    },
    checkAll(){
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.organizations) {
          this.selected.push(this.organizations[i].id);
        }
      }
      this.selectedOrgs = this.organizations.filter(item => this.selected.includes(item.id));
      
    },
    updateCheckall(item){
      const ids = this.findAllIds(item);
      if(this.selected.includes(item.id)){
        const newArray = this.removeElementsFromArrayA(this.selected, ids)
        this.selected = newArray;
      }else{
        const newArray = this.selected.concat(ids);
        this.selected = newArray.filter((value, index) => {
          return newArray.indexOf(value) === index;
        });
      }
      this.selectedOrgs = this.organizations.filter(item => this.selected.includes(item.id));
      if(this.organizations.length == this.selected.length){
        this.selectAll = true;
      }else{
        this.selectAll = false;
      }
    },
    handleDelete(conf){
      if(conf){
        this.deleteOrg(this.selected);
        this.closeConf();
        this.selected = [];
        this.selectedOrgs = []
        if(this.visibleDetail){
          this.closeOrgDetail();
          location.reload();
        }
      }
    },
    deleteOrg02(id){
      this.selected = [id];
      this.openConf();
    },
    openAddOrgModal() {
      this.visible = true;
    },
    closeAddOrgModal() {
      this.visible = false;
    },
    submitForm(data){
      this.closeModal()
    },
    closeConf(){
      this.visibleConf = false;
    },
    openConf(){
      this.visibleConf = true;
    },
    getGroupName(){
      const nameList = [];
      this.selected.forEach((id) => {
        const obj = this.groups.find((item) => item.id === id);
        if (obj) {
          nameList.push(obj.name);
        }
      });
      return nameList;
    },
    closeAlert() {
      this.status = null;
      this.visibleAlert = false;
    },
    openOrgDetail(id){
      this.visibleDetail = true;
      this.getOrganizationInfo(id);
      this.getOrgMembers(id);
    },
    closeOrgDetail(){
      this.visibleDetail = false;
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
    closeSelectOrgModal(){
      this.visibleSelectOrg = false;
    },
    openSelectOrgModal(){
      this.visibleSelectOrg = true;
    },
    findAllIds(node) {
      var ids = [];
      
      if (node.id !== 'undefined') {
        ids.push(node.id);
      }
      if (node.children && node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
          var childIds = this.findAllIds(node.children[i]);
          ids = ids.concat(childIds);
        }
      }
      return ids;
    },
    removeElementsFromArrayA(arrA, arrB) {
      return arrA.filter(function(elementA) {
        return !arrB.includes(elementA);
      });
    },
    findElementById(nodes, id) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.id === id) {
          return node;
        }

        if (node.children && node.children.length > 0) {
          const foundNode = this.findElementById(node.children, id);
          if (foundNode) {
            return foundNode;
          }
        }
      }

      return null;
    },
    unchecked(org){
      const item = this.findElementById(this.newOrganizations, org.id);
      this.updateCheckall(item);
    },
    handleSubmitMoveOrg(){
      this.selected = []
      this.selectedOrgs = []
    }
  },
  
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
  color: #2c3e50;
}
.btnFilter,
.btnSearch {
  border: none;
  background: transparent;
}
.selected_list_box {
  padding: 0 0 0 111px;
  border-width: 1px 0 0;
}
</style>
