const unitList: string[] = [
    'Công viên Văn hóa Đầm Sen',
    'Khu du lịch sinh thái Vàm Sát',
    'Khách sạn Ngọc Lan (Quận 1)',
    'Khách sạn Phú Thọ (Quận 11)',
    'Trung tâm Du lịch Đầm Sen',
];

function UnitContainer() {
    return (
        <div className="units-container">
            <div className="text-title uppercase text-xl">CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST</div>
            <ul className="units-list flex list-inside list-disc flex-col justify-between ">
                {unitList.map((unit, index) => (
                    <li className="py-1.5" key={'unit' + index}>
                        {unit}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UnitContainer;
