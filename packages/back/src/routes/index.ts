import { Router, RequestHandler } from 'express';
import TryCatch from 'TryCatch';

const router = Router();

const healthCheck: RequestHandler = async (_, res) => {
    return res.send('Server is running');
};
router.get('/check', TryCatch(healthCheck));

export default router;
