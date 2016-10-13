import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from "@angular/router";
import {UserAdminComponent} from "./user-admin.component";
import {Observable} from "rxjs";

export class UserAdminGuard implements CanActivate, CanDeactivate <UserAdminComponent> {


    canDeactivate(component: UserAdminComponent,
                  route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

        return confirm("Do really want to leave this page?");
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

        return confirm("Are you really an administrator?");
    }
}
