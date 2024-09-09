import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CloseIcon, MenuDrop } from '~/components/Icons';
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
    const location = useLocation().pathname.split('/')[1];
    const [open, setOpen] = useState<boolean>(false);
    return (
        <header className="header bg-blue-background text-white flex flex-row gap-12 sm:justify-center uppercase items-center fixed z-50 w-full border-b border-white">
            {headerNav.map((nav, index) => (
                <Link
                    key={index}
                    className="sm:block hidden p-3 text-title text-xl underline-offset-8 hover:underline"
                    to={nav.path}
                >
                    {nav.title === 'Logo' ? (
                        <Logo size={1} />
                    ) : (
                        <div className={`${'/' + location === nav.path && 'text-cyan underline'}`}>{nav.title}</div>
                    )}
                </Link>
            ))}
            <div className="sm:hidden flex flex-row justify-between w-dvw py-2 px-4 items-center">
                <Logo size={0} />
                <div onClick={() => setOpen(true)}>
                    <MenuDrop />
                </div>
                {open && (
                    <div className="navModal  absolute h-dvh top-0 left-0  w-dvw bg-[#002549] bg-opacity-90">
                        <div
                            className="closeModal absolute p-4 right-4 top-4 rounded-full bg-white"
                            onClick={() => setOpen(false)}
                        >
                            <CloseIcon />
                        </div>
                        <div className="nav py-24 px-20">
                            {headerNav.map((nav, index) => (
                                <Link
                                    key={index}
                                    className=" p-3 text-title text-2xl underline-offset-8 hover:underline"
                                    to={nav.path}
                                    onClick={() => setOpen(false)}
                                >
                                    {nav.title !== 'Logo' && (
                                        <div className={`${'/' + location === nav.path && 'text-cyan underline'}`}>
                                            {nav.title}
                                        </div>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
