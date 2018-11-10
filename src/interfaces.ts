import * as Parse from 'parse';

/**
 * Passing through some types;
 */
export type File = Parse.File;
export type GeoPoint = Parse.GeoPoint;
export type History = Parse.History;
export type Events = Parse.Events;
export type Config = Parse.Config;
export type ACL = Parse.ACL;
export type Installation = Parse.Installation;
export type Error = Parse.Error;
export type Role = Parse.Role;
export type Router = Parse.Router;
export type Session = Parse.Session;
export type User = Parse.User;

//export type View<T> = Parse.View<T>;
//export type ParseObject = Parse.Object;
//export type ParseQuery<T extends ParseObject = ParseObject> = Parse.Query<T>;

/**
 * A utility methods for associating a collection reference with
 * a query.
 *
 * @param collectionRef - A collection reference to query
 * @param queryFn - The callback to create a query
 *
 * Example:
 * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
 *  return ref.where('age', '<', 200);
 * });
 */
export function associateQuery(queryRef: Parse.Object, queryFn = ref => this.query(ref)) : AssociatedReference {
    const query = queryFn(queryRef);
    const ref = queryRef;
    return { query, ref };
  }
  
  // A convience type for making a query.
  // Example: const query = (ref) => ref.where('name', == 'david');
  export type QueryFn = (ref: Parse.Object) => Parse.Query;
  
  /**
   * A structure that provides an association between a reference
   * and a query on that reference. Note: Performing operations
   * on the reference can lead to confusing results with complicated
   * queries.
   *
   * Example:
   *
   * const query = ref.equalTo('type', 'Book').
   *                  .ascending('price')
   *
   */
  export interface AssociatedReference {
    ref: Parse.Object;
    query: Parse.Query;
  }
  
  