import { ReactEventHandler } from 'react';

export type Dimension = {
    width: number;
    height: number;
};

export type CardType = {
    imageUrl: string;
    author?: string;
    title: string;
    content?: string;
    type?: string[];
    view?: string;
    date?: string;
};

export type ButtonType = {
    text: string;
    size: number;
    outline?: boolean;
    primary?: boolean;
    secondary?: boolean;
    onClick?: ReactEventHandler;
};

export type DocCardType = {
    id: string;
    title: string;
    imageUrl: string;
};
