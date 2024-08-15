function About({ data }: { data: any }) {
    const text: string[] = data.content.split(/ \/|: /);

    return (
        <div className="about-container flex flex-row  bg-white bg-opacity-70 p-12 rounded-xl">
            <div className="main pe-5 flex flex-col gap-2">
                <div className="title">
                    <div className="subTitle">Về chúng tôi</div>
                    <div className="mainTitle text-title text-4xl text-blue-600 font-bold">{data.title}</div>
                </div>
                <div className="devide h-1.5 w-28 rounded-full bg-blue-600 mb-2"> </div>
                <div className="content">
                    <ul className="list-disc list-inside border-l-2 border-blue-300 px-2">
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
                <div className="more-button"></div>
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
