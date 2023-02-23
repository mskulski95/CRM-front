import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import config from '../config';
import './AddClient.css'

const AddClient = (props) => {

    const [nameContent, setNameContent] = useState('')
    const [cityContent, setCityContent] = useState('')
    const [streetContent, setStreetContent] = useState('')
    const [zipCodeContent, setZipCodeContent] = useState('')
    const [nipContent, setNipContent] = useState('')
    const [telContent, setTelContent] = useState('')
    const [errMessage, setErrMessage] = useState('')
    

    const addClient = (e) => {
        e.preventDefault();



        if(!nameContent, !cityContent, !streetContent, !zipCodeContent, !nipContent, !telContent) {
            return;
        }

        axios
        .post(config.api.url + '/client/add', {
            name: nameContent,
            city: cityContent,
            street: streetContent,
            zipCode: zipCodeContent,
            nip: nipContent,
            tel: telContent
        })
        .then((req, res) => {
            setNameContent('')
            setCityContent('')
            setStreetContent('')
            setZipCodeContent('')
            setNipContent('')
            setTelContent('')
            navigate('/')
        })
        .catch((err)=>{
            console.error(err);
            setErrMessage('Coś poszło nie tak')
        })
    }

    const navigate = useNavigate();
    return (
        <form className='addClient' onSubmit={addClient}>
            {errMessage && <h2>{errMessage}</h2>}
                <input type="text" name='name' placeholder='Name' onChange={(e)=>setNameContent(e.target.value)} value={nameContent} /><br/>
                <input type="text" name='city' placeholder='City' onChange={(e)=>setCityContent(e.target.value)} value={cityContent} /><br/>
                <input type="text" name='street' placeholder='Street' onChange={(e)=>setStreetContent(e.target.value)} value={streetContent} /><br/>
                <input type="text" name='zipcode' placeholder='ZipCode' onChange={(e)=>setZipCodeContent(e.target.value)} value={zipCodeContent} /><br/>
                <input type="text" name='nip' placeholder='Nip' onChange={(e)=>setNipContent(e.target.value)} value={nipContent} /><br/>
                <input type="text" name='phone' placeholder='Tel' onChange={(e)=>setTelContent(e.target.value)} value={telContent} /><br/>
                <button className='btn'>Add</button>
        </form>
    )
}

export default AddClient;