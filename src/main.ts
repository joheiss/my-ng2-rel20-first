import "./polyfills.ts";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode, PlatformRef} from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

let platform: PlatformRef = platformBrowserDynamic();

platform.bootstrapModule(
    AppModule
);

