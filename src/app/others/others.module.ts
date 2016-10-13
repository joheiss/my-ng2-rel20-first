import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MdCardModule} from "@angular2-material/card";
import {MdButtonModule} from "@angular2-material/button";
import {MdInputModule} from "@angular2-material/input";
import {OthersComponent} from "./others.component";
import {MdIconRegistry, MdIconModule} from "@angular2-material/icon";
import {RouterModule} from "@angular/router";
import {OTHERS_ROUTES} from "./others.routes";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, RouterModule.forChild(OTHERS_ROUTES), SharedModule, MdCardModule, MdButtonModule,  MdInputModule, MdIconModule],
    declarations: [OthersComponent],
    exports: [OthersComponent],
    providers: [MdIconRegistry]
})

export class OthersModule {}
