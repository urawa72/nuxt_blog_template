<template>
  <header class="header">
    <div class="desktop-nav">
      <NavDesktop />
    </div>
    <div class="mobile-nav">
      <NavMobile />
    </div>
  </header>
</template>

<script>
import NavMobile from "~/components/NavMobile.vue"
import NavDesktop from "~/components/NavDesktop.vue"

export default {
  components: {
    NavMobile,
    NavDesktop
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 0 4px rgba(0,0,0,.15);
}
/* レスポンシブ */
.mobile-nav {
  @include mq-up(md) {
    display: none;
  }
}
.desktop-nav {
  @include mq-down(md) {
    display: none;
  }
}
</style>
