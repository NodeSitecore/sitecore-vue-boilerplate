const deepExtends = (dest, src) =>
  Object
    .keys(src)
    .reduce((acc, key) => {
      acc[key] = acc[key] || {};
      Object.assign(acc[key], dest[key] || {}, src[key] || {});
      return acc;
    }, dest);

const FIELDS = ['components', 'directives', 'filters'];

/**
 *
 * @param moduleOptions
 * @returns {{components: {}, directives: {}, filters: {}}}
 * @constructor
 */
export function VueModule(moduleOptions) {
  return Object.keys(moduleOptions).reduce((acc, key) => {
    switch (key) {
      default:
        acc[key] = moduleOptions[key];
        break;

      case 'asyncImports':
        [].concat(moduleOptions[key]).forEach((mod) => {
          FIELDS.forEach((type) => {
            if (mod[type]) {
              [].concat(mod[type]).map((name) => {
                const resolver = async () => {
                  const exports = await mod.module();
                  return exports.default[type][name];
                };

                acc[type][name] = resolver;
              });
            }
          });
        });

        break;
      case 'imports':
        moduleOptions[key].forEach((mod) => {
          acc = deepExtends(acc, mod);
        });
        break;
      case 'directives':
      case 'components':
      case 'filters':
        Object.assign(acc[key], moduleOptions[key]);
    }

    return acc;
  }, { components: {}, directives: {}, filters: {} });
}

