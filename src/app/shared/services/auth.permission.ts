import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
})
export class AuthPermission implements CanActivate {
    constructor(private router: Router, private auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        const expectedPermission = route.data.expectedPermission;

        this.auth.checkPermission(expectedPermission).subscribe((data: any) => {
            if (this.auth.authenticated) {
                if (data["status"] == "200") {
                    return true;
                } else {
                    return this.router.navigateByUrl('others/404');
                }
            } else {
                return this.router.navigateByUrl('/sessions/signin');
            }
        })

        return true;
    }
}