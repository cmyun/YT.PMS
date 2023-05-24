<template>
  <li :class="[{'fold': (!expanded && ! expandAll)}]">
    <span :id="'id_'+node.id" 
    :class="[
        'tree_item',
        {'corp ': node.id==0},
        {'selected': selectedId==node.id}
      ]"
    >
      <button type="button" class="btn_toggle_tree" v-if="node.children.length"
        @click="toggleNode" v-show="!expandAll"
      ></button>
      <a href="javascript:void(0)" class="group_name" @click="onDataUp(node)">{{ node.name }}</a>
    </span>
  </li>  
  <ul class="sub_group" v-show="expanded || expandAll">
    <organization-list 
      v-for="(child, index) in node.children" 
      :key="index"
      :node="child"
      :treeData="node.children" 
      @data-up="onDataUp"
      :selected="selected"
      :expandAll="expandAll"
    />
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
      expandAll: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        expanded: false,
        selectedId: 0,
        
      }
    },
    watch: {
      selected(newVal) {
        this.selectedId = newVal;
      }
    },
    methods: {
      onDataUp(data) {
        this.selectedId = data.id;
        this.$emit('data-up', data);
      },
      // getClass(item){
      //   if(item.id==0){
      //     return 'corp selected';
      //   }
      // },
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
