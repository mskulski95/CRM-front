import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import config from '../config';
import './Action.css';

const Action = ({ actions, getClient }) => {

    const navigate = useNavigate();
    const { id } = useParams()


    const deleteAction = (id) => {
        if (window.confirm('Do you wont to delete action?')) {
            axios
                .delete(config.api.url + '/action/delete/' + id)
                .then((req, res) => {
                    if (req.data.deleted) {
                        getClient()
                    }
                })
                .catch((err) => {
                    console.error(err);
                })
        }
    }

    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Type of contact</th>
                        <th>Date of contact</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {actions.map((action, index) => {
                        return (
                            <tr key={action._id}>
                                <td>
                                    {index}
                                </td>
                                <td>
                                    {action.type}
                                </td>
                                <td>
                                    {action.date.slice(0,10)}
                                </td>
                                <td>
                                    {action.description}
                                </td>
                                <td>
                                    <button onClick={() => { deleteAction(action._id) }} className="btn btn-delete">Delete</button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
            <button className="btn btn-add" onClick={() => { navigate('/client/' + id + '/action') }}>Add action</button>
        </div>
    )
}

export default Action;