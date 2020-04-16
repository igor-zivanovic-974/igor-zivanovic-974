import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot) {
    // tslint:disable-next-line:no-string-literal
    const permissions = route.data['onlyFor'] as Array<string>;
    for (const p of permissions) {
      if (JSON.parse(localStorage.getItem('userInfo')).userJson.permissions.includes(p)) {
        return true;
      }
    }
    this.router.navigate(['home']);
    return false;
  }
}
