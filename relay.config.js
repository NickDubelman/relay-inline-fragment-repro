const typescript = require('relay-compiler-language-typescript')

module.exports = {
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: 'src',
  schema: 'schema.graphql',
  // language: typescript,
  artifactDirectory: './src/__generated__flow',
  customScalars: { Time: 'String' },
  exclude: [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**',
    '**/__generated__flow/**',
  ],
}
