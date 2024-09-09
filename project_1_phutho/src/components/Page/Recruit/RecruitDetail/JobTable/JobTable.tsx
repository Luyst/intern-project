interface JobDetail {
    position: string;
    numberOfPositions: number;
    workplace: string;
    workAddress: string;
    jobDescription: string[];
    workingDays: string;
    workingHours: string;
    benefits: string[];
    requirements: string[];
    ageRequirement: string;
    educationRequire: string;
}

const JobTable = ({ jobDetail }: { jobDetail: JobDetail }) => {
    // Mảng chứa các cặp tiêu đề và giá trị
    const rows = [
        { label: 'Vị trí', value: jobDetail.position },
        { label: 'Số lượng', value: `${jobDetail.numberOfPositions} người` },
        { label: 'Nơi làm việc', value: jobDetail.workplace },
        { label: 'Địa chỉ làm việc', value: jobDetail.workAddress },
        {
            label: 'Mô tả công việc',
            value: (
                <ul className="list-disc list-outside ps-4">
                    {jobDetail.jobDescription.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            ),
        },
        { label: 'Ngày làm việc', value: jobDetail.workingDays },
        { label: 'Giờ làm việc', value: jobDetail.workingHours },
        {
            label: 'Quyền lợi',
            value: (
                <ul className="list-disc list-outside ps-4">
                    {jobDetail.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            ),
        },
        {
            label: 'Yêu cầu',
            value: (
                <ul className="list-disc list-outside ps-4">
                    {jobDetail.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            ),
        },
        { label: 'Độ tuổi', value: jobDetail.ageRequirement },
        { label: 'Trình độ', value: jobDetail.educationRequire },
        {
            label: 'Hồ sơ gồm',
            value: (
                <div>
                    <div>Thông tin ứng tuyển:</div>
                    <ul className="list-disc list-inside">
                        <li>Ứng viên vui lòng gửi CV đến email: tuyendung@damsenpark.vn.</li>
                        <li>
                            Hoặc nộp hồ sơ trực tiếp tại Trụ sở Văn phòng Công ty: 15 đường số 2, cư xá Lữ Gia, P. 15,
                            Quận 11. (ĐT: 028 38 650 921 - Phòng Nhân sự).
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div>
            <table className="w-full text-left border-collapse sm:block hidden">
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className={`${index !== rows.length - 1 && 'border-b'} border-gray-400 `}>
                            <td className=" py-4 sm:px-8 text-lg font-semibold text-nowrap text-gray-700 border-r border-gray-400">
                                {row.label}
                            </td>
                            <td className="py-4 sm:px-8 text-gray-700">{row.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="sm:hidden">
                {rows.map((row, index) => (
                    <div key={index} className={`flex flex-col gap-2`}>
                        <div className="  sm:px-8 text-lg font-semibold text-nowrap text-gray-700">{row.label}</div>
                        <div className=" sm:px-8 text-gray-700">{row.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobTable;
