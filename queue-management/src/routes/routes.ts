import { Main } from '~/layouts';
import { Dashboard, Device, Service, Stat, Report, Setting, Login } from '~/pages';

const config = {
    main: '/',
    login: '/login',
    dashboard: '/',
    device: '/device',
    service: '/service',
    stat: '/stat',
    report: '/report',
    systemSetting: '/setting',
};

type Route = {
    path: string;
    component: React.ComponentType;
    children?: Route[];
};

const publicRoutes: Route[] = [
    {
        path: config.main,
        component: Main,
        children: [
            { path: config.dashboard, component: Dashboard },
            { path: config.device, component: Device },
            { path: config.service, component: Service },
            { path: config.stat, component: Stat },
            { path: config.report, component: Report },
            { path: config.systemSetting, component: Setting },
        ],
    },
    { path: config.login, component: Login },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
