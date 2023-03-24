import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import config from '../config'
import AppClient from '../components/AppClient';
import { Navigate } from 'react-router';

const Home = (props) => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClientsList();
    }, [])

    const getClientsList = () => {
        axios
            .get(config.api.url + '/client')
            .then((req, res) => {
                setClients(req.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };


    return (
        <div className="home">
            {!props.user && <Navigate to='/login' />}
            <div className="clientList">
                {clients.map((client) => {
                    return<AppClient client={client} key={client._id}/>
                })}
            </div>
        </div>
    )
}

export default Home;