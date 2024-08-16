import Button from '~/components/Button';
import Card from '~/components/Card';

function HomePost({ data }: { data: any }) {
    return (
        <div className="homePostContainer flex flex-col p-12 gap-6 bg-secondary-background w-full items-center">
            <div className="title flex flex-col items-center gap-3">
                <div className="subTitle uppercase text-xl font-semibold text-white">CHIA SẺ THÔNG TIN</div>
                <div className="mainTitle text-5xl text-title font-bold text-blue-600">Bài viết mới</div>
                <div className="devide bg-blue-600 h-1.5 w-36 rounded-full"></div>
                <div className="text-gray-50 text-xl ">
                    Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch
                </div>
            </div>
            <div className="mainContent">
                <div className="Post flex flex-row justify-center gap-6">
                    {data.post.map((card: any, index: number) => (
                        <Card
                            key={index}
                            imageUrl={card.imageUrl}
                            author={card.author}
                            title={card.title}
                            content={card.content}
                            view={card.view}
                            date={card.date}
                        />
                    ))}
                </div>
            </div>
            <div className="button">
                <Button text="Xem thêm bài viết" primary size={2}></Button>
            </div>
        </div>
    );
}

export default HomePost;
