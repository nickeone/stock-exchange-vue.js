<template>
    
        <div class="col-sm-6 col-md-4">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title" > {{stock.name}} <small> (Price:{{stock.price}} | Quantity: {{stock.quantity}}) </small> </h3>
                </div>
                <div class="panel-body d-flex ">
                    <div class="mr-left p-4">
                        <input  type="number" 
                                class="form-control " 
                                :class="{danger: insufficientQuantity}"
                                placeholder="Quantity"
                                v-model="quantity"
                                >
                    </div>
                    <div class="mr-right p-4">
                        <button 
                            type="button" 
                            class="btn btn-success"
                            @click="sellStock"
                            :disabled="insufficientQuantity || quantity <= 0"
                            >{{ insufficientQuantity ? 'Not stocks' : 'Sell'}}</button>        
                    </div>
                </div> 
                <!-- stock-portfolio{{stock}} -->
                stock-props{{stock.quantity}}
                
            </div>
        </div>
    
</template>



<script>
    import {mapActions} from 'vuex';

    export default {    
        data() {
            return {
                quantity: 0,
            }
        },
        props: ['stock'],
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                console.log('sell-portfolio-oreder', order);
                this.placeSellOrder(order); 
                this.quantity = 0;
            }
        },
        computed: {
   
            insufficientQuantity(){
                return this.quantity > this.stock.quantity;
            }
        }
    }    
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>