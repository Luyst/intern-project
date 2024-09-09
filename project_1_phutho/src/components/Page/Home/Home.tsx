import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { getAllDocuments } from '~/firebase/service';
import About from './About';
import HomePost from './HomePost';
import HomeService from './HomeService';

function Home() {
    const [home, setHome] = useState<any>({});
    useEffect(() => {
        const fetchHome = async () => {
            try {
                const homeData = await getAllDocuments('home');
                const homeById = homeData.reduce((acc, doc) => {
                    acc[doc.id] = doc;
                    return acc;
                }, {} as Record<string, any>);

                setHome(homeById);
            } catch (error) {
                console.error('Error fetching carousel data:', error);
            }
        };

        fetchHome();
    }, []);
    return (
        <div className="flex flex-col items-center sm:px-32  p-4">
            <div className="text-title text-white flex flex-col items-center pb-10 text-center  sm:p-0">
                <div className="text-2xl font-bold">CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</div>
                <div className="text-helvetica text-4xl tracking-widest text-cyan ">PHUTHOTOURIST</div>
                <div className="text-helvetica italic">Ngày thành lập 01/01/2019</div>
            </div>
            <Carousel />
            <div className="rounded-xl w-full overflow-hidden">
                {home.about && <About data={home.about} />}
                {home.newPost && <HomePost data={home.newPost} />}
                {home.service && <HomeService data={home.service} />}
            </div>
        </div>
    );
}

export default Home;
