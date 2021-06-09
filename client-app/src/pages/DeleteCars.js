import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';

const DeleteCars = () => {
    const [cars, setCars] = useState([]);
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        const getCars = async () => {
            const { personId } = params;
            const { data } = await axios.get(`/api/getcars?id=${personId}`);
            setCars(data);
        }

        getCars();
    }, []);

    const onDeleteAllClick = async () => {
        const { personId } = params;
        await axios.post('/api/deletecars', { personId } );
        history.push('/');
    }

    return (
        <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
         
            <div className="row mt-5">
                <div className="col-md-12">
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cars.map(c => <tr key={c.id}>
                        <td>{c.make}</td>
                        <td>{c.model}</td>
                        <td>{c.year}</td>                  
                    </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Are you sure you want to delete all of these cars?</h3>
                </div>
                <div className="col-md-6" style={{ marginTop: 20 }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <button className='btn btn-primary btn-lg btn-block'>No</button>
                    </Link>
                </div>
                <div className="col-md-6" style={{ marginTop: 20 }}>
                    <button onClick={onDeleteAllClick} className='btn btn-danger btn-lg btn-block'>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCars;