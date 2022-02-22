export const state = () => ({
  users: [],
  meta: {
    current_page:0,
    last_page: 4
  }
})
export const mutations = {
    SET_USERS( state, users ){
        state.users = users
      },
    SET_META( state, current_page ){
        state.meta.current_page = parseInt(current_page)
    }
}

export const actions = {
    setUsers({commit}, users){
         commit('SET_USERS', users)
    },
    setMeta({commit}, current_page){
         commit('SET_META', current_page)
    },
    async nuxtServerInit({ commit }) {
    let users = await this.$axios.get('user')
    commit('SET_USERS', users.data.data),
    commit('SET_META', users.data.page)
  }
}



