export const productItemStore = {
    state () {
        return {
            data: []
        }
    },
    mutations: {
        mutationProductItemStore(state, data) {
            state.data = data.payload
        },
        mutationDeleteProductItemStore(state, data) {
            state.data = JSON.parse(localStorage.getItem('productArray')).filter(item => item.id !== data.payload)
            localStorage.setItem('productArray', JSON.stringify(state.data))
        },
        mutationAddProductItemStore(state, data) {
            state.data = data.payload
        },
        mutationSortProductItemStore(state, data) {
            console.log('test'.localeCompare('atest'))
            if(data.payload === 'max') {
                console.log()
                state.data = JSON.parse(localStorage.getItem('productArray')).sort((a,b) => b['priceProduct'].replace(/\s/g,'') - a['priceProduct'].replace(/\s/g,''))
            }
            if(data.payload === 'min') {
                state.data = JSON.parse(localStorage.getItem('productArray')).sort((a,b) => a['priceProduct'].replace(/\s/g,'') - b['priceProduct'].replace(/\s/g,''))
            }
            if(data.payload === 'name') {
                state.data = JSON.parse(localStorage.getItem('productArray')).sort((a,b) => a['nameProduct'].localeCompare(b['nameProduct']))
            }

        }
    },
    actions: {
        getProductItemStore (data, payload) {
            data.commit('mutationProductItemStore', { data, payload })
        },
        deleteProductItemStore (data, payload) {
            data.commit('mutationDeleteProductItemStore', { data, payload })
        },
        addProductItemStore (data, payload) {
            data.commit('mutationAddProductItemStore', { data, payload })
        },
        sortProductItemStore (data, payload) {
            data.commit('mutationSortProductItemStore', { data, payload })
        }
    }
}
