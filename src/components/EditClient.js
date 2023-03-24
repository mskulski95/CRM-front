import './EditClient.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import config from "../config";

const EditClient = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [nameUpdateClient, setNameUpdateClient] = useState('')
    const [cityUpdateClient, setCityUpdateClient] = useState('')
    const [streetUpdateClient, setStreetUpdateClient] = useState('')
    const [zipCodeUpdateClient, setZipCodeUpdateClient] = useState('')
    const [nipUpdateClient, setNipUpdateClient] = useState('')
    const [telUpdateClient, setTelUpdateClient] = useState('')

    const updatedClient = () => {
        axios
        .get(config.api.url + '/client/' + id)
        .then((req, res) => {
            setNameUpdateClient(req.data.name);
            setCityUpdateClient(req.data.city);
            setStreetUpdateClient(req.data.street);
            setZipCodeUpdateClient(req.data.zipCode);
            setNipUpdateClient(req.data.nip);
            setTelUpdateClient(req.data.tel);  
        })
        .catch((err) => {
            console.error(err);
        })
    }

    useEffect(() => {
        updatedClient()
    }, []);

    const getUpdateClient = (e) => {
        e.preventDefault();

        axios
        .put(config.api.url + '/client/edit/' + id, {
            name: nameUpdateClient,
            city: cityUpdateClient,
            street: streetUpdateClient,
            zipCode: zipCodeUpdateClient,
            nip: nipUpdateClient,
            tel: telUpdateClient
        })
        .then((req, res) => {
            navigate('/client/' +id)
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return (
        <form className='editClient' onSubmit={getUpdateClient}>
                <input type="text" name='name' placeholder='Name' onChange={(e)=>setNameUpdateClient(e.target.value)} value={nameUpdateClient} /><br/>
                <input type="text" name='city' placeholder='City' onChange={(e)=>setCityUpdateClient(e.target.value)} value={cityUpdateClient} /><br/>
                <input type="text" name='street' placeholder='Street' onChange={(e)=>setStreetUpdateClient(e.target.value)} value={streetUpdateClient} /><br/>
                <input type="text" name='zipcode' placeholder='ZipCode' onChange={(e)=>setZipCodeUpdateClient(e.target.value)} value={zipCodeUpdateClient} /><br/>
                <input type="text" name='nip' placeholder='Nip' onChange={(e)=>setNipUpdateClient(e.target.value)} value={nipUpdateClient} /><br/>
                <input type="text" name='phone' placeholder='Tel' onChange={(e)=>setTelUpdateClient(e.target.value)} value={telUpdateClient} /><br/>
                <button className='btn'>Save</button>
        </form>
    )
}

export default EditClient;