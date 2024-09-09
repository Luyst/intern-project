import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Pagination from '~/components/Pagination';
import Seacrch from '~/components/Search';

type JobData = {
    jobName: string;
    jobType: string;
    place: string;
    timePosted: string;
    status: string;
    jobDetail: string;
};

function RecruitMain({ recruitData }: { recruitData: JobData[] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9); // Số lượng mặc định là 9

    // Lắng nghe sự thay đổi kích thước màn hình
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                setItemsPerPage(4); // Nếu màn hình <= 500px, hiển thị 4 công việc
            } else {
                setItemsPerPage(9); // Ngược lại, hiển thị 9 công việc
            }
        };

        // Gọi hàm khi component mount lần đầu
        handleResize();

        // Thêm event listener khi thay đổi kích thước màn hình
        window.addEventListener('resize', handleResize);

        // Cleanup event listener khi component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="sliderSidebar relative flex flex-col w-full items-center h-full  rounded-lg ">
            <div className="RecruitMain w-full flex flex-col items-center sm:grid grid-cols-3 gap-2 ">
                <header className="header flex sm:hidden bg-white bg-opacity-70 flex flex-row justify-between items-center p-3 rounded-xl">
                    <div className="">
                        <Seacrch />
                    </div>
                </header>
                {recruitData
                    .slice(itemsPerPage * (currentPage - 1), itemsPerPage * currentPage)
                    .map((recruit, index) => (
                        <div className="recruitCard flex flex-col w-full  bg-white p-3 gap-2 rounded-lg" key={index}>
                            <div className="recruitCardHeader relative flex flex-row">
                                <div className="size-16 aspect-square">
                                    <img
                                        className="size-full aspect-square object-contain"
                                        src="http://damsenpark.vn/wp-content/uploads/2018/08/logo-dam-sen.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <div className="jobName text-blue-600 font-bold text-xl">{recruit.jobName}</div>
                                    <div className="jobType text-blue-300 text-sm">{recruit.jobType}</div>
                                    <div className="jobType text-gray-500 text-sm">{recruit.place}</div>
                                    <div className="jobType text-gray-500 text-sm">{recruit.timePosted}</div>
                                </div>
                                <div className="absolute bottom-0 right-0">
                                    <Button
                                        size={1}
                                        secondary
                                        bgColor={recruit.status === 'Đang tuyển' ? 'bg-green-50' : 'bg-red-50'}
                                        textColor={recruit.status === 'Đang tuyển' ? 'text-green-500' : 'text-red-500'}
                                        text={recruit.status}
                                    />
                                </div>
                            </div>
                            <div className="recruitCardBody flex flex-col gap-2">
                                <div className="bodyTitle text-blue-500 font-semibold">Mô tả công việc:</div>
                                <div className="jobDetail text-xs text-gray-500">{recruit.jobDetail}</div>
                                <Link
                                    to="/recruit/jobdetail"
                                    className="bg-blue-500 text-center text-white rounded-full w-full py-2"
                                >
                                    Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="Pagination absolute -bottom-5 translate-y-full  left-1/2 -translate-x-1/2 bg-opacity-70 bg-white w-fit  rounded-full p-1">
                <Pagination
                    onPageChange={setCurrentPage}
                    totalPages={Math.ceil(recruitData.length / itemsPerPage)} // Số trang tùy vào số lượng công việc trên mỗi trang
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
}

export default RecruitMain;
