import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];

  constructor() {
  this.listaTransferencia = [];
  }

  get transferencias() {
  return this.listaTransferencia;
  }

  adicioanar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
