import { useState } from 'react';
import LineChart from '~/components/LineChart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function StaticChart() {
    const [time, setTime] = useState('ngày');
    const selectItem = ['ngày', 'tháng', 'năm'];
    const data = [
        2800, 3300, 3600, 3800, 4000, 4550, 4850, 4600, 4200, 4600, 4650, 4200, 4600, 4800, 4750, 4850, 4350, 3750,
        3800, 3700, 4600, 4700, 3900, 3850, 3800, 3700, 3750, 3800, 3750, 3700,
    ];
    const labels = Array.from({ length: 30 }, (_, i) => (i + 1).toString());
    return (
        <div className="line-chart-container bg-white p-5 rounded-lg    ">
            <div className="chart-header flex justify-between">
                <div className="title text-black  text-xl font-bold">Bảng thống kê theo {time}</div>
                <div className="filter-time flex gap-2 items-center">
                    <span className="text-base text-black font-semibold">Xem theo</span>
                    <div className="select-time group min-w-24 relative rounded-lg flex items-center ps-2 gap-2 justify-between bg-white border border-gray-400">
                        <div className="selct-input capitalize">{time}</div>
                        <div className="text-orange-500">
                            <ArrowDropDownIcon fontSize="large" />
                        </div>

                        <div className="drop-select  absolute top-full bg-white w-full  opacity-0 group-hover:opacity-100 group-hover:translate-y-1 left-0 rounded-lg shadow transition-all duration-300 ease-in-out">
                            {selectItem.map((item) => (
                                <div
                                    className="drop-item capitalize p-2 hover:bg-orange-100"
                                    onClick={() => setTime(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <LineChart data={data} labels={labels} />
        </div>
    );
}

export default StaticChart;
