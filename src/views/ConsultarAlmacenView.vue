<template>
    <div>
<EncabezadoAdmComVue></EncabezadoAdmComVue>
<ConsultarAlmacenCompVue></ConsultarAlmacenCompVue>
    </div>
</template>

<script>
import ConsultarAlmacenCompVue from '../components/ConsultarAlmacenComp.vue'
import EncabezadoAdmComVue from "../components/EncabezadoAdmCom.vue"

export default{
    components:{
        EncabezadoAdmComVue,ConsultarAlmacenCompVue
    }
}
</script>