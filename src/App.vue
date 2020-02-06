<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/button">Button</router-link> |
      <router-link to="/comTest">ComTest</router-link> |
      <router-link to="/formTest">FormTest</router-link> |
      <router-link to="/checkboxTest">CheckboxTest</router-link> |
      <router-link to="/displayTest">DisplayTest</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
import mixin from './views/mixins/mixin'

export default {
  mixins: [mixin],
  name: 'App组件',
  provide () {
    return {
      app: this
    }
  },
  data () {
    return {
      title: 'App.vue'
    }
  },
  methods: {
    sayHello () {
      console.log(this.title)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
