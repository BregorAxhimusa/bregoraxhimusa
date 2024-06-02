import './bootstrap';
import '../css/app.css';

import '../../public/css/plugins.css';
import '../../public/css/style.css';

import '../../public/css/app.9458079f.css';
import '../../public/css/font/fontello.eot';
import '../../public/css/font/fontello.svg';
import '../../public/css/font/fontello.ttf';
import '../../public/css/font/fontello.woff';
import '../../public/css/font/fontello.woff2';

// import '../../public/css/js/app.3d22f681.js';
// import '../../public/css/js/app.3d22f681.js.map';
// import '../../public/css/js/chunk-vendors.e3733d6e.js';
// import '../../public/css/js/chunk-vendors.e3733d6e.js.map';


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
