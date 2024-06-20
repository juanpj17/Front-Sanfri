<template>
    <div>
        <EncabezadoAdmComVue></EncabezadoAdmComVue>
        <CatalogoAdminCompVue :ClienteRegistrado="true"></CatalogoAdminCompVue>
    </div>
</template>

<script>
    import CatalogoAdminCompVue from "../components/CatalogoAdminComp.vue";
    import EncabezadoAdmComVue from '../components/EncabezadoAdmCom.vue';

export default{
    components:{
        CatalogoAdminCompVue,EncabezadoAdmComVue
    }
}
</script>