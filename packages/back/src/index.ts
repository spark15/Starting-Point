import Dotenv from '@/configs/dotenv';
import Express from '@/Express';

Dotenv.config(process.env.NODE_ENV);

const express = new Express(Dotenv.getFEURL());
express.start(Dotenv.getBEPORT());
