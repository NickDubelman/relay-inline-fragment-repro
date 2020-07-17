/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type App2_animal = {
    readonly __typename: "Cat";
    readonly id: string;
    readonly name: string;
    readonly age: number;
    readonly lives: number;
    readonly " $refType": "App2_animal";
} | {
    readonly __typename: "Dog";
    readonly id: string;
    readonly name: string;
    readonly age: number;
    readonly breedDescription: string;
    readonly " $refType": "App2_animal";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "App2_animal";
};
export type App2_animal$data = App2_animal;
export type App2_animal$key = {
    readonly " $data"?: App2_animal$data;
    readonly " $fragmentRefs": FragmentRefs<"App2_animal">;
};



const node: ReaderFragment = (function(){
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
(node as any).hash = '48db3cdaa9e128ed90abcb81018b3f0d';
export default node;
