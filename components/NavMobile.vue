<template>
  <div>
    <div class="mobile-nav-inner">
      <div class="burger" @click="toggleSidebar">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </div>
      <Logo />
    </div>
    <NavSidebar :isOpen="isOpen" />
    <div v-if="isOpen" class="mobile-nav-bg" @click="closeSidebar"></div>
  </div>
</template>

<script>
import NavSidebar from '~/components/NavSidebar.vue'
import Logo from '~/components/Logo.vue'

export default {
  name: "NavMobile",
  components: {
    NavSidebar,
    Logo
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    },
    closeSidebar() {
      if (this.isOpen) { this.isOpen = false }
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-nav-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: #000;
  opacity: .7;
}
.mobile-nav-inner {
  height: 8vh;
  padding: 10px 20px;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
.burger {
  position: absolute;
  height: 16px;
  width: 25px;
  left: 30px;
  z-index: 2;
}
.burger-line {
  position: absolute;
  width: 25px;
  height: 2px;
  border-radius: 2px;
  opacity: .5;
  cursor: pointer;
  background-color: #000;
  &:first-child {
    top: 0;
  }
  &:nth-child(2) {
    top: 8px;
  }
  &:last-child {
    top: 16px;
  }
}
.logo {
  padding: 0 30px;
  width: 50px;
  height: 50px;
}
</style>
