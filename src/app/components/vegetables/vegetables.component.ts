import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent implements OnInit {

  items = [
    {
      name: "Tomato",
      price: "10",
      img:"../../../assets/1x/tomato.png"
    },
    {
      name: "Spinach",
      price: "15",
      img:"../../../assets/1x/spinach.png"

    },
    {
      name: "Red Chilli",
      price: "3",
      img:"../../../assets/1x/chilli.png"

    },
    {
      name: "Pea",
      price: "7",
      img:"../../../assets/1x/pea.png"

    },
    {
      name: "Cucumber",
      price: "13",
      img:"../../../assets/1x/cucumber.png"

    },
    {
      name: "Green Chilli",
      price: "4",
      img:"../../../assets/1x/green-chilli.png"

    },
  ]

  constructor() { }
   counter = 0;
  min($event){
    var inp = $event.target.parentNode.children[1];
    if(inp.value == 0){
      return;
    }
    else{
      var inc = this.counter--
      inp.value = inc; 

    }
  }
  plus($event){
    var inp = $event.target.parentNode.children[1];
    var inc = this.counter++
    inp.value = inc; 
  }
  ngOnInit(): void {
  }
  
}
