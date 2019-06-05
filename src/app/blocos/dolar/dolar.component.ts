import {Component, OnInit} from '@angular/core';
import {DolarService} from '../../dolar.service';
import {Dolar} from '../dolar';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {

  dolar: Dolar[];

  constructor(private service: DolarService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.dolar = dados);
  }

}
