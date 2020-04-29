<template>
  <ul>
    <li v-for="book in books" :key="book.id">
      <slot :book="book">
        {{book.name}}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  ul, li {
    text-decoration: none;
    list-style-type: none;
  }
</style>
