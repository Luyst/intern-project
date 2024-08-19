import React from 'react';

function PageTitle({ title }: { title: string }) {
    return (
        <div>
            <div className="title-container relative flex justify-center items-center  w-80 uppercase ">
                <span className="absolute text-title text-blue-500 text-4xl font-bold top-0  flex justify-center items-center w-full h-full">
                    {title}
                </span>
                <div className="h-full ">
                    <svg width="386" height="80" viewBox="0 0 386 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_bdi_272_68691)">
                            <path
                                d="M380.038 44.0196C382.357 46.9349 382.357 51.0651 380.038 53.9804L347.423 94.9804C345.905 96.8883 343.6 98 341.162 98L44.1071 98C41.6415 98 39.3137 96.8631 37.7978 94.9186L5.83453 53.9186C3.58023 51.027 3.58023 46.973 5.83453 44.0813L37.7978 3.08133C39.3137 1.13685 41.6415 -1.54409e-05 44.1071 -1.53492e-05L341.162 -4.30359e-06C343.6 -4.21294e-06 345.905 1.1117 347.423 3.01963L380.038 44.0196Z"
                                fill="white"
                                fill-opacity="0.7"
                                shape-rendering="crispEdges"
                            />
                            <path
                                d="M379.256 44.6422C381.285 47.1931 381.285 50.807 379.256 53.3578L346.64 94.3578C345.312 96.0273 343.295 97 341.162 97L44.1071 97C41.9497 97 39.9129 96.0052 38.5865 94.3038L6.6232 53.3038C4.65066 50.7736 4.65066 47.2264 6.6232 44.6962L38.5865 3.69616C39.9129 1.99474 41.9497 0.999985 44.1071 0.999985L341.162 0.999996C343.295 0.999996 345.312 1.97274 346.64 3.64217L379.256 44.6422Z"
                                stroke="white"
                                stroke-width="2"
                                shape-rendering="crispEdges"
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default PageTitle;
