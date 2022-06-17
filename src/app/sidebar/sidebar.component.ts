import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/accueil', title: 'Accueil',  icon: 'pe-7s-home', class: '' },
    { path: '/table', title: 'Chauffeurs',  icon:'pe-7s-note2', class: '' },
    { path: '/avis', title:'Avis', icon:'pe-7s-pen', class: ''},
    { path: '/taxi', title:'Taxi', icon:'pe-7s-car', class: ''},
    { path: '/annonce', title:'Annonces', icon:'pe-7s-gift', class:''},
    { path: '/agence', title:'Agence', icon:'pe-7s-home', class: ''},
    { path: '/planning', title:'Planning', icon:'pe-7s-date', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
