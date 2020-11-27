import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: {
        login: req.body.login,
      }
    });

    if (userExists) {
      return res.status(400).json({ message: 'This login is not available' });
    }

    const { id, login, name, event_id } = await User.create({
      login: req.body.login,
      password: req.body.password,
      name: req.body.name,
      event_id: req.body.event_id,
    });

    return res.json({
      id,
      login,
      name,
      event_id,
    });
  }
}

export default new UserController();
