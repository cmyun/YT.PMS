<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
    <form @submit.prevent="submitForm">
      <div class="modal-body">
        <div id="modal-root">
          <div class="ly_wrap dimmed en_US ua_win">
            <div class="ly_common ly_page ly_organization ly_organization02 freeplan">
              <div class="tit_box"><h3 class="tit">Select master(s)</h3></div>
              <div class="btn_box">
                <button type="button" class="lw_btn" @click="close">Cancel</button>
                <button class="lw_btn_point">OK</button>
              </div>
              <div class="org_container">
                <div class="member_view">
                  <section class="organization">
                    <organization-list 
                    :treeData="newOrganizations" 
                    :className="'orgTree'"
                    @data-up="onDataUp" 
                    />
                  </section>
                  <section class="fix_contents member_list">
                    <div class="fix_head memlist_head">
                      <div class="list_head">
                        <h1>
                          <span class="check_cover">
                            <input type="checkbox" class="lw_checkbox" v-model="selectAll" @click="checkAll()">
                          </span>
                          <span class="group_name">{{ group.name }}</span>
                          <em class="cnt">{{ members.length }}</em>
                        </h1>
                      </div>
                    </div>
                    <div class="fix_body">
                      <div class="lw_table_scoll">
                        <div class="lw_table tb_cols_memberlist">
                          <div class="lw_tr" :class="{selected: selected.includes(item.id)}" v-for="item in members" :key="item">
                            
                            <div class="lw_td check">
                              <input type="checkbox" class="lw_checkbox" :name="item.id" :value="item.id" :id="item.id" v-model="selected" @change='updateCheckall()'>
                            </div>
                            <div class="lw_td profile">
                              <span class="thumb_cover">
                                <img src="../assets/img_profile.png" alt="">
                              </span>
                            </div>
                            <div class="lw_td user_name">
                              <span class="name_cover">
                                <span class="name">{{ item.name + ' ' + item.id }}</span>
                              </span>
                              <!-- <span class="team">{{ item.organization }}</span> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class="selected_list_box selected_list_box02" v-if="selectedArr.length">
                  <div class="count">
                    <span>select {{ selectedArr.length }}</span>
                    <button type="button" class="btn_remove_all" @click="removeAll">
                      <!-- <i class="blind">Deselect all </i> -->
                    </button>
                  </div>
                  <ul class="selected_list">
                    <li v-for="item in selectedArr" :key="item">
                      <span class="item">{{ item.name }}</span>
                      <button type="button" class="btn_delete" @click="deleteIem(item.id)">Delete</button>
                    </li>
                  </ul>
                </div>
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
import OrganizationList from "@/components/OrganizationList.vue";
import { mapState, mapActions } from 'vuex';
export default {
  name: "SelectMembersModal",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    dataSelected: {
      type: Array,
      default: ()=>[]
    }
  },
  data(){
    return {
      // selectedOrg: {},
      selected: [],
      selectedArr: [],
      selectAll: false,
      dataIds: []
    }
  },
  components: {
    OrganizationList
  },
  computed: {
    ...mapState('organizations', ['organizations']),
    ...mapState('group', ['group']),
    ...mapState('members', ['members']),
    ...mapState('organizations', ['organizations']),
    ...mapState('group', ['groupMembers']),
    ...mapState('group', ['groupMasters']),
    newOrganizations(){
      const tree = this.buildTree(this.organizations, -1, 0);
      return tree;
    },
  },
  watch: {
    dataSelected(newVal) {
    //   this.selectAll = this.members.length == this.selected.length ? true : false;
    //   this.selected = newVal.map(obj => obj.id)
    //   // this.selectedArr = newVal.filter(item => this.selected.includes(item.id))
    this.selectAll = this.members.length == this.selected.length ? true : false;
    this.selected = newVal.map(obj => obj.user_ID)
    this.selectedArr = this.getCommonElements(this.members, newVal)
  },
    // members(newVal) {
    //   this.selectedArr = newVal.filter(item => this.selected.includes(item.id));
    // }
  },
  methods: {
    // ...mapActions('organizations', ['getOrganizations']),
    ...mapActions('members', ['getMembersByOrg']),
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
      // console.log(this.selected);
      
      this.$emit('submitData', this.selected);
    },
    onDataUp(data) {
      const a = '.modal1 .orgTree #id_'+data.id;
      document.querySelector(a).className="treeItem selected";
      const arr = document.querySelectorAll('.modal1 .orgTree .treeItem');
      arr.forEach(element => {
        if(element.classList.contains("selected")&&(element.id!='id_'+data.id)){
          element.className = "treeItem";

        }
        if(element.id=='id_0'){
          element.classList.add('corp');
        }
      });
      // this.selectedOrg = data;
      this.getMembersByOrg(data.id);

    },
    checkAll(){
      this.selected = [];
      this.selectedArr = [];
      if (!this.selectAll) {
        for (let i in this.members) {
          this.selected.push(this.members[i].id);
          // this.selectedArr = newVal.filter(item => this.selected.includes(item.id))
          // this.selected = newVal.map(obj => obj.id)
        }
        this.selectedArr = this.members;
      }
    },
    updateCheckall(){
      if(this.members.length == this.selected.length){
        this.selectAll = true;
        this.selectedArr = this.members;
      }else{
        this.selectAll = false;
        this.selectedArr = this.members.filter(item => this.selected.includes(item.id));
        // newVal.filter(item => this.selected.includes(item.id))
      }
    },
    deleteIem(id){
      const selected = this.selected.filter(item => item !== id);
      this.selected = selected;
      const selectedArr = this.selectedArr.filter(item => item.id !== id);
      this.selectedArr = selectedArr;
      this.updateCheckall();
    },
    removeAll(){
      this.selectAll = false
      this.selected = []
      this.selectedArr = []
    },
    getCommonElements(A, B) {
      let commonElements = A.filter(function(elementA) {
        return B.some(function(elementB) {
          return elementB.user_ID === elementA.id;
        });
      });
      return commonElements;
    }
  }
}
</script>
<style scope lang="scss">
#modal-root .ly_common {
  z-index: 22;
  // background: #FFF;
}
.modal1 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  z-index: 11;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    margin: 0;
  }
}
.modal-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  button[type="submit"] {
    margin-top: 20px;
    align-self: flex-end;
  }
}


.ly_common {
    position: absolute;
    z-index: 50;
    display: inline-block;
    padding: 19px 23px 21px;
    border: 1px solid #989898;
    background-color: #fff;
    vertical-align: middle;
    box-sizing: border-box;
    white-space: normal;
    text-align: left;
    color: #222;
    word-wrap: break-word;
    border-radius: 2px;
}

.ly_organization .org_container .member_list {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-width: 0
}
.ly_organization02 {
  padding-bottom: 84px !important;
}
.selected_list_box02 {
    padding: 0 0 0 111px !important;
}
.fix_contents {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    width: 100%;
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #e5e5e6
}

@media screen and (max-width: 767px) {
    .fix_contents {
        position:static;
        border: 0
    }
}
.ly_organization .fix_contents .fix_head.memlist_head.ly_organization .fix_contents .fix_head.memlist_head {
    padding: 15px 0 15px 16px;
}
.fix_contents .fix_head {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-bottom: 1px solid #e5e5e6;
    position: relative;
    line-height: 20px;
    padding: 16px 0 16px 20px;
}
@media screen and (min-width: 768px){
  .tb_cols_memberlist .lw_tr:hover, .tb_cols_memberlist_drop .lw_tr:hover {
      background-color: #fbfbfb;
  }
  .tb_cols_memberlist .lw_tr, .tb_cols_memberlist_drop .lw_tr, .tb_cols_memberlist_head .lw_tr {
      display: table-row;
  }
}
.fix_contents.member_list .tb_cols_memberlist .lw_td.check, .fix_contents.member_list .tb_cols_memberlist .lw_th.check, .fix_contents.member_list .tb_cols_memberlist_head .lw_td.check, .fix_contents.member_list .tb_cols_memberlist_head .lw_th.check {
    padding-left: 16px;
    width: 46px;
    line-height: 0;
}
.tb_cols_memberlist .lw_td.check, .tb_cols_memberlist .lw_th.check, .tb_cols_memberlist_drop .lw_td.check, .tb_cols_memberlist_drop .lw_th.check, .tb_cols_memberlist_head .lw_td.check, .tb_cols_memberlist_head .lw_th.check {
    padding-right: 20px;
    padding-left: 24px;
    width: 63px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 6px;
    position: relative;
}
.tb_cols_memberlist .lw_td, .tb_cols_memberlist_drop .lw_td {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 10px 10px 0;
    vertical-align: middle;
    border-bottom: 1px solid #f5f5f6;
}
.tb_cols_memberlist .lw_td.check~.profile, .tb_cols_memberlist .lw_th.check~.profile, .tb_cols_memberlist_drop .lw_td.check~.profile, .tb_cols_memberlist_drop .lw_th.check~.profile, .tb_cols_memberlist_head .lw_td.check~.profile, .tb_cols_memberlist_head .lw_th.check~.profile {
    width: 50px;
    padding-left: 0;
}
.tb_cols_memberlist .lw_td.profile, .tb_cols_memberlist .lw_th.profile, .tb_cols_memberlist_drop .lw_td.profile, .tb_cols_memberlist_drop .lw_th.profile, .tb_cols_memberlist_head .lw_td.profile, .tb_cols_memberlist_head .lw_th.profile {
    width: 66px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 14px;
    padding-left: 16px;
}
.tb_cols_memberlist .lw_td, .tb_cols_memberlist_drop .lw_td {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 10px 10px 0;
    vertical-align: middle;
    border-bottom: 1px solid #f5f5f6;
}
.tb_cols_memberlist .lw_td.user_name, .tb_cols_memberlist .lw_th.user_name, .tb_cols_memberlist_drop .lw_td.user_name, .tb_cols_memberlist_drop .lw_th.user_name, .tb_cols_memberlist_head .lw_td.user_name, .tb_cols_memberlist_head .lw_th.user_name {
    width: auto;
}
.tb_cols_memberlist .user_name, .tb_cols_memberlist_drop .user_name {
    padding-right: 15px;
}
.tb_cols_memberlist .lw_td, .tb_cols_memberlist_drop .lw_td {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 10px 10px 0;
    vertical-align: middle;
    border-bottom: 1px solid #f5f5f6;
}
.tb_cols_memberlist .lw_td, .tb_cols_memberlist_drop .lw_td, .tb_cols_memberlist_head .lw_td {
    cursor: pointer;
    word-break: break-all;
}
.tb_cols_memberlist .lw_td, .tb_cols_memberlist .lw_th, .tb_cols_memberlist_drop .lw_td, .tb_cols_memberlist_drop .lw_th, .tb_cols_memberlist_head .lw_td, .tb_cols_memberlist_head .lw_th {
    display: table-cell;
}

.tb_cols_memberlist .lw_td.check ~ .profile, .tb_cols_memberlist .lw_th.check ~ .profile, .tb_cols_memberlist_drop .lw_td.check ~ .profile, .tb_cols_memberlist_drop .lw_th.check ~ .profile, .tb_cols_memberlist_head .lw_td.check ~ .profile, .tb_cols_memberlist_head .lw_th.check ~ .profile {
    width: 50px;
    padding-left: 0;
}
.tb_cols_memberlist .lw_td.profile, .tb_cols_memberlist .lw_th.profile, .tb_cols_memberlist_drop .lw_td.profile, .tb_cols_memberlist_drop .lw_th.profile, .tb_cols_memberlist_head .lw_td.profile, .tb_cols_memberlist_head .lw_th.profile {
    width: 66px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 14px;
    padding-left: 16px;
}
.tb_cols_memberlist .thumb_cover img, .tb_cols_memberlist_drop .thumb_cover img {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
}
.tb_cols_memberlist .user_name .name_cover, .tb_cols_memberlist_drop .user_name .name_cover {
    display: block;
    font-size: 14px;
    color: #222;
    line-height: 20px;
    // font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    text-align: left;
}
.tb_cols_memberlist, .tb_cols_memberlist_drop, .tb_cols_memberlist_head {
    display: table;
    // table-layout: fixed;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.fix_contents .fix_body .lw_table_scoll .tb_cols_memberlist {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
}
.tb_cols_memberlist, .tb_cols_memberlist_drop {
    margin-top: -1px;
}
.ly_organization .fix_contents .fix_head.memlist_head {
    padding: 15px 0 15px 16px;
}

.ly_organization .fix_contents .fix_head.memlist_head .check_cover~.group_name {
    margin-left: 8px;
} .fix_contents .fix_head.memlist_head .check_cover~.group_name {
    margin-left: 8px;
}

.ly_organization .fix_contents .fix_head.memlist_head .group_name {
    font-weight: 700;
    color: #222;
}

.ly_organization .fix_contents .fix_head.memlist_head .cnt {
    font-weight: 700;
}

@media screen and (max-width: 767px) {
    .ly_organization .fix_contents .fix_head.memlist_head {
        padding-top:10px;
        padding-bottom: 10px;
    }
}

.ly_organization .fix_contents .search_cover .lw_search {
    padding-top: 12px;
    padding-bottom: 12px;
}

.ly_organization .fix_contents .search_cover .lw_search .lw_input {
    font-size: 14px;
}

.ly_organization .fix_contents .search_cover .ly_autocomplete {
    top: 49px;
}

.ly_organization .fix_contents .search_result_head .group_name {
    float: left;
    font-weight: 400;
    margin-right: 8px;
}

.ly_organization .fix_contents .search_result_head .keyword {
    font-weight: 700;
}

.ly_organization .fix_contents .search_result_head .check_cover {
    margin-top: -1px;
}
.fix_contents .fix_head .list_head, .fix_contents .fix_head h1 {
    display: flex;
}
.fix_contents .fix_head .list_head {
    min-height: 20px;
}
.ua_win .fix_contents .fix_head h1 {
    line-height: 19px;
    align-items: center;
}
.ua_win .fix_contents .fix_head h1 .check_cover {
  line-height: 0;
}
.fix_contents .fix_head h1 {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 13px;
    font-weight: 400;
    color: #666;
    line-height: 20px;
    margin-bottom: 0;
}
.fix_contents .fix_head h1 .cnt {
    margin-left: 6px;
    color: #157efb;
}
.ly_organization .fix_contents .fix_head.memlist_head .group_name {
    font-weight: 700;
    color: #222;
}
.tb_cols_memberlist .lw_tr.selected, .tb_cols_memberlist .lw_tr.selected .lw_td, .tb_cols_memberlist_drop .lw_tr.selected, .tb_cols_memberlist_drop .lw_tr.selected .lw_td {
    background-color: #ecf5ff;
}
.selected_list_box {
    padding: 0 0 0 111px;
    position: relative;
    border-width: 1px 0 0;
    overflow: hidden;
}
.ly_organization .org_container .selected_list_box {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-width: 0 1px 1px;
}

@media screen and (max-width: 767px) {
    .ly_organization .org_container .selected_list_box {
        border-width:1px 0 0;
        position: relative;
    }
}
.selected_list_box .count {
    position: absolute;
    top: 20px;
    left: 16px;
    color: #157efb;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
}
.selected_list_box .selected_list {
    padding: 15px 11px 7px 0;
    overflow-y: scroll;
    max-height: 102px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 0;
}
.selected_list_box .selected_list {
    overflow: hidden;
}
.selected_list_box .btn_remove_all {
    border: 0;
    background-color: transparent;
    line-height: 0;
    padding: 4px;
    vertical-align: top;
}

.selected_list_box .btn_remove_all:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -708px -694px;
    width: 12px;
    height: 12px;
    display: inline-block;
    display: block;
    vertical-align: top;
}
.selected_list_box li .btn_delete {
    border: 0;
    background-color: transparent;
    position: absolute;
    top: 7px;
    right: 3px;
    padding: 5px;
    font-size: 0;
    color: transparent;
    line-height: 0;
}

.selected_list_box li .btn_delete:after {
    background-image: url(https://static.worksmobile.net/static/wm/admin/sp_admin_2040a738.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/admin/sp_admin_9ea8c1e2.svg);
    background-size: 1013px 983px;
    background-position: -436px -964px;
    width: 8px;
    height: 8px;
    display: inline-block;
    content: "";
}
.selected_list_box li .item {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    max-width: 500px;
    position: relative;
    display: block;
    padding: 6px 23px 6px 8px;
    border: 1px solid #c6e1ff;
    border-radius: 2px;
    background-color: #e1f0ff;
    font-size: 12px;
    color: #222;
}
.selected_list_box .selected_list li {
    line-height: 1.5;
}
.selected_list_box li {
    position: relative;
    float: left;
    max-width: 100%;
    margin: 0 8px 8px 0;
}
.selected_list_box {
    overflow-y: auto;
    padding: 15px 11px 7px 11px;
    border: 1px solid #ddd;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fafafb;
}
.member_view .organization {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 240px;
    overflow: auto;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-right: 0;
    min-height: 0;
    min-width: 0;
}

@media screen and (max-width: 767px) {
    .member_view .organization {
        border:0;
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        width: 100%;
    }
}
.ly_organization .member_view {
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
.member_view {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    min-height: 0;
    height: 100%;
}
.organization {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #e5e5e6;
    padding: 13px;
}
.ly_common .tit_box {
    display: block;
    padding-right: 20px;
    font-size: 18px;
}

.ly_organization .tit_box {
    margin-bottom: 15px;
}
@media screen and (max-width: 767px) {
    .ly_common .tit_box {
        padding-right:0;
    }
}

.ly_common .tit_box .tit {
    display: inline;
    font-weight: bold;
}
.member_list {
    padding: 0 !important;
}
@media screen and (min-width: 768px){
  // .fix_contents .fix_body {
  //   height: 1px;
  // }
  .fix_contents .fix_body {
      -webkit-box-flex: 1;
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow: auto;
      min-height: 0;
  }
}
.fix_contents .editing_bar {
    // display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #e7f2fe;
    padding: 10px 25px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 70;
    text-align: left;
}

@media screen and (max-width: 767px) {
    .fix_contents .editing_bar {
        position:-webkit-sticky;
        position: sticky;
        height: 56px;
        padding: 11px 16px;
        z-index: 25;
        border-bottom: 1px solid #e5e5e6
    }
}

.fix_contents .editing_bar button+button {
    margin-left: 8px;
}

.fix_contents .editing_bar button {
    font-size: 14px;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 34px;
    border-radius: 2px;
    line-height: 20px;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    padding: 6px 12px 6px;
    cursor: pointer;
    min-width: 54px;
    border: 1px solid #c5c5c6;
    background: #fff;
    color: #222;
}

.fix_contents .editing_bar button.hover,.fix_contents .editing_bar button.on,.fix_contents .editing_bar button:hover {
    background-color: #f2f2f2;
}

.fix_contents .editing_bar button.disabled,.fix_contents .editing_bar button:disabled {
    cursor: default;
    opacity: .4;
}

.fix_contents .editing_bar button.disabled:hover,.fix_contents .editing_bar button:disabled:hover {
    background-color: #fff;
}

.fix_contents .editing_bar .btn_delete {
    color: #fd472b;
}

.fix_contents .editing_bar .pos_right {
    float: right;
}
</style>
