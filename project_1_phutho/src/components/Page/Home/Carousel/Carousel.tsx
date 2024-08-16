import { useEffect, useState } from 'react';
import { getAllDocuments } from '~/firebase/service';
import CarouselCard from './CarouselCard';
import './Carousel.css';

function Carousel() {
    const [carouselList, setCarouselList] = useState<any[]>([]);
    const [center, setCenter] = useState(2);

    useEffect(() => {
        const fetchCarousel = async () => {
            try {
                const carousel = await getAllDocuments('carousel');
                setCarouselList(carousel);
            } catch (error) {
                console.error('Error fetching carousel data:', error);
            }
        };

        fetchCarousel();
    }, []);

    const handleCardClick = (index: number) => {
        setCenter(index);
    };

    // Tính toán lại vị trí của các thẻ dựa trên chỉ số của `center`
    const getOrderedCarouselList = () => {
        const length = carouselList.length;
        return carouselList.map((_, index) => carouselList[(index + center) % length]);
    };

    const orderedCarouselList = getOrderedCarouselList();

    return (
        <div className="carousel-container w-full pb-60 flex flex-row justify-center items-center perspective-800">
            {orderedCarouselList.map((item, index) => (
                <CarouselCard
                    key={'card' + index}
                    card={item}
                    isActive={index === center}
                    onClick={() => handleCardClick(index)}
                />
            ))}
        </div>
    );
}

export default Carousel;
