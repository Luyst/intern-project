import PageTitle from '~/components/PageTitle';
import recruitData from './Recruit.json';
import Button from '~/components/Button';
import RecruitMain from './RecruitMain';
import RecruitSidebar from './RecruitSidebar';
function Recruit() {
    return (
        <div className="Recruit flex flex-col items-center px-32 gap-6">
            <PageTitle title="Tuyển dụng" />
            <div className="RecruitBody flex flex-row gap-4 w-full">
                <div className="RecruitSidebar w-1/3">
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
