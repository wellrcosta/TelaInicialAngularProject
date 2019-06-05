import {Component, OnInit} from '@angular/core';
import {Tempo} from './tempo';
import {ApitempoService} from '../../apitempo.service';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {

  tempo: Tempo[];

  constructor(private service: ApitempoService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.tempo = dados);
  }

}
