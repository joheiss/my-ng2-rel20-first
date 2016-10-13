import {AboutComponent} from "./about/about.component";
import {UserAdminComponent, UserDetailsMdComponent} from "./user-list";
import {UserAdminGuard} from "./user-list/user-admin.guard";
import {NotepadComponent} from "./notepad/notepad.component";
import {OthersComponent} from "./others/others.component";
import {OthersModule} from "./others/others.module";

function loadOthersModule(): any {
    return OthersModule;
}

export const appRoutes = [
    {
        path: '',
        component: UserAdminComponent,
        canDeactivate: [UserAdminGuard]
    },
    // redirect
    {
        path: 'legacy',
        redirectTo: '/others',
        pathMatch: 'full'
    },
    {
        path: 'others' ,
        loadChildren: loadOthersModule
    },
    /*
    {
        path: 'others',
        component: OthersComponent,
    },
    */
    {
        path: 'about',
        component: AboutComponent,
    },
    /*
    {
        path: 'users',
        children: [
            {
                path: '',
                component: UserAdminComponent,
                canDeactivate: [UserAdminGuard]
            },
            {
                path: ':id',
                component: UserDetailsMdComponent,
                canDeactivate: [UserAdminGuard]
            }
        ]
    },
    */
    //...USER_ROUTES,
    // fallback route
    {
        path: '**',
        component: UserAdminComponent,
        canDeactivate: [UserAdminGuard]
    },
    {
        path: 'notepad',
        component: NotepadComponent,
        outlet: 'notepad'
    }
];

