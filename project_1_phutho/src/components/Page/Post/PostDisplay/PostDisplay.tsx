import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '~/components/Card';
import DateFilter from '~/components/DateFilter';
import Pagination from '~/components/Pagination';
import Search from '~/components/Search';
import { CardType } from '~/typeComponent';

function PostDisplay({ post }: { post: CardType[] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12); // Số lượng bài viết mặc định là 12

    useEffect(() => {
        // Lắng nghe sự thay đổi kích thước màn hình
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                setItemsPerPage(4); // Nếu kích thước màn hình <= 500px, hiển thị 4 bài
            } else {
                setItemsPerPage(12); // Ngược lại hiển thị 12 bài
            }
        };

        // Gọi hàm khi component mount lần đầu
        handleResize();

        // Thêm event listener khi thay đổi kích thước màn hình
        window.addEventListener('resize', handleResize);

        // Cleanup event listener khi component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="postDisplay flex flex-col w-full gap-5 relative">
            <header className="header bg-white bg-opacity-70 flex flex-row justify-between items-center p-3 rounded-xl">
                <div>
                    <Search />
                </div>
                <div className="sm:block hidden">
                    <DateFilter />
                </div>
            </header>
            <main className="body flex flex-col sm:grid sm:grid-cols-4 gap-4">
                {post
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map(({ content, ...rest }) => (
                        <Link to={`./postDetail`}>
                            <Card {...rest} size={1} />
                        </Link>
                    ))}
            </main>
            <footer className="footer absolute -bottom-5 translate-y-full  left-1/2 -translate-x-1/2 bg-opacity-70 bg-white w-fit  rounded-full p-1">
                <Pagination
                    totalPages={Math.ceil(post.length / itemsPerPage)}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />{' '}
            </footer>
        </div>
    );
}

export default PostDisplay;
