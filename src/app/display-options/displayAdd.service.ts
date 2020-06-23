import { Injectable,EventEmitter } from '@angular/core';
import { PostAddingService } from '../postAdd.service';

@Injectable()
export class DisplayService{
    constructor(private postAddingService:PostAddingService){}
    displayType=1;
    displayTypeChanged=new EventEmitter<number>();
    dataElemets=[];
    dataElemets2=[];

    
    diplayTypeOn(type:number){
        this.displayType=type;
        this.displayTypeChanged.emit(type);
      }
      accessDisplayType(){
        console.log(this.displayType);
        this.displayTypeChanged.emit(this.displayType);
        return this.displayType;

    }
    displayPosts(){
        this.displayTypeChanged.emit(this.displayType);
    this.dataElemets2 = this.postAddingService.getPosts();
this.dataElemets=[];
    if (this.displayType === 2) {

      for (let i of this.dataElemets2) {
        if (i.complete) {
          this.dataElemets.push(i);
        }
      }
    }
    else if (this.displayType === 3) {
      for (let i of this.dataElemets2) {
        if (!i.complete) {
          this.dataElemets.push(i);
        }
      }

    }
    else if (this.displayType === 1) {

      for (let i of this.dataElemets2) {
        if (!i.complete || i.complete) {
          this.dataElemets.push(i);
        }
      }

    }

    return this.dataElemets;
}
}