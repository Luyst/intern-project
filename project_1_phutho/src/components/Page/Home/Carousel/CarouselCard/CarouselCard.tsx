import { FC } from 'react';

type CardProps = {
    card: {
        content: string;
        image: string;
    };
};

const Carousel: FC<CardProps> = ({ card }) => {
    return (
        <div className="carousel-item w-dvw flex flex-row justify-center relative overflow-hiddenaspect-4/6">
            <img className="object-cover" src={card.image} alt="carousel" />
            <div className="absolute font-semibold text-white bottom-4 px-2">{card.content}</div>
        </div>
    );
};

export default Carousel;
