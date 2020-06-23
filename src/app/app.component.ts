import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostAddingService } from './postAdd.service';
import { Post } from './post.model';
import { SearchAddService } from './search/searchAdd.service';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { DisplayService } from './display-options/displayAdd.service';
import { DeletePostService } from './delete-post/deletePost.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchValue: any = '';

  constructor(
    public dialog: MatDialog,
    private postAddingService: PostAddingService,
    private searchAddService: SearchAddService,
    private displayService:DisplayService,
    private deleteService:DeletePostService) {
  }

  openDialog() {
    let dialogRef = this.dialog.open(MyDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  title = 'toDoList';
  addButtonMode = false;
  len: number;
  editMode = false;
  addMode = true;
  displayType = 1;
  searchVal = "";

  dataElements: Post[] = [];
  dataElements2 = [];
  chaneMode(eventData: boolean) {
    console.log("eventData " + eventData);
    this.addButtonMode = eventData;
  }
  ngOnInit() {
    this.displayAcces();
   
    this.dataElements = this.postAddingService.getPosts();
    this.len = this.dataElements.length;
    if (this.postAddingService.displayOnNow) {
      this.postAddingService.displayOnNow.subscribe(
        (type: boolean) => {
          this.displayAcces();
        }
      );
    }
  }

  deletePosts(id: number) {
    this.deleteService.deletePost(id);
    this.displayAcces();
  }
  onAddclick() {
    this.postAddingService.typeOfMode(1, 0);
    this.addMode = true;
    this.editMode = false;
    if (this.addButtonMode === true) {
      this.addButtonMode = false;
    }
    else {
      this.addButtonMode = true;
    }
    this.displayAcces();
  }
  editOption(id: number) {
    this.postAddingService.editIdSet(id);
    this.postAddingService.showValueOnInput();

    this.postAddingService.typeOfMode(0, id);
    this.addButtonMode = true;
    this.addMode = false;
    this.editMode = true;
    this.displayAcces();
  }
  onCheckClick(id: number) {
    this.postAddingService.checkOption(id);
    this.displayAcces();
  }

  onSearch() {
    this.dataElements = [];
    this.dataElements = this.searchAddService.serchValRet();
 this.len=this.dataElements.length;
  }

  displayAcces() {
    this.dataElements = [];
    this.dataElements=this.displayService.displayPosts();
    this.len=this.dataElements.length;
  }
}
