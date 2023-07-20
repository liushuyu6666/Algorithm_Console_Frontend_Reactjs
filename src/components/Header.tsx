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
                <div className="nav-item">
                    {shrinkStringByDots(username, 10)}
                </div>
                <button className="nav-item" onClick={() => {
                    dispatch(deleteUser());
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
        <header className="page-with-header">
            <div className="header">
                {username.length > 0 ? loggedIn() : anonymity()}
            </div>
            {children}
        </header>
    );
};

export default Header;
