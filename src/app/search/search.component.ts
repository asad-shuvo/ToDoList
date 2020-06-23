import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchAddService } from './searchAdd.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {

  searchValHtml="";
  constructor(private searchAddService:SearchAddService) { }

  ngOnInit(): void {
  }
  onSearch(searchVal:HTMLInputElement){
    console.log(searchVal.value);
    this.searchAddService.searchValKeep(searchVal.value);
    this.searchValHtml="";
  }
}
