/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type App_animal$ref: FragmentReference;
declare export opaque type App_animal$fragmentType: App_animal$ref;
export type App_animal = {|
  +__typename: string,
  +id: string,
  +name: string,
  +age: number,
  +lives?: number,
  +breedDescription?: string,
  +$refType: App_animal$ref,
|};
export type App_animal$data = App_animal;
export type App_animal$key = {
  +$data?: App_animal$data,
  +$fragmentRefs: App_animal$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_animal",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "age",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
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
// prettier-ignore
(node/*: any*/).hash = 'd4f98622321b20ec9987004a8f442c69';

module.exports = node;
