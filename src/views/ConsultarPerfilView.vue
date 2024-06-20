<template>
   <div>
    <EncabezadoClintComp :Perfil="$route.params.email"></EncabezadoClintComp>
    <ConsultarPerfilCompVue :Perfil="$route.params.email"></ConsultarPerfilCompVue>
   </div>
</template>
<script>
import EncabezadoClintComp from '@/components/EncabezadoClintComp.vue';
import ConsultarPerfilCompVue from '@/components/ConsultarPerfilComp.vue';
export default{
    components:{ EncabezadoClintComp, ConsultarPerfilCompVue }
}
</script>