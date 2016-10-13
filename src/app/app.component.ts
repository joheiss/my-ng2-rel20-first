import {Component, OnInit} from "@angular/core";
import {TranslateService} from "ng2-translate/ng2-translate";
import {Router} from "@angular/router";

type MenuItem = { url: string; content: string; }

@Component({
    selector: 'jo-rep-admin',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {

    private _navs: MenuItem[] = [
        { url: "", content: "Home" },
        { url: "users", content: "Users" },
        { url: "others", content: "Others" },
        { url: "about", content: "About" }
    ];

    /*
     * constructor
     */
    constructor(private _router: Router,
                private _translate:TranslateService) {

        // setup i18n
        this._setupI18n(this._translate);
    }

    ngOnInit() {
        this._router.navigateByUrl("(notepad:notepad;text='It really works!')");
    }

    /*
     * private methods
     */
    _setupI18n(translate:TranslateService) {

        // determine user language
        let userLang = navigator.language.split('-')[0];
        userLang = /(de|en)/gi.test(userLang) ? userLang : 'en';

        // default language
        translate.setDefaultLang('en');

        // use language
        translate.use(userLang);
    }
}
