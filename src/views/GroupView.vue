<template>
  <div class="contact">
    <Header
      :title="'Admin'"
    />
    <Sidebar/>
    <div id="container">
      <div id="content" class="contents fix_layout">
        <div class="contentsHead contents_head">
          <h3 class="title"><span class="txt">Group</span></h3>
          <div class="task_area">
            <button type="button" class="btn_cancel" @click="refreshHandle">Refresh</button>
            <button type="button" class="btn_delete02" @click="openConf" :disabled="!selected.length">Delete</button>
            <button type="button" class="btn_save" @click="openAddGroupModal">Add group</button>
          </div>
        </div>
        <div class="contentsBody contents_body">
          <div class="memberView member_view">
            <div class="fix_contents member_list">
              <div class="fix_head memlist_head">
                <div class="listHead list_head">
                  <h1><span class="groupName">Total</span><em class="cnt">{{groups.length}}</em></h1>
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
                    <div class="lwTh userName">Group name</div>
                    <div class="lwTh title">Master(s)</div>
                    <div class="lwTh status">Group created on</div>
                  </div>
                </div>
                <div class="tableScoll lw_table_scoll">
                  <div class="memberlistTable lw_table" v-if="groups.length">
                    <div class="lw_table tb_cols_memberlist">
                      <div class="lwTr" v-for="group in groups" :key="group.id">
                        <div class="lwTd tw_td check">
                          <input :name="group.id" :value="group.id" type="checkbox" class="lw_checkbox" :id="group.id" v-model="selected" @change='updateCheckall()'>
                        </div>
                        <div class="lwTd tw_td profile">
                          <span class="thumb_cover"><img src="../assets/img_group.png" alt=""></span>
                        </div>
                        <div class="lwTd tw_td userName">
                          <span class="nameCover ellipsis_cover">
                            <a href="javascript:void(0)" @click="openGroupDetail(group.id)" class="name ellipsis_element"><strong>{{ group.name }}</strong></a>
                            <span class="cnt">{{'   ' + group.count }}</span>
                          </span>
                        </div>
                        <div class="lwTd tw_td title">
                          <span class="ellipsis_element">{{ group.userName }}</span>
                        </div>
                        <div class="lwTd tw_td status">
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
      </div>
    </div>
    <add-group-modal 
      :title="title" 
      :visible="visible" 
      @close="closeAddGroupModal" 
      @submit="submitAddGroup"
    >
    </add-group-modal>
    <group-detail-modal
      :visible="visibleDetail"
      @close="closeGroupDetail"
      @delete="deleteGroup02"
    >
    </group-detail-modal>
    <confirmation-box 
      :visible="visibleConf" 
      :index="getGroupName()" 
      @close="closeConf" 
      @confirm="handleDelete"
    >
    </confirmation-box>
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
    ...mapState('groups', ['apiStatus']),
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
    ...mapActions('groups', ['addGroup']),
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
      if(conf){
        this.deleteGroup(this.selected);
        this.selected = [];
        this.closeConf();
        setTimeout(() => {
          if(!this.apiStatus.deleteGroup.error){
            // if(this.visibleDetail){
              this.closeGroupDetail();
            // }
          }
        }, 1000);
      }
    },
    openAddGroupModal() {
      this.visible = true;
    },
    closeAddGroupModal() {
      this.visible = false;
    },
    closeConf(){
      this.selected = [];
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
    openGroupDetail(id){
      this.visibleDetail = true;
      if(id){
        this.getGroupInfo(id);
        this.getGroupMasters(id);
        this.getGroupMembers(id);
        this.getGroupWhole(id);
      }
    },
    closeGroupDetail(){
      this.visibleDetail = false;
      this.getAll();
    },
    refreshHandle(){
      this.getAll();
    },
    submitAddGroup(){
      setTimeout(() => {
        if(!this.apiStatus.addGroup.error){
          this.closeAddGroupModal();
          this.getAll();
        }
      }, 1000);
    }
  }
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
  color: #2c3e50;
}

  
</style>
