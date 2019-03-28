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
             <ul class="nav navbar-nav navbar-right">
                <li class="nav-item">
                        <a class="nav-link" href="#">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a  class="nav-link dropdown-toggle" 
                        href="#" 
                        id="navbarDropdownMenuLink" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">Save & Load</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Save Data</a>
                        <a class="dropdown-item" href="#">Load Data</a>
                    </div>

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Funds: {{funds}} $ </a>
                    
                </li>
            </ul>
        </div>
        </nav> 
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
