import React from 'react';
import { CardType } from '~/typeComponent';
import Button from '../Button';

const Card: React.FC<CardType> = ({ imageUrl, author, title, content, type, view, date, size = 3 }) => {
    let titleSize: string = '';
    let textSize: string = '';
    let paddingSize: string = '';

    switch (size) {
        case 1:
            titleSize = 'text-sm';
            textSize = 'text-xs';
            paddingSize = 'p-2';
            break;
        case 2:
            titleSize = 'text-xs';
            textSize = 'text-xs';
            break;
        case 3:
            titleSize = 'text-xl';
            textSize = 'text-md';
            paddingSize = 'p-4';
            break;
        default:
            break;
    }

    return (
        <div className="cardContainer bg-white rounded-xl h-full  overflow-hidden max-w-88">
            <div className="thumbnail relative  w-full   cursor-pointer group aspect-video overflow-hidden">
                <img
                    src={imageUrl}
                    alt="Card-image"
                    className="card-image w-full h-full object-cover group-hover:scale-110     ease-in-out duration-500"
                />
                <div className="absolute hidden size-full bg-black group-hover:flex  items-center justify-center bg-opacity-50 top-0">
                    <div className="items-center text-white font-md text-xl">Click để xem</div>
                </div>
            </div>
            <div className={`card-body ${paddingSize} flex flex-col  gap-2 text-gray-500`}>
                <div className={`text-gray-400 ${textSize}`}>{author}</div>
                <div
                    className={`text-blue-500 font-bold hover:underline-offset-2   cursor-pointer hover:underline ${titleSize}`}
                >
                    {title}
                </div>
                <div className="text-gray-500">{content}</div>

                <div className="moreInfor flex flex-col gap-2">
                    <div className="type flex flex-row gap-1">
                        <Button text="Sự kiện" size={size} secondary />
                        <Button text="Thông báo" size={size} secondary />
                        <Button text="Tin tức" size={size} secondary />
                    </div>
                    <div className={`text-gray-400 type flex flex-row gap-2 ${textSize}`}>
                        <div>10N lượt xem</div>
                        <div>•</div>
                        <div>20/02/2020</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
