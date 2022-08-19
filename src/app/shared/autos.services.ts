import { Injectable } from "@angular/core"; 
import { auditTime } from "rxjs";
import { Auto } from "../datos/auto";

@Injectable({
    providedIn: "root"
})

export class AutosService{

    listaAutos: Auto[] = [];

    // Cargar la lista de autos en la pantalla de automoviles
    public obtenListaAutos(): Auto[] {
        if (this.listaAutos.length == 0){
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos;
    }

    private _determinaListaAutos(): Auto[] {
        let listaAutos= [
            {
                id: 1,
                marca: "Audi",
                modelo: "A4",
                anio: 2020,
                color: "Azul Cielo",
                kilometros: 20500,
                precio: 25000000,
                calificacion: 4.4,
                imagenUrl: "assets/imagenes/Carro1.png"
            },
            {
                id: 2,
                marca: "Audi",
                modelo: "A4",
                anio: 2020,
                color: "Rojo Negro",
                kilometros: 20500,
                precio: 25000000,
                calificacion: 3.5,
                imagenUrl: "assets/imagenes/Carro2.png"
            },
            {
                id: 3,
                marca: "Audi",
                modelo: "A4",
                anio: 2020,
                color: "Gris Galapago",
                kilometros: 20500,
                precio: 25000000,
                calificacion: 1.9,
                imagenUrl: "assets/imagenes/Carro3.png"
            },
            {
                id: 4,
                marca: "Audi",
                modelo: "A4",
                anio: 2020,
                color: "Negro Noche",
                kilometros: 20500,
                precio: 25000000,
                calificacion: 4.4,
                imagenUrl: "assets/imagenes/Carro4.png"
            },
            {
                id: 5,
                marca: "Chevrolet",
                modelo: "Camaro Six SS",
                anio: 2023,
                color: "Rojo Fuego",
                kilometros: 0,
                precio: 224990000,
                calificacion: 2.5,
                imagenUrl: "assets/imagenes/Carro5.png"
            },
            {
                id: 6,
                marca: "Chevrolet",
                modelo: "Camaro Six SS",
                anio: 2023,
                color: "Rojo Fuego",
                kilometros: 0,
                precio: 224990000,
                calificacion: 4.8,
                imagenUrl: "assets/imagenes/Carro6.png"
            },
        ]
        return listaAutos;
    }

    // Cargar el detalle del automovil
    public obtenAuto(id: number): Auto | undefined {
        if (this.listaAutos.length == 0){
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos.find( auto => auto.id == id);
    }
}