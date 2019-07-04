import {Component, OnInit} from '@angular/core';
import {Eventos} from './eventos';
import {EventosService} from './eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: Eventos[];

  constructor(private service: EventosService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.eventos = dados);
  }

}
