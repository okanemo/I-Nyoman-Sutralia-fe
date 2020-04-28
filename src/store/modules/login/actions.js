import axios from 'axios'
const actions = {
    async authenticate({ commit }, payload) {
        try {
            let { data }  = await axios.post('/authentication', payload)
            if (data.token) {
                localStorage.setItem('token', data.token)
                commit('setToken', data)
            }
        } catch (error) {
            throw Error(error)
        }
    }
}

export default {
    actions
}