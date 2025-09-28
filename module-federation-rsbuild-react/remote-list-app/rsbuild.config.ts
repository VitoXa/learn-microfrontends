import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';


export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation({
    name: 'federation_provider',
    exposes: {
      './Input': './src/components/Input.tsx',
      './List': './src/components/List.tsx',
    },
    shared: {
      'react': { singleton: true },
      'react-dom': { singleton: true }
    },
  }),
  ],
  server: {
    port: 3000,
  },
});
