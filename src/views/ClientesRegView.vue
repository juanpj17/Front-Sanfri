<template>
    <div>
    <EncabezadoAdmCom></EncabezadoAdmCom>
    <TablaClientesCompleta></TablaClientesCompleta>
    </div>
</template>
<script>
// @ is an alias to /src
import EncabezadoAdmCom from '@/components/EncabezadoAdmCom.vue'
import TablaClientesCompleta from '@/components/TablaClientesCompleta.vue';


export default {

  components: {EncabezadoAdmCom,TablaClientesCompleta
    
  }
}
</script>