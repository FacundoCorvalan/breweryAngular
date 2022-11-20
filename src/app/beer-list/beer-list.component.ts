import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [
    {
      name: 'Bitter call saul',
      type: 'IPA',
      price: 180,
      stock: 5,
      image: 'assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },

    {
      name: 'Red Red Wine',
      type: 'Barley wine',
      price: 200,
      stock: 3,
      image: 'assets/img/porter.jpg',
      clearance: true,
      quantity: 0,
    },

    {
      name: 'Yellow submarine',
      type: 'Golden ale',
      price: 180,
      stock: 0,
      image: 'assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  maxReached(m: string) {
    alert(m);
  }
}
