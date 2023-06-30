import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql/',
  documents: 'libs/codegen/src/lib/**/*.graphql',
  generates: {
    'libs/codegen/src/lib/@types/graphql.ts': {
      plugins: [
        'typescript',
        // 'typescript-apollo-angular',
        'typescript-operations',
        'typed-document-node',
      ],
    },
  },
};

export default config;
