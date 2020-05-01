<template>
  <a :href="url" class="nav-link">
    <slot>超链接</slot>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.nav-link {
  color: #f40;
  font-weight: 700;
  text-decoration: underline;
}
</style>
