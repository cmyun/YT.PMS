<template>
  <li :class="[{'fold': (!expanded)}]">
    <span :id="'id_'+node.id" 
    :class="[
        'tree_item',
        {'corp ': node.id==0},
        {'selected': selectedId==node.id}
      ]"
    >
      <button type="button" class="btn_toggle_tree" v-if="node.children.length"
        @click="toggleNode"
      ></button>
      <a href="javascript:void(0)" class="group_name" @click="onDataUp(node)">{{ node.name }}</a>
    </span>
  </li>  
  <ul class="sub_group" v-show="(expanded)">
    <organization-list 
      v-for="(child, index) in node.children" 
      :key="index"
      :node="child"
      :treeData="node.children" 
      :selected="selected"
      @data-up="onDataUp"
    >
    </organization-list>
  </ul>
</template>
<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: "OrganizationList",
    props: {
      node: {
        type: Object,
        default: () => {}
      },
      selected: {
        type: Number,
        required: true
      },
    },
    data(){
      return {
        expanded: true,
        selectedId: 0,
      }
    },
    watch: {
      selected(newVal) {
        this.selectedId = newVal;
      },
      expandAll(newVal){
        this.expanded = newVal ? newVal : this.expanded
      }
    },
    methods: {
      onDataUp(data) {
        this.selectedId = data.id;
        this.$emit('data-up', data);
      },
      toggleNode() {
        this.expanded = !this.expanded;
      },
    },
  };
</script>
<style scoped lang="scss">
.org_tree {
  padding-left: 0;
  & > li {
    padding-left: 0;
  }
  .sub_group {
    padding-left: 0;
    li {
      padding-left: 12px;
    }
  }
}

</style>
