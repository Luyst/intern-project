import { useEffect, useState } from 'react';
import PageTitle from '~/components/PageTitle';
import DocHeader from './DocHeader';
import DocTable from './DocTable';
import { getAllDocuments } from '~/firebase/service';

function Document() {
    const [docTable, setDoc] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                setLoading(true); // Bắt đầu tải
                const data = await getAllDocuments('document');
                setDoc(data);
            } catch (error) {
                console.error('Error fetching documents:', error);
                setError('Failed to load documents. Please try again later.');
            } finally {
                setLoading(false); // Kết thúc tải
            }
        };
        fetchDocuments();
    }, []);

    return (
        <div className="DocumentContainer sm:px-32 flex flex-col items-center gap-6">
            <PageTitle title="Tài liệu" />
            {loading ? (
                <p>Loading documents...</p> // Thông báo khi đang tải dữ liệu
            ) : error ? (
                <p className="text-red-500">{error}</p> // Thông báo khi có lỗi
            ) : (
                <>
                    <DocHeader />
                    <DocTable docs={docTable} />
                </>
            )}
        </div>
    );
}

export default Document;
