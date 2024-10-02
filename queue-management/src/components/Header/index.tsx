import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

import user from '~/data/user.json';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const currentPage = useLocation().pathname;
    // Object ánh xạ đường dẫn tới tiêu đề tương ứng
    const pageTitles: { [key: string]: string } = {
        '/dashboard': 'Bảng điều khiển',
        '/device': 'Thiết bị',
        '/users': 'Người dùng',
        '/settings': 'Cài đặt',
        '/profile': 'Hồ sơ cá nhân',
    };

    // Lấy tiêu đề từ đối tượng, mặc định là 'Dashboard' nếu không tìm thấy
    const currentTitle = pageTitles[currentPage] || 'Dashboard';
    console.log(currentPage);
    return (
        <div className="flex justify-between w-full p-6 pe-11 top-0 ">
            <div className="direction text-xl font-bold text-orange-400">{currentTitle}</div>

            <div className="right-header flex gap-2  ">
                <div className="notification-container me-2 size-8 flex items-center justify-center rounded-full transition-color ease-in-out duration-300 bg-orange-50 text-orange-400 hover:bg-orange-400 hover:text-orange-50">
                    <NotificationsIcon />
                </div>
                <div className="avatar rounded-full size-10 overflow-hidden">
                    <img src={user.avatar} alt="" className="size-full object-cover" />
                </div>
                <div className="user-contaier flex flex-col">
                    <div className="hello text-xs">Xin chào</div>
                    <div className="user-name font-bold">{user.name}</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
