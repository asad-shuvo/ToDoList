import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
} from '@angular/core';
import { PostAddingService } from '../postAdd.service';
import { Post } from '../post.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AddUpdateComponent implements OnInit {
  postAddupdateForm: FormGroup;

  smName = 'primary name';
  defaultName = '';
  defaultDes = '';
  dataElemnts: Post[] = [];

  constructor(private postAddingService: PostAddingService) {}
  @Output() onClickChange = new Subject<boolean>();
  newTitle = '';
  newDescription = '';
  addButtonMode = true;
  editMode = false;
  editId: number;

  ngOnInit(): void {
    this.postAddupdateForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
    });
    this.dataElemnts = this.postAddingService.getPosts();
    this.editMode = this.postAddingService.editMode;

    this.editId = this.postAddingService.editId;

    for (let i of this.dataElemnts) {
      if (i.id === this.editId) {
        this.defaultName = i.title;
        this.defaultDes = i.description;
        break;
      }
    }
   
    if(this.editMode){
    this.postAddupdateForm.setValue({
      title: this.defaultName,
      description:this.defaultDes
    })
  }  
  }
  onCancel() {
    this.onClickChange.next(false);
  }
  onSubmit() {
    this.postAddingService.displayAcceler();
    if (this.editMode) {
      if (this.postAddingService.editMode) {
        this.editId = this.postAddingService.editId;
      }
      if( this.postAddupdateForm.value.title!==""){
        this.postAddingService.editPost(
        this.postAddupdateForm.value.title,
        this.postAddupdateForm.value.description
      )
    }
     
  }
  else {
    if( this.postAddupdateForm.value.title!==""){
    this.postAddingService.addPost(
        this.postAddupdateForm.value.title,
        this.postAddupdateForm.value.description
      );
    }
  }
  this.onClickChange.next(false);
  }
}
