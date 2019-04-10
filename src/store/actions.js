import Vue from 'vue'
import stocks from "../data/stocks";
export const loadData = ({commit}, stocks) => {
    console.log('actions-loaddata');
    Vue.http.get('data.json').then( res => {
        return res.json();
    }).then(data => {
        console.log('actions-21', data);
        console.log('actions-21', data.stocks);
        console.log('actions-21', data.portfolio);
        commit('SET_STOCKS', data.stocks);
        commit('SET_PORTFOLIO', data);
        // commit('LOAD_DATA', responseJSON);
    })
}