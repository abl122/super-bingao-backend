import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { password } = req.body;

    const user = await User.findOne({
      where: {
        login: req.body.login,
      },
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, login, name, edition } = user;

    return res.json({
      user: {
        id,
        login,
        name,
        edition,
      },
      token: jwt.sign({ id }, '4d8d66bfdfc5db478c45662f98eb685c', {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
