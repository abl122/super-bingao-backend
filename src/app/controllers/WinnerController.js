import Event from '../models/Event';
import Validated from '../models/Validated';

class WinnerController {
  async show(req, res) {
    const { number, event_name } = req.body;

    console.log(event_name);

    const { edition } = await Event.findOne({
      where: {
        name: event_name,
      },
    })

    const winner = await Validated.findOne({
      where: {
        codigo: number,
        edition: edition,
      },
    });

    if (!winner) {
      return res.status(204).json({ error: 'Number not found' });
    }

    return res.json(winner);
  }
}

export default new WinnerController();
