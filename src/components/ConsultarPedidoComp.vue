<template>
  <b-container class="bv-example-row">
    <b-row>

      <div>
        <b-card bg-variant="light" class="mt-5" footer-bg-variant="secondary">
          <b-table :items="items" :fields="fields" caption-top>
            <template #head(Pedido)="data">
              <span class="text-primary">{{ data.label.toUpperCase() }}</span>
            </template>
            <template #head(Cantidad)="data">
              <span class="text-primary">{{ data.label.toUpperCase() }}</span>
            </template>
            <template #head(Monto)="data">
              <span class="text-primary">{{ data.label.toUpperCase() }}</span>
            </template>
            <template #cell(masInf)="data">
              <b-button variant="primary" size="sm" @click="verMasInfo(data.item)">
                inf.
              </b-button>
            </template>
            <template #cell(cancelarPedido)="data">
              <b-button variant="danger" size="sm" @click="cancelarPedido(data.item)">
                Cancelar
              </b-button>
            </template>

            <template #cell(detallePedido)="data">
              <b-button variant="primary" size="sm" @click="verMasInfo(data.item)">
                Detalles
              </b-button>
            </template>
          </b-table>

          <template #footer>
            <em><h5>Total de pedidos:</h5></em>
            <h5>{{ items.length }}</h5>
          </template>
        </b-card>
      </div>
    </b-row>

   <b-modal v-model="mostrarModal" size="lg">
      <template #modal-title>
        <h5>Detalles del Pedido</h5>
      </template>
      <template #default>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID Cliente</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="producto in productosModal" :key="producto.nombre">
              <td>{{ producto.idCliente }}</td>
              <td>{{ producto.nombre }}</td>
              <td>{{ producto.cantidad }}</td>
              <td>{{ producto.precio }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </b-modal>


  </b-container>


</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');

  h2 {
    font-family: 'Libre Baskerville', serif;
  }

  .contenedor {
    background-color: #fff;
  }

  h3 {
    font-family: 'Libre Baskerville', serif;
    color: #000;
  }

  h6 {
    font-family: 'Nunito', sans-serif;
  }

  h5 {
    font-family: 'Nunito', sans-serif;
    color: #fff;
  }

</style>

<script>
export default {
  data() {
    return {
      pedidos: [],
      productos: [],
      calle: '',
      fields: [{label:' ID Pedido', key:'Pedido'}, 'Cantidad', 'Monto', 'masInf', 'cancelarPedido'],
      items: [],
      mostrarModal: false,
      productosModal: [],
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
          this.pedidos = response.data;
          this.mostrarPedidos();
        })
        .catch(error => {
          console.error('Error al cargar los pedidos:', error);
        });
    },

    mostrarPedidos() {
        this.pedidos.forEach(pedido => {
            const datos = JSON.parse(pedido.pedido);
            let cantidadTotal = 0;
            let precioTotal = 0;

            datos.forEach(producto => {
                cantidadTotal += producto.cantidad;
                precioTotal += producto.cantidad * producto.precio;
            });

            this.items.push({ Pedido: pedido.id, Cantidad: cantidadTotal, Monto: precioTotal });
        });
    },

    cancelarPedido(item) {
      const url = 'https://backend-sanfri.onrender.com/api/pedidos/' + item.Pedido;
      this.axios.delete(url)
        .then(response => {
          this.items = [];
          this.cargarPedido();
        })
        .catch(error => {
          console.error('Error al cancelar el pedido:', error);
        });
    },

    verMasInfo(item) {
      const pedidoId = item.Pedido;
      const pedidoSeleccionado = this.pedidos.find((pedido) => pedido.id === pedidoId);

      if (pedidoSeleccionado) {
        this.productosModal = JSON.parse(pedidoSeleccionado.pedido);
        this.mostrarModal = true;
      }
    },
  },
};
</script>