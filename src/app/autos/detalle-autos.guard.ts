import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleAutosGuard implements CanActivate {

  constructor (private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      const id = Number(route.paramMap.get('id'));
      if(isNaN(id) || id < 0){
        alert("Id es inválido: " + id );
        this.router.navigate (["/autos"]);
      }
      return true;
  }
  
}
