/* eslint-disable no-unused-vars */
const Service = require("./Service");

class EventsService {
  /**
   * Get a single Event
   *
   * eventId String
   * returns Event
   **/
  static eventEventIdGET({ eventId }) {
    return new Promise(async resolve => {
      try {
        resolve(Service.successResponse(""));
      } catch (e) {
        resolve(
          Service.rejectResponse(e.message || "Invalid input", e.status || 405)
        );
      }
    });
  }

  /**
   * Get a list of events
   *
   * returns List
   **/
  static eventsGET() {
    return new Promise(async resolve => {
      try {
        resolve(Service.successResponse(""));
      } catch (e) {
        resolve(
          Service.rejectResponse(e.message || "Invalid input", e.status || 405)
        );
      }
    });
  }
}

module.exports = EventsService;
