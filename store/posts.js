import { fileMap, sourceFileArray } from '../contents/posts/summary.json'

export const state = () => ({
  postList: [],
  firstFlg: true,
  lastFlg: false,
  count: 0,
  current: 0,
  next: 10
})

export const mutations = {
  postLoaded(state, result) {
    state.postList.push(...result.list)
    state.current += 10
    state.next += 10
    if (state.firstFlg) {
      state.count = result.count
      state.firstFlg = false
    }
    if (state.postList.length === state.count) {
      state.lastFlg = true
    }
  }
}

export const actions = {
  getPostList({commit, state}) {
    if (state.firstFlg) {
      sourceFileArray.reverse()
    }
    let result = { list: [], count: 0 }
    for (let file of sourceFileArray.slice(state.current, state.next)) {
      let path = file.replace("posts/markdown","posts/json").replace(".md",".json")
      result.list.push(fileMap[path])
    }
    result.count = sourceFileArray.length
    commit('postLoaded', result)
  }
}
