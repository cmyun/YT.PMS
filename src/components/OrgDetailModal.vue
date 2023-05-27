
<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-body">
      <div id="modal-root">
        <div class="ly_wrap dimmed en_US ua_win">
          <div class="ly_common ly_page ly_member_detail freeplan">
            <h3 class="tit">Organizational profile</h3>
            
            <div class="btn_box full">
              <button type="button" class="lw_btn_point" @click="openEditOrg">Modify</button>
              <button type="button" class="lw_btn_text" @click="openGroupMasterModal(organization.id)" :disabled="!orgMembers.length">Change organizational head</button>
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
                    <h4 class="name">{{ organization.name }}</h4>
                  </div>
                  
                  <button type="button" @click="deleteOrg(organization.id)">
                    <em>Delete organization</em>
                  </button>
                </div>
              </div>
              <div class="tab_menu">
                <span class="menu" 
                v-bind:class="{ selected: activeTab === 'tab1' }"
                @click="activeTab = 'tab1'"
                >
                  <a href="#" class="txt">Organizational profile</a>
                </span>
                <span class="menu"
                v-bind:class="{ selected: activeTab === 'tab2' }"
                @click="activeTab = 'tab2'"
                >
                  <a class="txt" href="#">Member ({{ orgMembers.length }})</a>
                </span>
              </div>
              <div class="tab_cont" v-show="activeTab === 'tab1'">
                <div class="detail_item">
                  <i class="hd">Group name</i>
                  <p>
                    <strong>{{ organization.name }}</strong>
                  </p>
                </div>
                <div class="detail_item">
                  <i class="hd">Description</i>
                  <p>{{ organization.description }}</p>
                </div>
                
              </div>
              <div class="tab_cont" v-show="activeTab === 'tab2'">
                <ul class="member_list" v-for="member in orgMembers" :key="member">
                  <li class="has_thmb">
                    <div class="thumb">
                      <span class="thmb_area">
                        <img src="../assets/img_profile.png" alt="">
                      </span>
                    </div>
                    <div class="infor" style="cursor: pointer;">
                      <div class="name_box">
                        <strong class="name">{{ member.userName }}</strong>
                      </div>
                    </div>
                    <span class="master">{{ member.isHead ? 'Organizational head' : '' }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" class="btn_close" @click="close">Close</button>
          </div>
        </div>
        <edit-org-modal :title="'title'" 
        :visible="visibleEdit"
        :organization = "organization" 
        @close="closeEditOrg" 
        @submit="submitEditOrg"
        >
        </edit-org-modal>
        <select-org-head-modal :title="'title'" 
          :visible="visibleMasterModal" 
          @close="closeGroupMasterModal" 
          @submitHead="handleSubmitHead"
          >
        </select-org-head-modal>
      </div>
    </div>
  </div>
</template>
<script>
import EditOrgModal from '@/components/EditOrgModal.vue';
import SelectOrgHeadModal from '@/components/SelectOrgHeadModal.vue';
import {mapState, mapActions} from 'vuex';
export default {
  name: 'OrgDetailModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    EditOrgModal,
    SelectOrgHeadModal
  },
  computed: {
    ...mapState('organization', ['organization']),
    ...mapState('organization', ['orgMembers']),
    ...mapState('organization', ['orgHead']),
    ...mapState('organization', ['status']),
  },
  data(){
    return {
      visibleEdit: false,
      activeTab: 'tab1',
      visibleMasterModal: false,
    }
  },
  methods: {
    ...mapActions('organization', ['updateHeadOrganization']),
    close() {
      this.$emit('close');
    },
    openEditOrg() {
      this.visibleEdit = true;
    },
    closeEditOrg(){
      this.visibleEdit = false;
    },
    openGroupMasterModal(id){
      this.visibleMasterModal = true;
    },
    closeGroupMasterModal(){
      this.visibleMasterModal = false;
    },
    handleSubmitHead(selected){
      const organization = this.organization
      this.updateHeadOrganization({
        organization: organization, 
        uid: selected
      });
      setTimeout(() => {
        if(this.status == null){
          this.closeGroupMasterModal();
        }
        }, 1000);
    },
    deleteOrg(id){
      this.$emit('delete', id);
    }
  }
}
</script>
<style scoped lang="scss">
.member_list {
  display: block;
  border: none;
}
</style>
