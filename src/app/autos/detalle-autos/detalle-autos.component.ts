import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from 'src/app/datos/auto';
import { AutosService } from 'src/app/shared/autos.services';

@Component({
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {

  titlePage="Detalle del auto: "
  auto: Auto | undefined = new Auto;
  imagenWidth=500;
  imagenMargin=1;
  
  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _autosService: AutosService
  ) { }

  ngOnInit(): void {
    let id = Number( this._activateRoute.snapshot.paramMap.get('id'));
    this.auto = this._autosService.obtenAuto(id);
    this.titlePage += id + ' ';
  }

  onBack(): void{
    this._router.navigate(['/autos']);
  }

  goComprar(): void{
    alert("En construcción...");
    this._router.navigate(["/autos"]);
  }
  

}
