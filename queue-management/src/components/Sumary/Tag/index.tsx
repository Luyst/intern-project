import React from 'react';

interface StatisticsCardProps {
    percentage: number;
    value: number;
    type: 'devide' | 'status' | 'service';
    active: number;
    inactive: number;
}

const Tag: React.FC<StatisticsCardProps> = ({ percentage, value, type, active, inactive }) => {
    let titleText: string;

    switch (type) {
        case 'devide':
            titleText = 'Thiết bị';
            break;
        case 'status':
            titleText = 'Cấp số';
            break;
        case 'service':
            titleText = 'Dịch vụ';
            break;
        default:
            titleText = 'Unknown Title';
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-full flex items-center justify-between">
            <div className="relative w-20 h-20">
                <svg className="circular-chart bg-white" viewBox="0 0 36 36">
                    <path
                        className="circle-bg stroke-2 stroke-slate-100 duration-300 ease-in-out"
                        fill="none"
                        d="M18 2.0845a15.915 15.915 0 1 1 0 31.83 15.915 15.915 0 0 1 0-31.83"
                    />
                    <path
                        className="circle  stroke-green-600 stroke-2 duration-150 ease-in-out"
                        fill="none"
                        strokeDasharray={`${percentage}, 100`}
                        d="M18 2.0845a15.915 15.915 0 1 1 0 31.83 15.915 15.915 0 0 1 0-31.83"
                    />
                    <path
                        className="circle-inner stroke-gray-200 stroke-2"
                        fill="none"
                        d="M18 5.0845a12.915 12.915 0 1 1 0 25.83 12.915 12.915 0 0 1 0-25.83"
                    />
                    <path
                        className="circle-inner stroke-blue-600 stroke-2 duration-150 ease-in-out"
                        fill="none"
                        strokeDasharray={`${((100 - percentage) * 81) / 100}, 100`}
                        d="M18 5.0845a12.732 12.732 0 1 1 0 25.83 12.732 12.732 0 0 1 0-25.83"
                    />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
                    {percentage}%
                </div>
            </div>
            <div>
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm">{titleText}</div>
            </div>
            <div className="">
                <div className="text-sm text-gray-600">
                    <div className="flex">
                        <span className="text-xs">Đang hoạt động:</span>
                        <div className="text-sm font-bold text-orange-500">{active}</div>
                    </div>
                    <div className="flex">
                        <span className="text-xs">Ngừng hoạt động:</span>
                        <div className="text-sm font-bold text-orange-500"> {inactive}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tag;
