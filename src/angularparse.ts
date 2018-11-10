import { Injectable, Inject, Optional, InjectionToken, NgModule } from '@angular/core';
import { AngularParseObject } from 'object/object';
import { AngularParseQuery } from 'query/query';
import { ParseAppConfig, ParseAppName, ParseServerURL } from './angularparse.module'
import * as Parse from 'parse';

/*
  Generated class for the ParseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AngularParse {
  //public readonly parse: Parse
  constructor(
    @Inject(ParseAppConfig) config:any,
    @Optional() @Inject(ParseAppName) name:string,
    @Optional() @Inject(ParseServerURL) serverURL:string,    
  ) {
    Parse.initialize(config.appName, config.javaScriptKey, config.masterKey)
    // @ts-ignore
    Parse.serverURL = config.serverURL; 

    console.log('Parse Initialized');
  }

  object(className:string) : AngularParseObject
  object(ref:AngularParseObject) : AngularParseObject
  object(classOrRef:string | AngularParseObject) : AngularParseObject {
    let ref: Parse.Object;
    if (typeof classOrRef === 'string') {
      ref = Parse.Object.extend(classOrRef);
    } else {
      ref = classOrRef;
    }
    return new AngularParseObject(ref, this);
  }

  query(className: string): AngularParseQuery
  query(query:AngularParseQuery): AngularParseQuery
  query(queryOrRef: string | AngularParseQuery): AngularParseQuery {
    let query: Parse.Query;
    if (typeof queryOrRef === 'string') {
      query = new Parse.Query(queryOrRef)
    } else {
      query = queryOrRef;
    }
    return new AngularParseQuery(query, this);
  }  
}

