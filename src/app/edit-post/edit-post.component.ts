import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostAddingService } from '../postAdd.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class EditPostComponent implements OnInit {

  constructor(private postAddingService:PostAddingService) { }

  ngOnInit(): void {
  }
  

}
