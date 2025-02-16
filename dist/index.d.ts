import React from 'react';

declare function DebugBoard(): React.JSX.Element;

type LogType = "log" | "warn" | "error";
interface LogEntry {
    id: number;
    type: LogType;
    message: string;
    timestamp: string;
    stack?: string;
    componentName?: string;
}
declare function useDebugLogs(componentName?: string): {
    logs: LogEntry[];
    clearLogs: () => void;
};

type LogTypeAll = "all" | "log" | "warn" | "error";

export { DebugBoard, type LogEntry, type LogType, type LogTypeAll, useDebugLogs };
