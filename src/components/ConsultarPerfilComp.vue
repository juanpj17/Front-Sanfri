<template>
    <section class="container">
       <div class="row content d-flex justify-content-center align-items-center">
           <div class="col-md-6 col-sm-12 principal">
          
               <div class="box  bg-white p-4 ">
                   <img src="@/assets/LogoProyecto.jpg" class="d-inline-block align-top" alt="Kitten" style="margin: 10px 10px;">
                 <h3 class="mb-4 text-center fs-1">Informacion Personal</h3>


       <div class="mb-3">
            <div class="form-floating mb-3">
                <label><h5>Nombre Completo</h5></label>
                <br>
                <br>
                 <h4 >{{ this.nombreCompleto }}</h4>
            </div>
            <hr>
            <div class="form-floating mb-3">
                <label><h5>Documento de identidad</h5></label>
                <br>
                <br>
                <h4>{{ this.docIdentidad }}</h4>
            </div>
            <hr>
            <div class="form-floating mb-3">
                <label><h5>Email</h5></label>
                <br>
                <br>
                <h4>{{ this.email }}</h4>
            </div>
            <hr>
            <div class="form-floating mb-3">
                  <label><h5>Estado</h5></label>
                  <br>
                  <br>
                  <h4>{{ this.estado }}</h4>
            </div>
            <hr>
            <div class="form-floating mb-3">
                  <label><h5>Direccion</h5></label>
                  <br>
                  <br>
                  <h4>{{ this.direccion }}</h4>
            </div>
            <hr>
            <button @click="eliminar(Cliente[0].id)" class="btn btn-danger">Eliminar mi cuenta</button>
        </div>
    </div>
    </div>
    </div>
            
</section>
</template>

<script>



   export default{
    props:{
        Perfil:'',
    },
    data(){
        return{
            Cliente:'',
            nombreCompleto:'',
            docIdentidad:'',
            email:'',
            password:'',
            estado:'',
            direccion:'',
        }
    },
    created(){               
            this.mostrar()
       },
    methods:{
        mostrar(){
            let url='https://backend-sanfri.onrender.com/api/clientes/';
            url=url+this.Perfil;
            this.axios.get(url)
              .then(response =>{
                this.Cliente = response.data; 
                this.nombreCompleto	=this.Cliente[0].nombreCompleto;
                this.docIdentidad=this.Cliente[0].tipDoc +'-'+this.Cliente[0].numDoc;
                this.email=this.Cliente[0].email ; 
                this.password=this.Cliente[0].password;   
                this.estado=this.Cliente[0].estado;
                this.direccion=this.Cliente[0].direccion;          
              })
        },

        eliminar(id){
            console.log(id);
            Swal.fire({
                title: '¿Estás seguro?',
                text: "No podrás revertir esta acción!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    const url = 'https://backend-sanfri.onrender.com/api/clientes/' + id;
                    this.axios.delete(url)
                        .catch( error => {
                            console.log(error);
                        })
                    Swal.fire(
                        'Eliminado!',
                        'Tu perfil ha sido eliminado.',
                        'success'
                    ).then(() => {
                        this.$router.push('/')
                    })
                }
            })
                
        },

    }

   }
    
   </script>