<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'app',
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            this.clearAlert();
        }
    } 
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, object, iframe, pre, code, p, blockquote, form, fieldset, legend, table, th, td, caption, tbody, tfoot, thead, article, aside, figure, footer, header, hgroup, menu, nav, section, audio, video, canvas {
    margin:0;
    padding:0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, nav, section, menu { display:block; }
audio:not([controls]) {
    display:none;
    height:0;
}
[hidden] { display:none; }
table {
    border-collapse:collapse;
    border-spacing:0;
}
fieldset, img { border:none; }
address, caption, cite, code, dfn, em, strong, th, var {
    font-style:normal;
    font-weight:normal;
}
ul, ol, menu { list-style:none; }
#container {
  display: flex;
  height: calc(100vh - 56px);
  overflow: hidden;
}
#content {
  width: -webkit-fill-available;
  &.fixLayout {
    display: flex;
    justify-content: center;
    .main {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      max-width: 1250px;
      min-width: 1000px;
      padding: 0 50px;
    }
    
  }
  
}
</style>
