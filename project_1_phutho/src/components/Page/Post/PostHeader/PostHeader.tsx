import Seacrch from '~/components/Search';

function PostHeader() {
    return (
        <div className="postDisplay flex flex-row w-full">
            <div className="left-nav w-1/3 h-full bg-white bg-opacity-70"></div>
            <div className="postBody flex flex-col">
                <div className="header">
                    <Seacrch />
                </div>
                <div className="body grid grid-cols-4 gap-4"></div>
            </div>
        </div>
    );
}

export default PostHeader;
