import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
interface ISearchProps {
    placeHolder: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<ISearchProps> = ({ placeHolder, type, onChange }) => {
    return (
        <div className="relative">
            <input
                className="input-field w-full flex items-center px-2.5 py-1.5 rounded-lg   focus-within:outline-2  focus-within:outline-orange-400"
                type={type}
                placeholder={placeHolder}
                onChange={onChange}
            />
            <div className="absolute top-0 right-0 -translate-x-1/2  h-full flex items-center text-orange-500">
                <SearchOutlinedIcon />
            </div>
        </div>
    );
};

export default Search;
