<template>
  <div class="modal2" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <form @submit.prevent="submitForm">
      <div class="modal-body">
        <div id="modal-root">
          <div class="ly_wrap dimmed en_US ua_win">
            <div class="ly_common ly_page ly_org_tree freeplan">
              <div class="tit_box">
                <h3 class="tit">Move</h3>
              </div>
              <div class="btn_box">
                <button type="button" class="lw_btn" @click="close">Cancel</button>
                <button class="lw_btn_point" :disabled="targetOrgId==null">Save</button>
                <button type="button" class="lw_btn_text">Add</button>
              </div>
              <div class="org_container">
                <section class="organization">
                  <h1 class="corp_name"></h1>
                  <ul class="org_tree">
                    <change-org-target-modal 
                        v-for="(node, index) in data"
                        :node="node" 
                        :key="index"
                        :selected="selected2"
                        @child-check="updateTargetOrg"
                    >
                    </change-org-target-modal>
                  </ul>
                </section>
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
import ChangeOrgTargetModal from "@/components/ChangeOrgTargetModal.vue";
import { mapState, mapActions } from 'vuex';
export default {
  name: "SelectOrganizationModal",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: ()=>[]
    },
    selected2: {
      type: Array,
      default: ()=>[]
    },
    selectedId: null
  },
  components: {
    ChangeOrgTargetModal
  },
  data(){
    return {
      targetOrgId: null
    }
  },
  methods: {
    ...mapActions('organizations', ['moveOrg']),
    close() {
      this.$emit('close');
    },
    submitForm() {
      this.moveOrg({tid:this.targetOrgId, ids:this.selected2});
      this.$emit('submit');
      this.close();
    },
    updateTargetOrg(item){
      this.targetOrgId = item.id
    }
  }
}
</script>
<style scoped lang="scss">

@media screen and (min-width: 768px){
  .ly_org_tree .org_container {
    max-height: 500px;
    height: 500px;
  }
}
.ly_org_tree .tit_box {
    margin-bottom: 15px;
}
.ly_org_tree .org_container {
    display: flex;
    flex-direction: column;
}
.ly_org_tree .organization {
    flex: 1 1 auto;
    overflow: auto;
}
.ly_org_tree {
    width: 460px;
    box-sizing: border-box;
    padding-bottom: 84px;
}

.modal2 .org_tree .check_cover {
    display: inline-block;
    width: 13px;
    height: 13px;
    position: absolute;
    left: 0;
}

.modal2 .org_tree .check_cover .lw_checkbox, 
.modal2 .org_tree .check_cover .lw_radio {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(0);
    clip: unset;
}

.modal2 .org_tree .tree_item, .org_tree .tree_item .group_name {
  align-items: center;
}
.modal2 .lw_radio:checked {
    color: #157efb;
}
</style>
