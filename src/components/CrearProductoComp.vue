<template>
    <section class="container">
        <div class="row content d-flex justify-content-center align-items-center">
            <div class="col-md-6 col-sm-12 mr-5 principal mb-4">
                <div class="box  bg-white p-4 ">    
                <h3 class="mb-4 text-center fs-1">Registrar Producto</h3>
                <form  class="mb-3">
                    <div class="form-floating mb-3">
                        <input type="text" id="nombre" class="form-control rounded-2" placeholder="jugo de naranja" v-model="nombre" />
                        <label for="nombre">Nombre</label>
                        <b-form-text  v-if="!$v.nombre.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" id="descripcion"   class="form-control rounded-2" placeholder="descripcion" v-model="descripcion"/>
                        <label for="descripcion">Descripcion</label>
                        <b-form-text  v-if="!$v.descripcion.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" id="precio"   class="form-control rounded-2" placeholder="precio" v-model="precio"  />
                        <label for="precio">Precio</label>
                        <b-form-text  v-if="!$v.precio.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                        <b-form-text  v-if="!$v.precio.numeric" class="form-floating mb-3" text-variant="danger">Formato invalido, solo se aceptan numeros positivos</b-form-text > 
                            <b-form-text  v-if="!$v.precio.between&&this.precio=='0'" class="form-floating mb-3" text-variant="danger">El precio debe ser mayor que 0 bs </b-form-text > 
                        </div>
                    <div class="form-floating mb-3">
                        <input type="text" id="stock"   class="form-control rounded-2" placeholder="stock"  v-model="stock" />
                        <label for="stock">Stock</label>
                        <b-form-text  v-if="!$v.stock.required" class="form-floating mb-3" text-variant="danger">Debe llenar el campo</b-form-text > 
                        <b-form-text  v-if="!$v.stock.numeric" class="form-floating mb-3" text-variant="danger">Formato invalido, solo se aceptan numeros positivos</b-form-text > 
                            <b-form-text  v-if="!$v.stock.between&&this.stock=='0'" class="form-floating mb-3" text-variant="danger">El stock debe ser mayor que 0 </b-form-text > 
                        </div>
                    <div class="col form-group form-floating mb-3">
                        <b-form-select class="custom-select mr-sm-2  form-control" id="tipDoc" placeholder="tipDoc" :options="[ 'https://i.ibb.co/fnmfKtH/Coctel-Tropical-Sombra.png', 'https://i.ibb.co/gT0zYmC/Durazno-Sombra.png', 'https://i.ibb.co/D4tNzHq/Fruit-Punch-Sombra.png','https://i.ibb.co/600VPc8/Naranja-sombra.png']" :value="null" v-model="nombreImagen">
                        </b-form-select>
                        <label for="tipDoc">Seleccione</label>
                        <b-form-text  v-if="!$v.nombreImagen.required" class="form-floating mb-3" text-variant="danger">Debe seleccionar una imagen</b-form-text >        
                        </div>
                    <div class="d-grid gap-2 mb-3">
                        <button type="button" class="btn btn-primary btn-lg border-0 rounded-3" v-on:click="validaciones"  >Registrar</button>
                    </div>
                </form>
            </div> 
        </div>
            <div class="col-md-6 col-sm-12">
                <div class="  bg-white p-4 ">
                    <h3 class="mb-4 text-center fs-1">Vista Previa</h3>
                    <b-card style='z-index: 2; border-radius: 50px ; border-radius: 10% ;  
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;' class="mb-5 mx-5 rounded float-right">
                    <img :src="this.nombreImagen"  class="card-img-top"  style='z-index:2;box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'>
                    <br>
                    <br>
                    <br>
                    <b-card-title><h3>
                    {{ this.nombre }}
                    </h3></b-card-title>
                    <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ this.precio }} Bs</h5>
                    <b-card-text>
                    <h6>{{ this.descripcion }}</h6>
                    </b-card-text>
                    <b-button  variant="primary" >Comprar</b-button>
                    </b-card>
                </div>
            </div>
        </div>
   </section>
</template>

<style  scoped>
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');

 h3, h5, h6{
  font-family: 'Nunito', sans-serif;
 }

 .letra{
  font-size: 40px;
 }
</style>

<script>
    import {required, numeric, maxLength, between} from 'vuelidate/lib/validators';
 
    export default{
        data(){
            return{
                nombre:'',
                descripcion:'',
                precio:'',
                stock:'',
                nombreImagen:'',
                Productos: '',
            }
        },
        created(){               
            this.mostrar()
        },
        methods:{
            mostrar(){
                let url='https://backend-sanfri.onrender.com/productos/';
                this.axios.get(url)
                    .then(response =>{
                        this.Productos = response.data;                 
                    })    
            },
            estaRegistrado(producto) {
                let comparacion=producto.nombre;
                return comparacion.toUpperCase() == this.nombre.toUpperCase();},

            crear(){
                const url = 'https://backend-sanfri.onrender.com/api/productos/';
                const parametros = {
                    nombre: this.nombre, 
                    descripcion: this.descripcion,
                    precio: this.precio,
                    stock: this.stock, 
                    nombreImagen: this.nombreImagen
                };                
                this.axios.post(url, parametros); 
                Swal.fire('Registro exitoso');
                this.LimpiarCampos();
            }, 
            
            validaciones(){
                this.$v.$touch();
                console.log(this.Productos.find(this.estaRegistrado));
                if(!this.$v.$invalid&&this.Productos.find(this.estaRegistrado)==undefined){
                    this.crear();
                }
                else{
                    if(this.Productos.find(this.estaRegistrado)!==undefined)
                    {  this.mensajeValidacion('Ya hay un producto registrado con ese nombre');}
                    else
                    this.mensajeValidacion('Debe llenar todos los campos');
                }
            },

            mensajeValidacion(mensaje){
                    Swal.fire({
                    icon: 'error',
                    title: 'Error de registro',
                    text: mensaje,
                })
            } ,

            LimpiarCampos(){
                this.nombre='';
                this.descripcion='';
                this.precio='';
                this.stock='';
                this.nombreImagen='';
            }
        },

        validations: {
            nombre: {required},
            descripcion: { 
                required,
                maxLengthValue: maxLength(100)
            },
            precio:{
                required,
                numeric,
                maxLengthValue: maxLength(1000000),
                between: between(1,1000000)
            },
            stock:{
                required,
                numeric,
                maxLengthValue: maxLength(1000000),
                between: between(1,1000000)
            },
            nombreImagen:{required}
        },   
    }
</script>