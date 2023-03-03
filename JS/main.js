
const precioDefecto = 100;
const colorDefecto = "Blanco";
const consumoDefecto = "F";
const pesoBaseDefecto = "5 Kg";

class Electrodomestico{

    constructor(precioBase=precioDefecto, color = colorDefecto, consumoEnergetico = consumoDefecto,
    peso = pesoBaseDefecto){

        this.precioBase = precioBase;
        this.color = this.funcionColor(color);
        this.consumoEnergetico = this.funcionConsumo(consumoEnergetico);
        this.peso = peso;

    }

    /*Getters*/
    get obtienePrecio(){
        return this.precioBase;
    }
    get obtieneColor(){
        return this.color;
    }
    get obtieneConsumo(){
        return this.consumoEnergetico;
    }
    get obtienePeso(){
        return this.peso;
    }


    funcionColor(newcolor){

        let color = this.funcionControlString(newcolor);
        let existenciaColor = ["Blanco", "Negro", "Rojo", "Azul", "Gris"];

        for(let i = 0; i < existenciaColor.length; i++){
            if (existenciaColor[i] == color){
                return color;
            }else if (i+1==existenciaColor.length){
                return colorDefecto;
            }   
        }
    }

    funcionConsumo(newconsumo){

        let consumo = this.funcionControlString(newconsumo);
        let consumoElectrodomesticos = ["A", "B", "C", "D", "E", "F"];

        for(let i = 0; i < consumoElectrodomesticos.length; i++){
            if (consumoElectrodomesticos[i] == consumo){
                return consumo;
            }else if (i+1==consumoElectrodomesticos.length){
                return consumoDefecto;
            }   
        }
    }

    funcionControlString(cadena){
        if (isNaN(cadena)){
            let newcadena = cadena;
            return  newcadena.charAt(0).toUpperCase() + newcadena.slice(1).toLowerCase();
           
        }else{
            return console.log("Ha introducido un dato numérico en un campo de texto que no corresponde, revise las inforamción introducida.");
        }
    }   
    
    /*resumenElectrodomestico(){
        console.log(`Estos son los datos: Precio: ${this.precioBase}, color: ${this.color},
         Consumo: ${this.consumoEnergetico}, Peso: ${this.peso}`);
    
    }*/
}

let lavadora = new Electrodomestico(200, "blanco","h", "100 kg");

console.log(lavadora);