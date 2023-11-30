
const logs = ['log', 'info', 'warn', 'error', 'trace'] as const
type LogType = typeof logs[number];

export type Logger = {[key in LogType]: (...args: any[]) => void};

export const getLogger = (prefix: string): Logger => {
  return logs.reduce((result: Partial<Logger> , logType: LogType ) => {
    const originalConsoleLog = console[logType];
    result[logType] = function () {
      originalConsoleLog.apply(console, [`[${prefix}]`, ...arguments]);
    };

    return result;
  }, {}) as Logger;
};
