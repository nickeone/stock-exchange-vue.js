<template>
  
    <div>
        <h1>The Portfolio component</h1>
        <app-stock-portfolio v-for="stock in stocks" :stock="stock"></app-stock-portfolio>

        {{localStock}}
    </div>
</template>

<script>
import Stock from './Stock.vue';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    components: {
        appStockPortfolio: Stock
    }   
}
</script>
