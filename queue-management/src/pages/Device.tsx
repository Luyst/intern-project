import TableComponent from '~/components/TableComponent';
import React, { useState } from 'react';
import devices from '~/data/device_list.json';
import Dropdown from '~/components/Dropdown';

const Devices: React.FC = () => {
    const [workingFilter, setWorkingFilter] = useState<string>('Tất cả');
    const [conectingFilter, setConectingFilter] = useState<string>('Tất cả');

    const titles: string[] = [
        'Mã thiết bị',
        'Tên thiết bị',
        'Địa chỉ IP',
        'Trạng thái hoạt động',
        'Trạng thái kết nối',
        'Dịch vụ sử dụng',
    ];
    const renderCells = (key: string, item: Record<string, any>) => {
        if (key === 'isWork' || key === 'isConnect') {
            return item[key] ? 'Đang hoạt động' : '';
        }
        return item[key];
    };
    return (
        <div className="device-container flex flex-col gap-3">
            <div className="text-title">Danh sách thiết bị</div>
            <div className="table-devide-container ">
                <div className="header-table-container flex justify-between">
                    <div className="filter-container flex gap-4">
                        <div className="isWorkingFilter clamp">
                            <div className="filter-title">Trạng thái hoạt động</div>
                            <Dropdown
                                items={['Tất cả', 'Hoạt động', 'Ngừng hoạt động']}
                                defaultSelected={workingFilter}
                                onSelect={(item) => console.log('Selected:', item)}
                            />
                        </div>
                        <div className="isConectingFilter">
                            <div className="filter-title">Trạng thái kết nối</div>
                            <Dropdown
                                items={['Tất cả', 'Kết nối', 'Mất kết nối']}
                                defaultSelected={conectingFilter}
                                onSelect={(item) => console.log('Selected:', item)}
                            />
                        </div>
                    </div>
                </div>
                <div className="main-table-device pe-20">
                    <TableComponent data={devices} titles={titles} renderCells={renderCells} />
                </div>
            </div>
        </div>
    );
};

export default Devices;
