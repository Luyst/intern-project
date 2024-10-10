import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '~/layouts/Main';
import { Dashboard, Device, Login, Report, Service, Setting, Stat } from '~/pages';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route cho Main Layout */}
                <Route path="/" element={<Main />}>
                    <Route index element={<Dashboard />} />
                    <Route path="device" element={<Device />} />
                    <Route path="service" element={<Service />} />
                    <Route path="stat" element={<Stat />} />
                    <Route path="report" element={<Report />} />
                    <Route path="setting" element={<Setting />} />
                </Route>
                {/* Route cho trang Login */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
