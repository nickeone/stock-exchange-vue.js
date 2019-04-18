<template>
    
        <div class="col-sm-6 col-md-4">
            <div class="panel panel-success">
                <div class="panel-heading">
                    <h3 class="panel-title" > {{stock.name}} <small> (Price:{{stock.price}}) </small> </h3>
                </div>
                <div class="panel-body d-flex ">
                    <div class="mr-left p-4">
                        <input  type="number" 
                                class="form-control " 
                                :class="{danger: insufficientFunds}"
                                placeholder="Quantity"
                                v-model="quantity"
                                >
                    </div>
                    <div class="mr-right p-4">
                        <button 
                            type="button" 
                            class="btn btn-success"
                            @click="buyStock"
                            :disabled="insufficientFunds ||quantity <= 0"
                            >{{insufficientFunds ? 'no funds':'Buy'}}</button>  

                            
                    </div>
                </div> 
<!--                {{stock}}-->

                
            </div>
        </div>
    
</template>

<script>
    import { EventBus } from '../../main.js'

    export default {     
        data() {
            return {
                quantity: 0,
            }
        },
        props: ['stock'],       
        methods: {
            buyStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                console.log('buyStock stocks stock ',order);
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds
            }
        }
    }    

</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

