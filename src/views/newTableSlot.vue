<template>
  <div>
    <h2>slot实现table自定义列</h2>
    <my-table :tableData="tableData" :headItems="headItems">
      <template v-slot:age="{ row }">
        <span>年龄{{row}}</span>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from '@/components/myTable2/index'

export default {
  name: 'MySlotTable',
  components: {
    MyTable
  },
  data () {
    return {
      tableData: [
        { name: 'Michael', age: '29', gender: 'male' },
        { name: 'Jane', age: '23', gender: 'female' },
        { name: 'Ryan', age: '27', gender: 'male' }
      ],
      headItems: [
        { prop: 'name', label: '姓名' },
        { prop: 'age', label: '年龄', slot: true },
        { prop: 'gender', label: '性别' }
      ]
    }
  }
}
</script>

<style>

</style>
