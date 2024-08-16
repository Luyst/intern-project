import React from 'react';
import { ButtonType, Dimension } from '~/typeComponent';

const Button: React.FC<ButtonType> = ({ text, size, outline = false, primary = false, secondary = false, onClick }) => {
    let buttonSize: string = '';

    switch (size) {
        case 1:
            buttonSize = 'text-xs';
            break;
        case 2:
            buttonSize = 'text-lg';
            break;
        case 3:
            buttonSize = 'text-xl';
            break;
        default:
            break;
    }

    const classButton: string = [
        'btn',
        buttonSize,
        outline ? 'border border-blue-500 rounded-lg px-6 py-2 ' : '',
        primary ? 'bg-blue-500 text-white rounded-lg px-6 py-2 ' : '',
        secondary ? 'btn-secondary bg-blue-50 text-blue-500 rounded-full px-4 py-1.5 ' : '',
        'font-semibold',
    ].join(' ');

    return (
        <button className={classButton} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
