import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';


export default defineConfig({
  html: {
    title: 'Consumer App',
  },

  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_consumer',
          dts: false,
          remotes: {
            'federation_provider': 'provider_app@http://localhost:3001/mf-manifest.json',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
  plugins: [pluginReact(),],
  server: {
    port: 2000,
  },
});
