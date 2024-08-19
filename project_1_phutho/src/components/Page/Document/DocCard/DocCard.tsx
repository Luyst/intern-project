import React from 'react';
import { DocCardType } from '~/typeComponent';
import { DocumentIcon } from '~/components/Icons';

const DocCard: React.FC<DocCardType> = ({ id, title, imageUrl }) => {
    return (
        <div className="DocCard-container relative flex items-center justify-center aspect-doc-card max-h-52 rounded-lg overflow-hidden group cursor-pointer">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 ease-in-out duration-300"
            />
            <div className="absolute h-full w-full bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <div className="icon flex justify-center ">
                    <DocumentIcon />
                </div>
                <div className="text-white text-xs font-bold text-center max-w-28 hover:underline">{title}</div>
            </div>
        </div>
    );
};

export default DocCard;
