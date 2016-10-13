import {Component, ChangeDetectionStrategy, Output, EventEmitter, Input} from "@angular/core";
import {UserFilter} from "../../models/user-filter";

@Component({
    selector: 'jo-rep-user-filter',
    templateUrl: 'user-filter.component.html',
    styleUrls: ['user-filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserFilterComponent{

    @Input() filters: UserFilter[];
    @Output() filterUpdated = new EventEmitter<string>();

    onFilter(filter: string) {
        this.filterUpdated.emit(filter);
    }
}
