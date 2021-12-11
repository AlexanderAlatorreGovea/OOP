// Abstract Factory Pattern

interface Logger {
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}

class ProductionLogger implements Logger {
  info(str: string): void {}
  debug(str: string): void {}
  warn(str: string): void {
    console.warn(str);
  }
  error(str: string): void {
    console.error(str);
  }
}

class DevelopmentLogger extends ProductionLogger {
  info(str: string): void {
    console.info(str);
  }
  debug(str: string): void {
    console.debug(str);
  }
  warn(str: string): void {
    console.warn(str);
  }
  error(str: string): void {
    console.error(str);
  }
}

class LoggerFactory {
  public static createLogger(): Logger {
    if (process.env.NODE_ENV === "production") {
      return new ProductionLogger();
    } else {
      return new DevelopmentLogger();
    }
  }
}
