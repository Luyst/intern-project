import { useState } from 'react';
import { IdeaIcon, NewsIcon, EventIcon, NotificationIcon, FolderIcon, PeopleIcon } from '~/components/Icons';
import Logo from '~/components/Logo';

const sidebarItems = [
    {
        title: 'Giới thiệu',
        icon: IdeaIcon,
    },
    {
        title: 'Tin tức',
        icon: NewsIcon,
    },
    {
        title: 'Sự kiện',
        icon: EventIcon,
    },
    {
        title: 'Thông báo',
        icon: NotificationIcon,
    },
    {
        title: 'Tin cổ đông',
        icon: FolderIcon,
    },

    {
        title: 'Hoạt động đoàn thể',
        icon: PeopleIcon,
    },
];

function PostSidebar() {
    const [active, setActive] = useState(0);

    return (
        <div className="postSiderbar relative hidden sm:flex flex-col p-6 bg-white bg-opacity-70 min-w-80 max-w-88 rounded-xl gap-6 overflow-hidden">
            <div className="text-title uppercase text-blue-500 font-bold text-2xl text-center">Chủ đề bài viết</div>

            <div className="flex flex-col gap-4">
                {sidebarItems.map((item, index) => (
                    <div
                        className={`p-4 flex gap-3 group items-center rounded-lg ease-in-out duration-300 cursor-pointer ${
                            active === index ? 'bg-blue-500' : 'bg-white'
                        }`}
                        onClick={() => setActive(index)}
                    >
                        <item.icon color={active === index ? 'white' : '#0054A6'} />
                        <div
                            className={` font-semibold   ease-in-out duration-300 ${
                                active === index ? ' text-white' : 'text-blue-300 group-hover:text-blue-500'
                            }`}
                        >
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 translate-x-6 translate-y-2 opacity-15">
                <Logo size={3} />
            </div>
        </div>
    );
}

export default PostSidebar;
