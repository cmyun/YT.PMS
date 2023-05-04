<template>
  <div class="contact">
    <Header/>
    <div id="container">
      <Sidebar/>
      <div id="content" class="fixLayout">
        <div class="main">
          <div class="contentsHead">
            <h3 class="title"><span class="txt">Member</span></h3>
            <div class="taskArea">
              <div class="btnGroup">
                <button type="button" class="btn btn-danger w-10 btnDeleteMember">Delete</button>
                <button type="button" class="btn w-10 btnAddMember ms-3">Add members</button>
              </div>
            </div>
          </div>
          <div class="contentsBody">
            <div class="memberView">
              <div class="organization">

              </div>
              <div class="memberList">
                <div class="listHead">
                  <h1><span class="groupName">test</span><em class="cnt">2</em></h1>
                  <div class="taskArea">
                    <button type="button" class="btnSearch">
                      <i class="bi bi-search"></i>
                    </button>
                    <div class="btnCombo ms-3">
                      <button type="button" class="btnFilter">
                        <i class="bi bi-filter"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="fixBody">
                  <div class="memberlistTableHeader">
                    <div class="lwTr thead">
                      <div class="lwTh move"></div>
                      <div class="lwTh check">
                        <input type="checkbox" class="lwCheckbox" id="default-id-3-all">
                        <label for="default-id-3-all"></label>
                      </div>
                      <div class="lwTh profile"></div>
                      <div class="lwTh userName">First name</div>
                      <div class="lwTh title">Level</div>
                      <div class="lwTh status">Account Status</div>
                      <div class="lwTh detail">Remark</div>
                    </div>
                  </div>
                  <div class="tableScoll">
                    <div class="memberlistTable">
                      <div class="lwTr">
                          <div class="lwTd move">
                            <!-- <span class="drag_handle">
                              <span class="cst_tooltip">Drag to reorder</span>
                            </span> -->
                          </div>
                          <div class="lwTd check">
                            <input name="110002506932338" type="checkbox" class="lw_checkbox" id="default-id-3-110002506932338">
                            <label for="default-id-3-110002506932338"></label>
                          </div>
                          <div class="lwTd profile">
                            <span class="thumb_cover"><img src="../assets/img_profile.png" alt=""></span>
                          </div>
                          <div class="lwTd userName">
                            <span class="name_cover">
                              <span class="name">test test</span>
                              <span class="name_en"></span>
                            </span>
                            <span class="team"></span>
                          </div>
                          <div class="lwTd title">
                            <span class="ellipsis_element">Management</span>
                          </div>
                          <div class="lwTd status">
                            <span class="msg using">In use</span>
                          </div>
                          <div class="lwTd detail"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
    
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import { mapState, mapActions } from 'vuex'
export default {
  name: "MemberView",
  components: {
    Header,
    Sidebar
  },
  data(){
    return {
      isCheckAll: false
    }
  },
  computed: {
    ...mapState('members', ['members'])
  },
  created() {
    // this.getMembers();
    // console.log(this.members)
  },
  methods: {
    ...mapActions('members', ['getMembers']),
    checkAll(){
      this.isCheckAll = !this.isCheckAll;
    }
    
  }
};
</script>
<style scoped lang="scss">
  .contentsHead {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 18px 0 0;
  }
  .btnAddMember {
    background-color: #07B53B;
    color: #FFF;
    transition: all .3s;
    &:hover {
      background-color: #07B53B;
      color: #FFF;
      opacity: .8;
    }
  }
  .contentsBody {
    width: 100%;
  }
  .memberView {
    display: flex;
    .organization {
      width: 240px;
      border: 1px solid #e5e5e6;
      box-sizing: border-box;
    }
    .memberList {
      width: calc(100% - 240px);
      box-sizing: border-box;
      border: 1px solid #e5e5e6;
    }
  }
  .listHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px 16px 40px;
    .taskArea {
      display: flex;
      align-items: center;
      justify-content: end;
    }
    h1 {
      font-size: 13px;
    }
    .cnt {
      margin-left: 6px;
      color: #157efb;
    }
  }
  .btnFilter,
  .btnSearch {
    border: none;
    background: transparent;
  }
  .memberlistTableHeader {
    display: table;
    width: 100%;
    border-bottom: 1px solid #e5e5e6;
    background-color: #fafafb;
  }
  .lwTr {
      display: table-row;
    }
    .lwTd {
      border-bottom: 1px solid #f5f5f6;
    }
    .lwTd,
    .lwTh {
      display: table-cell;
      padding: 10px 10px 10px 0;
      box-sizing: border-box;
      
      &.move {
        width: 10px;
      }
      &.check {
        width: 46px;
      }
      &.profile {
        width: 50px;
      }
      &.userName {
        width: auto;
      }
      &.title {
        width: 18.5%;
      }
      &.status {
        width: 16.4%;
        line-height: 20px;
      }
      &.detail {
        width: 21.6%;
        line-height: 20px;
      }
    }
    .memberlistTable {
      display: table;
      width: 100%;
      .lwTr {
        transition: all .3s;
        &:hover {
          background-color: #fbfbfb;
          
        }
      }
    }
    img {
      width: 100%;
      height: auto;
    }
    .thumbCover {
      display: block;
    }
  
</style>