export default {
    namespaced: true,
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        // adicionarProduto(context, payload) {
        // adicionarProduto({ commit, state, rootState }, payload) { //state = state do módulo, rootState = state global
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                // context.commit('adicionarProduto', payload)
                commit('adicionarProduto', payload)
            }, 1000)
        }

        // adicionarProduto: {
        //     root: true, // retira a action do namespace e manda para o root
        //     handler({ commit }, payload) {
        //         setTimeout(() => {
        //             // context.commit('adicionarProduto', payload)
        //             commit('adicionarProduto', payload)
        //         }, 1000)
        //     }
        // }
    }
}