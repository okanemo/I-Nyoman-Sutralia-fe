const getters = {
    allUser: (state) => state.listUser,
    allRoles: (state) => state.roles,
    roleUser: (state) => state.role,
    isSuccess: (state) => state.isSuccess,
    profile: (state) => state.profile,
    isUpdate: (state) => state.update
}

export default {
    getters
}