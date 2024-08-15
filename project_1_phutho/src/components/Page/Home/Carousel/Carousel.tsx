import { useEffect, useState } from 'react';
import { getAllDocuments } from '~/firebase/service';
import CarouselCard from './CarouselCard';

function Carousel() {
    const [carouselList, setCarouselList] = useState<any[]>([]); // Initialize state with an empty array

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
    return (
        <div className=".carousel-container w-full pb-60 flex flex-row justify-center perspective-800 *:transform ">
            {carouselList.map((item) => (
                <CarouselCard card={item} />
            ))}
        </div>
    );
}

export default Carousel;
