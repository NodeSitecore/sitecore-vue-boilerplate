const config = require('@node-sitecore/config');

/**
 *
 * @type {{lintOnSave: boolean, configureWebpack: {}, compiler: boolean, outputDir: string, dll: boolean, baseUrl: string}}
 */
const vueConfig = {
  baseUrl: '',
  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: false,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  configureWebpack: {},

  productionSourceMap: true,

  filenameHashing: false,
  // vue-loader options
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    // extract: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {}
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // split vendors using autoDLLPlugin?
  // can also be an explicit Array of dependencies to include in the DLL chunk.
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // options for the PWA plugin.
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    exclude: [
      /\.map$/,
      /img\/icons\//,
      /manifest\.json$/
    ],
    workboxOptions: {
      swDest: `../../service-worker.${config.currentWebsite}.js`,
      runtimeCaching: []
    }
  },

  chainWebpack(webpackConfig) {

    // TODO Configuration to extract img/svg from the bundle
    webpackConfig.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1 }));

    // TODO Add support to import SVG as a vue module
    const svgRule = webpackConfig.module.rule('svg');
    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

  }
};

module.exports = config.buildVueConfig(vueConfig);
