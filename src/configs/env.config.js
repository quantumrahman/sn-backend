import 'dotenv/config';

const configure = {
    port: process.env.PORT,
    database_uri: process.env.DATABASE_URI,
    node_env: process.env.NODE_ENV,
    cors_origin: process.env.CORS_ORIGIN,
};

const config = Object.freeze(configure);

export default config;
