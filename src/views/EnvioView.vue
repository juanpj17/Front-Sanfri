<template>
    <div>
        <EncabezadoClintCompVue :Perfil="$route.params.email"></EncabezadoClintCompVue>
        <ConfirmacionPagoComp :Perfil="$route.params.email"></ConfirmacionPagoComp>
    </div>
</template>

<script>

import EncabezadoClintCompVue from '@/components/EncabezadoClintComp.vue';


import ConfirmacionPagoComp from '../components/ConfirmacionPagoComp.vue';
export default{
    components:{
        EncabezadoClintCompVue,
        ConfirmacionPagoComp
    }
}
</script>