<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand" >Stock Trader </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="nav navbar-nav">
                <router-link to="/portfolio" activeClass="active" tag="li" class="nav-link"><a>Portfolio</a> </router-link>
                <router-link to="/stocks" activeClass="active" tag="li" class="nav-link"><a>Stocks</a> </router-link>
            </ul>
             <ul class="nav navbar-nav navbar-right" >
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="endDay">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a  class="nav-link dropdown-toggle" 
                        href="#" 
                        id="navbarDropdownMenuLink" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">Save & Load</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                        <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Funds: {{funds | curency}} </a>
                </li>
            </ul>
        </div>
        </nav> 
    </div>
</template>

<script>
    import { mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                saveDataAction: 'saveData',
                loadDataAction: 'loadData'
            }),
            endDay() {
                console.log('endday'); 
                this.randomizeStocks();   
            },
            saveData() {
                console.log('save-data-1');
                // this.saveDataAction();
                // this.$store.dispatch('saveData');
                const data = {
                    stocks: this.$store.getters.stocks,
                    portfolio: this.$store.getters.stockPortfolio,
                    funds: this.$store.getters.funds
                };
                console.log('save-data-2', data);
                this.$http.put('data.json', data).then (response => {
                    console.log('response',response);
                });
            },
            loadData() {
                console.log('load-data-1');
                this.loadDataAction();
                // this.$store.dispatch('saveData');
                // this.$http.get('data.json').then( response => response.json()).then(res => console.log(res));
            }
        },
        computed: {
            funds() {
            return this.$store.getters.funds;
            }
        },


    }
</script>
