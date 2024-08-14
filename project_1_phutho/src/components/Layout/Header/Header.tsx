import { Link, useLocation } from 'react-router-dom';
import Logo from '~/components/Logo';
type Nav = {
    title: string;
    path: string;
};
const headerNav: Nav[] = [
    { title: 'Trang chủ', path: '/' },
    { title: 'Bài viết', path: '/post' },
    { title: 'Logo', path: '/' },
    { title: 'Tài liệu', path: '/document' },
    { title: 'Tuyển dụng', path: '/recruit' },
];

function Header() {
    const location = useLocation().pathname;
    return (
        <div className="header bg-blue-background text-white flex flex-row gap-3 justify-center uppercase items-center fixed z-50 w-full border-b border-white">
            {headerNav.map((nav, index) => (
                <Link key={index} className="p-3 text-title text-xl" to={nav.path}>
                    {nav.title === 'Logo' ? (
                        <Logo size={1} />
                    ) : (
                        <div className={`${location === nav.path && 'text-cyan underline'}`}>{nav.title}</div>
                    )}
                </Link>
            ))}
        </div>
    );
}

export default Header;
