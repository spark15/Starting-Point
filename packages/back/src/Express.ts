import express from 'express';
import cors from 'cors';
import routes from '@/routes';
import ErrorHandler from '@/middlewares/ErrorHandler';

class Express {
    private app: express.Application;

    constructor(FE_URL: string) {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(
            cors({
                origin: FE_URL,
                methods: ['GET', 'POST', 'PUT', 'DELETE'],
                allowedHeaders: ['Content-Type', 'Authorization'],
                credentials: true,
            }),
        );
        this.app.use(routes);
        this.app.use(ErrorHandler);
    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}

export default Express;
