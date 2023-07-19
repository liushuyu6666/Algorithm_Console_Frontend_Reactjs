import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { useState } from "react";

export interface HeaderProps {
    children: JSX.Element;
}

const Header = ({
    children
}: HeaderProps): JSX.Element => {
    const [username, setUsername] = useState('');
    const user = useSelector((state: RootState) => state.user);
    console.log(user);
    return (
        <header className="page-with-header">
            <div className="header">
                <nav className="nav">
                    <div className="nav-item">login</div>
                    <div className="nav-item">register</div>
                </nav>
            </div>
            {children}
        </header>
    );
};

export default Header;
