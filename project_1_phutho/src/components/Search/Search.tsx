import React from 'react';
import { SearchIcon } from '../Icons';
const Seacrch: React.FC = () => {
    return (
        <div className="SearchContainer relative w-full">
            <input
                type="text"
                name="Search"
                id="Button"
                className="py-2 ps-10 rounded-md min-w-72  w-full focus:outline-none border-2 border-white focus:border-blue-500 "
                placeholder="Tìm kiếm"
            />
            <span className="absolute left-3 translate-y-2">
                <SearchIcon color="#0054A6" />
            </span>
        </div>
    );
};

export default Seacrch;
