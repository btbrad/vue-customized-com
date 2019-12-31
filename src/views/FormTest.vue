<template>
  <div>
    <h2>form表单</h2>
    <i-form>
      <i-form-item label="姓名">
        <i-input v-model="form.name" />
      </i-form-item>
    </i-form>
  </div>
</template>

<script>
import IForm from '@/components/IForm.vue'
import IFormItem from '@/components/IFormItem.vue'
import IInput from '@/components/IInput.vue'

export default {
  name: 'FormTest',
  components: {
    IForm,
    IFormItem,
    IInput
  },
  data () {
    return {
      form: {
        name: ''
      },
      rules: {}
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
