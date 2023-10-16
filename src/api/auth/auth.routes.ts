import express from 'express';
import passport from 'passport';
import * as AuthController from './auth.controller';
import { validateRegisterBody } from './auth.validations';
import isAuth from './isAuth.middleware';

const router = express.Router();

router.post('/login', passport.authenticate('local'), AuthController.loginHandler);
router.post('/register', validateRegisterBody, AuthController.registerHandler);

router.get('/profile', isAuth, async (req, res) => {
  res.status(200).json(req.user);
});

router.post('/logout', isAuth, async (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: 'logged out', data: true });
  });
});

export default router;
