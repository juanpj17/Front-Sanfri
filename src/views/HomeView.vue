<template>
  <div class="home">
    <EncabezadoComp></EncabezadoComp>
<CarruselComp></CarruselComp>
  </div>
</template>

<script>
// @ is an alias to /src
import EncabezadoComp from '@/components/EncabezadoComp.vue'
import CatalogoComp from '@/components/CatalogoComp.vue';
import ConsultarPerfilComp from '@/components/ConsultarPerfilComp.vue';
import TablaClientesCompleta from '@/components/TablaClientesCompleta.vue';
import CrearProductoComp from '@/components/CrearProductoComp.vue';
import CarruselComp from '@/components/CarruselComp.vue';


export default {
  
  name: 'HomeView',
  components: {EncabezadoComp,CatalogoComp, ConsultarPerfilComp,TablaClientesCompleta,CrearProductoComp,CarruselComp  
  },
  methods:{
    BloquearBotonAtras(){
      window.location.hash="no-back-button";
      window.location.hash="Again-No-back-button";//esta linea es necesaria para chrome
      window.onhashchange=function(){window.location.hash="no-back-button";}
    }
  },
  created(){               
    this.BloquearBotonAtras();
       },
  
}
</script>
