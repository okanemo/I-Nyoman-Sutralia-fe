import getters from './getters'
import actions from './actions'
import state from './state'
import mutations from './mutations'

export default {
    state: state.state,
    getters: getters.getters,
    actions: actions.actions,
    mutations: mutations.mutations
}