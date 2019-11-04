const Controller = require('./Controller');

class InsightsController {
  constructor(Service) {
    this.service = Service;
  }

  async insightInsightIdDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.insightInsightIdDELETE);
  }

  async insightInsightIdGET(request, response) {
    await Controller.handleRequest(request, response, this.service.insightInsightIdGET);
  }

  async insightInsightIdPUT(request, response) {
    await Controller.handleRequest(request, response, this.service.insightInsightIdPUT);
  }

  async insightsGET(request, response) {
    await Controller.handleRequest(request, response, this.service.insightsGET);
  }

  async insightsPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.insightsPOST);
  }

}

module.exports = InsightsController;
