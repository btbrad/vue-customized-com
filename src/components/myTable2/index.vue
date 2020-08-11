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
              <template v-if="it.slot">
                <slot :name="it.prop" :row="data" :column="it" :index="idx"></slot>
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

export default {
  name: 'myTable',
  props: {
    headItems: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
table {
  border: 2px solid #000;
  width: 100%;
  box-sizing: border-box;
  border-collapse: collapse;
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
  border-collapse: collapse;
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
  border-collapse: collapse;
}
</style>
