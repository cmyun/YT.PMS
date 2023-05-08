<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-container">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button class="modal-close" @click="close">X</button>
      </div>
      <div class="modal-body">
        <oganization-list :treeData="newOrganizations" :className="'orgTree'" :callApi="false" @button-clicked:treeData="onItemClick"/>
      </div>
      <div class="btn_box">
        <button type="button" class="lw_btn">Cancel</button>
        <button type="button" class="lw_btn_point">Add</button>
      </div>
    </div>
  </div>
</template>
<script>
import OganizationList from "@/components/OganizationList.vue";
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
  components: {
    OganizationList
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
    close() {
      this.$emit('close');
    },
    submitForm() {
      this.$emit('submit');
    },
    test(item){
      console.log(22222222)
      console.log(item)
    },
    onItemClick(newItems) {
      this.newOrganizations = newItems;
    }
  }
}
</script>
