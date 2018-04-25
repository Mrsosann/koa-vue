<template>
  <div>Index page
    <h1>{{ message }}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'this is Index content'
    }
  },
  created () {
    this.$api.post('userInfo', null, data => {
      console.log(data)
    })
  }
}
</script>
