import './AppNav.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import config from '../config';

const AppNav = (props) => {

    const logout = (e) => {
        e.preventDefault();

        axios
            .post(config.api.url + '/user/login')
            .then((req, res) => {
                console.log(req.data);
                if (req.data.message) {
                    props.setUser(null);
                    localStorage.setItem('user', null);
                }

            })
            .catch((err) => {
                props.setUser(null);
                localStorage.setItem('user', null);
                console.error(err);
            });
    }

    return (
        <nav className="mainNav">
            <ul>
                {props.user && <li>
                    <Link to='/'>Home</Link>
                </li>}
                {props.user && <li>
                    <Link to='/client/add'>AddClient</Link>
                </li>}
                {!props.user && <li>
                    <Link to='/login'>Login</Link>
                </li>}
                {props.user && <li>
                    <Link to='/' onClick={logout}>Logout</Link>
                </li>}
            </ul>
        </nav>
    )
}

export default AppNav;