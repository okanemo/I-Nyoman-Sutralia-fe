const mutations = {
    setList: (state, data) => (state.listUser = data),
    setRoles: (state, data) => (state.roles = [ ...data]),
    setMyRole: (state, data) => (state.role = data),
    updateSuccess: (state, data) => (state.isSuccess = {status: data}),
    setProfile: (state, data) => (state.profile = data)
}

export default {
    mutations
}