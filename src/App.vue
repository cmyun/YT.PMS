<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    
  </header>

  <RouterView />
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
  
};
</script>