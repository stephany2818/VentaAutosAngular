import { Component, EventEmitter, OnChanges, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnChanges {

  //Estrellas
  faStar = faStar;
  starsList: any[] = []; 

  constructor() { }

  @Input() calificacion: number | undefined = 0;
  
  @Output () starsClick = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
      this.starsList = [];
      if (this.calificacion == undefined){
        this.starsList.push(0);
      }
      else{
        for(var i = 1; i <= this.calificacion; i++)
        {
            this.starsList.push(1);
        }
      } 
   }

  onClick(stars?: number): void{
    this.starsClick.emit("Calificación " + stars)
  }
}
