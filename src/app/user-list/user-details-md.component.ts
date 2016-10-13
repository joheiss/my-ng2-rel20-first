import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges} from "@angular/core";
import {User} from "../../models/user";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

@Component({
    selector: 'jo-rep-user-details-md',
    templateUrl: 'user-details-md.component.html',
    styleUrls: ['user-details-md.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserDetailsMdComponent implements OnInit, OnChanges {

    @Input() mode: string;
    @Input() user: User;
    @Output() added = new EventEmitter<User>();
    @Output() cancelled = new EventEmitter<User>();
    @Output() changed = new EventEmitter<User>();
    @Output() removed = new EventEmitter<User>();

    private _form: FormGroup;

    constructor(private _fb: FormBuilder) {

        this._form = this._fb.group({
            userId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
            userName: ['', [Validators.required, Validators.minLength(3)]],
            locked: [''],
            roles: ['']
        });

        this._form.valueChanges
            .filter( () => this._form.valid )
            .map(value => new User(value.userId || this.user.userId, value.userName, value.locked, value.roles))
            .subscribe( user => this.user = user );
    }


    ngOnInit() {
    }

    ngOnChanges() {

        this._form.reset();

        if (this.user) {
            this._form.setValue(this.user, { onlySelf: true });
        }

        /* -- this doesn't work properly with RC6. As soon as a form field is disabled it doesn't propagate it's values */
        if (this.mode === 'EDIT') {
            this._form.controls['userId'].disable();
        } else {
            this._form.controls['userId'].enable();
        }

    }

    /*
     * event handler
     */
    onCancel(): boolean {
        this.cancelled.emit(null);
        return false; // to avoid a redirect
    }

    onRemove(user: User): boolean {
        console.log("Removed:", user);
        this.removed.emit(user);
        return false; // to avoid a redirect
    }

    onSave(user: User) {
        console.log("Saved:", user);
        if (this.mode === 'ADD') {
            this.added.emit(user);
        } else {
            this.changed.emit(user);
        }
    }
}
