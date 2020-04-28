const mutations = {
    setToken: (state, token) => {
        console.log('token mutation', token)
        return state.token = token.token
    }
}

export default {
    mutations
}