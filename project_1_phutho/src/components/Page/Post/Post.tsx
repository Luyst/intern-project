import PageTitle from '~/components/PageTitle';
import postData from './Posts.json';
import PostDisplay from './PostDisplay';

function Post() {
    return (
        <div className="flex flex-col items-center gap-12 px-32">
            <PageTitle title="Bài viết" />
            <PostDisplay post={postData} />
        </div>
    );
}

export default Post;
