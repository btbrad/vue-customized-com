<template>
  <div>
    <h2>MyAlert</h2>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  name: 'MyAlert',
  methods: {
    handleClick () {
      console.log(this.$MyAlert)
      this.$MyAlert.show()
    }
  }
}
</script>

<style>

</style>
