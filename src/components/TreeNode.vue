<template>
  <li :class="['depth_'+node.lv, { 'fold': !expanded}]">
    <span draggable="false" class="tree_item" :class="{selected: selectedIds.includes(node.id)}">
      <span class="check_cover">
        <input type="checkbox" class="lw_checkbox" 
        :name="node.id" 
        :value="node.id" 
        :id="node.id" 
        v-model="selectedIds" 
        @change='handleCheck(node)'>
      </span>
      <button type="button" class="btn_toggle_tree" v-if="node.children.length"
        @click="toggleNode"
      ></button>
      <a href="javascript:void(0)" class="group_name" @click="openGroupDetail(node.id)">
        <span class="txt">{{ node.name }}</span>
        <span class="cnt">{{ node.count }}</span>
      </a>
      <span class="leader">{{ node.hUserName }}</span>
    </span>
  </li>
  <ul v-show="expanded" class="pl0">
    <tree-node 
      v-for="(child, index) in node.children"
      :key="index"
      :node="child"
      :selected="selected"
      @child-check="handleCheck"
      @openDetail="openGroupDetail"
    >
    </tree-node>
  </ul>
</template>
<script>

export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
      required: true,
    },
    selected: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      selectedIds: [],
      expanded: true
    }
  },
  watch: {
    selected(newVal) {
      this.selectedIds = newVal;
    }
  },
  methods: {
    handleCheck(item){
      this.$emit('child-check', item)
    },
    toggleAccordion(item) {
      if (this.activeIndex === item.id) {
        this.activeIndex = null;
      } else {
        this.activeIndex = item.id;
      }
    },
    toggleNode() {
      this.expanded = !this.expanded;
    },
    openGroupDetail(id){
      this.$emit('openDetail', id);
    }
  }
};
</script>
