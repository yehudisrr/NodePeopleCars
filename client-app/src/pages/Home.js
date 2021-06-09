import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        const getPeople = async () => {
            const { data } = await axios.get('/api/getpeople');
            setPeople(data);
        }

        getPeople();
    }, []);

    return (
            <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
                
                <div className="row mt-5">
                    <div className="col-md-12" style={{ marginBottom: 20 }}>
                        <Link to='/addperson' style={{ textDecoration: 'none' }}>
                            <button className='btn btn-success btn-lg btn-block'>Add Person</button>
                        </Link>
                    </div>
                </div>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars</th>
                        </tr>
                    </thead>
                    <tbody>
                    {people.map(p => <tr key={p.id}>
                        <td>{p.firstName}</td>
                        <td>{p.lastName}</td>
                        <td>{p.age}</td>
                        <td>{p.cars[0].make ? p.cars.length : 0}</td>
                        <td>
                            <Link to={`/addcar/${p.id}`}>
                                <button className='btn btn-primary'>Add Car</button>
                            </Link>
                        </td>
                        <td>
                            <Link to={`/deletecars/${p.id}`}>
                                <button className='btn btn-danger'>Delete Cars</button>
                            </Link>
                        </td>
                    </tr>)}
                </tbody>
                </table>
            </div>
        );
}

export default Home;