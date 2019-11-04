const Controller = require("./Controller");

class EventsController {
  constructor(Service) {
    this.service = Service;
  }

  async eventEventIdGET(request, response) {
    await Controller.handleRequest(
      request,
      response,
      this.service.eventEventIdGET
    );
  }

  async eventsGET(request, response) {
    await Controller.handleRequest(request, response, this.service.eventsGET);
  }
}

module.exports = EventsController;
