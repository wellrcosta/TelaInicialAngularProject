import {Component, OnInit} from '@angular/core';
import {Aniversariante} from '../aniversarios/aniversariante';
import {AniversariosService} from '../aniversarios.service';

@Component({
  selector: 'app-aniversarios2',
  templateUrl: './aniversarios2.component.html',
  styleUrls: ['./aniversarios2.component.css', '../../assets/css/bootstrap.component.css']
})
export class Aniversarios2Component implements OnInit {

  aniver: Aniversariante[];

  constructor(private service: AniversariosService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.aniver = dados);
  }

}
