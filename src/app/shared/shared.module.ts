import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateService, TranslateModule, TranslatePipe} from "ng2-translate/ng2-translate";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forRoot()
    ],
    declarations: [],
    exports: [TranslatePipe]
})

export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [TranslateService]
        }
    }
}

