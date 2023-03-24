import './Client.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import config from "../config";
import Action from '../components/Action'

const Client = () => {

    const { id } = useParams();

    const [singleClient, setSingleClient] = useState({
        actions:[],
        name:'',
        city: '',
        street: '',
        zipCode: '',
        nip: '',
        tel:''
    });

    useEffect(() => {
        getClient();
    }, [])

    const getClient = () => {
        axios
            .get(config.api.url + '/client/' + id)
            .then((req, res) => {
                setSingleClient(req.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const deleteClient = () => {
        if (window.confirm('Usunąć klienta z bazy danych??')) {
            axios
                .delete(config.api.url + '/client/delete/' + id)
                .then((req, res) => {
                    if (req.data.deleted) {
                        navigate('/');
                    } else {
                        return;
                    }
                })
                .catch((err) => {
                    console.error(err);
                })
        }
    }

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="clientGet">
                <div className="clientDataGet">
                    <div className="name">Imię: {singleClient.name}</div>
                    <div className="city">Miasto: {singleClient.city}</div>
                    <div className="street">Ulica: {singleClient.street}</div>
                    <div className="zipcode">Kod pocztowy: {singleClient.zipCode}</div>
                    <div className="nip">NIP: {singleClient.nip}</div>
                    <div className="tel">Numer Tel.: {singleClient.tel}</div>
                    <button className='btn btn-edit' onClick={() => { navigate('/client/edit/' + id) }}>Edit</button>
                    <button className='btn btn-delete' onClick={() => { deleteClient() }}>Delete</button>
                </div>
                
            </div>
            <div className="clientAction">
                    <Action getClient={getClient} actions={singleClient.actions}/>
                </div>
        </div>
    )
}

export default Client;