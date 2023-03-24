import './Signup.css';
import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useNavigate } from 'react-router';

const Signup = () => {

    const navigate = useNavigate();

    const [nameContent, setNameContent] = useState('');
    const [emailContent, setEmailContent] = useState('');
    const [passwordContent, setPasswordContent] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const addUser = (e) => {
        e.preventDefault();

        if (!nameContent){
            return setErrMessage('No required data!')
        } 
        if (!emailContent){
            return setErrMessage('No required data!')
        } 
        if (!passwordContent){
            return setErrMessage('No required data!')
        } 

        axios
            .post(config.api.url + '/user/signup', {
                name: nameContent,
                email: emailContent,
                password: passwordContent
            })
            .then((req, res) => {
                    setNameContent('')
                    setEmailContent('')
                    setPasswordContent('')
                    navigate('/login')
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <div className="signup">
            <form onSubmit={addUser}>
                {errMessage && <h2>{errMessage}</h2>}
                <input type="text" name='name' placeholder='User name' onChange={(e) => { setNameContent(e.target.value) }} value={nameContent} /><br />
                <input type="text" name='email' placeholder='E-mail' onChange={(e) => { setEmailContent(e.target.value) }} value={emailContent} /><br />
                <input type="text" name='password' placeholder='Password' onChange={(e) => { setPasswordContent(e.target.value) }} value={passwordContent} /><br />
                <button className="btn">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;