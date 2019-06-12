import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output()
  public triggerSearch: EventEmitter<string> =new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  listenKeyDown(event) {
    if(event.key === 'Enter') {
      this.triggerSearch.emit(event.target.value);
    }
  }

  emitSearchTerm(event) {
    this.triggerSearch.emit(event);
  }
}
