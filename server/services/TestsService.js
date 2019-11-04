/* eslint-disable no-unused-vars */
const Service = require("./Service");

class TestsService {
  /**
   * Delete a Test
   *
   * testId String
   * no response value expected for this operation
   **/
  static testTestIdDELETE({ testId }) {
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
   * Return data for a single Test
   *
   * testId String
   * returns Test
   **/
  static testTestIdGET({ testId }) {
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
   * Update a Test
   *
   * testId String
   * test Test
   * returns Test
   **/
  static testTestIdPUT({ testId, test }) {
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
   * Return data snapshots for a test
   *
   * testId String
   * returns List
   **/
  static testTestIdSnapshotsGET({ testId }) {
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
   * Create a new snapshot for a test
   *
   * testId String
   * returns Snapshot
   **/
  static testTestIdSnapshotsPOST({ testId }) {
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
   * Returns a list of current and past tests
   *
   * returns List
   **/
  static testsGET() {
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
   * Create a new Test
   *
   * test Test
   * returns Test
   **/
  static testsPOST({ test }) {
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

module.exports = TestsService;
