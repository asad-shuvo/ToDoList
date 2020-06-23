import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostAddingService } from '../postAdd.service';
import { Post } from '../post.model';
import { DisplayService } from './displayAdd.service';

@Component({
  selector: 'app-display-options',
  templateUrl: './display-options.component.html',
  styleUrls: ['./display-options.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class DisplayOptionsComponent implements OnInit {

  constructor(private postAddingService:PostAddingService,
    private displayService:DisplayService) { }
  dataElements:Post[]=[];
  
  ngOnInit(): void {
    this.dataElements=this.postAddingService.dataElementss;
  }
  myFunAllShow(){
    this.displayService.diplayTypeOn(1);
  }
  myFunDoneShow(){
    this.displayService.diplayTypeOn(2);
  }
  myFunPendingShow(){
    this.displayService.diplayTypeOn(3);
  }

}
