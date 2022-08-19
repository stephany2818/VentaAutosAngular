import { Component, Input, OnInit, SimpleChange } from "@angular/core";
import { Auto } from "src/app/datos/auto";
import { AutosService } from "src/app/shared/autos.services";

// el decorador @Component, ayuda a convertir la clase en component 
@Component({
    selector: "lista-autos", //directivas en HTML 
    templateUrl: "./lista-autos.component.html", //Apunta al archivo de la logica HTML 
    styleUrls: ['./lista-autos.component.css'] //estilos de la pagina 
})

//export convierte la clase en publica (igual al public de java)
export class ListaAutosComponent implements OnInit{
    
    tituloListaAutos: string = "Lista de Autos";

    //tabla de autos
    listaAutos: Auto[] = [];
    imagenWidth=120;
    imagenMargin=3;

    //boton Muestra Imagenes
    muestraImagen: boolean = false;

    //Filtrar autos  
    listaAutosFiltrados: Auto[] = [];
    private _filtro: string = "";

    get filtro(): string {
        return this._filtro;
    }
    set filtro (filtro: string){
        this._filtro = filtro;
        this.filtraAutos(this._filtro);
    }

    filtraAutos(filtroPor: string): void {
        filtroPor = filtroPor.toLocaleLowerCase();
        this.listaAutosFiltrados = this.listaAutos.filter((auto: Auto) => auto.marca.toLocaleLowerCase().includes(filtroPor));
    }

    constructor (private _autosServices: AutosService) {}

    ngOnInit(): void {
        this.listaAutos= this._autosServices.obtenListaAutos();
        this.listaAutosFiltrados = this.listaAutos;
    }

    muestraImagenes(): void {
        //debugger;
        this.muestraImagen = !this.muestraImagen;
    }

    onClickCalificacion(mensaje?: string): void{
        alert("Se realizó click en la: " + mensaje);
    }
    
}