import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../service/auth/auth.gaurd.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       console.log('State URL', state.url);
       const currentUser = this.authenticationService.currentUserValue;
       if (currentUser) {
            return true;
        }
        // not logged in so redirect to login page with the return url
       this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
       return false;
    }
}
