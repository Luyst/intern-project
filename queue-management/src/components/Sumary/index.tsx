import CalendarFilter from '~/components/CalendarFilter';
import Tag from './Tag';

const Sumary: React.FC = () => {
    return (
        <div className="summary-container flex flex-col gap-3">
            <div className="sumary-title text-orange-500 text-2xl font-bold">Tổng quan</div>
            <Tag percentage={50} value={4221} type="devide" active={3799} inactive={422} />
            <Tag percentage={50} value={4221} type="service" active={3799} inactive={422} />
            <Tag percentage={50} value={4221} type="status" active={3799} inactive={422} />

            <div>
                <CalendarFilter />
            </div>
        </div>
    );
};

export default Sumary;
