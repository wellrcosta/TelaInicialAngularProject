import {Component, OnInit} from '@angular/core';
import {Banner} from './banner';
import {BannerService} from './banner.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./css/materialize.min.css', './slider.component.css']
})
export class SLIDERComponent implements OnInit {

  banner: Banner[];

  constructor(private service: BannerService) {
  }

  ngOnInit() {
    this.service.list()
      .subscribe(dados => this.banner = dados);
  }

}
