import { Component, OnInit, ViewChild } from '@angular/core';
import { GridService } from '../core/core.service';
import { Grid } from '../grid';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-grid-update',
  templateUrl: './grid-update.component.html',
  styleUrls: ['./grid-update.component.scss']
})
export class GridUpdateComponent implements OnInit {

  public gridRecordToUpdate: Grid;
  public recordIdentifier: number;
  public successMsg: string;
  public errorMsg: String;

  @ViewChild('updateForm')
  public updateForm: NgForm;
  
  constructor(private gridService: GridService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  

  ngOnInit() {
    this.recordIdentifier = +this.activatedRoute.snapshot.paramMap.get('id');
    this.gridService.getDetails(this.recordIdentifier).subscribe(res =>
      this.gridRecordToUpdate = res,
      error => this.errorMsg = 'Unable to retrieve details, try again in some time.'
    )
  }

  public update() {
    this.gridService.updateRecord(this.recordIdentifier, this.gridRecordToUpdate).subscribe(res => 
      this.successMsg = 'SuccessFully updated record.',
      error => this.errorMsg = "Error updating the record.")
  }

  public cancel() {
    this.router.navigateByUrl('/records')
  }

}
