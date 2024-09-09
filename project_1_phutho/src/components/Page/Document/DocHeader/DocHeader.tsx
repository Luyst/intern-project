import { useEffect, useState } from 'react';
import DocCard from '../DocCard';
import docs from './DocCard.json';
import { MoreIcon } from '~/components/Icons';

function DocHeader() {
    const [cardQuantity, setCardQuantity] = useState(8); // Sử dụng useState đúng cách

    useEffect(() => {
        // Lắng nghe sự thay đổi kích thước màn hình
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                setCardQuantity(6);
            } else {
                setCardQuantity(8);
            }
        };

        handleResize();

        // Thêm event listener khi thay đổi kích thước màn hình
        window.addEventListener('resize', handleResize);

        // Cleanup event listener khi component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <div className="DocHeader-container grid sm:grid-cols-4 grid-cols-3 px-3 gap-4">
                {docs.slice(0, cardQuantity).map((doc) => (
                    <DocCard key={doc.id} id={doc.id} title={doc.title} imageUrl={doc.imageUrl} />
                ))}
            </div>
            {cardQuantity < docs.length && (
                <a
                    href="#goToDocTable"
                    id="goToDocTable"
                    className="flex justify-center my-10 animate-bounce cursor-pointer"
                >
                    <MoreIcon />
                </a>
            )}
        </div>
    );
}

export default DocHeader;
