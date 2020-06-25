import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { PostAddingService } from '../postAdd.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AddUpdateComponent implements OnInit {
  // @ViewChild('dataName') inputView:ElementRef;

  smName = 'primary name';
  defaultName = '';
  defaultDes = '';
  dataElemnts: Post[] = [];
  //  prName="primary name";

  constructor(private postAddingService: PostAddingService) {}

  // @Output() createdPosts=new EventEmitter<{title:string,description:string}>();
  @Output() onClickChange = new EventEmitter<boolean>();
  // @Input() element:{title:string,description:string};
  newTitle = '';
  newDescription = '';
  addButtonMode = true;
  editMode = false;
  editId: number;

  ngOnInit(): void {
    this.dataElemnts = this.postAddingService.getPosts();
    this.editMode = this.postAddingService.editMode;
    // this.postAddingService.editIdGet.subscribe(
    //   (id:number)=>{
    //     this.editId=id;
    //   }
    // );
    this.editId = this.postAddingService.editId;
    // console.log("fun edit id "+this.editId);

    for (let i of this.dataElemnts) {
      // console.log(i.id);
      if (i.id === this.editId) {
        console.log(i.title, i.description);
        this.defaultName = i.title;
        this.defaultDes = i.description;
        break;
      }
    }
    if (!this.editMode) {
      this.defaultName = '';
      this.defaultDes = '';
    }
    // console.log("get id "+this.editId);
  }

  onAddPost(nameInput: HTMLInputElement, descriptionInput: HTMLInputElement) {
    this.postAddingService.displayAcceler();
    if (nameInput.value !== '') {
      this.postAddingService.addPost(nameInput.value, descriptionInput.value);
    }
    this.onClickChange.emit(false);
  }

  onEditPost(
    nameInput: HTMLInputElement,

    descriptionInput: HTMLInputElement
  ) {
    this.postAddingService.displayAcceler();

    // this.inputView.nativeElement.value=this.postAddingService.titleValue;
    if (this.postAddingService.editMode) {
      this.editId = this.postAddingService.editId;
    }
    this.postAddingService.editPost(nameInput.value, descriptionInput.value);
    // console.log("This is edited "+this.editId);
    this.onClickChange.emit(false);
  }
  onCancel() {
    this.onClickChange.emit(false);
  }
}
