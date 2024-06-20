<template>
  <div class="contenedor">
    <b-container class="bv-example-row">
      <h1>Carrito <b-icon icon="cart4" animation="cylon" font-scale="2"></b-icon></h1>
      <b-row>
        <b-col cols="12" md="12">
          <br>
          <b-card class="mt-5" style="max-width: 1200px;" bg-variant="info" text-variant="white">
            <b-card-title><h2>Total {{ totalPagar() }} Bs</h2></b-card-title>
            <b-card-text><h5>Carrito de articulos</h5></b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="12">
          <b-card no-body class="overflow-hidden" style="max-width: 1200px;" border-variant="primary">
            <b-row no-gutters v-for="producto in orden" :key="producto.id">
              <b-col md="6" cols="12">
                <b-card-img :src="producto.nombreImagen" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body>
                  <b-card-title><h1>{{ producto.nombre }}</h1></b-card-title>
                  <b-card-text><h4>{{ producto.precio }} Bs c/u</h4></b-card-text>
                  <div>
                    <b-form-spinbutton id="sb-inline" inline size="lg" v-model="producto.cantidad"></b-form-spinbutton>
                    <b-button variant="link" @click="eliminarProducto(producto.idProducto)"><h4>Eliminar</h4></b-button>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="12" md="12">
          <b-card style="max-width: 1200px;" border-variant="primary">
            <b-button variant="primary" size="lg" v-on:click="crearPedido">Ir a la caja</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue';


export default {
    props: {
        Perfil: '',
    },

    computed: {
        pedidos() {
        return this.$root.pedidos;
        },
    },

    data() {
        return {
            orden: [],
            pedido: [],
            cliente: '',
        };
    },

    created() {
        this.encontrarCliente();
    },

    methods: {
        redireccionar() {
            this.$router.push('/PagoView/' + this.Perfil);
        },
        contar(){
            return this.cont++
        },

        cargarPedido() {
            const id = this.cliente[0].id;
            this.pedido = this.$root.pedidos;
            this.pedido.forEach((element) => {
                const { nombre, precio, nombreImagen, stock } = element; 
                this.orden.push({
                    idProducto: element.id,
                    idCliente: id,
                    nombre,
                    precio,
                    nombreImagen,
                    stock, 
                    cantidad: 1,
                    total: 0,
                });
            });
        },

        encontrarCliente() {
            const url = 'https://backend-sanfri.onrender.com/api/clientes/' + this.Perfil;
            this.axios
                .get(url)
                .then((response) => {
                this.cliente = response.data;
                this.cargarPedido();
                })
                .catch((error) => {
                console.error('Error al cargar el cliente:', error);
                });
        },

        totalPagar() {
            return this.orden.reduce((acc, { precio, cantidad }) => acc + precio * cantidad, 0);
        },

        eliminarProducto(idProducto) {
            const index = this.orden.findIndex((producto) => producto.idProducto === idProducto);
            if (index !== -1) {
                this.orden.splice(index, 1); 
                const pedidoIndex = this.$root.pedidos.findIndex((producto) => producto.id === idProducto);
                this.$root.pedidos.splice(pedidoIndex, 1); 
            }
        },

        validarCantidad(producto) {
        const stockDisponible = producto.stock;
            if(stockDisponible === 0) {
                swal.fire('No hay productos disponible');
                return;
            }
            if (producto.cantidad > stockDisponible) {
                swal.fire(`La cantidad seleccionada excede el stock disponible (${stockDisponible})`);
                producto.cantidad = stockDisponible; 
            }
        },

        crearPedido() { 
            if (this.orden.length === 0) {
                swal.fire('No hay productos en el carrito');
                return;
            }
            this.orden.forEach((producto) => this.validarCantidad(producto));
            this.orden[0].total = this.totalPagar();
            Vue.observable(this.$root).orden = this.orden;
            this.actualizarStockEnPedido();
            this.redireccionar();
        },

        actualizarStockEnPedido() {
            this.orden.forEach((producto) => {
                if(producto.stock > 0)
                    producto.stock -= producto.cantidad;  
            });
        },


    },
};
</script>

<style  scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
 
    h1{
        font-family: 'Libre Baskerville', serif;
    }
    .contenedor{
        background-color:#Fff;
    }
    h3{
        font-family: 'Libre Baskerville', serif;
    }
    h6{
    font-family: 'Nunito', sans-serif;
    }
    h5{
        font-family: 'Nunito', sans-serif;
    }
    .titulo{
        color: #090;
    }
</style>