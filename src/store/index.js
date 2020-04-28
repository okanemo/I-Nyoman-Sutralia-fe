import Vuex from "vuex";
import Vue from "vue"
import repo from './modules/repo'
import login from './modules/login'
import Users from './modules/users'

//load vue
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        repo,
        login,
        Users
    }
})