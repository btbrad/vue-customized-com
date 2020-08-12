<template>
  <div>
    <i-tree :data="data" :showCheckbox="true"></i-tree>
    <hr>
    <my-tree :data="treeData"></my-tree>
  </div>
</template>

<script>
import ITree from '@/components/tree/tree.vue'
import MyTree from '@/components/myTree/tree.vue'

export default {
  components: {
    ITree, MyTree
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
      ],
      treeData: [
        {
          label: '节点1',
          value: '1',
          children: [
            {
              label: '节点1-1',
              value: '1-1',
              children: [
                {
                  label: '节点1-1-1',
                  value: '1-1-1'
                },
                {
                  label: '节点1-1-2',
                  value: '1-1-2'
                }
              ]
            },
            {
              label: '节点1-2',
              value: '1-2',
              children: [
                {
                  label: '节点1-2-1',
                  value: '1-2-1'
                },
                {
                  label: '节点1-2-2',
                  value: '1-2-2'
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
