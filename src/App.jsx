import React from 'react'
import graphql from 'babel-plugin-relay/macro'

export default function App() {
  return <div></div>
}

graphql`
  fragment App_animal on Animal {
    __typename
    id
    name
    age
    ... on Cat {
      lives
    }
    ... on Dog {
      breedDescription
    }
  }
`

graphql`
  fragment App2_animal on Animal {
    __typename
    ... on Cat {
      id
      name
      age
      lives
    }
    ... on Dog {
      id
      name
      age
      breedDescription
    }
  }
`
