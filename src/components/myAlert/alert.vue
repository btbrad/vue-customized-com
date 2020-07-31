<template>
  <div v-if="isShow" class="alert-wrapper">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    content: {
      type: String,
      default: ''
    },
    duration: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    show () {
      this.isShow = true
      setTimeout(() => {
        this.hide()
      }, this.duration)
    },
    hide () {
      this.isShow = false
    }
  }
}
</script>

<style>

</style>
