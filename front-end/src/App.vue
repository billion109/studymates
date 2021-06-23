<template>
  <div id="app">
    <button v-on:click="getData">get</button>
    {{ api }}
    <router-view/>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  name: 'App',
  data: function () {
    return {
      api: 'asdf'
    }
  },
  methods: {
    getData: function () {
      const vm = this
      axios.get('http://localhost:8080/api/v1/index')
        .then(function (response) {
          vm.api = response.data
        })
    }
  }
}
</script>

<style lang="scss">

</style>
