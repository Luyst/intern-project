import React from 'react';
import { CardType } from '~/typeComponent';
import Button from '../Button';

const Card: React.FC<CardType> = ({ imageUrl, author, title, content, type, view, date }) => {
    return (
        <div className="cardContainer bg-white rounded-xl overflow-hidden max-w-88">
            <div className="thumbnail w-full aspect-video">
                <img src={imageUrl} alt="Card-image" className="card-image w-full h-full object-cover" />
            </div>
            <div className="card-body p-6 flex flex-col gap-4 text-gray-500">
                <div className="text-gray-400">{author}</div>
                <div className="text-blue-500 font-bold text-xl">{title}</div>
                <div className="text-gray-500">{content}</div>

                <div className="moreInfor flex flex-col gap-2">
                    <div className="type flex flex-row gap-1">
                        <Button text="Sự kiện" size={1} secondary />
                        <Button text="Thông báo" size={1} secondary />
                        <Button text="Tin tức" size={1} secondary />
                    </div>
                    <div className="text-gray-400 type flex flex-row gap-2">
                        <div>{view} lượt xem</div>
                        <div>•</div>
                        <div>{date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
