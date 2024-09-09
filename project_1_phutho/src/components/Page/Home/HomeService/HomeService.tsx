import Card from '~/components/Card';

function HomeService({ data }: { data: any }) {
    return (
        <div className="bg-white bg-opacity-80 flex flex-col sm:p-12 p-4 gap-6 items-center">
            <div className="title flex flex-col items-center gap-3">
                <div className="subTitle uppercase text-xs md:text-xl font-semibold text-gray-600">
                    LĨNH VỰC HOẠT ĐỘNG
                </div>
                <div className="mainTitle text-xl md:text-5xl text-title font-bold text-blue-600">
                    Các dịch vụ trọng tâm
                </div>
                <div className="devide bg-blue-600 h-1.5 w-36 rounded-full"></div>
                <div className="text-gray-600 md:text-xl text-sm ">
                    3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng – khách sạn, và dịch vụ lữ hành
                </div>
            </div>
            <div className="mainContent">
                <div className="Post flex sm:flex-row flex-col justify-center gap-6">
                    {data.services.map((card: any, index: number) => (
                        <Card key={index} imageUrl={card.imageUrl[0]} content={card.content} title={card.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeService;
