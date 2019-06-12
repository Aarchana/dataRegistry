import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from 'src/app/grid/grid';

@Component({
  selector: 'app-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss']
})
export class GridRowComponent implements OnInit {
  @Input()
  public rowData: Grid;
  
  @Input()
  public keyMap: Map<string, string>;

  @Input()
  public rowIdentifier: string;

  @Input()
  public messageIndex: string;

  @Input()
  public successStatus: boolean;

  @Output()
  public deleteNotifier: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public updateNotifier: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  viewDetails(id) {
    this.updateNotifier.emit(id);
  }

  deleteDetails(id) {
    this.deleteNotifier.emit(id);
  }

}
