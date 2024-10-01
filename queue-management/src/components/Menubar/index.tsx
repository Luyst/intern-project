import React from 'react';
import logo from '~/assets/logo.svg';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from 'react-router-dom';

// Import thêm icon dạng filled
import DashboardIcon from '@mui/icons-material/Dashboard';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LayersIcon from '@mui/icons-material/Layers';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';

// Thay đổi kiểu dữ liệu của icon thành ReactNode
type Nav = {
    title: string;
    path: string;
    icon: React.ReactNode;
    iconActive: React.ReactNode;
};

// Cấu hình cho menu
const config: Nav[] = [
    { title: 'Dashboard', path: '/', icon: <DashboardOutlinedIcon />, iconActive: <DashboardIcon /> },
    { title: 'Thiết bị', path: '/device', icon: <DesktopWindowsOutlinedIcon />, iconActive: <DesktopWindowsIcon /> },
    { title: 'Dịch vụ', path: '/service', icon: <QuestionAnswerOutlinedIcon />, iconActive: <QuestionAnswerIcon /> },
    { title: 'Cấp số', path: '/stat', icon: <LayersOutlinedIcon />, iconActive: <LayersIcon /> },
    { title: 'Báo cáo', path: '/report', icon: <DescriptionOutlinedIcon />, iconActive: <DescriptionIcon /> },
    { title: 'Cài đặt hệ thống ⁝', path: '/setting', icon: <SettingsOutlinedIcon />, iconActive: <SettingsIcon /> },
];

const Menubar: React.FC = () => {
    const currentPage = useLocation().pathname;

    return (
        <div className="flex flex-col items-center justify-between rounded shadow bg-white">
            <div className="menubar-header flex flex-col items-center">
                <div className="w-20 m-10">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="flex flex-col items-start w-full">
                    {config.map((item) => (
                        <Link
                            to={item.path}
                            key={item.path}
                            className={`flex items-center cursor-default w-full p-3 font-semibold ${
                                item.path === currentPage
                                    ? 'text-orange-50 bg-orange-500'
                                    : 'text-gray-600 rounded hover:bg-orange-50 hover:text-orange-500'
                            }`}
                        >
                            {/* Hiển thị icon active hoặc icon bình thường dựa trên trạng thái của route */}
                            {item.path === currentPage ? item.iconActive : item.icon}
                            <span className="ml-2 cursor-default">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-full p-3">
                <div className="w-full p-3 bg-orange-50 text-orange-500 rounded-lg justify-start items-center gap-3 inline-flex cursor-pointer hover:bg-orange-500 hover:text-orange-50 duration-300 ease-in-out">
                    <LogoutIcon />
                    <div className="text-base font-semibold">Đăng xuất</div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;
