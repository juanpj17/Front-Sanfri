<template>
    <div>
        <EncabezadoCompVue></EncabezadoCompVue>
        <CatalogoCompVue :ClienteRegistrado="false"></CatalogoCompVue>
    </div>
</template>

<script>
import CatalogoCompVue from "../components/CatalogoComp.vue";
import EncabezadoCompVue from  "../components/EncabezadoComp.vue";
export default{
    components:{
        CatalogoCompVue,EncabezadoCompVue
    }
}
</script>