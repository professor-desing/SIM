'use strict'

class Puerto {
    constructor(nombre) {
        this.nombre = nombre;
    }

    gruas = [189, 266, 358, 464, 590, 622, 786, 800, 860];

    sumaMaquinaria;
    grua1 = 0;
    grua2 = 0;
    grua3 = 0;
    grua4 = 0;
    grua5 = 0;
    grua6 = 0;
    grua7 = 0;
    grua8 = 0;
    grua9 = 0;

    maquinariaDisponible() {
        /*Calculo del MD*/
        this.sumaMaquinaria = 0;
        var cap = 0;
        do {
            var nuevaGrua = Math.floor(Math.random() * (1 + 8 - 0) + 0);
            this.sumaMaquinaria += this.gruas[nuevaGrua];
            cap++;

            if (this.gruas[nuevaGrua] == this.gruas[0]) {
                this.grua1++;
            }
            if (this.gruas[nuevaGrua] == this.gruas[1]) {
                this.grua2++;
            }
            if (this.gruas[nuevaGrua] == this.gruas[2]) {
                this.grua3++;
            }
            if (this.gruas[nuevaGrua] == this.gruas[3]) {
                this.grua4++;
            }
            if (this.gruas[nuevaGrua] == this.gruas[4]) {
                this.grua5++;
            }
            if (this.gruas[nuevaGrua] == this.gruas[5]) {
                this.grua6++;
            }
            if (this.gruas[nuevaGrua] == this.gruas[6]) {
                this.grua7++;
            }
            if (this.gruas[nuevaGrua] == this.gruas[7]) {
                this.grua8++;
            }
            if (this.gruas[nuevaGrua] == this.gruas[8]) {
                this.grua9++;
            }
        }
        while (cap < 9);
        return this.sumaMaquinaria;
    }
}

class Barco extends Puerto {
    constructor(nombre, empresa, pais) {
        super(nombre);
        this.empresa = empresa;
        this.pais = pais;
    }
    sumaBarcos;
    barcos = [1665, 1572, 5344, 4639, 8750, 8300, 11000, 13500];
    resDay;
    setTime = 0;
    resultado = super.grua1;
    flota = 0;

    cargaBuques() {
        /*Calculo del CTP = MD/CC*/
        var day = document.querySelector("#day");
        var week = document.querySelector("#week");
        var month = document.querySelector("#month");
        var errormatch = document.querySelector(".masive");
        this.sumaBarcos = 0;
        var cap = 0;
        var fila = 0;
        this.resDay = parseInt(prompt("Time (day[0], week[1], month[2])?: ", 0));
        if (this.resDay == 0) {
            fila = Math.floor(Math.random() * (1 + 20 - 1) + 1);
            week.style.display = "none";
            month.style.display = "none";
            this.flota = fila;
        }
        if (this.resDay == 1) {
            fila = Math.floor(Math.random() * (20 + 75 - 20) + 20);
            day.style.display = "none";
            month.style.display = "none";
            this.flota = fila;
        }
        if (this.resDay == 2) {
            fila = Math.floor(Math.random() * (75 + 180 - 75) + 75);
            day.style.display = "none";
            week.style.display = "none";
            this.flota = fila;
        }

        if (this.resDay > 2) {
            errormatch.style.display = "none";
            alert("Tiempo excedido!");
        }

        if (isNaN(this.resDay)) {
            errormatch.style.display = "none";
            alert("Entrada no valida!");
        }

        do {
            var barcoNuevo = Math.floor(Math.random() * (1 + 7 - 0) + 0);
            this.sumaBarcos += this.barcos[barcoNuevo];
            cap++;
        } while (cap < fila);
        return this.sumaBarcos;
    }

    capacidadOperativa() {
        var paqueteGruas = super.maquinariaDisponible();
        var paqueteBarco = this.cargaBuques();
        var puertoCapacidad = 0;
        puertoCapacidad = paqueteBarco / paqueteGruas;
        this.setTime = puertoCapacidad;

        var filaEnPuerto = document.querySelector(".fila");

        filaEnPuerto.innerHTML = "<p>Cantidad de barcos: " + this.flota + " barcos</p>";

        var resPaqueteGruas = document.querySelector(".gruas");

        resPaqueteGruas.innerHTML = "<p>Capacidad total de carga/descarga de las gruas: " + paqueteGruas + " tons</p>";

        var respaqueteBarco = document.querySelector(".barcos");

        respaqueteBarco.innerHTML = "<p>Total de carga de los barcos: " + paqueteBarco + " tons</p>";

        var resPuertoCapacidad = document.querySelector(".puerto");

        document.querySelector(".loading").style.display = 'none';

        if (puertoCapacidad <= 12 && this.resDay == 0) {
            resPuertoCapacidad.innerHTML = "<p>Capacidad operativa diaria del puerto: " + parseInt(puertoCapacidad) + " horas</p>";
        } else
        if (12 < puertoCapacidad <= 24 && this.resDay == 0) {
            var perdida = puertoCapacidad - 12;
            resPuertoCapacidad.innerHTML = "Capacidad operativa diaria  excedida por: " + parseInt(perdida + " ") + " hrs" + " (" + parseInt(perdida + 12) + " hrs)";
        }
        // ?Semana
        else if (puertoCapacidad <= 84 && this.resDay == 1) {
            resPuertoCapacidad.innerHTML = "<p>Capacidad operativa semanal del puerto: " + parseInt(puertoCapacidad) + " horas</p>";
        } else
        if (puertoCapacidad > 84 && this.resDay == 1) {
            var perdida = puertoCapacidad - 84;
            resPuertoCapacidad.innerHTML = "Capacidad operativa semanal excedida por: " + parseInt(perdida + " ") + " hrs" + " (" + parseInt(perdida + 84) + " hrs)";
        }
        // ?Mes
        else if (puertoCapacidad < 322 && this.resDay == 2) {
            resPuertoCapacidad.innerHTML = "<p>Capacidad operativa mensual del puerto: " + parseInt(puertoCapacidad) + " horas</p>";
        } else
        if (puertoCapacidad > 322 && this.resDay == 2) {
            var perdida = puertoCapacidad - 322;
            resPuertoCapacidad.innerHTML = "Capacidad operativa mensual excedida por: " + parseInt(perdida + " ") + " hrs" + " (" + parseInt(perdida + 322) + " hrs)";
        }

        var ctx = document.querySelector(".graficas").getContext("2d");

        var myChart = new Chart(ctx, {
            type: "doughnut",
            defaultFontSize: 55,
            data: {
                labels: ['grua1 (189)', 'grua2 (266)', 'grua3 (358)', 'grua4 (464)', 'grua5 (590)', 'grua6 (622)', 'grua7(786)', 'grua8 (800)', 'grua9 (860)'],
                datasets: [{
                    label: 'Capacidad operativa del puerto (gruas)',
                    data: [this.grua1 * this.gruas[0], this.grua2 * this.gruas[1], this.grua3 * this.gruas[2], this.grua4 * this.gruas[3], this.grua5 * this.gruas[4], this.grua6 * this.gruas[5], this.grua7 * this.gruas[6], this.grua8 * this.gruas[7], this.grua9 * this.gruas[8]],
                    backgroundColor: [
                        '#f13c9d',
                        '#f80b25',
                        '#fae920',
                        '#1e9730',
                        '#1b86bc',
                        '#243796',
                        '#edecda',
                        '#f78121',
                        '#6f0a82'
                    ]
                }]
            }
        });

        var charts = [myChart];

        return charts
    }

    resultados() {
        var filabarcos = 0;
        var mediaBarcos = 0;
        var mediaPuerto = 0;
        var variBarcos;
        var variPuerto;
        var desviBarcos;
        var desviPuerto;
        // var nuevasGruas = Math.floor(Math.random() * (1 + 8 - 0) + 0);
        var grua = 0;
        // var barcosNuevos = Math.floor(Math.random() * (1 + 7 - 1) + 1);
        filabarcos = this.sumaBarcos;
        console.log('Fila Barcos: ' + filabarcos);
        grua = this.sumaMaquinaria
        console.log('Gruas: ' + grua);
        // *Media
        mediaBarcos = filabarcos / 100;
        mediaPuerto = ((filabarcos / grua) / 100);

        var mediaBarcoRes = document.querySelector(".media");
        var mediaPuertoRes = document.querySelector(".mediaPuerto");

        mediaBarcoRes.innerHTML = "<p>Media (Tonelaje-Barcos): " + mediaBarcos + " tons</p>";

        mediaPuertoRes.innerHTML = "<p>Media (Puerto-Tiempo): " + parseFloat(mediaPuerto).toFixed(2) + " hrs</p>";

        // ?Varianza
        variBarcos = (filabarcos - mediaBarcos);
        variBarcos = ((variBarcos * variBarcos) / 100);

        variPuerto = ((filabarcos / grua) - mediaPuerto);
        variPuerto = ((variPuerto * variPuerto) / 100);

        var variBarcosRes = document.querySelector(".varianza");
        var mediaPuertoRes = document.querySelector(".varianzaPuerto");

        variBarcosRes.innerHTML = "<p>Varianza (Tonelaje-Barcos): " + variBarcos + " tons</p>";
        mediaPuertoRes.innerHTML = "<p>Varianza (Puerto-Tiempo): " + parseFloat(variPuerto).toFixed(2) + " hrs</p>";

        // !Desviacion estandar
        desviBarcos = (filabarcos - mediaBarcos);
        desviBarcos = ((desviBarcos * desviBarcos) / 99);

        desviPuerto = ((filabarcos / grua) - mediaPuerto);
        desviPuerto = ((desviPuerto * desviPuerto) / 99);

        desviBarcos = Math.sqrt(desviBarcos);
        desviPuerto = Math.sqrt(desviPuerto);

        var desviBarcosRes = document.querySelector(".desviacion");
        var desviPuertoRes = document.querySelector(".desviacionPuerto");

        desviBarcosRes.innerHTML = "<p>Desviacion estandar (Tonelaje-Barcos): " + parseFloat(desviBarcos).toFixed(2) + " tons</p>";
        desviPuertoRes.innerHTML = "<p>Desviacion estandar (Puerto-Tiempo): " + parseFloat(desviPuerto).toFixed(2) + " hrs</p>";
    }
}

const barcos = new Barco('Ensenada B.C', 'Microsoft', 'US');
barcos.capacidadOperativa();
barcos.resultados();