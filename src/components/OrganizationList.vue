<template>
  <ul :class="className" class="subGroup">
    <li v-for="(item, index) in treeData" :key="index" >
      <span :id="'id_'+item.id" class="treeItem" @click="onDataUp(item)" :class="getClass(item)" >
        <a href="javascript:void(0)"  class="groupName">{{ item.name }}</a>
      </span>
      <organization-list 
      :treeData="item.children" 
      v-if="item.children"
      @data-up="onDataUp" />
    </li>       
  </ul> 
</template>
<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: "OrganizationList",
    props: {
      treeData: {
        type: Array,
        default: () => []
      },
      className: {
        type: String,
        default: () => ''
      },
      
    },
    methods: {
      onDataUp(data) {
        this.$emit('data-up', data);
      },
      getClass(item){
        if(item.id==0){
          return 'corp selected';
        }
      }
    },
  };
</script>
<style scope lang="scss">
.subGroup {
  padding-left: 0;
  li {
    padding-left: 12px;
  }
  &.orgTree{
    & > li {
      padding-left: 0;
    }
  }
}
</style>
