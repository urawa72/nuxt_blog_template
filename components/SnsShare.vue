<template>
  <div class="sns-list">
    <a class="sns-link" :href="getUrl(twitter)" target="_blank" rel="nofollow"><i class="fab fa-twitter"></i></a>
    <a class="sns-link" :href="getUrl(hatebu)" target="_blank" rel="nofollow"><b>B!</b></a>
    <a class="sns-link" :href="getUrl(pocket)" target="_blank" rel="nofollow"><i class="fab fa-get-pocket"></i></a>
  </div>
</template>

<script>
export default {
  name: "SnsShare",
  props: {
    title: String
  },
  data() {
    return {
      params: [
        `https://sample.com${this.$route.path}`,
        this.title
      ],
      twitter: "https://twitter.com/intent/tweet?url={0}&amp;text={1}",
      hatebu: "https://b.hatena.ne.jp/add?mode=confirm&amp;url={0}&amp;title={1}",
      pocket: "http://getpocket.com/edit?url={0}&title={1}"
    }
  },
  methods: {
    getUrl(sns) {
      return this.formatByArr(sns, this.params)
    },
    formatByArr(snsUrl, params) {
      params = params.map(x => encodeURIComponent(x))
      return snsUrl.replace(/\{(\d+)\}/g, (m, k) => {
        return params[k]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sns-list {
  display: flex;
  list-style: none;
  padding: 30px 0 10px;
  margin: auto;
 }
 .sns-link {
  text-decoration: none;
  font-size: 1.5rem;
  color: #000;
  opacity: .7;
  margin: 0 10px;
 }
</style>
