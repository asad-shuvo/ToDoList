export class Post{
    public id:number;
    public title:string;
    public description:string;
    public complete:boolean;
  constructor(id:number,title:string,description:string,complete:boolean){
      this.id=id;
      this.title=title;
      this.description=description;
      this.complete=complete;
  } 
}