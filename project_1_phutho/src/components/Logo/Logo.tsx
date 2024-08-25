import { Dimension } from '~/typeComponent';
type LogoProps = {
    size: number;
};

function Logo({ size }: LogoProps) {
    let logoSize: Dimension = { width: 142, height: 89 };

    switch (size) {
        case 1:
            logoSize = { width: 100, height: 60 };
            break;
        case 2:
            logoSize = { width: 120, height: 75 };
            break;
        case 3:
            logoSize = { width: 440, height: 280 };
            break;
        default:
            logoSize = { width: 142, height: 89 };
    }

    return (
        <svg
            width={logoSize.width}
            height={logoSize.height}
            viewBox="0 0 142 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M115.588 44.5C115.588 69.0767 95.6646 89 71.0879 89C46.5112 89 26.5879 69.0767 26.5879 44.5C26.5879 19.9233 46.5112 0 71.0879 0C95.6646 0 115.588 19.9233 115.588 44.5Z"
                fill="#0054A6"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M71.0879 87C94.56 87 113.588 67.9721 113.588 44.5C113.588 21.0279 94.56 2 71.0879 2C47.6158 2 28.5879 21.0279 28.5879 44.5C28.5879 67.9721 47.6158 87 71.0879 87ZM71.0879 89C95.6646 89 115.588 69.0767 115.588 44.5C115.588 19.9233 95.6646 0 71.0879 0C46.5112 0 26.5879 19.9233 26.5879 44.5C26.5879 69.0767 46.5112 89 71.0879 89Z"
                fill="white"
            />
            <path
                d="M51.0625 30.0375L1 56.7375L43.8312 43.3875L90 59.5187L140.619 32.8187L97.2312 46.725L51.0625 30.0375Z"
                fill="white"
                stroke="#0054A6"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Logo;
