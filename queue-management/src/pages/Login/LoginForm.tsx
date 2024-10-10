import React, { useState } from 'react';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

type Props = {};

export default function LoginForm({}: Props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validatePassword = () => {
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
        if (password.length < 8) {
            return 'Mật khẩu phải có ít nhất 8 ký tự.';
        } else if (!specialCharRegex.test(password)) {
            return 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt.';
        }
        return '';
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errorMsg = validatePassword();
        if (errorMsg) {
            setError(errorMsg);
        } else {
            console.log('Tên đăng nhập:', username);
            console.log('Mật khẩu:', password);
            // Xử lý logic đăng nhập ở đây
        }
    };

    return (
        <div className="w-full max-w-sm">
            <form className="bg-white rounded-lg p-6 space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-500 mb-2" htmlFor="username">
                        Tên đăng nhập *
                    </label>
                    <input
                        className="input-field w-full flex items-center px-2.5 py-1.5 rounded-lg border-2 border-gray-400 focus-within:outline-none focus-within:border-orange-400"
                        placeholder="Tên đăng nhập"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-500 mb-2" htmlFor="password">
                        Mật khẩu *
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="input-field w-full flex items-center px-2.5 py-1.5 rounded-lg border-2 border-gray-400 focus-within:outline-none focus-within:border-orange-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button" className="absolute inset-y-0 right-2 flex items-center">
                            <VisibilityOffOutlinedIcon />
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>

                <div className="flex justify-between items-center">
                    <a href="#" className="text-orange-500 text-sm">
                        Quên mật khẩu?
                    </a>
                </div>
                <Link to="/" className="text-center">
                    <Button label="Đăng nhập" />
                </Link>
            </form>
        </div>
    );
}
