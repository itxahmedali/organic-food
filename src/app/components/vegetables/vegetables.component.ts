import { Component, Input, OnInit } from '@angular/core';
import { iif } from 'rxjs';

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
  cart_items:any = []
  Total:any = [0]
  counter = 0;

  min(i) {
    if (this.items[i].qty <= 0) {
      return;
    } else {
      // counter
      this.items[i].qty -= 1;
      // removing items from Amount array
      var price = this.items[i].price;
      var index = this.Amount.indexOf(price);
      if (index > -1) {
        this.Amount.splice(index, 1);
        // cart total
        var total = 0;
        for (let i in this.Amount) {
          total += this.Amount[i];
        }
        this.cart_items.push(this.items[i].name);
        this.Total[0] = total;
      }
    }
  }

  plus(i) {
    // counter
    this.items[i].qty += 1;
    // adding items in Amount array
    this.Amount.push(this.items[i].price);
    // cart total
    var total = 0;
    for (let i in this.Amount) {
      total += this.Amount[i];
    }
    this.cart_items.push(this.items[i].name);
    this.Total[0] = total;
    console.log('total', this.Total);

  }
  cart(i) {
    // for (let i in this.Amount) {
    //   this.Total[i] -= this.Amount[i];
    // }
    // console.log('total', this.Total);
    // console.log('amount', this.Amount);
    // this.cart_items.push(this.items[i].name);
    // this.Total[0] = total
  }
  constructor() { }

  ngOnInit(): void { }
}
