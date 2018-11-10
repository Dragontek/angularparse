import { AngularParse } from "../angularparse";
import * as Parse from 'parse';

export class AngularParseQuery<T extends Parse.Object = Parse.Object> extends Parse.Query<T> {
  constructor(public readonly ref:Parse.Query, private ap:AngularParse) {
    super(ref.className)
  }

  
}
