import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { useNavigate } from 'react-router-dom';
import shrinkStringByDots from '../utils/shrinkStringByDots';
import { deleteUser } from '../redux/user/userSlice';

export interface HeaderProps {
    children: JSX.Element;
}

const Header = ({ children }: HeaderProps): JSX.Element => {
    const { username } = useSelector((state: RootState) => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loggedIn = () => {
        return (
            <nav className="nav">
                <button className="nav-item" onClick={() => {
                    navigate('/private');
                }}>
                    {shrinkStringByDots(username, 10)}
                </button>
                <button className="nav-item" onClick={() => {
                    dispatch(deleteUser());
                    navigate('/');
                }}>log out</button>
            </nav>
        );
    };

    const anonymity = () => {
        return (
            <nav className="nav">
                <button className="nav-item" onClick={() => navigate('/login')}>
                    login
                </button>
                <button
                    className="nav-item"
                    onClick={() => navigate('register')}
                >
                    register
                </button>
            </nav>
        );
    };

    return (
        <header className="page">
            <div className="header">
                {username.length > 0 ? loggedIn() : anonymity()}
            </div>
            <div className="canvas">
                {children}
            </div>
        </header>
    );
};

export default Header;
