<template>
  <article class="content">
      <div class="post-title">{{ title }}</div>
      <div class="post-meta">
        <time>{{ params.date }}</time>
      </div>
      <div class="post-tags-wrap">
        <div class="post-tag" v-for="tag in formatTags">
          {{ tag }}
        </div>
      </div>
      <SnsShare :title="shareTitle" />
      <div class="post" v-html="bodyHtml"></div>
  </article>
</template>

<script>
import { sourceFileArray } from '../../../../contents/posts/summary.json'
import SnsShare from '~/components/SnsShare.vue'

export default {
  components: {
    SnsShare
  },
  validate({ params }) {
    return sourceFileArray.includes(`contents/posts/markdown/${params.date}_${params.slug}.md`)
  },
  asyncData({ params }) {
    return Object.assign({}, require(`~/contents/posts/json/${params.date}_${params.slug}.json`), { params })
  },
  head() {
    const title = this.title + " | nuxt_blog_template"
    const url = `https://sampple.com/posts/${this.params.date}/${this.params.slug}/`
    const desc = this.description || ''
    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: desc },
        { hid: 'og:description', property: 'og:description', content: desc },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title }
      ],
      link: [{ rel: 'canonical', href: url }]
    }
  },
  computed: {
    formatTags() {
      return this.tags.split(',')
    },
    shareTitle() {
      return this.title + " | nuxt_blog_template"
    }
  }
}
</script>

<style lang="scss" scoped>
.post-title {
  font-size: 26px;
  font-weight: 500;
  padding: 20px 0;
}
.post-meta {
  font-size: .8rem;
}
.post-tags-wrap {
  display: flex;
  padding: 10px 0;
}
.post-tag {
  font-size: .8rem;
  text-align: center;
  padding: 0 .5rem;
  margin: 0 .2rem;
  border: 1px solid #d2d7e5;
}
.post {
  padding: 40px 0;
  font-weight: 300;
  /deep/ {
    .hljs {
      overflow-x: auto;
        padding: 1rem;
    }
    code:not(.hljs) {
      font-size: .9rem;
      margin-right: .2rem;
      margin-left: .2rem;
      background-color: rgba(0,0,0,.06);
    }
    code {
      font-size: .9rem;
      padding: .2em .4em;
      border-radius: 6px;
      font-family: SF Mono,Monaco,Inconsolata,Fira Mono,Droid Sans Mono,Source Code Pro,monospace;
    }
    a {
      text-decoration: none;
      &:hover {
        opacity: .6;
        transition: .2s;
      }
    }
    li {
      padding: 5px 0px;
    }
  }
}
</style>
