<template>
  <div>index page</div>
</template>
<script>
export default {
  created () {
    this.$api.post('userInfo', null, data => {
      console.log(data)
    })
  }
}
</script>
