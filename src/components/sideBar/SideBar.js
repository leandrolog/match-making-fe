import './side-bar.css'
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
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
