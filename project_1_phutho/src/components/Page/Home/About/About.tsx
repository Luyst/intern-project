import Button from '~/components/Button';

function About({ data }: { data: any }) {
    const text: string[] = data.content.split(/ \/|: /);

    return (
        <div className="about-container flex flex-row  bg-white bg-opacity-70 p-12">
            <div className="main pe-5 flex flex-col gap-5">
                <div className="title">
                    <div className="subTitle">Về chúng tôi</div>
                    <div className="mainTitle text-title text-4xl text-blue-600 font-bold">{data.title}</div>
                    <div className="devide h-1.5 w-28 rounded-full mt-2 bg-blue-600"> </div>
                </div>
                <div className="content">
                    <ul className="list-disc list-inside border-l-2 text-xl border-blue-300 px-2">
                        {text.map((t, idx: number) =>
                            idx === 0 ? (
                                <div key={idx + 'about'} className="contentTitle pb-3">
                                    {t}:
                                </div>
                            ) : (
                                <li className="px-4">{t}</li>
                            ),
                        )}
                    </ul>
                </div>
                <div className="more-button">
                    <Button text="Xem chi tiết" size={2} primary />
                </div>
            </div>
            <div className="image">
                {data.image.map((imgUrl: string) => (
                    <img src={imgUrl} alt="about img" />
                ))}
            </div>
        </div>
    );
}

export default About;
