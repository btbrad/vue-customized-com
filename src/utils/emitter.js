function $broadcast (componentName, eventName, value) {
  this.$children.length && this.$children.forEach(child => {
    let name = child.$options.name
    if (name === componentName) {
      child.$emit(eventName, value)
    } else {
      $broadcast.call(child, componentName, eventName, value)
    }
  })
}

function $dispatch (componentName, eventName, value) {
  let parent = this.$parent
  while (parent) {
    if (parent.$options.name && parent.$options.name === componentName) {
      parent.$emit(eventName, value)
      parent = false
    } else {
      parent = parent.$parent
    }
  }
}

export default {
  created () {
    // console.log('混入对象的钩子被调用')
  },
  methods: {
    broadcast (componentName, eventName, value) {
      $broadcast.call(this, componentName, eventName, value)
    },
    dispatch (componentName, eventName, value) {
      $dispatch.call(this, componentName, eventName, value)
    }
  }
}
