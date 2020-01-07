<template>
  <div>
    <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">{{label}}</label>
    <div>
      <slot></slot>
    </div>
    <div v-if="validateState === 'error'" class="i-form-item-message">{{ errorMsg }}</div>
  </div>
</template>

<script>
import Schema from 'async-validator'
import emitter from '@/utils/emitter'

export default {
  name: 'IFormItem',
  inject: ['form'],
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      validateState: '', // 校验状态
      errorMsg: '', // 错误提示信息
      isRequired: false // 是否为必填
    }
  },
  // created () {
  //   this.$on('on-item-blur', (val) => {
  //     this.handleBlurValidate(val)
  //   })
  // },
  mounted () {
    if (this.prop) {
      this.dispatch('IForm', 'on-form-item-add', this)
      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue
      this.setRules()
    }
  },
  computed: {
    // 从Form的model中动态得到当前表单组件数据
    fieldValue () {
      return this.form.model[this.prop]
    }
  },
  methods: {
    getRules () {
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },
    getFilteredRule (trigger) {
      const rules = this.getRules()
      console.log('当前字段的规则', rules)
      /**
       * 如果没指定trigger, 则所有事件都会触发该规则
       */
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
    setRules () {
      let rules = this.getRules()
      if (rules.length) {
        rules.every((rule) => {
          // 如果当前校验规则中有必填项，则标记出来
          this.isRequired = rule.required
        })
      }
      this.$on('on-item-blur', this.onFieldBlur)
      this.$on('on-item-change', this.onFieldChange)
    },
    validate (trigger, callback = () => {}) {
      console.log(trigger)
      let rules = this.getFilteredRule(trigger)
      console.log(trigger + '的规则', rules)
      if (!rules || rules.length === 0) {
        return true
      }
      this.validateState = 'validating'
      let descriptor = {}
      descriptor[this.prop] = rules
      const validator = new Schema(descriptor)
      let model = {}
      model[this.prop] = this.fieldValue
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.errorMsg = errors ? errors[0].message : ''
        callback(this.errorMsg)
      })
    },
    // 重置数据
    resetField () {
      this.validateState = ''
      this.errorMsg = ''

      this.form.model[this.prop] = this.initialValue
    },
    onFieldBlur () {
      this.validate('blur')
    },
    onFieldChange () {
      this.validate('change')
    }
    // handleBlurValidate (val) {
    //   console.log(this.form)
    //   let descriptor = { [this.prop]: this.form && this.form.rules[this.prop] }
    //   const validator = new Schema(descriptor)
    //   validator.validate({ [this.prop]: this.form.model[this.prop] }).then(success => {
    //     console.log(success)
    //     this.errorMsg = ''
    //   }).catch(error => {
    //     console.log(error.errors[0].message)
    //     this.errorMsg = error.errors[0].message
    //   })
    // }
  },
  beforeDestroy () {
    this.dispatch('IForm', 'on-form-item-remove', this)
  }
}
</script>

<style scoped>
  .i-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .i-form-item-message {
    color: red;
  }
</style>
