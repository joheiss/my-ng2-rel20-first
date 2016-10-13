import {UserAdminComponent, UserDetailsMdComponent} from "./";
import {UserAdminGuard} from "./user-admin.guard";

export const USER_ROUTES = [
    {
        path: 'users',
        children: [
            {
                path: '',
                component: UserAdminComponent,
                canDeactivate: [UserAdminGuard],
                canActivate: [UserAdminGuard]
            },
            {
                path: ':id',
                component: UserDetailsMdComponent,
                canDeactivate: [UserAdminGuard],
                canActivate: [UserAdminGuard]
            }
        ]
    }
];

