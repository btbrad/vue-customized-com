<template>
  <div>
    <h2>form表单</h2>
    <i-form ref="form" :model="form" :rules="rules">
      <i-form-item label="姓名" prop="name">
        <i-input v-model="form.name" />
      </i-form-item>
      <i-form-item label="密码" prop="password">
        <i-input type="password" v-model="form.password" />
      </i-form-item>
      <i-form-item label="是否同意" prop="agree">
        <i-checkbox v-model="form.agree"></i-checkbox>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
import IForm from '@/components/IForm.vue'
import IFormItem from '@/components/IFormItem.vue'
import IInput from '@/components/IInput.vue'
import ICheckbox from '@/components/ICheckbox.vue'

export default {
  name: 'FormTest',
  components: {
    IForm,
    IFormItem,
    IInput,
    ICheckbox
  },
  data () {
    return {
      form: {
        name: '',
        password: '',
        agree: false
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        agree: [
          { type: 'boolean', required: true, message: '请勾选', trigger: 'blur' } // async-validator 的默认类型为string
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('success')
        } else {
          console.log('error')
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields()
    }

  }
}
</script>

<style>

</style>
