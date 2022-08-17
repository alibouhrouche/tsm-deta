const { build } = require('esbuild')
const { rmSync } = require('fs')
let makeAllPackagesExternalPlugin = {
    name: 'make-all-packages-external',
    setup(build) {
      let filter = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/ // Must not start with "/" or "./" or "../"
      build.onResolve({ filter }, args => ({ path: args.path, external: true }))
    },
}

rmSync('dist', { recursive: true, force: true });

build({
    plugins: [makeAllPackagesExternalPlugin], //Comment to use ESM
    bundle: true,
    format: 'cjs',
    platform: 'node',
    target: 'node14',
    entryPoints: ['./src/app.ts'],
    // external: ['express','deta'], //Add cjs modules here when disabling the plugin above
    outfile: './dist/index.js'
}).then(() => console.log('Build completed.'))
.catch(err => console.error(err));