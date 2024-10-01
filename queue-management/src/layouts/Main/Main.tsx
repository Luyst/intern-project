// Home.tsx (or Home.js)
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/Header';
import Menubar from '~/components/Menubar';

const Home: React.FC = () => {
    return (
        <div className="flex  h-dvh w-dvw bg-gray-200">
            <Menubar />
            <div className="relative flex flex-col flex-grow ">
                <div className="absolute top-0 w-full z-10">
                    <Header />
                </div>
                <div className="p-5 pt-20 h-dvh">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;
