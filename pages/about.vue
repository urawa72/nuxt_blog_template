<template>
  <div class="content">
    <div class="page-title">About</div>
    <div class="other-text" v-html="about"></div>
  </div>
</template>

<script>
import about from '~/contents/others/about.md'

export default {
  computed: {
    about() {
      return about
    }
  }
}
</script>

<style lang="scss" scoped>
.other-text {
  /deep/ {
    .hljs {
      overflow-x: auto;
    }
  }
}
</style>
