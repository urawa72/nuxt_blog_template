<template>
  <div class="sidebar-wrap" :class="{ 'open' : isOpen }">
    <NavLinks />
  </div>
</template>

<script>
import NavLinks from '~/components/NavLinks.vue'

export default {
  name: "NavSidebar",
  components: {
    NavLinks
  },
  props: {
    isOpen: Boolean
  }
}
</script>

<style lang="scss" scoped>
.sidebar-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 70%;
  max-width: 300px;
  height: 100%;
  background: #f8f8f8;
  transition: .3s ease-in-out;
  transform: translate(-105%);
  &.open {
    transform: translate(0%);
    box-shadow: 6px 0 25px rgba(0,0,0,.15);
  }
}
</style>
