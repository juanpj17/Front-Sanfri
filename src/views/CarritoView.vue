<template>
    <div>
        <EncabezadoClintCompVue :Perfil="$route.params.email"></EncabezadoClintCompVue>
       <CarritoCardComp :Perfil="$route.params.email"></CarritoCardComp>
    
    </div>
</template>

<script>
import CarritoCardComp from '@/components/CarritoCardComp.vue';
import EncabezadoClintCompVue from '@/components/EncabezadoClintComp.vue';

export default{
    components:{
        CarritoCardComp,EncabezadoClintCompVue,
    }
}
</script>