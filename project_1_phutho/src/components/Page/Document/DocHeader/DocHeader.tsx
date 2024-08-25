import { useState } from 'react';
import DocCard from '../DocCard';
import docs from './DocCard.json';
import { MoreIcon } from '~/components/Icons';

function DocHeader() {
    const [cardQuantity, setCardQuantity] = useState(8); // Sử dụng useState đúng cách

    return (
        <div>
            <div className="DocHeader-container grid grid-cols-4 gap-4">
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
