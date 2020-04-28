const getters = {
    allRepo: (state) => state.repoList,
    userProfile: (state) => state.profile,
    readme: (state) => state.readme,
    activePage: (state) => state.activePage,
    allCrumbh: (state) => state.bCrumbh
}

export default {
    getters
}