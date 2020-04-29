<template>
  <div>
    <Son :books="books">
      <template slot-scope="slotProps">
        {{ `${slotProps.book.id} --- ${slotProps.book.name}` }}
      </template>
    </Son>
  </div>
</template>

<script>
import Son from './son'

export default {
  components: {
    Son
  },
  data () {
    return {
      books: [
        {
          id: 1,
          name: 'Java'
        },
        {
          id: 2,
          name: 'Ruby'
        }
      ]
    }
  }
}
</script>

<style>

</style>
