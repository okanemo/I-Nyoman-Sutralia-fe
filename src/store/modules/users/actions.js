import axios from 'axios'
const actions = {
    async getUsers({ commit }) {
        try {
            let { data } = await axios.get('/users')
            if (data) commit('setList', data)
        } catch (error) {
            console.log('e', error)
        }
    },

    async getRoles({ commit }) {
        try {
            let { data } = await axios.get('/roles')
            if (data) commit('setRoles', data)
        } catch (error) {
            console.log(error)
        }
    },

    async getUserRole({ commit }, id) {
        try {
            let { data } = await axios.get('/user-role/'+id)
            if (data) commit('setMyRole', data)
        } catch (error) {
            console.log(error)
        }
    },

    async updateRole({commit}, payload) {
        try {
            let { data } = await axios.patch('/user-role/'+payload.id, {roleId: payload.roleId})
            if (data) commit('updateSuccess', true)
        } catch (error) {
            console.log(error)
        }
    },

    async getProfile({ commit }) {
        try {
            let { data } = await axios.get(`/user/get-profile`)
            if (data) commit('setProfile', data)
        } catch (error) {
            console.log(error)
        }
    },

    async updateProfile({commit}, param) {
        try {
            let { data } = await axios.patch(`/update-profile`, param)
            if (data) commit('isUpdate', data)
        } catch (error) {
            console.log(error)
        }
    }
}

export default {
    actions
}