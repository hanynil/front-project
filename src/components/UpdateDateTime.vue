<template>
    <div class="text-center">
       <h1 class="text-4xl font-bold text-blue-500">زمان فعلی :</h1>
       <span>{{ currentDateTime }}</span>
    </div>
</template>

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



