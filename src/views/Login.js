import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";


const Login = (props) => {

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const [loginMessage, setLoginMessage] = useState('');

    const handleChangeInput = (e) => {
        const target = e.target;
        const name = target.name;

        setLoginData({
            ...loginData,
            [name]: target.value
        });
    }

    const loginSubmit = (e) => {
        e.preventDefault()

        axios
            .post(config.api.url + '/user/login', {
                name: loginData.username,
                password: loginData.password
            })
            .then((req, res) => {
                if (Array.isArray(req.data.username)) {
                    setLoginMessage('Brak nazwy użytkownika')
                }
                if (Array.isArray(req.data.password)) {
                    setLoginMessage(res.data.password)
                }
                else if (req.data.error) {
                    setLoginMessage('Błędne dane')
                } else {
                    setLoginMessage('')
                    props.setUser(req.data)
                    localStorage.setItem('user', JSON.stringify(req.data))
                    navigate('/')
                }

            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="container">
        <div className="login">
            <form onSubmit={loginSubmit}>
                {loginMessage && <h2>{loginMessage}</h2>}
                <input type="text" name='username' placeholder='User name' value={loginData.username} onChange={handleChangeInput} /><br />
                <input type="text" name='password' placeholder='Password' value={loginData.password} onChange={handleChangeInput} /><br />
                <button className="btn">Login</button>
            </form>
        </div>
        <div className="signup">
            <Link to='/signup'>SignUp</Link>
        </div>
        </div>
    )
}

export default Login;