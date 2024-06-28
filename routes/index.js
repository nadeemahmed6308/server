import express from 'express';
import products from './products.js';
import productids from './productids.js';
import users from './users.js';
import userinfos from './userinfos.js';

const router = express.Router();

router.use('/products', products);
router.use('/productids', productids);
router.use('/users', users);
router.use('/userinfos', userinfos);

export default router;