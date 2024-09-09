import { useEffect, useState } from 'react';
import PageTitle from '~/components/PageTitle';
import PostDisplay from './PostDisplay';
import PostSidebar from './PostSidebar';
import PostSlider from './PostSlider';

import { getAllDocuments } from '~/firebase/service';

function Post() {
    const [postData, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true); // Bắt đầu tải
                const data = await getAllDocuments('posts');
                setPosts(data);
            } catch (error) {
                console.error('Error fetching carousel data:', error);
                setError('Failed to load posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, []);

    return (
        <div className="flex flex-col items-center gap-6 sm:px-32 px-4">
            <PageTitle title="Bài viết" />
            {loading ? (
                <p>Loading posts...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    <PostSlider post={postData} />
                    <div className="flex flex-row gap-6">
                        <PostSidebar />
                        <div>
                            <PostDisplay post={postData} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Post;
