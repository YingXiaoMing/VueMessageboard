<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'APP'
}
</script>

<style lang="less">
blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
  margin: 0;
  padding: 0;
}
*,:after, :before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
a, a:focus, a:hover {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}
</style>
