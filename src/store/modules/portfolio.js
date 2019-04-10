
const state = {
    funds: 10000, 
    stocks: [],
    savedStocks: []
};

const mutations = {
    'BUY_STOCK'(state, {stockId, stockPrice, quantity}) { 
        console.log('initialPortfolioStock', state.stocks);
        const record = state.stocks.find( el => el.id == stockId);
        console.log('record-buy', record);
        if(record) { // 
            record.quantity = parseInt(record.quantity); 
            record.quantity += parseInt(quantity);
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
            console.log('boughtStocks', state.stocks)
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, {stockId, stockPrice, quantity}) {
        console.log('SELL_STOCK mutations');
        const record = state.stocks.find( el => el.id == stockId);
        console.log('record-sell', record);
        if(record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO'(state, data) {
        console.log("stock-data", data.funds);
        state.funds = data.funds;
        console.log('state-stocks', state.stocks);
        console.log('state-data-portfolio', data);
        state.stocks = data.portfolio;
        console.log('state-data-portfolio', state.savedStocks);
    }
    // 'SAVE_DATA' (state){
    //     console.log('savedata-3');
    //     state.savedStocks = [...state.stocks];
    //     console.log('Stocks', state.stocks);
    //     console.log('savedStocks', state.savedStocks);
    // },
    // 'LOAD_DATA' (state){
    //     console.log('LOAD-data-3');
    //     console.log('Stocks1', state.stocks);
    //     console.log('savedStocks1', state.savedStocks);
    //     state.stocks = [...state.savedStocks];
    //     console.log('Stocks2', state.stocks);
    //     console.log('savedStocks2', state.savedStocks);
    // }
};



const actions = {
    sellStock: ({commit}, order) => {
        console.log('portfolio sellStock');
         commit('SELL_STOCK', order); // la ce se refera order aici? 
    },
    saveData: ({commit}) => {
        console.log('save-data-2');
        commit('SAVE_DATA');
    },
    // loadData: ({commit}) => {
    //     console.log('load-data-2');
    //     commit('LOAD_DATA');
    // }

};

// poti accesa actions > modules/stocks care apeleasa 'BUY_STOCK' din modules/portfolio

const getters = {
    stockPortfolio (state, getters) {
        console.log('stocks-portfolio-1', state);
        console.log('stock23', getters);
        return state.stocks.map(stock =>{
            const record = getters.stocks.find(el => el.id == stock.id); // de unde vine stock.id aici?
            console.log('stocks-portfolio', state.stocks);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds (state) {
        return state.funds;
    }
};

export default {
    state, 
    mutations, 
    actions,
    getters
}


// stockPortfolio (state, getters) {
//     console.log('stocks-portfolio-1', state);
//     console.log('stock23', getters);
//     return state.stocks.map(stock =>{
//         const record = getters.stocks.find(el => el.id == stock.id); // de unde vine stock.id aici?
//         console.log('stocks-portfolio', state.stocks);
//         return {
//             id: stock.id,
//             quantity: stock.quantity,
//             name: record.name,
//             price: record.price
//         }
//     })
// },