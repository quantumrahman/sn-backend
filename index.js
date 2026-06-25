import app from './src/app.js';
import dbConnection from './src/database/databaseConnect.js';
import config from './src/configs/env.config.js';

const serverStart = async () => {
    try {
        await dbConnection();

        const port = config.port;

        app.listen(port, () => {
            console.log(`server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.log('server running error', error.message);
    }
};

serverStart();
