import Tag from '~/components/Tag';
import { CardType } from '~/typeComponent';

function SliderSidebar({ post }: { post: CardType[] }) {
    return (
        <div className="sliderSidebar flex flex-col sm:h-full h-96  rounded-lg overflow-hidden">
            <div className="title text-2xl font-bold text-blue-500  bg-white bg-opacity-70 px-5 py-4 sticky top-0 ">
                Bài mới nhất
            </div>

            <div className="tagContainer  w-full bg-white bg-opacity-70 px-5 py-2 overflow-scroll">
                {post.map((p) => (
                    <div className="mb-4">
                        <Tag {...p} size={1} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SliderSidebar;
