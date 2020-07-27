<template>
  <form class="i-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'IForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      fields: [] // 缓存所有需要校验的form-item实例
    }
  },
  created () {
    this.$on('on-form-item-add', (field) => {
      field && this.fields.push(field)
    })
    this.$on('on-form-item-remove', (field) => {
      field.prop && this.fields.splice(this.fields.indexOf(field), 1)
    })
  },
  methods: {
    resetFields () {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    // 公开方法：全部校验数据，支持 Promise
    validate (callback) {
      return new Promise(resolve => {
        let valid = true
        let count = 0
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (++count === this.fields.length) {
            //  全部完成
              resolve(valid)
              if (typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    }
  }
}
</script>

<style>

</style>
