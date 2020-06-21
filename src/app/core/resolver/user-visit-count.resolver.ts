import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserVisitService } from '../service/user-visit.service';
import {catchError} from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserVisitCountResolver implements Resolve<any> {

  constructor(public userVisitService:UserVisitService) { }
  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userVisitService.getUserCount().pipe(catchError(error => {
      return of('Failed to get customer');
   }));;
  }
}
