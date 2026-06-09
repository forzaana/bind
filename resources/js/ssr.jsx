import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import ReactDOMServer from 'react-dom/server';
import { ToastProvider } from '@heroui/toast';
import { HeroUIProvider } from '@heroui/react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer(page =>
    createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        page,
        render: ReactDOMServer.renderToString,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
            return pages[`./Pages/${name}.jsx`]
        },
        setup: ({ App, props }) =>
            <HeroUIProvider>
                <ToastProvider />
                <App {...props} />
            </HeroUIProvider>
        ,
        progress: {
            color: '#8f5ef4',
        },
    }),

)
