<template>
  <div class="container">
    <header>
      <slot name="header" msg="hello from slot"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer" :year="new Date().getFullYear()"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'baseLayout'
}
</script>

<style scoped>
.container {
  width: 1000px;
  height: 500px;
  margin: 50px auto;
  border: 2px solid #ccc;
  position: relative;
  padding-top: 100px;
}
header{
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #f40;
  width: 100%;
  height: 100px;
}
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  border: 1px solid #f40;
  width: 100%;
}
</style>
