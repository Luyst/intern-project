import React, { useState } from 'react';
import DateFilter from '~/components/DateFilter';
import { DownloadIcon } from '~/components/Icons';
import Pagination from '~/components/Pagination';
import Seacrch from '~/components/Search';

// Define the type for the props
type DocType = {
    name: string;
    date: string;
};

type DocTableProps = {
    docs: DocType[];
};

const DocTable: React.FC<DocTableProps> = ({ docs }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const handleOnChangePage = (page: number) => {};

    return (
        <div
            id="doctable-container"
            className="doctable-container w-full flex flex-col gap-6 items-center justify-center sm:bg-white bg-opacity-70 p-12 rounded-lg shadow-black shadow-md"
        >
            <div className="tableHeader flex justify-between w-full ">
                <div className="dateFilter sm:block hidden">
                    <div className="title text-lg font-semibold text-blue-500">Ngày tạo</div>
                    <div className="body ">
                        <DateFilter />
                    </div>
                </div>
                <div className="Search bg-white bg-opacity-70 sm:bg-none p-2 flex items-center sm:p-0 rounded-lg">
                    <div className="title text-lg font-semibold text-blue-500 sm:block hidden">Từ khóa</div>
                    <div className="body">
                        <Seacrch />
                    </div>
                </div>
            </div>
            <div className="tableBody w-full">
                <div className="bg-blue-500 text-white text-lg hidden sm:grid grid-cols-12 rounded-xl mb-2">
                    <div className="p-2 col-span-1 text-center">STT</div>
                    <div className="p-2 col-span-6 ">Tên tài liệu</div>
                    <div className="p-2 col-span-3 ">Ngày tạo</div>
                    <div className="p-2 col-span-2 text-center">Tải tài liệu</div>
                </div>
                <div className="flex flex-col gap-2">
                    {docs.length > 0 ? (
                        docs.slice(10 * (currentPage - 1), 10 * currentPage).map((doc, index) => (
                            <div key={index} className="bg-blue-50 rounded-xl text-gray-600 grid grid-cols-12 ">
                                <div className="p-2 col-span-1 text-center">{index + 1}</div>
                                <div className="p-2 col-span-6">{doc.name}</div>
                                <div className="p-2 col-span-3 ">{doc.date}</div>
                                <div className="p-2 col-span-2 flex justify-center items-center cursor-pointer">
                                    <DownloadIcon />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center p-2">No documents available</div>
                    )}
                </div>
            </div>
            <div className="tableFooter flex justify-center sm:justify-between w-full">
                <div className="LeftFooter text-gray-600 sm:block hidden">
                    Hiển thị{' '}
                    <input
                        type="text"
                        className="w-8 outline-blue-600 outline-1 p-1 mx-1  outline text-blue-600 bg-white bg-opacity-0 rounded-[4px] text-center font-bold"
                        defaultValue={10}
                    />{' '}
                    câu trả lời trong mỗi trang
                </div>
                <div className="RightFooter ">
                    <Pagination currentPage={currentPage} totalPages={docs.length / 10} onPageChange={setCurrentPage} />
                </div>
            </div>
        </div>
    );
};

export default DocTable;
