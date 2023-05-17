<template>
  <div class="contact">
    <Header/>
    <div id="container">
      <Sidebar/>
      <div id="content" class="fixLayout">
        <div class="main">
          <div class="contentsHead">
            <h3 class="title"><span class="txt">Organization</span></h3>
            <div class="taskArea">
              <!-- <div class="btnGroup">
                <button type="button" class="btn btn-danger w-10 btnDeleteGroup" @click="openConf" :disabled="!selected.length">Delete</button>
                <button type="button" class="btn w-10 btnAddGroup ms-3" @click="openAddGroupModal">Add group</button>
              </div> -->
              <div class="task_area">
                <button type="button" class="btn_delete02">Delete</button>
                <button type="button" class="btn_cancel" @click="openSelectOrgModal">Move</button>
                <button type="button" class="btn_save">Add</button>
              </div>
            </div>
          </div>
          <!-- {{ newOrganizations }} -->
          <div class="contentsBody">
            <div class="fix_contents">
              <div class="editing_bar">
                <button type="button">Cancel</button>
                <button type="button">Save</button>
                <button type="button" class="pos_right">Move to</button>
              </div>
              <div class="fix_head">
                <div class="listHead">
                  <h1><span class="groupName">Total</span><em class="cnt">{{organizations.length}}</em></h1>
                  <div class="taskArea">
                    <button type="button" class="btnSearch">
                      <i class="bi bi-search"></i>
                    </button>
                  </div>
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
                  <!-- {{ newOrganizations }} -->
                  <ul class="org_tree">
                    <tree-node 
                      v-for="(node, index) in newOrganizations"
                      :node="node" 
                      :key="index"
                      :selected="selected"
                      @child-check="updateCheckall"
                      
                    >
                    </tree-node>
                  </ul>
                </div>
                <div class="selected_list_box selected_list_box02">
                  <div class="count">
                    <span>Select {{ selectedOrgs.length }}</span>
                    <button type="button" class="btn_remove_all">
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
        <add-group-modal :title="title" 
        :visible="visible" 
        @close="closeAddGroupModal" 
        @submit="submitEditGroup"
        >
        </add-group-modal>
        <confirmation-box :visible="visibleConf" 
        
        @close="closeConf" 
        @confirm="handleDelete"></confirmation-box>
        <group-detail-modal
          :visible="visibleDetail"
          @close="closeGroupDetail"
        >

        </group-detail-modal>
        <select-organization-modal :visible="visibleSelectOrg" @close="closeSelectOrgModal">

        </select-organization-modal>
      </div>
    </div>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import ConfirmationBox from '@/components/ConfirmationBox.vue';
import GroupDetailModal from '@/components/GroupDetailModal.vue';
import AddGroupModal from '@/components/AddGroupModal.vue';
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
    GroupDetailModal,
    TreeNode,
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
      selectedOrgs: []
    }
  },
  computed: {
    ...mapState('organizations', ['organizations']),
    newOrganizations(){
      const tree = this.buildTree(this.organizations, -1, 0);
      return tree;
    },
    
  },
  created() {
    this.getOrganizations();
  },
  methods: {
    ...mapActions('organizations', ['getOrganizations']),
    
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
        this.deleteGroup(this.selected);
        this.closeConf();
        this.selected = [];
      }
    },
    openAddGroupModal() {
      this.visible = true;
    },
    closeAddGroupModal() {
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
    openGroupDetail(id){
      console.log('opendetail');
      this.visibleDetail = true;
      this.getGroupInfo(id);
      this.getGroupMasters(id);
      this.getGroupMembers(id);
      this.getGroupWhole(id);
    },
    closeGroupDetail(){
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
    }
  },
  
};
</script>
<style scoped lang="scss">

a {
  text-decoration: none;
  color: #2c3e50;
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
.memberView {
  display: flex;
  .organization {
    flex: 0 0 auto;
    width: 240px;
    position: relative;
    border: 1px solid #e5e5e6;
    box-sizing: border-box;
    border-right: 0;
    min-height: 0;
    min-width: 0;
    padding: 13px;
    ul {
      padding-left: 0;
    }
  }
  .memberList {
    width: calc(100% - 240px);
    box-sizing: border-box;
    border: 1px solid #e5e5e6;
  }
}
.listHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 16px 20px 16px 40px;
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
    // cursor: pointer;
    min-width: 64px;
    border: 1px solid #c5c5c6;
    background: #fff;
    color: #fd472b!important;
    // font-weight: 700;
    transition: all .3s;
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
    // cursor: pointer;
    min-width: 64px;
    border: 1px solid #c5c5c6;
    background: #fff;
    color: #222;
    transition: all .3s;
    &:hover {
      opacity: .7;
    }
    &:disabled {
        opacity: .4;
    }
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
    // cursor: pointer;
    min-width: 64px;
    background: #157efb;
    border: 0;
    color: #fff;
    font-weight: 700;
    transition: all .3s;
    &:hover {
      opacity: .7;
    }
}
.task_area .btn_combo+button, 
.task_area button+.tooltip_cover, 
.task_area button+button {
    margin-left: 8px;
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
.fix_contents .fix_head {
    padding: 16px 20px;
}
.fix_contents .fix_body .lw_table_scoll {
    flex: 1 1 auto;
    overflow: scroll;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    -ms-overflow-style: auto;
}
.fix_contents {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    width: 100%;
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #e5e5e6;
}
.selected_list_box li .item.groups {
    border-color: #f1d69c;
    background-color: #f8eac8;
    transition: all .3s;
    &:hover {
      opacity: .7;
    }
}
</style>
