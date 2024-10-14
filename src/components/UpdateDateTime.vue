<template>
    <div class="text-center flex flex-col items-center justify-center h-screen ">
        <div class="glassmorphism p-8  w-80">
            <h1 class=" text-5xl font-bold text-blue-500">زمان فعلی :</h1>
            <span class="text-3xl ">{{ currentDateTime }}</span>
        </div>
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



