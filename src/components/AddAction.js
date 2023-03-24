import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import config from '../config';
import './AddAction.css';

const AddAction = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    
    const [typeContent, setTypeContent] = useState('')
    const [dateContent, setDateContent] = useState('')
    const [descriptionContent, setDescriptionContent] = useState('')

    const addAction = (e) => {
        e.preventDefault();

        if(!typeContent, !dateContent, !descriptionContent){
            return;
        }

        axios
        .post(config.api.url + '/action/add', {
            type: typeContent,
            date: dateContent,
            description: descriptionContent,
            customerId: id
        })
        .then((req, res) => {
            setTypeContent('')
            setDateContent('')
            setDescriptionContent('')
            navigate('/client/' + id)
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return (
        <form onSubmit={addAction}>
            <input type="text" name='type' placeholder='Type of contact' onChange={(e) => {setTypeContent(e.target.value)}} value={typeContent} /><br/>
            <input type="date" name='type' placeholder='Date of contact' onChange={(e) => {setDateContent(e.target.value)}} value={dateContent} /><br/>
            <textarea name="description" placeholder='Description' id="description" cols="30" rows="5" onChange={(e) => {setDescriptionContent(e.target.value)}} value={descriptionContent}></textarea><br/>
            <button className="btn">Add</button>
        </form>
    )
}

export default AddAction;