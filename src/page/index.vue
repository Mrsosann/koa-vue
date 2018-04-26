<template>
  <div>
    <Header></Header>

    <p><strong>{{ message }}</strong></p>
    <p>Dear {{ user.name }} :</p>
    <p>Welcome to MrSosann's web</p>
    <router-link :to="`/content/${user.name}`">Home page</router-link>
    <p>{{ today }}, {{ user.email }}</p>

    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      message: 'This is Index content',
      today: '',
      user: {}
    }
  },
  created () {
    this.$api.post('userInfo', null, data => {
      this.user.name = data.name
      this.user.email = data.email
      this.today = data.date
    })
  }
}
</script>
<style lang="less" scoped>
strong {
  color: pink;
  font-size: 18px;
}
</style>
