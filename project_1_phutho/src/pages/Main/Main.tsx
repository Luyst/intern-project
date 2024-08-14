// Home.tsx (or Home.js)
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Background, Header, Footer } from '~/components/Layout';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col justify-between min-h-dvh">
            <Header />
            <Background />
            <div className="pt-28">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
