import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />}>
                        {route.children?.map((child, childIndex) => (
                            <Route key={childIndex} path={child.path} element={<child.component />} />
                        ))}
                    </Route>
                ))}
            </Routes>
        </Router>
    );
}

export default App;
