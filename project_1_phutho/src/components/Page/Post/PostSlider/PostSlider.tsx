import { CardType } from '~/typeComponent';
import SliderMain from './SliderMain';
import SliderSiderbar from './SliderSiderbar';

function PostSlider({ post }: { post: CardType[] }) {
    return (
        <div className="postDisplay flex flex-col sm:flex-row gap-4 sm:h-66dvh     w-full">
            <SliderMain post={post.slice(0, 4)} />
            <SliderSiderbar post={post} />
        </div>
    );
}

export default PostSlider;
