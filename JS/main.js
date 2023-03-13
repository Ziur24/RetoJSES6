
const precioDefecto = 100;
const colorDefecto = "Blanco";
const consumoDefecto = "F";
const pesoBaseDefecto = 5;




class Electrodomestico{

    constructor(precioBase = precioDefecto, color = colorDefecto, consumoEnergetico = consumoDefecto,
    peso = pesoBaseDefecto){

        this.precioBase = this.comprobarPrecioBase(precioBase);
        this.color = this.comprobarColor(color);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
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
    

    comprobarPrecioBase(newprecio){
        
        if(typeof newprecio === "number"){
            return newprecio;
        }
        else if(typeof newprecio === "string"){
           return precioDefecto;
        }
    }

    comprobarColor(newcolor){

        let color = this.controlString(newcolor);
        let existenciaColor = ["Blanco", "Negro", "Rojo", "Azul", "Gris"];

        for(let i = 0; i < existenciaColor.length; i++){
            if (existenciaColor[i] == color){
                return color;
            }else if (i+1==existenciaColor.length){
                return colorDefecto;
            }   
        }
    }

    comprobarConsumoEnergetico(newconsumo){

        let consumo = this.controlString(newconsumo);
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
    controlString(cadena){
        if (typeof cadena === 'string'){
            let newcadena = cadena;
            return  newcadena.charAt(0).toUpperCase() + newcadena.slice(1).toLowerCase();
           
        }else{
            return console.log("Ha introducido un dato numérico en un campo de texto que no corresponde, revise las inforamción introducida.");
        }
    }
    /* Calcula segun el peso el tramo de tarifa a cobrar */
    controlTramoPeso(newpeso){

        let tramoPeso = "";

       if(newpeso <=19){
            tramoPeso = "tramo1";
       }else if(newpeso >=20 && newpeso <=49){
            tramoPeso = "tramo2";
       }else if(newpeso >=50 && newpeso <=79){
            tramoPeso = "tramo3";
       }else if(newpeso >=80){
            tramoPeso = "tramo4";
       }

       return tramoPeso
    }
    /* Calcula el precio final segun peso del producto y consumo energético */
    precioFinal(){

        let consumo = this.consumoEnergetico;
        let tramo = this.controlTramoPeso(this.peso);

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
        
        return this.precioBase + Number(calculoConsumo[consumo]) + Number(calculoPeso[tramo]);

    }

}

/*#############################################################################*/
                                /*Lavadora*/
/*#############################################################################*/

const cargaLavadora = 5;

class Lavadora extends Electrodomestico{

    constructor(precioBase, color, consumoEnergetico,
        peso, carga = cargaLavadora){
        super(precioBase, color, consumoEnergetico, peso)

        this.carga = carga;
    }

    get obtieneCarga(){
        return this.carga;
    }

    precioFinal(){
        
        if(this.carga > 30){
           return super.precioFinal() + 50;
        }else{
            return super.precioFinal() + 0;
        }
       
    }
}

/*#############################################################################*/
                                /*Television*/
/*#############################################################################*/

const resolucionTelevision = 20;
const esCuatroK = false;

class Television extends Electrodomestico{

    constructor(precioBase, color, consumoEnergetico,
        peso, resolucion = resolucionTelevision, cuatroK = esCuatroK){
        super(precioBase, color, consumoEnergetico, peso)

        this.resolucion = resolucion;
        this.cuatroK = cuatroK;
    }

    get obtieneResolucion(){
        return this.resolucion;
    }

    get obtieneCuatroK(){
        return this.cuatroK;
    }

    precioFinal(){
        
        if(this.resolucion > 40 && this.cuatroK==="true"){
            return super.precioFinal() + super.precioFinal() * (30/100) + 50;
        }else if(this.resolucion > 40){
            return super.precioFinal() + super.precioFinal() * (30/100);
        }else if(this.cuatroK==="true"){
            return super.precioFinal() + 50;
        }else{
            return 0;
        }
    }
}

/*#############################################################################*/
                                /*MainApp*/
/*#############################################################################*/

class mainApp{

   /* constructor(precioBase, color, consumoEnergetico, peso, carga, resolucion, cuatroK, precioFinal){

        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
        this.carga = carga;
        this.resolucion = resolucion;
        this.cuatroK = cuatroK;
        this.precioFinal = precioFinal;

    }*/

    creaArrayElectrodomesticos(){

        let array = [];

        array = [
            ["Electrodomestico", 110, "azul", "", 15],
            ["Lavadora", 120, "Roja", "", 15, 20],
            ["Television", 130, "gris", "A", 40, 50, "true"],
            ["Television", 140, "azul", "", 30, 41, "true"],
            ["Lavadora", 150, "azul", "B", 15, 40],
            ["Lavadora", 160, "azul", "A", 15, 50],
            ["Electrodomestico", 170, "azul", "", 15],
            ["Electrodomestico", 180, "azul", "", 15],
            ["Lavadora", 190, "azul", "C", 15],
            ["Television", 200, "azul", "", 30, 50, "false"]          
        ]

        let electrodomestico = 0;
        let lavadoras = 0;
        let televisores = 0;
        let nombreelectrodomestico;

        for(let i = 0; i < array.length; i++){
        
            for(let ii=0; ii < array[i].length; ii++){
                
                if (ii == array[i].length - 1){
                   nombreelectrodomestico = new Electrodomestico(array[i][1], array[i][2], array[i][3], array[i][4]);
                
                   electrodomestico = electrodomestico + nombreelectrodomestico.precioFinal();
                   
                   if (array[i][0] == "Lavadora" && ii == array[i].length - 1){

                        nombreelectrodomestico = new Lavadora(array[i][1], array[i][2], array[i][3], array[i][4], array[i][5]);
                        lavadoras = lavadoras + nombreelectrodomestico.precioFinal();

                    } else if (array[i][0] == "Television" && ii == array[i].length - 1){

                        nombreelectrodomestico = new Television(array[i][1], array[i][2], array[i][3], array[i][4], array[i][5], array[i][6]);
                        televisores = televisores + nombreelectrodomestico.precioFinal();
                      
                    }
                }
            }
        }
        return console.log(`El precio final de los Elextrodomésticos ascuiende a ${electrodomestico}€, el precio total de las Lavadoras es de: ${lavadoras}€, y el precio total de los Televisores es de : ${televisores}€`);
        
    }
}

let app = new mainApp;
app.creaArrayElectrodomesticos();