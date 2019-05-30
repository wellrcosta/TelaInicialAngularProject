import { Component, OnInit } from '@angular/core';
import {ApigeralService} from '../apigeral.service';
import {Aniversariante} from '../aniversarios/aniversariante';

@Component({
  selector: 'app-novos-colaboradores',
  templateUrl: './novos-colaboradores.component.html',
  styleUrls: ['./novos-colaboradores.component.css', '../../assets/css/bootstrap.component.css']
})
export class NovosColaboradoresComponent implements OnInit {

  col: Aniversariante[];

  constructor(private service: ApigeralService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.col = dados);
  }

}
