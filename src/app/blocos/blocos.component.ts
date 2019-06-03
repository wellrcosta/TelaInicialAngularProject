import { Component, OnInit } from '@angular/core';
import {DolarService} from '../dolar.service';
import {Dolar} from './dolar';

@Component({
  selector: 'app-blocos',
  templateUrl: './blocos.component.html',
  styleUrls: ['./blocos.component.css']
})
export class BlocosComponent implements OnInit {

  dolar: Dolar[];

  constructor(private service: DolarService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.dolar = dados);
  }

}
