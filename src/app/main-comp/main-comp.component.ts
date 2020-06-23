import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {
  addButtonMode=true;
  constructor() { }

  ngOnInit(): void {
  }
  onAddFun(){
    this.addButtonMode=true;
  }

}
