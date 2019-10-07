const Spot = require("../models/Spot");

module.exports = {
  async show(request, response) {
    const spots = await Spot.find({ user: request.headers.user_id });

    return response.json(spots);
  }
};
