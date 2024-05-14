import { createApp } from 'vue';

import App from './App.vue';
import loggerMixins from './mixins/logger.js';

const app = createApp(App);
app.mixin(loggerMixins);
app.mount('#app');
