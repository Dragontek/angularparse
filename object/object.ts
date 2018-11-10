import { AngularParse } from "../angularparse";
import * as Parse from 'parse';

export class AngularParseObject extends Parse.Object {
  constructor(public readonly ref:Parse.Object, ap: AngularParse) {
    super(ref.className)
  }
}
