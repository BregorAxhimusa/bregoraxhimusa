import './bootstrap';
// import '../css/app.css';

import '../css/plugins.css';
import '../css/style.css';

import '../css/app.9458079f.css';
import '../css/font/fontello.eot';
import '../css/font/fontello.svg';
import '../css/font/fontello.ttf';
import '../css/font/fontello.woff';
import '../css/font/fontello.woff2';

// import '../css/js/app.3d22f681.js';
// import '../css/js/app.3d22f681.js.map';
// import '../css/js/chunk-vendors.e3733d6e.js';
// import '../css/js/chunk-vendors.e3733d6e.js.map';


import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Portfolio';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
