import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./mid-far.scss','./mid-end.scss']
})
export class HomeComponent implements OnInit {
  showMenu: boolean = false;

 /**  images = [
    { path: '../../assets/img/Depoimentos-1.png', id: '1', title: 'Image 1' },
    { path: '../../assets/img/Depoimentos-2.png', id: '2', title: 'Image 2' },
    { path: '../../assets/img/Depoimentos-3.png', id: '3', title: 'Image 3' },
    { path: '../../assets/img/Depoimentos-4.png', id: '4', title: 'Image 4' },
    { path: '../../assets/img/Depoimentos-5.png', id: '5', title: 'Image 5' },
    { path: '../../assets/img/Depoimentos-6.png', id: '6', title: 'Image 6' }
  ];  */

  customOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    center: true,
    dots: true,
    navSpeed: 70,
    autoHeight: true,
    autoWidth: false,
    responsive: {
      0: { items: 2 },
      500: { items: 2 },
      1000: { items: 2 }
    }
  }


  constructor(private titleService:Title) {
    this.titleService.setTitle("M3Social");

  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
