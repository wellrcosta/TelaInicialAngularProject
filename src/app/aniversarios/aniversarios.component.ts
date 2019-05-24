import { Component, OnInit } from '@angular/core';
import { Aniversariante } from '../aniversarios/aniversariante';
import { AniversariosService } from '../aniversarios.service';

@Component({
  selector: 'app-aniversarios',
  templateUrl: './aniversarios.component.html',
  styleUrls: ['./aniversarios.component.css']
})
export class AniversariosComponent implements OnInit {

  aniver : Aniversariante[];

  constructor(private service: AniversariosService ) {
  }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.aniver = dados);
  }

}
