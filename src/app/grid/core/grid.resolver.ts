import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable }  from 'rxjs';
import { GridService } from './core.service';
import { Grid } from '../grid';

@Injectable({
  providedIn: 'root',
})
export class GridResolverService implements Resolve<Grid> {
  constructor(private gridService: GridService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Grid | Observable<Grid> | Promise<Grid> {
    return this.gridService.getDetails(+route.paramMap.get('id'));
  }
    
    
}