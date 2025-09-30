import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';


export default defineConfig({
  html: {
    title: 'Consumer App',
  },
  plugins: [pluginReact(),
  pluginModuleFederation({
    name: 'federation_consumer',
    remotes: {
      federation_provider: 'federation_provider@http://localhost:3001/mf-manifest.json',
    },
    shared: ['react', 'react-dom']
  }),
  ],
  server: {
    port: 2000,
  },
});
