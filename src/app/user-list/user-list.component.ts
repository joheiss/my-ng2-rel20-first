import {Component, Input, OnInit, EventEmitter, Output} from "@angular/core";
import {User} from "../../models/user";

@Component({
    selector: 'jo-rep-user-list',
    templateUrl: 'user-list.component.html',
    styleUrls: ['user-list.component.css']
})
export class UserListComponent implements OnInit {

    /*
     * Input properties
     */
    @Input() users: User[];
    @Output() clicked = new EventEmitter<User>();

    /*
     * constructor
     */
    constructor() {}

    /*
     * lifecycle hooks
     */
    ngOnInit() {}

    /*
     * event handler
     */
    onClick(user: User) {
        console.log("Clicked:", user);
        this.clicked.emit(user);
    }
}
