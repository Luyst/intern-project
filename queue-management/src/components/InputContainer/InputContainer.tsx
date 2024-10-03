import React from 'react';

type Props = {
    title: string;
    children: React.ReactNode;
};

const InputContainer: React.FC<Props> = ({ title, children }) => {
    return (
        <div className="w-full">
            <div className="filter-title font-semibold">{title}</div>
            {children}
        </div>
    );
};

export default InputContainer;
