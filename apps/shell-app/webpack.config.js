const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'shell-app',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        login_app: 'login_app@http://localhost:4201/remoteEntry.js',
        order_app: 'order_app@http://localhost:4202/remoteEntry.js',
      },
      shared: {
        '@angular/core': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.2.9',
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.2.9',
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.2.9',
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '^12.2.9',
        },
        '@angular/material/toolbar': {singleton: true, strictVersion: true, requiredVersion: '^12.2.9'},
        '@angular/material/button': {singleton: true, strictVersion: true, requiredVersion: '^12.2.9'},
        '@angular/material/sidenav': {singleton: true, strictVersion: true, requiredVersion: '^12.2.9'},
        '@angular/material/icon': {singleton: true, strictVersion: true, requiredVersion: '^12.2.9'},
        '@angular/material/list': {singleton: true, strictVersion: true, requiredVersion: '^12.2.9'},
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
