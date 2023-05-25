
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
                  <p class="caption">1</p>
                  <button type="button" @click="deleteGroup(group.id)">
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
                  <a class="txt" href="#">Members ({{ groupMembers.length }})</a>
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
                  <li class="has_thmb" v-for="member in groupMembers" :key="member">
                    <div class="thumb">
                      <span class="thmb_area">
                        <img src="../assets/img_profile.png" alt="">
                      </span>
                    </div>
                    <div class="infor" style="cursor: pointer;">
                      <div class="name_box">
                        <strong class="name">{{ member.userName }}</strong>
                      </div>
                      <div class="txt">
                        <span class="email">{{ member.position + '/ ' + member.level }}</span>
                      </div>
                    </div>
                    <span class="master">{{ member.isMaster ? 'Master(s)' : '' }}</span>
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
        @close="closeEditGroup" 
        @submit="submitEditGroup"
        >
        </edit-group-modal>
        <group-master-modal :title="'title'" 
          :visible="visibleMasterModal" 
          :masterIds="groupMasters.map(obj => obj.id)"
          @close="closeGroupMasterModal" 
          @submitMaster="handleSubmitMasters"
          >
        </group-master-modal>
      </div>
    </div>
  </div>
</template>
<script>
import EditGroupModal from '@/components/EditGroupModal.vue';
import GroupMasterModal from '@/components/GroupMasterModal.vue';
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
    GroupMasterModal
  },
  computed: {
    ...mapState('group', ['group']),
    ...mapState('group', ['groupMembers']),
    ...mapState('group', ['groupMasters']),
    ...mapState('group', ['groupWhole']),
  },
  data(){
    return {
      visibleEdit: false,
      activeTab: 'tab1',
      visibleMasterModal: false
    }
  },
  methods: {
    ...mapActions('group', ['updateGroupMasters']),
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
        ids: selected})
      this.closeGroupMasterModal();
    },
    deleteGroup(id){
      this.$emit('delete', id);
    },
    submitEditGroup(){
      
    }
  }
}
</script>

<style scoped lang="scss">
.tab_cont .member_list {
  display: block;
  border: none;
}
</style>
