<template>
    <div>
        <EncabezadoCompVue></EncabezadoCompVue>
    <section class="container">
       <div class="row content d-flex justify-content-center align-items-center">
           <div class="col-md-6 col-sm-12 principal">
          
               <div class="box  bg-white p-4 ">
                   <img src="@/assets/LogoProyecto.jpg" class="d-inline-block align-top" alt="Kitten" style="margin: 10px 10px;">
                 <h3 class="mb-4 text-center fs-1">Iniciar sesion</h3>


       <form v-on:submit.prevent="validar"  class="mb-3">
               <div class="form-floating mb-3">
                   <input type="text" id="email" v-model="email" class="form-control rounded-2" placeholder="name@example.com" />
                   <label for="email">Email</label>
               </div>

               <div class="form-floating mb-3">
                   <input type="password" id="password" v-model="password"  class="form-control rounded-2" placeholder="password"  />
                   <label for="password">Password</label>
               </div>
               <div class="d-grid gap-2 mb-3">
                       <button type="button" class="btn btn-primary btn-lg border-0 rounded-3" v-on:click="validar" >Login</button>
               </div>
       </form>
               <div class="sign-up-accounts">
                   <p class="text-center">Visitanos</p>
                   <div class="social-accounts d-flex justify-content-center">
                       <a href="https://www.instagram.com/sanfrifruy.ve/" title="Instagram"><b-icon icon="instagram" font-scale = "3" class="rounded-circle bg-danger p-2" variant="light"></b-icon></a>
                   </div>
               </div>

               </div>
            </div>
       </div>
   </section>
</div>
</template>

<script>
    import EncabezadoCompVue from '@/components/EncabezadoComp.vue';
    import { required, email, minLength } from 'vuelidate/lib/validators';
    
    export default {
        data(){
            return{
                email: "",
                password: "",
                enviado: false,
                Cliente:'',
            }
        },
        validations: {
            email: { required, email },
            password: { required, minLength: minLength(6) },
        },
        methods: {
            validar(){
                this.enviado = true; 
                if (this.$v.$invalid) {
                    return;
                }
                else{
                    this.mostrar();
                }
            },
            
            mostrar:
                function(){
                    let url = 'https://backend-sanfri.onrender.com/api/clientes/';
                    url = url + this.email;
                    this.axios.get(url)
                        .then(response =>{
                            this.Cliente = response.data;  
                            console.log(this.Cliente);
                            this.redirigir();                 
                        })     
                },

            redirigir(){
                if (this.Cliente.length==0){
                    if (this.email==='admin@gmail.com' && this.password==='123456789a'){
                        this.$router.push('/AdministradorHomeView');
                    }
                    else{
                        Swal.fire('Usuario no registrado');
                    }
               }
                else{
                    if (this.Cliente[0].email===this.email&&this.Cliente[0].password==this.password){
                         this.$router.push('/ClientesHomeView/'+this.Cliente[0].email);
                    }
                    else{
                        Swal.fire('El password no coincide con el usuario')
                    }
                }}
       },
        components:{
            EncabezadoCompVue 
        }
    }
</script>






<style>
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
.container{
   font-family: 'Nunito', sans-serif;
  
}
.content{
   height: 100vh;
}
.principal{
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   border-radius: 10px;
}
.box{
   border-radius: 10px;
}

</style>