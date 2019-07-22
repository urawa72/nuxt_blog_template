<template>
  <div v-if="postList.length > 0">
    <Post v-for="post in postList" :post="post":key="post.id" />
    <div class="more" v-if="isActive" @click="getMore()">More...</div>
  </div>
  <div v-else>
    <p style="text-align: center;">Loading...</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Post from '~/components/Post.vue'

export default {
  name: 'Posts',
  components: {
    Post
  },
  data() {
    return {
      isActive: true
    }
  },
  mounted() {
    this.getPostList()
    this.judgeMoreActive
  },
  computed: {
    ...mapState(
      'posts', ['postList', 'lastFlg', 'count', 'current', 'next']
    ),
    judgeMoreActive() {
      if (this.lastFlg) {
        this.isActive = false
      }
    }
  },
  methods: {
    ...mapActions(
      'posts', ['getPostList']
    ),
    getMore() {
      this.getPostList()
      this.judgeMoreActive
    }
  }
}
</script>

<style lang="scss" scoped>
.more {
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  color: gray;
  &:hover {
    opacity: .6;
    transition: .2s;
  }
}
</style>
