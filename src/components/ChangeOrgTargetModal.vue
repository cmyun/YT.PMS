<template>
  <li :data-id="node.id" :class="{ 'fold': !expanded}">
    <span class="tree_item" :class="{closed: selected.includes(node.id)}">
      <span class="check_cover">
        <input type="radio" class="lw_radio" :disabled="selected.includes(node.id)"
        name="SELECTION" 
        :value="node.id" 
        :id="node.id" 
        v-model="selectedId" 
        @change='handleCheck(node)'>
      </span>
      <button type="button" class="btn_toggle_tree" v-if="node.children.length"
        @click="toggleNode"
      ></button>
      <a href="#" class="group_name">
        <span class="txt">{{ node.name }}</span>
      </a>
    </span>
    <ul class="sub_group pl0" v-show="expanded">
      <change-org-target-modal 
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
        :selected="selected"
        @child-check="handleCheck"
      >
      </change-org-target-modal>
    </ul>
  </li>
  
</template>
<script>

export default {
  name: 'ChangeOrgTargetModal',
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
      selectedId: null,
      expanded: true
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
    
  }
};
</script>
