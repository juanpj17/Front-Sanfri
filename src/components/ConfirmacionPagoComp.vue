<template>
<b-container  class="bv-example-row ">
    <b-row>
        <b-card bg-variant="info" class=" bg-info mt-3" >
          <div>
  <b-alert show variant="success">
   
    <h1 class="alert-heading">Su pago esta siendo procesado</h1>
    <h3 class="alert-heading">Su numero de orden es: {{ this.ID }}</h3>
     <h3>Cuando sea confirmado un vendedor se contactara con usted</h3>

    
    <hr>
    <p class="mb-1">
      Si tiene alguna pregunta puede contactarnos por los siguientes medios
    </p>
    <p class="mb-1">
     Correo: SanfriFruy@gmail.com
    </p>
    <p class="mb-1">
     Telefono de la sede Caracas: 0424-576-7916
    </p>
    <p class="mb-1">
     Telefono del vendedor de la zona de Distrito Capital: 0424-579-7123
    </p>
    <p class="mb-1">
     Telefono del vendedor de la zona de los llanos: 0424-988-9234
    </p>
    
  </b-alert>
</div>
        </b-card>
       
    </b-row>
</b-container>
  
</template>

<script>

export default {
    data() {
      return {
         Estado:'',
         Ciudad:'',
         Direccion:'',
         Telefono:'',
         Pedidos:'',
         ID:'',


        };
      },
      created() {
    this.cargarPedido();
  },

  methods: {
    cargarPedido() {
      const url = 'https://backend-sanfri.onrender.com/api/pedidos/';
      this.axios.get(url)
        .then(response => {
          this.Pedidos = response.data;
          this.mostrarID();
        })
        .catch(error => {
          console.error('Error al cargar los pedidos:', error);
        });
    },
    mostrarID(){
      const [last] = this.Pedidos.slice(-1);
      this.ID=last.id;  
    }
  }
    
      }
</script>