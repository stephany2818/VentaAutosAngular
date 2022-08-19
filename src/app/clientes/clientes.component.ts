import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
 titlepage = "Registro del Cliente";
 cliente = { nombre:"", password:"", telefono:"", email:""};
 quiereContacto: boolean = false;

  constructor( private _router: Router,) { }

  ngOnInit(): void {
  }

  public goInicio(): void{
    this._router.navigate(['/inicio']); 
  }

  public goRegistra(): void{
    alert("En construcción...");
    this._router.navigate(["/autos"]);
  }

}
