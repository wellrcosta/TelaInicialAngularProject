import {Component, OnInit} from '@angular/core';
import {DepoimentoService} from './depoimento.service';
import {Depoimento} from './depoimento';

@Component({
  selector: 'app-minha-historia',
  templateUrl: './minha-historia.component.html',
  styleUrls: ['../../assets/css/bootstrap.component.css', './minha-historia.component.css']
})
export class MinhaHistoriaComponent implements OnInit {

  depoimento: Depoimento[];

  constructor(private service: DepoimentoService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.depoimento = dados);
  }

}
