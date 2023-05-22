<template>
  <div id="container">
  <div id="lnbArea" class="nav_lnb" style="width: 250px;">
    <div class="main_pane">
      <div class="core_button">
        <a class="skin_corp_bg skin_corp_txt" style="cursor: pointer;">
          <strong>New Task</strong>
        </a>
      </div>
    </div>
    <div class="scroll_pane">
      <div class="menu_cover">
        <div class="menu_box">
          <div class="head_bar">
            <strong>My Tasks</strong>
          </div>
          <ul class="lnb_tree">
            <li>
              <div class="task_all menu_item  ">
                <a class="item_txt">All Tasks</a>
                <span class="unread_cnt">
                  <a>1</a>
                </span>
              </div>
            </li>
            <li>
              <div class="assign menu_item selected ">
                <a class="item_txt">Tasks assigned to me</a>
                <span class="unread_cnt">
                  <a>1</a>
                </span>
              </div>
            </li>
            <li>
              <div class="charge menu_item  ">
                <a class="item_txt">Tasks I assigned</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="menu_box">
          <div class="head_bar">
            <strong>Team/Group Tasks</strong>
          </div>
          <ul class="lnb_tree">
            <li>
              <div class="group menu_item  ">
                <a class="item_txt">1</a>
                <button class="btn_more side_btn">
                  <i class="blind">more</i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer" id="worksCommonCopyright" style="display: block;">
        <!-- <a href="https://line.worksmobile.com/" target="_blank" class="copyright">© WORKS MOBILE Corp.</a> -->
      </div>
    </div>
    <button class="btn_fold_lnb">
      <i class="blind">Hide LNB menu</i>
    </button>
    <div class="split_bar" draggable="true" style="left: 250px;"></div>
  </div>
  <div class="contents">
    <section class="content_head">
      <div class="title_container">
        <div class="search_cover">
          <label for="searchKeyWord" class="blind">Search</label>
          <input type="text" class="search" placeholder="Search for tasks" autocomplete="off" value="">
          <button type="button" class="btn_search_option">Advanced</button>
        </div>
        <div class="heading_cover">
          <div class="folder_title">
            <span class="cnt">
              <strong class="cnt_label">Incomplete</strong>
              <a class="unread">3</a>
              <strong class="cnt_label">All</strong>
              <a class="total">4</a>
            </span>
            <button type="button" class="btn_refresh">
              <i class="blind">Refresh</i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="content_body">
      <section class="main_cont">
        <div class="list_cover">
          <div class="list_filter">
            <div class="btn_drop_cover">
              <button type="button" class="btn_order">By date registered</button>
            </div>
            <div class="view_completed">
              <span class="toggle_cover">
                <input type="checkbox" class="lw_checkbox" id="toggle1" checked="">
                <label for="toggle1">Show completed tasks</label>
              </span>
            </div>
          </div>
          <div class="quick_write">
            <div class="input_cover">
              <input type="text" class="todo_input" placeholder="Create a new task here" value="">
              <button type="button" class="todo_period unselect">
                <i class="blind">No Deadline</i>
              </button>
            </div>
            <button type="button" class="todo_save">Save</button>
          </div>
          <div class="todo_list">
            <div class="todo_item completed selected">
              <button type="button" class="btn_status on">
                <i class="blind">Mark as incomplete</i>
                <span class="page_tooltip">Mark as incomplete</span>
              </button>
              <div class="title_cover">
                <p class="content">tesst3</p>
                <span class="attachment">
                  <i class="blind">Attachment</i>
                </span>
              </div>
              <div class="info">
                <span class="date">No Deadline</span>
                <span class="name">Assigner : test test</span>
              </div>
              <button type="button" class="btn_important">
                <i class="blind">Important to-do</i>
              </button>
            </div>
            <div class="todo_item">
              <button type="button" class="btn_status">
                <i class="blind">Mark as complete</i>
                <span class="page_tooltip">Mark as complete</span>
              </button>
              <div class="title_cover">
                <p class="content">tesst2</p>
                <span class="attachment">
                  <i class="blind">Attachment</i>
                </span>
              </div>
              <div class="info">
                <span class="date">Deadline : <em class=""> 5. 29. (Mon)</em>
                </span>
                <span class="name">Assigner : test test</span>
              </div>
              <button type="button" class="btn_important">
                <i class="blind">Important to-do</i>
              </button>
            </div>
            <div class="todo_item">
              <button type="button" class="btn_status">
                <i class="blind">Mark as complete</i>
                <span class="page_tooltip">Mark as complete</span>
              </button>
              <div class="title_cover">
                <p class="content">tesst</p>
              </div>
              <div class="info">
                <span class="date">Deadline : <em class=""> 5. 29. (Mon)</em>
                </span>
                <span class="name">Assigner : test test</span>
              </div>
              <button type="button" class="btn_important">
                <i class="blind">Important to-do</i>
              </button>
            </div>
            <div class="todo_item reddot">
              <button type="button" class="btn_status">
                <i class="blind">Mark as complete</i>
                <span class="page_tooltip">Mark as complete</span>
              </button>
              <div class="title_cover">
                <p class="content">Create a task for today!</p>
              </div>
              <div class="info">
                <span class="date">No Deadline</span>
                <span class="name">Assigner : test test</span>
              </div>
              <button type="button" class="btn_important">
                <i class="blind">Important to-do</i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="side_cont" style="width: 524px;">
        <div class="split_bar" draggable="true"></div>
        <div class="scroll_cover">
          <div class="view_cover">
            <div class="view_info">
              <div class="view_action">
                <span class="status complete">Completed</span>
                <button type="button" class="btn_window">
                  <i class="blind">Open in new window</i>
                </button>
                <button type="button" class="btn_modify">
                  <i class="blind">Edit</i>
                </button>
                <div class="btn_drop_cover">
                  <button type="button" class="btn_action_more">
                    <i class="blind">More</i>
                  </button>
                </div>
              </div>
              <div class="item_cover">
                <div class="item_value">
                  <div id="translateTarget" class="hero_content">
                    <div class="title">tesst3</div>
                    <div class="content"></div>
                  </div>
                </div>
              </div>
              <div class="item_cover">
                <span class="item_label">Deadline</span>
                <div class="item_value">
                  <span class="date">None</span>
                </div>
              </div>
              <div class="item_cover">
                <span class="item_label">Group</span>
                <div class="item_value">
                  <span class="group_name">1</span>
                </div>
              </div>
              <div class="item_cover">
                <span class="item_label">Assigner</span>
                <div class="item_value">
                  <div class="member_list completed">
                    <span class="added_member" style="cursor: pointer;">
                      <span class="name">test test</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="item_cover">
                <span class="item_label">Assignee</span>
                <div class="item_value">
                  <div class="member_list completed">
                    <span class="added_member" style="cursor: pointer;">
                      <span class="name">test test</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="item_cover file_attachment">
                <div class="item_value">
                  <div class="lw_file_attach_view">
                    <div class="file_infor">
                      <span class="file_tit">
                        <button type="button" class="btn_toggle">
                          <i class="blind">Toggle to expand/collapse attachments list</i>
                        </button>Attached file <em class="cnt">4</em> Files <span class="file_size">(111.77KB)</span>
                      </span>
                    </div>
                    <div class="file_wrap">
                      <ul class="file_list">
                        <li>
                          <span class="file_name">
                            <i class="lw_file lw_file_png">png file</i>
                            <a href="#" class="file_name_txt" title="Capture1.PNG">Capture1.PNG</a>
                          </span>
                          <span class="file_size">68.08KB</span>
                          <div class="file_btn_area">
                            <button type="button" class="btn_down_pc" title="Save to PC">
                              <i class="blind">Save to PC</i>
                            </button>
                            <button type="button" class="btn_down_drive" title="Save to Folder">
                              <i class="blind">Save to Drive</i>
                            </button>
                          </div>
                        </li>
                        <li>
                          <span class="file_name">
                            <i class="lw_file lw_file_png">png file</i>
                            <a href="#" class="file_name_txt" title="Capture.PNG">Capture.PNG</a>
                          </span>
                          <span class="file_size">14.02KB</span>
                          <div class="file_btn_area">
                            <button type="button" class="btn_down_pc" title="Save to PC">
                              <i class="blind">Save to PC</i>
                            </button>
                            <button type="button" class="btn_down_drive" title="Save to Folder">
                              <i class="blind">Save to Drive</i>
                            </button>
                          </div>
                        </li>
                        <li>
                          <span class="file_name">
                            <i class="lw_file lw_file_png">png file</i>
                            <a href="#" class="file_name_txt" title="Capture2.PNG">Capture2.PNG</a>
                          </span>
                          <span class="file_size">29.33KB</span>
                          <div class="file_btn_area">
                            <button type="button" class="btn_down_pc" title="Save to PC">
                              <i class="blind">Save to PC</i>
                            </button>
                            <button type="button" class="btn_down_drive" title="Save to Folder">
                              <i class="blind">Save to Drive</i>
                            </button>
                          </div>
                        </li>
                        <li>
                          <span class="file_name">
                            <i class="lw_file lw_file_txt">txt file</i>
                            <a href="#" class="file_name_txt" title="change.txt">change.txt</a>
                          </span>
                          <span class="file_size">347bytes</span>
                          <div class="file_btn_area">
                            <button type="button" class="btn_down_pc" title="Save to PC">
                              <i class="blind">Save to PC</i>
                            </button>
                            <button type="button" class="btn_down_drive" title="Save to Folder">
                              <i class="blind">Save to Drive</i>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn_cover">
                <button type="button" class="btn_status">Incomplete</button>
              </div>
            </div>
            <div class="action_history">
              <div class="title">Task History <span class="cnt">5</span>
              </div>
              <ul class="act_list">
                <li>
                  <span class="date">2023. 5. 22. 06:04 PM</span>
                  <p class="act">test test <strong>completed</strong> the task. </p>
                </li>
                <li>
                  <span class="date">2023. 5. 22. 05:44 PM</span>
                  <p class="act">test test marked the task as <strong>incomplete</strong>. </p>
                </li>
                <li>
                  <span class="date">2023. 5. 22. 05:44 PM</span>
                  <p class="act">test test <strong>completed</strong> the task. </p>
                </li>
                <li>
                  <span class="date">2023. 5. 22. 05:44 PM</span>
                  <p class="act">test test <strong>shared</strong> a task with 1. </p>
                </li>
                <li>
                  <span class="date">2023. 5. 22. 05:44 PM</span>
                  <p class="act">test test <strong>created</strong> a task with test test as the assignee. </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</div>
</template>
<script>
export default {
  name: "TaskView",
}
</script>
<style scoped lang="scss">
.nav_lnb {
    background-color: #fff;
    border-right: 1px solid #c5c5c7
}
.nav_lnb {
    width: 251px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    z-index: 20;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
.nav_lnb .scroll_pane {
    overflow: auto;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    display: block;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column
}

.nav_lnb .scroll_pane .menu_cover {
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    display: block;
    -ms-flex-negative: 0
}

.nav_lnb .aside_pane,
.nav_lnb .main_pane,
.nav_lnb .scroll_pane .footer {
    -ms-flex: 0 0 auto;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    display: block
}

.nav_lnb .aside_pane {
    position: relative;
    border-top: 1px solid rgba(0,0,0,.1);
    height: 36px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.nav_lnb .aside_pane .ly_context {
    bottom: 5px;
    left: 100%;
    margin-left: -12px;
    min-width: 160px
}

.nav_lnb .btn_fold_lnb {
    position: absolute;
    top: 16px;
    left: 100%;
    line-height: 0;
    padding: 13px 2px 13px 1px;
    border: 1px solid #c5c5c6;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: #fff
}

.nav_lnb .btn_fold_lnb:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -298px -224px;
    width: 12px;
    height: 12px;
    display: inline-block;
    vertical-align: top
}

.nav_lnb.fold_left .btn_fold_lnb:before {
    background-position: -298px -264px
}

.nav_lnb .split_bar {
    position: absolute;
    left: 251px;
    top: 0;
    bottom: 0;
    width: 11px;
    cursor: ew-resize;
    cursor: col-resize;
    z-index: 1;
    margin-left: -6px
}

.main_pane .core_button {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 16px 12px 14px;
    z-index: 10
}

.main_pane .core_button a {
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    display: block;
    height: 40px;
    background-color: #fff;
    text-align: center;
    line-height: 39px;
    color: #222;
    text-decoration: none;
    border: 0;
    border-radius: 0;
    position: relative;
    width: 50%;
    overflow: hidden
}

.ncs .main_pane .core_button a {
    background-color: #07b53b;
    color: #fff
}

.main_pane .core_button a strong {
    display: block;
    height: 100%
}

.main_pane .core_button a:hover strong {
    background-color: rgba(0,0,0,.08)
}

.main_pane .core_button a:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px
}

.main_pane .core_button a:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px
}

.main_pane .core_button a+a:before {
    content: "";
    border-left: 1px solid rgba(0,0,0,.15);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0
}

.main_pane .core_button a.has_dropdown:after {
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    background-color: rgba(255,0,0,.5);
    margin-left: 4px
}

.head_bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 2px 2px 0 0
}

.head_bar strong {
    color: #767676;
    font-size: 12px;
    padding-left: 16px;
    position: relative;
    line-height: 32px;
    height: 32px;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    display: block;
    text-align: left;
    font-weight: 400
}

.menu_box {
    padding: 10px 12px 0
}

.menu_box .side_btn {
    -ms-flex: 0 0 auto;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    display: block;
    opacity: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    line-height: 0;
    border: 0;
    background-color: transparent;
    padding: 2px!important
}

.menu_box .side_btn:before {
    content: ""
}

.menu_box .side_btn.btn_more:before {
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -28px -271px;
    width: 16px;
    height: 16px;
    display: inline-block
}

.lnb_tree li {
    padding: 2px 0 0;
    position: relative
}

.lnb_tree .menu_item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    padding: 6px 2px 6px 12px;
    line-height: 20px;
    border-radius: 4px;
    cursor: pointer;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.lnb_tree .menu_item.focus,.lnb_tree .menu_item.hover {
    background-color: rgba(0,0,0,.05)
}

.lnb_tree .menu_item.focus .side_btn,.lnb_tree .menu_item.focus .side_btn:focus,.lnb_tree .menu_item.hover .side_btn,.lnb_tree .menu_item.hover .side_btn:focus {
    opacity: 1
}

.lnb_tree .menu_item.focus .side_btn.disabled,.lnb_tree .menu_item.hover .side_btn.disabled {
    opacity: .4;
    cursor: default;
    outline: none
}

.lnb_tree .menu_item.selected {
    background-color: rgba(21,126,251,.1)
}

.lnb_tree .menu_item.selected .item_txt,.lnb_tree .menu_item.selected .unread_cnt {
    color: #157efb
}

.lnb_tree .menu_item.selected .item_txt {
    font-weight: 700
}

.lnb_tree .menu_item .item_txt {
    display: inline-block;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    color: #222;
    padding-left: 32px;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    vertical-align: top
}

.lnb_tree .menu_item .item_txt:before {
    content: "";
    vertical-align: top;
    position: absolute;
    left: 0;
    top: 0
}

.lnb_tree .menu_item .unread_cnt {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    color: #157efb;
    padding-right: 8px;
    display: block;
    margin-right: auto;
    padding-left: 6px
}

.lnb_tree .menu_item .unread_cnt a {
    color: inherit;
    text-decoration: none!important
}

.lnb_tree .menu_item.task_all .item_txt:before {
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -144px -215px;
    width: 20px;
    height: 20px;
    display: inline-block
}

.lnb_tree .menu_item.task_all.selected .item_txt:before {
    background-position: -172px -215px
}

.lnb_tree .menu_item.assign .item_txt:before {
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -32px -215px;
    width: 20px;
    height: 20px;
    display: inline-block
}

.lnb_tree .menu_item.assign.selected .item_txt:before {
    background-position: -60px -215px
}

.lnb_tree .menu_item.charge .item_txt:before {
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -88px -215px;
    width: 20px;
    height: 20px;
    display: inline-block
}

.lnb_tree .menu_item.charge.selected .item_txt:before {
    background-position: -116px -215px
}

.lnb_tree .menu_item.group .item_txt:before {
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -32px -243px;
    width: 20px;
    height: 20px;
    display: inline-block
}

.lnb_tree .menu_item.group.selected .item_txt:before {
    background-position: -60px -243px
}

.nav_lnb .footer {
    position: relative;
    padding: 16px 20px 22px
}

.nav_lnb .footer .copyright {
    font-family: -apple-system,BlinkMacSystemFont,Arial,Segoe UI,sans-serif;
    color: #989898;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.5
}

.nav_lnb .footer .copyright:hover {
    color: #767676
}

.aside_pane {
    line-height: 20px;
    padding: 8px 20px
}

.aside_pane .help,.aside_pane .settings {
    position: absolute;
    left: 12px;
    top: 6px;
    padding: 8px;
    border-radius: 2px
}

.aside_pane .help:before,.aside_pane .settings:before {
    content: "";
    display: inline-block;
    vertical-align: top
}

.aside_pane .indicator {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    color: #767676;
    font-size: 12px;
    line-height: 1.5
}

.aside_pane .indicator .cnt {
    color: #157efb;
    font-family: -apple-system,BlinkMacSystemFont,Arial,Segoe UI,sans-serif
}

.aside_pane .indicator a {
    color: inherit
}

.nav_lnb.fold_left {
    width: 76px!important
}

.nav_lnb.fold_left .mini_pane {
    display: block
}

.nav_lnb.fold_left .aside_pane,.nav_lnb.fold_left .main_pane,.nav_lnb.fold_left .scroll_pane,.nav_lnb.fold_left .snb_split_area {
    display: none
}




.contents,.nav_lnb {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    height: 100%;
    position: relative
}

.contents {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    z-index: 10
}

.content_head {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-bottom: 1px solid #e5e5e6;
    padding: 16px 0 0 20px
}

.content_body {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 0
}

.content_body,.content_body .main_cont {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: auto
}

.content_body .main_cont {
    min-width: 420px;
    position: relative
}

.content_body .side_cont {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-left: 1px solid #e5e5e6;
    padding-left: 3px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.content_body .side_cont .split_bar {
    position: absolute;
    left: -5px;
    top: 0;
    bottom: 0;
    width: 11px;
    cursor: ew-resize;
    cursor: col-resize;
    z-index: 1
}

.content_body .side_cont:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-right: 1px solid #e5e5e6;
    width: 1px
}

.content_body .side_cont .scroll_cover {
    overflow: auto;
    padding: 16px 0 0;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}


.title_container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 16px
}

.title_container .search_cover {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-right: 20px
}

.title_container .heading_cover {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    min-width: 0;
    padding-right: 20px
}

.search_cover {
    position: relative;
    background-color: #eee;
    border-radius: 2px;
    padding: 0 0 0 36px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 360px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-width: 0
}

.search_cover:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -274px -52px;
    width: 16px;
    height: 16px;
    display: inline-block;
    position: absolute;
    left: 12px;
    top: 12px
}

.search_cover.focus {
    background-color: #fff
}

.search_cover.focus:before {
    background-position: -274px -28px
}

.search_cover.focus:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border: 1px solid #157efb;
    border-radius: 2px;
    z-index: 1
}

.search_cover .search {
    position: relative;
    border: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    font-size: 14px;
    line-height: 20px;
    background-color: transparent;
    outline: 0;
    min-width: 0;
    z-index: 5
}

.search_cover .search::-webkit-input-placeholder {
    color: #989898;
    opacity: 1
}

.search_cover .search::-moz-placeholder {
    color: #989898;
    opacity: 1
}

.search_cover .search:-ms-input-placeholder {
    color: #989898;
    opacity: 1
}

.search_cover .search:-moz-placeholder {
    color: #989898;
    opacity: 1
}

.search_cover .btn_search_option {
    border: 0;
    background-color: transparent;
    position: relative;
    font-size: 12px;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 40px;
    border-radius: 2px;
    line-height: 20px;
    white-space: nowrap;
    padding: 10px 12px;
    cursor: pointer;
    color: #222;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    z-index: 5
}

.search_cover .btn_search_option:hover {
    background-color: rgba(0,0,0,.05)
}

.search_cover .btn_search_option:after {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -206px -124px;
    width: 8px;
    height: 8px;
    display: inline-block;
    margin: -2px 0 0 4px;
    vertical-align: middle
}

.search_cover .btn_search_option.on {
    background-color: rgba(0,0,0,.1)
}

.search_cover .btn_search_option.on:after {
    background-position: -174px -124px
}

.list_cover {
    overflow: auto;
    padding: 16px 0 0;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.list_cover .empty {
    padding-top: 77px
}

.list_cover .list_filter {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0 20px 8px
}

.list_cover .list_filter .btn_order {
    font-size: 14px;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 36px;
    border-radius: 2px;
    line-height: 21px;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    padding: 7px 12px 8px;
    cursor: pointer;
    min-width: 64px;
    border: 0;
    background: transparent;
    color: #222;
    font-weight: 700
}

.list_cover .list_filter .btn_order.hover,.list_cover .list_filter .btn_order:hover {
    background-color: rgba(0,0,0,.05)
}

.list_cover .list_filter .btn_order.on {
    background-color: rgba(0,0,0,.1)
}

.list_cover .list_filter .btn_order.disabled,.list_cover .list_filter .btn_order:disabled {
    cursor: default;
    opacity: .4
}

.list_cover .list_filter .btn_order.disabled:hover,.list_cover .list_filter .btn_order:disabled:hover {
    background-color: #fff
}

.list_cover .list_filter .btn_order:after {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -206px -124px;
    width: 8px;
    height: 8px;
    display: inline-block;
    margin: -2px 0 0 6px;
    vertical-align: middle
}

.list_cover .list_filter .btn_order.on:after {
    background-position: -174px -124px
}

.list_cover .list_filter .btn_drop_cover {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-left: -12px
}

.list_cover .list_filter .view_completed {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding: 8px 0;
    margin-left: auto;
    line-height: 20px
}

.list_cover .list_filter .view_completed .toggle_cover {
    display: inline-block;
    line-height: 0;
    vertical-align: top;
    margin-left: 4px
}

.list_cover .list_filter .view_completed .toggle_cover label {
    vertical-align: top
}

.list_cover .list_filter .view_completed .toggle_label {
    font-size: 14px;
    color: #222
}

.list_cover .quick_write {
    padding: 0 20px 16px
}

.list_cover .quick_write,.list_cover .quick_write .input_cover {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

.list_cover .quick_write .input_cover {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    border: 1px solid #ddd;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 2px
}

.list_cover .quick_write .input_cover .todo_input {
    border: 0;
    padding: 9px 12px 9px;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-width: 0;
    font-size: 14px;
    color: #222;
    line-height: 20px;
    outline: none
}

.list_cover .quick_write .input_cover .todo_period {
    border: 0;
    background-color: transparent;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    min-width: 0;
    font-size: 12px;
    line-height: 18px;
    color: #222;
    vertical-align: top
}

.list_cover .quick_write .input_cover .todo_period.on,.list_cover .quick_write .input_cover .todo_period:hover {
    text-decoration: underline
}

.list_cover .quick_write .input_cover .todo_period.unselect {
    line-height: 0;
    padding: 11px
}

.list_cover .quick_write .input_cover .todo_period.unselect:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -274px -4px;
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: top
}

.list_cover .quick_write .input_cover .todo_period.unselect:hover {
    text-decoration: none
}

.list_cover .quick_write .input_cover .todo_period.unselect:hover:before {
    background-position: -247px -243px
}

.list_cover .quick_write .input_cover .todo_period.unselect.on {
    text-decoration: none
}

.list_cover .quick_write .input_cover .todo_period.unselect.on:before {
    background-position: -223px -243px
}

.list_cover .quick_write .input_cover .todo_period_remove {
    border: 0;
    background-color: transparent;
    padding: 13px 4px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-right: 7px;
    vertical-align: top;
    line-height: 0
}

.list_cover .quick_write .input_cover .todo_period_remove:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -44px -295px;
    width: 12px;
    height: 12px;
    display: inline-block;
    vertical-align: top
}

.list_cover .quick_write .input_cover .todo_period_remove:hover:before {
    background-position: -298px -204px
}

.list_cover .quick_write .input_cover.focus {
    border-color: #157efb
}

.list_cover .quick_write .input_cover.focus .todo_period,.list_cover .quick_write .input_cover.focus .todo_save {
    display: block
}

.list_cover .quick_write .todo_save {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    font-size: 14px;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 40px;
    border-radius: 2px;
    line-height: 21px;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    padding: 9px 12px 10px;
    cursor: pointer;
    min-width: 64px;
    background: #157efb;
    border: 0;
    color: #fff;
    font-weight: 700;
    min-width: 74px;
    margin-left: 8px
}

.list_cover .quick_write .todo_save.hover,.list_cover .quick_write .todo_save:hover {
    background-color: rgba(0,0,0,.05)
}

.list_cover .quick_write .todo_save.on {
    background-color: rgba(0,0,0,.1)
}

.list_cover .quick_write .todo_save.disabled,.list_cover .quick_write .todo_save:disabled {
    cursor: default;
    opacity: .4
}

.list_cover .quick_write .todo_save.disabled:hover,.list_cover .quick_write .todo_save:disabled:hover {
    background-color: #fff
}

.list_cover .quick_write .todo_save.hover,.list_cover .quick_write .todo_save.on,.list_cover .quick_write .todo_save:hover {
    background: #1373e6
}

.list_cover .quick_write .todo_save.disabled:hover,.list_cover .quick_write .todo_save:disabled:hover {
    background: #157efb
}

.todo_list .period {
    padding: 0 20px 4px;
    font-size: 12px;
    line-height: 16px;
    color: #222
}

.todo_list .period strong {
    font-size: 14px;
    margin-right: 6px
}

.todo_list .todo_item~.period {
    margin-top: 16px
}

.todo_list .srch_key {
    color: #157efb
}

.todo_item {
    position: relative;
    padding: 15px 56px 11px 52px
}

.todo_item:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 52px;
    right: 20px;
    border-bottom: 1px solid #f5f5f6
}

.todo_item .content {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal;
    word-break: break-all;
    font-size: 14px;
    font-weight: 700;
    color: #222;
    line-height: 18px;
    margin-bottom: 3px
}

.todo_item .content:hover {
    text-decoration: underline;
    cursor: pointer
}

.todo_item .title_cover {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

.todo_item .title_cover .content {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto
}

.todo_item .title_cover .attachment {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto
}

.todo_item .info {
    color: #767676;
    font-size: 12px;
    line-height: 18px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

.todo_item .info .attachment,.todo_item .info .date,.todo_item .info .name {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto
}

.todo_item .info .name {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    word-wrap: normal
}

.todo_item .info span~.attachment:before,.todo_item .info span~.date:before,.todo_item .info span~.name:before {
    content: "";
    display: inline-block;
    height: 8px;
    border-left: 1px solid #d5d5d6;
    margin-left: 6px;
    margin-right: 6px
}

.todo_item .date em {
    font-style: normal
}

.todo_item .date .today {
    color: #157efb
}

.todo_item .date .outof {
    color: #fd472b
}

.todo_item .btn_status {
    border: 0;
    background-color: transparent;
    line-height: 0;
    padding: 5px;
    position: absolute;
    left: 15px;
    top: 11px;
    z-index: 10;
    outline: none
}

.todo_item .btn_status:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -108px -187px;
    width: 20px;
    height: 20px;
    display: inline-block;
    display: block
}

.todo_item .btn_status.on:before {
    background-position: -164px -187px
}

.todo_item .btn_status:hover .page_tooltip {
    display: inline-block;
    top: 100%;
    left: 0;
    -webkit-transform: none;
    transform: none
}

.todo_item .btn_important {
    position: absolute;
    right: 15px;
    top: 11px;
    padding: 5px;
    border: 0;
    background-color: transparent;
    line-height: 0;
    outline: none
}

.todo_item .btn_important:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -144px -243px;
    width: 20px;
    height: 20px;
    display: inline-block;
    display: block
}

.todo_item .btn_important.on:before {
    background-position: -88px -243px
}

.todo_item .attachment {
    display: inline-block;
    vertical-align: top;
    padding: 1px
}

.todo_item .attachment:after {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -298px -28px;
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: top
}

.todo_item.selected {
    background-color: #eff6ff
}

.todo_item.reddot:before {
    content: "";
    background-image: url(https://static.worksmobile.net/static/wm/task/sp_task_ed9a9469.png);
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-image: linear-gradient(transparent,transparent),url(https://static.worksmobile.net/static/wm/task/sp_task_55d77550.svg);
    background-size: 318px 311px;
    background-position: -246px -228px;
    width: 6px;
    height: 6px;
    display: inline-block;
    position: absolute;
    left: 43px;
    top: 16px
}

.todo_item.completed .content {
    color: #767676
}

.main_pane .core_button {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 16px 12px 14px;
    z-index: 10
}

.main_pane .core_button a {
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    display: block;
    height: 40px;
    background-color: #fff;
    text-align: center;
    line-height: 39px;
    color: #222;
    text-decoration: none;
    border: 0;
    border-radius: 0;
    position: relative;
    width: 50%;
    overflow: hidden
}

.ncs .main_pane .core_button a {
    background-color: #07b53b;
    color: #fff
}

.main_pane .core_button a strong {
    display: block;
    height: 100%
}

.main_pane .core_button a:hover strong {
    background-color: rgba(0,0,0,.08)
}

.main_pane .core_button a:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px
}

.main_pane .core_button a:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px
}

.main_pane .core_button a+a:before {
    content: "";
    border-left: 1px solid rgba(0,0,0,.15);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0
}

.main_pane .core_button a.has_dropdown:after {
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    background-color: rgba(255,0,0,.5);
    margin-left: 4px
}
</style>
