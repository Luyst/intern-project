import { Main } from '~/pages';
import { Home, Recruit, Document, Post } from '~/components/Page';
import RecruitDetail from '~/components/Page/Recruit/RecruitDetail';
import PostDetail from '~/components/Page/Post/PostDetail';

const config = {
    main: '/',
    home: '',
    post: '/post',
    postDetail: '/post/:key',
    document: '/document',
    recruit: '/recruit',
    recruitDetail: '/recruit/:key',
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
            { path: config.postDetail, component: PostDetail },
            { path: config.document, component: Document },
            { path: config.recruit, component: Recruit },
            { path: config.recruitDetail, component: RecruitDetail },
        ],
    },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
