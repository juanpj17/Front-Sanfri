<template>
<div>
    <section class="container">
        <div class="row content d-flex justify-content-center align-items-center">
            <div class="col-md-6 col-sm-12 principal">
           
                <div class="box  bg-white p-4 ">
                    <img src="@/assets/LogoProyecto.jpg" class="d-inline-block align-top" alt="Kitten" style="margin: 10px 10px;">
                    <h3 class="mb-4 text-center fs-1">Modificar Perfil</h3> 
                    <!--<b-alert show variant="danger" v-if="enviado">Campos vacios</b-alert>-->
                    
                  <form class="mb-3">
                    <div class="row">

                    <div class=" col form-group form-floating mb-3">
                       <input type="text" class="form-control rounded-2" id="nombre"  placeholder="nombre" v-model="nombre">
                       <label for="nombre"> Nombre</label> 
                       <b-form-text  v-if=" !$v.nombre.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                    </div>
                    <div class=" col form-group form-floating mb-3">
                       <input type="text" class="form-control rounded-2" id="apellido"  placeholder="apellido" v-model="apellido">
                       <label for="apellido" >Apellido</label> 
                       <b-form-text  v-if=" !$v.apellido.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                  </div>

                </div>

                    <div class="row">
                        <div class="col form-group ">
                          <label></label>
                          <div class="form-floating mb-3">
                         
                              <b-form-select class="custom-select mr-sm-2  form-control" id="tipDoc" placeholder="tipDoc"  v-model="tipDoc" :options="[ 'V', 'J', 'E']" :value="null">
                              </b-form-select>
                               <label for="tipDoc">Seleccione</label>
                              <b-form-text  v-if="!$v.tipDoc.required" class="form-floating mb-3" text-variant="danger">Debe selecionar un tipo de documento</b-form-text > 
                              </div>
                              </div>
                      <div class="col form-group">
                        <label>Ej:29919287</label>
                          <div class="form-floating mb-3">
                              <input type="text" class="form-control rounded-2" id="numDoc"  placeholder="numDoc" v-model="numDoc">
                              <label for="numDoc">Cedula</label>
                              <b-form-text  v-if=" !$v.numDoc.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                          </div>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col form-group form-floating mb-3">
                          <b-form-select v-model="estado" id="estado"  class="custom-select mr-sm-2  form-control" :options="[ 'Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Dependencias Federales',' Distrito Federal',' Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia']" :value="null"> 
                          </b-form-select>  
                          <label for="estado">Seleccione</label>
                                    <b-form-text  v-if="!$v.estado.required" class="form-floating mb-3" text-variant="danger"> Debe selecionar un estado</b-form-text >                
                        </div>
                      <div class="col form-group">
                          <div class="form-floating mb-3">
                              <input type="text" class="form-control rounded-2" id="direccion"  placeholder="direccion" v-model="direccion">
                              <label for="direccion">Direccion</label>
                              <b-form-text  v-if=" !$v.direccion.required" class="form-floating mb-3" text-variant="danger">Campo requerido</b-form-text >
                          </div>
                      </div>
                    </div>
                    <div class="d-grid gap-2 mb-3">
                        <button type="button" class="btn btn-primary btn-lg border-0 rounded-3"  v-on:click="validar" >Modificar</button>
                    </div>
                  </form>
              </div>
          </div>
       </div>
    </section>
  </div>  
</template>

<script>
    import { required, minLength,maxLength,alpha,numeric} from 'vuelidate/lib/validators';

    export default {

        props:{
            Perfil:'',
        },

        data: function() {
            return {
                cliente:'',
                nombreCompleto:'',
                numDoc:'',
                direccion:'',
                tipDoc:'',
                estado:'',
                nombre:'',
                apellido:'',
            }
        },

        created(){
            this.buscar();
        },
    
    validations: { 
        nombre:{required,alpha},
        numDoc:{required,numeric, minLengthValue: minLength(7),maxLengthValue: maxLength(10),},
        direccion:{required},
        tipDoc:{required},
        estado:{required},
        apellido:{required,alpha},
    },
    
    methods: {
        validar(){
            
            if (this.$v.$invalid || (this.tipDoc==='V'&&this.numDoc.length>8)) {
              if(this.email==''||this.password==''||this.nombre==''||this.numDoc==''||this.direccion==''||this.tipDoc==''||this.estado==''||this.apellido=='')
                {this.mensajeValidacion('Hay campos vacios') }
              if(!this.$v.email.email){this.mensajeValidacion(`Formato de correo invalido. 
                Ejemplo de formato: ejemplo@gmail.com `)}
              if(!this.$v.nombre.alpha){this.mensajeValidacion('Los nombres no aceptan caracteres especiales,numeros ni espacios en blanco')}
              if(!this.$v.apellido.alpha){this.mensajeValidacion('Los apellidos no aceptan caracteres especiales,numeros ni espacios en blanco')}
              if(!this.$v.numDoc.numeric){this.mensajeValidacion('Los documentos de identidad no aceptan letras ni caracteres especiales')}
              if(!this.$v.numDoc.minLengthValue){this.mensajeValidacion('Los documentos de identidad tienen minimo 6 numeros')}
              if(!this.$v.numDoc.maxLengthValue){this.mensajeValidacion('Los documentos de identidad tienen maximo 10 numeros')}
              if(this.tipDoc==='V'&&this.numDoc.length>8){this.mensajeValidacion('La cedula de identidad tiene como maximo 8 digitos')}
              if(!this.$v.password.minLengthValue){this.mensajeValidacion('El password debe tener tener minimo 6 caracteres y maximo 15')}
              if(!this.$v.password.maxLengthValue){this.mensajeValidacion('El password debe tener tener minimo 6 caracteres y maximo 15')}
            
              return;
            }
            else
            { this.modificar(); }
        },

        buscar(){
            this.axios.get('https://backend-sanfri.onrender.com/api/clientes/' + this.Perfil)
                .then(response =>{
                    this.cliente = response.data; 
                    this.nombreCompleto = this.cliente[0].nombreCompleto;
                    this.tipDoc = this.cliente[0].tipDoc;
                    this.numDoc = this.cliente[0].numDoc;
                    this.direccion = this.cliente[0].direccion;
                    this.estado = this.cliente[0].estado;
                    this.separador();
                })
                 
            },

        modificar(){
            let url = 'https://backend-sanfri.onrender.com/api/clientes/' + this.Perfil;
            let parametros = {
                nombreCompleto: this.nombre + ' ' + this.apellido,
                tipDoc: this.tipDoc,
                numDoc: this.numDoc,
                estado: this.estado,
                direccion: this.direccion,  
            }
            console.log(parametros)
            this.axios.put(url, parametros)
                .then(response => {
                    swal.fire({
                        title: 'Cliente modificado',
                        text: 'Cliente modificado con exito',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    })
                this.$router.push('/ConsultarPerfilView/'+this.Perfil);
            })
        },

        separador(){
            let nombreCompleto = this.nombreCompleto.split(" ");
            this.nombre = nombreCompleto[0];
            this.apellido = nombreCompleto[1];
        },

        mensajeValidacion(mensaje){
            Swal.fire({
            icon: 'error',
            title: 'Error de registro',
            text: mensaje,})
        },
           
    },



               
    }

</script>