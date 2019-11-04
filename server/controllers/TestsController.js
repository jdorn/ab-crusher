const Controller = require('./Controller');

class TestsController {
  constructor(Service) {
    this.service = Service;
  }

  async testTestIdDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.testTestIdDELETE);
  }

  async testTestIdGET(request, response) {
    await Controller.handleRequest(request, response, this.service.testTestIdGET);
  }

  async testTestIdPUT(request, response) {
    await Controller.handleRequest(request, response, this.service.testTestIdPUT);
  }

  async testTestIdSnapshotsGET(request, response) {
    await Controller.handleRequest(request, response, this.service.testTestIdSnapshotsGET);
  }

  async testTestIdSnapshotsPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.testTestIdSnapshotsPOST);
  }

  async testsGET(request, response) {
    await Controller.handleRequest(request, response, this.service.testsGET);
  }

  async testsPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.testsPOST);
  }

}

module.exports = TestsController;
