import dotenv from 'dotenv';

dotenv.config();

const config = {
    PORT: process.env.PORT || 5001,
    MONGO_URI: process.env.MONGO_URI,
}

export default config;
