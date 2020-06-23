import { Component, OnInit, ViewEncapsulation, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class DeletePostComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
