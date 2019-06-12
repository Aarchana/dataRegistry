import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/core/grid.component';
import { GridUpdateComponent } from './grid/grid-update/grid-update.component';
import { GridResolverService } from './grid/core/grid.resolver';
import { GridAddComponent } from './grid/grid-add/grid-add.component';

const routes: Routes = [
  {path: 'records', component: GridComponent
  },
  {path:'records/add', component: GridAddComponent},
  {path:'records/:id', component: GridUpdateComponent},
  {path: '', redirectTo: '/records', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
