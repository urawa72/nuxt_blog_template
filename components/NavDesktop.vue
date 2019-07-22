 <template>
  <div class="desktop-nav-inner">
    <Logo />
    <NavLinks />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavLinks from '~/components/NavLinks.vue'

export default {
  name: "NavDesktop",
  components: {
    Logo,
    NavLinks
  }
}
</script>

<style lang="scss" scoped>
.desktop-nav-inner {
  z-index: 1;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
}
</style>
