import { Component, OnInit } from '@angular/core';
import * as angular from "angular";
import * as $ from 'jquery';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent implements OnInit {

  items:any[] = [
    {
      name: "Tomato",
      price: 10,
      img: "../../../assets/1x/tomato.png",
      qty: 0,
    },
    {
      name: "Spinach",
      price: 15,
      img: "../../../assets/1x/spinach.png",
      qty: 0,

    },
    {
      name: "Red Chilli",
      price: 3,
      img: "../../../assets/1x/chilli.png",
      qty: 0,

    },
    {
      name: "Pea",
      price: 7,
      img: "../../../assets/1x/pea.png",
      qty: 0,

    },
    {
      name: "Cucumber",
      price: 13,
      img: "../../../assets/1x/cucumber.png",
      qty: 0,

    },
    {
      name: "Green Chilli",
      price: 4,
      img: "../../../assets/1x/green-chilli.png",
      qty: 0,
    },
  ]
  // interface Product{

  // }
Amount:any =[
  {amount:0}
]

  counter = 0;

  min(i) {
    if(this.items[i].qty <= 0){
      return
    }
    else{
      this.items[i].qty -= 1
    }
  }

  plus(i) {
    this.items[i].qty += 1;
}

  cart(i){
    // for (let j = 0; j < this.items.length; j++) {
    //   this.Amount[0].amount =  this.items[i].qty * this.items[i].price;
    //   console.log(this.Amount)
    // }
    //  for (let j = 0; j < this.items.length; j++) {
    //   this.items[i].amount =  this.items[i].qty * this.items[i].price;
    //   console.log(this.items[i].amount)
    // }

  }
constructor() { }

ngOnInit(): void {
}

}
