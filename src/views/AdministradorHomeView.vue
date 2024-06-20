<template>
    <div>
        <EncabezadoAdmComVue></EncabezadoAdmComVue>
        <CarruselComp></CarruselComp>
    </div>
</template>

<script>
    import EncabezadoAdmComVue from "../components/EncabezadoAdmCom.vue"
    import CarruselComp from "@/components/CarruselComp.vue";
export default{
    components:{
        EncabezadoAdmComVue,CarruselComp
    }
}
</script>