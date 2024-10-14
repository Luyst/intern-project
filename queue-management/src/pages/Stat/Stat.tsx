import { Search } from '@mui/icons-material';
import React, { useState } from 'react';
import Button from '~/components/Button';
import Dropdown from '~/components/Dropdown';
import { InputContainer } from '~/components/InputContainer';
import TableComponent from '~/components/TableComponent';
import stats from '~/data/stats.json';

const Stat: React.FC = () => {
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
            <div className="text-title">Quản lý cấp số</div>
            <div className="stat-main flex items-center justify-between">
                <div className="table-stat-container min-w-[1112px]">
                    <div className="header-table-container flex justify-between mb-5 w-full">
                        <div className="filter-container flex gap-4 *:w-72">
                            <InputContainer title="Trạng thái hoạt động">
                                <Dropdown
                                    items={['Tất cả', 'Hoạt động', 'Ngừng hoạt động']}
                                    defaultSelected={workingFilter}
                                    onSelect={(item) => setWorkingFilter(item)}
                                />
                            </InputContainer>

                            <InputContainer title="Trạng thái kết nối">
                                <Dropdown
                                    items={['Tất cả', 'Kết nối', 'Mất kết nối']}
                                    defaultSelected={connectingFilter}
                                    onSelect={(item) => setConnectingFilter(item)}
                                />
                            </InputContainer>
                        </div>
                    </div>
                    <div className="main-table-stat">
                        <TableComponent data={stats.data} titles={stats.title} renderCells={renderCells} detailShow />
                    </div>
                </div>
                <div className="add-stat">
                    <Button label="Thêm thiết bị" />
                </div>
            </div>
        </div>
    );
};

export default Stat;
