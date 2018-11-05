/**
 * Add custom middleware to fractal Server.
 *
 * The nodeSitecore/cli-plugin-fractal provide theses middlewares:
 *
 * - google-translate
 * - proxy-webpack
 * - proxy-assets
 * - proxy-mock
 *
 * @param config
 * @param options
 * @returns {{before: Array, after: Array}}
 */
module.exports = (config, options) => {
  const { buildMode } = options;
  return {
    before: [],
    after: []
  };
};
