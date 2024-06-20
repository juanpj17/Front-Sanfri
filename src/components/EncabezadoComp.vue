<template>
  <div class="principalCont">
    <b-navbar toggleable="sm" variant="light" class="navbar-expand-sm">
      <b-navbar-brand href="#">
        <img src="@/assets/LogoProyecto.jpg" class="d-inline-block align-top" alt="Kitten" style="margin-left: 30px;">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item>
            <b-button variant="light" v-on:click="Home"><h4>INICIO</h4></b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light" v-on:click="Catalogo"><h4>CATALOGO</h4></b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light"><h4><b-icon icon="cart4"></b-icon> CARRITO</h4></b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light" v-on:click="IniciarSesion"><h4>Iniciar Sesion</h4></b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light" v-on:click="RegistroUsusario"><h4>Registrarse</h4></b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


    <script>
export default{
    methods:{
        IniciarSesion(){
          if(this.$route.path!='/IniciarSView')
            { if(this.Clientes.length!==0)
              {this.$router.push('/IniciarSView');}
              else
              this.MensajeError();
        }},
        RegistroUsusario(){
            if(this.$route.path!='/RegistroView')
              {if(this.Clientes.length!==0)
                  this.$router.push('/RegistroView');
               else
                  this.MensajeError();
              }},
        Catalogo(){
          if(this.$route.path!='/CatologoView')
          { if(this.Productos.length!==0)
              this.$router.push('/CatologoView');
            else
              this.MensajeError();
          }},
        Home(){
          if(this.$route.path!='/')
          {this.$router.push('/');}
        },

        ProbarConexionClientes(){
          let url='https://backend-sanfri.onrender.com/api/clientes/';
          this.axios.get(url)
              .then(response =>{
              this.Clientes=response.data;                 
              })
        },
        ProbarConexionProductos(){
          let url='https://backend-sanfri.onrender.com/api/productos/';
          this.axios.get(url)
              .then(response =>{
              this.Productos=response.data;                   
              })
        },
        MensajeError(){
          Swal.fire({
              icon: 'error',
              title: 'Error de conexion ',
              text: 'Tenemos problemas para conectarnos con el servidor, por favor intentelo mas tarde',})
        },
       
    },
    created(){               
      this.ProbarConexionClientes();
      this.ProbarConexionProductos();
       },
    data(){
      return{
        Clientes:[],
        Productos:[],
      }
    }
}

</script>
<style  scoped>
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
 
 h2{
  font-family: 'Nunito', sans-serif;
 }
 h4{
  font-family: 'Nunito', sans-serif;
 }
 .letra{
  font-size: 40px;
 }
 
</style>