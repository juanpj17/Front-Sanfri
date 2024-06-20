<template>
    <div>
        <EncabezadoClintCompVue :Perfil="$route.params.email"></EncabezadoClintCompVue>
       <ResumenCompraVue :Perfil="$route.params.email"></ResumenCompraVue>
    
    </div>
</template>

<script>

import EncabezadoClintCompVue from '@/components/EncabezadoClintComp.vue';
import ResumenCompraVue from '@/components/ResumenCompraVue.vue';

export default{
    components:{
        EncabezadoClintCompVue
        ,ResumenCompraVue
    }
}
</script>