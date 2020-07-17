/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type App2_animal$ref: FragmentReference;
declare export opaque type App2_animal$fragmentType: App2_animal$ref;
export type App2_animal = {|
  +__typename: "Cat",
  +id: string,
  +name: string,
  +age: number,
  +lives: number,
  +$refType: App2_animal$ref,
|} | {|
  +__typename: "Dog",
  +id: string,
  +name: string,
  +age: number,
  +breedDescription: string,
  +$refType: App2_animal$ref,
|} | {|
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  +__typename: "%other",
  +$refType: App2_animal$ref,
|};
export type App2_animal$data = App2_animal;
export type App2_animal$key = {
  +$data?: App2_animal$data,
  +$fragmentRefs: App2_animal$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "age",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App2_animal",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lives",
          "storageKey": null
        }
      ],
      "type": "Cat"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "breedDescription",
          "storageKey": null
        }
      ],
      "type": "Dog"
    }
  ],
  "type": "Animal"
};
})();
// prettier-ignore
(node/*: any*/).hash = '48db3cdaa9e128ed90abcb81018b3f0d';

module.exports = node;
