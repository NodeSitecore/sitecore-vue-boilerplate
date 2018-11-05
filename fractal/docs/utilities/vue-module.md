---
title: VueModule
---
# Introduction

VueModule is a mixin to create a module which can be export Components, Directives, Filters, Module or AsyncModule.

## Architecture

Here a structure directory of Module based on VueModule and Helix:

```bash
./src/Feature/MyModule
├── code/Scripts/components
│   ├── mycomponent.vue
│   ├── mycomponent.spec.vue
│   └── mycomponent.scss
└── index.js // Our VueModule
```

## Create a VueModule

Create a new directory in `src/Feature` directory then create a new `index.js` file and copy this code:

```javascript
import { VueModule } from '@Foundation';
import MyComponent from './code/Scripts/components/mycomponent';

export default VueModule({
  components: {
    MyComponent
  }
});
```

## Import a VueModule to another VueModule

Edit the `src/Project/LRP/code/Scripts/common.js` and import your VueModule as following:

```javascript
import Vue from 'vue';
import { KeySiteCore } from '@node-sitecore/keysitecore';
import { VueModule } from '@Foundation';
import MyModule from '@Feature/MyModule';

Vue.use(KeySiteCore);

export default VueModule({
  imports: [
    MyModule
  ]
});
```

## Lazyload a module

Sometime isn't necessary to load the module and his component in first because the module isn't directly displayed
in the Viewport, the module is used in another page like a back-office or it's a RefApp module.

VueModule allow to defer the loading of your module with [Webpack code splitting feature](https://webpack.js.org/guides/code-splitting/) as following:

```javascript
import Vue from 'vue';
import * as KeySiteCore from '@node-sitecore/keysitecore';
import { VueModule } from '@Foundation';

Vue.use(KeySiteCore);

export default VueModule({
  asyncImports: [
     module: async () => import(/* webpackChunkName: "my-module" */ '@Feature/MyModule'),
     components: ['MyComponent'],
     // directives: [],
     // filters: []
  ]
});
```

> Important: You have to declare explicitly the components, directives or filters exported by your module. Otherwise, the component not declared
in components won't be lazyloaded.

## Import a Vue Module to VueApp

Create a new entry file (like entry.development.js) and add the following code:

```javascript
import { VueModule } from '@Foundation';
import Vue from 'vue';

import CommonModule from './common';

new Vue(VueModule({
  imports: [
    CommonModule
  ],

  components: {},
  directives: {}
})).$mount('#main-container');

```



