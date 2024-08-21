import { useState } from 'react';

function SliderMain({ post }: { post: any }) {
    const [sildeNow, setSlideNow] = useState(0);
    return (
        <div className="SliderMain  flex flex-col w-full bg-white rounded-xl overflow-hidden">
            <div className="w-full h-2/3 overflow-hidden">
                <img src={post[sildeNow].imageUrl} alt="" className="aspect-video object-cover w-full" />
            </div>
            <div className="slideBody flex flex-col p-4 gap-2  relative">
                <div className="text-title text-3xl font-bold text-blue-500 w-4/5">{post[sildeNow].title}</div>
                <div className=" text-gray-600 text-md w-4/5">{post[sildeNow].content}</div>
                <div className="absolute top-3 right-3">
                    <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 21L9.6 14L18 7" fill="#3376B8" />
                        <path
                            d="M18 21L9.6 14L18 7L18 21Z"
                            stroke="#3376B8"
                            stroke-width="5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M42 21L50.4 14L42 7" fill="#3376B8" />
                        <path
                            d="M42 21L50.4 14L42 7L42 21Z"
                            stroke="#3376B8"
                            stroke-width="5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <div className="absolute bottom-3 right-3">
                    <svg width="106" height="17" viewBox="0 0 106 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.6105 8.30527C22.6105 12.8921 18.8921 16.6105 14.3053 16.6105C9.7184 16.6105 6 12.8921 6 8.30527C6 3.7184 9.7184 0 14.3053 0C18.8921 0 22.6105 3.7184 22.6105 8.30527Z"
                            fill="#0054A6"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.3053 16.2373C18.686 16.2373 22.2373 12.686 22.2373 8.30527C22.2373 3.92455 18.686 0.37327 14.3053 0.37327C9.92455 0.37327 6.37327 3.92455 6.37327 8.30527C6.37327 12.686 9.92455 16.2373 14.3053 16.2373ZM14.3053 16.6105C18.8921 16.6105 22.6105 12.8921 22.6105 8.30527C22.6105 3.7184 18.8921 0 14.3053 0C9.7184 0 6 3.7184 6 8.30527C6 12.8921 9.7184 16.6105 14.3053 16.6105Z"
                            fill="white"
                        />
                        <path
                            d="M10.3434 5.6062L1 10.5894L8.99382 8.09778L17.6105 11.1084L27.0578 6.12528L18.9601 8.72068L10.3434 5.6062Z"
                            fill="white"
                            stroke="#0054A6"
                            stroke-width="0.186635"
                            stroke-linejoin="round"
                        />
                        <g filter="url(#filter0_b_5792_975)">
                            <circle cx="42" cy="8" r="8" fill="white" fill-opacity="0.3" />
                            <circle cx="42" cy="8" r="7.5" stroke="#0054A6" />
                        </g>
                        <g filter="url(#filter1_b_5792_975)">
                            <circle cx="70" cy="8" r="8" fill="white" fill-opacity="0.3" />
                            <circle cx="70" cy="8" r="7.5" stroke="#0054A6" />
                        </g>
                        <g filter="url(#filter2_b_5792_975)">
                            <circle cx="98" cy="8" r="8" fill="white" fill-opacity="0.3" />
                            <circle cx="98" cy="8" r="7.5" stroke="#0054A6" />
                        </g>
                        <defs>
                            <filter
                                id="filter0_b_5792_975"
                                x="4"
                                y="-30"
                                width="76"
                                height="76"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5792_975" />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_backgroundBlur_5792_975"
                                    result="shape"
                                />
                            </filter>
                            <filter
                                id="filter1_b_5792_975"
                                x="32"
                                y="-30"
                                width="76"
                                height="76"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5792_975" />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_backgroundBlur_5792_975"
                                    result="shape"
                                />
                            </filter>
                            <filter
                                id="filter2_b_5792_975"
                                x="60"
                                y="-30"
                                width="76"
                                height="76"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5792_975" />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_backgroundBlur_5792_975"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default SliderMain;
