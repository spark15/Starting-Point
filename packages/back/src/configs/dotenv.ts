import dotenv from 'dotenv';

function init(node_env: string = 'development') {
    if (node_env === 'production') {
        dotenv.config({ path: 'configs/.prod.env' });
    } else if (node_env === 'test') {
        dotenv.config({ path: 'configs/.test.env' });
    } else {
        dotenv.config({ path: 'configs/.dev.env' });
    }
}

class Dotenv {
    static config(node_env: string = 'development') {
        console.log('Server Environment is running on:', node_env);
        init(node_env);
    }

    static getFEURL(): string {
        return process.env.FE_URL || '';
    }

    static getBEPORT(): number {
        return Number(process.env.BE_PORT);
    }
}

export default Dotenv;
