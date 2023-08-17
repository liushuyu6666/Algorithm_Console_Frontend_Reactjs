import './App.css';
import ListAllQuestions from './pages/questions/ListAllQuestions';
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
        element: <ListAllQuestions />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
