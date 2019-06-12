import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input()
  public title: string;
  @Input()
  public options: Map<string, string>;
  
  public activeKey: string;

  @Output()
  public selectedOption: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  public emitSelected(key) {
    this.activeKey =key;
    this.selectedOption.emit(key);
  }


}
