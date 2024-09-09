import { useState } from 'react';
import Button from '~/components/Button';
import Logo from '~/components/Logo';
import Search from '~/components/Search';

const jobCategories: { [key: string]: string[] } = {
    'Lĩnh vực': [
        'Hướng dẫn viên',
        'Kinh doanh',
        'Kĩ sư xây dựng',
        'Nhân viên kế toán',
        'Nhân viên kĩ thuật',
        'Nhân viên phục vụ',
    ],
    'Hình thức làm việc': ['Bán thời gian', 'Nhân viên chính thức', 'Theo ca', 'Thực tập'],
    'Nơi làm việc': [
        'Cà Phê Vườn Đá',
        'NH Thủy Tạ Đầm Sen',
        'CVVH Đầm Sen',
        'Khách sạn Ngọc Lan',
        'Khách sạn Phú Thọ',
        'KDL Sinh Thái Vàm Sát',
        'Trung tâm DVDL Đầm Sen',
        'VP Phuthotourist',
    ],
};

function RecruitSidebar() {
    const [active, setActive] = useState<string[]>([]);

    const toggleActive = (item: string) => {
        setActive((prevActive) =>
            prevActive.includes(item) ? prevActive.filter((i) => i !== item) : [...prevActive, item],
        );
    };

    return (
        <div className="postSidebar relative flex flex-col p-6 bg-white bg-opacity-70 h-full min-w-80 rounded-xl gap-6 overflow-hidden">
            <header>
                <Search />
            </header>
            <div className="flex flex-col gap-6">
                {Object.entries(jobCategories).map(([category, items]) => (
                    <div key={category}>
                        <div className="font-bold text-blue-500 text-xl">{category}</div>
                        <div className="list-inside flex flex-row flex-wrap gap-2">
                            {items.map((item) => (
                                <div
                                    key={item}
                                    onClick={() => toggleActive(item)}
                                    className={`px-5 py-3 text-sm cursor-pointer ease-in-out duration-300 ${
                                        active.includes(item) ? 'bg-blue-500 text-white font-semibold' : 'bg-white'
                                    } rounded-full`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 translate-x-16 translate-y-10 opacity-15">
                <Logo size={3} />
            </div>
        </div>
    );
}

export default RecruitSidebar;
