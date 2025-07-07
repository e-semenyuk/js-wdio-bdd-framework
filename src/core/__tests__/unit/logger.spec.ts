import { expect } from "chai";
import Logger from "../../../utils/logger";

describe("Logger", () => {
  let logger: Logger;
  let consoleSpy: any;

  beforeEach(() => {
    logger = new Logger("TestLogger");
    consoleSpy = {
      log: console.log,
      warn: console.warn,
      error: console.error
    };
  });

  afterEach(() => {
    console.log = consoleSpy.log;
    console.warn = consoleSpy.warn;
    console.error = consoleSpy.error;
  });

  it("should log info messages with prefix", () => {
    const logSpy = chai.spy.on(console, "log");
    logger.info("Test message");
    expect(logSpy).to.have.been.called.with("[TestLogger] INFO: Test message");
  });

  it("should log warning messages with prefix", () => {
    const warnSpy = chai.spy.on(console, "warn");
    logger.warn("Warning message");
    expect(warnSpy).to.have.been.called.with("[TestLogger] WARN: Warning message");
  });

  it("should log error messages with prefix", () => {
    const errorSpy = chai.spy.on(console, "error");
    logger.error("Error message");
    expect(errorSpy).to.have.been.called.with("[TestLogger] ERROR: Error message");
  });

  it("should not log debug messages when DEBUG is not set", () => {
    const logSpy = chai.spy.on(console, "log");
    logger.debug("Debug message");
    expect(logSpy).to.not.have.been.called();
  });

  it("should log debug messages when DEBUG is set", () => {
    process.env.DEBUG = "true";
    const logSpy = chai.spy.on(console, "log");
    logger.debug("Debug message");
    expect(logSpy).to.have.been.called.with("[TestLogger] DEBUG: Debug message");
    delete process.env.DEBUG;
  });
}); 