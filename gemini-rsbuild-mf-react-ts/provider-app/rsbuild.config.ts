import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  server: {
    port: 3001,
  },
  dev: {
    // It is necessary to configure assetPrefix, otherwise the resource loading path will be wrong.
    assetPrefix: 'http://localhost:3001',
  },
  tools: {
    rspack: {
      output: {
        publicPath: 'auto',
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'provider_app',
          dts: false,
          exposes: {
            './custom-button': './src/components/custom-button.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
  plugins: [pluginReact()],
});