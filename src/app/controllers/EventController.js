import Event from '../models/Event';
import Validated from '../models/Validated';

class EventController {
  async index(req, res) {
    const events = await Event.findAll();

    if (!events) {
      return res.json([]);
    }

    return res.json(events);
  }

  async store(req, res) {
    const {
      edition,
      name,
      initial_lot,
      initial_card,
      event_beginning,
      card_price
    } = req.body;

    const event = await Event.create({
      edition,
      name,
      initial_lot,
      initial_card,
      event_beginning,
      is_active: true,
      card_price,
    });

    return res.json(event);
  }

  async show(req, res) {
    const { event_id } = req.query;

    const event = await Event.findByPk(event_id);

    if (!event) {
      return res.status(400).json({ message: 'No events found' });
    }

    const selled_amount = await Validated.count({
      where: {
        edition: event.edition,
      },
    });

    return res.json({
      ...event.dataValues,
      selled_amount: selled_amount,
    });
  }
}

export default new EventController();
