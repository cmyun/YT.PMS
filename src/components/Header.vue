<template>
    <div id="header" class="h_contact skin_corp_bg  ">
        <h1 id="logo_title">
            <span class="logo">
            <span class="img naver_works">
                <img id="logoimg" src="https://static.worksmobile.net/static/pwe/wm/dm/service_logo_nw.png" onerror="this.src='https://static.worksmobile.net/static/pwe/wm/dm/service_logo_nw.png'">
            </span>
            </span>
            <span class="service">Contacts</span>
        </h1>
        <div class="login_group">
            <div class="account">
            <ul class="menu"></ul>
            </div>
            <div class="staff_srch">
            <label for="searchVal" class="blind">Search</label>
            <input type="text" placeholder="Search" class="type_sort" name="nweSearchText" id="nweSearchText" autocomplete="off" onkeydown="javascript:nweSearchKeyDownEvent(event);">
            <button type="button" class="btn_srch" onclick="javascript:nweMemberSearch(); return false;">
                <span class="blind">Search</span>
            </button>
            </div>
            <div class="setting_more">
            <div class="setting_area">
                <a class="btn_help" id="btnWorksCommonHelp" href="javascript:toggleCommonGnbLayers('worksLnbHelpLayer', 'btnWorksCommonHelp', 'show');">
                <span class="blind">Help</span>
                </a>
                <ul class="menu _gnbSettingsLayer _gnbLayer" id="worksLnbHelpLayer" style="display:none; ">
                <li class="item">
                    <a target="_blank" onclick="javascript:toggleCommonGnbLayers('worksLnbHelpLayer', 'btnWorksCommonHelp', 'show');" href="https://docs.worksmobile.com/pcw-ft-app">Applications</a>
                </li>
                </ul>
            </div>
            <div class="setting_area">
                <a class="btn_setting" id="btnWorksCommonSettings" href="javascript:toggleSettingLayer();toggleCommonGnbLayers('', 'btnWorksCommonSettings', 'show');">
                <span class="blind">Settings</span>
                </a>
            </div>
            </div>
            <div class="user_profile">
            <a href="javascript:toggleCommonGnbLayers('gnb_user', 'btnWorksCommonGnbUser', 'selected');loadGnbMemberInfo();" id="btnWorksCommonGnbUser">
                <img id="worksGnbProfileImg" src="https://photo.contact.worksmobile.com/v2/photos?kind=DOMAIN_USER&amp;id=100001503213660&amp;size=ff40" onerror="this.style.display='none'; document.getElementById('worksGnbProfileInitial').style.display='block'; bLoadProfileImage=false;" width="32" height="32" title="phamphung" style="display: none;">
                <span id="worksGnbProfileInitial" class="initial_profile" style="background-color: rgb(134, 164, 212); display: block;">
                <em>p</em>
                </span>
                <span id="worksNotification" class="status etiquette" style="display:none;">
                <em class="blind">etiquette</em>
                </span>
                <span id="worksMemberStatusIcon1" class="state_dot skin_corp_bg " style="display:none;">
                <span class="ico_state">
                    <img id="worksMemberStatusIconImgMini" src="" onerror="document.getElementById('worksMemberStatusIcon1').style.display='none';">
                </span>
                </span>
            </a>
            </div>
            <div id="gnb_user" class="gnb_usermenu _gnbInfoLayer _gnbLayer" style="display:none;">
            <h2 class="blind">My Information</h2>
            <div class="user_infor" id="gnbMemberInfo">
                <p class="profile">
                <span class="initial_profile" style="background-color:#86A4D4;">
                    <em>p</em>
                </span>
                </p>
                <div class="infor">
                <p class="user">
                    <span>phung pham</span>
                </p>
                <p class="work">
                    <span>PRO</span>
                    <span>PRO</span>
                    <span>DX TEAM</span>
                </p>
                </div>
            </div>
            <h2 class="blind">User Info</h2>
            <ul>
                <li>
                <a target="works_settings_personal_info" onclick="javascript:toggleCommonGnbLayers('gnb_user', 'btnWorksCommonGnbUser');" href="https://contact.worksmobile.com/personal-info-settings/my">My Information</a>
                </li>
                <li id="liWorksMemberStatus" style="display: none;">
                <a target="works_settings_personal_info" onclick="javascript:toggleCommonGnbLayers('gnb_user', 'btnWorksCommonGnbUser');" href="https://contact.worksmobile.com/personal-info-settings/status">
                    <span class="mn_title">Status</span>
                    <span class="mn_value">
                    <span class="ico_status" id="worksMemberStatusIcon2" style="display:none">
                        <img id="worksMemberStatusIconImg" src="https://static.worksmobile.net/static/wm/settings/profile_state/ic-16-busy.png">
                    </span>
                    <span class="text" id="worksMemberStatusName">Not set</span>
                    </span>
                </a>
                </li>
                <li>
                <a class="has_submenu" href="javascript:window.showNotifyOption('snoozeNotifyLayer');toggleCommonGnbSubLayers('snoozeNotifyLayer');" id="btnToggleSnoozeLayer">Snooze</a>
                </li>
                <li>
                <a target="works_settings_notify" onclick="javascript:toggleCommonGnbLayers('gnb_user', 'btnWorksCommonGnbUser');" href="https://notify.worksmobile.com/settings">Set notification hours</a>
                </li>
                <li>
                <a target="works_settings_personal_info" onclick="javascript:toggleCommonGnbLayers('gnb_user', 'btnWorksCommonGnbUser');" href="https://contact.worksmobile.com/personal-info-settings#message">Chat with external members</a>
                </li>
                <li>
                <a target="works_settings_security" onclick="javascript:toggleCommonGnbLayers('gnb_user', 'btnWorksCommonGnbUser');" href="https://common.worksmobile.com/security-settings">Security</a>
                </li>
                <li>
                <a target="works_settings_security" onclick="javascript:toggleCommonGnbLayers('gnb_user', 'btnWorksCommonGnbUser');" href="https://common.worksmobile.com/security-settings/access-info">Access log</a>
                </li>
                <li>
                <a target="works_settings_security" onclick="javascript:toggleCommonGnbLayers('gnb_user', 'btnWorksCommonGnbUser');" href="https://common.worksmobile.com/security-settings/device-info">Device</a>
                </li>
                <li>
                <a target="works_settings_personal_info" onclick="javascript:toggleCommonGnbLayers('gnb_user', 'btnWorksCommonGnbUser');" href="https://contact.worksmobile.com/personal-info-settings#language">Language·Time zone</a>
                </li>
                <li class="line">line</li>
                <li>
                <a href="#" onclick="javascript:toggleCommonGnbLayers('gnb_user', 'btnWorksCommonGnbUser');nweGnbOpenPopup('https://contact.worksmobile.com/v2/domain/invitation/popup', 'invite', 750, 578); return false;">Invite new members</a>
                </li>
                <li class="line">line</li>
                <li>
                <a href="https://auth.worksmobile.com/logout?redirectUrl=https://contact.worksmobile.com" referrerpolicy="origin">Logout</a>
                </li>
            </ul>
            <div id="snoozeNotifyLayer" class="gnb_usermenu_sub" style="display: none; top: -9px;"></div>
            </div>
        </div>
        <div class="gnb_area">
            <h2 class="blind">LINE WORKS Services Shortcuts</h2>
            <div id="gnb_list" class="gnb_list_box">
            <ul>
                <li class="home ">
                <a href="https://board.worksmobile.com" target="_blank" data-title="Board">
                    <span class="ico">home</span>
                </a>
                </li>
                <li class="talk ">
                <a href="https://talk.worksmobile.com" target="_blank" data-title="Message">
                    <span class="ico">message</span>
                </a>
                </li>
                <li class="calendar ">
                <a href="https://calendar.worksmobile.com/main.nhn" target="_blank" data-title="Calendar">
                    <span class="ico">calendar</span>
                </a>
                </li>
                <li class="contact on">
                <a href="https://contact.worksmobile.com" target="_blank" data-title="Contacts">
                    <span class="ico">contact</span>
                </a>
                </li>
                <li class="task ">
                <a href="https://task.worksmobile.com" target="_blank" data-title="Task">
                    <span class="ico">task</span>
                </a>
                </li>
                <li class="form ">
                <a href="https://form.worksmobile.com" target="_blank" data-title="Form">
                    <span class="ico">form</span>
                </a>
                </li>
            </ul>
            </div>
        </div>
        <div id="toggleLnb" class="toggle_lnb">
            <button type="button" onclick="javascript:toggleLnb();return false;">Toggle Lnb</button>
        </div>
    </div>
</template>