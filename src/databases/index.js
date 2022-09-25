const mongoose = require('mongoose');
const logger = require('../loggers');
mongoose.Promise = global.Promise;

async function connectToDatabase(){
    try{
        const user = process.env.DB_USER;
        const password = process.env.DB_PASS;
        const host = process.env.DB_HOST;
        const port = process.env.DB_PORT;
        const dbName = process.env.DB_NAME;
        const rs = process.env.DB_REPLICA_SET;

        const connectionString = 'mongodb://'+host+':'+port+"/?authSource=admin?replicaSet="+rs;
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            serverSelectionTimeoutMS: 500,
            dbName: 'operation-survey',
        });
        logger.info('connected to database');
    } catch (e) {
        logger.error(e);
    }
}

module.exports = connectToDatabase;