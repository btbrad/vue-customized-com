<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in headItems" :key="index">{{ item.label }}</th>
        </tr>
      </thead>

      <tbody>
          <tr v-for="(data, idx) in tableData" :key="idx">
            <div class="cube" v-for="(it, index1) in headItems" :key="index1">
              <td>
                <template v-if="it.renderFn">
                  <my-render :row="data" :column="it" :index="idx" :renderFn="it.renderFn"></my-render>
                </template>
                <template v-else>
                  <span>{{ data[it.prop] }}</span>
                </template>
              </td>
            </div>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MyRender from './my-render'

export default {
  name: 'myTable',
  components: {
    MyRender
  },
  props: {
    headItems: {
      type: Array,
      default: () => [
        { label: '姓名', prop: 'name' },
        { label: '年龄', prop: 'age' },
        { label: '性别',
          prop: 'gender',
          renderFn: (h, { row }) => {
            if (row.age < 25) {
              return (<span style={{ color: 'green' }}>年轻</span>)
            } else {
              return (<span style={{ color: '#f40' }}>大佬</span>)
            }
          }
        }
      ]
    },
    tableData: {
      type: Array,
      default: () => [
        { name: 'Michael', age: '29', gender: 'male' },
        { name: 'Jane', age: '23', gender: 'female' },
        { name: 'Ryan', age: '27', gender: 'male' }
      ]
    }
  }
}
</script>

<style scoped>
table {
  border: 2px solid #000;
  width: 100%;
  box-sizing: border-box;
}
thead > tr, tbody > tr {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
th {
  text-align: center;
  width: 33.3%;
  background: #ccc;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
tr {
  height: 50px;
}
tbody > tr > div.cube {
  width: 100%;
  height: 100%;
}
td {
  text-align: center;
  width: 100%;
  background: rgb(230, 230, 202);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  box-sizing: border-box;
}
</style>
