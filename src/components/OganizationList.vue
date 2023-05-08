<template>
  <ul :class="className" class="subGroup">
    <li v-for="(item, index) in treeData" :key="index" :data-value="item.id" >
      <span class="treeItem" :class="(item.pid == -1) ? 'selected corp' : ''" @click="onItemClick(item)">
        <a href="javascript:void(0)"  class="groupName">{{ item.name }}</a>
      </span>
      <organization-list :treeData="item.children" v-if="item.children"
      @button-clicked:treeData="newItems => item.children = newItems"/>
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
      callApi: {
        type: Boolean,
        default: false
      },
      // onSelected: {
      //   type: Function,
        
      // }
    },
    // computed: {
    //   ...mapState('members', ['members'])
    // },
    emits: ['button-clicked:treeData'],
    setup(props, {emit}) {
      
      const onItemClick = (item) => {
        // let _this = this;
        // if(props.callApi){
        //   context.getMembersByOrg(item.id);
        // }else{
        // }else {
          // console.log(props.treeData);
          // _this.onSelected();
          emit('button-clicked:treeData', props.treeData);
        // }
        
      };
      return {
        onItemClick
      }
    },
    methods: {
      // ...mapActions('members', ['getMembersByOrg']),
    }
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
.orgTree {
    display: inline-block;
    min-width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    a {
      text-decoration: none;
    }
    li {
      position: relative;
    }
    .treeItem {
      position: relative;
      display: flex;
      margin-bottom: 2px;
      border-radius: 2px;
      &.selected {
        background-color: #e7f2fe;
        .groupName {
          color: #157efb;
          font-weight: 700;
          &:before {
            background-image: url(../assets/icon_group_active.svg)
          }
        }
        
      }
      &.corp {
        .groupName {
          &:before {
            background-image: url(../assets/icon_organization.svg)
          }
          
        }
        &.selected {
          .groupName {
            &:before {
              background-image: url(../assets/icon_organization_active.svg);
            }
          }
        }
      }
      
      .groupName {
        position: relative;
        display: flex;
        flex: 0 1 auto;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 100%;
        word-wrap: normal;
        font-size: 14px;
        color: #222;
        line-height: 21px;
        padding: 6px 0 5px 52px;
        &:before {
          content: '';
          background-image: linear-gradient(transparent,transparent),url(../assets/icon_group.svg);
          background-size: 100% auto;
          background-position: 0 0;
          width: 20px;
          height: 20px;
          display: inline-block;
          position: absolute;
          left: 20px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
       
        
      }
      .btnToggleTree {
        flex: 0 0 auto;
        border: 0;
        background-color: transparent;
        padding: 6px;
        line-height: 0;
        overflow: hidden;
        margin-right: -20px;
        position: relative;
        z-index: 10;
        &::before {
          background-image: linear-gradient(transparent,transparent),url(../assets/icon_organization.svg);
          background-size: 1013px 983px;
          background-position: -548px -964px;
          width: 8px;
          height: 8px;
          display: inline-block;
          vertical-align: top;
        }
      }
      
      .dragHandle {
        display: none;
        position: absolute;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        margin-top: 1px;
        .cstTooltip {
          left: 0;
          top: 100%;
          margin-top: 8px;
        }
        &.lastoflist {
          top: auto;
          bottom: 100%;
          margin-bottom: 8px;
          margin-top: auto;
        }
      }
      .btnContext {
        opacity: 0;
        border: 0;
        background-color: transparent;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: 16px;
        position: relative;
        &:before {
          background-image: linear-gradient(transparent,transparent),url(../assets/icon_group.svg);
          background-size: 1013px 983px;
          background-position: -967px -100px;
          width: 16px;
          height: 17px;
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 0;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
      }
      
    }
    
  }
  .cstTooltip {
    display: none;
    position: absolute;
    border-radius: 2px;
    background-color: rgba(0,0,0,.6);
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    padding: 2px 8px;
    white-space: nowrap;
  }
</style>
