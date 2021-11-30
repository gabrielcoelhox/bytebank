import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias/';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicioanar(transferencia: Transferencia) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
