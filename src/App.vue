<template>
  <div v-if="message" :class="`alert ${type}`">{{message}}</div>
  <router-view />
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState('alert', ['message']),
    ...mapState('alert', ['type'])
  },
  methods: {
    ...mapActions('alert', ['clear'])
  },
  watch: {
    $route (to, from){
      this.clear();
    },
    message(newVal, oldVal){
      setTimeout(() => {
        this.clear()
      }, 3000);
    }
  }
};
</script>
<style lang="scss">
.alert {
  position: fixed !important;
  right: 15px;
  bottom: 15px;
  z-index: 999999;
}
#app {
  font-family: -apple-system,BlinkMacSystemFont,Helvetica,Arial,Dotum,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  line-height: 1.5;
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
      max-width: 1250px;
      min-width: 1000px;
      padding: 0 50px;
      flex: 1 1 auto;
    }
    
  }
  
}

@media screen and (min-width: 768px){
.contents.fix_layout {
    overflow: hidden;
    min-height: 400px;
}
}
.contents.fix_layout {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
@media screen and (min-width: 768px){
.contents.fix_layout .contents_body {
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
    padding: 0;
    min-height: 0;
    height: 100%;
}
}




</style>
