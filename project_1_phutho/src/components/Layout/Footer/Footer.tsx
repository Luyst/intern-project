import logo from './logo.png';
import ContactContainer from './ContactContainer';
import UnitContainer from './UnitContainer';

function Footer() {
    return (
        <footer className="footer-container bg-footer-background py-6 sm:px-20 px-4 flex flex-col sm:flex-row justify-between gap-10 text-white">
            <div className="footer-logo flex flex-col justify-between">
                <div className="logo-container flex flex-row items-center">
                    <img className="w-80" src={logo} alt="" />
                </div>
                <div className="copyright flex flex-row items-center gap-1 text-14px">
                    <div>Copyright</div>
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.99967 14.6668C4.31967 14.6668 1.33301 11.6802 1.33301 8.00016C1.33301 4.32016 4.31967 1.3335 7.99967 1.3335C11.6797 1.3335 14.6663 4.32016 14.6663 8.00016C14.6663 11.6802 11.6797 14.6668 7.99967 14.6668Z"
                                stroke="white"
                                stroke-width="1.14286"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9.91984 10.0002C9.44651 10.4135 8.83316 10.6668 8.15983 10.6668C6.6865 10.6668 5.49316 9.4735 5.49316 8.00016C5.49316 6.52683 6.6865 5.3335 8.15983 5.3335C8.83316 5.3335 9.44651 5.58683 9.91984 6.00016"
                                stroke="white"
                                stroke-width="1.14286"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <div>Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</div>
                </div>
            </div>
            <ContactContainer />
            <UnitContainer />
        </footer>
    );
}

export default Footer;
