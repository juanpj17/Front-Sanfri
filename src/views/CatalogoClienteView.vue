<template>
    <div>
        <EncabezadoClintCompVue :Perfil="$route.params.email"></EncabezadoClintCompVue>
        <CatalogoCompVue :ClienteRegistrado="true"></CatalogoCompVue>
    </div>
</template>

<script>
import CatalogoCompVue from "../components/CatalogoComp.vue";
import EncabezadoClintCompVue from '../components/EncabezadoClintComp.vue';

export default{
    components:{
        CatalogoCompVue,EncabezadoClintCompVue
    }

}
</script>