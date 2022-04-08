import { Router, Event, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  marginTop = '';

  constructor(
    private router: Router
  ) {
    router.events.subscribe((value: Event) => {
      if (value instanceof NavigationEnd) {
        this.marginTop = value.url == "/fazer" ? '-670px' : '-185px';
      }
    });
   }

  ngOnInit(): void {
  }

}
