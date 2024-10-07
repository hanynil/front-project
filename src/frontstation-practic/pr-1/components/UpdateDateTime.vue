<script>
    export default{
          
        data(){
            return{
                currentDateTime: "",
            }; 
        },
        methods:{
            updateDateTime(){
                const now = new Date();
                this.currentDateTime = now.toLocaleString();        
            },
        },
        mounted(){
            this.updateDateTime();
            this.intervalId = setInterval(this.updateDateTime,1000);
        },
        beforeDestroy(){
            clearInterval(this.intervalId);
        },

    };
</script>

<template>
 <div>
    <h1>زمان فعلی :</h1>
    <span id="datetime">{{ currentDateTime }}</span>
 </div>
</template>

