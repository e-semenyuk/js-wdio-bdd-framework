class Logger {
  private prefix: string;

  constructor(prefix: string = "TestFramework") {
    this.prefix = prefix;
  }

  info(message: string): void {
    console.log(`[${this.prefix}] INFO: ${message}`);
  }

  warn(message: string): void {
    console.warn(`[${this.prefix}] WARN: ${message}`);
  }

  error(message: string): void {
    console.error(`[${this.prefix}] ERROR: ${message}`);
  }

  debug(message: string): void {
    if (process.env.DEBUG) {
      console.log(`[${this.prefix}] DEBUG: ${message}`);
    }
  }
}

export default Logger; 