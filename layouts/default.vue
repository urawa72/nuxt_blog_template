<template>
  <div class="container">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>
