import { NgModule, InjectionToken } from '@angular/core';
import { Config } from './interfaces';

export const ParseAppName = new InjectionToken<string>('angularparse.appName');
export const ParseAppConfig = new InjectionToken<Config>('angularparse.config');

// Put in database.ts when we drop database-depreciated
export const ParseServerURL = new InjectionToken<string>('angularparse.serverURL');

@NgModule({
    providers: [  ],
  })
  export class AngularParseModule {
    static initializeApp(config) {
        return {
            ngModule: AngularParseModule,
            providers: [
                { provide: ParseAppConfig, useValue: config }
            ]
        }
    }
  }