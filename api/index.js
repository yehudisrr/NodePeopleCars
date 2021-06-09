const router = require('express').Router();
const peopleDb = require('../db/people');
const carsDb = require('../db/cars');

router.post('/addperson', async (req, res) => {
    const { person } = req.body;
    await peopleDb.addPerson(person);
    res.json({ status: 'ok' });
});

router.get('/getpeople', async (req, res) => {
    const people = await peopleDb.getPeople();
    res.json(people);
});

router.get('/getperson', async (req, res) => {
    const person = await peopleDb.getPersonById(req.query.id);
    res.json(person);
});

router.post('/addcar', async (req, res) => {
    await carsDb.addCar(req.body);
    res.json({ status: 'ok' });
});

router.post('/deletecars', async (req, res) => {
    await carsDb.deleteCars(req.body);
    res.json({ status: 'ok' });
});

router.get('/getcars', async (req, res) => {
    const cars = await carsDb.getCars(req.query.id);
    res.json(cars);
});

module.exports = router;