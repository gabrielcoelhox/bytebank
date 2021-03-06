import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Output, Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {
  }

  transferir() {
    console.log('Solicitada nova transferĂȘncia');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicioanar(valorEmitir).subscribe(resultado =>{
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    }, (error) =>{
      console.error(error)
    });
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
