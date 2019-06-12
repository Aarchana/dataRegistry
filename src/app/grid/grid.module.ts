import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './core/grid.component';
import { GridAddComponent } from './grid-add/grid-add.component';
import { GridUpdateComponent } from './grid-update/grid-update.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GridComponent, GridAddComponent, GridUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class GridModule { }
