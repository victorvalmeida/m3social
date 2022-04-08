import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss','./sobre-2.component.scss', './sobre-3.component.scss', './fonts.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("M3Social - Sobre Nós");
  }

  ngOnInit(): void {
  }

}
