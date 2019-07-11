import {Component, OnInit} from '@angular/core';
import {Interligada} from './interligada';
import {SkainterligadaService} from './skainterligada.service';

@Component({
  selector: 'app-ska-interligada',
  templateUrl: './ska-interligada.component.html',
  styleUrls: ['../../assets/css/bootstrap.component.css', './ska-interligada.component.css']
})
export class SkaInterligadaComponent implements OnInit {

  interligada: Interligada[];

  constructor(private service: SkainterligadaService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.interligada = dados);
  }

}
