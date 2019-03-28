<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        components: {
            'app-header': Header
        },
        created() {
            // console.log(this.$store.state);
            this.$store.dispatch('initStocks');
            // this.$store.dispatch('buyStock', 4);

        }
    }
</script>

<style>

</style>
