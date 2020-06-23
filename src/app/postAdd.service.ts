import { Injectable,EventEmitter, OnInit} from '@angular/core';
import { Post } from './post.model';

@Injectable()
export class PostAddingService implements OnInit{
    editIdGet=new EventEmitter<number>();
    displayOnNow=new EventEmitter<boolean>();
   
    ngOnInit(){

    }
titleValue="";
descriptionValue="";
editMode=false;
addMode=true;
editId:number;
dataElementss:Post[]=[];


addButtonMode:boolean;

typeOfMode(typeMode:number,id:number){    
    if(typeMode===0){
        this.editMode=true;
        this.addMode=false;
    }
    else if (typeMode===1){
        // this.editId=id;
        this.editMode=false;
        this.addMode=true;        
    }
}



addPost(title: string, description: string) {
    this.displayOnNow.emit(true);
    this.dataElementss=this.getPosts();
    let M=-1;
    for(let i of this.dataElementss){
        M=Math.max(M,i.id);
    }
    let cnt=M+1;
    this.addButtonMode=false;
    const temp={id:cnt,title: title, description: description,complete:false};
    // this.dataElementss.push({id:cnt,title: title, description: description,complete:false});
    this.addPostServer(temp);
    this.displayOnNow.emit(true);
}
displayAcceler(){
    this.displayOnNow.emit(true);
}
  editIdSet(id:number){
    
      this.editId=id;  
      this.editIdGet.emit(id);
  }
    showValueOnInput(){
        for(let elemnt of this.dataElementss){
            if(elemnt.id===this.editId){
               this.titleValue=elemnt.title;
               this.descriptionValue=elemnt.description;
                break;
            }
        } 
 }
  editPost(title,des){

    console.log(title+" "+des);
    
      this.dataElementss=this.getPosts();
    for(let elemnt of this.dataElementss){
        if(elemnt.id===this.editId){
            elemnt.title=title;
            elemnt.description=des;
            localStorage.clear();
            this.dataElementss.forEach(el=>{
                this.addPostServer(el);
            });
            break;
        }
    }
    this.displayOnNow.emit(true);
  }

  checkOption(id:number){
      this.dataElementss=this.getPosts();
    for(let elemnt of this.dataElementss){
        if(elemnt.id===id){
           (elemnt.complete===true)?elemnt.complete=false:elemnt.complete=true;
            break;
        }
    }
    localStorage.clear();
    this.dataElementss.forEach(el=>{
        this.addPostServer(el);
    }) 
  }

 
  

  getPosts() {
    let posts;
    if (localStorage.getItem('posts') === null) {
      posts = [];
    } else {
      posts = JSON.parse(localStorage.getItem('posts'));
    }
  
    return posts;
  }
  
   addPostServer(post) {
    const posts = this.getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
}