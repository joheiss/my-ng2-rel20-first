import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {UserModule} from "./user-list/user.module";
import {AppComponent} from "./app.component";
import {AboutComponent} from "./about/about.component";
import {appRoutes} from "./app.routes";
import {NotepadComponent} from "./notepad/notepad.component";
import {SharedModule} from "./shared/shared.module";


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        NotepadComponent
    ],
    imports: [
        BrowserModule,
        SharedModule.forRoot(),
        RouterModule.forRoot(appRoutes, {enableTracing: true}),
        UserModule,
        // OthersModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
