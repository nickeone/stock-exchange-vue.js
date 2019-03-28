import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks){
        // console.log(stocks);
        state.stocks = stocks;

    },
    'RND_STOCKS' (state){

    }
};

const actions = {
    buyStock: ({commit}, order) => {
        console.log('stocks buyStock');
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        console.log('initStocks');
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {
    state,
    mutations, 
    actions,
    getters
}