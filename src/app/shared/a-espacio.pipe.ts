import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aEspacio'
})
export class AEspacioPipe implements PipeTransform {

  transform(aTransformar: string, reemplazar: string): unknown {
    let sustituye: string = " ";
    return aTransformar.replace(reemplazar, sustituye);
  }

}
