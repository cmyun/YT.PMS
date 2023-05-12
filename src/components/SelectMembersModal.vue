<template>
  <div class="modal1" v-if="visible">
    <div class="modal-overlay" @click="close"></div>
      <div class="modal-body">
        <div class="org_container">
        <div class="member_view">
          <button type="button" class="btn_fold_side">
            <i class="tooltip">View organization chart</i>
          </button>
          <section class="organization">
            <!-- <organization-list 
            :treeData="newOrganizations" 
            :className="'orgTree'"
            @data-up="onDataUp" 
            /> -->
          </section>
          <section class="fix_contents member_list">
            <div class="fix_head memlist_head">
              <div class="list_head">
                <h1>
                  <span class="check_cover">
                    <input type="checkbox" class="lw_checkbox" id="default-id-5-all">
                    <label for="default-id-5-all"></label>
                  </span>
                  <span class="group_name">test</span>
                  <em class="cnt">4</em>
                </h1>
                <div class="task_area">
                  <button type="button" class="btn_search">
                    <i class="blind">Search member</i>
                  </button>
                  <div class="btn_combo">
                    <button type="button" class="btn_filter">
                      <i class="blind">Search member</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="fix_body">
              <div class="lw_table_scoll">
                <div class="lw_table tb_cols_memberlist">
                  <div class="lw_tr selected">
                    <div class="lw_td check">
                      <input name="DOMAIN_USER-400253934-110002506932338" type="checkbox" class="lw_checkbox" id="default-id-5-DOMAIN_USER-400253934-110002506932338" checked="">
                      <label for="default-id-5-DOMAIN_USER-400253934-110002506932338"></label>
                    </div>
                    <div class="lw_td profile">
                      <span class="thumb_cover">
                        <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" alt="">
                      </span>
                    </div>
                    <div class="lw_td user_name">
                      <span class="name_cover">
                        <span class="name">test test</span>
                      </span>
                      <span class="team"></span>
                    </div>
                  </div>
                  <div class="lw_tr selected">
                    <div class="lw_td check">
                      <input name="DOMAIN_USER-400253934-110002506999105" type="checkbox" class="lw_checkbox" id="default-id-5-DOMAIN_USER-400253934-110002506999105" checked="">
                      <label for="default-id-5-DOMAIN_USER-400253934-110002506999105"></label>
                    </div>
                    <div class="lw_td profile">
                      <span class="thumb_cover">
                        <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" alt="">
                      </span>
                    </div>
                    <div class="lw_td user_name">
                      <span class="name_cover">
                        <span class="name">test03 test03</span>
                      </span>
                      <span class="team"></span>
                    </div>
                  </div>
                  <div class="lw_tr selected">
                    <div class="lw_td check">
                      <input name="DOMAIN_USER-400253934-110002506999096" type="checkbox" class="lw_checkbox" id="default-id-5-DOMAIN_USER-400253934-110002506999096" checked="">
                      <label for="default-id-5-DOMAIN_USER-400253934-110002506999096"></label>
                    </div>
                    <div class="lw_td profile">
                      <span class="thumb_cover">
                        <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" alt="">
                      </span>
                    </div>
                    <div class="lw_td user_name">
                      <span class="name_cover">
                        <span class="name">test04 test04</span>
                      </span>
                      <span class="team"></span>
                    </div>
                  </div>
                  <div class="lw_tr selected">
                    <div class="lw_td check">
                      <input name="DOMAIN_USER-400253934-110002506998668" type="checkbox" class="lw_checkbox" id="default-id-5-DOMAIN_USER-400253934-110002506998668" checked="">
                      <label for="default-id-5-DOMAIN_USER-400253934-110002506998668"></label>
                    </div>
                    <div class="lw_td profile">
                      <span class="thumb_cover">
                        <img src="https://static.worksmobile.net/static/pwe/wm/common/img_profile2.png" alt="">
                      </span>
                    </div>
                    <div class="lw_td user_name">
                      <span class="name_cover">
                        <span class="name">test2 test2</span>
                      </span>
                      <span class="team"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="selected_list_box">
          <div class="count">
            <span>select 5</span>
            <button type="button" class="btn_remove_all">
              <i class="blind">Deselect all </i>
            </button>
          </div>
          <ul class="selected_list">
            <li>
              <span class="item">test test</span>
              <button type="button" class="btn_delete">Delete</button>
            </li>
            <li>
              <span class="item">test03 test03</span>
              <button type="button" class="btn_delete">Delete</button>
            </li>
            <li>
              <span class="item">test04 test04</span>
              <button type="button" class="btn_delete">Delete</button>
            </li>
            <li>
              <span class="item">test2 test2</span>
              <button type="button" class="btn_delete">Delete</button>
            </li>
            <li>
              <span class="item groups">New organization (1)</span>
              <button type="button" class="btn_delete">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
    }
  },
  data(){
    return {
      selectedOrg: {}
    }
  },
  components: {
    // OrganizationList
  },
  computed: {
    // ...mapState('organizations', ['organizations']),
    // newOrganizations(){
    //   const tree = this.buildTree(this.organizations, -1, 0);
    //   return tree;
    // },
  },
  methods: {
    // ...mapActions('organizations', ['getOrganizations']),
    // buildTree(data, parent, level) {
    //   const tree = [];
    //   for (let i = 0; i < data.length; i++) {
    //     if (data[i].pid === parent) {
    //       const node = {
    //         id: data[i].id,
    //         name: data[i].name,
    //         no: data[i].no,
    //         type: data[i].type,
    //         isUse: data[i].isUse,
    //         note: data[i].note,
    //         pid: data[i].pid,
    //         level: level,
    //         isActive: false,
    //         children: []
    //       };
    //       const children = this.buildTree(data, data[i].id, level + 1);
    //       if (children.length) {
    //         node.children = children;
    //       }
    //       tree.push(node);
    //     }
    //   }
    //   return tree;
    // },
    close() {
      this.$emit('close');
    },
    // submitForm() {
    //   this.$emit('submit');
    // },
    // onItemClick(newItems) {
    //   this.newOrganizations = newItems;
    // },
    // onDataUp(data) {
    //   const a = '.modal1 .orgTree #id_'+data.id;
    //   document.querySelector(a).className="treeItem selected";
    //   const arr = document.querySelectorAll('.modal1 .orgTree .treeItem');
    //   arr.forEach(element => {
    //     if(element.classList.contains("selected")&&(element.id!='id_'+data.id)){
    //       element.className = "treeItem";

    //     }
    //     if(element.id=='id_0'){
    //       element.classList.add('corp');
    //     }
    //   });
    //   this.selectedOrg = data;
    // },
    // onSelectOrg(){
    //   this.$emit('selectedOrg', this.selectedOrg)
    // }
  }
}
</script>
