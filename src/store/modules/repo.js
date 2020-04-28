import axios from 'axios'

const state = {
    repos: [],
    profile: {
        avatar_url: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
    },
    readme: {
        content: ''
    },
    activePage: {
        status: true,
        isSearch: true,
        loading: false
    },
    bCrumbh: [
        {
            name: 'home',
            descr: 'Home'
        }
    ],
    homestate : {
        name: 'home',
        descr: 'Home'
    }
}

const getters = {
    allRepo: (state) => state.repoList,
    userProfile: (state) => state.profile,
    readme: (state) => state.readme,
    activePage: (state) => state.activePage,
    allCrumbh: (state) => state.bCrumbh
}

const actions = {
    async fetchRepo({commit}, params) {
        try {
            commit('pageUpdate', {status: true, loading: true})
            const {data} = await axios.get(`https://api.github.com/search/users?q=${params.email}`)
            const username = data.items[0].login
            const response = await axios.get(`https://api.github.com/users/${username}/repos`)
            commit('setListRepo', response.data)
            commit('setProfile', response.data[0].owner)
            commit('bCrumbhUpdate', [{name: 'home', descr: 'Home'}, {name: 'repositories', 'descr': 'Repositories'}])
            commit('pageUpdate', {isRepos: true, status: true, loading: false})
        } catch (error) {
            commit('bCrumbhUpdate', [{name: 'home', descr: 'Home'}, {name: 'repositories', 'descr': 'Repositories'}])
            commit('pageUpdate', {isRepos: false, state: false, loading: false})
        }
    },

    async getReadme ({commit}, params) {
        try {
            commit('pageUpdate', {status: true, loading: true})
            let data = {}
            if (params.email) {data = await axios.get(`https://api.github.com/search/users?q=${params.email}`)}
            params.owner = params.email ? data.data.items[0].login : params.owner 
            
            const response = await axios.get(`https://api.github.com/repos/${params.owner}/${params.repo}/readme`)
            commit('setReadme', response.data)
            commit('bCrumbhUpdate', [{name: 'home', descr: 'Home'}, {name: 'repositories', 'descr': 'Repositories'}, {name: 'readme', descr: 'Readme'}])
            commit('pageUpdate', {isReadme: true, status: true})
        } catch (error) {
            commit('bCrumbhUpdate', [{name: 'home', descr: 'Home'}, {name: 'repositories', 'descr': 'Repositories'}, {name: 'readme', descr: 'Readme'}])
            commit('pageUpdate', {isReadme: false, status: false, loading: false})
        }
    },

    goHome ({commit}) {
        commit('bCrumbhUpdate', [{name: 'home', descr: 'Home'}])
        commit('pageUpdate', {status: true, isSearch:true, loading: false})
    }
}

const mutations = {
    setListRepo: (state, repoList) => (state.repoList = repoList),
    setProfile: (state, owner) => {
        return (state.profile = owner)
    },
    setReadme: (state, readme) => (state.readme = readme),
    pageUpdate: (state, page) => (state.activePage = page),
    bCrumbhUpdate: (state, newpage) => {state.bCrumbh = newpage}
}

export default {
    state,
    getters,
    actions,
    mutations
}