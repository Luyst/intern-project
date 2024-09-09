import PageTitle from '~/components/PageTitle';
import RecruitMain from './RecruitMain';
import RecruitSidebar from './RecruitSidebar';
import { useEffect, useState } from 'react';
import { getAllDocuments } from '~/firebase/service';

function Recruit() {
    const [recruitData, setRecruits] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true); // Bắt đầu tải
                const data = await getAllDocuments('recruit');
                setRecruits(data);
            } catch (error) {
                console.error('Error fetching  data:', error);
                setError('Failed to load posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, []);
    return (
        <div className="Recruit flex flex-col items-center sm:px-32 gap-6">
            <PageTitle title="Tuyển dụng" />
            <div className="RecruitBody flex flex-row justify-center gap-4 w-full">
                <div className="RecruitSidebar w-1/3 sm:block hidden">
                    <RecruitSidebar />
                </div>
                <div className="w-2/3">
                    <RecruitMain recruitData={recruitData} />
                </div>
            </div>
        </div>
    );
}

export default Recruit;
