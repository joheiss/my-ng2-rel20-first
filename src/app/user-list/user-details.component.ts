import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {User} from "../../models/user";

@Component({
    selector: 'jo-rep-user-details',
    templateUrl: 'user-details.component.html',
    styleUrls: ['user-details.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserDetailsComponent implements OnInit {

    @Input() mode: string;
    @Input() user: User;
    @Output() added = new EventEmitter<User>();
    @Output() cancelled = new EventEmitter<User>();
    @Output() changed = new EventEmitter<User>();
    @Output() removed = new EventEmitter<User>();

    constructor() {
    }

    ngOnInit() {
    }

    /*
     * event handler
     */
    onCancel() {
        this.cancelled.emit(null);
    }

    onRemove(user:User) {
        console.log("Removed:", user);
        this.removed.emit(user);
    }

    onSave(user:User) {
        console.log("Saved:", user);
        if (this.mode === 'ADD') {
            this.added.emit(user);
        } else {
            this.changed.emit(user);
        }
    }
}
