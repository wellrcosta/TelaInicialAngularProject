import {Component, OnInit} from '@angular/core';
import {Aniversariante} from '../aniversarios/aniversariante';
import {AniversarioSKAService} from '../aniversario-ska.service';

@Component({
  selector: 'app-aniversario-ska',
  templateUrl: './aniversario-ska.component.html',
  styleUrls: ['../../assets/css/bootstrap.component.css', './aniversario-ska.component.css']
})
export class AniversarioSKAComponent implements OnInit {

  aniver: Aniversariante[];

  constructor(private service: AniversarioSKAService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.aniver = dados);
  }

}
