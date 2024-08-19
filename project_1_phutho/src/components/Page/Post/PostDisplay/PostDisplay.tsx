import Card from '~/components/Card';
import { CardType } from '~/typeComponent';

function PostDisplay({ post }: { post: CardType[] }) {
    return (
        <div className="postDisplay flex flex-row w-full">
            <div className="left-nav w-1/3 h-full bg-white bg-opacity-70"></div>
            <div className="postBody">
                <div className="header"></div>
                <div className="body grid grid-cols-4 gap-4">
                    {post.map((p) => (
                        <Card {...p} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostDisplay;
