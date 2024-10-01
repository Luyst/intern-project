import React from 'react';

type CardProps = {
    color: string; // Màu nền cho Card
    icon: React.ReactNode; // Icon sẽ hiển thị ở đầu
    title: string; // Tiêu đề của Card
    changing: string; // Tăng hoặc giảm (vd: +12%, -5%)
    value: string | number; // Giá trị chính
};

const Card: React.FC<CardProps> = ({ color, icon, title, changing, value }) => {
    return (
        <div className={`Card rounded-xl aspect-video  shadow flex flex-col justify-between items-start p-3 bg-white`}>
            <div className="flex gap-2 items-center">
                <div className={`flex items-center justify-center size-12 rounded-full ${color}`}>{icon}</div>

                <div className="text-sm font-bold ">{title}</div>
            </div>
            <div className="flex justify-between w-full">
                <div className="text-3xl font-bold ">{value}</div>

                <div
                    className={`text-sm p-1 mt-2 rounded-full flex justify-center items-center ${
                        changing.startsWith('+') ? 'text-orange-500 bg-orange-100' : 'text-red-500 bg-red-50'
                    }`}
                >
                    {changing}
                </div>
            </div>
        </div>
    );
};

export default Card;
