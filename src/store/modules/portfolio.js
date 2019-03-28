
const state = {
    funds: 10000, 
    stocks: []
};


const mutations = {
    'BUY_STOCK'(state, {stockId, stockPrice, quantity}) { 
        console.log('BUY_STOCK mutations');
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
    }// care e diferenta intre record.quantity si state.stocks.quantity?
};



const actions = {
    sellStock: ({commit}, order) => {
        console.log('portfolio sellStock');
         commit('SELL_STOCK', order); // la ce se refera order aici? 
    },
    nicuStock: ({commit}, order) => {
        commit('BUY_STOCK', order); // la ce se refera order aici? 
    }
};

// poti accesa actions > modules/stocks care apeleasa 'BUY_STOCK' din modules/portfolio

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock =>{
            const record = getters.stocks.find(el => el.id == stock.id); // de unde vine stock.id aici? 
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