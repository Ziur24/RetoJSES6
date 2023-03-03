
class Electrodomestico{

    
    constructor(){

        const precio = 100;
        const color = "Blanco";
        const consumo = "F";
        const peso = "5 Kg";

        this.precioBase = precio;
        this.color = color;
        this.consumoEnergetico = consumo;
        this.peso = peso;

    }

    precioElectrodomestico(precio){
         this.precioBase = precio;
    }

    colorElectrodomestico(color){
        this.color = color;
    }

    consumoElectrodomestico(consumo){
        this.consumoEnergetico = consumo;
    }

    pesoElectrodomestico(peso){
        this.peso = peso;
    }

    resumenElectrodomestico(){
        console.log(`Estos son los datos: Precio: ${this.precioBase}, color: ${this.color},
         Consumo: ${this.consumoEnergetico}, Peso: ${this.peso}`);
    
    }
}

let lavadora = new Electrodomestico;
lavadora.precioElectrodomestico(500);
lavadora.colorElectrodomestico("Beige");
lavadora.consumoElectrodomestico("L");

lavadora.resumenElectrodomestico();