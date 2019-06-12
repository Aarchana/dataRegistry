import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridRowComponent } from './grid-row/grid-row.component';
import { AppModalComponent } from './app-modal/app-modal.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DropdownComponent, GridRowComponent, AppModalComponent, SearchComponent],
  exports: [DropdownComponent, GridRowComponent, AppModalComponent, SearchComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class SharedModule { }
