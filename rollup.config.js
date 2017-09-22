export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/sample-module.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.samplemodule',
    globals: {
        '@angular/core': 'ng.core'
    }
}
