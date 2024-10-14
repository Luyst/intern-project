// src/pages/Report.tsx
import React, { useState } from 'react';
import Button from '~/components/Button';
import TableComponent from '~/components/TableComponent';
import reports from '~/data/reports.json';
const Report: React.FC = () => {
    const [workingFilter, setWorkingFilter] = useState<string>('Tất cả');
    const [connectingFilter, setConnectingFilter] = useState<string>('Tất cả');
    const renderCells = (key: string, item: Record<string, any>) => {
        if (key === 'isWork') {
            return item[key] ? 'Đang hoạt động' : 'Ngừng hoạt động';
        }
        if (key === 'isConnect') {
            return item[key] ? 'Kết nối' : 'Mất kết nối';
        }
        return item[key];
    };
    return (
        <div className="report-container flex flex-col gap-3 w-full">
            <div className="text-title">Báo cáo</div>
            <div className="report-main flex items-center justify-between">
                <div className="table-report-container min-w-[1112px]">
                    <div className="header-table-container flex justify-between mb-5 w-full">
                        <div className="filter-container flex gap-4 *:w-72"></div>
                    </div>

                    <div className="main-table-report ">
                        <TableComponent data={reports.data} titles={reports.title} renderCells={renderCells} />
                    </div>
                </div>
                <div className="add-report ">
                    <Button label="Thêm thiết bị" />
                </div>
            </div>
        </div>
    );
};

export default Report;
