<template>
  <b-container class="bv-example-row">
    <b-row>
      <!-- tabla de resumen de compra -->
      <div>
        <b-card bg-variant="light" class="mt-5" footer-bg-variant="secondary">
          <b-table :items="items" :fields="fields" caption-top>
            <template #table-caption>
              <h3>Resumen de compra</h3>
            </template>
            <template #cell(precio)="data">
              {{ data.value }}bs
            </template>
            <template #cell(cantidad)="data">
              {{ data.value }}
            </template>
            <template #cell(nombre)="data">
              {{ data.value }}
            </template>
          </b-table>

          <template #footer>
            <em><h5>Total a pagar</h5></em>
            <h5>{{ calcularTotal() }}bs</h5>
          </template>
        </b-card>
      </div>
      
      <b-col cols="12" md="12" class="mt-5">
        <b-card bg-variant="info" class="bg-info mt-3" text-variant="white">
          <b-card-text><h4>Seleccione forma de pago</h4></b-card-text>
        </b-card>
        <b-card bg-variant="light" class="bg-info mt-3">
          <!-- Radio button de opciones -->
          <b-form-radio-group v-model="selected" :options="options" class="mb-3" value-field="item" text-field="name" disabled-field="notEnabled" size="lg"></b-form-radio-group>
          <hr>
          
          <!-- Formulario de Pago movil -->
          <div class="mt-3" v-if="selected=='B'">
            <b-card bg-variant="info" class="bg-info mt-3">
              <b-card-text>Datos del pago</b-card-text>
            </b-card>
  
            <b-form-group label-for="nested-state" label-cols-sm="3" label-align-sm="right">
              <div class="row">
                <div>
                  <b-alert show variant="success">
                    <h4 class="alert-heading">Coordenadas bancarias</h4>
                    <p>Banco Mercantil</p>
                    <p>Rif J-000122555</p>
                    <p>Telefono 0414-576-7926</p>
                    <p>A nombre de Jugos Sanfri Fruy</p>
                    <hr>
                    <p class="mb-0">Una vez realizado el pago, seleccione Confirmar pago</p>
                  </b-alert>
                </div>
              </div>
            </b-form-group>
            <b-button variant="success" v-on:click="Envio">Confirmar Pago</b-button>
          </div>
          
          <!-- Formulario de transferencias -->
          <div class="mt-3" v-if="selected=='A'">
            <b-card bg-variant="info" class="bg-info mt-3">
              <b-card-text>Datos del pago</b-card-text>
            </b-card>
  
            <b-form-group label-for="nested-state" label-cols-sm="3" label-align-sm="right">
              <div class="row">
                <div>
                  <b-alert show variant="success">
                    <h4 class="alert-heading">Coordenadas bancarias</h4>
                    <p>Banco Mercantil</p>
                    <p>Rif J-000122555</p>
                    <p>Numero de cuenta: 0105-0618-24-8618000191</p>
                    <p>A nombre de Jugos Sanfri Fruy</p>
                    <hr>
                    <p class="mb-0">Una vez realizado el pago, seleccione Confirmar pago</p>
                  </b-alert>
                </div>
              </div>
            </b-form-group>
            <b-button variant="success" v-on:click="Envio">Confirmar Pago</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        
        props: {
            Perfil:'',
        },

        computed: {
            items() {
            return this.orden;
            }
        },

        created() {
            this.orden = this.$root.orden;
            console.log(this.orden);
        },

        methods: {
            calcularTotal() {
            let total = 0;
            for (const item of this.orden) {
                total += item.cantidad * item.precio;
            }
            return total;
            },

            Envio() {
                this.actualizarStock();
                const url = 'https://backend-sanfri.onrender.com/api/pedidos/';    
                const productosJson = JSON.stringify(this.orden); 
                this.axios.post(url, { productos: productosJson })
                .then(response => {
                    this.$root.orden = [];
                    this.$router.push('/EnvioView/' + this.Perfil)
                })
                .catch(error => {
                    console.error(error);
                 });   
            },

            actualizarStock(){
                this.orden.forEach((producto) => {
                    const url = 'https://backend-sanfri.onrender.com/api/productosStock/' + producto.idProducto;
                    console.log(producto.idProducto)
                    this.axios.put(url, { stock: producto.stock }).
                        then(response => {
                            console.log('crack bro');
                        })
                        .catch(error => {
                            console.error(error);
                        });
                })
            }

        },


        data: function() {
            return {
            orden: [],
            calle: '',
            fields: ['nombre', 'cantidad', 'precio'],
            options: [
                { item: 'A', name: 'Transferencia' },
                { item: 'B', name: 'Pago Móvil' }
            ],
            selected: '',
            tipDoc: 'j',
            tipNum: '0414',
            Numtelf: '',
            tipDoc: 'V',
            numDoc: '',
            tipBanco: 'Seleccione un banco',
            Monto: '',
            Clave: '',
            numRef: '',
            MontoTrasf: '',
            tipBancTras: 'Seleccione un banco',
            fecha: ''
            };
        }
    };
</script>
<style  scoped>
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
 
 h2{
    font-family: 'Libre Baskerville', serif;
 }
 .contenedor{
   background-color:#Fff;
;

 }
 h3{
  font-family: 'Libre Baskerville', serif;
  color:#000;
 }
 h6{
  font-family: 'Nunito', sans-serif;
 }
 h5{
  font-family: 'Nunito', sans-serif;
  color:#Fff
 }
</style>