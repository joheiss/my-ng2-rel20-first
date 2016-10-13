import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserFilter} from "../../models/user-filter";
import {User} from "../../models/user";
import {Store} from "@ngrx/store";
import {TranslateService} from "ng2-translate";
import {ADD_USER, CHANGE_USER, REMOVE_USER} from "../../reducers/users-actions";
import {SHOW_ALL, SHOW_ADMINS, SHOW_LOCKED, SHOW_UNLOCKED} from "../../reducers/users-filter-actions";

@Injectable()
export class UserService {

    public users$:Observable<User[]>;
    public filters$:Observable<UserFilter[]>;

    /*
     * constructor
     */
    constructor(private _translate:TranslateService,
                private _store:Store<any>) {

        // setup filters
        this._setupFilters();

        // get users from store
        this.users$ = Observable.combineLatest(
            _store.select(state => state.users),
            _store.select(state => state.usersFilter),
            (users, usersFilter) => {
                return users.filter(usersFilter);
            }
        );
    }

    /*
     * public methods
     */
    public add(user:User): void {
        this._store.dispatch({type: ADD_USER, payload: user});
    }

    public change(user:User): void {
        this._store.dispatch({type: CHANGE_USER, payload: user});
    }

    public remove(user:User): void {
        this._store.dispatch({type: REMOVE_USER, payload: user});
    }

    public applyFilter(filter): void {
        this._store.dispatch({type: filter});
    }

    /*
     * private methods
     */

    private _setupFilters() {
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
}
