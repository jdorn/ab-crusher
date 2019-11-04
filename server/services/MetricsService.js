/* eslint-disable no-unused-vars */
const Service = require("./Service");

class MetricsService {
  /**
   * Delete a Metric
   *
   * metricId String
   * no response value expected for this operation
   **/
  static metricMetricIdDELETE({ metricId }) {
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
   * Return data for a single Metric
   *
   * metricId String
   * returns Metric
   **/
  static metricMetricIdGET({ metricId }) {
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
   * Update a Metric
   *
   * metricId String
   * metric Metric
   * returns Metric
   **/
  static metricMetricIdPUT({ metricId, metric }) {
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
   * Returns a list of metrics
   *
   * returns List
   **/
  static metricsGET() {
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
   * Create a new Metric
   *
   * metric Metric
   * returns Metric
   **/
  static metricsPOST({ metric }) {
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

module.exports = MetricsService;
