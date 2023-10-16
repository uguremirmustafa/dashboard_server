import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import sessionConfig from '@/config/sessionConfig';
import passport from '@/api/auth/passport';
import * as middlewares from '@/lib/middlewares/middlewares';
import corsConfig from '@/config/corsConfig';
dotenv.config({ path: '../.env' });
// route imports
import authRoutes from '@/api/auth/auth.routes';
import linkRoutes from '@/api/link/link.routes';
import linkCategoryRoutes from '@/api/link_category/link_category.routes';
import imageRoutes from '@/api/image/image.routes';

const app = express();
// middlewares
const jsonParser = bodyParser.json();
app.use(cors(corsConfig));
app.use(jsonParser);

app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());

app.get('/api/welcome', (req, res) => res.json(process.env));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/api/auth', authRoutes);
app.use('/api/link-categories', linkCategoryRoutes);
app.use('/api/link', linkRoutes);
app.use('/api/image', imageRoutes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
