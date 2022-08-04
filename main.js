const app = Vue.createApp({
    data(){
        return{
            titulo: 'El banco de Karen con Vue.js',
            cantidad: 100,
            enlace:'https://github.com/KarenCCEO',
            estado: false,
            servicios:['transferencias', 'pagos', 'giros', 'chequeeeeeds'],
            desactivar: false
        }
    },
    //Un método en Java es un conjunto de instrucciones definidas dentro de una clase, que realizan una determinada tarea
    methods:{
        agregarSaldo() {
            if (this.cantidad === 0){
                this.desactivar =false
                
            }
            
            this.cantidad = this.cantidad + 100

        },
        restarSaldo(valor){
            if (this.cantidad === 0){
                alert('Saldo en cero!')
                this.desactivar = true
                return
            }
            this.cantidad = this.cantidad - valor
        }

    },
    //propiedades computadas sirven para generar calculos en nuestros componentes y siempre tiene que retornar algo
    //Diferencia entre un metodo y una propiedad computada 
    //Se puede lograr el mismo resultado pero las propiedades computadas se almacenan en el caché. Una propiedad computada solo se volverá a evaluar cuando alguna de sus dependencias haya cambiado.
    //En comparación, una invocación de método siempre ejecutará la función cada vez que ocurre una re-renderizacion.
    //¿Por qué necesitamos caché? Imagina que tenemos una costosa propiedad computada A, que requiere hacer un bucle a 
    //través de una gran matriz y hace muchos cálculos. Entonces podemos tener otras propiedades computadas que a su vez dependen de A. 
    //Sin caché, estaríamos ejecutando el captador de A muchas veces más de lo necesario. En los casos en que no desee el almacenamiento en caché, utilice un método en su lugar.
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculas(){
            return this.titulo.toUpperCase()
        }


    }



})