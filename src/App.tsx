import './App.css';
import ListPublic from './pages/image/ListPublic';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <ListPublic />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
