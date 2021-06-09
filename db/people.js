const knex = require('knex')({
    client: 'mssql',
    connection: {
        server: 'localhost',
        user: 'db_user',
        password: 'Healing613',
        database: 'PeopleCars',
        options: {
            port: 1433,
            instanceName: 'SQLEXPRESS'
        }
    }
});

const groupByPerson = dbResults => {
    const people = [];
    dbResults.forEach(result => {
        let person = people.find(p => p.id === result.personId);
        if(!person) {
            person = {id: result.id[0], firstName: result.firstName, lastName: result.lastName, age: result.age, cars: []};
            people.push(person);
        }

        person.cars.push({id: result.id[1], make: result.make, model: result.model, year: result.year});
    
    });

    return people;
}

const addPerson = async person => {
    await knex('people').insert(person);
}

const getPeople = async () => {
    const dbResults = await knex.from('people')
    .leftJoin('cars', 'people.Id', 'cars.PersonId')
    .select('*');

    return groupByPerson(dbResults);
}

const getPersonById = async id => {
    return await knex('people').where('id', id).first('firstName', 'lastName');
}

module.exports = {
    addPerson,
    getPeople,
    getPersonById
}