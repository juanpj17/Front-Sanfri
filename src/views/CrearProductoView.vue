<template>
    <div>
        <EncabezadoAdmComVue></EncabezadoAdmComVue>
        <CrearProductoComp></CrearProductoComp>
    </div>
</template>

<script>
    import EncabezadoAdmComVue from "../components/EncabezadoAdmCom.vue"
    import CrearProductoComp from "@/components/CrearProductoComp.vue";
    export default{
    components:{
        EncabezadoAdmComVue,CrearProductoComp 
    }
}
</script>