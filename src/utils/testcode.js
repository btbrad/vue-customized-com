const code = `
  <template>
    <div>
      <h2 class='title'>Hello {{msg}}</h2>
    </div>
  </template>
  <script>
    export default {
      name: 'test',
      data () {
        return {
          msg: 'World'
        }
      }
    }
  </script>
  <style scoped>
    .title {
      color: #f40;
    }
  </style>
`

export default code
