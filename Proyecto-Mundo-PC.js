class DispositivoEntrada{

    constructor(marca, entrada){
        this._entrada = entrada;
        this._marca = marca
    }

    get entrada(){
        return this._entrada;
    }
    set entrada(entrada){
        this._entrada = entrada
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca
    }

    toString(){
        return "Marca: " + this._marca + ". Entrada: " + this.entrada; 
    }

}

class Raton extends DispositivoEntrada{

    static ContadorRaton = 0;

    constructor(marca, entrada){
        super(marca,entrada)
        this._idRaton = ++Raton.ContadorRaton;
    }

    toString(){
        return "Raton. Id: " + this._idRaton + ". " + super.toString();
    }

}

class Teclado extends DispositivoEntrada{

    static ContadorTeclado = 0;

    constructor(marca, entrada){
        super(marca,entrada)
        this._idTeclado = ++Teclado.ContadorTeclado;
    }

    toString(){
        return "Teclado. Id: " + this._idTeclado + ". " + super.toString();
    }

}

class Monitor{

    static ContadorMonitor = 0;

    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._IdMonitores = ++Monitor.ContadorMonitor;
    }

    get idMonitor(){
        return this._IdMonitores
    }

    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }

    get tamaño(){
        return this._tamaño
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return "Monitor: " + this._marca + ". Id: " + this._IdMonitores + ". Tamaño(Pulgadas): " + this._tamaño;
    }

}

class Computadora{

    static ContadorComputadora = 0;

    constructor(nombre){
        this._nombre = nombre;
        this._idCompturadora = ++Computadora.ContadorComputadora;
        this._dispositivosComputadora = [];
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get dispositivosComputadora(){
        return this._dispositivosComputadora;
    }
    set dispositivosComputadora(dispositivosComputadora){
        this._dispositivosComputadora[this._dispositivosComputadora.length] = dispositivosComputadora;
    }

    toString(){

        let dispositivosLista = "";
        for(let dis of this._dispositivosComputadora){
            dispositivosLista += "\n\t{" +dis + "}";
        }

        return "Computadora: " + this._idCompturadora + ". Nombre: " + this._nombre +".\nDispositivos: "+dispositivosLista;

    }
}

class Orden{

    static ContadorOrden = 0;

    constructor(){
        this._idOrden = ++Orden.ContadorOrden;
        this._computadoras= [];
    }

    set agregarComputadora(computadora){
        this._computadoras[this._computadoras.length]= computadora
    }

    get mostrarOrden(){
        let listaComputadora = "";
        for (let lista of this._computadoras){
            listaComputadora += "\n[ " + lista + "]"
        }

        return "Orden: " + this._idOrden +". Computadoras: "+ listaComputadora;
    }

}


let dispositivo1 = new DispositivoEntrada("Redragon", " USB");
console.log(dispositivo1.toString());

let raton1 = new Raton("Redragon", "USB");
console.log(raton1.toString())

let teclado1 = new Teclado("Hyperx", "PS/2");
console.log(teclado1.toString())

let monitor1 = new Monitor("Asus", 22);
console.log(monitor1.toString());

let raton2 = new Raton("Logtech", "USB");
let teclado2 = new Teclado("Logtech", "USB");
let monitor2 = new Monitor("LG", 27);

let computadora1 = new Computadora("Juan");
computadora1.dispositivosComputadora= raton1;
computadora1.dispositivosComputadora= teclado1;
computadora1.dispositivosComputadora= monitor1;
console.log(computadora1.toString());

let computadora2 = new Computadora("Martin");
computadora2.dispositivosComputadora= raton2;
computadora2.dispositivosComputadora= teclado2;
computadora2.dispositivosComputadora= monitor2;

let orden1 = new Orden();
orden1.agregarComputadora= computadora1;
orden1.agregarComputadora= computadora2;
console.log(orden1.mostrarOrden);
