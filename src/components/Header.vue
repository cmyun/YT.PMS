<template>
    <div id="header">
        <!-- <div class="container"> -->
            <p class="toggleBtn">
                <span><i class="bi bi-justify fs-4"></i></span>
            </p>
            <ul class="nav">
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Task</a></li>
            </ul>
            <div class="loginGroup"></div>
    </div>
</template>

<script>
// import { BIcon } from 'bootstrap-vue'
export default {
  name: "HeaderView",
  
  created(){
    
  }
};
</script>
<style scoped lang="scss">
#header {
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    padding: 20px 20px;
}
.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
        margin: 0 10px;
    }
    a {
        text-decoration: none;
        color: #FFF;
        padding: 5px;
    }
}
.toggleBtn {
    position: relative;
    display: inline-block;
    margin: 0;
    width: 36px;
    height: 36px;
    line-height: 36px;
    cursor: pointer;
    border-radius: 50%;
    // background-color: #FFF;
    span {
        display: block;
        background-color: rgba(0,0,0,.7);
    }
    span:after {
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background-color: rgba(0,0,0,.7);
        top: 0;
        left: 0;
    }
    
}
</style>