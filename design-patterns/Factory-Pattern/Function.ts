// Abstract Factory Pattern
(() => {
  interface Logger {
    info(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
    error(message: string): void;
  }

  const ProductionLogger = (): Logger => ({
    info(str: string): void {},
    debug(str: string): void {},
    warn(str: string): void {
      console.warn(str);
    },
    error(str: string): void {
      console.error(str);
    },
  });

  const DevelopmentLogger = (): Logger => ({
    info(str: string): void {
      console.info(str);
    },
    debug(str: string): void {
      console.debug(str);
    },
    warn(str: string): void {
      console.warn(str);
    },
    error(str: string): void {
      console.error(str);
    },
  });

  const getLogger = (): Logger =>
    (process.env.NODE_ENV === "production"
      ? ProductionLogger
      : DevelopmentLogger)();
})();
