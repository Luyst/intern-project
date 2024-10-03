// src/pages/Services.tsx
import React from 'react';
import TableComponent from '~/components/TableComponent';
import services from '~/data/services.json';
const Services: React.FC = () => {
    const renderCells = (key: string, item: Record<string, any>) => {
        if (key === 'isWork' || key === 'isConnect') {
            return item[key] ? 'Đang hoạt động' : ''; // Hiển thị "Yes" hoặc "No" cho thuộc tính boolean
        }
        return item[key]; // Hiển thị giá trị mặc định cho các thuộc tính khác
    };
    return (
        <div className="service-container w-4/5">
            <div className="text-title">Danh sách thiết bị</div>
            <TableComponent
                data={services}
                titles={['Mã dịch vụ', 'Tên dịch vụ', 'Mô tả', 'Trạng thái hoạt động']}
                renderCells={renderCells}
            />
        </div>
    );
};

export default Services;
