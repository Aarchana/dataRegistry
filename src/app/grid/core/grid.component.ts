import { Component, OnInit } from '@angular/core';
import { GridService } from './core.service';
import { HttpParams } from '@angular/common/http';
import { Grid, gridKeyMap, sizeMap } from '../grid';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public params: HttpParams;
  public gridListResponse: Grid;
  public keyMap: Map<string, string> = gridKeyMap;
  public sizeMap: Map<string, string> =  sizeMap;
  public isSuccess: boolean;
  public deleteId: string;
  public errorMsg: string;
  constructor(private gridService: GridService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.isSuccess = null;
    this.params =  new HttpParams();
    this.getList();
  }

  public getList() {
    this.removeUnwantedParams();
    this.gridService.getList(this.params)
    .subscribe(res => this.gridListResponse = res,
              error => this.errorMsg = 'Error occurred while retrieving the data.');
  }

  public removeUnwantedParams() {
    this.params.keys()
    .filter(key => !this.params.get(key))
    .forEach(el => this.params = this.params.delete(el));
  }

  public search(term) {
    this.params = this.params.set('term', term);
    this.getList();
  }

  public sortBy(sortBy) {
    this.params = this.params.set('sortBy', sortBy);
    this.getList();
  }

  public setSize(size) {
    this.params = this.params.set('size', sizeMap.get(size));
    this.getList();
  }

  public deleteRow(id) {
    this.deleteId = id;
    this.gridService.deleteRecord(id).subscribe(
      res => { 
       this.isSuccess = true;
        setTimeout(() => {this.getList(); this.isSuccess = null}, 500) 
      },
      error => {
        this.isSuccess = false;
        setTimeout(() => {this.getList(); this.isSuccess = null}, 500) 
      }
    );
  }

  public updateRow(id) {
    this.router.navigate([id],{relativeTo: this.route});
  }

  public add() {
    this.router.navigateByUrl('/records/add');
  }
}
