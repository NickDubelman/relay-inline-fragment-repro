/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type App_animal = {
    readonly __typename: string;
    readonly id: string;
    readonly name: string;
    readonly age: number;
    readonly lives?: number;
    readonly breedDescription?: string;
    readonly " $refType": "App_animal";
};
export type App_animal$data = App_animal;
export type App_animal$key = {
    readonly " $data"?: App_animal$data;
    readonly " $fragmentRefs": FragmentRefs<"App_animal">;
};



const node: ReaderFragment = {
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
(node as any).hash = 'd4f98622321b20ec9987004a8f442c69';
export default node;
