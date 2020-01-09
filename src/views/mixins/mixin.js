export default {
  mounted () {
    this.sayBye()
    // console.log('mixin组件')
  },
  data () {
    return {
      testName: '测试'
    }
  },
  methods: {
    sayBye () {
      // console.log('Goodbye ' + this.title)
    }
  }
}
