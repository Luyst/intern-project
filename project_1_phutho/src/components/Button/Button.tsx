import React from 'react';
import { ButtonType } from '~/typeComponent';

const Button: React.FC<ButtonType> = ({
    text,
    size,
    color = 'blue-500',
    outline = false,
    primary = false,
    secondary = false,
    onClick,
}) => {
    let buttonSize: string = '';

    switch (size) {
        case 1:
            buttonSize = 'text-[10px] px-2 py-1';
            break;
        case 2:
            buttonSize = 'text-lg';
            break;
        case 3:
            buttonSize = 'text-md px-4 py-1.5';
            break;
        default:
            break;
    }

    const classButton: string = [
        'btn',
        'text-nowrap',
        buttonSize,
        outline ? `border border-${color} rounded-lg px-6 py-2 ` : '',
        primary ? `bg-${color} text-white rounded-lg px-6 py-2 ` : '',
        secondary ? `btn-secondary bg-blue-50 text-${color} rounded-full` : '',
        'font-semibold',
    ].join(' ');

    return (
        <button className={classButton} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
