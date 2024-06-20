<template>
  <div class="contenedor">
    <br>
    <h1>Nuestros productos</h1>

    <b-row class="mt-5">
      <b-col cols="12" md="3" v-for="producto in Productos" :key="producto.id">
        <b-card style="max-width: 20rem;" class="mb-2">
          <img :src="producto.nombreImagen" class="card-img-top">
          <b-card-title><h3>{{ producto.nombre }}</h3></b-card-title>
          <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ producto.precio }} Bs</h5>
          <b-card-text>{{ producto.descripcion }}</b-card-text>

          <!-- Botón desplegable de opciones -->
          <b-dropdown class="card-options" right text="Opciones" variant="outline-secondary">
            <template #button-content>
              <b-icon icon="gear-fill"></b-icon>
            </template>
            <b-dropdown-item @click="enviarID(producto.id)">Modificar</b-dropdown-item>
            <b-dropdown-item @click="eliminarProducto(producto.id)">Eliminar</b-dropdown-item>
          </b-dropdown>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default{
  
    props:{
        ClienteRegistrado:'',
    },

    data(){
        return{
            Productos:'',
        }

    }, created(){               
            this.mostrar()
       },
       methods:{
        
        mostrar(){
            let url='https://backend-sanfri.onrender.com/api/productos/';
            this.axios.get(url)
              .then(response =>{
                this.Productos = response.data;  
                console.log(this.Productos);
                               
              })
              
        },

        enviarID(id) {
          this.$router.push('/ModificarProductoView/' + id);
        },
            

        eliminarProducto(id){
            let url = 'https://backend-sanfri.onrender.com/api/productos/' + id;
            this.axios.delete(url);
            this.mostrar();
        },

        alertaNoCliente(){
            if (this.ClienteRegistrado==false)
               { Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puede realizar una compra sin  antes iniciar sesion',
                footer: '<a href="/IniciarSView">Iniciar Sesion</a>'})}
            else
           { Swal.fire('El producto se agrego a su carrito')}
        },
        alertaServidor(){
            Swal.fire('El servidor no responde')
        }
       },

    

}
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
 
 h1{
    font-family: 'Libre Baskerville', serif;
 }

 .contenedor{
   background-color:#F4EFEE;
 }

 h3, h5, h6{
  font-family: 'Nunito', sans-serif;
 }

.card-options {
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>