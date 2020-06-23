import { Injectable } from '@angular/core';
import { PostAddingService } from '../postAdd.service';

@Injectable()
export class DeletePostService{
    constructor(private postAddingService:PostAddingService){}

    deletePost(id:number){
        // console.log(id);
        let element = this.postAddingService.getPosts();
        let pos = -1;
        for (let i = 0; i < element.length; i++) {
    
          if (id === element[i].id) {
            pos = i
            break;
          }
        }
        if (pos !== -1) {
          element.splice(pos, 1);
          localStorage.clear();
          element.forEach(el => {
            this.postAddingService.addPostServer(el);
          });
        }
    }
}