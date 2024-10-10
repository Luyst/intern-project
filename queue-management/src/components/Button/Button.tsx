import React from 'react';

type ButtonProps = {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
    disabled?: boolean;
};

export default function Button({
    label,
    onClick,
    type = 'button',
    variant = 'primary',
    disabled = false,
}: ButtonProps) {
    const baseStyle = `px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none`;

    const variantStyles = {
        primary: 'bg-orange-400 text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 font-bold',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-300',
        'outline-primary':
            'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-2 focus:ring-orange-300',
        'outline-secondary':
            'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white focus:ring-2 focus:ring-gray-300',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            {label}
        </button>
    );
}
