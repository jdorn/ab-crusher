/* eslint-disable no-unused-vars */
const Service = require("./Service");

class InsightsService {
  /**
   * Delete a Insight
   *
   * insightId String
   * no response value expected for this operation
   **/
  static insightInsightIdDELETE({ insightId }) {
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
   * Return data for a single Insight
   *
   * insightId String
   * returns Insight
   **/
  static insightInsightIdGET({ insightId }) {
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
   * Update a Insight
   *
   * insightId String
   * insight Insight
   * returns Insight
   **/
  static insightInsightIdPUT({ insightId, insight }) {
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
   * Returns a list of insights
   *
   * returns List
   **/
  static insightsGET() {
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
   * Create a new Insight
   *
   * insight Insight
   * returns Insight
   **/
  static insightsPOST({ insight }) {
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

module.exports = InsightsService;
