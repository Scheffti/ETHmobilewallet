const config = require('config');
const authHelper = require('../helpers/auth_helper');
const createError = require('http-errors');

const User = require('../models/user');


exports.authenticateUser = (req, res, next) => {

  User.findOne().or([{ username: req.body.username }, { email: req.body.username }]).select({ password: 1, permission: 1 }).exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({ status: 'false', message: 'Username or Email does not exist' });
      }
      if (!user.password) {
        return res.status(401).json({ status: 'false', message: 'No Password set yet. Click on Forgot Password to create one' });
      }
      if (!user.comparePassword(req.body.password)) {
        // if (!authHelper.comparePassword(req.body.password, user.password)) {
        return res.status(401).json({ status: 'false', message: 'wrong password' });
      }
      const { token, expiresIn } = authHelper.encodeToken(user, config.jwt.expiration);
      if (!token) {
        return res.status(401).json({ status: 'false', message: 'Token has expired' });
      }

      return res.status(200).json({
        status: 'success',
        permission: user.permission,
        token,
        expiresIn,
        userId: user.id,
      });
    })
    .catch(err => next(err));
};
