<template>
  <div>
    <p>单独使用：</p>
    <i-checkbox v-model="value" :trueValue="1" :falseValue="0" :disabled="false" >Agree</i-checkbox>
    <p>Agree:{{value}}</p>
    <p>组合使用：</p>
    <i-checkbox-group v-model="testArr">
      <i-checkbox label="John">John</i-checkbox>
      <i-checkbox label="Michael">Michael</i-checkbox>
      <i-checkbox label="Evans">Evans</i-checkbox>
    </i-checkbox-group>
    <p>value:{{testArr}}</p>
  </div>
</template>

<script>
import ICheckbox from '@/components/ICheckbox.vue'
import ICheckboxGroup from '@/components/ICheckboxGroup.vue'

export default {
  name: 'CheckboxTest',
  components: {
    ICheckbox,
    ICheckboxGroup
  },
  data () {
    return {
      value: 0,
      testArr: ['John']
    }
  }
}
</script>

<style>

</style>
