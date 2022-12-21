
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rt6dugc7.api.sanity.io/v1/graphql/production/default",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/types/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
