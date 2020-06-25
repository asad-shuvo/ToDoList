import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddUpdateComponent } from './add-update/add-update.component';
import { SearchComponent } from './search/search.component';
import { DisplayOptionsComponent } from './display-options/display-options.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { PostAddingService } from './postAdd.service';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { SearchAddService } from './search/searchAdd.service';
import {MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayService } from './display-options/displayAdd.service';
import { DeletePostService } from './delete-post/deletePost.service';
import { ShortenPipe } from './pipe/shorten.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AddUpdateComponent,
    SearchComponent,
    DisplayOptionsComponent,
    MainCompComponent,
    BasicHighlightDirective,
    EditPostComponent,
    DeletePostComponent,
    MyDialogComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddUpdateComponent
  ],
  providers: [PostAddingService,
              SearchAddService,
            DisplayService,
            DeletePostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
