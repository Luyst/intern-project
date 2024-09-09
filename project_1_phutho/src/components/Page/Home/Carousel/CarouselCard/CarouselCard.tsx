import { FC } from 'react';

type CardProps = {
    card: {
        content: string;
        image: string;
    };
    isActive: boolean;
    onClick: () => void;
};

const CarouselCard: FC<CardProps> = ({ card, isActive, onClick }) => {
    return (
        <div
            className={`carousel-item ${
                isActive ? 'active' : ''
            } min-w-72 md:min-w-0 flex flex-row justify-center relative overflow-hidden aspect-4/6`}
            onClick={onClick}
        >
            <img className="object-cover h-full w-full" src={card.image} alt="carousel" />
            <div className="absolute font-semibold sm:text-base text-xs text-white bottom-4 px-2">{card.content}</div>
        </div>
    );
};

export default CarouselCard;
