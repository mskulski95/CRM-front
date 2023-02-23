import { useNavigate } from 'react-router';
import './AppClient.css'

const AppClient = (props) => {

    const navigate = useNavigate();
    return (
        <div className="client">
            <div className="clientData">
                    <div className="name">Imię: {props.client.name}</div>
                    <div className="city">Miasto: {props.client.city}</div>
                    <div className="street">Ulica: {props.client.street}</div>
                    <div className="zipcode">Kod pocztowy: {props.client.zipCode}</div>
                    <div className="nip">NIP: {props.client.nip}</div>
                    <div className="tel">Numer Tel.: {props.client.tel}</div>
                    <button className='btn' onClick={()=>{navigate('/client/' + props.client._id)}}>Pokaż</button>
            </div>
        </div>
    );
}

export default AppClient;