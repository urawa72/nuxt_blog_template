<template>
  <div class="post">
    <div class="post__title">
      <a :href="formatUrl" class="post__link">{{ post.title }}</a>
    </div>
    <div class="post__date">
      {{ formatDate }}
    </div>
    <div class="post__tags-wrap" v-for="tag in formatTags">
      <div class="post__tag">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object
  },
  data() {
    return {
      baseParam: []
    }
  },
  mounted() {
    this.baseParam = this.post.sourceBase.replace('.md', '').split('_')
  },
  computed: {
    formatDate() {
      return this.baseParam[0]
    },
    formatTags() {
      return this.post.tags.split(',')
    },
    formatUrl() {
      return `/posts/${this.baseParam[0]}/${this.baseParam[1]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  padding: 30px 0;
  &__title {
    font-size: 24px;
    font-weight: 500;
  }
  &__link {
    color: #444;
    text-decoration: none;
    &:hover {
      opacity: .6;
      transition: .2s;
    }
  }
  &__date {
    font-size: .8rem;
    color: gray;
    padding: 10px 0;
  }
  &__tags-wrap {
    display: inline-block;
    padding: 10px 0;
  }
  &__tag {
    font-size: .8rem;
    padding: 0 .5rem;
    margin: 0 .2rem;
    border: 1px solid #d2d7e5;
  }
}
</style>
