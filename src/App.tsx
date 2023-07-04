import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './pages/user/Register';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/register',
        element: <Register />,
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
