<template>
  <div class="contact">
    <Header/>
    <div id="container">
      <Sidebar/>
      <div id="content" class="fixLayout">
        <div class="main">
          <div class="contentsHead">
            <h3 class="title"><span class="txt">Group</span></h3>
            <div class="taskArea">
              <div class="btnGroup">
                <button type="button" class="btn btn-danger w-10 btnDeleteGroup" @click="openConf" :disabled="!selected.length">Delete</button>
                <button type="button" class="btn w-10 btnAddGroup ms-3" @click="openAddGroupModal">Add group</button>
              </div>
            </div>
          </div>
          <div class="contentsBody">
            <div class="memberView">
              <div class="memberList">
                <div class="listHead">
                  <h1><span class="groupName">Total</span><em class="cnt">{{groups.length}}</em></h1>
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
                      <div class="lwTh userName">Group name</div>
                      <div class="lwTh title">Master(s)</div>
                      <div class="lwTh status">Group created on</div>
                    </div>
                  </div>
                  <div class="tableScoll">
                    <div class="memberlistTable" v-if="groups.length">
                      <div class="lwTr" v-for="group in groups" :key="group.id">
                          <div class="lwTd check">
                            <input :name="group.id" :value="group.id" type="checkbox" class="lw_checkbox" :id="group.id" v-model="selected" @change='updateCheckall()'>
                          </div>
                          <div class="lwTd profile">
                            <span class="thumb_cover"><img src="../assets/img_group.png" alt=""></span>
                          </div>
                          <div class="lwTd userName">
                            <span class="nameCover">
                              <a href="javascript:void(0)" @click="openGroupDetail(group.id)" class="name">{{ group.name }}</a>
                              <span class="name_en"></span>
                            </span>
                          </div>
                          <div class="lwTd title">
                            <span class="ellipsis_element">{{ group.userName }}</span>
                          </div>
                          <div class="lwTd status">
                            <span class="msg using">{{group.cDate}}</span>
                          </div>
                        </div>
                    </div>
                  </div>
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
        
        <group-detail-modal
          :visible="visibleDetail"
          @close="closeGroupDetail"
          @delete="deleteGroup02"
        >

        </group-detail-modal>
        <confirmation-box :visible="visibleConf" 
        :index="getGroupName()" @close="closeConf" 
        @confirm="handleDelete"></confirmation-box>
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
import { mapState, mapActions } from 'vuex';

export default {
  name: "GroupView",
  components: {
    Header,
    Sidebar,
    ConfirmationBox,
    GroupDetailModal,
    AddGroupModal
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
    }
  },
  computed: {
    ...mapState('groups', ['groups']),
    ...mapState('group', ['group']),
    ...mapState('group', ['groupMembers']),
    ...mapState('group', ['groupMasters']),
    ...mapState('group', ['groupWhole']),
    ...mapState('organizations', ['organizations']),
  },
  created() {
    this.getAll();
    this.getMembersByOrg(0);
    this.getOrganizations();
  },
  methods: {
    ...mapActions('groups', ['getAll']),
    ...mapActions('groups', ['deleteGroup']),
    ...mapActions('group', ['getGroupInfo']),
    ...mapActions('group', ['getGroupMasters']),
    ...mapActions('group', ['getGroupMembers']),
    ...mapActions('group', ['getGroupWhole']),
    ...mapActions('members', ['getMembersByOrg']),
    ...mapActions('organizations', ['getOrganizations']),
    checkAll(){
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.groups) {
          this.selected.push(this.groups[i].id);
        }
      }
    },
    updateCheckall(){
      if(this.groups.length == this.selected.length){
        this.selectAll = true;
      }else{
        this.selectAll = false;
      }
    },
    deleteGroup02(id){
      this.selected = [id];
      this.openConf();
    },
    handleDelete(conf){
      console.log(conf);
      if(conf){
        this.deleteGroup(this.selected);
        this.closeConf();
        this.selected = [];
        if(this.visibleDetail){
          this.closeGroupDetail();
        }
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
    }
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
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #e5e5e6;
    }
  }
  .listHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
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
        text-align: left;
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
  
</style>
