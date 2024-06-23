/* eslint-disable @typescript-eslint/ban-types */
import { RequestHandler } from "express";

const TryCatch =
    (fn: Function): RequestHandler =>
    async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };

export default TryCatch;
