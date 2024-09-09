import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '~/components/Card';
import Tag from '~/components/Tag';
import { db } from '~/firebase/firebaseConfig';
import { getAllDocuments } from '~/firebase/service';

function formatDate(dateStr: string) {
    // Tách chuỗi ngày ra thành ngày, tháng, năm
    let [day, month, year] = dateStr.split('/');

    // Tạo một mảng các tên tháng tiếng Việt
    let months = [
        'Tháng Một',
        'Tháng Hai',
        'Tháng Ba',
        'Tháng Tư',
        'Tháng Năm',
        'Tháng Sáu',
        'Tháng Bảy',
        'Tháng Tám',
        'Tháng Chín',
        'Tháng Mười',
        'Tháng Mười Một',
        'Tháng Mười Hai',
    ];

    // Định dạng lại chuỗi ngày
    return `${months[parseInt(month) - 1]} ${day}, ${year}`;
}
function PostDetail() {
    const [postData, setPosts] = useState<any[]>([]);
    const [postDetail, setPostDetail] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true); // Bắt đầu tải

                const postData = await getAllDocuments('posts');
                const postDetailData = await getAllDocuments('postDetail');
                setPosts(postData);
                setPostDetail(postDetailData[0]);
            } catch (error) {
                console.error('Error fetching carousel data:', error);
                setError('Failed to load posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, []);
    console.log(postDetail);
    return (
        <div className="RecruitDetail flex flex-col items-center  sm:px-32 p-4 gap-6 ">
            {loading ? (
                <p>Loading posts...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    <div className="sm:px-12 py-6 rounded-[20px] px-4 bg-white bg-opacity-70 flex flex-col gap-10">
                        <div className="title flex flex-col gap-1">
                            <div className="main-title text-4xl text-blue-500 font-bold">{postDetail.title}</div>
                            <div className="sub-title text-gray-500">
                                by {postDetail.author} on {formatDate(postDetail.dateRelease)}
                            </div>
                        </div>
                        <div className="thumnail">
                            <img src={postDetail.image && postDetail.image} alt="" />
                        </div>
                        <div className="content flex flex-col gap-3">
                            {postDetail.content.map((line: string, index: number) => {
                                // Kiểm tra xem dòng có chứa "img:" không
                                if (line.startsWith('img:')) {
                                    // Lấy đường dẫn ảnh từ chuỗi "img:"
                                    const imageUrl = line.replace('img:', '');
                                    return (
                                        <div className="w-full flex justify-center ">
                                            <img
                                                className="w-2/3 shadow-sm shadow-black"
                                                key={index}
                                                src={imageUrl}
                                                alt={`image-${index}`}
                                            />
                                        </div>
                                    );
                                }
                                // Hiển thị dòng văn bản bình thường
                                return <p key={index}>{line}</p>;
                            })}
                        </div>
                        <div className="relatedPost hidden sm:flex flex-col gap-6">
                            <div className="text-2xl text-blue-500 font-semibold">Bài viết liên quan</div>
                            <div className="flex  sm:flex-row gap-4">
                                {postData.slice(6, 10).map(({ content, ...rest }) => (
                                    <Link to={`./postDetailRelated`}>
                                        <Card {...rest} size={1} />
                                    </Link>
                                ))}{' '}
                            </div>
                        </div>
                    </div>
                    <div className="sm:hidden flex flex-col gap-4 bg-white bg-opacity-70  py-6 rounded-[20px] px-4">
                        <div className="text-2xl text-blue-500 font-semibold">Bài viết liên quan</div>
                        {postData.slice(6, 10).map(({ content, ...rest }) => (
                            <Link to={`./postDetailRelated`}>
                                <Tag {...rest} size={1} />
                            </Link>
                        ))}{' '}
                    </div>{' '}
                </>
            )}
        </div>
    );
}

export default PostDetail;
