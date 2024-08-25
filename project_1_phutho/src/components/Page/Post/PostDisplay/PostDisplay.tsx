import Card from '~/components/Card';
import DateFilter from '~/components/DateFilter';
import Search from '~/components/Search';
import { CardType } from '~/typeComponent';

function PostDisplay({ post }: { post: CardType[] }) {
    return (
        <div className="postDisplay flex flex-col w-full gap-5">
            <div className="header bg-white bg-opacity-70 flex flex-row justify-between items-center p-3 rounded-xl">
                <div>
                    <Search />
                </div>

                <DateFilter />
            </div>
            <div className="body grid grid-cols-4 gap-4">
                {post.map(({ content, ...rest }) => (
                    <Card {...rest} size={1} />
                ))}
            </div>
        </div>
    );
}

export default PostDisplay;
