import {Component, OnInit} from '@angular/core';
import {Noticias} from './noticias';
import {NoticiasService} from './noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css', '../../assets/css/bootstrap.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: Noticias[];

  constructor(private service: NoticiasService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.noticias = dados);
  }

}
