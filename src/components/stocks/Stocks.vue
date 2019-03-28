<template>
    <div>
        <h1>The Stocks Template</h1>
        <app-stock v-for="stock in stocks" :stock="stock" action-type="buy"
        ></app-stock>
    </div>

</template>

<script>
    import Stock from './Stock.vue'

    export default {
        // data(){
        //     return {
        //         stocks: [
            
        //         ],
                
        //     }
        // },
        components: {
            appStock: Stock
        },
        computed: {
            stocks(){
                return this.$store.getters.stocks;
                
            }
        }
    }
</script>
