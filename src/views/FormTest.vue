<template>
  <div>
    <h2>form表单</h2>
    <i-form :model="form" :rules="rules">
      <i-form-item label="姓名" prop="name">
        <i-input v-model="form.name" />
      </i-form-item>
      <i-form-item label="密码" prop="password">
        <i-input type="password" v-model="form.password" />
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
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
