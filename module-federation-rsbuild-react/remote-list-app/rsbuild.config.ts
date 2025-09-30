
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';


export default defineConfig({
  server: {
    port: 3001,
  },
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
});
