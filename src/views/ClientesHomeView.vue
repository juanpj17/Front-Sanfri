<template>
    <div>
    <EncabezadoClintComp :Perfil="$route.params.email"></EncabezadoClintComp>
    <CarruselComp></CarruselComp>
    </div>
</template>

<script>
import EncabezadoClintComp from '@/components/EncabezadoClintComp.vue';
import CarruselComp from '@/components/CarruselComp.vue';
export default{
    components:{
        EncabezadoClintComp,CarruselComp
    }
}
</script>