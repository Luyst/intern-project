import React from 'react';
import { ButtonType, Dimension } from '~/typeComponent';

const Button: React.FC<ButtonType> = ({ text, size, outline = false, primary = false, secondary = false, onClick }) => {
    // Define button size based on the `size` prop
    let buttonSize: string = '';

    switch (size) {
        case 1:
            buttonSize = 'text-lg';
            break;
        case 2:
            buttonSize = 'text-xl';
            break;
        case 3:
            buttonSize = 'text-2xl';
            break;
        default:
            break;
    }

    // Define classes based on the `outline`, `primary`, and `secondary` props
    const classButton: string = [
        'btn',
        buttonSize,
        outline ? 'border border-blue-500' : '',
        primary ? 'bg-blue-500 text-white' : '',
        secondary ? 'btn-secondary' : '',
        'px-6 py-2 rounded-lg',
    ].join(' ');

    return (
        <button className={classButton} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
