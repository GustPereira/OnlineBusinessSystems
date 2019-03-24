import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  outputs: ['openSidenav']
})
export class HeaderComponent implements OnInit {
  openSidenav = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  toggleSidenav() {
    this.openSidenav.emit();
  }
}
