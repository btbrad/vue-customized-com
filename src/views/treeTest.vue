<template>
  <div>
    <i-tree :data="data" :showCheckbox="true"></i-tree>
  </div>
</template>

<script>
import ITree from '@/components/tree/tree.vue'

export default {
  components: {
    ITree
  },
  data () {
    return {
      data: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
