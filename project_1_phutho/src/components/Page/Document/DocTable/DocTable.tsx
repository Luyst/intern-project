import React from 'react';
import DateFilter from '~/components/DateFilter';
import { DownloadIcon } from '~/components/Icons';
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
    return (
        <div className="DocTable-container w-full flex flex-col gap-4 items-center justify-center bg-white bg-opacity-70 p-12 rounded-lg shadow-black shadow-md">
            <div className="tableHeader flex justify-between w-full ">
                <div className="dateFilter">
                    <div className="title text-lg font-semibold text-blue-500">Ngày tạo</div>
                    <div className="body">
                        <DateFilter />
                    </div>
                </div>
                <div className="Search">
                    <div className="title">Từ khóa</div>
                    <div className="body">
                        <Seacrch />
                    </div>
                </div>
            </div>
            <div className="tableBody w-full">
                <div className="bg-blue-500 text-white text-lg grid grid-cols-12 rounded-xl mb-2">
                    <div className="p-2 col-span-1 text-center">STT</div>
                    <div className="p-2 col-span-6 ">Tên tài liệu</div>
                    <div className="p-2 col-span-3 ">Ngày tạo</div>
                    <div className="p-2 col-span-2 text-center">Tải tài liệu</div>
                </div>
                <div className="flex flex-col gap-2">
                    {docs.length > 0 ? (
                        docs.map((doc, index) => (
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
            <div className="tableFooter flex justify-between">
                <p className="LeftFooter "></p>
            </div>
        </div>
    );
};

export default DocTable;
