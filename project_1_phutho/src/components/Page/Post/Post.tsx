import PageTitle from '~/components/PageTitle';
import postData from './Posts.json';
import PostDisplay from './PostDisplay';
import PostSidebar from './PostSidebar';
import PostSlider from './PostSlider';

function Post() {
    return (
        <div className="flex flex-col items-center gap-6 px-32">
            <PageTitle title="Bài viết" />
            <PostSlider post={postData} />
            <div className="flex flex-row gap-6">
                <PostSidebar />
                <PostDisplay post={postData} />
            </div>
        </div>
    );
}

export default Post;
