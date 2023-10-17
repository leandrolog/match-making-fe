import './side-bar.css'
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <p className="sidebar-title">
                    <Link to="/">
                        <h2>Sportfy</h2>
                    </Link>
                </p>
                <li>
                    <Link to="/match">Match</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    );
};
export default SideBar;
