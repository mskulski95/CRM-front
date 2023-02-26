import './EditClient.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import config from "../config";

const EditClient = () => {

    const {id} = useParams();

    const [updateClient, setUpdateClient] = useState('');
    const [cityUpdateClient, setCityUpdateClient] = useState('')
    const [streeUpdateClient, setStreeUpdateClient] = useState('')
    const [zipCodeUpdateClient, setZipCodeUpdateClient] = useState('')
    const [nipUpdateClient, setNipUpdateClient] = useState('')
    const [telUpdateClient, setTelUpdateClient] = useState('')

    useEffect(() => {
        getUpdateClient();
    }, []);

    const getUpdateClient = () => {
        axios
        .put(config.api.url + '/client/edit/' + id)
        .then((req, res) => {
            setUpdateClient(req.data.name);
            setCityUpdateClient(req.data.city);
            setStreeUpdateClient(req.data.street);
            setZipCodeUpdateClient(req.data.zipCode);
            setNipUpdateClient(req.data.nip);
            setTelUpdateClient(req.data.tel);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    const navigate = useNavigate()
    return (
        <form className='editClient' onSubmit={getUpdateClient}>
                <input type="text" name='name' placeholder='Name' onChange={(e)=>setUpdateClient(e.target.value)} value={updateClient} /><br/>
                <input type="text" name='city' placeholder='City' onChange={(e)=>setCityUpdateClient(e.target.value)} value={cityUpdateClient} /><br/>
                <input type="text" name='street' placeholder='Street' onChange={(e)=>setStreeUpdateClient(e.target.value)} value={streeUpdateClient} /><br/>
                <input type="text" name='zipcode' placeholder='ZipCode' onChange={(e)=>setZipCodeUpdateClient(e.target.value)} value={zipCodeUpdateClient} /><br/>
                <input type="text" name='nip' placeholder='Nip' onChange={(e)=>setNipUpdateClient(e.target.value)} value={nipUpdateClient} /><br/>
                <input type="text" name='phone' placeholder='Tel' onChange={(e)=>setTelUpdateClient(e.target.value)} value={telUpdateClient} /><br/>
                <button className='btn' onClick={() => { navigate('/') }}>Save</button>
        </form>
    )
}

export default EditClient;