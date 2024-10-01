import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        </LocalizationProvider>
    );
}

export default App;
