
const precioDefecto = 100;
const colorDefecto = "Blanco";
const consumoDefecto = "F";
const pesoBaseDefecto = "5 Kg";

const cargaLavadora = "5 kg";

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
    /* Funcion pasa toda la cadena a minisculas excepto la primera letra*/
    funcionControlString(cadena){
        if (isNaN(cadena)){
            let newcadena = cadena;
            return  newcadena.charAt(0).toUpperCase() + newcadena.slice(1).toLowerCase();
           
        }else{
            return console.log("Ha introducido un dato numérico en un campo de texto que no corresponde, revise las inforamción introducida.");
        }
    }

    controlTramoPeso(newpeso){

        let tramoPeso = 0;

       if(newpeso <=19){
            tramoPeso = "tramo1";
       }else if(newPeso >=20 && newPeso <=49){
            tramoPeso = "tramo2";
       }else if(newPeso >=50 && newPeso <=79){
            tramoPeso = "tramo3";
       }else if(newPeso >=80){
            tramoPeso = "tramo4";
       }

       return tramoPeso
    }
    

    precioFinal(newconsumo, newPeso){

        let calculoConsumo = {
            A:"100",
            B:"80",
            C:"60",
            D:"50",
            E:"30",
            F:"10"
        }

        let calculoPeso = {
            "tramo1":"10",
            "tramo2":"50",
            "tramo3":"80",
            "tramo4":"100"
        }

        
        return Number(calculoConsumo[newconsumo]) + Number(calculoPeso[newPeso]);

    }


    
}

class Lavadora extends Electrodomestico{

    constructor(precioBase, color, consumoEnergetico,
        peso, carga = cargaLavadora){
        super(precioBase, color, consumoEnergetico, peso)

        this.carga = carga;
    }

    get obtieneCarga(){
        return this.carga;
    }

    precioFinal(newconsumo, newcarga){
    
        if(newcarga>30){
           return console.log( (super.precioFinal(super.funcionControlString(newconsumo), super.controlTramoPeso(this.peso)) + 50) + " €");
        }
       
    }


}

let bosch = new Lavadora(100, "blanco", "F", 10, 5);
