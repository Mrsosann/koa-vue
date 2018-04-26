<template>
  <div>
    <Header></Header>
    {{ user.name }}'s content page
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
      user: {}
    }
  },
  created () {
    this.user.name = this.$route.params.name
  }
}
</script>
