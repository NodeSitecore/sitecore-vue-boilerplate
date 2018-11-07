import { VueModule } from '@Foundation';
import Vue from 'vue';
import CommonModule from './common';

// Add plugins
new Vue(VueModule({
  imports: [
    CommonModule
  ],

  components: {},
  directives: {},
  filters: {}
})).$mount('#main-container');
