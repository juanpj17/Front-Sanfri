<template>
  <div class="principalCont">
    <b-navbar toggleable="sm" variant="light">
      <b-navbar-brand href="#">
        <img src="@/assets/LogoProyecto.jpg" class="d-inline-block align-top" alt="Kitten" style="margin-left: 30px;">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="m-auto">
          <b-nav-item>
            <b-button variant="light" v-on:click="Home"><h4>INICIO</h4></b-button>
          </b-nav-item>
          <b-nav-item>
            <b-dropdown right text="CATALOGO" size="lg" variant="light">
              <template #button-content>
                <h2 class="letra-grande">CATALOGO</h2>
              </template>
              <b-dropdown-item v-on:click="Catalogo">Ver catalogo</b-dropdown-item>
            </b-dropdown>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light" v-on:click="Carrito"><h4><b-icon icon="cart4"></b-icon> CARRITO</h4></b-button>
          </b-nav-item> 
          <b-nav-item>
            <b-dropdown right text="CLIENTES" size="lg" variant="light">
              <template #button-content>
                <h2 class="letra-grande">PERFIL</h2>
              </template>
              <b-dropdown-item v-on:click="verPerfil">Ver Perfil</b-dropdown-item>
              <b-dropdown-item v-on:click="modificarPerfil">Modificar Perfil</b-dropdown-item>
            </b-dropdown>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light" v-on:click="CerrarSesion"><h4>Cerrar sesion</h4></b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default{
    props:{
        Perfil:'',
    },

    data(){
        return{
            Clientes:[],
            Productos:[],
            Pedidos:[],
        }
    },

    created(){               
        this.ProbarConexionClientes();
        this.ProbarConexionProductos();
    },
    

    methods:{

    Carrito(){
        if (this.$route.path!='/CarritoView/'+this.Perfil)
        {if(this.Productos.length!==0)
          this.$router.push('/CarritoView/'+this.Perfil);
          else
          this.MensajeError();
        }
    },

    verPerfil(){
        if (this.$route.path!='/ConsultarPerfilView/'+this.Perfil)
        {if(this.Clientes.length!==0)
          this.$router.push('/ConsultarPerfilView/'+this.Perfil);
          else
          this.MensajeError();
        }
      },

      modificarPerfil(){
        if (this.$route.path!='/ModificarPerfilView' + this.Perfil)
        {if(this.Clientes.length!==0)
          this.$router.push('/ModificarPerfilView/' + this.Perfil);
          else
          this.MensajeError();
        }
      },
      Catalogo(){
        if(this.$route.path!='/CatalogoClienteView/'+this.Perfil)
        { if(this.Productos.length!==0)
          this.$router.push('/CatalogoClienteView/'+this.Perfil);
          else
          this.MensajeError();
        }
      },
      Home(){
        if (this.$route.path!='/ClientesHomeView/'+this.Perfil)
        {this.$router.push('/ClientesHomeView/'+this.Perfil);}
      },  
      CerrarSesion(){
        this.$router.push('/')
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
 .letra-grande{
  font-size: 22px;
 }
 
</style>