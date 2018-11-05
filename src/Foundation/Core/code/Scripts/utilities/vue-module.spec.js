import { VueModule } from './vue-module';

describe('VueModule', () => {
  let mod, cmp;

  beforeAll(async () => {
    mod = VueModule({
      asyncImports: [{
        module: async () => ({ default: { components: { componentAsync: 'cmpAsync' } } }),
        components: ['componentAsync']
      }],
      imports: [
        VueModule({
          other: {},
          imports: [
            {
              directives: {
                TestDir3: {
                  name: 'test-directive3'
                }
              }
            }
          ],
          components: {
            TestCmp: {
              name: 'test-cmp'
            }
          }
        }),
        {
          directives: {
            TestDir: {
              name: 'test-directive'
            }
          }
        },
        {
          directives: {
            TestDir: {
              name: 'test-directive'
            }
          },
          filters: {
            fnFilter2: 'function'
          }
        }
      ],

      components: {
        TestCmp2: {
          name: 'test-cmp2'
        }
      },

      directives: {
        Directive1: {
          name: 'dir-1'
        }
      },

      filters: {
        fnFilter: 'function'
      }
    });

    cmp = await mod.components.componentAsync();
  });

  it('should create a proper object for Vue (with components, directives, filters)', () => {
    expect(mod).toEqual({
      other: {},
      components: {
        TestCmp: {
          name: 'test-cmp'
        },
        TestCmp2: {
          name: 'test-cmp2'
        },
        componentAsync: expect.any(Function)
      },
      directives: {
        TestDir: {
          name: 'test-directive'
        },
        TestDir3: {
          name: 'test-directive3'
        },
        Directive1: {
          name: 'dir-1'
        }
      },
      filters: {
        fnFilter2: 'function',
        fnFilter: 'function'
      }
    });

    expect(cmp).toBe('cmpAsync');
  });
});
