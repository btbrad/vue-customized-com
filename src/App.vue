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
      <router-link to="/alertTest">AlertTest</router-link> |
      <router-link to="/renderTest">RenderTest</router-link> |
      <router-link to="/CartTest">CartTest</router-link> |
      <router-link to="/table">table</router-link> |
      <router-link to="/slot-scoped">slot-scope</router-link> |
      <router-link to="/table-slot">table-scope</router-link> |
      <router-link to="/slot-test">slot-test</router-link> |
      <router-link to="/dynamic">dynamicCom</router-link> |
      <router-link to="/treeTest">treeTest</router-link> |
      <router-link to="/inputNumberTest">InputNumberTest</router-link> |
      <hr>
      <router-link to="/myAlert">myAlert</router-link> |
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
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
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
