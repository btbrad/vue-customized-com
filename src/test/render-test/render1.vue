<script>
// const testCom = {
//   render: (h) => {
//     return h('p', '1111')
//   }
// }

export default {
  data () {
    return {
      show: false
    }
  },
  render (h) {
    const testCom = h('p', 'test')

    return h('div', {
      attr: {
        id: 'main'
      },
      'class': {
        container: true
      },
      style: {
        color: 'red'
      }
    },
    [
      this.show ? h('p', '内容1') : h('p', '内容2'),
      h('button', {
        on: {
          click: () => { this.show = !this.show }
        }
      },
      ['switch']
      ),
      testCom,
      testCom
    ])
  }
}
</script>
