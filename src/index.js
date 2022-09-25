const express = require('express');
const connectToDatabase = require('./databases');
const logger = require('./loggers');
const routes = require('./routes');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8004;

async function startServer(){
    //

    await connectToDatabase();

    app.use(express.json());
    
    app.use(cors());

    app.use((err, req, res, next) => {
        logger.error(err.stack);
        res.status(err.statusCode || 500)
            .send({error: err.message});
    })

    app.use('/api', routes)

    app.listen(port, () => {
        logger.info('server listening at http://localhost:'+port);
    });
}

module.exports = startServer;