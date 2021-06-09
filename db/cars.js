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

const addCar = async car => {
    await knex('cars').insert(car);
}

const getCars = async id => {
    return await knex('cars').where('personId', id);
}

const deleteCars = async ({personId}) => {
    await knex('cars').where('personId', personId).del();
}
module.exports = {
    addCar,
    deleteCars,
    getCars
}