<template>
    <div>
        <h1>Trade or view your Portfolio</h1>
        <br>
        <h4>You may Save & Load your Data</h4>
        <h4>Click on End Day to begin a New Day</h4>
        <br>
        <h4>Your funds: {{funds}} $</h4>
      
    </div>
  
</template>

<script>


export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>

