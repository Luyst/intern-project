import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import ApplyForm from './ApplyForm';
import JobTable from './JobTable';
import { getAllDocuments } from '~/firebase/service';

function RecruitDetail() {
    const [jobDetail, setJobDetail] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true); // Bắt đầu tải dữ liệu
                const jobData = await getAllDocuments('jobDetail');

                // Giả định jobDetailDemo là phần đầu tiên của dữ liệu
                setJobDetail(jobData[1]);
            } catch (error) {
                console.error('Error fetching job details:', error);
                setError('Failed to load job details. Please try again later.');
            } finally {
                setLoading(false); // Kết thúc tải
            }
        };
        fetchPost();
    }, []);

    return (
        <div className="RecruitDetail flex flex-col items-center sm:px-32 p-4 gap-6">
            {loading ? (
                <p>Loading job details...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="sm:px-32 py-6 rounded-[20px] px-4 bg-white bg-opacity-70">
                    <section className="JobTitle flex flex-col gap-5">
                        <header className="TitleHeader relative">
                            <div className="recruitCardHeader flex flex-row">
                                <div className="size-16 aspect-square">
                                    <img
                                        className="size-full aspect-square object-contain"
                                        src="http://damsenpark.vn/wp-content/uploads/2018/08/logo-dam-sen.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <div className="jobName text-blue-600 font-bold text-xl">
                                        {jobDetail.jobDetailDemo.jobName}
                                    </div>
                                    <div className="jobType text-blue-400 text-md">
                                        {jobDetail.jobDetailDemo.jobType}
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:gap-5">
                                        <div className="jobType text-gray-500 text-sm">
                                            {jobDetail.jobDetailDemo.status}
                                        </div>
                                        <div className="jobType text-gray-500 text-sm">
                                            {jobDetail.jobDetailDemo.timePosted}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 sm:top-0 right-0 sm:translate-y-1/2">
                                    <Button
                                        text={jobDetail.jobDetailDemo.status}
                                        size={2}
                                        secondary
                                        bgColor="bg-green-50"
                                        textColor="text-green-500"
                                    />
                                </div>
                            </div>
                        </header>
                        <div className="TitleThumnail aspect-video">
                            <img
                                className=" w-full object-contain"
                                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                    </section>
                    <section className="JobDetail sm:p-5 p-2">
                        <header className="title text-2xl font-bold mb-5 text-blue-500">Chi tiết tin tuyển dụng</header>
                        <JobTable jobDetail={jobDetail.jobDetail} />
                    </section>

                    <div className="JobApply">
                        <header className="title text-2xl font-bold mb-5 text-blue-500">Ứng tuyển Online</header>
                        <ApplyForm />
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecruitDetail;
