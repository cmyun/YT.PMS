<template>
  <!-- {{ findAllIds(node) }} -->
  <li :data-id="node.id" :class="{ 'fold': !expanded}">
    <span class="tree_item" :class="{closed: selected.includes(node.id)}">
      <span class="check_cover">
        <input type="radio" class="lw_radio" 
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
        <span class="txt">{{ node.name + ' - ' + node.id }}</span>
        <!-- <span class="cnt">{{ node.count }}</span> -->
      </a>
      <span class="leader">{{ node.hUserName }}</span>
    </span>
    <ul class="sub_group pl0" v-show="expanded">
      <change-org-head-modal 
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
        @child-check="handleCheck"
        :selected="selected"
      >
      </change-org-head-modal>
    </ul>
  </li>
  
</template>
<script>

export default {
  name: 'ChangeOrgHeadModal',
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
      expanded: false
    }
  },
  watch: {
    // selected(newVal) {
    //   this.selectedIds= newVal;
    // }
  },
  methods: {
    handleCheck(item){
      console.log(item)
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
<style scope lang="scss">
.modal2 .btn_toggle_tree {
  margin-left: 18px;
}
.pl0 {
  padding-left: 0;
}
.org_tree {
    display: inline-block;
    min-width: 100%;
    min-height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 0;
}

.org_tree li {
    position: relative;
}

.org_tree .tree_item {
    position: relative;
    margin-bottom: 2px;
    border-radius: 2px;
}

.org_tree .tree_item,.org_tree .tree_item .group_name {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.org_tree .tree_item .group_name,.org_tree .tree_item .group_name .txt {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
}

.org_tree .tree_item .group_name .txt {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
}

.org_tree .tree_item .group_name .cnt,.org_tree .tree_item .group_name .ico_lock {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
}

.org_tree .tree_item .group_name .ico_lock {
    margin-top: -1px;
    margin-left: 8px;
}

.org_tree .tree_item:not(.no_hover):hover {
    background-color: rgba(0,0,0,.05);
}

.org_tree .tree_item:not(.no_hover):hover .drag_handle {
    display: inline-block;
}

.org_tree .tree_item:not(.no_hover):hover .btn_context {
    opacity: 1;
}

.org_tree .tree_item.hover .drag_handle {
    display: inline-block;
}

.org_tree .tree_item.hover .btn_context {
    opacity: 1;
}

.org_tree .tree_item.corp .group_name:before,.org_tree .tree_item.corp .group_name_modify:before,.org_tree .tree_item.tenant .group_name:before,.org_tree .tree_item.tenant .group_name_modify:before {
    background-position: -4px -909px;
}

.org_tree .tree_item.selected {
    background-color: #e7f2fe;
}

.org_tree .tree_item.selected .group_name {
    color: #157efb;
    font-weight: 700;
}

.org_tree .tree_item.selected .group_name:before {
    background-position: -284px -909px;
}

.org_tree .tree_item.selected .group_name.private_type:before {
    background-position: -937px -560px;
}

.org_tree .tree_item.selected.corp .group_name:before,.org_tree .tree_item.selected.tenant .group_name:before {
    background-position: -852px -784px;
}

.org_tree .tree_item.selected .cnt {
    color: #157efb;
    font-weight: 400;
}

.org_tree .tree_item.selected .btn_context,.org_tree .tree_item.selected.closed .group_name {
    opacity: 1;
}

.org_tree .tree_item.closed .group_name {
    opacity: .4;
}

.org_tree .tree_item.closed:hover {
    background-color: transparent;
}

.org_tree .tree_item.closed:hover,
.org_tree .tree_item.closed:hover .check_cover label,
.org_tree .tree_item.closed:hover .group_name {
    cursor: default;
}

.org_tree .tree_item .drag_handle {
    display: none;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    margin-top: 1px;
}

.org_tree .tree_item .btn_context {
    opacity: 0;
    border: 0;
    background-color: transparent;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 16px;
    position: relative;
}

.org_tree .tree_item .btn_context:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
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

.org_tree .tree_item .ly_context {
    display: none;
    margin-top: 4px;
    margin-bottom: 4px;
}

.org_tree .tree_item .ly_context ul {
    display: block!important;
}

.org_tree .tree_item .btn_toggle_tree {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}

.lw_table_scoll .org_tree .tree_item.dragging .group_name,.org_tree .tree_item.dragging .group_name {
    opacity: .4;
}

.org_tree .tree_item.dragging .btn_context,.org_tree .tree_item.dragging .drag_handle {
    display: inline-block;
}

.lw_table_scoll .org_tree .tree_item.drop:after,.org_tree .tree_item.drop:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 2px solid #157efb;
    border-radius: 2px;
}

.lw_table_scoll .org_tree .tree_item.drop_top:after,.org_tree .tree_item.drop_top:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 2px solid #157efb;
    border-radius: 2px;
}

.org_tree .tree_item.drop_into:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #157efb!important;
    border-radius: 2px;
}

.org_tree .tree_item.modify .btn_context,.org_tree .tree_item.modify .drag_handle,.org_tree .tree_item.modify .group_name {
    display: none;
}

.org_tree .tree_item.modify .group_name_modify {
    display: inline-block;
}

.org_tree .tree_item .group_name_modify {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: none;
}

.org_tree .tree_item .group_name_modify .ipt_modify {
    width: 100%;
    border: 1px solid #157efb;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 28px;
    font-size: 14px;
    color: #222;
    line-height: 20px;
    padding: 3px 0 3px 10px;
}

.org_tree .tree_item .group_name_modify:before {
    content: "";
    margin-right: 12px;
    vertical-align: top;
}

.org_tree .btn_toggle_tree {
    border: 0;
    background-color: transparent;
    padding: 6px;
    line-height: 0;
    overflow: hidden;
    margin-right: -20px;
    position: relative;
    z-index: 10;
}

.org_tree .btn_toggle_tree:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -548px -964px;
    width: 8px;
    height: 8px;
    display: inline-block;
    vertical-align: top;
}

.org_tree .group_name,.org_tree .group_name_modify {
    display: block;
    position: relative;
}

.org_tree .group_name:before,.org_tree .group_name_modify:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -312px -909px;
    width: 20px;
    height: 20px;
    display: inline-block;
    position: absolute;
    left: 20px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

.org_tree .group_name.private_type:before,.org_tree .group_name_modify.private_type:before {
    background-position: -937px -589px;
}

.org_tree .group_name_modify {
    padding: 2px 2px 2px 42px;
}

.org_tree .group_name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    font-size: 14px;
    color: #222;
    line-height: 21px;
    padding: 6px 0 5px 52px;
}

.org_tree .group_name .cnt {
    margin-left: 8px;
    color: #767676;
    vertical-align: top;
}

.org_tree .sub_group .tree_item {
    padding-left: 12px;
}

.org_tree .sub_group .sub_group .tree_item {
    padding-left: 24px;
}

.org_tree .sub_group .sub_group .sub_group .tree_item {
    padding-left: 36px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .tree_item {
    padding-left: 48px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
    padding-left: 60px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
    padding-left: 72px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
    padding-left: 84px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
    padding-left: 96px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
    padding-left: 108px;
}

.org_tree .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .sub_group .tree_item {
    padding-left: 120px;
}

.org_tree .depth_1 .tree_item {
    padding-left: 12px;
}

.org_tree .depth_2 .tree_item {
    padding-left: 24px;
}

.org_tree .depth_3 .tree_item {
    padding-left: 36px;
}

.org_tree .depth_4 .tree_item {
    padding-left: 48px;
}

.org_tree .depth_5 .tree_item {
    padding-left: 60px;
}

.org_tree .depth_6 .tree_item {
    padding-left: 72px;
}

.org_tree .depth_7 .tree_item {
    padding-left: 84px;
}

.org_tree .depth_8 .tree_item {
    padding-left: 96px;
}

.org_tree .depth_9 .tree_item {
    padding-left: 108px;
}

.org_tree .depth_10 .tree_item {
    padding-left: 120px;
}

.org_tree .fold .btn_toggle_tree:before {
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -373px -357px;
    width: 8px;
    height: 9px;
    display: inline-block;
}

.org_tree .fold ul {
    display: none;
}

.org_tree .check_cover {
    display: inline-block;
    width: 31px;
    height: 0;
}

.org_tree .check_cover .lw_checkbox+label,.org_tree .check_cover .lw_radio+label {
    position: absolute;
    left: 12px;
    top: 50%;
}

.org_tree li.empty {
    text-align: center;
    padding: 120px 0 0;
}

.org_tree li.empty .title {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: #767676;
    line-height: 1.5;
}

.org_tree li.empty .title:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -52px -828px;
    width: 40px;
    height: 40px;
    display: inline-block;
    display: block;
    margin: 0 auto 13px;
}

@media screen and (max-width: 767px) {
    .org_tree li.empty .title {
        font-size:16px;
    }
}

.org_tree li.empty .desc {
    font-size: 12px;
    line-height: 1.5;
    color: #767676;
    margin-bottom: 15px;
}

@media screen and (max-width: 767px) {
    .org_tree li.empty .desc {
        font-size:14px;
    }
}

.org_tree li.empty .btn_add_group {
    font-size: 12px;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 28px;
    border-radius: 2px;
    line-height: 17px;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    padding: 4px 12px 5px;
    cursor: pointer;
    min-width: 48px;
    border: 1px solid #c5c5c6;
    background: #fff;
    color: #222;
}

.org_tree li.empty .btn_add_group.hover,.org_tree li.empty .btn_add_group.on,.org_tree li.empty .btn_add_group:hover {
    background-color: #f2f2f2;
}

.org_tree li.empty .btn_add_group.disabled,.org_tree li.empty .btn_add_group:disabled {
    cursor: default;
    opacity: .4;
}

.org_tree li.empty .btn_add_group.disabled:hover,.org_tree li.empty .btn_add_group:disabled:hover {
    background-color: #fff;
}

@media screen and (max-width: 767px) {
    .org_tree li.empty .btn_add_group {
        display:none;
    }
}

.org_tree.search_result .group_name {
    padding-left: 16px;
}

.org_tree.search_result .group_name:before {
    display: none;
}

@media screen and (max-width: 767px) {
    .org_tree.search_result .check_cover {
        display:none;
    }
}

.lw_table_scoll .org_tree {
    width: 100%;
    margin-bottom: 0;
}

.lw_table_scoll .org_tree .tree_item {
    border-bottom: 1px solid #f5f5f6;
    margin-bottom: 0;
    padding-right: 27%;
}

@media screen and (max-width: 767px) {
    .lw_table_scoll .org_tree .tree_item {
        padding-right:0;
    }
}

.lw_table_scoll .org_tree .tree_item:hover .drag_handle {
    display: none;
}

.lw_table_scoll .org_tree .tree_item .drag_handle {
    display: none;
    left: 5px;
}

.lw_table_scoll .org_tree .tree_item .check_cover {
    display: inline-block;
    width: 60px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}

.lw_table_scoll .org_tree .tree_item .check_cover label {
    left: 24px;
    margin-top: -8px;
}

@media screen and (max-width: 767px) {
    .lw_table_scoll .org_tree .tree_item .check_cover {
        width:55px;
    }

    .lw_table_scoll .org_tree .tree_item .check_cover label {
        left: 30px;
    }
}

.lw_table_scoll .org_tree .tree_item .admin_count,.lw_table_scoll .org_tree .tree_item .group_name,.lw_table_scoll .org_tree .tree_item .leader,.lw_table_scoll .org_tree .tree_item .member_count,.lw_table_scoll .org_tree .tree_item .storage {
    padding-top: 10px;
    padding-bottom: 9px;
}

@media screen and (max-width: 767px) {
    .lw_table_scoll .org_tree .tree_item .admin_count,.lw_table_scoll .org_tree .tree_item .group_name,.lw_table_scoll .org_tree .tree_item .leader,.lw_table_scoll .org_tree .tree_item .member_count,.lw_table_scoll .org_tree .tree_item .storage {
        padding-top:8px;
        padding-bottom: 7px;
    }
}

@media screen and (max-width: 767px) {
    .lw_table_scoll .org_tree .tree_item .group_name {
        padding-right:8px;
    }
}

.lw_table_scoll .org_tree .tree_item .admin_count,.lw_table_scoll .org_tree .tree_item .leader,.lw_table_scoll .org_tree .tree_item .member_count,.lw_table_scoll .org_tree .tree_item .storage {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 14px;
    color: #222;
    line-height: 21px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

@media screen and (max-width: 767px) {
    .lw_table_scoll .org_tree .tree_item .admin_count,.lw_table_scoll .org_tree .tree_item .leader,.lw_table_scoll .org_tree .tree_item .member_count,.lw_table_scoll .org_tree .tree_item .storage {
        display:none;
    }
}

.lw_table_scoll .org_tree .tree_item .admin_count {
    right: 12%;
    padding-right: 15px;
    padding-left: 5px;
}

.lw_table_scoll .org_tree .tree_item .admin_count,.tb_cols_memberlist_head .lw_th.admin_count {
    width: 15%;
}

.lw_table_scoll .org_tree .tree_item .member_count {
    padding-left: 2px;
}
.tb_cols_memberlist_head .lw_th {
    font-size: 12px;
    color: #434343;
    line-height: 20px;
    padding: 10px 10px 10px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: left;
}
.tb_cols_memberlist_head .lw_th.check {
  text-align: center;
  padding-left: 0;
  padding-right: 0;

}
.lw_table_scoll .org_tree .tree_item .member_count,.tb_cols_memberlist_head .lw_th.member_count {
    width: 12%;
}

.lw_table_scoll .org_tree .tree_item .leader {
    right: 12%;
    padding-right: 15px;
}

.lw_table_scoll .org_tree .tree_item .leader,.tb_cols_memberlist_drop .lw_td.leader,.tb_cols_memberlist_head .lw_th.leader {
    width: 15%;
}

.lw_table_scoll .org_tree .tree_item .storage,.tb_cols_memberlist_head .lw_th.storage {
    width: 12%;
}

@media screen and (min-width: 768px) {
    .lw_table_scoll .org_tree .tree_item.tenant .check_cover {
        width:50px;
    }
}

.lw_table_scoll .org_tree .tree_item.tenant .btn_toggle_tree,.lw_table_scoll .org_tree .tree_item.tenant .check_cover input,.lw_table_scoll .org_tree .tree_item.tenant .check_cover label {
    display: none;
}

.lw_table_scoll .org_tree.drag_move .tree_item:hover .drag_handle,.lw_table_scoll .org_tree.drag_move span.drag_handle {
    display: inline-block;
    line-height: 0;
}

.lw_table_scoll .org_tree li.empty .title:before {
    background-position: -544px -622px;
    margin: 0 auto 12px;
}

.lw_table_scoll .org_tree li.empty.no_request .title:before,.lw_table_scoll .org_tree li.empty .title:before {
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    width: 64px;
    height: 64px;
    display: inline-block;
    display: block;
}

.lw_table_scoll .org_tree li.empty.no_request .title:before {
    background-position: -773px -586px;
    margin: 0 auto;
}
.org_tree .check_cover .lw_checkbox, 
.org_tree .check_cover .lw_radio {
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
