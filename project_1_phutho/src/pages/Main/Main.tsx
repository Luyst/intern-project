// Home.tsx (or Home.js)
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Background, Header, Footer } from '~/components/Layout';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col justify-between min-h-dvh w-dvw">
            <Header />
            <Background />
            <div className="py-28">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
