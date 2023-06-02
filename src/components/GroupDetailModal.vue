
<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-body">
      <div id="modal-root">
        <div class="ly_wrap dimmed en_US ua_win">
          <div class="ly_common ly_page ly_member_detail freeplan">
            <h3 class="tit">Group info</h3>
            <div class="btn_box full">
              <button type="button" class="lw_btn_point" @click="openEditGroup">Modify</button>
              <button type="button" class="lw_btn_text" @click="openGroupMasterModal(group.id)">Change master</button>
            </div>
            <div class="scroller">
              <div class="member main">
                <div class="thumb">
                  <span class="thmb_area">
                    <img src="../assets/img_group.png" alt="thumbnail">
                  </span>
                </div>
                <div class="infor">
                  <div class="name_box">
                    <h4 class="name">{{ group.name }}</h4>
                  </div>
                  <button type="button" @click="openConf">
                    <em>Delete group</em>
                  </button>
                </div>
              </div>
              <div class="tab_menu">
                <span class="menu" 
                v-bind:class="{ selected: activeTab === 'tab1' }"
                @click="activeTab = 'tab1'"
                >
                  <a href="#" class="txt">Group info</a>
                </span>
                <span class="menu"
                v-bind:class="{ selected: activeTab === 'tab2' }"
                @click="activeTab = 'tab2'"
                >
                  <a class="txt" href="#">Members ({{ newGroupMembers.length }})</a>
                </span>
              </div>
              <div class="tab_cont" v-show="activeTab === 'tab1'">
                <div class="detail_item">
                  <i class="hd">Group name</i>
                  <p>
                    <strong>{{ group.name }}</strong>
                  </p>
                </div>
                <div class="detail_item">
                  <i class="hd">Description</i>
                  <p>{{ group.description }}</p>
                </div>
                
              </div>
              <div class="tab_cont" v-show="activeTab === 'tab2'">
                <ul class="member_list">
                  <li class="has_thmb" v-for="member in newGroupMembers" :key="member">
                    <div class="thumb">
                      <span class="thmb_area">
                        <img src="../assets/img_profile.png" alt="">
                      </span>
                    </div>
                    <div class="infor" style="cursor: pointer;">
                      <div class="name_box">
                        <strong class="name">{{ '' + member.userName }}</strong>
                      </div>
                      <div class="txt">
                        <span class="email">{{ member.level + '/ ' + member.position + ' ' + member.organization }}</span>
                      </div>
                    </div>
                    <span class="master">{{ member.master }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" class="btn_close" @click="close">Close</button>
          </div>
        </div>
        <edit-group-modal :title="'title'" 
          :visible="visibleEdit"
          :group = "group"
          :groupMasters="newGroupMasters"
          :groupMembers="newGroupMembers"
          @close="closeEditGroup" 
          @submitGroup="submitEditGroup"
        >
        </edit-group-modal>
        <group-master-modal :title="'title'" 
          :visible="visibleMasterModal"
          :masterIds="newGroupWhole.length ? newGroupWhole.filter(obj => obj.isMaster).map(obj => obj.id) : []"
          :groupWhole="newGroupWhole"
          @close="closeGroupMasterModal" 
          @submitMaster="handleSubmitMasters"
          >
        </group-master-modal>
        <confirmation-box :visible="visibleConf"
          @close="closeConf" 
          @confirm="handleDelete">
        </confirmation-box>
      </div>
    </div>
  </div>
</template>
<script>
import EditGroupModal from '@/components/EditGroupModal.vue';
import GroupMasterModal from '@/components/GroupMasterModal.vue';
import ConfirmationBox from '@/components/ConfirmationBox.vue';
import {mapState, mapActions} from 'vuex';
export default {
  name: 'GroupDetailModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    EditGroupModal,
    GroupMasterModal,
    ConfirmationBox
  },
  computed: {
    ...mapState('group', ['group']),
    ...mapState('account', ['user']),
    ...mapState('group', ['apiStatus']),
    ...mapState('group', ['groupMembers']),
    ...mapState('group', ['groupMasters']),
    ...mapState('group', ['groupWhole']),
  },
  data(){
    return {
      visibleEdit: false,
      activeTab: 'tab1',
      visibleMasterModal: false,
      visibleConf: false,
      newGroupMembers: [],
      newGroupMasters: [],
      newGroupWhole: []
    }
  },
  watch: {
    groupMasters(newVal) {
      this.newGroupMasters = newVal
    },
    groupMembers(newVal) {
      this.newGroupMembers = newVal
    },
    groupWhole(newVal) {
      this.newGroupWhole = newVal
    }
  },
  methods: {
    ...mapActions('group', ['updateGroupMasters']),
    ...mapActions('group', ['updateGroup']),
    ...mapActions('groups', ['deleteGroup']),
    ...mapActions('group', ['getGroupMasters']),
    ...mapActions('group', ['getGroupMembers']),
    ...mapActions('group', ['getGroupWhole']),
    close() {
      this.$emit('close');
    },
    openEditGroup() {
      this.visibleEdit = true;
    },
    closeEditGroup(){
      this.visibleEdit = false;
    },
    openGroupMasterModal(id){
      this.visibleMasterModal = true;
    },
    closeGroupMasterModal(){
      this.visibleMasterModal = false;
    },
    handleSubmitMasters(selected){
      const group = this.group
      this.updateGroupMasters({
        group: group, 
        ids: selected}
      )
      setTimeout(() => {
        if(!this.apiStatus.updateGroupMasters.error) {
          this.closeGroupMasterModal();
        }
      }, 1000);
    },
    
    submitEditGroup(group){
      this.updateGroup(group);
      setTimeout(() => {
        if(!this.apiStatus.updateGroup.error){
          this.getGroupWhole(group.group.id);
          this.getGroupMasters(group.group.id);
          this.getGroupMembers(group.group.id);
          this.closeEditGroup();
        }
      }, 1000);
    },
    handleDelete(conf){
      if(conf){
        this.deleteGroup([this.group.id]);
        
        this.closeConf();
        this.selected = [];
        if(this.visibleDetail){
          this.closeGroupDetail();
        }
      }
    },
    closeConf(){
      this.visibleConf = false;
    },
    openConf(){
      this.visibleConf = true;
    },
  }
}
</script>

<style scoped lang="scss">
.tab_cont .member_list {
  display: block;
  border: none;
}

</style>
