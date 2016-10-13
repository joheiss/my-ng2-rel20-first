import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {UserAdminComponent} from "./user-admin.component";
import {UserListComponent} from "./user-list.component";
import {UserDetailsMdComponent} from "./user-details-md.component";
import {UserFilterComponent} from "./user-filter.component";
import {StoreModule} from "@ngrx/store";
import {users} from "../../reducers/users";
import {usersFilter} from "../../reducers/users-filter";
import {ServicesModule} from "./services.module";
import {UserAdminGuard} from "./user-admin.guard";
import {USER_ROUTES} from "./user.routes";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forChild(USER_ROUTES),
        SharedModule,
        StoreModule.provideStore({ users, usersFilter }),
        ServicesModule.forRoot()
    ],
    declarations: [
        UserAdminComponent,
        UserListComponent,
        UserDetailsMdComponent,
        UserFilterComponent
    ],
    exports: [
        UserAdminComponent
    ],
    providers: [UserAdminGuard]
})

export class UserModule {}
