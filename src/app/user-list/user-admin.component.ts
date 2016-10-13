import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {User} from "../../models/user";
import {UserFilter} from "../../models/user-filter";
import {TranslateService} from "ng2-translate/ng2-translate";
import {Store} from "@ngrx/store";
import {ADD_USER, CHANGE_USER, REMOVE_USER} from "../../reducers/users-actions";
import {SHOW_ALL, SHOW_ADMINS, SHOW_LOCKED, SHOW_UNLOCKED} from "../../reducers/users-filter-actions";
import {UserService} from "./services.module";

@Component({
    selector: 'jo-rep-user-admin',
    templateUrl: 'user-admin.component.html',
    styleUrls: ['user-admin.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserAdminComponent implements OnInit, OnDestroy {

    // public users$:Observable<User[]>;
    // public filters$:Observable<UserFilter[]>;

    private selectedUser:User = null;
    private mode:string = null;

    /*
     * constructor
     */
    constructor(private _userService: UserService,
                private _translate:TranslateService,
                private _store:Store<any>) {

        // setup filters
        // this._setupFilters();

        // get users from store
        /* this.users$ = Observable.combineLatest(
            _store.select(state => state.users),
            _store.select(state => state.usersFilter),
            (users, usersFilter) => {
                return users.filter(usersFilter);
            }
        );
        */
    }

    /*
     * lifecycle hooks
     */
    ngOnInit() {
    }

    ngOnDestroy() {
    }
    /*
     * event handlers
     */

    onAdd() {
        this.mode = 'ADD';
        this.selectedUser = new User('','',false, []);
    }

    onClick(value:User) {
        this.mode = 'EDIT';
        this.selectedUser = value;
    }

    onAdded(user:User) {
        // this._store.dispatch({type: ADD_USER, payload: user});
        this._userService.add(user);
        this.mode = null;
    }

    onCancelled() {
        this.selectedUser = null;
        this.mode = null;
    }

    onChanged(user:User) {
        console.log("CHANGED USER:", user);
        // this._store.dispatch({type: CHANGE_USER, payload: user});
        this._userService.change(user);
        this.mode = null;
    }

    onRemoved(user:User) {
        // this._store.dispatch({type: REMOVE_USER, payload: user});
        this._userService.remove(user);
        this.mode = null;
    }

    onFilterUpdated(filter) {
        // this._store.dispatch({type: filter});
        this._userService.applyFilter(filter);
    }

    /*
     * private methods
     */
    /*
    _setupFilters() {
        let filters:UserFilter[] = [];
        const filterKeys = [SHOW_ALL, SHOW_ADMINS, SHOW_LOCKED, SHOW_UNLOCKED];
        Observable.of(SHOW_ALL, SHOW_ADMINS, SHOW_LOCKED, SHOW_UNLOCKED)
            .flatMap(action => this._translate.get(action))
            .map((text, i) => new UserFilter(filterKeys[i], text))
            .subscribe(
                filter => filters.push(filter),
                error => console.error(error),
                () => this.filters$ = Observable.of(filters)
            );
    }
    */
}

