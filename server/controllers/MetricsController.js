const Controller = require('./Controller');

class MetricsController {
  constructor(Service) {
    this.service = Service;
  }

  async metricMetricIdDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.metricMetricIdDELETE);
  }

  async metricMetricIdGET(request, response) {
    await Controller.handleRequest(request, response, this.service.metricMetricIdGET);
  }

  async metricMetricIdPUT(request, response) {
    await Controller.handleRequest(request, response, this.service.metricMetricIdPUT);
  }

  async metricsGET(request, response) {
    await Controller.handleRequest(request, response, this.service.metricsGET);
  }

  async metricsPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.metricsPOST);
  }

}

module.exports = MetricsController;
