import stocks from '../../data/stocks';

import { loadData } from './../actions';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks){
        console.log('state-data-stocks', stocks);
        state.stocks = stocks;
        console.log('nicu', state.stocks);


    },
    'RND_STOCKS' (state){
        console.log('RND_STOCKS', state.stocks);
        state.stocks.map((stock) => {
            // console.log(stock.price);
            // console.log('nicu-test',stocks);
            let max = stock.price + 10;
            let min = stock.price - 10;
            stock.price = Math.floor(Math.random() * (max - min + 1) + min);
            // console.log('nicu', nicu);
        });
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        console.log('stocks buyStock');
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        console.log('initStocks', stocks);
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    },
    // loadData: ({commit}) => {
    //     loadData(commit, 'stocks')
    // }
};

const getters = {
    stocks: state => {
        console.log('stocks-price', state.stocks);
        return state.stocks;

    }
}

export default {
    state,
    mutations, 
    actions,
    getters
}