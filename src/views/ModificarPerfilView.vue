<template>
    <div>
        <EncabezadoClintCompVue :Perfil="$route.params.email"></EncabezadoClintCompVue>
        <ModificarPerfilComp :Perfil="$route.params.email"></ModificarPerfilComp>
    </div>
</template>

<script>
import ModificarPerfilComp from "../components/ModificarPerfilComp.vue";
import EncabezadoClintCompVue from '../components/EncabezadoClintComp.vue';

export default{
    components:{
        ModificarPerfilComp,EncabezadoClintCompVue
    }

}
</script>