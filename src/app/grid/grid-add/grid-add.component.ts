import { Component, OnInit } from '@angular/core';
import { Grid } from '../grid';
import { GridService } from '../core/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-add',
  templateUrl: './grid-add.component.html',
  styleUrls: ['./grid-add.component.scss']
})
export class GridAddComponent implements OnInit {
  public gridRecord: Grid;
  public errorMsg: string;
  public successMsg: string;

  constructor(private gridService: GridService, private router: Router) { 

  }

  ngOnInit() {
    this.gridRecord = new Grid();
  }

  public add() {
    this.gridService.gridAdd(this.gridRecord).subscribe(
      res => this.successMsg = "Successfully added record.",
      error => this.errorMsg = "Failed to add record. Try again after sometime"
    )
  }

  public cancel() {
    this.router.navigateByUrl('/records');
  }

 }
