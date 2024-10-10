import React from 'react';
import LoginForm from './LoginForm';

const Login: React.FC = () => {
    return (
        <div className="flex h-dvh">
            <div className="w-2/5 flex flex-col justify-center items-center bg-white p-8">
                <div className="mb-8">
                    <img src="src\assets\logo.svg" alt="Alta Media" className="w-40 h-auto" />
                </div>
                <LoginForm />
            </div>
            {/* Right Side - Image */}
            <div className="w-3/5 flex justify-center items-center bg-[#fff] px-28">
                <img src="src\pages\Login\Login.svg" alt="Hệ thống Quản lý xếp hàng" className="h-full w-full" />
            </div>
        </div>
    );
};

export default Login;
