import { ErrorRequestHandler } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    return res.send('Something broke!');
};

export default ErrorHandler;
