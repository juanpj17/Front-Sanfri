<template>
    <div>
        <EncabezadoAdmComVue ></EncabezadoAdmComVue>
         <ModificarProductoComp :id="$route.params.id"></ModificarProductoComp>
    </div>
</template>

<script>
    import EncabezadoAdmComVue from "../components/EncabezadoAdmCom.vue";
    import ModificarProductoComp from "../components/ModificarProductoComp.vue";
    export default{
    components:{
        EncabezadoAdmComVue,ModificarProductoComp
    }
}
</script>