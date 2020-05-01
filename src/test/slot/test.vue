<template>
  <base-layout>
    <template slot='header' slot-scope="scopeProps">
      <h1>头部{{ scopeProps.msg }}</h1>
    </template>
    <p>hello</p>
    <div>
      <link-com url="http://www.baidu.com">
      </link-com>
    </div>
    <template v-slot:footer="footerProps">
      <span>copyright@{{ footerProps.year }}</span>
    </template>
  </base-layout>
</template>

<script>
import LinkCom from '@/test/slot/link.vue'
import BaseLayout from '@/test/slot/baseLayout.vue'

export default {
  components: {
    LinkCom,
    BaseLayout
  }
}
</script>

<style scoped>

</style>
