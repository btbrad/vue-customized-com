<template>
  <div>
    <h2>slot实现table自定义列</h2>
    <my-table :tableData="tableData" :headItems="headItems">
      <template v-slot:name="{ row, index }">
        <input v-if="editIndex === index" type="text" v-model="row.name">
        <span v-else>{{row.name}}</span>
      </template>
      <template v-slot:age="{ row, index }">
        <input v-if="editIndex === index" type="text" v-model="row.age">
        <span v-else>{{row.age}}</span>
      </template>
      <template v-slot:gender="{ row, index }">
        <input v-if="editIndex === index" type="text" v-model="row.gender">
        <span v-else>{{row.gender}}</span>
      </template>
      <template v-slot:oprate="{ row, index }">
        <div v-if="editIndex === index">
          <button @click="handleConfirm">确定</button>
          <button @click="handleCancel">取消</button>
        </div>
        <span v-else>
          <button @click="handleEdit(index)">编辑</button>
        </span>
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
      editIndex: -1,
      tableData: [
        { name: 'Michael', age: '29', gender: 'male' },
        { name: 'Jane', age: '23', gender: 'female' },
        { name: 'Ryan', age: '27', gender: 'male' }
      ],
      headItems: [
        { prop: 'name', label: '姓名' },
        { prop: 'age', label: '年龄', slot: true },
        { prop: 'gender', label: '性别' },
        { prop: 'oprate', label: '操作', slot: true }
      ]
    }
  },
  methods: {
    handleEdit (index) {
      this.editIndex = index
    },
    handleConfirm () {

    },
    handleCancel () {
      this.editIndex = -1
    }
  }
}
</script>

<style>

</style>
