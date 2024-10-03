import TableComponent from '~/components/TableComponent';
import React, { useState } from 'react';
import devices from '~/data/device_list.json';
import Dropdown from '~/components/Dropdown';
import { InputContainer } from '~/components/InputContainer';
import Search from '~/components/Search';

const Device: React.FC = () => {
    const [workingFilter, setWorkingFilter] = useState<string>('Tất cả');
    const [connectingFilter, setConnectingFilter] = useState<string>('Tất cả');
    const [keyWord, setKeyWord] = useState<string>();

    const renderCells = (key: string, item: Record<string, any>) => {
        if (key === 'isWork') {
            return item[key] ? 'Đang hoạt động' : 'Ngừng hoạt động';
        }
        if (key === 'isConnect') {
            return item[key] ? 'Kết nối' : 'Mất kết nối';
        }
        return item[key];
    };

    console.log(keyWord);
    return (
        <div className="device-container flex flex-col gap-3 w-full">
            <div className="text-title">Danh sách thiết bị</div>

            <div className="table-device-container pe-20">
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

                    <div className="search-container w-72">
                        <InputContainer title="Từ khoá">
                            <Search
                                placeHolder="Tìm từ khóa"
                                type="text"
                                onChange={(event) => setKeyWord(event.target.value)}
                            />
                        </InputContainer>
                    </div>
                </div>

                <div className="main-table-device">
                    <TableComponent
                        data={devices.data}
                        titles={devices.title}
                        renderCells={renderCells}
                        detailShow
                        updateShow
                    />
                </div>
            </div>
            <div className="add-device">
                Thêm thiết bị
                <button></button>
            </div>
        </div>
    );
};

export default Device;
