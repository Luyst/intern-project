import { Main } from '~/pages';
import { Home, Recruit, Document, Post } from '~/components/Page';

const config = {
    main: '/',
    home: '',
    post: '/post',
    document: '/document',
    recruit: '/recruit',
};

type Route = {
    path: string;
    component: React.ComponentType<any>;
    children?: Route[];
};

const publicRoutes: Route[] = [
    {
        path: config.main,
        component: Main,
        children: [
            { path: config.home, component: Home },
            { path: config.post, component: Post },
            { path: config.document, component: Document },
            { path: config.recruit, component: Recruit },
        ],
    },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
