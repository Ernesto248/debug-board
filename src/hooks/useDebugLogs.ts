import { useState, useEffect, useCallback } from "react";

export type LogType = "log" | "warn" | "error";

export interface LogEntry {
  id: number;
  type: LogType;
  message: string;
  timestamp: string;
  stack?: string;
  componentName?: string;
}

const MAX_LOGS = 1000;

const formatMessage = (args: any[]): string => {
  return args
    .map((arg) => {
      if (typeof arg === "object") {
        try {
          return JSON.stringify(arg, null, 2);
        } catch (error) {
          return String(arg);
        }
      }
      return String(arg);
    })
    .join(" ");
};

const createConsoleInterceptor = (
  originalMethod: Function,
  type: LogType,
  handleLog: (type: LogType, message: string, stack?: string) => void
) => {
  return function (...args: any[]) {
    const stack = new Error().stack?.split("\n").slice(2).join("\n");
    handleLog(type, formatMessage(args), stack);
    originalMethod.apply(console, args);
  };
};

export function useDebugLogs(componentName?: string) {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const clearLogs = useCallback(() => {
    setLogs([]);
  }, []);

  const addLog = useCallback(
    (type: LogType, message: string, stack?: string) => {
      const newLog: LogEntry = {
        id: Date.now(),
        type,
        message,
        timestamp: new Date().toISOString(),
        stack,
        componentName,
      };

      setLogs((prevLogs) => {
        const updatedLogs = [newLog, ...prevLogs];
        return updatedLogs.slice(0, MAX_LOGS); // Keep only the last MAX_LOGS entries from the start
      });
    },
    [componentName]
  );

  useEffect(() => {
    const originalConsole = {
      log: console.log,
      warn: console.warn,
      error: console.error,
    };

    // Interceptar los métodos de console
    console.log = createConsoleInterceptor(originalConsole.log, "log", addLog);
    console.warn = createConsoleInterceptor(
      originalConsole.warn,
      "warn",
      addLog
    );
    console.error = createConsoleInterceptor(
      originalConsole.error,
      "error",
      addLog
    );

    return () => {
      console.log = originalConsole.log;
      console.warn = originalConsole.warn;
      console.error = originalConsole.error;
    };
  }, [addLog]);

  return {
    logs,
    clearLogs,
  };
}
