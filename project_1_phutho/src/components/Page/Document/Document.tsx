import PageTitle from '~/components/PageTitle';
import DocHeader from './DocHeader';
import DocTable from './DocTable';
import tableDate from './tableData.json';

function Document() {
    return (
        <div className="DocumentContainer px-32 flex flex-col items-center gap-6">
            <PageTitle title="Tài liệu" />
            <DocHeader />
            <DocTable docs={tableDate} />
        </div>
    );
}

export default Document;
