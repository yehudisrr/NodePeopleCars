import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddPerson from './pages/AddPerson';
import AddCar from './pages/AddCar';
import DeleteCars from './pages/DeleteCars';

const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/addperson' component={AddPerson} />
            <Route exact path='/addcar/:personId' component={AddCar} />
            <Route exact path='/deletecars/:personId' component={DeleteCars} />
        </Layout>
    );
}

export default App;