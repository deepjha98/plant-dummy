const plantsData = require("../../data");

module.exports = function (request, response) {
  try {
    if (!request.body) {
      response.status(403).send({});
    } else {
      response.status(200).json(plantsData);
    }
  } catch (error) {
    response.status(500).send({ error });
  }
};
