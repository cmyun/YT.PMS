<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-container">
      <div class="modal-header">
        <h2>{{ title }}</h2>
      </div>
      <div class="modal-body">
        <ul class="org_tree">
          <organization-list 
            v-for="(node, index) in newOrganizations"
            :node="node" 
            :key="index"
            @data-up="onDataUp"
            :selected = selectedId
            :expandAll="true"
          >
          </organization-list>
        </ul>
      </div>
      <div class="btn_box">
        <button type="button" class="lw_btn" @click="close">Cancel</button>
        <button type="button" class="lw_btn_point" @click="onSelectOrg">Add</button>
      </div>
    </div>
  </div>
</template>
<script>
import OrganizationList from "@/components/OrganizationList.vue";
import { mapState, mapActions } from 'vuex';
export default {
  name: "OrgModal",
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      selectedOrg: {},
      selectedId: 0
    }
  },
  components: {
    OrganizationList
  },
  computed: {
    ...mapState('organizations', ['organizations']),
    newOrganizations(){
      const tree = this.buildTree(this.organizations, -1, 0);
      return tree;
    },
  },
  methods: {
    ...mapActions('organizations', ['getOrganizations']),
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
    close() {
      this.$emit('close');
    },
    onDataUp(data) {
      this.selectedId = data.id;
      this.selectedOrg = data;
    },
    onSelectOrg(){
      this.$emit('selectedOrg', this.selectedOrg)
    }
  }
}
</script>
