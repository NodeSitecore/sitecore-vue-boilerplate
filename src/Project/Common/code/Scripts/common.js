import HelloWorldModule from '@Feature/HelloWorld';
import { VueModule } from '@Foundation';
import * as KeySitecore from '@node-sitecore/keysitecore';

import '@Themes/index.scss';
import Vue from 'vue';

import './registerServiceWorker';

Vue.use(KeySitecore);

export default VueModule({
  asyncImports: [],
  imports: [
    HelloWorldModule
  ]
});