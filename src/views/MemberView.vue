<template>
  <div class="contact">
    <Header/>
    <div id="container">
      <Sidebar/>
      <div id="content" class="fixLayout">
        <div class="main">
          <div class="contentsHead">
            <h3 class="title"><span class="txt">Member</span></h3>
            <div class="task_area">
              <button type="button" class="btn_delete02" @click="openConf" :disabled="!selected.length">Delete</button>
              <button type="button" class="btn_cancel" @click="openModal">Add members</button>
              <button type="button" class="btn_save" >Approval</button>
            </div>
          </div>
          <div class="contentsBody">
            <div class="memberView">
              <div class="organization">
                <organization-list 
                :treeData="newOrganizations" 
                :className="'orgTree'"
                @data-up="onDataUp" 
              >
              </organization-list>
              </div>
              <div class="memberList">
                <div class="listHead">
                  <h1><span class="groupName">{{user.name}}</span><em class="cnt">{{members.length}}</em></h1>
                  <div class="taskArea">
                    <button type="button" class="btnSearch">
                      <i class="bi bi-search"></i>
                    </button>
                    <div class="btnCombo ms-3">
                      <button type="button" class="btnFilter">
                        <i class="bi bi-filter"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="fixBody">
                  <div class="memberlistTableHeader">
                    <div class="lwTr thead">
                      <div class="lwTh check">
                        <input type="checkbox" class="lwCheckbox" v-model="selectAll" @click="checkAll()">
                        <label for="default-id-3-all"></label>
                      </div>
                      <div class="lwTh profile"></div>
                      <div class="lwTh userName">First name</div>
                      <div class="lwTh title">Level</div>
                      <div class="lwTh status">Account Status</div>
                      <div class="lwTh detail">Remark</div>
                    </div>
                  </div>
                  <div class="tableScoll">
                    <div class="memberlistTable" v-if="members.length">
                      <div class="lw_table_scoll">
                        <div class="lw_table tb_cols_memberlist">
                          <div class="lwTr" v-for="member in members" :key="member.id">
                            <div class="lwTd check">
                              <input :name="member.id" :value="member.id" type="checkbox" class="lw_checkbox" :id="member.id" v-model="selected" @change='updateCheckall()'>
                            </div>
                            <div class="lwTd profile">
                              <span class="thumb_cover"><img src="../assets/img_profile.png" alt=""></span>
                            </div>
                            <div class="lwTd userName">
                              <span class="nameCover">
                                <router-link :to="{ name: 'MemberDetail', params: { id: member.id } }" class="name">{{ member.name }}</router-link>
                                <span class="name_en"></span>
                              </span>
                              <span class="team"></span>
                            </div>
                            <div class="lwTd title">
                              <span class="ellipsis_element">{{ member.position_ID }}</span>
                            </div>
                            <div class="lwTd status">
                              <span class="msg using">{{member.isUse ? 'In use' : ''}}</span>
                            </div>
                            <div class="lwTd detail"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <modal-form :title="title" :visible="visible" @close="closeModal" 
        @submit="submitForm" >
        </modal-form>
        <confirmation-box :visible="visibleConf" :index="getMemberName()" @close="closeConf" 
        @confirm="handleDelete"></confirmation-box>
      </div>
    </div>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import ModalForm from '@/components/ModalForm.vue';
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
    ConfirmationBox,
  },
  data(){
    return {
      selectAll: false,
      selected: [],
      title: 'Modal Form',
      visible: false,
      visibleConf: false,
    }
  },
  computed: {
    ...mapState('members', ['members']),
    ...mapState('organizations', ['organizations']),
    ...mapState('positions', ['positions']),
    ...mapState('account', ['user']),
    ...mapState('members', ['status']),

    newOrganizations(){
      const tree = this.buildTree(this.organizations, -1, 0);
      return tree;
    },
  },
  created() {
    this.getMembersByOrg(0);
    this.getOrganizations();
    this.getPositions();
  },
  methods: {
    ...mapActions('members', ['getMembersByOrg']),
    ...mapActions('organizations', ['getOrganizations']),
    ...mapActions('positions', ['getPositions']),
    ...mapActions('members', ['addMember']),
    ...mapActions('members', ['deleteMember']),
    checkAll(){
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.members) {
          this.selected.push(this.members[i].id);
        }
      }
    },
    updateCheckall(){
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
            isUse: data[i].isUse,
            note: data[i].note,
            pid: data[i].pid,
            level: level,
            isActive: false,
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
      this.closeModal()
    },
    onDataUp(data){
      const a = '.main .orgTree #id_'+data.id;
      document.querySelector(a).className="treeItem selected";
      const arr = document.querySelectorAll('.main .orgTree .treeItem');
      arr.forEach(element => {
        if(element.classList.contains("selected")&&(element.id!='id_'+data.id)){
          element.className = "treeItem";
        }
        if(element.id=='id_0'){
          element.classList.add('corp');
        }
      });

      this.getMembersByOrg(data.id);
    },
    closeConf(){
      this.visibleConf = false;
    },
    openConf(){
      
      this.visibleConf = true;
    },
    getMemberName(){
      const nameList = [];
      this.selected.forEach((id) => {
        const obj = this.members.find((item) => item.id === id);
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
  }
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
  .btnAddMember {
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
    padding: 16px 20px 16px 40px;
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
            background-image: url(../assets/icon_group_active.svg)
          }
        }
        
      }
      &.corp {
        .groupName {
          &:before {
            background-image: url(../assets/icon_organization.svg)
          }
          
        }
        &.selected {
          .groupName {
            &:before {
              background-image: url(../assets/icon_organization_active.svg);
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
          background-image: linear-gradient(transparent,transparent),url(../assets/icon_group.svg);
          background-size: 100% auto;
          background-position: 0 0;
          width: 20px;
          height: 20px;
          display: inline-block;
          position: absolute;
          left: 20px;
          top: 50%;
          -webkit-transform: translateY(-50%);
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
          background-image: linear-gradient(transparent,transparent),url(../assets/icon_organization.svg);
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
        -webkit-transform: translateY(-50%);
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
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: 16px;
        position: relative;
        &:before {
          background-image: linear-gradient(transparent,transparent),url(../assets/icon_group.svg);
          background-size: 1013px 983px;
          background-position: -967px -100px;
          width: 16px;
          height: 17px;
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 0;
          -webkit-transform: translateY(-50%);
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
  .btn_save[data-v-3a84c29c] {
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
}
.lw_table_scoll {
    flex: 1 1 auto;
    overflow: scroll;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    -ms-overflow-style: auto;
}
.lw_table_scoll .tb_cols_memberlist {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
}
</style>
