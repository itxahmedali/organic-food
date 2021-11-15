import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss'],
})
export class VegetablesComponent implements OnInit {
  items: any[] = [
    {
      name: 'Tomato',
      price: 10,
      img: '../../../assets/1x/tomato.png',
      qty: 0,
    },
    {
      name: 'Spinach',
      price: 15,
      img: '../../../assets/1x/spinach.png',
      qty: 0,
    },
    {
      name: 'Red Chilli',
      price: 3,
      img: '../../../assets/1x/chilli.png',
      qty: 0,
    },
    {
      name: 'Pea',
      price: 7,
      img: '../../../assets/1x/pea.png',
      qty: 0,
    },
    {
      name: 'Cucumber',
      price: 13,
      img: '../../../assets/1x/cucumber.png',
      qty: 0,
    },
    {
      name: 'Green Chilli',
      price: 4,
      img: '../../../assets/1x/green-chilli.png',
      qty: 0,
    },
  ];
  Amount: any = [];
  Total: any = []
  counter = 0;

  min(i) {
    if (this.items[i].qty <= 0) {
      return;
    } else {
      this.items[i].qty -= 1;
      this.Amount.splice(-1, 1);
      console.log(this.Amount);
    }
  }

  plus(i) {
    this.items[i].qty += 1;
    this.Amount.push(this.items[i].price);
    console.log(this.Amount);
  }
  cart() {
    var total = 0;
    for (let i in this.Amount) {
      total += this.Amount[i];
    }
    this.Total[0] = total
    console.log(this.Total);
  }
  constructor() { }

  ngOnInit(): void { }
}
