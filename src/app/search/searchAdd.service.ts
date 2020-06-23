import { Injectable } from '@angular/core';
import { PostAddingService } from '../postAdd.service';
@Injectable()
export class SearchAddService{
    searchVal="";
    dataElement=[];

    constructor(private postAddService:PostAddingService){

    }
    searchValKeep(val:string){
        this.searchVal =val;
    
    }
    serchValRet(){
        let val=this.searchVal;
        // return this.searchVal;
        let dataElemnts= this.postAddService.getPosts();
        let dd=[];
        
        for (let i = 0; i < dataElemnts.length; i++) {
         let str = dataElemnts[i].title;
         let re = new RegExp(val, "g")
         let res = str.match(re);
         if (res) {
          dd.push(dataElemnts[i]);
         }
     
       }
       return dd;
    }
    
}